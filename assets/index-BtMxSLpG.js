(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))u(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const y of m.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&u(y)}).observe(document,{childList:!0,subtree:!0});function c(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(d){if(d.ep)return;d.ep=!0;const m=c(d);fetch(d.href,m)}})();function z0(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Ac={exports:{}},si={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function W1(){if(Dm)return si;Dm=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function c(u,d,m){var y=null;if(m!==void 0&&(y=""+m),d.key!==void 0&&(y=""+d.key),"key"in d){m={};for(var b in d)b!=="key"&&(m[b]=d[b])}else m=d;return d=m.ref,{$$typeof:l,type:u,key:y,ref:d!==void 0?d:null,props:m}}return si.Fragment=o,si.jsx=c,si.jsxs=c,si}var Nm;function P1(){return Nm||(Nm=1,Ac.exports=W1()),Ac.exports}var s=P1(),Dc={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function ey(){if(Um)return re;Um=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),y=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),T=Symbol.iterator;function M(E){return E===null||typeof E!="object"?null:(E=T&&E[T]||E["@@iterator"],typeof E=="function"?E:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,G={};function $(E,k,Q){this.props=E,this.context=k,this.refs=G,this.updater=Q||C}$.prototype.isReactComponent={},$.prototype.setState=function(E,k){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,k,"setState")},$.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function L(){}L.prototype=$.prototype;function q(E,k,Q){this.props=E,this.context=k,this.refs=G,this.updater=Q||C}var X=q.prototype=new L;X.constructor=q,_(X,$.prototype),X.isPureReactComponent=!0;var I=Array.isArray,Y={H:null,A:null,T:null,S:null,V:null},ee=Object.prototype.hasOwnProperty;function W(E,k,Q,Z,P,fe){return Q=fe.ref,{$$typeof:l,type:E,key:k,ref:Q!==void 0?Q:null,props:fe}}function De(E,k){return W(E.type,k,void 0,void 0,void 0,E.props)}function Te(E){return typeof E=="object"&&E!==null&&E.$$typeof===l}function it(E){var k={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(Q){return k[Q]})}var ot=/\/+/g;function Ye(E,k){return typeof E=="object"&&E!==null&&E.key!=null?it(""+E.key):k.toString(36)}function Jt(){}function Wt(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(Jt,Jt):(E.status="pending",E.then(function(k){E.status==="pending"&&(E.status="fulfilled",E.value=k)},function(k){E.status==="pending"&&(E.status="rejected",E.reason=k)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function Xe(E,k,Q,Z,P){var fe=typeof E;(fe==="undefined"||fe==="boolean")&&(E=null);var ae=!1;if(E===null)ae=!0;else switch(fe){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(E.$$typeof){case l:case o:ae=!0;break;case j:return ae=E._init,Xe(ae(E._payload),k,Q,Z,P)}}if(ae)return P=P(E),ae=Z===""?"."+Ye(E,0):Z,I(P)?(Q="",ae!=null&&(Q=ae.replace(ot,"$&/")+"/"),Xe(P,k,Q,"",function(tt){return tt})):P!=null&&(Te(P)&&(P=De(P,Q+(P.key==null||E&&E.key===P.key?"":(""+P.key).replace(ot,"$&/")+"/")+ae)),k.push(P)),1;ae=0;var Qe=Z===""?".":Z+":";if(I(E))for(var xe=0;xe<E.length;xe++)Z=E[xe],fe=Qe+Ye(Z,xe),ae+=Xe(Z,k,Q,fe,P);else if(xe=M(E),typeof xe=="function")for(E=xe.call(E),xe=0;!(Z=E.next()).done;)Z=Z.value,fe=Qe+Ye(Z,xe++),ae+=Xe(Z,k,Q,fe,P);else if(fe==="object"){if(typeof E.then=="function")return Xe(Wt(E),k,Q,Z,P);throw k=String(E),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return ae}function z(E,k,Q){if(E==null)return E;var Z=[],P=0;return Xe(E,Z,"","",function(fe){return k.call(Q,fe,P++)}),Z}function V(E){if(E._status===-1){var k=E._result;k=k(),k.then(function(Q){(E._status===0||E._status===-1)&&(E._status=1,E._result=Q)},function(Q){(E._status===0||E._status===-1)&&(E._status=2,E._result=Q)}),E._status===-1&&(E._status=0,E._result=k)}if(E._status===1)return E._result.default;throw E._result}var te=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function se(){}return re.Children={map:z,forEach:function(E,k,Q){z(E,function(){k.apply(this,arguments)},Q)},count:function(E){var k=0;return z(E,function(){k++}),k},toArray:function(E){return z(E,function(k){return k})||[]},only:function(E){if(!Te(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},re.Component=$,re.Fragment=c,re.Profiler=d,re.PureComponent=q,re.StrictMode=u,re.Suspense=g,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,re.__COMPILER_RUNTIME={__proto__:null,c:function(E){return Y.H.useMemoCache(E)}},re.cache=function(E){return function(){return E.apply(null,arguments)}},re.cloneElement=function(E,k,Q){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var Z=_({},E.props),P=E.key,fe=void 0;if(k!=null)for(ae in k.ref!==void 0&&(fe=void 0),k.key!==void 0&&(P=""+k.key),k)!ee.call(k,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&k.ref===void 0||(Z[ae]=k[ae]);var ae=arguments.length-2;if(ae===1)Z.children=Q;else if(1<ae){for(var Qe=Array(ae),xe=0;xe<ae;xe++)Qe[xe]=arguments[xe+2];Z.children=Qe}return W(E.type,P,void 0,void 0,fe,Z)},re.createContext=function(E){return E={$$typeof:y,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:m,_context:E},E},re.createElement=function(E,k,Q){var Z,P={},fe=null;if(k!=null)for(Z in k.key!==void 0&&(fe=""+k.key),k)ee.call(k,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(P[Z]=k[Z]);var ae=arguments.length-2;if(ae===1)P.children=Q;else if(1<ae){for(var Qe=Array(ae),xe=0;xe<ae;xe++)Qe[xe]=arguments[xe+2];P.children=Qe}if(E&&E.defaultProps)for(Z in ae=E.defaultProps,ae)P[Z]===void 0&&(P[Z]=ae[Z]);return W(E,fe,void 0,void 0,null,P)},re.createRef=function(){return{current:null}},re.forwardRef=function(E){return{$$typeof:b,render:E}},re.isValidElement=Te,re.lazy=function(E){return{$$typeof:j,_payload:{_status:-1,_result:E},_init:V}},re.memo=function(E,k){return{$$typeof:h,type:E,compare:k===void 0?null:k}},re.startTransition=function(E){var k=Y.T,Q={};Y.T=Q;try{var Z=E(),P=Y.S;P!==null&&P(Q,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(se,te)}catch(fe){te(fe)}finally{Y.T=k}},re.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},re.use=function(E){return Y.H.use(E)},re.useActionState=function(E,k,Q){return Y.H.useActionState(E,k,Q)},re.useCallback=function(E,k){return Y.H.useCallback(E,k)},re.useContext=function(E){return Y.H.useContext(E)},re.useDebugValue=function(){},re.useDeferredValue=function(E,k){return Y.H.useDeferredValue(E,k)},re.useEffect=function(E,k,Q){var Z=Y.H;if(typeof Q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Z.useEffect(E,k)},re.useId=function(){return Y.H.useId()},re.useImperativeHandle=function(E,k,Q){return Y.H.useImperativeHandle(E,k,Q)},re.useInsertionEffect=function(E,k){return Y.H.useInsertionEffect(E,k)},re.useLayoutEffect=function(E,k){return Y.H.useLayoutEffect(E,k)},re.useMemo=function(E,k){return Y.H.useMemo(E,k)},re.useOptimistic=function(E,k){return Y.H.useOptimistic(E,k)},re.useReducer=function(E,k,Q){return Y.H.useReducer(E,k,Q)},re.useRef=function(E){return Y.H.useRef(E)},re.useState=function(E){return Y.H.useState(E)},re.useSyncExternalStore=function(E,k,Q){return Y.H.useSyncExternalStore(E,k,Q)},re.useTransition=function(){return Y.H.useTransition()},re.version="19.1.1",re}var Mm;function fs(){return Mm||(Mm=1,Dc.exports=ey()),Dc.exports}var U=fs();const ge=z0(U);/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Cm="popstate";function ty(l={}){function o(u,d){let{pathname:m,search:y,hash:b}=u.location;return Wc("",{pathname:m,search:y,hash:b},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function c(u,d){return typeof d=="string"?d:hi(d)}return ay(o,c,null,l)}function Ce(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function $t(l,o){if(!l){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function ny(){return Math.random().toString(36).substring(2,10)}function zm(l,o){return{usr:l.state,key:l.key,idx:o}}function Wc(l,o,c=null,u){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof o=="string"?ol(o):o,state:c,key:o&&o.key||u||ny()}}function hi({pathname:l="/",search:o="",hash:c=""}){return o&&o!=="?"&&(l+=o.charAt(0)==="?"?o:"?"+o),c&&c!=="#"&&(l+=c.charAt(0)==="#"?c:"#"+c),l}function ol(l){let o={};if(l){let c=l.indexOf("#");c>=0&&(o.hash=l.substring(c),l=l.substring(0,c));let u=l.indexOf("?");u>=0&&(o.search=l.substring(u),l=l.substring(0,u)),l&&(o.pathname=l)}return o}function ay(l,o,c,u={}){let{window:d=document.defaultView,v5Compat:m=!1}=u,y=d.history,b="POP",g=null,h=j();h==null&&(h=0,y.replaceState({...y.state,idx:h},""));function j(){return(y.state||{idx:null}).idx}function T(){b="POP";let $=j(),L=$==null?null:$-h;h=$,g&&g({action:b,location:G.location,delta:L})}function M($,L){b="PUSH";let q=Wc(G.location,$,L);h=j()+1;let X=zm(q,h),I=G.createHref(q);try{y.pushState(X,"",I)}catch(Y){if(Y instanceof DOMException&&Y.name==="DataCloneError")throw Y;d.location.assign(I)}m&&g&&g({action:b,location:G.location,delta:1})}function C($,L){b="REPLACE";let q=Wc(G.location,$,L);h=j();let X=zm(q,h),I=G.createHref(q);y.replaceState(X,"",I),m&&g&&g({action:b,location:G.location,delta:0})}function _($){return ly($)}let G={get action(){return b},get location(){return l(d,y)},listen($){if(g)throw new Error("A history only accepts one active listener");return d.addEventListener(Cm,T),g=$,()=>{d.removeEventListener(Cm,T),g=null}},createHref($){return o(d,$)},createURL:_,encodeLocation($){let L=_($);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:M,replace:C,go($){return y.go($)}};return G}function ly(l,o=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Ce(c,"No window.location.(origin|href) available to create URL");let u=typeof l=="string"?l:hi(l);return u=u.replace(/ $/,"%20"),!o&&u.startsWith("//")&&(u=c+u),new URL(u,c)}function O0(l,o,c="/"){return iy(l,o,c,!1)}function iy(l,o,c,u){let d=typeof o=="string"?ol(o):o,m=bn(d.pathname||"/",c);if(m==null)return null;let y=_0(l);ry(y);let b=null;for(let g=0;b==null&&g<y.length;++g){let h=yy(m);b=gy(y[g],h,u)}return b}function _0(l,o=[],c=[],u="",d=!1){let m=(y,b,g=d,h)=>{let j={relativePath:h===void 0?y.path||"":h,caseSensitive:y.caseSensitive===!0,childrenIndex:b,route:y};if(j.relativePath.startsWith("/")){if(!j.relativePath.startsWith(u)&&g)return;Ce(j.relativePath.startsWith(u),`Absolute route path "${j.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),j.relativePath=j.relativePath.slice(u.length)}let T=xn([u,j.relativePath]),M=c.concat(j);y.children&&y.children.length>0&&(Ce(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),_0(y.children,o,M,T,g)),!(y.path==null&&!y.index)&&o.push({path:T,score:py(T,y.index),routesMeta:M})};return l.forEach((y,b)=>{if(y.path===""||!y.path?.includes("?"))m(y,b);else for(let g of K0(y.path))m(y,b,!0,g)}),o}function K0(l){let o=l.split("/");if(o.length===0)return[];let[c,...u]=o,d=c.endsWith("?"),m=c.replace(/\?$/,"");if(u.length===0)return d?[m,""]:[m];let y=K0(u.join("/")),b=[];return b.push(...y.map(g=>g===""?m:[m,g].join("/"))),d&&b.push(...y),b.map(g=>l.startsWith("/")&&g===""?"/":g)}function ry(l){l.sort((o,c)=>o.score!==c.score?c.score-o.score:my(o.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}var oy=/^:[\w-]+$/,uy=3,cy=2,sy=1,fy=10,dy=-2,Om=l=>l==="*";function py(l,o){let c=l.split("/"),u=c.length;return c.some(Om)&&(u+=dy),o&&(u+=cy),c.filter(d=>!Om(d)).reduce((d,m)=>d+(oy.test(m)?uy:m===""?sy:fy),u)}function my(l,o){return l.length===o.length&&l.slice(0,-1).every((u,d)=>u===o[d])?l[l.length-1]-o[o.length-1]:0}function gy(l,o,c=!1){let{routesMeta:u}=l,d={},m="/",y=[];for(let b=0;b<u.length;++b){let g=u[b],h=b===u.length-1,j=m==="/"?o:o.slice(m.length)||"/",T=Wr({path:g.relativePath,caseSensitive:g.caseSensitive,end:h},j),M=g.route;if(!T&&h&&c&&!u[u.length-1].route.index&&(T=Wr({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},j)),!T)return null;Object.assign(d,T.params),y.push({params:d,pathname:xn([m,T.pathname]),pathnameBase:jy(xn([m,T.pathnameBase])),route:M}),T.pathnameBase!=="/"&&(m=xn([m,T.pathnameBase]))}return y}function Wr(l,o){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[c,u]=hy(l.path,l.caseSensitive,l.end),d=o.match(c);if(!d)return null;let m=d[0],y=m.replace(/(.)\/+$/,"$1"),b=d.slice(1);return{params:u.reduce((h,{paramName:j,isOptional:T},M)=>{if(j==="*"){let _=b[M]||"";y=m.slice(0,m.length-_.length).replace(/(.)\/+$/,"$1")}const C=b[M];return T&&!C?h[j]=void 0:h[j]=(C||"").replace(/%2F/g,"/"),h},{}),pathname:m,pathnameBase:y,pattern:l}}function hy(l,o=!1,c=!0){$t(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let u=[],d="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,b,g)=>(u.push({paramName:b,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(u.push({paramName:"*"}),d+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?d+="\\/*$":l!==""&&l!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,o?void 0:"i"),u]}function yy(l){try{return l.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return $t(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),l}}function bn(l,o){if(o==="/")return l;if(!l.toLowerCase().startsWith(o.toLowerCase()))return null;let c=o.endsWith("/")?o.length-1:o.length,u=l.charAt(c);return u&&u!=="/"?null:l.slice(c)||"/"}function xy(l,o="/"){let{pathname:c,search:u="",hash:d=""}=typeof l=="string"?ol(l):l;return{pathname:c?c.startsWith("/")?c:vy(c,o):o,search:Ey(u),hash:Sy(d)}}function vy(l,o){let c=o.replace(/\/+$/,"").split("/");return l.split("/").forEach(d=>{d===".."?c.length>1&&c.pop():d!=="."&&c.push(d)}),c.length>1?c.join("/"):"/"}function Nc(l,o,c,u){return`Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function by(l){return l.filter((o,c)=>c===0||o.route.path&&o.route.path.length>0)}function ds(l){let o=by(l);return o.map((c,u)=>u===o.length-1?c.pathname:c.pathnameBase)}function ps(l,o,c,u=!1){let d;typeof l=="string"?d=ol(l):(d={...l},Ce(!d.pathname||!d.pathname.includes("?"),Nc("?","pathname","search",d)),Ce(!d.pathname||!d.pathname.includes("#"),Nc("#","pathname","hash",d)),Ce(!d.search||!d.search.includes("#"),Nc("#","search","hash",d)));let m=l===""||d.pathname==="",y=m?"/":d.pathname,b;if(y==null)b=c;else{let T=o.length-1;if(!u&&y.startsWith("..")){let M=y.split("/");for(;M[0]==="..";)M.shift(),T-=1;d.pathname=M.join("/")}b=T>=0?o[T]:"/"}let g=xy(d,b),h=y&&y!=="/"&&y.endsWith("/"),j=(m||y===".")&&c.endsWith("/");return!g.pathname.endsWith("/")&&(h||j)&&(g.pathname+="/"),g}var xn=l=>l.join("/").replace(/\/\/+/g,"/"),jy=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),Ey=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,Sy=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function wy(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var H0=["POST","PUT","PATCH","DELETE"];new Set(H0);var Ty=["GET",...H0];new Set(Ty);var ul=U.createContext(null);ul.displayName="DataRouter";var ao=U.createContext(null);ao.displayName="DataRouterState";U.createContext(!1);var k0=U.createContext({isTransitioning:!1});k0.displayName="ViewTransition";var Ry=U.createContext(new Map);Ry.displayName="Fetchers";var Ay=U.createContext(null);Ay.displayName="Await";var Lt=U.createContext(null);Lt.displayName="Navigation";var cl=U.createContext(null);cl.displayName="Location";var _t=U.createContext({outlet:null,matches:[],isDataRoute:!1});_t.displayName="Route";var ms=U.createContext(null);ms.displayName="RouteError";function Dy(l,{relative:o}={}){Ce(sl(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:u}=U.useContext(Lt),{hash:d,pathname:m,search:y}=vi(l,{relative:o}),b=m;return c!=="/"&&(b=m==="/"?c:xn([c,m])),u.createHref({pathname:b,search:y,hash:d})}function sl(){return U.useContext(cl)!=null}function It(){return Ce(sl(),"useLocation() may be used only in the context of a <Router> component."),U.useContext(cl).location}function Ny(){return U.useContext(cl).navigationType}var B0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $0(l){U.useContext(Lt).static||U.useLayoutEffect(l)}function gs(){let{isDataRoute:l}=U.useContext(_t);return l?Xy():Uy()}function Uy(){Ce(sl(),"useNavigate() may be used only in the context of a <Router> component.");let l=U.useContext(ul),{basename:o,navigator:c}=U.useContext(Lt),{matches:u}=U.useContext(_t),{pathname:d}=It(),m=JSON.stringify(ds(u)),y=U.useRef(!1);return $0(()=>{y.current=!0}),U.useCallback((g,h={})=>{if($t(y.current,B0),!y.current)return;if(typeof g=="number"){c.go(g);return}let j=ps(g,JSON.parse(m),d,h.relative==="path");l==null&&o!=="/"&&(j.pathname=j.pathname==="/"?o:xn([o,j.pathname])),(h.replace?c.replace:c.push)(j,h.state,h)},[o,c,m,d,l])}var My=U.createContext(null);function Cy(l){let o=U.useContext(_t).outlet;return o&&U.createElement(My.Provider,{value:l},o)}function zy(){let{matches:l}=U.useContext(_t),o=l[l.length-1];return o?o.params:{}}function vi(l,{relative:o}={}){let{matches:c}=U.useContext(_t),{pathname:u}=It(),d=JSON.stringify(ds(c));return U.useMemo(()=>ps(l,JSON.parse(d),u,o==="path"),[l,d,u,o])}function Oy(l,o){return L0(l,o)}function L0(l,o,c,u,d){Ce(sl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=U.useContext(Lt),{matches:y}=U.useContext(_t),b=y[y.length-1],g=b?b.params:{},h=b?b.pathname:"/",j=b?b.pathnameBase:"/",T=b&&b.route;{let q=T&&T.path||"";q0(h,!T||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let M=It(),C;if(o){let q=typeof o=="string"?ol(o):o;Ce(j==="/"||q.pathname?.startsWith(j),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${j}" but pathname "${q.pathname}" was given in the \`location\` prop.`),C=q}else C=M;let _=C.pathname||"/",G=_;if(j!=="/"){let q=j.replace(/^\//,"").split("/");G="/"+_.replace(/^\//,"").split("/").slice(q.length).join("/")}let $=O0(l,{pathname:G});$t(T||$!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),$t($==null||$[$.length-1].route.element!==void 0||$[$.length-1].route.Component!==void 0||$[$.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=By($&&$.map(q=>Object.assign({},q,{params:Object.assign({},g,q.params),pathname:xn([j,m.encodeLocation?m.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?j:xn([j,m.encodeLocation?m.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),y,c,u,d);return o&&L?U.createElement(cl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...C},navigationType:"POP"}},L):L}function _y(){let l=Yy(),o=wy(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),c=l instanceof Error?l.stack:null,u="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:u},m={padding:"2px 4px",backgroundColor:u},y=null;return console.error("Error handled by React Router default ErrorBoundary:",l),y=U.createElement(U.Fragment,null,U.createElement("p",null,"💿 Hey developer 👋"),U.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",U.createElement("code",{style:m},"ErrorBoundary")," or"," ",U.createElement("code",{style:m},"errorElement")," prop on your route.")),U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},o),c?U.createElement("pre",{style:d},c):null,y)}var Ky=U.createElement(_y,null),Hy=class extends U.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,o){return o.location!==l.location||o.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:o.error,location:o.location,revalidation:l.revalidation||o.revalidation}}componentDidCatch(l,o){this.props.unstable_onError?this.props.unstable_onError(l,o):console.error("React Router caught the following error during render",l)}render(){return this.state.error!==void 0?U.createElement(_t.Provider,{value:this.props.routeContext},U.createElement(ms.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ky({routeContext:l,match:o,children:c}){let u=U.useContext(ul);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),U.createElement(_t.Provider,{value:l},c)}function By(l,o=[],c=null,u=null,d=null){if(l==null){if(!c)return null;if(c.errors)l=c.matches;else if(o.length===0&&!c.initialized&&c.matches.length>0)l=c.matches;else return null}let m=l,y=c?.errors;if(y!=null){let h=m.findIndex(j=>j.route.id&&y?.[j.route.id]!==void 0);Ce(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),m=m.slice(0,Math.min(m.length,h+1))}let b=!1,g=-1;if(c)for(let h=0;h<m.length;h++){let j=m[h];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(g=h),j.route.id){let{loaderData:T,errors:M}=c,C=j.route.loader&&!T.hasOwnProperty(j.route.id)&&(!M||M[j.route.id]===void 0);if(j.route.lazy||C){b=!0,g>=0?m=m.slice(0,g+1):m=[m[0]];break}}}return m.reduceRight((h,j,T)=>{let M,C=!1,_=null,G=null;c&&(M=y&&j.route.id?y[j.route.id]:void 0,_=j.route.errorElement||Ky,b&&(g<0&&T===0?(q0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,G=null):g===T&&(C=!0,G=j.route.hydrateFallbackElement||null)));let $=o.concat(m.slice(0,T+1)),L=()=>{let q;return M?q=_:C?q=G:j.route.Component?q=U.createElement(j.route.Component,null):j.route.element?q=j.route.element:q=h,U.createElement(ky,{match:j,routeContext:{outlet:h,matches:$,isDataRoute:c!=null},children:q})};return c&&(j.route.ErrorBoundary||j.route.errorElement||T===0)?U.createElement(Hy,{location:c.location,revalidation:c.revalidation,component:_,error:M,children:L(),routeContext:{outlet:null,matches:$,isDataRoute:!0},unstable_onError:u}):L()},null)}function hs(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $y(l){let o=U.useContext(ul);return Ce(o,hs(l)),o}function Ly(l){let o=U.useContext(ao);return Ce(o,hs(l)),o}function qy(l){let o=U.useContext(_t);return Ce(o,hs(l)),o}function ys(l){let o=qy(l),c=o.matches[o.matches.length-1];return Ce(c.route.id,`${l} can only be used on routes that contain a unique "id"`),c.route.id}function Gy(){return ys("useRouteId")}function Yy(){let l=U.useContext(ms),o=Ly("useRouteError"),c=ys("useRouteError");return l!==void 0?l:o.errors?.[c]}function Xy(){let{router:l}=$y("useNavigate"),o=ys("useNavigate"),c=U.useRef(!1);return $0(()=>{c.current=!0}),U.useCallback(async(d,m={})=>{$t(c.current,B0),c.current&&(typeof d=="number"?l.navigate(d):await l.navigate(d,{fromRouteId:o,...m}))},[l,o])}var _m={};function q0(l,o,c){!o&&!_m[l]&&(_m[l]=!0,$t(!1,c))}U.memo(Qy);function Qy({routes:l,future:o,state:c,unstable_onError:u}){return L0(l,void 0,c,u,o)}function Vy({to:l,replace:o,state:c,relative:u}){Ce(sl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=U.useContext(Lt);$t(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:m}=U.useContext(_t),{pathname:y}=It(),b=gs(),g=ps(l,ds(m),y,u==="path"),h=JSON.stringify(g);return U.useEffect(()=>{b(JSON.parse(h),{replace:o,state:c,relative:u})},[b,h,u,o,c]),null}function Zy(l){return Cy(l.context)}function hn(l){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Iy({basename:l="/",children:o=null,location:c,navigationType:u="POP",navigator:d,static:m=!1}){Ce(!sl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=l.replace(/^\/*/,"/"),b=U.useMemo(()=>({basename:y,navigator:d,static:m,future:{}}),[y,d,m]);typeof c=="string"&&(c=ol(c));let{pathname:g="/",search:h="",hash:j="",state:T=null,key:M="default"}=c,C=U.useMemo(()=>{let _=bn(g,y);return _==null?null:{location:{pathname:_,search:h,hash:j,state:T,key:M},navigationType:u}},[y,g,h,j,T,M,u]);return $t(C!=null,`<Router basename="${y}"> is not able to match the URL "${g}${h}${j}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:U.createElement(Lt.Provider,{value:b},U.createElement(cl.Provider,{children:o,value:C}))}function Fy({children:l,location:o}){return Oy(Pc(l),o)}function Pc(l,o=[]){let c=[];return U.Children.forEach(l,(u,d)=>{if(!U.isValidElement(u))return;let m=[...o,d];if(u.type===U.Fragment){c.push.apply(c,Pc(u.props.children,m));return}Ce(u.type===hn,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!u.props.index||!u.props.children,"An index route cannot have child routes.");let y={id:u.props.id||m.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(y.children=Pc(u.props.children,m)),c.push(y)}),c}var Yr="get",Xr="application/x-www-form-urlencoded";function lo(l){return l!=null&&typeof l.tagName=="string"}function Jy(l){return lo(l)&&l.tagName.toLowerCase()==="button"}function Wy(l){return lo(l)&&l.tagName.toLowerCase()==="form"}function Py(l){return lo(l)&&l.tagName.toLowerCase()==="input"}function ex(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function tx(l,o){return l.button===0&&(!o||o==="_self")&&!ex(l)}var kr=null;function nx(){if(kr===null)try{new FormData(document.createElement("form"),0),kr=!1}catch{kr=!0}return kr}var ax=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Uc(l){return l!=null&&!ax.has(l)?($t(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xr}"`),null):l}function lx(l,o){let c,u,d,m,y;if(Wy(l)){let b=l.getAttribute("action");u=b?bn(b,o):null,c=l.getAttribute("method")||Yr,d=Uc(l.getAttribute("enctype"))||Xr,m=new FormData(l)}else if(Jy(l)||Py(l)&&(l.type==="submit"||l.type==="image")){let b=l.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=l.getAttribute("formaction")||b.getAttribute("action");if(u=g?bn(g,o):null,c=l.getAttribute("formmethod")||b.getAttribute("method")||Yr,d=Uc(l.getAttribute("formenctype"))||Uc(b.getAttribute("enctype"))||Xr,m=new FormData(b,l),!nx()){let{name:h,type:j,value:T}=l;if(j==="image"){let M=h?`${h}.`:"";m.append(`${M}x`,"0"),m.append(`${M}y`,"0")}else h&&m.append(h,T)}}else{if(lo(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=Yr,u=null,d=Xr,y=l}return m&&d==="text/plain"&&(y=m,m=void 0),{action:u,method:c.toLowerCase(),encType:d,formData:m,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function xs(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function ix(l,o,c){let u=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return u.pathname==="/"?u.pathname=`_root.${c}`:o&&bn(u.pathname,o)==="/"?u.pathname=`${o.replace(/\/$/,"")}/_root.${c}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${c}`,u}async function rx(l,o){if(l.id in o)return o[l.id];try{let c=await import(l.module);return o[l.id]=c,c}catch(c){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ox(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function ux(l,o,c){let u=await Promise.all(l.map(async d=>{let m=o.routes[d.route.id];if(m){let y=await rx(m,c);return y.links?y.links():[]}return[]}));return dx(u.flat(1).filter(ox).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Km(l,o,c,u,d,m){let y=(g,h)=>c[h]?g.route.id!==c[h].route.id:!0,b=(g,h)=>c[h].pathname!==g.pathname||c[h].route.path?.endsWith("*")&&c[h].params["*"]!==g.params["*"];return m==="assets"?o.filter((g,h)=>y(g,h)||b(g,h)):m==="data"?o.filter((g,h)=>{let j=u.routes[g.route.id];if(!j||!j.hasLoader)return!1;if(y(g,h)||b(g,h))return!0;if(g.route.shouldRevalidate){let T=g.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function cx(l,o,{includeHydrateFallback:c}={}){return sx(l.map(u=>{let d=o.routes[u.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),c&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function sx(l){return[...new Set(l)]}function fx(l){let o={},c=Object.keys(l).sort();for(let u of c)o[u]=l[u];return o}function dx(l,o){let c=new Set;return new Set(o),l.reduce((u,d)=>{let m=JSON.stringify(fx(d));return c.has(m)||(c.add(m),u.push({key:m,link:d})),u},[])}function G0(){let l=U.useContext(ul);return xs(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function px(){let l=U.useContext(ao);return xs(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var vs=U.createContext(void 0);vs.displayName="FrameworkContext";function Y0(){let l=U.useContext(vs);return xs(l,"You must render this element inside a <HydratedRouter> element"),l}function mx(l,o){let c=U.useContext(vs),[u,d]=U.useState(!1),[m,y]=U.useState(!1),{onFocus:b,onBlur:g,onMouseEnter:h,onMouseLeave:j,onTouchStart:T}=o,M=U.useRef(null);U.useEffect(()=>{if(l==="render"&&y(!0),l==="viewport"){let G=L=>{L.forEach(q=>{y(q.isIntersecting)})},$=new IntersectionObserver(G,{threshold:.5});return M.current&&$.observe(M.current),()=>{$.disconnect()}}},[l]),U.useEffect(()=>{if(u){let G=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(G)}}},[u]);let C=()=>{d(!0)},_=()=>{d(!1),y(!1)};return c?l!=="intent"?[m,M,{}]:[m,M,{onFocus:fi(b,C),onBlur:fi(g,_),onMouseEnter:fi(h,C),onMouseLeave:fi(j,_),onTouchStart:fi(T,C)}]:[!1,M,{}]}function fi(l,o){return c=>{l&&l(c),c.defaultPrevented||o(c)}}function gx({page:l,...o}){let{router:c}=G0(),u=U.useMemo(()=>O0(c.routes,l,c.basename),[c.routes,l,c.basename]);return u?U.createElement(yx,{page:l,matches:u,...o}):null}function hx(l){let{manifest:o,routeModules:c}=Y0(),[u,d]=U.useState([]);return U.useEffect(()=>{let m=!1;return ux(l,o,c).then(y=>{m||d(y)}),()=>{m=!0}},[l,o,c]),u}function yx({page:l,matches:o,...c}){let u=It(),{manifest:d,routeModules:m}=Y0(),{basename:y}=G0(),{loaderData:b,matches:g}=px(),h=U.useMemo(()=>Km(l,o,g,d,u,"data"),[l,o,g,d,u]),j=U.useMemo(()=>Km(l,o,g,d,u,"assets"),[l,o,g,d,u]),T=U.useMemo(()=>{if(l===u.pathname+u.search+u.hash)return[];let _=new Set,G=!1;if(o.forEach(L=>{let q=d.routes[L.route.id];!q||!q.hasLoader||(!h.some(X=>X.route.id===L.route.id)&&L.route.id in b&&m[L.route.id]?.shouldRevalidate||q.hasClientLoader?G=!0:_.add(L.route.id))}),_.size===0)return[];let $=ix(l,y,"data");return G&&_.size>0&&$.searchParams.set("_routes",o.filter(L=>_.has(L.route.id)).map(L=>L.route.id).join(",")),[$.pathname+$.search]},[y,b,u,d,h,o,l,m]),M=U.useMemo(()=>cx(j,d),[j,d]),C=hx(j);return U.createElement(U.Fragment,null,T.map(_=>U.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...c})),M.map(_=>U.createElement("link",{key:_,rel:"modulepreload",href:_,...c})),C.map(({key:_,link:G})=>U.createElement("link",{key:_,nonce:c.nonce,...G})))}function xx(...l){return o=>{l.forEach(c=>{typeof c=="function"?c(o):c!=null&&(c.current=o)})}}var X0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{X0&&(window.__reactRouterVersion="7.9.1")}catch{}function vx({basename:l,children:o,window:c}){let u=U.useRef();u.current==null&&(u.current=ty({window:c,v5Compat:!0}));let d=u.current,[m,y]=U.useState({action:d.action,location:d.location}),b=U.useCallback(g=>{U.startTransition(()=>y(g))},[y]);return U.useLayoutEffect(()=>d.listen(b),[d,b]),U.createElement(Iy,{basename:l,children:o,location:m.location,navigationType:m.action,navigator:d})}var Q0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fl=U.forwardRef(function({onClick:o,discover:c="render",prefetch:u="none",relative:d,reloadDocument:m,replace:y,state:b,target:g,to:h,preventScrollReset:j,viewTransition:T,...M},C){let{basename:_}=U.useContext(Lt),G=typeof h=="string"&&Q0.test(h),$,L=!1;if(typeof h=="string"&&G&&($=h,X0))try{let Te=new URL(window.location.href),it=h.startsWith("//")?new URL(Te.protocol+h):new URL(h),ot=bn(it.pathname,_);it.origin===Te.origin&&ot!=null?h=ot+it.search+it.hash:L=!0}catch{$t(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=Dy(h,{relative:d}),[X,I,Y]=mx(u,M),ee=Sx(h,{replace:y,state:b,target:g,preventScrollReset:j,relative:d,viewTransition:T});function W(Te){o&&o(Te),Te.defaultPrevented||ee(Te)}let De=U.createElement("a",{...M,...Y,href:$||q,onClick:L||m?o:W,ref:xx(C,I),target:g,"data-discover":!G&&c==="render"?"true":void 0});return X&&!G?U.createElement(U.Fragment,null,De,U.createElement(gx,{page:q})):De});fl.displayName="Link";var bx=U.forwardRef(function({"aria-current":o="page",caseSensitive:c=!1,className:u="",end:d=!1,style:m,to:y,viewTransition:b,children:g,...h},j){let T=vi(y,{relative:h.relative}),M=It(),C=U.useContext(ao),{navigator:_,basename:G}=U.useContext(Lt),$=C!=null&&Dx(T)&&b===!0,L=_.encodeLocation?_.encodeLocation(T).pathname:T.pathname,q=M.pathname,X=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;c||(q=q.toLowerCase(),X=X?X.toLowerCase():null,L=L.toLowerCase()),X&&G&&(X=bn(X,G)||X);const I=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let Y=q===L||!d&&q.startsWith(L)&&q.charAt(I)==="/",ee=X!=null&&(X===L||!d&&X.startsWith(L)&&X.charAt(L.length)==="/"),W={isActive:Y,isPending:ee,isTransitioning:$},De=Y?o:void 0,Te;typeof u=="function"?Te=u(W):Te=[u,Y?"active":null,ee?"pending":null,$?"transitioning":null].filter(Boolean).join(" ");let it=typeof m=="function"?m(W):m;return U.createElement(fl,{...h,"aria-current":De,className:Te,ref:j,style:it,to:y,viewTransition:b},typeof g=="function"?g(W):g)});bx.displayName="NavLink";var jx=U.forwardRef(({discover:l="render",fetcherKey:o,navigate:c,reloadDocument:u,replace:d,state:m,method:y=Yr,action:b,onSubmit:g,relative:h,preventScrollReset:j,viewTransition:T,...M},C)=>{let _=Rx(),G=Ax(b,{relative:h}),$=y.toLowerCase()==="get"?"get":"post",L=typeof b=="string"&&Q0.test(b),q=X=>{if(g&&g(X),X.defaultPrevented)return;X.preventDefault();let I=X.nativeEvent.submitter,Y=I?.getAttribute("formmethod")||y;_(I||X.currentTarget,{fetcherKey:o,method:Y,navigate:c,replace:d,state:m,relative:h,preventScrollReset:j,viewTransition:T})};return U.createElement("form",{ref:C,method:$,action:G,onSubmit:u?g:q,...M,"data-discover":!L&&l==="render"?"true":void 0})});jx.displayName="Form";function Ex(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function V0(l){let o=U.useContext(ul);return Ce(o,Ex(l)),o}function Sx(l,{target:o,replace:c,state:u,preventScrollReset:d,relative:m,viewTransition:y}={}){let b=gs(),g=It(),h=vi(l,{relative:m});return U.useCallback(j=>{if(tx(j,o)){j.preventDefault();let T=c!==void 0?c:hi(g)===hi(h);b(l,{replace:T,state:u,preventScrollReset:d,relative:m,viewTransition:y})}},[g,b,h,c,u,o,l,d,m,y])}var wx=0,Tx=()=>`__${String(++wx)}__`;function Rx(){let{router:l}=V0("useSubmit"),{basename:o}=U.useContext(Lt),c=Gy();return U.useCallback(async(u,d={})=>{let{action:m,method:y,encType:b,formData:g,body:h}=lx(u,o);if(d.navigate===!1){let j=d.fetcherKey||Tx();await l.fetch(j,c,d.action||m,{preventScrollReset:d.preventScrollReset,formData:g,body:h,formMethod:d.method||y,formEncType:d.encType||b,flushSync:d.flushSync})}else await l.navigate(d.action||m,{preventScrollReset:d.preventScrollReset,formData:g,body:h,formMethod:d.method||y,formEncType:d.encType||b,replace:d.replace,state:d.state,fromRouteId:c,flushSync:d.flushSync,viewTransition:d.viewTransition})},[l,o,c])}function Ax(l,{relative:o}={}){let{basename:c}=U.useContext(Lt),u=U.useContext(_t);Ce(u,"useFormAction must be used inside a RouteContext");let[d]=u.matches.slice(-1),m={...vi(l||".",{relative:o})},y=It();if(l==null){m.search=y.search;let b=new URLSearchParams(m.search),g=b.getAll("index");if(g.some(j=>j==="")){b.delete("index"),g.filter(T=>T).forEach(T=>b.append("index",T));let j=b.toString();m.search=j?`?${j}`:""}}return(!l||l===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(m.pathname=m.pathname==="/"?c:xn([c,m.pathname])),hi(m)}function Dx(l,{relative:o}={}){let c=U.useContext(k0);Ce(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=V0("useViewTransitionState"),d=vi(l,{relative:o});if(!c.isTransitioning)return!1;let m=bn(c.currentLocation.pathname,u)||c.currentLocation.pathname,y=bn(c.nextLocation.pathname,u)||c.nextLocation.pathname;return Wr(d.pathname,y)!=null||Wr(d.pathname,m)!=null}var Mc={exports:{}},lt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function Nx(){if(Hm)return lt;Hm=1;var l=fs();function o(g){var h="https://react.dev/errors/"+g;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)h+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+g+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(o(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function m(g,h,j){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:T==null?null:""+T,children:g,containerInfo:h,implementation:j}}var y=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(g,h){if(g==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,lt.createPortal=function(g,h){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(o(299));return m(g,h,null,j)},lt.flushSync=function(g){var h=y.T,j=u.p;try{if(y.T=null,u.p=2,g)return g()}finally{y.T=h,u.p=j,u.d.f()}},lt.preconnect=function(g,h){typeof g=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(g,h))},lt.prefetchDNS=function(g){typeof g=="string"&&u.d.D(g)},lt.preinit=function(g,h){if(typeof g=="string"&&h&&typeof h.as=="string"){var j=h.as,T=b(j,h.crossOrigin),M=typeof h.integrity=="string"?h.integrity:void 0,C=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;j==="style"?u.d.S(g,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:T,integrity:M,fetchPriority:C}):j==="script"&&u.d.X(g,{crossOrigin:T,integrity:M,fetchPriority:C,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},lt.preinitModule=function(g,h){if(typeof g=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var j=b(h.as,h.crossOrigin);u.d.M(g,{crossOrigin:j,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&u.d.M(g)},lt.preload=function(g,h){if(typeof g=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var j=h.as,T=b(j,h.crossOrigin);u.d.L(g,j,{crossOrigin:T,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},lt.preloadModule=function(g,h){if(typeof g=="string")if(h){var j=b(h.as,h.crossOrigin);u.d.m(g,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:j,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else u.d.m(g)},lt.requestFormReset=function(g){u.d.r(g)},lt.unstable_batchedUpdates=function(g,h){return g(h)},lt.useFormState=function(g,h,j){return y.H.useFormState(g,h,j)},lt.useFormStatus=function(){return y.H.useHostTransitionStatus()},lt.version="19.1.1",lt}var km;function Ux(){if(km)return Mc.exports;km=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),Mc.exports=Nx(),Mc.exports}var Cc={exports:{}},zc,Bm;function Mx(){if(Bm)return zc;Bm=1;var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return zc=l,zc}var Oc,$m;function Cx(){if($m)return Oc;$m=1;var l=Mx();function o(){}function c(){}return c.resetWarningCache=o,Oc=function(){function u(y,b,g,h,j,T){if(T!==l){var M=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw M.name="Invariant Violation",M}}u.isRequired=u;function d(){return u}var m={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:d,element:u,elementType:u,instanceOf:d,node:u,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:c,resetWarningCache:o};return m.PropTypes=m,m},Oc}var Lm;function zx(){return Lm||(Lm=1,Cc.exports=Cx()()),Cc.exports}var Ox=zx();const B=z0(Ox);var pt=function(){return pt=Object.assign||function(o){for(var c,u=1,d=arguments.length;u<d;u++){c=arguments[u];for(var m in c)Object.prototype.hasOwnProperty.call(c,m)&&(o[m]=c[m])}return o},pt.apply(this,arguments)};function Pr(l,o,c){if(c||arguments.length===2)for(var u=0,d=o.length,m;u<d;u++)(m||!(u in o))&&(m||(m=Array.prototype.slice.call(o,0,u)),m[u]=o[u]);return l.concat(m||Array.prototype.slice.call(o))}var Ne="-ms-",gi="-moz-",ve="-webkit-",Z0="comm",io="rule",bs="decl",_x="@import",I0="@keyframes",Kx="@layer",F0=Math.abs,js=String.fromCharCode,es=Object.assign;function Hx(l,o){return Je(l,0)^45?(((o<<2^Je(l,0))<<2^Je(l,1))<<2^Je(l,2))<<2^Je(l,3):0}function J0(l){return l.trim()}function yn(l,o){return(l=o.exec(l))?l[0]:l}function oe(l,o,c){return l.replace(o,c)}function Qr(l,o,c){return l.indexOf(o,c)}function Je(l,o){return l.charCodeAt(o)|0}function nl(l,o,c){return l.slice(o,c)}function Zt(l){return l.length}function W0(l){return l.length}function mi(l,o){return o.push(l),l}function kx(l,o){return l.map(o).join("")}function qm(l,o){return l.filter(function(c){return!yn(c,o)})}var ro=1,al=1,P0=0,Ot=0,$e=0,dl="";function oo(l,o,c,u,d,m,y,b){return{value:l,root:o,parent:c,type:u,props:d,children:m,line:ro,column:al,length:y,return:"",siblings:b}}function Qn(l,o){return es(oo("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},o)}function el(l){for(;l.root;)l=Qn(l.root,{children:[l]});mi(l,l.siblings)}function Bx(){return $e}function $x(){return $e=Ot>0?Je(dl,--Ot):0,al--,$e===10&&(al=1,ro--),$e}function Bt(){return $e=Ot<P0?Je(dl,Ot++):0,al++,$e===10&&(al=1,ro++),$e}function pa(){return Je(dl,Ot)}function Vr(){return Ot}function uo(l,o){return nl(dl,l,o)}function ts(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Lx(l){return ro=al=1,P0=Zt(dl=l),Ot=0,[]}function qx(l){return dl="",l}function _c(l){return J0(uo(Ot-1,ns(l===91?l+2:l===40?l+1:l)))}function Gx(l){for(;($e=pa())&&$e<33;)Bt();return ts(l)>2||ts($e)>3?"":" "}function Yx(l,o){for(;--o&&Bt()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return uo(l,Vr()+(o<6&&pa()==32&&Bt()==32))}function ns(l){for(;Bt();)switch($e){case l:return Ot;case 34:case 39:l!==34&&l!==39&&ns($e);break;case 40:l===41&&ns(l);break;case 92:Bt();break}return Ot}function Xx(l,o){for(;Bt()&&l+$e!==57;)if(l+$e===84&&pa()===47)break;return"/*"+uo(o,Ot-1)+"*"+js(l===47?l:Bt())}function Qx(l){for(;!ts(pa());)Bt();return uo(l,Ot)}function Vx(l){return qx(Zr("",null,null,null,[""],l=Lx(l),0,[0],l))}function Zr(l,o,c,u,d,m,y,b,g){for(var h=0,j=0,T=y,M=0,C=0,_=0,G=1,$=1,L=1,q=0,X="",I=d,Y=m,ee=u,W=X;$;)switch(_=q,q=Bt()){case 40:if(_!=108&&Je(W,T-1)==58){Qr(W+=oe(_c(q),"&","&\f"),"&\f",F0(h?b[h-1]:0))!=-1&&(L=-1);break}case 34:case 39:case 91:W+=_c(q);break;case 9:case 10:case 13:case 32:W+=Gx(_);break;case 92:W+=Yx(Vr()-1,7);continue;case 47:switch(pa()){case 42:case 47:mi(Zx(Xx(Bt(),Vr()),o,c,g),g);break;default:W+="/"}break;case 123*G:b[h++]=Zt(W)*L;case 125*G:case 59:case 0:switch(q){case 0:case 125:$=0;case 59+j:L==-1&&(W=oe(W,/\f/g,"")),C>0&&Zt(W)-T&&mi(C>32?Ym(W+";",u,c,T-1,g):Ym(oe(W," ","")+";",u,c,T-2,g),g);break;case 59:W+=";";default:if(mi(ee=Gm(W,o,c,h,j,d,b,X,I=[],Y=[],T,m),m),q===123)if(j===0)Zr(W,o,ee,ee,I,m,T,b,Y);else switch(M===99&&Je(W,3)===110?100:M){case 100:case 108:case 109:case 115:Zr(l,ee,ee,u&&mi(Gm(l,ee,ee,0,0,d,b,X,d,I=[],T,Y),Y),d,Y,T,b,u?I:Y);break;default:Zr(W,ee,ee,ee,[""],Y,0,b,Y)}}h=j=C=0,G=L=1,X=W="",T=y;break;case 58:T=1+Zt(W),C=_;default:if(G<1){if(q==123)--G;else if(q==125&&G++==0&&$x()==125)continue}switch(W+=js(q),q*G){case 38:L=j>0?1:(W+="\f",-1);break;case 44:b[h++]=(Zt(W)-1)*L,L=1;break;case 64:pa()===45&&(W+=_c(Bt())),M=pa(),j=T=Zt(X=W+=Qx(Vr())),q++;break;case 45:_===45&&Zt(W)==2&&(G=0)}}return m}function Gm(l,o,c,u,d,m,y,b,g,h,j,T){for(var M=d-1,C=d===0?m:[""],_=W0(C),G=0,$=0,L=0;G<u;++G)for(var q=0,X=nl(l,M+1,M=F0($=y[G])),I=l;q<_;++q)(I=J0($>0?C[q]+" "+X:oe(X,/&\f/g,C[q])))&&(g[L++]=I);return oo(l,o,c,d===0?io:b,g,h,j,T)}function Zx(l,o,c,u){return oo(l,o,c,Z0,js(Bx()),nl(l,2,-2),0,u)}function Ym(l,o,c,u,d){return oo(l,o,c,bs,nl(l,0,u),nl(l,u+1,-1),u,d)}function eg(l,o,c){switch(Hx(l,o)){case 5103:return ve+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ve+l+l;case 4789:return gi+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return ve+l+gi+l+Ne+l+l;case 5936:switch(Je(l,o+11)){case 114:return ve+l+Ne+oe(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return ve+l+Ne+oe(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return ve+l+Ne+oe(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return ve+l+Ne+l+l;case 6165:return ve+l+Ne+"flex-"+l+l;case 5187:return ve+l+oe(l,/(\w+).+(:[^]+)/,ve+"box-$1$2"+Ne+"flex-$1$2")+l;case 5443:return ve+l+Ne+"flex-item-"+oe(l,/flex-|-self/g,"")+(yn(l,/flex-|baseline/)?"":Ne+"grid-row-"+oe(l,/flex-|-self/g,""))+l;case 4675:return ve+l+Ne+"flex-line-pack"+oe(l,/align-content|flex-|-self/g,"")+l;case 5548:return ve+l+Ne+oe(l,"shrink","negative")+l;case 5292:return ve+l+Ne+oe(l,"basis","preferred-size")+l;case 6060:return ve+"box-"+oe(l,"-grow","")+ve+l+Ne+oe(l,"grow","positive")+l;case 4554:return ve+oe(l,/([^-])(transform)/g,"$1"+ve+"$2")+l;case 6187:return oe(oe(oe(l,/(zoom-|grab)/,ve+"$1"),/(image-set)/,ve+"$1"),l,"")+l;case 5495:case 3959:return oe(l,/(image-set\([^]*)/,ve+"$1$`$1");case 4968:return oe(oe(l,/(.+:)(flex-)?(.*)/,ve+"box-pack:$3"+Ne+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ve+l+l;case 4200:if(!yn(l,/flex-|baseline/))return Ne+"grid-column-align"+nl(l,o)+l;break;case 2592:case 3360:return Ne+oe(l,"template-","")+l;case 4384:case 3616:return c&&c.some(function(u,d){return o=d,yn(u.props,/grid-\w+-end/)})?~Qr(l+(c=c[o].value),"span",0)?l:Ne+oe(l,"-start","")+l+Ne+"grid-row-span:"+(~Qr(c,"span",0)?yn(c,/\d+/):+yn(c,/\d+/)-+yn(l,/\d+/))+";":Ne+oe(l,"-start","")+l;case 4896:case 4128:return c&&c.some(function(u){return yn(u.props,/grid-\w+-start/)})?l:Ne+oe(oe(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return oe(l,/(.+)-inline(.+)/,ve+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zt(l)-1-o>6)switch(Je(l,o+1)){case 109:if(Je(l,o+4)!==45)break;case 102:return oe(l,/(.+:)(.+)-([^]+)/,"$1"+ve+"$2-$3$1"+gi+(Je(l,o+3)==108?"$3":"$2-$3"))+l;case 115:return~Qr(l,"stretch",0)?eg(oe(l,"stretch","fill-available"),o,c)+l:l}break;case 5152:case 5920:return oe(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(u,d,m,y,b,g,h){return Ne+d+":"+m+h+(y?Ne+d+"-span:"+(b?g:+g-+m)+h:"")+l});case 4949:if(Je(l,o+6)===121)return oe(l,":",":"+ve)+l;break;case 6444:switch(Je(l,Je(l,14)===45?18:11)){case 120:return oe(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ve+(Je(l,14)===45?"inline-":"")+"box$3$1"+ve+"$2$3$1"+Ne+"$2box$3")+l;case 100:return oe(l,":",":"+Ne)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return oe(l,"scroll-","scroll-snap-")+l}return l}function eo(l,o){for(var c="",u=0;u<l.length;u++)c+=o(l[u],u,l,o)||"";return c}function Ix(l,o,c,u){switch(l.type){case Kx:if(l.children.length)break;case _x:case bs:return l.return=l.return||l.value;case Z0:return"";case I0:return l.return=l.value+"{"+eo(l.children,u)+"}";case io:if(!Zt(l.value=l.props.join(",")))return""}return Zt(c=eo(l.children,u))?l.return=l.value+"{"+c+"}":""}function Fx(l){var o=W0(l);return function(c,u,d,m){for(var y="",b=0;b<o;b++)y+=l[b](c,u,d,m)||"";return y}}function Jx(l){return function(o){o.root||(o=o.return)&&l(o)}}function Wx(l,o,c,u){if(l.length>-1&&!l.return)switch(l.type){case bs:l.return=eg(l.value,l.length,c);return;case I0:return eo([Qn(l,{value:oe(l.value,"@","@"+ve)})],u);case io:if(l.length)return kx(c=l.props,function(d){switch(yn(d,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":el(Qn(l,{props:[oe(d,/:(read-\w+)/,":"+gi+"$1")]})),el(Qn(l,{props:[d]})),es(l,{props:qm(c,u)});break;case"::placeholder":el(Qn(l,{props:[oe(d,/:(plac\w+)/,":"+ve+"input-$1")]})),el(Qn(l,{props:[oe(d,/:(plac\w+)/,":"+gi+"$1")]})),el(Qn(l,{props:[oe(d,/:(plac\w+)/,Ne+"input-$1")]})),el(Qn(l,{props:[d]})),es(l,{props:qm(c,u)});break}return""})}}var Px={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},St={},ll=typeof process<"u"&&St!==void 0&&(St.REACT_APP_SC_ATTR||St.SC_ATTR)||"data-styled",tg="active",ng="data-styled-version",co="6.1.19",Es=`/*!sc*/
`,to=typeof window<"u"&&typeof document<"u",ev=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&St!==void 0&&St.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&St.REACT_APP_SC_DISABLE_SPEEDY!==""?St.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&St.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&St!==void 0&&St.SC_DISABLE_SPEEDY!==void 0&&St.SC_DISABLE_SPEEDY!==""&&St.SC_DISABLE_SPEEDY!=="false"&&St.SC_DISABLE_SPEEDY),so=Object.freeze([]),il=Object.freeze({});function tv(l,o,c){return c===void 0&&(c=il),l.theme!==c.theme&&l.theme||o||c.theme}var ag=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),nv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,av=/(^-|-$)/g;function Xm(l){return l.replace(nv,"-").replace(av,"")}var lv=/(a)(d)/gi,Br=52,Qm=function(l){return String.fromCharCode(l+(l>25?39:97))};function as(l){var o,c="";for(o=Math.abs(l);o>Br;o=o/Br|0)c=Qm(o%Br)+c;return(Qm(o%Br)+c).replace(lv,"$1-$2")}var Kc,lg=5381,tl=function(l,o){for(var c=o.length;c;)l=33*l^o.charCodeAt(--c);return l},ig=function(l){return tl(lg,l)};function iv(l){return as(ig(l)>>>0)}function rv(l){return l.displayName||l.name||"Component"}function Hc(l){return typeof l=="string"&&!0}var rg=typeof Symbol=="function"&&Symbol.for,og=rg?Symbol.for("react.memo"):60115,ov=rg?Symbol.for("react.forward_ref"):60112,uv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},cv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ug={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sv=((Kc={})[ov]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Kc[og]=ug,Kc);function Vm(l){return("type"in(o=l)&&o.type.$$typeof)===og?ug:"$$typeof"in l?sv[l.$$typeof]:uv;var o}var fv=Object.defineProperty,dv=Object.getOwnPropertyNames,Zm=Object.getOwnPropertySymbols,pv=Object.getOwnPropertyDescriptor,mv=Object.getPrototypeOf,Im=Object.prototype;function cg(l,o,c){if(typeof o!="string"){if(Im){var u=mv(o);u&&u!==Im&&cg(l,u,c)}var d=dv(o);Zm&&(d=d.concat(Zm(o)));for(var m=Vm(l),y=Vm(o),b=0;b<d.length;++b){var g=d[b];if(!(g in cv||c&&c[g]||y&&g in y||m&&g in m)){var h=pv(o,g);try{fv(l,g,h)}catch{}}}}return l}function rl(l){return typeof l=="function"}function Ss(l){return typeof l=="object"&&"styledComponentId"in l}function da(l,o){return l&&o?"".concat(l," ").concat(o):l||o||""}function Fm(l,o){if(l.length===0)return"";for(var c=l[0],u=1;u<l.length;u++)c+=l[u];return c}function yi(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function ls(l,o,c){if(c===void 0&&(c=!1),!c&&!yi(l)&&!Array.isArray(l))return o;if(Array.isArray(o))for(var u=0;u<o.length;u++)l[u]=ls(l[u],o[u]);else if(yi(o))for(var u in o)l[u]=ls(l[u],o[u]);return l}function ws(l,o){Object.defineProperty(l,"toString",{value:o})}function bi(l){for(var o=[],c=1;c<arguments.length;c++)o[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var gv=(function(){function l(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return l.prototype.indexOfGroup=function(o){for(var c=0,u=0;u<o;u++)c+=this.groupSizes[u];return c},l.prototype.insertRules=function(o,c){if(o>=this.groupSizes.length){for(var u=this.groupSizes,d=u.length,m=d;o>=m;)if((m<<=1)<0)throw bi(16,"".concat(o));this.groupSizes=new Uint32Array(m),this.groupSizes.set(u),this.length=m;for(var y=d;y<m;y++)this.groupSizes[y]=0}for(var b=this.indexOfGroup(o+1),g=(y=0,c.length);y<g;y++)this.tag.insertRule(b,c[y])&&(this.groupSizes[o]++,b++)},l.prototype.clearGroup=function(o){if(o<this.length){var c=this.groupSizes[o],u=this.indexOfGroup(o),d=u+c;this.groupSizes[o]=0;for(var m=u;m<d;m++)this.tag.deleteRule(u)}},l.prototype.getGroup=function(o){var c="";if(o>=this.length||this.groupSizes[o]===0)return c;for(var u=this.groupSizes[o],d=this.indexOfGroup(o),m=d+u,y=d;y<m;y++)c+="".concat(this.tag.getRule(y)).concat(Es);return c},l})(),Ir=new Map,no=new Map,Fr=1,$r=function(l){if(Ir.has(l))return Ir.get(l);for(;no.has(Fr);)Fr++;var o=Fr++;return Ir.set(l,o),no.set(o,l),o},hv=function(l,o){Fr=o+1,Ir.set(l,o),no.set(o,l)},yv="style[".concat(ll,"][").concat(ng,'="').concat(co,'"]'),xv=new RegExp("^".concat(ll,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vv=function(l,o,c){for(var u,d=c.split(","),m=0,y=d.length;m<y;m++)(u=d[m])&&l.registerName(o,u)},bv=function(l,o){for(var c,u=((c=o.textContent)!==null&&c!==void 0?c:"").split(Es),d=[],m=0,y=u.length;m<y;m++){var b=u[m].trim();if(b){var g=b.match(xv);if(g){var h=0|parseInt(g[1],10),j=g[2];h!==0&&(hv(j,h),vv(l,j,g[3]),l.getTag().insertRules(h,d)),d.length=0}else d.push(b)}}},Jm=function(l){for(var o=document.querySelectorAll(yv),c=0,u=o.length;c<u;c++){var d=o[c];d&&d.getAttribute(ll)!==tg&&(bv(l,d),d.parentNode&&d.parentNode.removeChild(d))}};function jv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sg=function(l){var o=document.head,c=l||o,u=document.createElement("style"),d=(function(b){var g=Array.from(b.querySelectorAll("style[".concat(ll,"]")));return g[g.length-1]})(c),m=d!==void 0?d.nextSibling:null;u.setAttribute(ll,tg),u.setAttribute(ng,co);var y=jv();return y&&u.setAttribute("nonce",y),c.insertBefore(u,m),u},Ev=(function(){function l(o){this.element=sg(o),this.element.appendChild(document.createTextNode("")),this.sheet=(function(c){if(c.sheet)return c.sheet;for(var u=document.styleSheets,d=0,m=u.length;d<m;d++){var y=u[d];if(y.ownerNode===c)return y}throw bi(17)})(this.element),this.length=0}return l.prototype.insertRule=function(o,c){try{return this.sheet.insertRule(c,o),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},l.prototype.getRule=function(o){var c=this.sheet.cssRules[o];return c&&c.cssText?c.cssText:""},l})(),Sv=(function(){function l(o){this.element=sg(o),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(o,c){if(o<=this.length&&o>=0){var u=document.createTextNode(c);return this.element.insertBefore(u,this.nodes[o]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},l.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},l})(),wv=(function(){function l(o){this.rules=[],this.length=0}return l.prototype.insertRule=function(o,c){return o<=this.length&&(this.rules.splice(o,0,c),this.length++,!0)},l.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},l.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},l})(),Wm=to,Tv={isServer:!to,useCSSOMInjection:!ev},fg=(function(){function l(o,c,u){o===void 0&&(o=il),c===void 0&&(c={});var d=this;this.options=pt(pt({},Tv),o),this.gs=c,this.names=new Map(u),this.server=!!o.isServer,!this.server&&to&&Wm&&(Wm=!1,Jm(this)),ws(this,function(){return(function(m){for(var y=m.getTag(),b=y.length,g="",h=function(T){var M=(function(L){return no.get(L)})(T);if(M===void 0)return"continue";var C=m.names.get(M),_=y.getGroup(T);if(C===void 0||!C.size||_.length===0)return"continue";var G="".concat(ll,".g").concat(T,'[id="').concat(M,'"]'),$="";C!==void 0&&C.forEach(function(L){L.length>0&&($+="".concat(L,","))}),g+="".concat(_).concat(G,'{content:"').concat($,'"}').concat(Es)},j=0;j<b;j++)h(j);return g})(d)})}return l.registerId=function(o){return $r(o)},l.prototype.rehydrate=function(){!this.server&&to&&Jm(this)},l.prototype.reconstructWithOptions=function(o,c){return c===void 0&&(c=!0),new l(pt(pt({},this.options),o),this.gs,c&&this.names||void 0)},l.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(o=(function(c){var u=c.useCSSOMInjection,d=c.target;return c.isServer?new wv(d):u?new Ev(d):new Sv(d)})(this.options),new gv(o)));var o},l.prototype.hasNameForId=function(o,c){return this.names.has(o)&&this.names.get(o).has(c)},l.prototype.registerName=function(o,c){if($r(o),this.names.has(o))this.names.get(o).add(c);else{var u=new Set;u.add(c),this.names.set(o,u)}},l.prototype.insertRules=function(o,c,u){this.registerName(o,c),this.getTag().insertRules($r(o),u)},l.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},l.prototype.clearRules=function(o){this.getTag().clearGroup($r(o)),this.clearNames(o)},l.prototype.clearTag=function(){this.tag=void 0},l})(),Rv=/&/g,Av=/^\s*\/\/.*$/gm;function dg(l,o){return l.map(function(c){return c.type==="rule"&&(c.value="".concat(o," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(o," ")),c.props=c.props.map(function(u){return"".concat(o," ").concat(u)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=dg(c.children,o)),c})}function Dv(l){var o,c,u,d=il,m=d.options,y=m===void 0?il:m,b=d.plugins,g=b===void 0?so:b,h=function(M,C,_){return _.startsWith(c)&&_.endsWith(c)&&_.replaceAll(c,"").length>0?".".concat(o):M},j=g.slice();j.push(function(M){M.type===io&&M.value.includes("&")&&(M.props[0]=M.props[0].replace(Rv,c).replace(u,h))}),y.prefix&&j.push(Wx),j.push(Ix);var T=function(M,C,_,G){C===void 0&&(C=""),_===void 0&&(_=""),G===void 0&&(G="&"),o=G,c=C,u=new RegExp("\\".concat(c,"\\b"),"g");var $=M.replace(Av,""),L=Vx(_||C?"".concat(_," ").concat(C," { ").concat($," }"):$);y.namespace&&(L=dg(L,y.namespace));var q=[];return eo(L,Fx(j.concat(Jx(function(X){return q.push(X)})))),q};return T.hash=g.length?g.reduce(function(M,C){return C.name||bi(15),tl(M,C.name)},lg).toString():"",T}var Nv=new fg,is=Dv(),pg=ge.createContext({shouldForwardProp:void 0,styleSheet:Nv,stylis:is});pg.Consumer;ge.createContext(void 0);function Pm(){return U.useContext(pg)}var Uv=(function(){function l(o,c){var u=this;this.inject=function(d,m){m===void 0&&(m=is);var y=u.name+m.hash;d.hasNameForId(u.id,y)||d.insertRules(u.id,y,m(u.rules,y,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=c,ws(this,function(){throw bi(12,String(u.name))})}return l.prototype.getName=function(o){return o===void 0&&(o=is),this.name+o.hash},l})(),Mv=function(l){return l>="A"&&l<="Z"};function e0(l){for(var o="",c=0;c<l.length;c++){var u=l[c];if(c===1&&u==="-"&&l[0]==="-")return l;Mv(u)?o+="-"+u.toLowerCase():o+=u}return o.startsWith("ms-")?"-"+o:o}var mg=function(l){return l==null||l===!1||l===""},gg=function(l){var o,c,u=[];for(var d in l){var m=l[d];l.hasOwnProperty(d)&&!mg(m)&&(Array.isArray(m)&&m.isCss||rl(m)?u.push("".concat(e0(d),":"),m,";"):yi(m)?u.push.apply(u,Pr(Pr(["".concat(d," {")],gg(m),!1),["}"],!1)):u.push("".concat(e0(d),": ").concat((o=d,(c=m)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||o in Px||o.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return u};function ma(l,o,c,u){if(mg(l))return[];if(Ss(l))return[".".concat(l.styledComponentId)];if(rl(l)){if(!rl(m=l)||m.prototype&&m.prototype.isReactComponent||!o)return[l];var d=l(o);return ma(d,o,c,u)}var m;return l instanceof Uv?c?(l.inject(c,u),[l.getName(u)]):[l]:yi(l)?gg(l):Array.isArray(l)?Array.prototype.concat.apply(so,l.map(function(y){return ma(y,o,c,u)})):[l.toString()]}function Cv(l){for(var o=0;o<l.length;o+=1){var c=l[o];if(rl(c)&&!Ss(c))return!1}return!0}var zv=ig(co),Ov=(function(){function l(o,c,u){this.rules=o,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&Cv(o),this.componentId=c,this.baseHash=tl(zv,c),this.baseStyle=u,fg.registerId(c)}return l.prototype.generateAndInjectStyles=function(o,c,u){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,c,u):"";if(this.isStatic&&!u.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))d=da(d,this.staticRulesId);else{var m=Fm(ma(this.rules,o,c,u)),y=as(tl(this.baseHash,m)>>>0);if(!c.hasNameForId(this.componentId,y)){var b=u(m,".".concat(y),void 0,this.componentId);c.insertRules(this.componentId,y,b)}d=da(d,y),this.staticRulesId=y}else{for(var g=tl(this.baseHash,u.hash),h="",j=0;j<this.rules.length;j++){var T=this.rules[j];if(typeof T=="string")h+=T;else if(T){var M=Fm(ma(T,o,c,u));g=tl(g,M+j),h+=M}}if(h){var C=as(g>>>0);c.hasNameForId(this.componentId,C)||c.insertRules(this.componentId,C,u(h,".".concat(C),void 0,this.componentId)),d=da(d,C)}}return d},l})(),hg=ge.createContext(void 0);hg.Consumer;var kc={};function _v(l,o,c){var u=Ss(l),d=l,m=!Hc(l),y=o.attrs,b=y===void 0?so:y,g=o.componentId,h=g===void 0?(function(I,Y){var ee=typeof I!="string"?"sc":Xm(I);kc[ee]=(kc[ee]||0)+1;var W="".concat(ee,"-").concat(iv(co+ee+kc[ee]));return Y?"".concat(Y,"-").concat(W):W})(o.displayName,o.parentComponentId):g,j=o.displayName,T=j===void 0?(function(I){return Hc(I)?"styled.".concat(I):"Styled(".concat(rv(I),")")})(l):j,M=o.displayName&&o.componentId?"".concat(Xm(o.displayName),"-").concat(o.componentId):o.componentId||h,C=u&&d.attrs?d.attrs.concat(b).filter(Boolean):b,_=o.shouldForwardProp;if(u&&d.shouldForwardProp){var G=d.shouldForwardProp;if(o.shouldForwardProp){var $=o.shouldForwardProp;_=function(I,Y){return G(I,Y)&&$(I,Y)}}else _=G}var L=new Ov(c,M,u?d.componentStyle:void 0);function q(I,Y){return(function(ee,W,De){var Te=ee.attrs,it=ee.componentStyle,ot=ee.defaultProps,Ye=ee.foldedComponentIds,Jt=ee.styledComponentId,Wt=ee.target,Xe=ge.useContext(hg),z=Pm(),V=ee.shouldForwardProp||z.shouldForwardProp,te=tv(W,Xe,ot)||il,se=(function(fe,ae,Qe){for(var xe,tt=pt(pt({},ae),{className:void 0,theme:Qe}),Vn=0;Vn<fe.length;Vn+=1){var Pt=rl(xe=fe[Vn])?xe(tt):xe;for(var wt in Pt)tt[wt]=wt==="className"?da(tt[wt],Pt[wt]):wt==="style"?pt(pt({},tt[wt]),Pt[wt]):Pt[wt]}return ae.className&&(tt.className=da(tt.className,ae.className)),tt})(Te,W,te),E=se.as||Wt,k={};for(var Q in se)se[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&se.theme===te||(Q==="forwardedAs"?k.as=se.forwardedAs:V&&!V(Q,E)||(k[Q]=se[Q]));var Z=(function(fe,ae){var Qe=Pm(),xe=fe.generateAndInjectStyles(ae,Qe.styleSheet,Qe.stylis);return xe})(it,se),P=da(Ye,Jt);return Z&&(P+=" "+Z),se.className&&(P+=" "+se.className),k[Hc(E)&&!ag.has(E)?"class":"className"]=P,De&&(k.ref=De),U.createElement(E,k)})(X,I,Y)}q.displayName=T;var X=ge.forwardRef(q);return X.attrs=C,X.componentStyle=L,X.displayName=T,X.shouldForwardProp=_,X.foldedComponentIds=u?da(d.foldedComponentIds,d.styledComponentId):"",X.styledComponentId=M,X.target=u?d.target:l,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(I){this._foldedDefaultProps=u?(function(Y){for(var ee=[],W=1;W<arguments.length;W++)ee[W-1]=arguments[W];for(var De=0,Te=ee;De<Te.length;De++)ls(Y,Te[De],!0);return Y})({},d.defaultProps,I):I}}),ws(X,function(){return".".concat(X.styledComponentId)}),m&&cg(X,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function t0(l,o){for(var c=[l[0]],u=0,d=o.length;u<d;u+=1)c.push(o[u],l[u+1]);return c}var n0=function(l){return Object.assign(l,{isCss:!0})};function Kv(l){for(var o=[],c=1;c<arguments.length;c++)o[c-1]=arguments[c];if(rl(l)||yi(l))return n0(ma(t0(so,Pr([l],o,!0))));var u=l;return o.length===0&&u.length===1&&typeof u[0]=="string"?ma(u):n0(ma(t0(u,o)))}function rs(l,o,c){if(c===void 0&&(c=il),!o)throw bi(1,o);var u=function(d){for(var m=[],y=1;y<arguments.length;y++)m[y-1]=arguments[y];return l(o,c,Kv.apply(void 0,Pr([d],m,!1)))};return u.attrs=function(d){return rs(l,o,pt(pt({},c),{attrs:Array.prototype.concat(c.attrs,d).filter(Boolean)}))},u.withConfig=function(d){return rs(l,o,pt(pt({},c),d))},u}var yg=function(l){return rs(_v,l)},x=yg;ag.forEach(function(l){x[l]=yg(l)});const Bc=x.a`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 16px;
  line-height: 19.2px;
  letter-spacing: 0.24px;
  font-weight: ${l=>l.$active?700:400};
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
`;function Ts({label:l,href:o="#",active:c=!1,onClick:u,style:d,target:m,rel:y}){const b="/TU2025gradulate/",g=/^https?:\/\//i.test(o)||o?.startsWith("mailto:")||o?.startsWith("tel:");let h,j=!1;!g&&o&&(o.startsWith(b)?(h="/"+o.slice(b.length).replace(/^\/+/,""),j=!0):o.startsWith("/")&&(h=o,j=!0),o===b&&(h="/",j=!0));const M={"aria-current":c?"page":void 0,"data-active":c?"true":"false",onKeyDown:C=>{u&&(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),u(C))},onClick:u,style:d,$active:c};return j?s.jsx(Bc,{as:fl,to:h,...M,children:l}):o?s.jsx(Bc,{href:o,target:m,rel:y,...M,children:l}):s.jsx(Bc,{as:"button",type:"button",...M,style:{background:"none",border:0,...d},children:l})}Ts.propTypes={label:B.string.isRequired,href:B.string,active:B.bool,onClick:B.func,style:B.object,target:B.string,rel:B.string};const Hv=({size:l=28,color:o="#fff",...c})=>s.jsxs("svg",{width:l,height:l,viewBox:"0 0 28 28",fill:"none",...c,children:[s.jsx("rect",{y:"5",width:"28",height:"2.5",rx:"1.25",fill:o}),s.jsx("rect",{y:"12.25",width:"28",height:"2.5",rx:"1.25",fill:o}),s.jsx("rect",{y:"19.5",width:"28",height:"2.5",rx:"1.25",fill:o})]}),Ge=Object.freeze({GRADIENT:"gradient",LIGHT:"light",DARK:"dark"}),kv=x.header`
  position: ${l=>l.$sticky?"sticky":"relative"};
  top: 0;
  width: 100vw;
  z-index: 1000;
  transition: background 180ms ease, box-shadow 180ms ease, color 180ms ease;
  background: ${l=>l.$background};
  color: ${l=>l.$textColor};
  box-shadow: ${l=>l.$boxShadow||"none"};
  @media (max-width: 640px) {
    width: 100vw;
    min-width: 0;
    left: 0;
    right: 0;
  }
`,Bv=x.div`
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 18px;
  padding-bottom: 18px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin: 0;
  max-width: ${l=>l.$maxWidth?l.$maxWidth:"none"};
  @media (max-width: 640px) {
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
    gap: 6px;
    max-width: 100vw;
  }
`,$v=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  @media (max-width: 640px) {
    gap: 8px;
  }
`,Lv=x.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,qv=x.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 24px; */
  width: 510px;
  @media (max-width: 640px) {
    display: none;
  }
`,Gv=x.button`
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
    z-index: 1201;
  }
`,Yv=x.div`
  display: none;
  @media (max-width: 640px) {
    display: ${l=>l.$open?"flex":"none"};
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
`,Xv=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-top: 12px;
`,Qv=x(Ts)`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.26px;
`,Vv=x.div`
  width: 49.48px;
  height: 44px;
  @media (max-width: 640px) {
    width: 32px;
    height: 28px;
  }
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,Zv=x.div`
  width: 38.33px;
  height: 32px;
  position: relative;
  @media (max-width: 640px) {
    width: 28px;
    height: 24px;  
 }
`;function xg({items:l=[],activeKey:o,mode:c,onModeChange:u,autoOnScroll:d=!1,scrollThreshold:m=8,sticky:y=!0,maxWidth:b}){const[g,h]=U.useState(!1),[j,T]=U.useState(Ge.GRADIENT),M=typeof c=="string",C=M?c:j,{background:_,textColor:G,boxShadow:$}=U.useMemo(()=>{switch(C){case Ge.LIGHT:return{background:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0) 100%)",textColor:"#000000"};case Ge.DARK:return{background:"#121212",textColor:"#FFFFFF"};case Ge.GRADIENT:default:return{background:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",textColor:"#000000",boxShadow:"none"}}},[C]);U.useEffect(()=>{if(!d)return;const I=()=>{const ee=(window.scrollY||document.documentElement.scrollTop||0)>m?Ge.LIGHT:Ge.GRADIENT;M||T(ee),u&&u(ee)};return I(),window.addEventListener("scroll",I,{passive:!0}),()=>window.removeEventListener("scroll",I)},[d,M,u,m]);const q=C===Ge.DARK?"/TU2025gradulate/icons/logoLight.svg":"/TU2025gradulate/icons/logoDark.svg",X=l.filter(I=>I.label!=="SHOWROOM");return U.useEffect(()=>(g?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[g]),s.jsxs(kv,{role:"banner",$sticky:y,$background:_,$textColor:G,$boxShadow:$,children:[s.jsx(Bv,{$maxWidth:b,children:s.jsxs($v,{children:[s.jsxs(Lv,{children:[s.jsx(fl,{to:"/","aria-label":"홈으로",style:{color:"inherit",textDecoration:"none"},children:s.jsx(Vv,{"aria-hidden":!0,children:s.jsx(Zv,{children:s.jsx("div",{style:{backgroundImage:`url(${q})`,width:"100%",height:"100%",backgroundSize:"contain",backgroundRepeat:"no-repeat"}})})})}),s.jsx(qv,{"aria-label":"주 메뉴",children:l.map(I=>s.jsx(Ts,{label:I.label,href:I.href,active:I.key===o},I.key))})]}),s.jsx(Gv,{"aria-label":g?"메뉴 닫기":"메뉴 열기",onClick:()=>h(I=>!I),children:s.jsx(Hv,{size:24,color:C===Ge.DARK?"#fff":"#000"})})]})}),s.jsx(Yv,{$open:g,onClick:()=>h(!1),children:s.jsx(Xv,{onClick:I=>I.stopPropagation(),children:X.map(I=>s.jsx(Qv,{label:I.label,href:I.href,active:I.key===o,style:{fontSize:18,fontWeight:500,color:"#fff",textAlign:"center"},onClick:()=>h(!1)},I.key))})})]})}xg.propTypes={items:B.arrayOf(B.shape({key:B.string.isRequired,label:B.string.isRequired,href:B.string})),activeKey:B.string,mode:B.oneOf([Ge.GRADIENT,Ge.LIGHT,Ge.DARK]),onModeChange:B.func,autoOnScroll:B.bool,scrollThreshold:B.number,sticky:B.bool,maxWidth:B.oneOfType([B.string,B.number])};const Rs="Pretendard, system-ui, -apple-system, Segoe UI, Roboto, 'Noto Sans KR', Arial, sans-serif",Iv=x.footer`
  width: 100vw;
  background: #0E0E0E;
  border-top: 1px #A1A1A1 solid;
  @media (max-width: 640px) {
    min-width: 0;
    left: 0;
    right: 0;
  }
`,Fv=x.div`
  margin: 0 auto;
  padding-left: ${l=>l.$sidePadding}px;
  padding-right: ${l=>l.$sidePadding}px;
  padding-top: 52px;
  padding-bottom: 52px;
  max-width: ${l=>`calc(${l.$maxWidth}px + ${l.$sidePadding*2}px)`};
  position: relative;
  box-sizing: border-box;
  @media (max-width: 640px) {
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 24px;
    padding-bottom: 24px;
    max-width: 100vw;
  }
`,Jv=x.div`
  font-family: ${Rs};
  font-size: 24px;
  font-weight: 700;
  color: #FAFAFA;
  margin-bottom: 36px;
  @media (max-width: 640px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`,Wv=x.nav`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  align-items: center;
  color: #F0F0F0;
  font-family: ${Rs};
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 36px;
  @media (max-width: 640px) {
    gap: 12px;
    font-size: 12px;
    margin-bottom: 16px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`,a0=x.a`
  color: inherit;
  text-decoration: none;
  opacity: 0.95;
`,Pv=x.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #909090;
  font-family: ${Rs};
  font-size: 14px;
  font-weight: 300;
  max-width: 475px;
  @media (max-width: 640px) {
    font-size: 10px;
    max-width: 100vw;
    gap: 4px;
  }
`,e2=x.div`
  position: absolute;
  right: ${l=>l.$sidePadding}px;
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
`,l0=x.a`
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
`;function vg({title:l="잔향 : 기억의 향기",nav:o=[{label:"PROJECTS",href:"/projects"},{label:"PEOPLES",href:"/peoples"},{label:"SHOWROOM",href:"/showroom"},{label:"GUESTBOOK",href:"/guestbook"},{label:"CREDITS",href:"/credits"}],copyright:c=["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:u={youtube:{href:"https://youtube.com",label:"YouTube"},instagram:{href:"https://instagram.com",label:"Instagram"}},maxWidth:d=1220,sidePadding:m=350}){return s.jsx(Iv,{role:"contentinfo",children:s.jsxs(Fv,{$sidePadding:m,$maxWidth:d,children:[s.jsx(Jv,{children:l}),s.jsx(Wv,{"aria-label":"푸터 메뉴",children:o.map(y=>{const b=y.href||"#",g=/^https?:\/\//i.test(b),h="/TU2025gradulate/";let j=b;return g||(b===h?j="/":b.startsWith(h)&&(j="/"+b.slice(h.length).replace(/^\/+/,""))),g?s.jsx(a0,{href:b,children:y.label},y.label):s.jsx(a0,{as:fl,to:j,children:y.label},y.label)})}),s.jsx(Pv,{children:c.map((y,b)=>s.jsx("div",{children:y},b))}),s.jsxs(e2,{$sidePadding:m,children:[u?.youtube?.href&&s.jsx(l0,{href:u.youtube.href,"aria-label":u.youtube.label||"YouTube",target:"_blank",rel:"noreferrer noopener",children:s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:s.jsx("path",{d:"M23.5 7.2a4 4 0 0 0-2.8-2.8C18.8 4 12 4 12 4s-6.8 0-8.7.4A4 4 0 0 0 .5 7.2 41 41 0 0 0 0 12a41 41 0 0 0 .5 4.8 4 4 0 0 0 2.8 2.8C5.2 20 12 20 12 20s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8A41 41 0 0 0 24 12a41 41 0 0 0-.5-4.8zM9.6 15.2V8.8L15.8 12l-6.2 3.2z"})})}),u?.instagram?.href&&s.jsx(l0,{href:u.instagram.href,"aria-label":u.instagram.label||"Instagram",target:"_blank",rel:"noreferrer noopener",children:s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#FFFFFF","aria-hidden":!0,children:[s.jsx("path",{d:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2A3.2 3.2 0 1 1 12 8a3.2 3.2 0 0 1 0 6.4z"}),s.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.2"}),s.jsx("path",{d:"M17.8 2H6.2A4.2 4.2 0 0 0 2 6.2v11.6A4.2 4.2 0 0 0 6.2 22h11.6A4.2 4.2 0 0 0 22 17.8V6.2A4.2 4.2 0 0 0 17.8 2zm2.6 15.8a2.6 2.6 0 0 1-2.6 2.6H6.2a2.6 2.6 0 0 1-2.6-2.6V6.2A2.6 2.6 0 0 1 6.2 3.6h11.6a2.6 2.6 0 0 1 2.6 2.6v11.6z"})]})})]})]})})}vg.propTypes={title:B.string,nav:B.arrayOf(B.shape({label:B.string.isRequired,href:B.string.isRequired})),copyright:B.arrayOf(B.string),social:B.shape({youtube:B.shape({href:B.string,label:B.string}),instagram:B.shape({href:B.string,label:B.string})}),maxWidth:B.number,sidePadding:B.number};const Ft="'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif",bg=350,i0=`${bg/1920*100}vw`,t2=`${(bg+414)/1920*100}vw`,n2=x.div`
  position: relative; background: #fff;
`,a2=x.div`
  padding-left: ${i0}; padding-right: ${i0};
`;function r0({children:l}){return s.jsx(n2,{children:s.jsx(a2,{children:l})})}const l2=x.div`
  position: relative; height: 120px; display: flex; align-items: flex-end; justify-content: center;
  font-family: ${Ft}; font-size: 40px; font-weight: 700; color: #101010; line-height: 64px; margin-top: 80px;
`,i2=x.div`
  font-family: ${Ft}; font-size: 32px; font-weight: 600; line-height: 56px; color: #000; margin-top: 18px;
`;function r2(){return s.jsxs(s.Fragment,{children:[s.jsx(l2,{children:"CREDITS"}),s.jsx(i2,{children:"잔향 : 기억의 향기"})]})}const o2=x.div`
  max-width: 374px; font-family: ${Ft}; font-size: 16px; font-weight: 300; line-height: 25.6px; color: #000; text-align: justify; margin-top: 5px;
`;function u2({text:l}){return s.jsx(o2,{children:l})}const c2=x.div`
  width: 806px; height: 375px; background: #FFF4ED; margin-top: 24px; margin-left: ${t2}; position: absolute;
`,s2=x.div`
  position: absolute; left: 136px; top: 140px; font-family: ${Ft}; font-size: 82.64px; font-weight: 500; line-height: 92.55px; color: #000;
`;function f2({children:l}){return s.jsx(c2,{children:s.jsx(s2,{children:l})})}const d2=x.div`
  display: flex; gap: 40px; margin-top: 420px; width: 1220px;
`,p2=x.div`
  width: 374px; display: flex; flex-direction: column; gap: 20px;
`,m2=x.div`
  font-family: ${Ft}; font-size: 28px; font-weight: 600; line-height: 49px; color: #000;
`,g2=x.div`
  font-family: ${Ft}; font-size: 16px; font-weight: 400; line-height: 21.6px; color: #000; text-align: justify;
`;function h2({blocks:l}){return s.jsx(d2,{children:l.map(o=>s.jsxs(p2,{children:[s.jsx(m2,{children:o.title}),s.jsx(g2,{children:o.body})]},o.title))})}const y2=x.div`
  border-bottom: ${l=>l.$last?"none":"1px #E0E0E0 solid"}; display: flex; gap: 20px; padding-bottom: 10px; margin-top: 20px; align-items: flex-start;
`,x2=x.div`
  width: 289px; height: 45px; display: flex; align-items: flex-end;
`,v2=x.div`
  font-family: ${Ft}; font-size: 20px; font-weight: 500; line-height: 22.4px; color: #202020;
`,b2=x.div`
  width: 900px; display: flex; flex-direction: column;
`;function j2({title:l,rows:o,last:c=!1}){return s.jsxs(y2,{$last:c,children:[s.jsx(x2,{children:s.jsx(v2,{children:l})}),s.jsx(b2,{children:o.map((u,d)=>s.jsx(A2,{ko:u.ko,en:u.en,divider:o.length>1&&d!==o.length-1},u.ko+u.en+d))})]})}const E2=x.div`
  padding-top: 22px; padding-bottom: 40px; border-bottom: ${l=>l.$divider?"1px #E0E0E0 solid":"none"}; display: flex; gap: 20px; align-items: flex-start;
`,S2=x.div`
  width: 135px;
`,w2=x.div`
  font-family: ${Ft}; font-size: 16px; font-weight: 300; line-height: 22.4px; color: #202020;
`,T2=x.div`
  display: flex; align-items: center;
`,R2=x.div`
  font-family: ${Ft}; font-size: 16px; font-weight: 300; line-height: 22.4px; color: #404040;
`;function A2({ko:l,en:o,divider:c=!1}){return s.jsxs(E2,{$divider:c,children:[s.jsx(S2,{children:s.jsx(w2,{children:l})}),s.jsx(T2,{children:s.jsx(R2,{children:o})})]})}const D2=x.div`
  margin-top: 60px;
`,N2=x.div`
  font-family: ${Ft}; font-size: 28px; font-weight: 600; color: #101010; margin-bottom: 24px;
`;function U2(){const l="안녕하세요. 제 20대 졸업준비위원회입니다. 그리고 이후에는 적당히 졸준위의 생각과 고생에 대한 감상을 종합해…",o=[{title:"학부장의 말씀",body:"내용 작성"},{title:"졸전담당교수 말씀",body:"내용 작성"},{title:"웹사이트팀 제작 후기",body:"내용 작성"}],c=[{title:"위원장",rows:[{ko:"홍승재",en:"Hong Seungjae"}]},{title:"부위원장",rows:[{ko:"김예린",en:"Kim Yerin"}]},{title:"총무",rows:[{ko:"진효민",en:"Jin HYOMIN"},{ko:"정민호",en:"Jeong Minho"}]},{title:"기획",rows:[{ko:"차소이",en:"Cha Soi"},{ko:"문나라",en:"Mun Nara"},{ko:"한채원",en:"Han Chaewon"}]},{title:"홍보",rows:[{ko:"이채원",en:"Lee Chaewon"},{ko:"남가림",en:"Nam Garim"}]},{title:"디자인",rows:[{ko:"구인회",en:"Gu Inhoe"},{ko:"김기윤",en:"Kim Giyun"},{ko:"박혜성",en:"Bak Hyeseong"},{ko:"석동현",en:"Seok Donghyoen"}]},{title:"웹사이트",rows:[{ko:"성수민",en:"Seong Sumin"},{ko:"김예준",en:"Kim Yejun"}]},{title:"Special Thanks",rows:[{ko:"김한종 교수",en:"Prof. Kim Hanjong"}],last:!0}];return s.jsxs("div",{style:{position:"relative"},children:[s.jsxs(r0,{children:[s.jsx(r2,{}),s.jsx(u2,{text:l})]}),s.jsx(f2,{children:"단체사진 1장"}),s.jsxs(r0,{children:[s.jsx(h2,{blocks:o}),s.jsxs(D2,{children:[s.jsxs(N2,{children:["2025 잔향",s.jsx("br",{}),"제 20대 졸업전시위원회"]}),c.map(u=>s.jsx(j2,{title:u.title,rows:u.rows,last:!!u.last},u.title))]})]})]})}const M2=x.div`
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
`,C2=x.div`
  position: relative;
  width: 55%;
  height: 100%;
  flex: 0 0 auto;
`,z2=x.img`
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
`,O2=x.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #f6f6f6 100%);
  z-index: 2;
  width: 20%;
`,_2=x.div`
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
`,o0=x.div`
  margin: 0;
  padding: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`,K2=x.h1`
    font-size: 28px;
    font-weight: 700;
    margin: 0;
 @media (max-width: 640px) {
    font-size: 16px;
 }
`,os=x.p`
    margin: 0;
@media (max-width: 640px) {
    font-size: 6px;
 }
`,H2=x(os)`
 @media (max-width: 640px) {
    display: none;
 }`;function As({nameKor:l,nameEng:o,role:c,sns:u,eMail:d,imgSrc:m,imgAlt:y}){return s.jsxs(M2,{children:[s.jsxs(C2,{children:[s.jsx(z2,{src:m,alt:y}),s.jsx(O2,{})]}),s.jsxs(_2,{children:[s.jsxs(o0,{style:{top:"50px"},children:[s.jsx(K2,{children:l}),s.jsx(os,{children:o})]}),s.jsxs(o0,{children:[s.jsx(os,{children:c}),Array.isArray(u)&&u.length>0?s.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",margin:"4px 0 0 0"},children:u.map((b,g)=>s.jsx("a",{href:b.url,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",color:"inherit",wordBreak:"break-all"},"aria-label":`${l} ${b.platform}`,children:b.url},`${b.platform}-${g}`))}):null,s.jsx(H2,{children:d?s.jsx("a",{style:{textDecoration:"none",color:"inherit"},href:`mailto:${d}`,children:d}):null})]})]})]})}As.defaultProps={sns:[]};As.propTypes={nameKor:B.string.isRequired,nameEng:B.string,role:B.string,sns:B.arrayOf(B.shape({platform:B.string.isRequired,url:B.string.isRequired})),eMail:B.string,imgSrc:B.string.isRequired,imgAlt:B.string.isRequired};const k2=x.div`
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
`,B2=x.div`
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
  left: ${l=>l.$active?"4px":"64px"};
  @media (max-width: 640px) {
    width: 28px;
    height: 18px;
    left: ${l=>l.$active?"1px":"31px"};  
 }
`,jg=x.p`
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
  color: ${l=>l.$active?"#Fafafa":"#909090"};
  font-weight: ${l=>l.$active?"700":"400"};
  @media (max-width: 640px) {
    font-size: 8px;
    margin-left: 6px;
  }
`,$2=x(jg)`
  margin-left: 32px;
  color: ${l=>l.$active?"#909090":"#Fafafa"};
  font-weight: ${l=>l.$active?"400":"700"};
  @media (max-width: 640px) {
    font-size: 8px;
    margin-left: 16px;
  }
`;function us({path:l="student",isActive:o=!1,onClick:c}){return s.jsxs(k2,{onClick:c,children:[s.jsx(jg,{$active:o,children:"교수"}),s.jsx($2,{$active:o,children:"학생"}),s.jsx(B2,{$active:o})]})}us.propTypes={path:B.oneOf(["student","professor"]),isActive:B.bool,onClick:B.func};const u0=x.a`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 24px;
  line-height: 28.8px;
  letter-spacing: 0.24px;
  font-weight: ${l=>l.$active?700:400};
  color: ${l=>l.$active?"#000":"#bababa"};
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
`;function Jr({label:l,href:o="#",active:c=!1,onClick:u,style:d,target:m,rel:y}){const g={"aria-current":c?"page":void 0,"data-active":c?"true":"false",onKeyDown:h=>{u&&(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),u(h))},onClick:u,style:d,$active:c};return o?s.jsx(u0,{href:o,target:m,rel:y,...g,children:l}):s.jsx(u0,{as:"button",type:"button",...g,style:{background:"none",border:0,...d},children:l})}Jr.propTypes={label:B.string.isRequired,href:B.string,active:B.bool,onClick:B.func,style:B.object,target:B.string,rel:B.string};const L2=x.div`
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
`,q2=x.div`
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
`,G2=x.p`
  width: auto;
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #191919;
  margin: 0;
  @media (max-width: 640px) {
   font-size: 14px;  
 }
`;function Eg({label:l,style:o}){const c="/TU2025gradulate/",d=window.matchMedia("(max-width: 640px)").matches?`${c}icons/dropDownMobileIcon.svg`:`${c}icons/arrowDropdownIcon.svg`;return s.jsxs(L2,{style:o,children:[s.jsx(G2,{children:l}),s.jsx(q2,{children:s.jsx("img",{src:d,alt:"dropdownIcon"})})]})}Eg.propTypes={label:B.string.isRequired,style:B.object};const Y2=x.div`
  display: ${l=>l.$open?"flex":"none"};
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
`,X2=x.div`
  display: flex;
  width: 90px;
  height: 20px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 52px;  
 }
`,Q2=x.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 16px;
  font-weight: ${l=>l.$selected?500:400};
  color: ${l=>l.$selected?"#191919":"#bababa"};
  margin: 0;
  padding: 0;
  @media (max-width: 640px) {
    font-size: 12px;  
 }
`;function Sg({options:l,onSelect:o,style:c,isOpen:u,position:d,selected:m}){return s.jsx(Y2,{style:c,$open:u,children:l.map((y,b)=>s.jsx(X2,{onClick:()=>o(y),children:s.jsx(Q2,{$selected:y===m,children:y})},b))})}Sg.propTypes={options:B.arrayOf(B.string).isRequired,onSelect:B.func.isRequired,style:B.object,isOpen:B.bool,position:B.any,selected:B.string};const V2=x.div`
  position: relative;
`;function Ds({label:l,options:o,onSelect:c,style:u,filter:d}){const[m,y]=ge.useState(!1),[b,g]=ge.useState({top:0,left:0}),h=ge.useRef(null),j=()=>{if(h.current){const M=h.current.getBoundingClientRect();g({top:M.bottom+window.scrollY,left:M.left+window.scrollX})}y(M=>!M)},T=M=>{c&&c(M),y(!1)};return s.jsxs(V2,{ref:h,style:u,children:[s.jsx("div",{onClick:j,children:s.jsx(Eg,{label:l,options:o,onSelect:c,style:{},filter:d})}),m&&s.jsx(Sg,{options:o,onSelect:T,style:{},isOpen:m,position:b,selected:l})]})}Ds.propTypes={label:B.string.isRequired,options:B.arrayOf(B.string).isRequired,onSelect:B.func.isRequired,style:B.object,filter:B.string};Ds.defaultProps={style:{},filter:""};const $c=x.div`
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
`,Lc=x.div`
  width: 120px;
  height: 100%;
  @media (max-width: 640px) {
    display: none;
  }
`,qc=x.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  @media (max-width: 640px) {
    display: none;
  }
`,Gc=x.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
  }
`;function wg({onCategoryChange:l,onToggleChange:o,type:c,onSortChange:u,sortLabel:d}){const m={type:c},[y,b]=ge.useState(!1),g=()=>b(Y=>{const ee=!Y;return o&&o(ee),ee}),[h,j]=ge.useState("전체"),[T,M]=ge.useState("All Projects"),C=["전체","산업디자인공학","미디어디자인공학"],_=["장영주","권오재","김 억","김한종","조남주","한민섭","홍성수","김태균"],G=["All Projects","AI & Robot","Edu & Kids","Health Care","IT & Tech","Living","Mobility"],$=["이름순","좋아요순","조회수순","팀작우선","개인작우선"],[L,q]=ge.useState("이름순"),X=d||L,I=Y=>{q(Y),u&&u(Y)};return U.useEffect(()=>{j(y?_[0]:C[0])},[y]),m.type==="project"?s.jsxs($c,{children:[s.jsx(Lc,{}),s.jsx(qc,{children:G.map(Y=>s.jsx(Jr,{label:Y,active:T===Y,onClick:()=>{M(Y),l&&l(Y)}},Y))}),s.jsx(Gc,{}),s.jsx(Ds,{label:X,options:$,onSelect:I})]}):y?s.jsxs($c,{children:[s.jsx(Lc,{}),s.jsx(qc,{children:_.map(Y=>s.jsx(Jr,{label:Y,active:h===Y,onClick:()=>{j(Y),l&&l(Y)}},Y))}),s.jsx(Gc,{}),s.jsx(us,{path:y?"professor":"student",isActive:y,onClick:g})]}):s.jsxs($c,{children:[s.jsx(Lc,{}),s.jsx(qc,{children:C.map(Y=>s.jsx(Jr,{label:Y,active:h===Y,onClick:()=>{j(Y),l&&l(Y)}},Y))}),s.jsx(Gc,{}),s.jsx(us,{path:y?"professor":"student",isActive:y,onClick:g})]})}const Z2=x.div`
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
`,I2=x.div`
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
`,F2=x.img`
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
`,J2=x.div`
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
`,W2=x.p`
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
`,Lr=x.div`
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
`,qr=x.p`
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
`,c0=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
`,Gr=x.p`
  font-weight: 300;
  margin: 0;
  font-size: 16px;
  line-height: 22.4px;
  color: #000000;
  @media (max-width: 640px) {
    font-size: 10px;
 }
`;function Ns({nameKor:l,rank:o,eMail:c,education:u,field:d,imgSrc:m,imgAlt:y}){const b=g=>Array.isArray(g)?s.jsx(c0,{children:g.map((h,j)=>s.jsx(Gr,{children:h},j))}):typeof g=="string"&&g?s.jsx(c0,{children:s.jsx(Gr,{children:g})}):null;return s.jsx(Z2,{children:s.jsxs(I2,{children:[s.jsx(F2,{src:m,alt:y}),s.jsxs(J2,{children:[s.jsx(W2,{children:l}),s.jsxs(Lr,{children:[s.jsx(qr,{children:"직위(직급)"}),s.jsx(Gr,{children:o})]}),s.jsxs(Lr,{children:[s.jsx(qr,{children:"이메일"}),s.jsx(Gr,{children:c})]}),s.jsxs(Lr,{children:[s.jsx(qr,{children:"약력"}),b(u)]}),s.jsxs(Lr,{children:[s.jsx(qr,{children:"전문 분야"}),b(d)]})]})]})})}Ns.propTypes={nameKor:B.string.isRequired,rank:B.string.isRequired,eMail:B.string.isRequired,education:B.oneOfType([B.string,B.arrayOf(B.string)]),field:B.oneOfType([B.string,B.arrayOf(B.string)]),imgSrc:B.string.isRequired,imgAlt:B.string.isRequired};Ns.defaultProps={nameKor:"홍길동",rank:"교수",eMail:"honggildong@example.com",education:[],field:[],imgSrc:"/TU2025gradulate/thumbnailExample.png",imgAlt:"홍길동 교수의 프로필 이미지"};const Us=JSON.parse('[{"num":0,"nameKor":"강유진","nameEng":"Kang Yujin","role":"Designer","department":1,"professorId":"p04","studentId":2021194003,"eMail":"rkddbwls0421@naver.com","sns":"","imgUrl":"../image/0/portrait.jpg","projectUrl":"","category":"c4","projectNum":45,"team":1,"leader":0},{"num":1,"nameKor":"고명현","nameEng":"Go Myeonghyeon","role":"Designer","department":1,"professorId":"p03","studentId":2019190002,"eMail":"aud4417@tukorea.ac.kr","sns":"","imgUrl":"../image/1/portrait.jpg","projectUrl":"","category":"c0","projectNum":0,"team":0,"leader":""},{"num":2,"nameKor":"고서영","nameEng":"Go Seoyeong","role":"Designer","department":0,"professorId":"p02","studentId":2022190001,"eMail":"rhtjdud2003@naver.com","sns":"","imgUrl":"../image/2/portrait.jpg","projectUrl":"","category":"c2","projectNum":26,"team":1,"leader":0},{"num":3,"nameKor":"고은솔","nameEng":"Ko Eunsol","role":"Designer","department":1,"professorId":"p01","studentId":2021194005,"eMail":"pinetree2021@tukorea.ac.kr","sns":"","imgUrl":"../image/3/portrait.jpg","projectUrl":"","category":"c1","projectNum":24,"team":0,"leader":""},{"num":4,"nameKor":"구예진","nameEng":"Koo Yejin","role":"Designer","department":1,"professorId":"p03","studentId":2022194002,"eMail":"ninejin63@gmail.com","sns":"","imgUrl":"../image/4/portrait.jpg","projectUrl":"","category":"c2","projectNum":27,"team":1,"leader":1},{"num":5,"nameKor":"구인회","nameEng":"Koo Inhoe","role":"Designer","department":0,"professorId":"p02","studentId":2020190001,"eMail":"eric2261@naver.com","sns":"","imgUrl":"../image/5/portrait.jpg","projectUrl":"","category":"c5","projectNum":66,"team":1,"leader":1},{"num":6,"nameKor":"권유빈","nameEng":"Kwon Yoobeen","role":"Designer","department":1,"professorId":"p02","studentId":2020194002,"eMail":"yoovebeen@naver.com","sns":"","imgUrl":"../image/6/portrait.jpg","projectUrl":"","category":"c2","projectNum":26,"team":1,"leader":1},{"num":7,"nameKor":"권지민","nameEng":"Kwon Jimin","role":"Designer","department":1,"professorId":"p03","studentId":2022194038,"eMail":"jmnee0115@naver.com","sns":"","imgUrl":"../image/7/portrait.jpg","projectUrl":"","category":"c4","projectNum":46,"team":0,"leader":""},{"num":8,"nameKor":"김강민","nameEng":"Kim Gangmin","role":"Designer","department":0,"professorId":"p04","studentId":2020192003,"eMail":"min7053@naver.com","sns":"","imgUrl":"../image/8/portrait.jpg","projectUrl":"","category":"c5","projectNum":67,"team":1,"leader":1},{"num":9,"nameKor":"김기윤","nameEng":"Kim Giyun","role":"Designer","department":0,"professorId":"p02","studentId":2020190002,"eMail":"tkenrnen112@naver.com","sns":"","imgUrl":"../image/9/portrait.jpg","projectUrl":"","category":"c5","projectNum":68,"team":1,"leader":0},{"num":10,"nameKor":"김동주","nameEng":"Kim Dongju","role":"Designer","department":0,"professorId":"p00","studentId":2020190005,"eMail":"dongju3144@daum.net","sns":"","imgUrl":"../image/10/portrait.jpg","projectUrl":"","category":"c3","projectNum":34,"team":0,"leader":""},{"num":11,"nameKor":"김민석","nameEng":"Kim Minseok","role":"Designer","department":0,"professorId":"p02","studentId":2020190006,"eMail":"minsuk2468@naver.com","sns":"","imgUrl":"../image/11/portrait.jpg","projectUrl":"","category":"c4","projectNum":47,"team":0,"leader":""},{"num":12,"nameKor":"김세린","nameEng":"Kim Serin","role":"Designer","department":0,"professorId":"p04","studentId":2021192006,"eMail":"kara7094@naver.com","sns":"","imgUrl":"../image/12/portrait.jpg","projectUrl":"","category":"c4","projectNum":48,"team":0,"leader":""},{"num":13,"nameKor":"김소리","nameEng":"Kim Sori","role":"Designer","department":1,"professorId":"p03","studentId":2021194037,"eMail":"mulsik11@gmail.com","sns":"","imgUrl":"../image/13/portrait.jpg","projectUrl":"","category":"c4","projectNum":49,"team":0,"leader":""},{"num":14,"nameKor":"김예린","nameEng":"Kim Yerin","role":"Designer","department":0,"professorId":"p02","studentId":2021190007,"eMail":"ask7240@naver.com","sns":"","imgUrl":"../image/14/portrait.jpg","projectUrl":"","category":"c5","projectNum":69,"team":0,"leader":""},{"num":15,"nameKor":"김예준","nameEng":"Kim Yejun","role":"Designer","department":1,"professorId":"p01","studentId":2020194006,"eMail":"optimusjun15@naver.com","sns":"","imgUrl":"../image/15/portrait.jpg","projectUrl":"","category":"c4","projectNum":50,"team":0,"leader":""},{"num":16,"nameKor":"김윤곤","nameEng":"Kim Yungon","role":"Designer","department":1,"professorId":"p03","studentId":2020194008,"eMail":"yunkon722@naver.com","sns":"","imgUrl":"../image/16/portrait.jpg","projectUrl":"","category":"c0","projectNum":1,"team":0,"leader":""},{"num":17,"nameKor":"김윤서","nameEng":"Kim Yunseo","role":"Designer","department":1,"professorId":"p02","studentId":2021192007,"eMail":"ekdma39@naver.com","sns":"","imgUrl":"../image/17/portrait.jpg","projectUrl":"","category":"c4","projectNum":51,"team":0,"leader":""},{"num":18,"nameKor":"김윤성","nameEng":"Kim Yunseong","role":"Designer","department":0,"professorId":"p00","studentId":2020192038,"eMail":"dbstjd9061@naver.com","sns":"","imgUrl":"../image/18/portrait.jpg","projectUrl":"","category":"c0","projectNum":2,"team":0,"leader":""},{"num":19,"nameKor":"김주은","nameEng":"Kim Jueun","role":"Designer","department":1,"professorId":"p02","studentId":2022194007,"eMail":"kimjueun6648@naver.com","sns":"","imgUrl":"../image/19/portrait.jpg","projectUrl":"","category":"c2","projectNum":28,"team":1,"leader":0},{"num":20,"nameKor":"김지민","nameEng":"Kim Jimin","role":"Designer","department":0,"professorId":"p02","studentId":2020190011,"eMail":"a01039029588@gmail.com","sns":"","imgUrl":"../image/20/portrait.jpg","projectUrl":"","category":"c3","projectNum":35,"team":1,"leader":0},{"num":21,"nameKor":"김지혜","nameEng":"Kim Jihye","role":"Designer","department":0,"professorId":"p05","studentId":2021190012,"eMail":"kjj0209077@naver.com","sns":"","imgUrl":"../image/21/portrait.jpg","projectUrl":"","category":"c5","projectNum":70,"team":1,"leader":1},{"num":22,"nameKor":"김한슬","nameEng":"Kim Hanseul","role":"Designer","department":0,"professorId":"p04","studentId":2021192008,"eMail":"pdl02081616@gmail.com","sns":"","imgUrl":"../image/22/portrait.jpg","projectUrl":"","category":"c3","projectNum":36,"team":0,"leader":""},{"num":23,"nameKor":"남가림","nameEng":"Nam Garim","role":"Designer","department":0,"professorId":"p00","studentId":2021190014,"eMail":"garim0402@naver.com","sns":"","imgUrl":"../image/23/portrait.jpg","projectUrl":"","category":"c5","projectNum":71,"team":1,"leader":1},{"num":24,"nameKor":"남궁두경","nameEng":"Namgoong Doogyung","role":"Designer","department":0,"professorId":"p05","studentId":2020192012,"eMail":"namgoongdg@gmail.com","sns":"","imgUrl":"../image/24/portrait.jpg","projectUrl":"","category":"c0","projectNum":3,"team":1,"leader":1},{"num":25,"nameKor":"노희재","nameEng":"Roe Heejae","role":"Designer","department":0,"professorId":"p02","studentId":2019192013,"eMail":"wjdrl1144@gmail.com","sns":"","imgUrl":"../image/25/portrait.jpg","projectUrl":"","category":"c3","projectNum":37,"team":0,"leader":""},{"num":26,"nameKor":"마은성","nameEng":"Ma Eunseong","role":"Designer","department":0,"professorId":"p05","studentId":2021190016,"eMail":"mes3788@naver.com","sns":"","imgUrl":"../image/26/portrait.jpg","projectUrl":"","category":"c5","projectNum":70,"team":1,"leader":0},{"num":27,"nameKor":"문나라","nameEng":"Moon Nara","role":"Designer","department":0,"professorId":"p02","studentId":2021192009,"eMail":"skfk020529@naver.com","sns":"","imgUrl":"../image/27/portrait.jpg","projectUrl":"","category":"c3","projectNum":38,"team":0,"leader":""},{"num":28,"nameKor":"문지형","nameEng":"Moon Jihyeong","role":"Designer","department":0,"professorId":"p05","studentId":2020192014,"eMail":"dogtable4099@naver.com","sns":"","imgUrl":"../image/28/portrait.jpg","projectUrl":"","category":"c0","projectNum":3,"team":1,"leader":0},{"num":29,"nameKor":"민혜연","nameEng":"Min Hyeyeon","role":"Designer","department":0,"professorId":"p00","studentId":2022192010,"eMail":"ajtlqkf_@naver.com","sns":"","imgUrl":"../image/29/portrait.jpg","projectUrl":"","category":"c2","projectNum":29,"team":0,"leader":""},{"num":30,"nameKor":"박민규","nameEng":"Park Mingyu","role":"Designer","department":1,"professorId":"p03","studentId":2019194041,"eMail":"mingyu6393@naver.com","sns":"","imgUrl":"../image/30/portrait.jpg","projectUrl":"","category":"c0","projectNum":4,"team":0,"leader":""},{"num":31,"nameKor":"박서영","nameEng":"Park Seoyoung","role":"Designer","department":1,"professorId":"p03","studentId":2021192011,"eMail":"pszer0@naver.com","sns":"","imgUrl":"../image/31/portrait.jpg","projectUrl":"","category":"c4","projectNum":52,"team":0,"leader":""},{"num":32,"nameKor":"박예인","nameEng":"Park Yein","role":"Designer","department":1,"professorId":"p01","studentId":2021194013,"eMail":"pyi0413@naver.com","sns":"","imgUrl":"../image/32/portrait.jpg","projectUrl":"","category":"c4","projectNum":45,"team":1,"leader":1},{"num":33,"nameKor":"박예진","nameEng":"Park Yejin","role":"Designer","department":0,"professorId":"p00","studentId":2021190018,"eMail":"yejin6607@naver.com","sns":"","imgUrl":"../image/33/portrait.jpg","projectUrl":"","category":"c5","projectNum":71,"team":1,"leader":0},{"num":34,"nameKor":"박재민","nameEng":"Park Jaemin","role":"Designer","department":1,"professorId":"p03","studentId":2020192016,"eMail":"shiibadog@naver.com","sns":"","imgUrl":"../image/34/portrait.jpg","projectUrl":"","category":"c2","projectNum":27,"team":1,"leader":0},{"num":35,"nameKor":"박정훈","nameEng":"Park Jeonghun","role":"Designer","department":0,"professorId":"p05","studentId":2022192012,"eMail":"hhh8353@naver.com","sns":"","imgUrl":"../image/35/portrait.jpg","projectUrl":"","category":"c2","projectNum":30,"team":0,"leader":""},{"num":36,"nameKor":"박지수","nameEng":"Park Jisoo","role":"Designer","department":1,"professorId":"p03","studentId":2021194014,"eMail":"popopo0128@naver.com","sns":"","imgUrl":"../image/36/portrait.jpg","projectUrl":"","category":"c0","projectNum":5,"team":0,"leader":""},{"num":37,"nameKor":"박해인","nameEng":"Park Haein","role":"Designer","department":0,"professorId":"p06","studentId":2022192014,"eMail":"haein061e@gmail.com","sns":"","imgUrl":"../image/37/portrait.jpg","projectUrl":"","category":"c5","projectNum":72,"team":0,"leader":""},{"num":38,"nameKor":"박현","nameEng":"Park Hyun","role":"Designer","department":0,"professorId":"p04","studentId":2022190039,"eMail":"prefrog2@naver.com","sns":"","imgUrl":"../image/38/portrait.jpg","projectUrl":"","category":"c4","projectNum":53,"team":1,"leader":1},{"num":39,"nameKor":"박혜성","nameEng":"Park Hyeseong","role":"Designer","department":0,"professorId":"p00","studentId":2021190020,"eMail":"hyesungpark1128@gmail.com","sns":"","imgUrl":"../image/39/portrait.jpg","projectUrl":"","category":"c5","projectNum":73,"team":0,"leader":""},{"num":40,"nameKor":"박효정","nameEng":"Park Hyojung","role":"Designer","department":0,"professorId":"p02","studentId":2021190021,"eMail":"lucymrx@naver.com","sns":"","imgUrl":"../image/40/portrait.jpg","projectUrl":"","category":"c4","projectNum":54,"team":0,"leader":""},{"num":41,"nameKor":"배아영","nameEng":"Bae Ayeong","role":"Designer","department":1,"professorId":"p01","studentId":2022194014,"eMail":"f3_ea@naver.com","sns":"","imgUrl":"../image/41/portrait.jpg","projectUrl":"","category":"c0","projectNum":6,"team":0,"leader":""},{"num":42,"nameKor":"배혜림","nameEng":"Bae Hyelim","role":"Designer","department":0,"professorId":"p05","studentId":2021192013,"eMail":"bhl00012@naver.com","sns":"","imgUrl":"../image/42/portrait.jpg","projectUrl":"","category":"c0","projectNum":7,"team":1,"leader":0},{"num":43,"nameKor":"백대한","nameEng":"Baek Daehan","role":"Designer","department":0,"professorId":"p05","studentId":2020192039,"eMail":"qoreogks789@naver.com","sns":"","imgUrl":"../image/43/portrait.jpg","projectUrl":"","category":"c0","projectNum":8,"team":0,"leader":""},{"num":44,"nameKor":"백미나","nameEng":"Baek Mina","role":"Designer","department":0,"professorId":"p06","studentId":2021190023,"eMail":"wbwyhr@gmail.com","sns":"","imgUrl":"../image/44/portrait.jpg","projectUrl":"","category":"c4","projectNum":55,"team":0,"leader":""},{"num":45,"nameKor":"서연주","nameEng":"Seo Yeonju","role":"Designer","department":1,"professorId":"p02","studentId":2022194015,"eMail":"syj0305290529@gmail.com","sns":"","imgUrl":"../image/45/portrait.jpg","projectUrl":"","category":"c2","projectNum":28,"team":1,"leader":1},{"num":46,"nameKor":"서원진","nameEng":"Seo Wonjin","role":"Designer","department":0,"professorId":"p05","studentId":2019152026,"eMail":"tjdnjswls4981@naver.com","sns":"","imgUrl":"../image/46/portrait.jpg","projectUrl":"","category":"c4","projectNum":56,"team":0,"leader":""},{"num":47,"nameKor":"석동현","nameEng":"Suk Donghyun","role":"Designer","department":0,"professorId":"p06","studentId":2020190015,"eMail":"andysuk0108@naver.com","sns":"","imgUrl":"../image/47/portrait.jpg","projectUrl":"","category":"c5","projectNum":66,"team":1,"leader":0},{"num":48,"nameKor":"성수민","nameEng":"Seong Sumin","role":"Designer","department":1,"professorId":"p02","studentId":2020194016,"eMail":"epwyqqu309@gmail.com","sns":"","imgUrl":"../image/48/portrait.jpg","projectUrl":"","category":"c3","projectNum":39,"team":1,"leader":1},{"num":49,"nameKor":"성유승","nameEng":"Sung Yuseung","role":"Designer","department":1,"professorId":"p02","studentId":2019122021,"eMail":"usngsung0830@naver.com","sns":"","imgUrl":"../image/49/portrait.jpg","projectUrl":"","category":"c1","projectNum":25,"team":1,"leader":0},{"num":50,"nameKor":"송지원","nameEng":"Song Jiwon","role":"Designer","department":0,"professorId":"p04","studentId":2021190024,"eMail":"wldnjs0762@naver.com","sns":"","imgUrl":"../image/50/portrait.jpg","projectUrl":"","category":"c0","projectNum":9,"team":1,"leader":1},{"num":51,"nameKor":"신산하","nameEng":"Shin Sanha","role":"Designer","department":1,"professorId":"p02","studentId":2021192014,"eMail":"sanha@tukorea.ac.kr","sns":"","imgUrl":"../image/51/portrait.jpg","projectUrl":"","category":"c3","projectNum":39,"team":1,"leader":0},{"num":52,"nameKor":"신주혜","nameEng":"Shin Juhye","role":"Designer","department":0,"professorId":"p05","studentId":2022190019,"eMail":"emily3652@naver.com","sns":"","imgUrl":"../image/52/portrait.jpg","projectUrl":"","category":"c0","projectNum":10,"team":1,"leader":0},{"num":53,"nameKor":"신주희","nameEng":"Shin Juhui","role":"Designer","department":1,"professorId":"p07","studentId":2022194016,"eMail":"lucytomato@naver.com","sns":"","imgUrl":"../image/53/portrait.jpg","projectUrl":"","category":"c3","projectNum":40,"team":0,"leader":""},{"num":54,"nameKor":"심태섭","nameEng":"Sim Taeseob","role":"Designer","department":1,"professorId":"p01","studentId":2020194017,"eMail":"1212sts@naver.com","sns":"","imgUrl":"../image/54/portrait.jpg","projectUrl":"","category":"c0","projectNum":11,"team":0,"leader":""},{"num":55,"nameKor":"안상은","nameEng":"An Sangeun","role":"Designer","department":1,"professorId":"p03","studentId":2022194018,"eMail":"itkddms@naver.com","sns":"","imgUrl":"../image/55/portrait.jpg","projectUrl":"","category":"c4","projectNum":57,"team":1,"leader":1},{"num":56,"nameKor":"염수민","nameEng":"Yeom Sumin","role":"Designer","department":1,"professorId":"p01","studentId":2022194021,"eMail":"yeomsumin030827@gmail.com","sns":"","imgUrl":"../image/56/portrait.jpg","projectUrl":"","category":"c4","projectNum":58,"team":0,"leader":""},{"num":57,"nameKor":"유수현","nameEng":"Ryu Soohyun","role":"Designer","department":0,"professorId":"p06","studentId":2022192019,"eMail":"suhyeon9145@naver.com","sns":"","imgUrl":"../image/57/portrait.jpg","projectUrl":"","category":"c2","projectNum":31,"team":1,"leader":1},{"num":58,"nameKor":"윤모란","nameEng":"Yoon Moran","role":"Designer","department":0,"professorId":"p06","studentId":2022190024,"eMail":"moran_a_486@naver.com","sns":"","imgUrl":"../image/58/portrait.jpg","projectUrl":"","category":"c2","projectNum":31,"team":1,"leader":0},{"num":59,"nameKor":"윤서희","nameEng":"Yoon Seohee","role":"Designer","department":0,"professorId":"p00","studentId":2020192021,"eMail":"dbstjgml000@naver.com","sns":"","imgUrl":"../image/59/portrait.jpg","projectUrl":"","category":"c0","projectNum":12,"team":0,"leader":""},{"num":60,"nameKor":"윤재익","nameEng":"Yun Jaeik","role":"Designer","department":1,"professorId":"p01","studentId":2020194018,"eMail":"jwodlr10014@naver.com","sns":"","imgUrl":"../image/60/portrait.jpg","projectUrl":"","category":"c0","projectNum":13,"team":0,"leader":""},{"num":61,"nameKor":"이교연","nameEng":"Lee Gyoyeon","role":"Designer","department":0,"professorId":"p01","studentId":2022192038,"eMail":"grace121516@naver.com","sns":"","imgUrl":"../image/61/portrait.jpg","projectUrl":"","category":"c2","projectNum":32,"team":0,"leader":""},{"num":62,"nameKor":"이도훈","nameEng":"Lee Dohun","role":"Designer","department":0,"professorId":"p02","studentId":2020190025,"eMail":"bestson0137@naver.com","sns":"","imgUrl":"../image/62/portrait.jpg","projectUrl":"","category":"c5","projectNum":74,"team":0,"leader":""},{"num":63,"nameKor":"이민욱","nameEng":"Lee Minuk","role":"Designer","department":1,"professorId":"p01","studentId":2020194021,"eMail":"lmu0306@naver.com","sns":"","imgUrl":"../image/63/portrait.jpg","projectUrl":"","category":"c4","projectNum":59,"team":0,"leader":""},{"num":64,"nameKor":"이상","nameEng":"Lee Sang","role":"Designer","department":0,"professorId":"p02","studentId":2020190027,"eMail":"23isgood@naver.com","sns":"","imgUrl":"../image/64/portrait.jpg","projectUrl":"","category":"c3","projectNum":35,"team":1,"leader":1},{"num":65,"nameKor":"이영","nameEng":"Lee Young","role":"Designer","department":1,"professorId":"p03","studentId":2022194025,"eMail":"young2003_@naver.com","sns":"","imgUrl":"../image/65/portrait.jpg","projectUrl":"","category":"c4","projectNum":57,"team":1,"leader":0},{"num":66,"nameKor":"이영재","nameEng":"Lee Youngjae","role":"Designer","department":1,"professorId":"p03","studentId":2020194023,"eMail":"buwong123@naver.com","sns":"","imgUrl":"../image/66/portrait.jpg","projectUrl":"","category":"c0","projectNum":14,"team":1,"leader":0},{"num":67,"nameKor":"이웅찬","nameEng":"Lee Woongchan","role":"Designer","department":0,"professorId":"p02","studentId":2020192028,"eMail":"dldndcks01@naver.com","sns":"","imgUrl":"../image/67/portrait.jpg","projectUrl":"","category":"c3","projectNum":41,"team":0,"leader":""},{"num":68,"nameKor":"이준오","nameEng":"Lee Juno","role":"Designer","department":0,"professorId":"p00","studentId":2020190030,"eMail":"ljuno421@naver.com","sns":"","imgUrl":"../image/68/portrait.jpg","projectUrl":"","category":"c0","projectNum":15,"team":1,"leader":1},{"num":69,"nameKor":"이지민","nameEng":"Lee Jimin","role":"Designer","department":1,"professorId":"p02","studentId":2020194026,"eMail":"ibs7533@naver.com","sns":"","imgUrl":"../image/69/portrait.jpg","projectUrl":"","category":"c1","projectNum":25,"team":1,"leader":1},{"num":70,"nameKor":"이지현","nameEng":"Lee Jihyeon","role":"Designer","department":0,"professorId":"p04","studentId":2022192023,"eMail":"dlwlgus1102@naver.com","sns":"","imgUrl":"../image/70/portrait.jpg","projectUrl":"","category":"c5","projectNum":67,"team":1,"leader":0},{"num":71,"nameKor":"이채연","nameEng":"Lee Chaeyeon","role":"Designer","department":1,"professorId":"p07","studentId":2021194022,"eMail":"cvgh6835@naver.com","sns":"","imgUrl":"../image/71/portrait.jpg","projectUrl":"","category":"c0","projectNum":16,"team":0,"leader":""},{"num":72,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Designer","department":0,"professorId":"p06","studentId":2022192024,"eMail":"chaerry3907@naver.com","sns":"","imgUrl":"../image/72/portrait.jpg","projectUrl":"","category":"c0","projectNum":7,"team":1,"leader":1},{"num":73,"nameKor":"이채원","nameEng":"Lee Chaewon","role":"Designer","department":1,"professorId":"p03","studentId":2021194023,"eMail":"coehfdl2222@naver.com","sns":"","imgUrl":"../image/73/portrait.jpg","projectUrl":"","category":"c0","projectNum":14,"team":1,"leader":1},{"num":74,"nameKor":"임세준","nameEng":"Im Sejun","role":"Designer","department":0,"professorId":"p04","studentId":2019190043,"eMail":"helicat123@naver.com","sns":"","imgUrl":"../image/74/portrait.jpg","projectUrl":"","category":"c5","projectNum":75,"team":1,"leader":1},{"num":75,"nameKor":"임소이","nameEng":"Yim Soie","role":"Designer","department":0,"professorId":"p05","studentId":2022190030,"eMail":"soie0410@naver.com","sns":"","imgUrl":"../image/75/portrait.jpg","projectUrl":"","category":"c0","projectNum":17,"team":1,"leader":1},{"num":76,"nameKor":"임종석","nameEng":"Lim Jongseok","role":"Designer","department":0,"professorId":"p06","studentId":2020192032,"eMail":"rimjs01@naver.com","sns":"","imgUrl":"../image/76/portrait.jpg","projectUrl":"","category":"c0","projectNum":18,"team":0,"leader":""},{"num":77,"nameKor":"전준범","nameEng":"Jeon Junbeom","role":"Designer","department":1,"professorId":"p01","studentId":2021194028,"eMail":"jbjeon0814@gmail.com","sns":"","imgUrl":"../image/77/portrait.jpg","projectUrl":"","category":"c4","projectNum":60,"team":0,"leader":""},{"num":78,"nameKor":"정문선","nameEng":"Jung Moonsun","role":"Designer","department":0,"professorId":"p02","studentId":2020190033,"eMail":"munseon9822@naver.com","sns":"","imgUrl":"../image/78/portrait.jpg","projectUrl":"","category":"c3","projectNum":42,"team":0,"leader":""},{"num":79,"nameKor":"정민호","nameEng":"Jung Minho","role":"Designer","department":0,"professorId":"p04","studentId":2020190034,"eMail":"jmh011014@naver.com","sns":"","imgUrl":"../image/79/portrait.jpg","projectUrl":"","category":"c5","projectNum":68,"team":1,"leader":1},{"num":80,"nameKor":"정유진","nameEng":"Jung Yuzin","role":"Designer","department":0,"professorId":"p05","studentId":2022190033,"eMail":"akf0301@naver.com","sns":"","imgUrl":"../image/80/portrait.jpg","projectUrl":"","category":"c5","projectNum":76,"team":0,"leader":""},{"num":81,"nameKor":"정지원","nameEng":"Jung Jiwon","role":"Designer","department":0,"professorId":"p06","studentId":2022192025,"eMail":"marcellar030328@naver.com","sns":"","imgUrl":"../image/81/portrait.jpg","projectUrl":"","category":"c0","projectNum":17,"team":1,"leader":0},{"num":82,"nameKor":"정혜원","nameEng":"Jeong Hyewon","role":"Designer","department":0,"professorId":"p06","studentId":2021190034,"eMail":"jeonghyewon020705@naver.com","sns":"","imgUrl":"../image/82/portrait.jpg","projectUrl":"","category":"c0","projectNum":10,"team":1,"leader":1},{"num":83,"nameKor":"정혜조","nameEng":"Jeong Hyejo","role":"Designer","department":0,"professorId":"p00","studentId":2022192028,"eMail":"hyejo5614@naver.com","sns":"","imgUrl":"../image/83/portrait.jpg","projectUrl":"","category":"c4","projectNum":61,"team":0,"leader":""},{"num":84,"nameKor":"정호균","nameEng":"Jeong Hokyun","role":"Designer","department":1,"professorId":"p01","studentId":2020194031,"eMail":"hohokyun@naver.com","sns":"","imgUrl":"../image/84/portrait.jpg","projectUrl":"","category":"c4","projectNum":62,"team":0,"leader":""},{"num":85,"nameKor":"조선화","nameEng":"Jo Sunhwa","role":"Designer","department":0,"professorId":"p04","studentId":2022192039,"eMail":"jo5629@naver.com","sns":"","imgUrl":"../image/85/portrait.jpg","projectUrl":"","category":"c4","projectNum":53,"team":1,"leader":0},{"num":86,"nameKor":"조채빈","nameEng":"Cho Chaebin","role":"Designer","department":0,"professorId":"p00","studentId":2021192029,"eMail":"cheabin0000@naver.com","sns":"","imgUrl":"../image/86/portrait.jpg","projectUrl":"","category":"c0","projectNum":19,"team":0,"leader":""},{"num":87,"nameKor":"주예지","nameEng":"Ju Yeji","role":"Designer","department":1,"professorId":"p03","studentId":2022194040,"eMail":"jooyeiji@naver.com","sns":"","imgUrl":"../image/87/portrait.jpg","projectUrl":"","category":"c0","projectNum":20,"team":0,"leader":""},{"num":88,"nameKor":"진세원","nameEng":"Jin Sewon","role":"Designer","department":0,"professorId":"p00","studentId":2022192030,"eMail":"sewoneee@naver.com","sns":"","imgUrl":"../image/88/portrait.jpg","projectUrl":"","category":"c0","projectNum":15,"team":1,"leader":0},{"num":89,"nameKor":"진효민","nameEng":"Jin Hyomin","role":"Designer","department":0,"professorId":"p07","studentId":2022190040,"eMail":"jhm8912@naver.com","sns":"","imgUrl":"../image/89/portrait.jpg","projectUrl":"","category":"c4","projectNum":63,"team":0,"leader":""},{"num":90,"nameKor":"차소이","nameEng":"Cha Soyi","role":"Designer","department":0,"professorId":"p06","studentId":2022192040,"eMail":"osjj2202@naver.com","sns":"","imgUrl":"../image/90/portrait.jpg","projectUrl":"","category":"c0","projectNum":21,"team":0,"leader":""},{"num":91,"nameKor":"차한비","nameEng":"Cha Hanbi","role":"Designer","department":0,"professorId":"p02","studentId":2022192031,"eMail":"cha4786@naver.com","sns":"","imgUrl":"../image/91/portrait.jpg","projectUrl":"","category":"c2","projectNum":33,"team":0,"leader":""},{"num":92,"nameKor":"최가현","nameEng":"Choi Gahyun","role":"Designer","department":1,"professorId":"p07","studentId":2022194034,"eMail":"poiulkjhmnb098@naver.com","sns":"","imgUrl":"../image/92/portrait.jpg","projectUrl":"","category":"c3","projectNum":43,"team":0,"leader":""},{"num":93,"nameKor":"한채원","nameEng":"Han Chaewon","role":"Designer","department":0,"professorId":"p04","studentId":2021190036,"eMail":"09clara@naver.com","sns":"","imgUrl":"../image/93/portrait.jpg","projectUrl":"","category":"c4","projectNum":64,"team":0,"leader":""},{"num":94,"nameKor":"함은서","nameEng":"Ham Eunseo","role":"Designer","department":1,"professorId":"p03","studentId":2021192034,"eMail":"hamunseo0894@naver.com","sns":"","imgUrl":"../image/94/portrait.jpg","projectUrl":"","category":"c0","projectNum":22,"team":0,"leader":""},{"num":95,"nameKor":"허도윤","nameEng":"Heo Doyun","role":"Designer","department":1,"professorId":"p03","studentId":2022194041,"eMail":"saver2075@icloud.com","sns":"","imgUrl":"../image/95/portrait.jpg","projectUrl":"","category":"c3","projectNum":44,"team":0,"leader":""},{"num":96,"nameKor":"허지유","nameEng":"Heo Jiyu","role":"Designer","department":0,"professorId":"p04","studentId":2021192035,"eMail":"jjoojjoo0314@naver.com","sns":"","imgUrl":"../image/96/portrait.jpg","projectUrl":"","category":"c0","projectNum":9,"team":1,"leader":0},{"num":97,"nameKor":"홍승재","nameEng":"Hong Seungjae","role":"Designer","department":0,"professorId":"p02","studentId":2020192036,"eMail":"h010505@naver.com","sns":"","imgUrl":"../image/97/portrait.jpg","projectUrl":"","category":"c4","projectNum":65,"team":0,"leader":""},{"num":98,"nameKor":"홍지우","nameEng":"Hong Jiwoo","role":"Designer","department":0,"professorId":"p04","studentId":2021192036,"eMail":"hongjiwoo222@naver.com","sns":"","imgUrl":"../image/98/portrait.jpg","projectUrl":"","category":"c5","projectNum":75,"team":1,"leader":0},{"num":99,"nameKor":"황수정","nameEng":"Hwang Sujeong","role":"Designer","department":0,"professorId":"p05","studentId":2022190036,"eMail":"zzxcvvb12@gmail.com","sns":"","imgUrl":"../image/99/portrait.jpg","projectUrl":"","category":"c0","projectNum":23,"team":0,"leader":""}]'),P2=[{id:"p00",nameKor:"장영주",nameEng:"Jang Youngjoo",rank:"학부장, 교수",email:"jyj@tukorea.ac.kr",education:["㈜LG 전자 디자인 연구소","㈜인터디자인 디자인 기획실장","한국디지털디자인학회 이사","경기도 시흥시 정책기획단 정책위원","제품디자인·브랜드 개발센터 [EH]책임교수","디자인비지니스혁신 센터장"],field:["제품디자인·브랜드 개발","디자인 조직과 협동적 Process","제품디자인과 산업기술의 통합적 시스템 구축"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524695988100.jpg"},{id:"p01",nameKor:"권오재",nameEng:"Kwon Ojae",rank:"교수",email:"kwsokw@tukorea.ac.kr",education:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],field:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524642556100.jpg"},{id:"p02",nameKor:"김 억",nameEng:"Kim Eok",rank:"교수, 학생처장",email:"kimeok@tukorea.ac.kr",education:["㈜LG전자 디자인경영센터 선임연구원","KAIST 총동문회 이사","한국산업디자이너협회 이사 / 한국서비스디자인학회 이사","한국디자인기초조형학회 / 한국디자인학회 이사","디자인융합전문대학원 사업단장"],field:["디자인 전략 및 기획","서비스디자인 및 PSS(Product-Service System) 개발","도시 공공 디자인"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524658322100.jpg"},{id:"p03",nameKor:"김한종",nameEng:"Kim Hanjong",rank:"조교수, PD교수",email:"hanjongkim@tukorea.ac.kr",education:["AR 기반의 인터랙티브 제품 프로토타이핑 도구 개발","이동형음압병동의 디자인 요구사항 수립 연구","이동형음압병동 설계를 위한 디자인 도구 개발","한국기계연구원 산업용 SW UX/UI 가이드라인 개발"],field:["Web 기반 3D 그래픽스","SW 시스템 디자인 / 프론트엔드 개발","디자인 지원 도구 개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524669896100.jpg"},{id:"p04",nameKor:"조남주",nameEng:"Jo Namjoo",rank:"교수,특별보좌역",email:"njjoh@tukorea.ac.kr",education:["임시 데이터","임시 데이터","임시 데이터","임시 데이터"],field:["가구 디자인 엔지니어링","지속가능한 공공디자인","제품디자인 엔지니어링"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524711232100.jpg"},{id:"p05",nameKor:"한민섭",nameEng:"Han Minseop",rank:"부교수",email:"mshan@tukorea.ac.kr",education:["CISD정보저장기기 연구센터 전문연구원","㈜코닝 정밀소재 책임연구원","㈜삼성전자 생산기술연구소 책임연구원"],field:["나노/마이크로 초정밀 미세 가공 공정","Equipment H/W 설계 및 시뮬레이션","융복합 가공 시스템 설계"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524614469100.jpg"},{id:"p06",nameKor:"홍성수",nameEng:"Hong Seongsu",rank:"교수, 국제처장",email:"hss@tukorea.ac.kr",education:["3차원 의료영상시스템(MRI) 제품설계 및 디자인","다족형견마로봇 / 헬스케어로봇 / 재활보조로봇","식사보조로봇/ 수중로봇/ 청소로봇 / 웨어러블 로봇","협동로봇/ 자율주행로봇/ 순찰로봇/ 공항안내로봇 등 90여종 로봇 개발"],field:["로봇 시스템 개발/ 로봇디자인/ HRI 디자인","로봇 문화콘텐츠 기술개발","신기술 전시기획/ 전시시스템개발"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1711524724386100.jpg"},{id:"p07",nameKor:"김태균",nameEng:"Kim Taekyun",rank:"조교수, 진로취업지도교수",email:"tgkim1design@tukorea.ac.kr",education:["영국, 영국 국제디자인박람회전시 ‘London 100% Design‘ 초청 출품","중국, SUPER DESIGNERS: Exploration of Creative Forms, The Boundaries of Design Forms 초청 출품","INNOCHINA 대상","나는글로벌벤처다 동상","Spark Awards-Silver"],field:["AI 기반 제품·공공시설물 디자인 실무·방법론","UX 중심 디자인 전략·개발","지식 주도 디자인 아이디에이션 기반 실무 디자인 설계 및 교수법"],imgUrl:"https://design.tukorea.ac.kr/sites/design/atchmnfl/profl/211/temp_1724738930608100.jpg"}],xi=JSON.parse('[{"members":[1],"category":"c0","projectNum":0,"titleKor":"한국어 타이틀 1","titleEng":"EngTitle 1","galleryCount":1,"description":"작품 설명 내용"},{"members":[16],"category":"c0","projectNum":1,"titleKor":"한국어 타이틀 2","titleEng":"EngTitle 2","galleryCount":1,"description":"작품 설명 내용"},{"members":[18],"category":"c0","projectNum":2,"titleKor":"한국어 타이틀 3","titleEng":"EngTitle 3","galleryCount":1,"description":"작품 설명 내용"},{"members":[24,28],"category":"c0","projectNum":3,"titleKor":"한국어 타이틀 4","titleEng":"EngTitle 4","galleryCount":1,"description":"작품 설명 내용"},{"members":[30],"category":"c0","projectNum":4,"titleKor":"한국어 타이틀 5","titleEng":"EngTitle 5","galleryCount":1,"description":"작품 설명 내용"},{"members":[36],"category":"c0","projectNum":5,"titleKor":"한국어 타이틀 6","titleEng":"EngTitle 6","galleryCount":1,"description":"작품 설명 내용"},{"members":[41],"category":"c0","projectNum":6,"titleKor":"한국어 타이틀 7","titleEng":"EngTitle 7","galleryCount":1,"description":"작품 설명 내용"},{"members":[72,42],"category":"c0","projectNum":7,"titleKor":"한국어 타이틀 8","titleEng":"EngTitle 8","galleryCount":1,"description":"작품 설명 내용"},{"members":[43],"category":"c0","projectNum":8,"titleKor":"한국어 타이틀 9","titleEng":"EngTitle 9","galleryCount":1,"description":"작품 설명 내용"},{"members":[50,96],"category":"c0","projectNum":9,"titleKor":"한국어 타이틀 10","titleEng":"EngTitle 10","galleryCount":1,"description":"작품 설명 내용"},{"members":[82,52],"category":"c0","projectNum":10,"titleKor":"한국어 타이틀 11","titleEng":"EngTitle 11","galleryCount":1,"description":"작품 설명 내용"},{"members":[54],"category":"c0","projectNum":11,"titleKor":"한국어 타이틀 12","titleEng":"EngTitle 12","galleryCount":1,"description":"작품 설명 내용"},{"members":[59],"category":"c0","projectNum":12,"titleKor":"한국어 타이틀 13","titleEng":"EngTitle 13","galleryCount":1,"description":"작품 설명 내용"},{"members":[60],"category":"c0","projectNum":13,"titleKor":"한국어 타이틀 14","titleEng":"EngTitle 14","galleryCount":1,"description":"작품 설명 내용"},{"members":[73,66],"category":"c0","projectNum":14,"titleKor":"한국어 타이틀 15","titleEng":"EngTitle 15","galleryCount":1,"description":"작품 설명 내용"},{"members":[68,88],"category":"c0","projectNum":15,"titleKor":"한국어 타이틀 16","titleEng":"EngTitle 16","galleryCount":1,"description":"작품 설명 내용"},{"members":[71],"category":"c0","projectNum":16,"titleKor":"한국어 타이틀 17","titleEng":"EngTitle 17","galleryCount":1,"description":"작품 설명 내용"},{"members":[75,81],"category":"c0","projectNum":17,"titleKor":"한국어 타이틀 18","titleEng":"EngTitle 18","galleryCount":1,"description":"작품 설명 내용"},{"members":[76],"category":"c0","projectNum":18,"titleKor":"한국어 타이틀 19","titleEng":"EngTitle 19","galleryCount":1,"description":"작품 설명 내용"},{"members":[86],"category":"c0","projectNum":19,"titleKor":"한국어 타이틀 20","titleEng":"EngTitle 20","galleryCount":1,"description":"작품 설명 내용"},{"members":[87],"category":"c0","projectNum":20,"titleKor":"한국어 타이틀 21","titleEng":"EngTitle 21","galleryCount":1,"description":"작품 설명 내용"},{"members":[90],"category":"c0","projectNum":21,"titleKor":"한국어 타이틀 22","titleEng":"EngTitle 22","galleryCount":1,"description":"작품 설명 내용"},{"members":[94],"category":"c0","projectNum":22,"titleKor":"한국어 타이틀 23","titleEng":"EngTitle 23","galleryCount":1,"description":"작품 설명 내용"},{"members":[99],"category":"c0","projectNum":23,"titleKor":"한국어 타이틀 24","titleEng":"EngTitle 24","galleryCount":1,"description":"작품 설명 내용"},{"members":[3],"category":"c1","projectNum":24,"titleKor":"한국어 타이틀 25","titleEng":"EngTitle 25","galleryCount":1,"description":"작품 설명 내용"},{"members":[69,49],"category":"c1","projectNum":25,"titleKor":"한국어 타이틀 26","titleEng":"EngTitle 26","galleryCount":1,"description":"작품 설명 내용"},{"members":[6,2],"category":"c2","projectNum":26,"titleKor":"한국어 타이틀 27","titleEng":"EngTitle 27","galleryCount":1,"description":"작품 설명 내용"},{"members":[4,34],"category":"c2","projectNum":27,"titleKor":"한국어 타이틀 28","titleEng":"EngTitle 28","galleryCount":1,"description":"작품 설명 내용"},{"members":[54,19],"category":"c2","projectNum":28,"titleKor":"한국어 타이틀 29","titleEng":"EngTitle 29","galleryCount":1,"description":"작품 설명 내용"},{"members":[29],"category":"c2","projectNum":29,"titleKor":"한국어 타이틀 30","titleEng":"EngTitle 30","galleryCount":1,"description":"작품 설명 내용"},{"members":[35],"category":"c2","projectNum":30,"titleKor":"한국어 타이틀 31","titleEng":"EngTitle 31","galleryCount":1,"description":"작품 설명 내용"},{"members":[57,58],"category":"c2","projectNum":31,"titleKor":"한국어 타이틀 32","titleEng":"EngTitle 32","galleryCount":1,"description":"작품 설명 내용"},{"members":[61],"category":"c2","projectNum":32,"titleKor":"한국어 타이틀 33","titleEng":"EngTitle 33","galleryCount":1,"description":"작품 설명 내용"},{"members":[91],"category":"c2","projectNum":33,"titleKor":"한국어 타이틀 34","titleEng":"EngTitle 34","galleryCount":1,"description":"작품 설명 내용"},{"members":[10],"category":"c3","projectNum":34,"titleKor":"한국어 타이틀 35","titleEng":"EngTitle 35","galleryCount":1,"description":"작품 설명 내용"},{"members":[64,20],"category":"c3","projectNum":35,"titleKor":"한국어 타이틀 36","titleEng":"EngTitle 36","galleryCount":1,"description":"작품 설명 내용"},{"members":[22],"category":"c3","projectNum":36,"titleKor":"한국어 타이틀 37","titleEng":"EngTitle 37","galleryCount":1,"description":"작품 설명 내용"},{"members":[25],"category":"c3","projectNum":37,"titleKor":"한국어 타이틀 38","titleEng":"EngTitle 38","galleryCount":1,"description":"작품 설명 내용"},{"members":[27],"category":"c3","projectNum":38,"titleKor":"한국어 타이틀 39","titleEng":"EngTitle 39","galleryCount":1,"description":"작품 설명 내용"},{"members":[48,51],"category":"c3","projectNum":39,"titleKor":"한국어 타이틀 40","titleEng":"EngTitle 40","galleryCount":1,"description":"작품 설명 내용"},{"members":[53],"category":"c3","projectNum":40,"titleKor":"한국어 타이틀 41","titleEng":"EngTitle 41","galleryCount":1,"description":"작품 설명 내용"},{"members":[67],"category":"c3","projectNum":41,"titleKor":"한국어 타이틀 42","titleEng":"EngTitle 42","galleryCount":1,"description":"작품 설명 내용"},{"members":[78],"category":"c3","projectNum":42,"titleKor":"한국어 타이틀 43","titleEng":"EngTitle 43","galleryCount":1,"description":"작품 설명 내용"},{"members":[92],"category":"c3","projectNum":43,"titleKor":"한국어 타이틀 44","titleEng":"EngTitle 44","galleryCount":1,"description":"작품 설명 내용"},{"members":[95],"category":"c3","projectNum":44,"titleKor":"한국어 타이틀 45","titleEng":"EngTitle 45","galleryCount":1,"description":"작품 설명 내용"},{"members":[32,0],"category":"c4","projectNum":45,"titleKor":"한국어 타이틀 46","titleEng":"EngTitle 46","galleryCount":1,"description":"작품 설명 내용"},{"members":[7],"category":"c4","projectNum":46,"titleKor":"한국어 타이틀 47","titleEng":"EngTitle 47","galleryCount":1,"description":"작품 설명 내용"},{"members":[11],"category":"c4","projectNum":47,"titleKor":"한국어 타이틀 48","titleEng":"EngTitle 48","galleryCount":1,"description":"작품 설명 내용"},{"members":[12],"category":"c4","projectNum":48,"titleKor":"한국어 타이틀 49","titleEng":"EngTitle 49","galleryCount":1,"description":"작품 설명 내용"},{"members":[13],"category":"c4","projectNum":49,"titleKor":"한국어 타이틀 50","titleEng":"EngTitle 50","galleryCount":1,"description":"작품 설명 내용"},{"members":[15],"category":"c4","projectNum":50,"titleKor":"한국어 타이틀 51","titleEng":"EngTitle 51","galleryCount":1,"description":"작품 설명 내용"},{"members":[17],"category":"c4","projectNum":51,"titleKor":"한국어 타이틀 52","titleEng":"EngTitle 52","galleryCount":1,"description":"작품 설명 내용"},{"members":[31],"category":"c4","projectNum":52,"titleKor":"한국어 타이틀 53","titleEng":"EngTitle 53","galleryCount":1,"description":"작품 설명 내용"},{"members":[38,85],"category":"c4","projectNum":53,"titleKor":"한국어 타이틀 54","titleEng":"EngTitle 54","galleryCount":1,"description":"작품 설명 내용"},{"members":[40],"category":"c4","projectNum":54,"titleKor":"한국어 타이틀 55","titleEng":"EngTitle 55","galleryCount":1,"description":"작품 설명 내용"},{"members":[44],"category":"c4","projectNum":55,"titleKor":"한국어 타이틀 56","titleEng":"EngTitle 56","galleryCount":1,"description":"작품 설명 내용"},{"members":[46],"category":"c4","projectNum":56,"titleKor":"한국어 타이틀 57","titleEng":"EngTitle 57","galleryCount":1,"description":"작품 설명 내용"},{"members":[55,65],"category":"c4","projectNum":57,"titleKor":"한국어 타이틀 58","titleEng":"EngTitle 58","galleryCount":1,"description":"작품 설명 내용"},{"members":[56],"category":"c4","projectNum":58,"titleKor":"한국어 타이틀 59","titleEng":"EngTitle 59","galleryCount":1,"description":"작품 설명 내용"},{"members":[63],"category":"c4","projectNum":59,"titleKor":"한국어 타이틀 60","titleEng":"EngTitle 60","galleryCount":1,"description":"작품 설명 내용"},{"members":[77],"category":"c4","projectNum":60,"titleKor":"한국어 타이틀 61","titleEng":"EngTitle 61","galleryCount":1,"description":"작품 설명 내용"},{"members":[83],"category":"c4","projectNum":61,"titleKor":"한국어 타이틀 62","titleEng":"EngTitle 62","galleryCount":1,"description":"작품 설명 내용"},{"members":[84],"category":"c4","projectNum":62,"titleKor":"한국어 타이틀 63","titleEng":"EngTitle 63","galleryCount":1,"description":"작품 설명 내용"},{"members":[89],"category":"c4","projectNum":63,"titleKor":"한국어 타이틀 64","titleEng":"EngTitle 64","galleryCount":1,"description":"작품 설명 내용"},{"members":[93],"category":"c4","projectNum":64,"titleKor":"한국어 타이틀 65","titleEng":"EngTitle 65","galleryCount":1,"description":"작품 설명 내용"},{"members":[97],"category":"c4","projectNum":65,"titleKor":"한국어 타이틀 66","titleEng":"EngTitle 66","galleryCount":1,"description":"작품 설명 내용"},{"members":[5,47],"category":"c5","projectNum":66,"titleKor":"한국어 타이틀 67","titleEng":"EngTitle 67","galleryCount":1,"description":"작품 설명 내용"},{"members":[8,70],"category":"c5","projectNum":67,"titleKor":"한국어 타이틀 68","titleEng":"EngTitle 68","galleryCount":1,"description":"작품 설명 내용"},{"members":[79,9],"category":"c5","projectNum":68,"titleKor":"한국어 타이틀 69","titleEng":"EngTitle 69","galleryCount":1,"description":"작품 설명 내용"},{"members":[14],"category":"c5","projectNum":69,"titleKor":"한국어 타이틀 70","titleEng":"EngTitle 70","galleryCount":1,"description":"작품 설명 내용"},{"members":[21,26],"category":"c5","projectNum":70,"titleKor":"한국어 타이틀 71","titleEng":"EngTitle 71","galleryCount":1,"description":"작품 설명 내용"},{"members":[23,33],"category":"c5","projectNum":71,"titleKor":"한국어 타이틀 72","titleEng":"EngTitle 72","galleryCount":1,"description":"작품 설명 내용"},{"members":[37],"category":"c5","projectNum":72,"titleKor":"한국어 타이틀 73","titleEng":"EngTitle 73","galleryCount":1,"description":"작품 설명 내용"},{"members":[39],"category":"c5","projectNum":73,"titleKor":"한국어 타이틀 74","titleEng":"EngTitle 74","galleryCount":1,"description":"작품 설명 내용"},{"members":[62],"category":"c5","projectNum":74,"titleKor":"한국어 타이틀 75","titleEng":"EngTitle 75","galleryCount":1,"description":"작품 설명 내용"},{"members":[74,98],"category":"c5","projectNum":75,"titleKor":"한국어 타이틀 76","titleEng":"EngTitle 76","galleryCount":1,"description":"작품 설명 내용"},{"members":[80],"category":"c5","projectNum":76,"titleKor":"한국어 타이틀 77","titleEng":"EngTitle 77","galleryCount":1,"description":"작품 설명 내용"}]'),s0=40;function Tg(l){if(!l)return l;const o="/TU2025gradulate/";if(/^https?:\/\//i.test(l))return l;const c=l.replace(/^\.\.\//,"").replace(/^\//,"");return o+c}const eb={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"},f0=["전체","산업디자인공학","미디어디자인공학"],tb={산업디자인공학:0,미디어디자인공학:1},d0=l=>l==="IND"||l===0||l==="0"?0:l==="MED"||l===1||l==="1"?1:l,Yc=Us,di=P2,nb=x.div`
  position: relative; background: #fff;
`,ab=x.div`
  padding-left: ${s0}px; padding-right: ${s0}px; display: flex; flex-direction: column; min-height: 100vh;
`;function lb({children:l}){return s.jsx(nb,{children:s.jsx(ab,{children:l})})}const ib=x.div`
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
`,rb=x.div`
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
`,ob=x.div`
  text-decoration: none; cursor: pointer;
`,ub=x.div`position: relative;`;function cb({people:l}){const o=gs();return s.jsx(ib,{children:l.map((c,u)=>{const d=c.id??c.studentId??`${c.nameKor}-${u}`,m=typeof c.projectNum=="number"&&c.category,y=m?c.projectNum+1:null,b=m?`${eb[c.category]||"A"}${String(y).padStart(3,"0")}`:null,g=s.jsx(As,{nameKor:c.nameKor,nameEng:c.nameEng,role:c.role,sns:c.sns||"-",eMail:c.eMail,imgSrc:Tg(c.imgUrl),imgAlt:`${c.nameKor} profile`},d);return m?s.jsx(ob,{role:"link",tabIndex:0,onClick:()=>o(`/work/${b}`),onKeyDown:h=>{(h.key==="Enter"||h.key===" ")&&o(`/work/${b}`)},"aria-label":`${c.nameKor} 작품 보기 (${b})`,children:g},`link-${d}`):g})})}function sb(){const[l,o]=ge.useState(!1),[c,u]=ge.useState(f0[0]),d=ge.useMemo(()=>{const b=new Map;return(xi||[]).forEach(g=>{(g.members||[]).forEach(h=>{b.has(h)||b.set(h,g)})}),b},[]);ge.useEffect(()=>{u(l?di[0]?.id||"":f0[0])},[l]);const m=ge.useMemo(()=>{if(!l){if(c==="전체")return Yc;let g=tb[c];return g===void 0&&(g=d0(c)),Yc.filter(h=>d0(h.department)===g)}const b=di.some(g=>g.id===c)?c:di.find(g=>g.nameKor===c)?.id||"";return Yc.filter(g=>g.professorId===b).map(g=>{let h=d.get(g.num);h||(h=(xi||[]).find(T=>T.category===g.category&&T.projectNum===g.projectNum)||null);const j=h?`/projects/${h.projectNum}/thumb.jpg`:"/thumbnailExample.png";return{...g,imgUrl:j}})},[c,l,d]),y=ge.useMemo(()=>l&&(di.find(g=>g.id===c)||di.find(g=>g.nameKor===c))||null,[l,c]);return s.jsxs(ub,{children:[s.jsx(rb,{children:"Peoples"}),s.jsx(wg,{type:"people",onCategoryChange:u,onToggleChange:o}),s.jsxs(lb,{children:[l&&y&&s.jsx(Ns,{nameKor:y.nameKor,rank:y.rank||"교수",eMail:y.email,education:y.education,field:y.field,imgSrc:Tg(y.imgUrl),imgAlt:`${y.nameKor} profile`}),s.jsx(cb,{people:m})]})]})}const fb=x.div`
  position: relative;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;  
 }
`,p0=x.div`
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
`,db=x.div`
  display: flex;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;
  }
`,pb=x.img`
  display: flex;
  width: 445px;
  height: 353px;
  border-radius: 16px;
  object-fit: cover;
  @media (max-width: 640px) {
    width: 173px;
    height: 137px;  
 }
`,mb=x.div`
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
`,gb=x.div`
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
`,hb=x.p`
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
`,yb=x.p`
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
`,xb=x.div`
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
`,vb=x.div`
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
`,bb=x.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 14px;
  font-weight: 300;
  margin: 0;
  color: #121212;
  @media (max-width: 640px) {
    font-size: 10px;  
 }
`,jb=x.div`
  display: flex;
  position: relative;
  width: auto;
  height: 20px;
  gap: -12px;
  @media (max-width: 640px) {
    height: 12px;  
 }
`,Eb=x.img`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  object-fit: cover;
  border: 1px solid #FFFFFF;
  z-index: ${l=>l.$z||3};
  margin-left: ${l=>l.$ml?"-12px":"0"};
  @media (max-width: 640px) {
    width: 12px;
    height: 12px;
    margin-left: ${l=>l.$ml?"-8px":"0"};  
 }
`,Sb=x.div`
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
`,m0=x.div`
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
`,g0=x.div`
  width: 16px;
  height: 16px;
  background-image: url(${l=>l.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media (max-width: 640px) {
    width: 8px;
    height: 8px;  
 }
`,h0=x.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 12px;
  font-weight: 300;
  margin: 0;
  color: #121212;
  @media (max-width: 640px) {
    font-size: 8px;
 }
`;function Ms({titleKor:l,titleEng:o,nameKor:c,view:u,like:d,href:m,src:y,profileImgs:b}){const g=C=>{const _=C.currentTarget.querySelector(".card-hover");_&&(_.style.opacity=1)},h=C=>{const _=C.currentTarget.querySelector(".card-hover");_&&(_.style.opacity=0)},j="/TU2025gradulate/",T=/^https?:\/\//i.test(m),M=s.jsxs(s.Fragment,{children:[s.jsx(fb,{children:s.jsxs(db,{onMouseEnter:g,onMouseLeave:h,children:[s.jsx(mb,{className:"card-hover",children:s.jsxs(gb,{children:[s.jsx(yb,{children:l}),s.jsx(hb,{children:o})]})}),s.jsx(pb,{src:y,alt:"Project"})]})}),s.jsxs(xb,{children:[s.jsxs(vb,{children:[s.jsx(jb,{children:b.map((C,_)=>s.jsx(Eb,{src:C,alt:`Profile${_+1}`,$z:3-_,$ml:_>0},_))}),s.jsx(bb,{children:c})]}),s.jsxs(Sb,{children:[s.jsxs(m0,{children:[s.jsx(g0,{src:`${j}icons/likeIcon.svg`}),s.jsx(h0,{children:d})]}),s.jsxs(m0,{children:[s.jsx(g0,{src:`${j}icons/viewIcon.svg`}),s.jsx(h0,{children:u})]})]})]})]});return T?s.jsx(p0,{as:"a",href:m,style:{textDecoration:"none"},children:M}):s.jsx(p0,{as:fl,to:m.startsWith("/")?m:`/${m}`,style:{textDecoration:"none"},children:M})}Ms.propTypes={titleKor:B.string.isRequired,titleEng:B.string.isRequired,nameKor:B.string.isRequired,view:B.number.isRequired,like:B.number.isRequired,src:B.string.isRequired,href:B.string.isRequired,profileImgs:B.arrayOf(B.string).isRequired};Ms.defaultProps={titleKor:"프로젝트 제목",titleEng:"Project Title",nameKor:"Author Name",view:0,like:0};const y0=40;function Rg(l){if(!l)return l;const o="/TU2025gradulate/";if(/^https?:\/\//i.test(l))return l;const c=l.replace(/^\.\.\//,"").replace(/^\//,"");return o+c}const wb=x.div`
  position: relative; background: #fff;
`,Tb=x.div`
  padding-left: ${y0}px; padding-right: ${y0}px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    padding-left: 16px;
    padding-right: 16px;  
 }
`;function Rb({children:l}){return s.jsx(wb,{children:s.jsx(Tb,{children:l})})}const Ab=x.div`
  position: relative;
`,Db=x.div`
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
`,Nb=x.div`
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
`,x0=xi,Ag=Us,Ub={"All Projects":null,"AI & Robot":"c0","Edu & Kids":"c1","Health Care":"c2","IT & Tech":"c3",Living:"c4",Mobility:"c5"};function cs(l){return l.members.map(o=>{const c=Ag.find(u=>u.num===o);return c?c.nameKor:""}).filter(Boolean).join(", ")}function Mb(l){return l.members.map(o=>{const c=Ag.find(u=>u.num===o);return c?Rg(c.imgUrl):""}).filter(Boolean)}function Cb({list:l}){const o={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"};return s.jsx(Db,{children:l.map((c,u)=>{const d=cs(c),m=Mb(c),y=String(c.projectNum+1).padStart(3,"0"),g=`${o[c.category]||"A"}${y}`;return s.jsx(Ms,{titleKor:c.titleKor,titleEng:c.titleEng,src:Rg(`/projects/${c.projectNum}/thumb.jpg`),nameKor:d,profileImgs:m,view:"0",like:"0",href:`/work/${g}`},u)})})}function zb(){const[l,o]=ge.useState("All Projects"),[c,u]=ge.useState("이름순"),d=ge.useMemo(()=>{const y=Ub[l]||null;return y?x0.filter(b=>b.category===y):x0},[l]),m=ge.useMemo(()=>{const y=[...d];switch(c){case"이름순":y.sort((b,g)=>cs(b).localeCompare(cs(g),"ko"));break;case"좋아요순":y.sort((b,g)=>(g.like||0)-(b.like||0));break;case"조회수순":y.sort((b,g)=>(g.view||0)-(b.view||0));break;case"팀작우선":y.sort((b,g)=>(g.members.length>1)-(b.members.length>1));break;case"개인작우선":y.sort((b,g)=>(b.members.length>1)-(g.members.length>1));break}return y},[d,c]);return s.jsxs(Ab,{children:[s.jsx(Nb,{children:"Projects"}),s.jsx(wg,{type:"project",onCategoryChange:o,onSortChange:u,sortLabel:c}),s.jsx(Rb,{children:s.jsx(Cb,{list:m})})]})}const Ob=x.div(({height:l,from:o,to:c,position:u,z:d})=>({position:"absolute",left:0,right:0,[u]:-1,height:l,pointerEvents:"none",zIndex:d??0,background:`linear-gradient(180deg, ${o} 0%, ${c} 100%)`}));function Cs({position:l="bottom",from:o,to:c,height:u=240,z:d=0,style:m}){return s.jsx(Ob,{position:l,from:o,to:c,height:u,z:d,style:m})}const vn={heroToWhite:{from:"rgba(18,18,18,0)",to:"#FFFFFF",h:240},whiteToBlack:{from:"rgba(255,255,255,0)",to:"#121212",h:320},blackToBlackSoft:{from:"rgba(18,18,18,0)",to:"#121212",h:180}},_b=x.section`
  position: relative; height: 974px; min-height: 620px; overflow: hidden; background: #121212; z-index: 1;
  @media (max-width: 640px) {
    height: 320px;
    min-height: 220px;
  }
`,Kb=x.div`
  position: absolute; inset: 0;
  background: url("https://placehold.co/3169x1783") center/cover no-repeat;
  @media (max-width: 640px) {
    background-size: cover;
    background-position: center;
  }
`,Hb=x.div`
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(180deg, #121212 0%, rgba(18,18,18,0) 55%);
`,kb=x.div`
  position: absolute; left: 40px; bottom: 80px; max-width: 1029px; display: flex; flex-direction: column; gap: 8px;
  @media (max-width: 640px) {
    left: 16px;
    bottom: 32px;
    max-width: 90vw;
    gap: 4px;
  }
`,v0=x.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 16px; line-height: 19.2px;
  @media (max-width: 640px) {
    font-size: 13px;
    line-height: 1.4;
  }
`,Bb=x.p`
  margin: 0; color: #FFFFFF; font-family: Pretendard, system-ui; font-weight: 600; font-size: 24px; line-height: 27.6px;
  @media (max-width: 640px) {
    font-size: 17px;
    line-height: 1.3;
  }
`,$b=x.button`
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
`;function Lb(){return s.jsxs(_b,{"aria-label":"Hero",children:[s.jsx(Kb,{children:s.jsx(Hb,{})}),s.jsxs(kb,{children:[s.jsxs(v0,{children:["25. 10. 24. FRI~26. SUN",s.jsx("br",{}),"Hongdae Art Center B2"]}),s.jsx(v0,{children:"Department of Design Engineering"}),s.jsxs(Bb,{children:["Tech University of Korea",s.jsx("br",{}),"20th Grad Exhibition"]})]}),s.jsx($b,{type:"button","aria-label":"View More",children:"View More"}),s.jsx(Cs,{position:"bottom",from:vn.heroToWhite.from,to:vn.heroToWhite.to,height:vn.heroToWhite.h,z:0})]})}const qb=x.section`
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  padding-top: 120px;
  padding-bottom: 160px;
  @media (max-width: 640px) {
    padding-top: 32px;
    padding-bottom: 48px;
  }
`,Gb=x.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  @media (max-width: 640px) {
    max-width: 100%;
    padding: 0 12px;
    box-sizing: border-box;
  }
`,Yb=x.div`
  display: flex;
  gap: 94px;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 32px;
  }
`,Xb=x.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
  align-items: center;
  @media (max-width: 640px) {
    gap: 24px;
    padding: 0px 12px;
  }
`,Qb=x.h2`
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
`,Vb=x.div`
  width: 1220px;
  color: #202020;
  font-family: Pretendard, system-ui;
  font-size: 24px;
  font-weight: 300;
  line-height: 38.4px;
  @media (max-width: 640px) {
    width: 100%;
    font-size: 14px;
    line-height: 1.6;
    padding: 0 2px;
    box-sizing: border-box;
  }
`,Zb=x.div`
  width: 285px;
  height: 285px;
  position: relative;
  overflow: hidden;
  border-radius: 9999px;
  background: #FFFFFF;
  @media (max-width: 640px) {
    width: 120px;
    height: 120px;
  }
`,Ib=x.div`
  position: absolute;
  left: 66px;
  top: 171px;
  width: 19.28px;
  height: 19.28px;
  border-radius: 9999px;
  background: linear-gradient(237deg, #000 0%, #666 100%);
`,Fb=x.div`
  width: 1220px;
  height: 234px;
  margin: 120px auto 0;
  background: #F9F9F9;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 640px) {
    width: 100%;
    max-width: 100%;
    height: 80px;
    margin: 32px auto 0;
    padding: 0 8px;
    box-sizing: border-box;
    overflow-x: auto;
  }
`;function Jb(){return s.jsxs(qb,{"aria-labelledby":"brand-title",children:[s.jsxs(Gb,{children:[s.jsxs(Yb,{children:[s.jsxs(Xb,{children:[s.jsx(Qb,{id:"brand-title",children:"Brand Concept"}),s.jsxs(Vb,{children:["우리는 살아가며 수많은 순간들을 스쳐 지나간다.",s.jsx("br",{}),"그 순간들은 이내 사라지는 듯하지만,",s.jsx("br",{}),"마음속 깊이 은은히 스며들어 기억이 되고,",s.jsx("br",{}),"결국엔 우리 존재의 한 조각이 된다.",s.jsx("br",{}),s.jsx("br",{}),"<잔향> 전시는 작품이 남긴 향이 관람객에게 스며들어",s.jsx("br",{}),"시간이 지나도 떠오를 수 있는 ‘기억의 향기’를 남기고자 한다.",s.jsx("br",{}),"단순한 결과물의 나열이 아닌, 창작의 과정과 고민이 축적된 흔적들이",s.jsx("br",{}),"이 공간에 머무는 이들의 감각과 감정 속에 잔잔히 머물기를 바란다.",s.jsx("br",{}),s.jsx("br",{}),"전시를 마주한 순간이 훗날, 불현듯 떠오르는 영감으로 다시 피어나기를.",s.jsx("br",{}),"그리하여 우리의 잔향이 누군가의 기억 속에서 오래도록 머물 수 있기를."]})]}),s.jsx(Zb,{"aria-hidden":!0,children:s.jsx(Ib,{})})]}),s.jsx(Fb,{as:"div",style:{background:"none",height:"auto",justifyContent:"center",alignItems:"center",display:"flex",boxShadow:"none",margin:"32px auto 0",padding:0},children:s.jsx("img",{src:"brand-variation.png",alt:"브랜드 컨셉 공식 그래픽",style:{width:"100%",maxWidth:480,height:"auto",display:"block",margin:"0 auto"},draggable:!1})})]}),s.jsx(Cs,{position:"bottom",from:vn.whiteToBlack.from,to:vn.whiteToBlack.to,height:vn.whiteToBlack.h,z:0})]})}const Wb='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',Pb=x.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${l=>l.$size==="sm"?40:52}px;
  padding: 0 ${l=>l.$size==="sm"?16:24}px;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  background: transparent;
  font-family: ${Wb};
  font-weight: 700;
  font-size: ${l=>l.$size==="sm"?13:14}px;
  letter-spacing: 0.2px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  width: ${l=>l.$full?"100%":"auto"};
  transition: background .15s ease, color .15s ease, border-color .15s ease;
`,e4=x.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-left: 8px;
  border-top: 1px solid #FFFFFF;
  border-right: 1px solid #FFFFFF;
  transform: rotate(45deg);
`;function fo({as:l="button",href:o,label:c="View More",size:u="md",fullWidth:d=!1,showArrow:m,defaultShowArrow:y=!0,onArrowChange:b,onClick:g,style:h}){const j=typeof m=="boolean",[T,M]=ge.useState(y),C=j?m:T;ge.useCallback(()=>{if(j){b&&b(!m);return}M(G=>{const $=!G;return b&&b($),$})},[j,b,m]);const _={onClick:g,style:h,"data-arrow-visible":C,"data-toggle-arrow-fn":void 0,$size:u,$full:d,as:l,href:o,type:l==="button"?"button":void 0};return s.jsxs(Pb,{..._,children:[c,C?s.jsx(e4,{"aria-hidden":!0}):null]})}const t4=x.section`
  position: relative;
  padding-top: 120px;
  padding-bottom: 120px;
  background: #121212;
  z-index: 1;
`,n4=x.div`
  width: 100%;
  max-width: 1840px;
  margin: 0 auto;
`,a4=x.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  background: #171717;
`,l4=x.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,i4=x.div`
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: 70px; height: 70px;
  border-radius: 35px;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(5px);
`,r4=x.div`
  position: absolute; left: 27px; top: 23px;
  width: 0; height: 0;
  border-left: 16px solid #000;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
`,o4=x.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 640px) {
    gap: 10px;
    margin-top: 12px;
  }
`;x.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  @media (max-width: 640px) {
    gap: 8px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;x.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  background: #151515;
  width: ${l=>l.$w}px;
  height: ${l=>l.$h}px;
  @media (max-width: 640px) {
    width: 46vw;
    height: 46vw;
    min-width: 140px;
    min-height: 140px;
    max-width: 100vw;
    max-height: 100vw;
  }
`;const u4=x.div`
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
`;function c4(){const l=[{src:"https://placehold.co/910x512",cap:""},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/910x517",cap:""},{src:"https://placehold.co/987x555",cap:""},{src:"https://placehold.co/727x445",cap:"뭐"},{src:"https://placehold.co/727x445",cap:"뭐"}];return s.jsxs(t4,{"aria-label":"Gallery",children:[s.jsx(Cs,{position:"top",from:vn.blackToBlackSoft.from,to:vn.blackToBlackSoft.to,height:vn.blackToBlackSoft.h,z:0}),s.jsxs(n4,{children:[s.jsxs(a4,{children:[s.jsx(l4,{src:"https://placehold.co/1840x1000",alt:"featured"}),s.jsx(i4,{"aria-hidden":!0,children:s.jsx(r4,{})})]}),s.jsx(o4,{className:"gallery-desktop"}),s.jsx("div",{className:"gallery-mobile",style:{display:"none"},children:s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginTop:12},children:l.map((o,c)=>s.jsxs("div",{style:{width:"46vw",height:"46vw",minWidth:140,minHeight:140,maxWidth:"100vw",maxHeight:"100vw",borderRadius:4,overflow:"hidden",background:"#151515",position:"relative",marginBottom:8},children:[s.jsx("img",{src:o.src,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),o.cap&&s.jsx(u4,{children:o.cap})]},c))})}),s.jsx("div",{style:{paddingTop:40,display:"flex",justifyContent:"center"},children:s.jsx(fo,{label:"View More"})})]})]})}const s4=x.section`
  padding: 0;
`,f4=x.div`
  position: relative; height: 1045px; overflow: hidden;
`,d4=x.div`
  position: absolute; left: 0; right: 0; top: 0; text-align: center;
  color: #FFFFFF; font-family: Pretendard, system-ui; font-weight: 700; font-size: 40px; line-height: 64px;
`,p4=x.div`
  position: absolute; left: 40px; right: 40px; top: 140px; height: 905px; border-radius: 4px; overflow: hidden;
`,m4=x.img`
  width: 100%; height: 100%; object-fit: cover;
`,g4=x.div`
  position: absolute; left: 732px; top: 327px; width: 787px; height: 492px; background: #FFFCFD;
`,h4=x.div`
  position: absolute; left: 610px; top: 496px; width: 700px; text-align: center;
  color: #000; font-family: Pretendard, system-ui; font-weight: 600; font-size: 48px; line-height: 76.8px;
`,y4=x.div`
  position: absolute; left: 860px; top: 935px;
`;function x4(){return s.jsx(s4,{"aria-labelledby":"online-title",children:s.jsxs(f4,{children:[s.jsx(d4,{id:"online-title",children:"Online Exhibition"}),s.jsx(p4,{children:s.jsx(m4,{src:"https://placehold.co/1840x905",alt:"Online Exhibition background"})}),s.jsx(g4,{"aria-hidden":!0}),s.jsx(h4,{children:"오브제 활용 인터렉티브 세션으로 교체중"}),s.jsx(y4,{children:s.jsx(fo,{label:"View More"})})]})})}const v4=[{id:"w1",artistKr:"홍길동",dept:"Media Design Engineering",titleSmall:"jakpum en name",titleStrong:"작품 한글이름이름이름이",rightMeta1:"gandanhan jakpum seolmyeong",rightMeta2:"Janhyeang - daechung ganji naneun mal",image:"https://placehold.co/1265x712"},{id:"w2",artistKr:"김아무개",dept:"Industrial Design",titleSmall:"another name",titleStrong:"또 다른 작품명",rightMeta1:"brief copy line",rightMeta2:"longer secondary copy",image:"https://placehold.co/1265x712?text=work+2"},{id:"w3",artistKr:"참깨빙수",dept:"Chamkkae Bingsu",titleSmall:"small jakpum",titleStrong:"세상에서 가장 맛있는 어쩌고",rightMeta1:"건던헌 적펌 설멍",rightMeta2:"long long nong jakpum seolmyeong",image:"https://placehold.co/1265x712?text=work+3"}],b4=x.div`
  position: relative;
  background: #121212;
  @media (max-width: 640px) {
    background: #121212;
    padding: 0 0 24px 0;
  }
`,j4=x.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100vw;
    padding: 0 0 24px 0;
    box-sizing: border-box;
  }
`,E4=x.div`
  background: #222;
  border-radius: 10px;
  overflow: hidden;
  width: 92vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,S4=x.img`
  width: 100%;
  height: auto;
  display: block;
`,w4=x.div`
  padding: 12px 14px 16px 14px;
  color: #fff;
  font-family: Pretendard, system-ui;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;x.div`
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
`;x.div`
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
`;x.div`
  position: absolute;
  left: 351px; top: 140px;
  width: 1219px; height: 686px;
  border-radius: 3.55px;
  background: #606060;
  overflow: hidden;
  transform: translate3d(0, ${l=>l.$y||0}px, 0);
  @media (max-width: 640px) {
    position: static;
    width: 90vw;
    height: auto;
    min-height: 160px;
    margin: 0 auto 12px auto;
    border-radius: 10px;
    transform: none;
  }
`;x.img`
  width: 1265px; height: 712px; display: block;
  @media (max-width: 640px) {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;const ji=`
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%);
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%);
`;x.div`
  position: absolute; left: 195px; top: 240px;
  color: #FAFAFA;
  font-family: Pretendard, system-ui;
  font-size: 112px; font-weight: 600;
  transform: translate3d(0, ${l=>l.$y||0}px, 0);
  opacity: ${l=>l.$opacity??1};
  ${ji}
  @media (max-width: 640px) {
    position: static;
    font-size: 28px;
    margin: 8px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`;x.div`
  position: absolute; left: 195px; top: 374px;
  color: #D9D9D9;
  font-family: Pretendard, system-ui;
  font-size: 24px; font-weight: 400;
  transform: translate3d(0, ${l=>l.$y||0}px, 0);
  opacity: ${l=>l.$opacity??1};
  ${ji}
  @media (max-width: 640px) {
    position: static;
    font-size: 13px;
    margin: 2px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`;x.div`
  position: absolute; right: 195px; top: 509px;
  width: 690.67px; color: #D9D9D9;
  font-family: Pretendard, system-ui; font-size: 24px; font-weight: 300;
  text-align: right;
  transform: translate3d(0, ${l=>l.$y||0}px, 0);
  opacity: ${l=>l.$opacity??1};
  ${ji}
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
`;x.div`
  position: absolute; right: 195px; top: 547px;
  width: 690.67px; color: #FAFAFA;
  font-family: Pretendard, system-ui; font-weight: 500; font-size: 32px;
  text-align: right;
  transform: translate3d(0, ${l=>l.$y||0}px, 0);
  opacity: ${l=>l.$opacity??1};
  ${ji}
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
`;x.div`
  position: absolute; left: 195px; top: 679px; width: 690.67px;
  transform: translate3d(0, ${l=>l.$y||0}px, 0);
  opacity: ${l=>l.$opacity??1};
  ${ji}
  @media (max-width: 640px) {
    position: static;
    width: 100%;
    margin: 4px 0 0 0;
    transform: none;
    opacity: 1;
    mask-image: none;
    -webkit-mask-image: none;
  }
`;x.small`
  display: block; color: #D9D9D9;
  font-family: Pretendard, system-ui; font-size: 24px; font-weight: 400;
  @media (max-width: 640px) {
    font-size: 12px;
  }
`;x.strong`
  display: block; color: #FAFAFA;
  font-family: Pretendard, system-ui; font-size: 42px; font-weight: 700;
  @media (max-width: 640px) {
    font-size: 18px;
  }
`;function T4(){return s.jsxs(s.Fragment,{children:[s.jsx(b4,{className:"expo-works-desktop"}),s.jsx(j4,{children:v4.map(l=>s.jsxs(E4,{children:[s.jsx(S4,{src:l.image,alt:l.titleStrong}),s.jsxs(w4,{children:[s.jsx("div",{style:{fontWeight:700,fontSize:16},children:l.titleStrong}),s.jsxs("div",{style:{fontSize:13,color:"#D9D9D9"},children:[l.artistKr," | ",l.dept]}),s.jsx("div",{style:{fontSize:12,color:"#A1A1A1",marginTop:2},children:l.rightMeta1}),s.jsx("div",{style:{fontSize:12,color:"#A1A1A1"},children:l.rightMeta2})]})]},l.id))})]})}const R4=x.section`
  padding: 0;
`,A4=x.div`
  position: relative; height: 555px;
`,D4=x.div`
  position: absolute; left: 0; right: 0; top: 0; height: 154px; display: flex; flex-direction: column; align-items: center; gap: 28px;
`,N4=x.div`
  width: 48px; height: 48px; background: #FFFFFF;
`,U4=x.div`
  display: flex; align-items: center; height: 49px; padding-bottom: 21px; color: #FFFFFF; font-family: Pretendard, system-ui; font-size: 40px; font-weight: 700; line-height: 38.4px;
`,M4=x.div`
  display: flex; flex-direction: column; align-items: center; gap: 80px; margin-top: 154px;
`,C4=x.div`
  width: 272px; height: 272px; background: #121212; border-radius: 14.5px; overflow: hidden; display: flex; align-items: center; justify-content: center;
`;function z4(){return s.jsx(R4,{"aria-labelledby":"insta-title",children:s.jsx(A4,{children:s.jsxs(D4,{children:[s.jsx(N4,{"aria-hidden":!0}),s.jsx(U4,{id:"insta-title",children:"@tukd_grad"}),s.jsxs(M4,{children:[s.jsx(C4,{children:s.jsx("img",{src:"https://placehold.co/226x226?text=QR",alt:"Instagram preview"})}),s.jsx(fo,{as:"a",href:"#",label:"View Instagram",size:"sm"})]})]})})})}const Ei=`'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif`,b0=350,O4=x.section`
  padding: 120px 0 0 0; background: #121212;
`,_4=x.div`
  position: relative; background: #121212;
`,K4=x.div`
  padding-left: ${b0}px; padding-right: ${b0}px;
  @media (max-width: 640px) {
    padding-left: 0;
    padding-right: 0;
    width: 100vw;
    box-sizing: border-box;
  }
`,H4=({children:l})=>s.jsx(_4,{children:s.jsx(K4,{children:l})}),k4=x.div`
  width: 289px; height: 45px; display: flex; align-items: flex-end;
`,B4=x.div`
  font-family: ${Ei}; font-size: 20px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;
`;function $4({title:l}){return s.jsx(k4,{children:s.jsx(B4,{children:l})})}const L4=x.div`
  border-bottom: ${l=>l.$last?"none":"1px rgba(255,255,255,0.12) solid"};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
    padding: 0;
  }
`,q4=x.div`
  padding-top: 12px; padding-bottom: 12px;
  border-bottom: ${l=>l.$divider?"1px rgba(255,255,255,0.12) solid":"none"};
  display: flex; gap: 20px; align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
    padding: 8px 0 8px 0;
  }
`,G4=x.div`
  width: 135px;
  @media (max-width: 640px) {
    width: 100%;
  }
`,Y4=x.div`
  font-family: ${Ei}; font-size: 16px; font-weight: 700; line-height: 22.4px; color: #FFFFFF;
`,X4=x.div`
  width: 700px; display: flex; flex-direction: column; gap: 10px;
  @media (max-width: 640px) {
    width: 100%;
    gap: 6px;
  }
`;function Xn({k:l,children:o,divider:c=!0}){return s.jsxs(q4,{$divider:c,children:[s.jsx(G4,{children:s.jsx(Y4,{children:l})}),s.jsx(X4,{children:o})]})}const Q4=x.div`
  width: 900px; display: flex; flex-direction: column;
  @media (max-width: 640px) {
    width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
`;function j0({title:l,children:o,last:c=!1}){return s.jsxs(L4,{$last:c,children:[s.jsx($4,{title:l}),s.jsx(Q4,{children:o})]})}const V4=x.div`
  width: 900px; padding-top: 22px; padding-bottom: 40px; border-bottom: 1px rgba(255,255,255,0.12) solid;
  @media (max-width: 640px) {
    width: 100vw;
    padding: 12px 12px 20px 12px;
    box-sizing: border-box;
  }
`,Z4=x.div`
  font-family: ${Ei}; font-size: 16px; font-weight: 700; color: #FFFFFF;
`,Me=x.div`
  font-family: ${Ei}; font-size: 16px; font-weight: 300; color: #CCCCCC;
`,I4=x(Me)`
  margin-top: 24px;
`,F4=x.a`
  font-family: ${Ei}; font-size: 16px; font-weight: 300; color: #CCCCCC; text-decoration: underline;
`;function J4(){return s.jsx(O4,{"aria-label":"Venue & Access",children:s.jsxs(H4,{children:[s.jsxs(j0,{title:"Venew Details",children:[s.jsx(V4,{children:s.jsx(Z4,{children:"잔향 : 기억의 향기"})}),s.jsx(Xn,{k:"Term",children:s.jsx(Me,{children:"10. 24 - 10. 26"})}),s.jsxs(Xn,{k:"Hours",children:[s.jsx(Me,{children:"13 : 00 - 17 : 00"}),s.jsx(Me,{children:"Last Entry 22:22"})]}),s.jsxs(Xn,{k:"Closed",children:[s.jsx(Me,{children:"Date - Date"}),s.jsx(Me,{children:"* daechung buyeon seolmyeong"})]}),s.jsxs(Xn,{k:"Website",divider:!1,children:[s.jsx(Me,{children:"Hongik Art Center"}),s.jsx(F4,{href:"https://artscenter.hongik.ac.kr/artcenter/index.do",target:"_blank",rel:"noreferrer",children:"https://artscenter.hongik.ac.kr/artcenter/index.do"})]})]}),s.jsxs(j0,{title:"Access",children:[s.jsxs(Xn,{k:"Address",children:[s.jsx(Me,{children:"Hongik Art Center B2 Gallery"}),s.jsx(Me,{children:"57, Daehak-ro, Jongno-gu, Seoul"}),s.jsx(I4,{children:"Address in local language"}),s.jsxs(Me,{children:["홍대 아트센터 지하 2층 전시관",s.jsx("br",{}),"서울시 종로구 대학로 57"]}),s.jsx("div",{style:{marginTop:24},children:s.jsx(fo,{as:"a",href:"#",label:"Map",size:"sm",showArrow:!0})})]}),s.jsxs(Xn,{k:"Parking",children:[s.jsx(Me,{children:"B3F ~ B6F"}),s.jsx(Me,{children:"기본 30분 3,000원 / 이후 20분당 2,000원"}),s.jsx(Me,{children:"이용객 주차권 지참 시 50% 할인 및 1시간 무료이용권 제공 (주차권으로만 정산 가능, 티켓정산 불가)"}),s.jsx(Me,{children:"주차권 배부 장소: 갤러리, 소극장 - 매표소 / 대극장 - 물품보관소, 객석 1층, 2층 메인데스크"})]}),s.jsxs(Xn,{k:"By Subway",children:[s.jsx(Me,{children:"[1호선 종로5가역]"}),s.jsx(Me,{children:"2번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분)"}),s.jsx(Me,{children:"[4호선 혜화역]"}),s.jsx(Me,{children:"3번 출구 방면으로 이동 → 이화사거리 방면으로 약 800m 직진 (도보7분) 또는 08번 마을버스 탑승 후 이화사거리 앞 하차"})]}),s.jsxs(Xn,{k:"By Bus",divider:!1,children:[s.jsx(Me,{children:"[이화사거리(01-572) 하차]"}),s.jsx(Me,{children:"마을버스 종로 08번"}),s.jsxs(Me,{children:[s.jsx("br",{}),"[현대그룹빌딩(01-218) 하차]"]}),s.jsx(Me,{children:"102, 107, 108, 109, 162, 301, 7025"}),s.jsx(Me,{children:"[이화장(01-223) 하차]"}),s.jsx(Me,{children:"109, 273, 601, 2112, 7025"})]})]})]})})}function W4(){const l=[s.jsx(Lb,{},"hero"),s.jsx(Jb,{},"brand"),s.jsx(c4,{},"gallery"),s.jsx(x4,{},"online"),s.jsx(T4,{},"works"),s.jsx(z4,{},"insta"),s.jsx(J4,{},"venue")];return s.jsx("div",{style:{background:"#121212",minHeight:"100vh"},children:l})}const zs="Pretendard, system-ui",P4=x.div`
  width: ${l=>l.$w}px;
  height: ${l=>l.$h}px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: linear-gradient(225deg, #F2F0FF 0%, #FFFFFF 100%);
`,ej=x.div`
  width: 149px;
  height: 147px;
  position: absolute;
  left: 40px;
  top: 190px;
  background: #EDECF2;
  border-radius: 8px;
  transform: translateZ(0);
`,tj=x.div`
  width: 25px;
  height: 25px;
  position: absolute;
  left: 8px;
  top: 304px;
  background: #EDECF2;
  border-radius: 4px;
  transform: translateZ(0);
`,nj=x.div`
  position: absolute;
  left: 20px;
  top: 30px;
  font-family: ${zs};
  font-weight: 600;
  font-size: 20px;
  color: #555;
`,aj=x.div`
  position: absolute;
  left: 21px;
  top: 63px;
  width: 229px;
  font-family: ${zs};
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
  color: #333;
`,lj=x.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-family: ${zs};
  font-weight: 600;
  font-size: 14px;
  color: #555;
`;function ij({to:l,from:o,message:c}){return s.jsxs(P4,{$w:po,$h:Si,children:[s.jsx(ej,{}),s.jsx(tj,{}),s.jsx(nj,{children:`To. ${l}`}),s.jsx(aj,{children:c}),s.jsx(lj,{children:`From. ${o}`})]})}const rj=x.div`
  width: ${l=>l.$w}px;
  height: ${l=>l.$h}px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
`,oj=x.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;function uj({src:l}){return s.jsx(rj,{$w:po,$h:Si,children:s.jsx(oj,{src:l,alt:"포토 카드"})})}const cj=x.button`
  width: ${l=>l.$w}px;
  height: ${l=>l.$h}px;
  border-radius: 8px;
  background: linear-gradient(137deg, #AEAEAE 0%, #848484 100%);
  outline: 1px rgba(255,255,255,.5) solid;
  outline-offset: -1px;
  display: grid;
  place-items: center;
  cursor: pointer;
  border: none;
`,sj=x.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: rgba(0,0,0,.35);
  display: grid;
  place-items: center;
`,fj=x.div`
  width: 14px;
  height: 14px;
  position: relative;
`,dj=x.span`
  position: absolute;
  left: 6px;
  top: 0;
  width: 2px;
  height: 14px;
  background: #fff;
  border-radius: 1px;
`,pj=x.span`
  position: absolute;
  left: 0;
  top: 6px;
  width: 14px;
  height: 2px;
  background: #fff;
  border-radius: 1px;
`;function mj({onClick:l}){return s.jsx(cj,{onClick:l,"aria-label":"방명록 작성",$w:po,$h:Si,children:s.jsx(sj,{children:s.jsxs(fj,{children:[s.jsx(dj,{}),s.jsx(pj,{})]})})})}const po=270,Si=337,gj=30,Dg=20,hj=210,yj=60,xj=x.div`
  padding: 0 0 12px 0;
`,vj=x.div`
  position: relative;
  width: 100%;
  height: 3px;
  background: #171717;
  border-radius: 2px;
  overflow: hidden;
`,bj=x.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 3px;
  width: ${l=>l.$w}px;
  min-width: 25px;
  background: #7a7a7a;
  border-radius: 2px;
  transition: width 350ms ease-in;
`,jj=x.div`
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  cursor: grab;
  padding: 0 ${yj}px 0 ${hj}px;
  scrollbar-width: none; 
  -ms-overflow-style: none;
  &::-webkit-scrollbar { display: none; }
`,Ej=x.div`
  display: flex;
  gap: ${gj}px;
  align-items: flex-start;
  min-height: ${Si*2+Dg}px;
`,Sj=x.div`
  display: flex;
  flex-direction: column;
  gap: ${Dg}px;
`,Ng=x.div`
  width: ${po}px;
  height: ${Si}px;
`,E0=l=>{const o=[{type:"add",id:"add"},...l],c=[{min:6,max:10},{min:16,max:20},{min:26,max:30}];let u=0;return c.forEach((d,m)=>{if(o.length>d.min+u){const y=Math.min(Math.floor(Math.random()*(d.max-d.min+1))+d.min,o.length)+u;o.splice(y,0,{type:"photo",id:`ph-${Date.now()}-${m}`,src:"https://placehold.co/662x405"}),u++}}),o},wj=l=>{const o=[];for(let c=0;c<l.length;c+=2)o.push([l[c],l[c+1]||null]);return o};function Tj({onOpenModal:l,items:o}){const c=U.useRef(null),[u,d]=U.useState({width:0,trackW:0}),[m,y]=U.useState(()=>E0(o));U.useEffect(()=>{y(E0(o))},[o]);const b=wj(m);U.useEffect(()=>{const T=c.current;if(!T)return;const M=C=>{Math.abs(C.deltaY)>Math.abs(C.deltaX)&&(T.scrollLeft+=C.deltaY,C.preventDefault())};return T.addEventListener("wheel",M,{passive:!1}),()=>T.removeEventListener("wheel",M)},[]);const g=U.useRef({on:!1,moved:!1,startX:0,startScroll:0}),h=T=>!!T?.closest?.('button, a, input, textarea, select, label, [role="button"], [data-nodrag]');U.useEffect(()=>{const T=c.current;if(!T)return;const M=G=>{G.button===0&&(h(G.target)||(g.current.on=!0,g.current.moved=!1,g.current.startX=G.clientX,g.current.startScroll=T.scrollLeft,T.setPointerCapture?.(G.pointerId),document.body.style.userSelect="none",T.style.cursor="grabbing"))},C=G=>{if(!g.current.on)return;const $=G.clientX-g.current.startX;Math.abs($)>2&&(g.current.moved=!0),T.scrollLeft=g.current.startScroll-$},_=G=>{g.current.on&&(T.releasePointerCapture?.(G.pointerId),document.body.style.userSelect="",T.style.cursor="grab",g.current.moved&&(G.preventDefault(),G.stopPropagation()),g.current.on=!1)};return T.addEventListener("pointerdown",M),window.addEventListener("pointermove",C),window.addEventListener("pointerup",_),T.addEventListener("pointercancel",_),()=>{T.removeEventListener("pointerdown",M),window.removeEventListener("pointermove",C),window.removeEventListener("pointerup",_),T.removeEventListener("pointercancel",_)}},[]);const j=U.useCallback(()=>{const T=c.current;if(!T)return;const M=T.clientWidth,C=T.scrollWidth,_=T.scrollLeft,$=T.parentElement?.clientWidth||M,L=Math.max(1,C-M),q=Math.min(1,Math.max(0,_/L)),X=Math.round($*q);d({width:X,trackW:$})},[]);return U.useEffect(()=>{j();const T=c.current;if(!T)return;const M=()=>requestAnimationFrame(j),C=()=>requestAnimationFrame(j);return T.addEventListener("scroll",M,{passive:!0}),window.addEventListener("resize",C),()=>{T.removeEventListener("scroll",M),window.removeEventListener("resize",C)}},[j]),s.jsxs(s.Fragment,{children:[s.jsx(xj,{children:s.jsx(vj,{children:s.jsx(bj,{$w:u.width})})}),s.jsx(jj,{ref:c,children:s.jsx(Ej,{children:b.map((T,M)=>s.jsxs(Sj,{children:[s.jsx(S0,{data:T[0],onOpenModal:l}),T[1]?s.jsx(S0,{data:T[1],onOpenModal:l}):s.jsx(Ng,{})]},`col-${M}`))})})]})}function S0({data:l,onOpenModal:o}){return l?l.type==="add"?s.jsx(mj,{onClick:o,style:{pointerEvents:"auto"}}):l.type==="photo"?s.jsx(uj,{src:l.src}):s.jsx(ij,{to:l.to,from:l.from,message:l.message}):s.jsx(Ng,{})}const Rj=x.div`
  position: fixed; inset: 0; z-index: 1000;
  display: grid; place-items: center;
  background: rgba(0,0,0,.45);
`,Aj=x.div`
  position: relative; display: inline-flex; align-items: flex-end; gap: 17px;
`,Dj=x.div`
  padding: 40px; border-radius: 16px;
  background: rgba(160,160,160,.80);
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  display: inline-flex; gap: 20px; align-items: center;
`,Nj=x.div`
  width: 520px; display: inline-flex; gap: 20px; align-items: center;
`,Uj=x.div`
  width: 450px; height: 560px; position: relative; overflow: hidden;
  border-radius: 16px;
  background: linear-gradient(225deg, #F2F0FF 0%, #FFFFFF 100%);
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
`,Mj=x.div`
  position: absolute; left: 66.53px; top: 314.67px; width: 248.47px; height: 245.33px; border-radius: 9999px; background: #EDECF2;
`,Cj=x.div`
  position: absolute; left: 13.33px; top: 504.92px; width: 42.14px; height: 41.05px; border-radius: 9999px; background: #EDECF2;
`,zj=x.div`
  position: absolute; left: 32px; top: 50px; display: inline-flex; align-items: center; gap: 8px;
`,Oj=x.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
`,_j=x.input`
  border: none; outline: none;
  border-bottom: 1px solid rgba(0,0,0,.18);
  background: transparent;
  font-family: Pretendard, system-ui;
  font-size: 28px; color: #303030;
  padding: 2px 4px 4px;
  min-width: 120px; max-width: 220px;
`,Kj=x.div`
  position: absolute; left: 32px; top: 104px; width: 381px;
`,Hj=x.textarea`
  width: 100%; min-height: 220px; resize: none;
  border: none; outline: none;
  border-radius: 12px; padding: 14px 16px;
  font-family: Pretendard, system-ui; font-size: 18px; line-height: 27px; color: #303030;
  background: rgba(255,255,255,.6);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.5);
`,kj=x.div`
  position: absolute; left: 181px; top: 472px; display: inline-flex; align-items: center; gap: 8px;
`,Bj=x.div`
  font-family: Pretendard, system-ui; font-weight: 600; font-size: 32px; color: #555;
`,$j=x.input`
  border: none; outline: none;
  border-bottom: 1px solid rgba(0,0,0,.18);
  background: transparent;
  font-family: Pretendard, system-ui; font-size: 20px; color: #303030;
  padding: 2px 4px 4px;
  min-width: 120px; max-width: 180px;
`,Lj=x.div`
  width: 50px; height: 560px; display: inline-flex; flex-direction: column; justify-content: flex-end;
`,qj=x.button`
  width: 50px; height: 50px; border-radius: 25px;
  background: #202020; cursor: pointer;
  display: grid; place-items: center; border: none;
`,Gj=x.div`
  width: 20px; height: 17px; background: #fff; clip-path: polygon(0 0,100% 50%,0 100%);
`,Yj=x.div`
  width: 60px; height: 640px; position: relative;
`,Xj=x.button`
  width: 60px; height: 60px; position: absolute; left: 0; top: 0;
  display: grid; place-items: center; cursor: pointer;
  background: transparent; border: none;
`,Qj=x.div`
  width: 32px; height: 32px; position: relative;
`,w0=x.span`
  position: absolute; left: 15px; top: 4px; width: 2px; height: 24px;
  background: #FFFFFF; transform: rotate(${l=>l.$deg}deg);
`;function Vj({open:l,onClose:o,onSubmit:c,defaultTo:u="",defaultFrom:d=""}){const[m,y]=U.useState(u),[b,g]=U.useState(d),[h,j]=U.useState(""),T=U.useRef(null);if(U.useEffect(()=>{const _=G=>{G.key==="Escape"&&o?.()};return l&&document.addEventListener("keydown",_),()=>document.removeEventListener("keydown",_)},[l,o]),!l)return null;const M=_=>{_.target===T.current&&o?.()},C=()=>{const _={to:(m||"").trim(),from:(b||"").trim(),message:(h||"").trim()};_.message&&c?.(_)};return s.jsx(Rj,{ref:T,onMouseDown:M,children:s.jsxs(Aj,{onMouseDown:_=>_.stopPropagation(),children:[s.jsx(Dj,{children:s.jsxs(Nj,{children:[s.jsxs(Uj,{children:[s.jsx(Mj,{}),s.jsx(Cj,{}),s.jsxs(zj,{children:[s.jsx(Oj,{children:"To."}),s.jsx(_j,{value:m,onChange:_=>y(_.target.value),placeholder:"받는 사람"})]}),s.jsx(Kj,{children:s.jsx(Hj,{placeholder:"내용을 입력해 주세요.",value:h,onChange:_=>j(_.target.value)})}),s.jsxs(kj,{children:[s.jsx(Bj,{children:"From."}),s.jsx($j,{value:b,onChange:_=>g(_.target.value),placeholder:"보내는 사람"})]})]}),s.jsx(Lj,{children:s.jsx(qj,{type:"button",onClick:C,"aria-label":"send",children:s.jsx(Gj,{})})})]})}),s.jsx(Yj,{children:s.jsx(Xj,{type:"button",onClick:o,"aria-label":"close",children:s.jsxs(Qj,{children:[s.jsx(w0,{$deg:45}),s.jsx(w0,{$deg:-45})]})})})]})})}const Zj=[{id:"g1",to:"성수민",from:"김예준",message:"전시회에 우연히 들르게 되었는데, 작품 하나하나에서 깊은 고민과 세심함이 느껴졌습니다! 다들 고생많으셨습니다! 축하드려요",type:"text"},{id:"g2",to:"성수민",from:"김예준",message:"메시지 예시 2",type:"text"},{id:"g3",to:"성수민",from:"김예준",message:"메시지 예시 3",type:"text"},{id:"g4",to:"성수민",from:"김예준",message:"메시지 예시 4",type:"text"},{id:"g5",to:"성수민",from:"김예준",message:"메시지 예시 5",type:"text"},{id:"g6",to:"성수민",from:"김예준",message:"메시지 예시 6",type:"text"},{id:"g7",to:"성수민",from:"김예준",message:"메시지 예시 7",type:"text"},{id:"g8",to:"성수민",from:"김예준",message:"메시지 예시 8",type:"text"},{id:"g9",to:"성수민",from:"김예준",message:"메시지 예시 9",type:"text"},{id:"g10",to:"성수민",from:"김예준",message:"메시지 예시 10",type:"text"},{id:"g11",to:"성수민",from:"김예준",message:"메시지 예시 11",type:"text"},{id:"g12",to:"성수민",from:"김예준",message:"메시지 예시 12",type:"text"},{id:"g13",to:"성수민",from:"김예준",message:"메시지 예시 13",type:"text"},{id:"g14",to:"성수민",from:"김예준",message:"메시지 예시 14",type:"text"},{id:"g15",to:"성수민",from:"김예준",message:"메시지 예시 15",type:"text"},{id:"g16",to:"성수민",from:"김예준",message:"메시지 예시 16",type:"text"},{id:"g17",to:"성수민",from:"김예준",message:"메시지 예시 17",type:"text"},{id:"g18",to:"성수민",from:"김예준",message:"메시지 예시 18",type:"text"},{id:"g19",to:"성수민",from:"김예준",message:"메시지 예시 19",type:"text"},{id:"g20",to:"성수민",from:"김예준",message:"메시지 예시 20",type:"text"},{id:"g21",to:"성수민",from:"김예준",message:"메시지 예시 21",type:"text"},{id:"g22",to:"성수민",from:"김예준",message:"메시지 예시 22",type:"text"},{id:"g23",to:"성수민",from:"김예준",message:"메시지 예시 23",type:"text"},{id:"g24",to:"성수민",from:"김예준",message:"메시지 예시 24",type:"text"},{id:"g25",to:"성수민",from:"김예준",message:"메시지 예시 25",type:"text"}],Ij='Pretendard, system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif',Fj=x.div`
  background: #121212; min-height: 100vh;
`,Jj=x.main`
  padding: 80px 40px 120px 40px;
`,Wj=x.h1`
  font-family: ${Ij}; font-weight: 700; font-size: 32px; color: #FFFFFF; text-align: center; margin: 20px 0 40px;
`,Pj=x.section`
  display: flex; justify-content: center;
`,eE=x.div`
  width: 100%;
`;function tE(){const[l,o]=ge.useState(!1),[c,u]=ge.useState(Zj),d=({to:y,from:b,message:g})=>{const h={id:`g-${Date.now()}`,to:y,from:b,message:g,type:"text"};u(j=>[h,...j]),o(!1)};return s.jsxs(Fj,{children:[s.jsxs(Jj,{children:[s.jsx(Wj,{children:"Guest Book"}),s.jsx(Pj,{children:s.jsxs(eE,{className:"gb-wrap",children:[s.jsx("style",{children:`
    .gb-wrap *::-webkit-scrollbar { display: none; }
    .gb-wrap * { scrollbar-width: none; -ms-overflow-style: none; }
    .gb-wrap article img { width: 100% !important; height: 100% !important; object-fit: cover !important; display: block !important; }
  `}),s.jsx(Tj,{onOpenModal:()=>o(!0),items:c})]})})]}),s.jsx(Vj,{open:l,onClose:()=>o(!1),onSubmit:d})]})}const nE=x.div`
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
  transform: translateX(${l=>l.$open?"0":"-350px"});
  transition: transform 500ms ease-out;
  pointer-events: ${l=>l.$open?"auto":"none"};
`,aE=x.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
`,lE=x.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: auto;
  gap: 48px;
`,iE=x.div`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,rE=x.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  gap: 16px;
`,oE=x.h1`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  margin: 0;
  padding: 0;
  line-height: 125%;
`,uE=x.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #F0F0F0;
  margin: 0;
  padding: 0;
  line-height: 150%;
`,cE=x.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 75px;
`,sE=x.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: auto;
  height: 32px;
  cursor: pointer;
`,fE=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`,dE=x.img`
  width: 24px;
  height: 24px;
`,pE=x.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
`,mE=x.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 12px;
  cursor: pointer;
`,gE=x.p`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #e0e0e0;
  margin: 0;
  padding: 0;
  line-height: auto;
  margin-bottom: 12px;
`,hE=x.div`
  display: flex;
  width: 20px;
  height: 75px;
  align-items: center;
  justify-content: center;
`;function ss({titleKor:l,titleEng:o,context:c,isOpen:u=!0,onClose:d}){const m="/TU2025gradulate/";return s.jsx(nE,{$open:!!u,children:s.jsxs(aE,{children:[s.jsxs(lE,{children:[s.jsx(iE,{onClick:()=>{typeof d=="function"&&d()},children:s.jsx("img",{src:`${m}icons/closeIcon.svg`,alt:"Close Icon"})}),s.jsxs(rE,{children:[s.jsx(oE,{children:l}),s.jsx(uE,{children:c})]})]}),s.jsxs(cE,{children:[s.jsx(sE,{onClick:()=>{},children:s.jsxs(fE,{children:[s.jsx(dE,{src:`${m}icons/likeIcon(white).svg`,alt:"Like Icon"}),s.jsx(pE,{children:"0"})]})}),s.jsxs(mE,{onClick:()=>{const b=Math.max(document.documentElement?.scrollHeight||0,document.body?.scrollHeight||0)-window.innerHeight,h=Math.max(0,b-269);window.scrollTo({top:h,behavior:"smooth"})},children:[s.jsx(gE,{children:"Designer Info"}),s.jsx(hE,{children:s.jsx("img",{src:`${m}icons/pageDownIcon.svg`,alt:"Page Down Icon"})})]})]})]})})}ss.propTypes={titleKor:B.string.isRequired,titleEng:B.string.isRequired,context:B.string.isRequired,isOpen:B.bool,onClose:B.func};const yE=x.div`
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
`,xE=x.div`
  display: flex;
  width: 290px;
  height: 387px;
  border-radius: 4px;
`,vE=x.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  display: block;
`,bE=x.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 8px);
  width: auto;
`,jE=x.div`
  display: flex;
  height: auto;
  padding: 0;
  margin: 0;
  flex-direction: column;
  gap: 0px;
`,EE=x.h1`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 42px;
  font-weight: 700;
  line-height: auto;
  color: #202020;
  margin: 0;
  padding: 0;
`,SE=x.h2`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: auto;
  color: #202020;
  margin: 0;
  padding: 0;
`,wE=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 84px;
`,TE=x.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90px;
  height: 84px;
  margin: 0;
  padding: 0;
`,Xc=x.h3`
  display: flex;
  height: 20px;
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 19.2px;
  color: #404040;
  margin: 0;
  padding: 0;
`,RE=x.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: auto;
  height: 84px;
  line-height: 19.2px;
  margin: 0;
  padding: 0;
`,Qc=x.p`
  display: flex;
  height: 20px;
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #202020;
  margin: 0;
  padding: 0;
`;function Os({nameKor:l,nameEng:o,part:c,sns:u,eMail:d,imgUrl:m,imgAlt:y}){return s.jsxs(yE,{children:[s.jsx(xE,{children:s.jsx(vE,{src:m,alt:y})}),s.jsxs(bE,{children:[s.jsxs(jE,{children:[s.jsx(EE,{children:l}),s.jsx(SE,{children:o})]}),s.jsxs(wE,{children:[s.jsxs(TE,{children:[s.jsx(Xc,{children:"Part"}),s.jsx(Xc,{children:"SNS"}),s.jsx(Xc,{children:"E-mail"})]}),s.jsxs(RE,{children:[s.jsx(Qc,{children:c}),s.jsx(Qc,{children:u}),s.jsx(Qc,{children:d})]})]})]})]})}Os.propTypes={nameKor:B.string.isRequired,nameEng:B.string.isRequired,part:B.string,sns:B.string,eMail:B.string,imgUrl:B.string.isRequired,imgAlt:B.string.isRequired};Os.defaultProps={sns:"N/A",eMail:"N/A"};const AE=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 775px;
  height: 945px;
  gap: 20px;
  margin: 140px 0 120px 77px;
`,DE=x.div`
  display: flex;
  flex-direction: column;
  width: 810px;
  height: auto;
  gap: 76px;
`,NE=x.h1`
  font-family: Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans KR, Arial, sans-serif;
  font-size: 80px;
  font-weight: 600;
  color: #202020;
  margin: 0;
  padding: 0;
  height: 95px;
  width: auto;
`;function T0({designers:l}){return s.jsxs(AE,{children:[s.jsx(NE,{children:"Designer"}),s.jsx(DE,{children:l.map((o,c)=>s.jsx(Os,{nameKor:o.nameKor,nameEn:o.nameEn,part:o.role,sns:o.sns,eMail:o.eMail,imgUrl:o.imgUrl},c))})]})}const UE=x.div`
    width: '1600px'; // 임시값
    height: '100%'; // 임시값
    margin-top: 50px;
`,ME=x.iframe`
    width: 100%;
    height: 1080px;
    border: none;
    margin: 0;
    padding: 0;
    overflow: hidden;   
`;function CE({videoId:l}){return s.jsx(UE,{children:s.jsx(ME,{src:"https://player.vimeo.com/video/1126266309?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"Embedded Vimeo"})})}const zE=x.div`
    display: ${l=>l.$visible?"flex":"none"};
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
    transform: translateX(${l=>l.$active?"0":"-100px"});
    transition: transform 500ms ease;
`,OE=x.div`
    display: flex;
    width: 40px;
    height: 40px;
`;function _E({isOpen:l=!1,onClick:o}){const[c,u]=U.useState(!1);return U.useEffect(()=>{let d;return l?u(!1):(u(!1),d=setTimeout(()=>{u(!0)},500)),()=>clearTimeout(d)},[l]),s.jsx(zE,{$visible:!l,$active:c,onClick:()=>{typeof o=="function"&&o()},children:s.jsx(OE,{children:s.jsx("img",{src:"/icons/infoOpenIcon.svg",alt:"작품 정보 열기"})})})}const R0=40;function Vc(l){if(!l)return l;const o="/TU2025gradulate/";if(/^https?:\/\//i.test(l))return l;const c=String(l).replace(/^\.\.\//,"").replace(/^\//,"");return o+c}const KE=x.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,Zc=l=>s.jsx(KE,{loading:"lazy",...l}),HE=x.div`
  display: flex;
  position: relative;
  background: #fff;
`,kE=x.div`
  padding-right: ${R0}px;
  padding-left: ${l=>l.$isInfoOpen?0:R0}px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* transition: all 500ms ease; */
`,BE=x.div`
  display: ${l=>l.$visible?"flex":"none"};
  position: sticky;
  /* transform: translateX(-350px); */
  top: 80px;
  left: 0;
  width: 350px;
  height: calc(100vh - 80px);
`,A0=x.div`
  position: relative;
`,$E={A:"c0",E:"c1",H:"c2",I:"c3",L:"c4",M:"c5"};function LE(){const{pid:l}=zy(),o=(l||"").toUpperCase().match(/^([A-Z])(\d{3})$/),[c,u]=U.useState(!0),[d,m]=U.useState(!0),y=()=>{u(!1),setTimeout(()=>{m(!1)},500)},b=()=>{m(!0),setTimeout(()=>{u(!0)},0)};let g=null;if(o){const[,$,L]=o,q=$E[$]||null,X=Math.max(0,parseInt(L,10)-1);g=xi.find(I=>I.projectNum===X&&(!q||I.category===q)),g||(g=xi.find(I=>I.projectNum==X))}if(!g)return s.jsx(A0,{children:s.jsxs(PageContainer,{children:[s.jsx(ss,{titleKor:"작품 제목(한글)",titleEng:"Work Title (English)",context:"이곳은 작품 설명이 들어가는 영역입니다. 작품에 대한 상세한 설명이나 배경, 제작 과정 등을 기술할 수 있습니다. 이 텍스트는 예시로 작성된 내용이며, 실제 작품 설명으로 대체되어야 합니다.",isOpen:c,onClose:()=>u(!1)}),s.jsx(Zc,{src:"https://placehold.co/1530x4000",alt:"featured"}),s.jsx(T0,{children:"  "})]})});const h=(g.members||[]).map($=>{const L=Us.find(q=>q.num===$);return L?{nameKor:L.nameKor,nameEng:L.nameEng,role:L.role||"Designer",sns:L.sns||"-",eMail:L.eMail||"",imgUrl:Vc(L.imgUrl||"/김예준.jpg")}:null}).filter(Boolean);h.length>0&&h[0].nameEng;const T={c0:"A",c1:"E",c2:"H",c3:"I",c4:"L",c5:"M"}[g.category]||"A",M=String(g.projectNum??g.num).padStart(3,"0"),C=`/projects/${g.projectNum}`,_=Number(g.galleryCount||0),G=Array.from({length:_},($,L)=>Vc(`${C}/gallery/${L}.jpg`));return s.jsx(A0,{children:s.jsxs(HE,{children:[s.jsx(_E,{isOpen:c,onClick:b}),s.jsx(BE,{$visible:d,children:s.jsx(ss,{titleKor:g.titleKor,titleEng:g.titleEng,context:g.description||"null",isOpen:c,onClose:y})}),s.jsxs(kE,{$isInfoOpen:c,children:[G.length>0?G.map(($,L)=>s.jsx(Zc,{style:{minHeight:"100vh"},src:$,alt:`project-${T}${M}-img-${L+1}`},L)):s.jsx(Zc,{style:{minHeight:"100vh"},src:Vc("/thumbnailExample.png"),alt:`project-${T}${M}-placeholder`}),s.jsx(CE,{videoId:g.videoId}),s.jsx(T0,{designers:h})]})]})})}var Ic={exports:{}},pi={},Fc={exports:{}},Jc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function qE(){return D0||(D0=1,(function(l){function o(z,V){var te=z.length;z.push(V);e:for(;0<te;){var se=te-1>>>1,E=z[se];if(0<d(E,V))z[se]=V,z[te]=E,te=se;else break e}}function c(z){return z.length===0?null:z[0]}function u(z){if(z.length===0)return null;var V=z[0],te=z.pop();if(te!==V){z[0]=te;e:for(var se=0,E=z.length,k=E>>>1;se<k;){var Q=2*(se+1)-1,Z=z[Q],P=Q+1,fe=z[P];if(0>d(Z,te))P<E&&0>d(fe,Z)?(z[se]=fe,z[P]=te,se=P):(z[se]=Z,z[Q]=te,se=Q);else if(P<E&&0>d(fe,te))z[se]=fe,z[P]=te,se=P;else break e}}return V}function d(z,V){var te=z.sortIndex-V.sortIndex;return te!==0?te:z.id-V.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;l.unstable_now=function(){return m.now()}}else{var y=Date,b=y.now();l.unstable_now=function(){return y.now()-b}}var g=[],h=[],j=1,T=null,M=3,C=!1,_=!1,G=!1,$=!1,L=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function I(z){for(var V=c(h);V!==null;){if(V.callback===null)u(h);else if(V.startTime<=z)u(h),V.sortIndex=V.expirationTime,o(g,V);else break;V=c(h)}}function Y(z){if(G=!1,I(z),!_)if(c(g)!==null)_=!0,ee||(ee=!0,Ye());else{var V=c(h);V!==null&&Xe(Y,V.startTime-z)}}var ee=!1,W=-1,De=5,Te=-1;function it(){return $?!0:!(l.unstable_now()-Te<De)}function ot(){if($=!1,ee){var z=l.unstable_now();Te=z;var V=!0;try{e:{_=!1,G&&(G=!1,q(W),W=-1),C=!0;var te=M;try{t:{for(I(z),T=c(g);T!==null&&!(T.expirationTime>z&&it());){var se=T.callback;if(typeof se=="function"){T.callback=null,M=T.priorityLevel;var E=se(T.expirationTime<=z);if(z=l.unstable_now(),typeof E=="function"){T.callback=E,I(z),V=!0;break t}T===c(g)&&u(g),I(z)}else u(g);T=c(g)}if(T!==null)V=!0;else{var k=c(h);k!==null&&Xe(Y,k.startTime-z),V=!1}}break e}finally{T=null,M=te,C=!1}V=void 0}}finally{V?Ye():ee=!1}}}var Ye;if(typeof X=="function")Ye=function(){X(ot)};else if(typeof MessageChannel<"u"){var Jt=new MessageChannel,Wt=Jt.port2;Jt.port1.onmessage=ot,Ye=function(){Wt.postMessage(null)}}else Ye=function(){L(ot,0)};function Xe(z,V){W=L(function(){z(l.unstable_now())},V)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(z){z.callback=null},l.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):De=0<z?Math.floor(1e3/z):5},l.unstable_getCurrentPriorityLevel=function(){return M},l.unstable_next=function(z){switch(M){case 1:case 2:case 3:var V=3;break;default:V=M}var te=M;M=V;try{return z()}finally{M=te}},l.unstable_requestPaint=function(){$=!0},l.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var te=M;M=z;try{return V()}finally{M=te}},l.unstable_scheduleCallback=function(z,V,te){var se=l.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?se+te:se):te=se,z){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=te+E,z={id:j++,callback:V,priorityLevel:z,startTime:te,expirationTime:E,sortIndex:-1},te>se?(z.sortIndex=te,o(h,z),c(g)===null&&z===c(h)&&(G?(q(W),W=-1):G=!0,Xe(Y,te-se))):(z.sortIndex=E,o(g,z),_||C||(_=!0,ee||(ee=!0,Ye()))),z},l.unstable_shouldYield=it,l.unstable_wrapCallback=function(z){var V=M;return function(){var te=M;M=V;try{return z.apply(this,arguments)}finally{M=te}}}})(Jc)),Jc}var N0;function GE(){return N0||(N0=1,Fc.exports=qE()),Fc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function YE(){if(U0)return pi;U0=1;var l=GE(),o=fs(),c=Ux();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(m(e)!==e)throw Error(u(188))}function g(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var r=i.alternate;if(r===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===n)return b(i),e;if(r===a)return b(i),t;r=r.sibling}throw Error(u(188))}if(n.return!==a.return)n=i,a=r;else{for(var f=!1,p=i.child;p;){if(p===n){f=!0,n=i,a=r;break}if(p===a){f=!0,a=i,n=r;break}p=p.sibling}if(!f){for(p=r.child;p;){if(p===n){f=!0,n=r,a=i;break}if(p===a){f=!0,a=r,n=i;break}p=p.sibling}if(!f)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function h(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=h(e),t!==null)return t;e=e.sibling}return null}var j=Object.assign,T=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),q=Symbol.for("react.consumer"),X=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),De=Symbol.for("react.lazy"),Te=Symbol.for("react.activity"),it=Symbol.for("react.memo_cache_sentinel"),ot=Symbol.iterator;function Ye(e){return e===null||typeof e!="object"?null:(e=ot&&e[ot]||e["@@iterator"],typeof e=="function"?e:null)}var Jt=Symbol.for("react.client.reference");function Wt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Jt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case $:return"Profiler";case G:return"StrictMode";case Y:return"Suspense";case ee:return"SuspenseList";case Te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case X:return(e.displayName||"Context")+".Provider";case q:return(e._context.displayName||"Context")+".Consumer";case I:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:Wt(e.type)||"Memo";case De:t=e._payload,e=e._init;try{return Wt(e(t))}catch{}}return null}var Xe=Array.isArray,z=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},se=[],E=-1;function k(e){return{current:e}}function Q(e){0>E||(e.current=se[E],se[E]=null,E--)}function Z(e,t){E++,se[E]=e.current,e.current=t}var P=k(null),fe=k(null),ae=k(null),Qe=k(null);function xe(e,t){switch(Z(ae,t),Z(fe,e),Z(P,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?nm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=nm(t),e=am(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(P),Z(P,e)}function tt(){Q(P),Q(fe),Q(ae)}function Vn(e){e.memoizedState!==null&&Z(Qe,e);var t=P.current,n=am(t,e.type);t!==n&&(Z(fe,e),Z(P,n))}function Pt(e){fe.current===e&&(Q(P),Q(fe)),Qe.current===e&&(Q(Qe),ii._currentValue=te)}var wt=Object.prototype.hasOwnProperty,mo=l.unstable_scheduleCallback,go=l.unstable_cancelCallback,Ug=l.unstable_shouldYield,Mg=l.unstable_requestPaint,qt=l.unstable_now,Cg=l.unstable_getCurrentPriorityLevel,_s=l.unstable_ImmediatePriority,Ks=l.unstable_UserBlockingPriority,wi=l.unstable_NormalPriority,zg=l.unstable_LowPriority,Hs=l.unstable_IdlePriority,Og=l.log,_g=l.unstable_setDisableYieldValue,pl=null,mt=null;function jn(e){if(typeof Og=="function"&&_g(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(pl,e)}catch{}}var gt=Math.clz32?Math.clz32:kg,Kg=Math.log,Hg=Math.LN2;function kg(e){return e>>>=0,e===0?32:31-(Kg(e)/Hg|0)|0}var Ti=256,Ri=4194304;function Zn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ai(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,r=e.suspendedLanes,f=e.pingedLanes;e=e.warmLanes;var p=a&134217727;return p!==0?(a=p&~r,a!==0?i=Zn(a):(f&=p,f!==0?i=Zn(f):n||(n=p&~e,n!==0&&(i=Zn(n))))):(p=a&~r,p!==0?i=Zn(p):f!==0?i=Zn(f):n||(n=a&~e,n!==0&&(i=Zn(n)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:i}function ml(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Bg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ks(){var e=Ti;return Ti<<=1,(Ti&4194048)===0&&(Ti=256),e}function Bs(){var e=Ri;return Ri<<=1,(Ri&62914560)===0&&(Ri=4194304),e}function ho(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $g(e,t,n,a,i,r){var f=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var p=e.entanglements,v=e.expirationTimes,A=e.hiddenUpdates;for(n=f&~n;0<n;){var O=31-gt(n),H=1<<O;p[O]=0,v[O]=-1;var D=A[O];if(D!==null)for(A[O]=null,O=0;O<D.length;O++){var N=D[O];N!==null&&(N.lane&=-536870913)}n&=~H}a!==0&&$s(e,a,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(f&~t))}function $s(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-gt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function Ls(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-gt(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function yo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qs(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:Em(e.type))}function Lg(e,t){var n=V.p;try{return V.p=e,t()}finally{V.p=n}}var En=Math.random().toString(36).slice(2),nt="__reactFiber$"+En,ut="__reactProps$"+En,ga="__reactContainer$"+En,vo="__reactEvents$"+En,qg="__reactListeners$"+En,Gg="__reactHandles$"+En,Gs="__reactResources$"+En,hl="__reactMarker$"+En;function bo(e){delete e[nt],delete e[ut],delete e[vo],delete e[qg],delete e[Gg]}function ha(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ga]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=om(e);e!==null;){if(n=e[nt])return n;e=om(e)}return t}e=n,n=e.parentNode}return null}function ya(e){if(e=e[nt]||e[ga]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function yl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function xa(e){var t=e[Gs];return t||(t=e[Gs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[hl]=!0}var Ys=new Set,Xs={};function In(e,t){va(e,t),va(e+"Capture",t)}function va(e,t){for(Xs[e]=t,e=0;e<t.length;e++)Ys.add(t[e])}var Yg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qs={},Vs={};function Xg(e){return wt.call(Vs,e)?!0:wt.call(Qs,e)?!1:Yg.test(e)?Vs[e]=!0:(Qs[e]=!0,!1)}function Di(e,t,n){if(Xg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ni(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function en(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var jo,Zs;function ba(e){if(jo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);jo=t&&t[1]||"",Zs=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jo+e+Zs}var Eo=!1;function So(e,t){if(!e||Eo)return"";Eo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(N){var D=N}Reflect.construct(e,[],H)}else{try{H.call()}catch(N){D=N}e.call(H.prototype)}}else{try{throw Error()}catch(N){D=N}(H=e())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(N){if(N&&D&&typeof N.stack=="string")return[N.stack,D.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),f=r[0],p=r[1];if(f&&p){var v=f.split(`
`),A=p.split(`
`);for(i=a=0;a<v.length&&!v[a].includes("DetermineComponentFrameRoot");)a++;for(;i<A.length&&!A[i].includes("DetermineComponentFrameRoot");)i++;if(a===v.length||i===A.length)for(a=v.length-1,i=A.length-1;1<=a&&0<=i&&v[a]!==A[i];)i--;for(;1<=a&&0<=i;a--,i--)if(v[a]!==A[i]){if(a!==1||i!==1)do if(a--,i--,0>i||v[a]!==A[i]){var O=`
`+v[a].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=a&&0<=i);break}}}finally{Eo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ba(n):""}function Qg(e){switch(e.tag){case 26:case 27:case 5:return ba(e.type);case 16:return ba("Lazy");case 13:return ba("Suspense");case 19:return ba("SuspenseList");case 0:case 15:return So(e.type,!1);case 11:return So(e.type.render,!1);case 1:return So(e.type,!0);case 31:return ba("Activity");default:return""}}function Is(e){try{var t="";do t+=Qg(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Tt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vg(e){var t=Fs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(f){a=""+f,r.call(this,f)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(f){a=""+f},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ui(e){e._valueTracker||(e._valueTracker=Vg(e))}function Js(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Fs(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Zg=/[\n"\\]/g;function Rt(e){return e.replace(Zg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function wo(e,t,n,a,i,r,f,p){e.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.type=f:e.removeAttribute("type"),t!=null?f==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Tt(t)):e.value!==""+Tt(t)&&(e.value=""+Tt(t)):f!=="submit"&&f!=="reset"||e.removeAttribute("value"),t!=null?To(e,f,Tt(t)):n!=null?To(e,f,Tt(n)):a!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.name=""+Tt(p):e.removeAttribute("name")}function Ws(e,t,n,a,i,r,f,p){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+Tt(n):"",t=t!=null?""+Tt(t):n,p||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=p?e.checked:!!a,e.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.name=f)}function To(e,t,n){t==="number"&&Mi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ja(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Tt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ps(e,t,n){if(t!=null&&(t=""+Tt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Tt(n):""}function ef(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(Xe(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Tt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function Ea(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ig=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tf(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Ig.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function nf(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&tf(e,i,a)}else for(var r in t)t.hasOwnProperty(r)&&tf(e,r,t[r])}function Ro(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ci(e){return Jg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ao=null;function Do(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sa=null,wa=null;function af(e){var t=ya(e);if(t&&(e=t.stateNode)){var n=e[ut]||null;e:switch(e=t.stateNode,t.type){case"input":if(wo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Rt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[ut]||null;if(!i)throw Error(u(90));wo(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Js(a)}break e;case"textarea":Ps(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ja(e,!!n.multiple,t,!1)}}}var No=!1;function lf(e,t,n){if(No)return e(t,n);No=!0;try{var a=e(t);return a}finally{if(No=!1,(Sa!==null||wa!==null)&&(yr(),Sa&&(t=Sa,e=wa,wa=Sa=null,af(t),e)))for(t=0;t<e.length;t++)af(e[t])}}function xl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[ut]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uo=!1;if(tn)try{var vl={};Object.defineProperty(vl,"passive",{get:function(){Uo=!0}}),window.addEventListener("test",vl,vl),window.removeEventListener("test",vl,vl)}catch{Uo=!1}var Sn=null,Mo=null,zi=null;function rf(){if(zi)return zi;var e,t=Mo,n=t.length,a,i="value"in Sn?Sn.value:Sn.textContent,r=i.length;for(e=0;e<n&&t[e]===i[e];e++);var f=n-e;for(a=1;a<=f&&t[n-a]===i[r-a];a++);return zi=i.slice(e,1<a?1-a:void 0)}function Oi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _i(){return!0}function of(){return!1}function ct(e){function t(n,a,i,r,f){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=r,this.target=f,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(r):r[p]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?_i:of,this.isPropagationStopped=of,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_i)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_i)},persist:function(){},isPersistent:_i}),t}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ki=ct(Fn),bl=j({},Fn,{view:0,detail:0}),Wg=ct(bl),Co,zo,jl,Hi=j({},bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_o,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jl&&(jl&&e.type==="mousemove"?(Co=e.screenX-jl.screenX,zo=e.screenY-jl.screenY):zo=Co=0,jl=e),Co)},movementY:function(e){return"movementY"in e?e.movementY:zo}}),uf=ct(Hi),Pg=j({},Hi,{dataTransfer:0}),eh=ct(Pg),th=j({},bl,{relatedTarget:0}),Oo=ct(th),nh=j({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0}),ah=ct(nh),lh=j({},Fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ih=ct(lh),rh=j({},Fn,{data:0}),cf=ct(rh),oh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ch={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ch[e])?!!t[e]:!1}function _o(){return sh}var fh=j({},bl,{key:function(e){if(e.key){var t=oh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_o,charCode:function(e){return e.type==="keypress"?Oi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dh=ct(fh),ph=j({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sf=ct(ph),mh=j({},bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_o}),gh=ct(mh),hh=j({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),yh=ct(hh),xh=j({},Hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vh=ct(xh),bh=j({},Fn,{newState:0,oldState:0}),jh=ct(bh),Eh=[9,13,27,32],Ko=tn&&"CompositionEvent"in window,El=null;tn&&"documentMode"in document&&(El=document.documentMode);var Sh=tn&&"TextEvent"in window&&!El,ff=tn&&(!Ko||El&&8<El&&11>=El),df=" ",pf=!1;function mf(e,t){switch(e){case"keyup":return Eh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ta=!1;function wh(e,t){switch(e){case"compositionend":return gf(t);case"keypress":return t.which!==32?null:(pf=!0,df);case"textInput":return e=t.data,e===df&&pf?null:e;default:return null}}function Th(e,t){if(Ta)return e==="compositionend"||!Ko&&mf(e,t)?(e=rf(),zi=Mo=Sn=null,Ta=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ff&&t.locale!=="ko"?null:t.data;default:return null}}var Rh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rh[e.type]:t==="textarea"}function yf(e,t,n,a){Sa?wa?wa.push(a):wa=[a]:Sa=a,t=Sr(t,"onChange"),0<t.length&&(n=new Ki("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Sl=null,wl=null;function Ah(e){Jp(e,0)}function ki(e){var t=yl(e);if(Js(t))return e}function xf(e,t){if(e==="change")return t}var vf=!1;if(tn){var Ho;if(tn){var ko="oninput"in document;if(!ko){var bf=document.createElement("div");bf.setAttribute("oninput","return;"),ko=typeof bf.oninput=="function"}Ho=ko}else Ho=!1;vf=Ho&&(!document.documentMode||9<document.documentMode)}function jf(){Sl&&(Sl.detachEvent("onpropertychange",Ef),wl=Sl=null)}function Ef(e){if(e.propertyName==="value"&&ki(wl)){var t=[];yf(t,wl,e,Do(e)),lf(Ah,t)}}function Dh(e,t,n){e==="focusin"?(jf(),Sl=t,wl=n,Sl.attachEvent("onpropertychange",Ef)):e==="focusout"&&jf()}function Nh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ki(wl)}function Uh(e,t){if(e==="click")return ki(t)}function Mh(e,t){if(e==="input"||e==="change")return ki(t)}function Ch(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Ch;function Tl(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!wt.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function Sf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wf(e,t){var n=Sf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sf(n)}}function Tf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Mi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mi(e.document)}return t}function Bo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var zh=tn&&"documentMode"in document&&11>=document.documentMode,Ra=null,$o=null,Rl=null,Lo=!1;function Af(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lo||Ra==null||Ra!==Mi(a)||(a=Ra,"selectionStart"in a&&Bo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Rl&&Tl(Rl,a)||(Rl=a,a=Sr($o,"onSelect"),0<a.length&&(t=new Ki("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ra)))}function Jn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Aa={animationend:Jn("Animation","AnimationEnd"),animationiteration:Jn("Animation","AnimationIteration"),animationstart:Jn("Animation","AnimationStart"),transitionrun:Jn("Transition","TransitionRun"),transitionstart:Jn("Transition","TransitionStart"),transitioncancel:Jn("Transition","TransitionCancel"),transitionend:Jn("Transition","TransitionEnd")},qo={},Df={};tn&&(Df=document.createElement("div").style,"AnimationEvent"in window||(delete Aa.animationend.animation,delete Aa.animationiteration.animation,delete Aa.animationstart.animation),"TransitionEvent"in window||delete Aa.transitionend.transition);function Wn(e){if(qo[e])return qo[e];if(!Aa[e])return e;var t=Aa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Df)return qo[e]=t[n];return e}var Nf=Wn("animationend"),Uf=Wn("animationiteration"),Mf=Wn("animationstart"),Oh=Wn("transitionrun"),_h=Wn("transitionstart"),Kh=Wn("transitioncancel"),Cf=Wn("transitionend"),zf=new Map,Go="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Go.push("scrollEnd");function Kt(e,t){zf.set(e,t),In(t,[e])}var Of=new WeakMap;function At(e,t){if(typeof e=="object"&&e!==null){var n=Of.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Is(t)},Of.set(e,t),t)}return{value:e,source:t,stack:Is(t)}}var Dt=[],Da=0,Yo=0;function Bi(){for(var e=Da,t=Yo=Da=0;t<e;){var n=Dt[t];Dt[t++]=null;var a=Dt[t];Dt[t++]=null;var i=Dt[t];Dt[t++]=null;var r=Dt[t];if(Dt[t++]=null,a!==null&&i!==null){var f=a.pending;f===null?i.next=i:(i.next=f.next,f.next=i),a.pending=i}r!==0&&_f(n,i,r)}}function $i(e,t,n,a){Dt[Da++]=e,Dt[Da++]=t,Dt[Da++]=n,Dt[Da++]=a,Yo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Xo(e,t,n,a){return $i(e,t,n,a),Li(e)}function Na(e,t){return $i(e,null,null,t),Li(e)}function _f(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-gt(n),e=r.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),r):null}function Li(e){if(50<Jl)throw Jl=0,Ju=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ua={};function Hh(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,a){return new Hh(e,t,n,a)}function Qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nn(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Kf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function qi(e,t,n,a,i,r){var f=0;if(a=e,typeof e=="function")Qo(e)&&(f=1);else if(typeof e=="string")f=B1(e,n,P.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Te:return e=yt(31,n,t,i),e.elementType=Te,e.lanes=r,e;case _:return Pn(n.children,i,r,t);case G:f=8,i|=24;break;case $:return e=yt(12,n,t,i|2),e.elementType=$,e.lanes=r,e;case Y:return e=yt(13,n,t,i),e.elementType=Y,e.lanes=r,e;case ee:return e=yt(19,n,t,i),e.elementType=ee,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:case X:f=10;break e;case q:f=9;break e;case I:f=11;break e;case W:f=14;break e;case De:f=16,a=null;break e}f=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=yt(f,n,t,i),t.elementType=e,t.type=a,t.lanes=r,t}function Pn(e,t,n,a){return e=yt(7,e,a,t),e.lanes=n,e}function Vo(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function Zo(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ma=[],Ca=0,Gi=null,Yi=0,Nt=[],Ut=0,ea=null,an=1,ln="";function ta(e,t){Ma[Ca++]=Yi,Ma[Ca++]=Gi,Gi=e,Yi=t}function Hf(e,t,n){Nt[Ut++]=an,Nt[Ut++]=ln,Nt[Ut++]=ea,ea=e;var a=an;e=ln;var i=32-gt(a)-1;a&=~(1<<i),n+=1;var r=32-gt(t)+i;if(30<r){var f=i-i%5;r=(a&(1<<f)-1).toString(32),a>>=f,i-=f,an=1<<32-gt(t)+i|n<<i|a,ln=r+e}else an=1<<r|n<<i|a,ln=e}function Io(e){e.return!==null&&(ta(e,1),Hf(e,1,0))}function Fo(e){for(;e===Gi;)Gi=Ma[--Ca],Ma[Ca]=null,Yi=Ma[--Ca],Ma[Ca]=null;for(;e===ea;)ea=Nt[--Ut],Nt[Ut]=null,ln=Nt[--Ut],Nt[Ut]=null,an=Nt[--Ut],Nt[Ut]=null}var rt=null,Oe=null,ye=!1,na=null,Gt=!1,Jo=Error(u(519));function aa(e){var t=Error(u(418,""));throw Nl(At(t,e)),Jo}function kf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[nt]=e,t[ut]=a,n){case"dialog":pe("cancel",t),pe("close",t);break;case"iframe":case"object":case"embed":pe("load",t);break;case"video":case"audio":for(n=0;n<Pl.length;n++)pe(Pl[n],t);break;case"source":pe("error",t);break;case"img":case"image":case"link":pe("error",t),pe("load",t);break;case"details":pe("toggle",t);break;case"input":pe("invalid",t),Ws(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Ui(t);break;case"select":pe("invalid",t);break;case"textarea":pe("invalid",t),ef(t,a.value,a.defaultValue,a.children),Ui(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||tm(t.textContent,n)?(a.popover!=null&&(pe("beforetoggle",t),pe("toggle",t)),a.onScroll!=null&&pe("scroll",t),a.onScrollEnd!=null&&pe("scrollend",t),a.onClick!=null&&(t.onclick=wr),t=!0):t=!1,t||aa(e)}function Bf(e){for(rt=e.return;rt;)switch(rt.tag){case 5:case 13:Gt=!1;return;case 27:case 3:Gt=!0;return;default:rt=rt.return}}function Al(e){if(e!==rt)return!1;if(!ye)return Bf(e),ye=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||pc(e.type,e.memoizedProps)),n=!n),n&&Oe&&aa(e),Bf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Oe=kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Oe=null}}else t===27?(t=Oe,Bn(e.type)?(e=yc,yc=null,Oe=e):Oe=t):Oe=rt?kt(e.stateNode.nextSibling):null;return!0}function Dl(){Oe=rt=null,ye=!1}function $f(){var e=na;return e!==null&&(dt===null?dt=e:dt.push.apply(dt,e),na=null),e}function Nl(e){na===null?na=[e]:na.push(e)}var Wo=k(null),la=null,rn=null;function wn(e,t,n){Z(Wo,t._currentValue),t._currentValue=n}function on(e){e._currentValue=Wo.current,Q(Wo)}function Po(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function eu(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var f=i.child;r=r.firstContext;e:for(;r!==null;){var p=r;r=i;for(var v=0;v<t.length;v++)if(p.context===t[v]){r.lanes|=n,p=r.alternate,p!==null&&(p.lanes|=n),Po(r.return,n,e),a||(f=null);break e}r=p.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(u(341));f.lanes|=n,r=f.alternate,r!==null&&(r.lanes|=n),Po(f,n,e),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===e){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function Ul(e,t,n,a){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(u(387));if(f=f.memoizedProps,f!==null){var p=i.type;ht(i.pendingProps.value,f.value)||(e!==null?e.push(p):e=[p])}}else if(i===Qe.current){if(f=i.alternate,f===null)throw Error(u(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(ii):e=[ii])}i=i.return}e!==null&&eu(t,e,n,a),t.flags|=262144}function Xi(e){for(e=e.firstContext;e!==null;){if(!ht(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ia(e){la=e,rn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return Lf(la,e)}function Qi(e,t){return la===null&&ia(e),Lf(e,t)}function Lf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},rn===null){if(e===null)throw Error(u(308));rn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else rn=rn.next=t;return n}var kh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Bh=l.unstable_scheduleCallback,$h=l.unstable_NormalPriority,Le={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tu(){return{controller:new kh,data:new Map,refCount:0}}function Ml(e){e.refCount--,e.refCount===0&&Bh($h,function(){e.controller.abort()})}var Cl=null,nu=0,za=0,Oa=null;function Lh(e,t){if(Cl===null){var n=Cl=[];nu=0,za=lc(),Oa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return nu++,t.then(qf,qf),t}function qf(){if(--nu===0&&Cl!==null){Oa!==null&&(Oa.status="fulfilled");var e=Cl;Cl=null,za=0,Oa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function qh(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var Gf=z.S;z.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Lh(e,t),Gf!==null&&Gf(e,t)};var ra=k(null);function au(){var e=ra.current;return e!==null?e:Ae.pooledCache}function Vi(e,t){t===null?Z(ra,ra.current):Z(ra,t.pool)}function Yf(){var e=au();return e===null?null:{parent:Le._currentValue,pool:e}}var zl=Error(u(460)),Xf=Error(u(474)),Zi=Error(u(542)),lu={then:function(){}};function Qf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ii(){}function Vf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ii,Ii),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,If(e),e;default:if(typeof t.status=="string")t.then(Ii,Ii);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,If(e),e}throw Ol=t,zl}}var Ol=null;function Zf(){if(Ol===null)throw Error(u(459));var e=Ol;return Ol=null,e}function If(e){if(e===zl||e===Zi)throw Error(u(483))}var Tn=!1;function iu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ru(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Rn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function An(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(be&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=Li(e),_f(e,null,n),t}return $i(e,a,t,n),Li(e)}function _l(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Ls(e,n)}}function ou(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var f={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?i=r=f:r=r.next=f,n=n.next}while(n!==null);r===null?i=r=t:r=r.next=t}else i=r=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var uu=!1;function Kl(){if(uu){var e=Oa;if(e!==null)throw e}}function Hl(e,t,n,a){uu=!1;var i=e.updateQueue;Tn=!1;var r=i.firstBaseUpdate,f=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var v=p,A=v.next;v.next=null,f===null?r=A:f.next=A,f=v;var O=e.alternate;O!==null&&(O=O.updateQueue,p=O.lastBaseUpdate,p!==f&&(p===null?O.firstBaseUpdate=A:p.next=A,O.lastBaseUpdate=v))}if(r!==null){var H=i.baseState;f=0,O=A=v=null,p=r;do{var D=p.lane&-536870913,N=D!==p.lane;if(N?(me&D)===D:(a&D)===D){D!==0&&D===za&&(uu=!0),O!==null&&(O=O.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});e:{var ie=e,ne=p;D=t;var we=n;switch(ne.tag){case 1:if(ie=ne.payload,typeof ie=="function"){H=ie.call(we,H,D);break e}H=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=ne.payload,D=typeof ie=="function"?ie.call(we,H,D):ie,D==null)break e;H=j({},H,D);break e;case 2:Tn=!0}}D=p.callback,D!==null&&(e.flags|=64,N&&(e.flags|=8192),N=i.callbacks,N===null?i.callbacks=[D]:N.push(D))}else N={lane:D,tag:p.tag,payload:p.payload,callback:p.callback,next:null},O===null?(A=O=N,v=H):O=O.next=N,f|=D;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;N=p,p=N.next,N.next=null,i.lastBaseUpdate=N,i.shared.pending=null}}while(!0);O===null&&(v=H),i.baseState=v,i.firstBaseUpdate=A,i.lastBaseUpdate=O,r===null&&(i.shared.lanes=0),_n|=f,e.lanes=f,e.memoizedState=H}}function Ff(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Jf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ff(n[e],t)}var _a=k(null),Fi=k(0);function Wf(e,t){e=mn,Z(Fi,e),Z(_a,t),mn=e|t.baseLanes}function cu(){Z(Fi,mn),Z(_a,_a.current)}function su(){mn=Fi.current,Q(_a),Q(Fi)}var Dn=0,ue=null,Ee=null,ke=null,Ji=!1,Ka=!1,oa=!1,Wi=0,kl=0,Ha=null,Gh=0;function Ke(){throw Error(u(321))}function fu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function du(e,t,n,a,i,r){return Dn=r,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?_d:Kd,oa=!1,r=n(a,i),oa=!1,Ka&&(r=ed(t,n,a,i)),Pf(e),r}function Pf(e){z.H=lr;var t=Ee!==null&&Ee.next!==null;if(Dn=0,ke=Ee=ue=null,Ji=!1,kl=0,Ha=null,t)throw Error(u(300));e===null||Ze||(e=e.dependencies,e!==null&&Xi(e)&&(Ze=!0))}function ed(e,t,n,a){ue=e;var i=0;do{if(Ka&&(Ha=null),kl=0,Ka=!1,25<=i)throw Error(u(301));if(i+=1,ke=Ee=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}z.H=Fh,r=t(n,a)}while(Ka);return r}function Yh(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?Bl(t):t,e=e.useState()[0],(Ee!==null?Ee.memoizedState:null)!==e&&(ue.flags|=1024),t}function pu(){var e=Wi!==0;return Wi=0,e}function mu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function gu(e){if(Ji){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ji=!1}Dn=0,ke=Ee=ue=null,Ka=!1,kl=Wi=0,Ha=null}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ue.memoizedState=ke=e:ke=ke.next=e,ke}function Be(){if(Ee===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=ke===null?ue.memoizedState:ke.next;if(t!==null)ke=t,Ee=e;else{if(e===null)throw ue.alternate===null?Error(u(467)):Error(u(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},ke===null?ue.memoizedState=ke=e:ke=ke.next=e}return ke}function hu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bl(e){var t=kl;return kl+=1,Ha===null&&(Ha=[]),e=Vf(Ha,e,t),t=ue,(ke===null?t.memoizedState:ke.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?_d:Kd),e}function Pi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Bl(e);if(e.$$typeof===X)return at(e)}throw Error(u(438,String(e)))}function yu(e){var t=null,n=ue.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ue.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=hu(),ue.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=it;return t.index++,n}function un(e,t){return typeof t=="function"?t(e):t}function er(e){var t=Be();return xu(t,Ee,e)}function xu(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var i=e.baseQueue,r=a.pending;if(r!==null){if(i!==null){var f=i.next;i.next=r.next,r.next=f}t.baseQueue=i=r,a.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var p=f=null,v=null,A=t,O=!1;do{var H=A.lane&-536870913;if(H!==A.lane?(me&H)===H:(Dn&H)===H){var D=A.revertLane;if(D===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),H===za&&(O=!0);else if((Dn&D)===D){A=A.next,D===za&&(O=!0);continue}else H={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(p=v=H,f=r):v=v.next=H,ue.lanes|=D,_n|=D;H=A.action,oa&&n(r,H),r=A.hasEagerState?A.eagerState:n(r,H)}else D={lane:H,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(p=v=D,f=r):v=v.next=D,ue.lanes|=H,_n|=H;A=A.next}while(A!==null&&A!==t);if(v===null?f=r:v.next=p,!ht(r,e.memoizedState)&&(Ze=!0,O&&(n=Oa,n!==null)))throw n;e.memoizedState=r,e.baseState=f,e.baseQueue=v,a.lastRenderedState=r}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function vu(e){var t=Be(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,r=t.memoizedState;if(i!==null){n.pending=null;var f=i=i.next;do r=e(r,f.action),f=f.next;while(f!==i);ht(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function td(e,t,n){var a=ue,i=Be(),r=ye;if(r){if(n===void 0)throw Error(u(407));n=n()}else n=t();var f=!ht((Ee||i).memoizedState,n);f&&(i.memoizedState=n,Ze=!0),i=i.queue;var p=ld.bind(null,a,i,e);if($l(2048,8,p,[e]),i.getSnapshot!==t||f||ke!==null&&ke.memoizedState.tag&1){if(a.flags|=2048,ka(9,tr(),ad.bind(null,a,i,n,t),null),Ae===null)throw Error(u(349));r||(Dn&124)!==0||nd(a,t,n)}return n}function nd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t=hu(),ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ad(e,t,n,a){t.value=n,t.getSnapshot=a,id(t)&&rd(e)}function ld(e,t,n){return n(function(){id(t)&&rd(e)})}function id(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function rd(e){var t=Na(e,2);t!==null&&Et(t,e,2)}function bu(e){var t=st();if(typeof e=="function"){var n=e;if(e=n(),oa){jn(!0);try{n()}finally{jn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:e},t}function od(e,t,n,a){return e.baseState=n,xu(e,Ee,typeof a=="function"?a:un)}function Xh(e,t,n,a,i){if(ar(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){r.listeners.push(f)}};z.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,ud(t,r)):(r.next=n.next,t.pending=n.next=r)}}function ud(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var r=z.T,f={};z.T=f;try{var p=n(i,a),v=z.S;v!==null&&v(f,p),cd(e,t,p)}catch(A){ju(e,t,A)}finally{z.T=r}}else try{r=n(i,a),cd(e,t,r)}catch(A){ju(e,t,A)}}function cd(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){sd(e,t,a)},function(a){return ju(e,t,a)}):sd(e,t,n)}function sd(e,t,n){t.status="fulfilled",t.value=n,fd(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ud(e,n)))}function ju(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,fd(t),t=t.next;while(t!==a)}e.action=null}function fd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dd(e,t){return t}function pd(e,t){if(ye){var n=Ae.formState;if(n!==null){e:{var a=ue;if(ye){if(Oe){t:{for(var i=Oe,r=Gt;i.nodeType!==8;){if(!r){i=null;break t}if(i=kt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Oe=kt(i.nextSibling),a=i.data==="F!";break e}}aa(a)}a=!1}a&&(t=n[0])}}return n=st(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dd,lastRenderedState:t},n.queue=a,n=Cd.bind(null,ue,a),a.dispatch=n,a=bu(!1),r=Ru.bind(null,ue,!1,a.queue),a=st(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=Xh.bind(null,ue,i,r,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function md(e){var t=Be();return gd(t,Ee,e)}function gd(e,t,n){if(t=xu(e,t,dd)[0],e=er(un)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Bl(t)}catch(f){throw f===zl?Zi:f}else a=t;t=Be();var i=t.queue,r=i.dispatch;return n!==t.memoizedState&&(ue.flags|=2048,ka(9,tr(),Qh.bind(null,i,n),null)),[a,r,e]}function Qh(e,t){e.action=t}function hd(e){var t=Be(),n=Ee;if(n!==null)return gd(t,n,e);Be(),t=t.memoizedState,n=Be();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ka(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ue.updateQueue,t===null&&(t=hu(),ue.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function tr(){return{destroy:void 0,resource:void 0}}function yd(){return Be().memoizedState}function nr(e,t,n,a){var i=st();a=a===void 0?null:a,ue.flags|=e,i.memoizedState=ka(1|t,tr(),n,a)}function $l(e,t,n,a){var i=Be();a=a===void 0?null:a;var r=i.memoizedState.inst;Ee!==null&&a!==null&&fu(a,Ee.memoizedState.deps)?i.memoizedState=ka(t,r,n,a):(ue.flags|=e,i.memoizedState=ka(1|t,r,n,a))}function xd(e,t){nr(8390656,8,e,t)}function vd(e,t){$l(2048,8,e,t)}function bd(e,t){return $l(4,2,e,t)}function jd(e,t){return $l(4,4,e,t)}function Ed(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sd(e,t,n){n=n!=null?n.concat([e]):null,$l(4,4,Ed.bind(null,t,e),n)}function Eu(){}function wd(e,t){var n=Be();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&fu(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Td(e,t){var n=Be();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&fu(t,a[1]))return a[0];if(a=e(),oa){jn(!0);try{e()}finally{jn(!1)}}return n.memoizedState=[a,t],a}function Su(e,t,n){return n===void 0||(Dn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Dp(),ue.lanes|=e,_n|=e,n)}function Rd(e,t,n,a){return ht(n,t)?n:_a.current!==null?(e=Su(e,n,a),ht(e,t)||(Ze=!0),e):(Dn&42)===0?(Ze=!0,e.memoizedState=n):(e=Dp(),ue.lanes|=e,_n|=e,t)}function Ad(e,t,n,a,i){var r=V.p;V.p=r!==0&&8>r?r:8;var f=z.T,p={};z.T=p,Ru(e,!1,t,n);try{var v=i(),A=z.S;if(A!==null&&A(p,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var O=qh(v,a);Ll(e,t,O,jt(e))}else Ll(e,t,a,jt(e))}catch(H){Ll(e,t,{then:function(){},status:"rejected",reason:H},jt())}finally{V.p=r,z.T=f}}function Vh(){}function wu(e,t,n,a){if(e.tag!==5)throw Error(u(476));var i=Dd(e).queue;Ad(e,i,t,te,n===null?Vh:function(){return Nd(e),n(a)})}function Dd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:te},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:un,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Nd(e){var t=Dd(e).next.queue;Ll(e,t,{},jt())}function Tu(){return at(ii)}function Ud(){return Be().memoizedState}function Md(){return Be().memoizedState}function Zh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jt();e=Rn(n);var a=An(t,e,n);a!==null&&(Et(a,t,n),_l(a,t,n)),t={cache:tu()},e.payload=t;return}t=t.return}}function Ih(e,t,n){var a=jt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ar(e)?zd(t,n):(n=Xo(e,t,n,a),n!==null&&(Et(n,e,a),Od(n,t,a)))}function Cd(e,t,n){var a=jt();Ll(e,t,n,a)}function Ll(e,t,n,a){var i={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ar(e))zd(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var f=t.lastRenderedState,p=r(f,n);if(i.hasEagerState=!0,i.eagerState=p,ht(p,f))return $i(e,t,i,0),Ae===null&&Bi(),!1}catch{}finally{}if(n=Xo(e,t,i,a),n!==null)return Et(n,e,a),Od(n,t,a),!0}return!1}function Ru(e,t,n,a){if(a={lane:2,revertLane:lc(),action:a,hasEagerState:!1,eagerState:null,next:null},ar(e)){if(t)throw Error(u(479))}else t=Xo(e,n,a,2),t!==null&&Et(t,e,2)}function ar(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function zd(e,t){Ka=Ji=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Od(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Ls(e,n)}}var lr={readContext:at,use:Pi,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke},_d={readContext:at,use:Pi,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:xd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,nr(4194308,4,Ed.bind(null,t,e),n)},useLayoutEffect:function(e,t){return nr(4194308,4,e,t)},useInsertionEffect:function(e,t){nr(4,2,e,t)},useMemo:function(e,t){var n=st();t=t===void 0?null:t;var a=e();if(oa){jn(!0);try{e()}finally{jn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=st();if(n!==void 0){var i=n(t);if(oa){jn(!0);try{n(t)}finally{jn(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=Ih.bind(null,ue,e),[a.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:function(e){e=bu(e);var t=e.queue,n=Cd.bind(null,ue,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Eu,useDeferredValue:function(e,t){var n=st();return Su(n,e,t)},useTransition:function(){var e=bu(!1);return e=Ad.bind(null,ue,e.queue,!0,!1),st().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ue,i=st();if(ye){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Ae===null)throw Error(u(349));(me&124)!==0||nd(a,t,n)}i.memoizedState=n;var r={value:n,getSnapshot:t};return i.queue=r,xd(ld.bind(null,a,r,e),[e]),a.flags|=2048,ka(9,tr(),ad.bind(null,a,r,n,t),null),n},useId:function(){var e=st(),t=Ae.identifierPrefix;if(ye){var n=ln,a=an;n=(a&~(1<<32-gt(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=Wi++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Gh++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Tu,useFormState:pd,useActionState:pd,useOptimistic:function(e){var t=st();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ru.bind(null,ue,!0,n),n.dispatch=t,[e,t]},useMemoCache:yu,useCacheRefresh:function(){return st().memoizedState=Zh.bind(null,ue)}},Kd={readContext:at,use:Pi,useCallback:wd,useContext:at,useEffect:vd,useImperativeHandle:Sd,useInsertionEffect:bd,useLayoutEffect:jd,useMemo:Td,useReducer:er,useRef:yd,useState:function(){return er(un)},useDebugValue:Eu,useDeferredValue:function(e,t){var n=Be();return Rd(n,Ee.memoizedState,e,t)},useTransition:function(){var e=er(un)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:Bl(e),t]},useSyncExternalStore:td,useId:Ud,useHostTransitionStatus:Tu,useFormState:md,useActionState:md,useOptimistic:function(e,t){var n=Be();return od(n,Ee,e,t)},useMemoCache:yu,useCacheRefresh:Md},Fh={readContext:at,use:Pi,useCallback:wd,useContext:at,useEffect:vd,useImperativeHandle:Sd,useInsertionEffect:bd,useLayoutEffect:jd,useMemo:Td,useReducer:vu,useRef:yd,useState:function(){return vu(un)},useDebugValue:Eu,useDeferredValue:function(e,t){var n=Be();return Ee===null?Su(n,e,t):Rd(n,Ee.memoizedState,e,t)},useTransition:function(){var e=vu(un)[0],t=Be().memoizedState;return[typeof e=="boolean"?e:Bl(e),t]},useSyncExternalStore:td,useId:Ud,useHostTransitionStatus:Tu,useFormState:hd,useActionState:hd,useOptimistic:function(e,t){var n=Be();return Ee!==null?od(n,Ee,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:yu,useCacheRefresh:Md},Ba=null,ql=0;function ir(e){var t=ql;return ql+=1,Ba===null&&(Ba=[]),Vf(Ba,e,t)}function Gl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function rr(e,t){throw t.$$typeof===T?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Hd(e){var t=e._init;return t(e._payload)}function kd(e){function t(w,S){if(e){var R=w.deletions;R===null?(w.deletions=[S],w.flags|=16):R.push(S)}}function n(w,S){if(!e)return null;for(;S!==null;)t(w,S),S=S.sibling;return null}function a(w){for(var S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function i(w,S){return w=nn(w,S),w.index=0,w.sibling=null,w}function r(w,S,R){return w.index=R,e?(R=w.alternate,R!==null?(R=R.index,R<S?(w.flags|=67108866,S):R):(w.flags|=67108866,S)):(w.flags|=1048576,S)}function f(w){return e&&w.alternate===null&&(w.flags|=67108866),w}function p(w,S,R,K){return S===null||S.tag!==6?(S=Vo(R,w.mode,K),S.return=w,S):(S=i(S,R),S.return=w,S)}function v(w,S,R,K){var F=R.type;return F===_?O(w,S,R.props.children,K,R.key):S!==null&&(S.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===De&&Hd(F)===S.type)?(S=i(S,R.props),Gl(S,R),S.return=w,S):(S=qi(R.type,R.key,R.props,null,w.mode,K),Gl(S,R),S.return=w,S)}function A(w,S,R,K){return S===null||S.tag!==4||S.stateNode.containerInfo!==R.containerInfo||S.stateNode.implementation!==R.implementation?(S=Zo(R,w.mode,K),S.return=w,S):(S=i(S,R.children||[]),S.return=w,S)}function O(w,S,R,K,F){return S===null||S.tag!==7?(S=Pn(R,w.mode,K,F),S.return=w,S):(S=i(S,R),S.return=w,S)}function H(w,S,R){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Vo(""+S,w.mode,R),S.return=w,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case M:return R=qi(S.type,S.key,S.props,null,w.mode,R),Gl(R,S),R.return=w,R;case C:return S=Zo(S,w.mode,R),S.return=w,S;case De:var K=S._init;return S=K(S._payload),H(w,S,R)}if(Xe(S)||Ye(S))return S=Pn(S,w.mode,R,null),S.return=w,S;if(typeof S.then=="function")return H(w,ir(S),R);if(S.$$typeof===X)return H(w,Qi(w,S),R);rr(w,S)}return null}function D(w,S,R,K){var F=S!==null?S.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return F!==null?null:p(w,S,""+R,K);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case M:return R.key===F?v(w,S,R,K):null;case C:return R.key===F?A(w,S,R,K):null;case De:return F=R._init,R=F(R._payload),D(w,S,R,K)}if(Xe(R)||Ye(R))return F!==null?null:O(w,S,R,K,null);if(typeof R.then=="function")return D(w,S,ir(R),K);if(R.$$typeof===X)return D(w,S,Qi(w,R),K);rr(w,R)}return null}function N(w,S,R,K,F){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return w=w.get(R)||null,p(S,w,""+K,F);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return w=w.get(K.key===null?R:K.key)||null,v(S,w,K,F);case C:return w=w.get(K.key===null?R:K.key)||null,A(S,w,K,F);case De:var ce=K._init;return K=ce(K._payload),N(w,S,R,K,F)}if(Xe(K)||Ye(K))return w=w.get(R)||null,O(S,w,K,F,null);if(typeof K.then=="function")return N(w,S,R,ir(K),F);if(K.$$typeof===X)return N(w,S,R,Qi(S,K),F);rr(S,K)}return null}function ie(w,S,R,K){for(var F=null,ce=null,J=S,le=S=0,Fe=null;J!==null&&le<R.length;le++){J.index>le?(Fe=J,J=null):Fe=J.sibling;var he=D(w,J,R[le],K);if(he===null){J===null&&(J=Fe);break}e&&J&&he.alternate===null&&t(w,J),S=r(he,S,le),ce===null?F=he:ce.sibling=he,ce=he,J=Fe}if(le===R.length)return n(w,J),ye&&ta(w,le),F;if(J===null){for(;le<R.length;le++)J=H(w,R[le],K),J!==null&&(S=r(J,S,le),ce===null?F=J:ce.sibling=J,ce=J);return ye&&ta(w,le),F}for(J=a(J);le<R.length;le++)Fe=N(J,w,le,R[le],K),Fe!==null&&(e&&Fe.alternate!==null&&J.delete(Fe.key===null?le:Fe.key),S=r(Fe,S,le),ce===null?F=Fe:ce.sibling=Fe,ce=Fe);return e&&J.forEach(function(Yn){return t(w,Yn)}),ye&&ta(w,le),F}function ne(w,S,R,K){if(R==null)throw Error(u(151));for(var F=null,ce=null,J=S,le=S=0,Fe=null,he=R.next();J!==null&&!he.done;le++,he=R.next()){J.index>le?(Fe=J,J=null):Fe=J.sibling;var Yn=D(w,J,he.value,K);if(Yn===null){J===null&&(J=Fe);break}e&&J&&Yn.alternate===null&&t(w,J),S=r(Yn,S,le),ce===null?F=Yn:ce.sibling=Yn,ce=Yn,J=Fe}if(he.done)return n(w,J),ye&&ta(w,le),F;if(J===null){for(;!he.done;le++,he=R.next())he=H(w,he.value,K),he!==null&&(S=r(he,S,le),ce===null?F=he:ce.sibling=he,ce=he);return ye&&ta(w,le),F}for(J=a(J);!he.done;le++,he=R.next())he=N(J,w,le,he.value,K),he!==null&&(e&&he.alternate!==null&&J.delete(he.key===null?le:he.key),S=r(he,S,le),ce===null?F=he:ce.sibling=he,ce=he);return e&&J.forEach(function(J1){return t(w,J1)}),ye&&ta(w,le),F}function we(w,S,R,K){if(typeof R=="object"&&R!==null&&R.type===_&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case M:e:{for(var F=R.key;S!==null;){if(S.key===F){if(F=R.type,F===_){if(S.tag===7){n(w,S.sibling),K=i(S,R.props.children),K.return=w,w=K;break e}}else if(S.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===De&&Hd(F)===S.type){n(w,S.sibling),K=i(S,R.props),Gl(K,R),K.return=w,w=K;break e}n(w,S);break}else t(w,S);S=S.sibling}R.type===_?(K=Pn(R.props.children,w.mode,K,R.key),K.return=w,w=K):(K=qi(R.type,R.key,R.props,null,w.mode,K),Gl(K,R),K.return=w,w=K)}return f(w);case C:e:{for(F=R.key;S!==null;){if(S.key===F)if(S.tag===4&&S.stateNode.containerInfo===R.containerInfo&&S.stateNode.implementation===R.implementation){n(w,S.sibling),K=i(S,R.children||[]),K.return=w,w=K;break e}else{n(w,S);break}else t(w,S);S=S.sibling}K=Zo(R,w.mode,K),K.return=w,w=K}return f(w);case De:return F=R._init,R=F(R._payload),we(w,S,R,K)}if(Xe(R))return ie(w,S,R,K);if(Ye(R)){if(F=Ye(R),typeof F!="function")throw Error(u(150));return R=F.call(R),ne(w,S,R,K)}if(typeof R.then=="function")return we(w,S,ir(R),K);if(R.$$typeof===X)return we(w,S,Qi(w,R),K);rr(w,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,S!==null&&S.tag===6?(n(w,S.sibling),K=i(S,R),K.return=w,w=K):(n(w,S),K=Vo(R,w.mode,K),K.return=w,w=K),f(w)):n(w,S)}return function(w,S,R,K){try{ql=0;var F=we(w,S,R,K);return Ba=null,F}catch(J){if(J===zl||J===Zi)throw J;var ce=yt(29,J,null,w.mode);return ce.lanes=K,ce.return=w,ce}finally{}}}var $a=kd(!0),Bd=kd(!1),Mt=k(null),Yt=null;function Nn(e){var t=e.alternate;Z(qe,qe.current&1),Z(Mt,e),Yt===null&&(t===null||_a.current!==null||t.memoizedState!==null)&&(Yt=e)}function $d(e){if(e.tag===22){if(Z(qe,qe.current),Z(Mt,e),Yt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Yt=e)}}else Un()}function Un(){Z(qe,qe.current),Z(Mt,Mt.current)}function cn(e){Q(Mt),Yt===e&&(Yt=null),Q(qe)}var qe=k(0);function or(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||hc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Au(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:j({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Du={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=jt(),i=Rn(a);i.payload=t,n!=null&&(i.callback=n),t=An(e,i,a),t!==null&&(Et(t,e,a),_l(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=jt(),i=Rn(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=An(e,i,a),t!==null&&(Et(t,e,a),_l(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jt(),a=Rn(n);a.tag=2,t!=null&&(a.callback=t),t=An(e,a,n),t!==null&&(Et(t,e,n),_l(t,e,n))}};function Ld(e,t,n,a,i,r,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,f):t.prototype&&t.prototype.isPureReactComponent?!Tl(n,a)||!Tl(i,r):!0}function qd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Du.enqueueReplaceState(t,t.state,null)}function ua(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=j({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var ur=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Gd(e){ur(e)}function Yd(e){console.error(e)}function Xd(e){ur(e)}function cr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Qd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Nu(e,t,n){return n=Rn(n),n.tag=3,n.payload={element:null},n.callback=function(){cr(e,t)},n}function Vd(e){return e=Rn(e),e.tag=3,e}function Zd(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=a.value;e.payload=function(){return i(r)},e.callback=function(){Qd(t,n,a)}}var f=n.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(e.callback=function(){Qd(t,n,a),typeof i!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var p=a.stack;this.componentDidCatch(a.value,{componentStack:p!==null?p:""})})}function Jh(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ul(t,n,i,!0),n=Mt.current,n!==null){switch(n.tag){case 13:return Yt===null?Pu():n.alternate===null&&_e===0&&(_e=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===lu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),tc(e,a,i)),!1;case 22:return n.flags|=65536,a===lu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),tc(e,a,i)),!1}throw Error(u(435,n.tag))}return tc(e,a,i),Pu(),!1}if(ye)return t=Mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==Jo&&(e=Error(u(422),{cause:a}),Nl(At(e,n)))):(a!==Jo&&(t=Error(u(423),{cause:a}),Nl(At(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=At(a,n),i=Nu(e.stateNode,a,i),ou(e,i),_e!==4&&(_e=2)),!1;var r=Error(u(520),{cause:a});if(r=At(r,n),Fl===null?Fl=[r]:Fl.push(r),_e!==4&&(_e=2),t===null)return!0;a=At(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Nu(n.stateNode,a,e),ou(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Vd(i),Zd(i,e,n,a),ou(n,i),!1}n=n.return}while(n!==null);return!1}var Id=Error(u(461)),Ze=!1;function We(e,t,n,a){t.child=e===null?Bd(t,null,n,a):$a(t,e.child,n,a)}function Fd(e,t,n,a,i){n=n.render;var r=t.ref;if("ref"in a){var f={};for(var p in a)p!=="ref"&&(f[p]=a[p])}else f=a;return ia(t),a=du(e,t,n,f,r,i),p=pu(),e!==null&&!Ze?(mu(e,t,i),sn(e,t,i)):(ye&&p&&Io(t),t.flags|=1,We(e,t,a,i),t.child)}function Jd(e,t,n,a,i){if(e===null){var r=n.type;return typeof r=="function"&&!Qo(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Wd(e,t,r,a,i)):(e=qi(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Hu(e,i)){var f=r.memoizedProps;if(n=n.compare,n=n!==null?n:Tl,n(f,a)&&e.ref===t.ref)return sn(e,t,i)}return t.flags|=1,e=nn(r,a),e.ref=t.ref,e.return=t,t.child=e}function Wd(e,t,n,a,i){if(e!==null){var r=e.memoizedProps;if(Tl(r,a)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=a=r,Hu(e,i))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,sn(e,t,i)}return Uu(e,t,n,a,i)}function Pd(e,t,n){var a=t.pendingProps,i=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=r!==null?r.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;t.childLanes=r&~a}else t.childLanes=0,t.child=null;return ep(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vi(t,r!==null?r.cachePool:null),r!==null?Wf(t,r):cu(),$d(t);else return t.lanes=t.childLanes=536870912,ep(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Vi(t,r.cachePool),Wf(t,r),Un(),t.memoizedState=null):(e!==null&&Vi(t,null),cu(),Un());return We(e,t,i,n),t.child}function ep(e,t,n,a){var i=au();return i=i===null?null:{parent:Le._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Vi(t,null),cu(),$d(t),e!==null&&Ul(e,t,a,!0),null}function sr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Uu(e,t,n,a,i){return ia(t),n=du(e,t,n,a,void 0,i),a=pu(),e!==null&&!Ze?(mu(e,t,i),sn(e,t,i)):(ye&&a&&Io(t),t.flags|=1,We(e,t,n,i),t.child)}function tp(e,t,n,a,i,r){return ia(t),t.updateQueue=null,n=ed(t,a,n,i),Pf(e),a=pu(),e!==null&&!Ze?(mu(e,t,r),sn(e,t,r)):(ye&&a&&Io(t),t.flags|=1,We(e,t,n,r),t.child)}function np(e,t,n,a,i){if(ia(t),t.stateNode===null){var r=Ua,f=n.contextType;typeof f=="object"&&f!==null&&(r=at(f)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Du,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},iu(t),f=n.contextType,r.context=typeof f=="object"&&f!==null?at(f):Ua,r.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(Au(t,n,f,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(f=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),f!==r.state&&Du.enqueueReplaceState(r,r.state,null),Hl(t,a,r,i),Kl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var p=t.memoizedProps,v=ua(n,p);r.props=v;var A=r.context,O=n.contextType;f=Ua,typeof O=="object"&&O!==null&&(f=at(O));var H=n.getDerivedStateFromProps;O=typeof H=="function"||typeof r.getSnapshotBeforeUpdate=="function",p=t.pendingProps!==p,O||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(p||A!==f)&&qd(t,r,a,f),Tn=!1;var D=t.memoizedState;r.state=D,Hl(t,a,r,i),Kl(),A=t.memoizedState,p||D!==A||Tn?(typeof H=="function"&&(Au(t,n,H,a),A=t.memoizedState),(v=Tn||Ld(t,n,v,a,D,A,f))?(O||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=A),r.props=a,r.state=A,r.context=f,a=v):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,ru(e,t),f=t.memoizedProps,O=ua(n,f),r.props=O,H=t.pendingProps,D=r.context,A=n.contextType,v=Ua,typeof A=="object"&&A!==null&&(v=at(A)),p=n.getDerivedStateFromProps,(A=typeof p=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(f!==H||D!==v)&&qd(t,r,a,v),Tn=!1,D=t.memoizedState,r.state=D,Hl(t,a,r,i),Kl();var N=t.memoizedState;f!==H||D!==N||Tn||e!==null&&e.dependencies!==null&&Xi(e.dependencies)?(typeof p=="function"&&(Au(t,n,p,a),N=t.memoizedState),(O=Tn||Ld(t,n,O,a,D,N,v)||e!==null&&e.dependencies!==null&&Xi(e.dependencies))?(A||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,N,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,N,v)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=N),r.props=a,r.state=N,r.context=v,a=O):(typeof r.componentDidUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,sr(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=$a(t,e.child,null,i),t.child=$a(t,null,n,i)):We(e,t,n,i),t.memoizedState=r.state,e=t.child):e=sn(e,t,i),e}function ap(e,t,n,a){return Dl(),t.flags|=256,We(e,t,n,a),t.child}var Mu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cu(e){return{baseLanes:e,cachePool:Yf()}}function zu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ct),e}function lp(e,t,n){var a=t.pendingProps,i=!1,r=(t.flags&128)!==0,f;if((f=r)||(f=e!==null&&e.memoizedState===null?!1:(qe.current&2)!==0),f&&(i=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,e===null){if(ye){if(i?Nn(t):Un(),ye){var p=Oe,v;if(v=p){e:{for(v=p,p=Gt;v.nodeType!==8;){if(!p){p=null;break e}if(v=kt(v.nextSibling),v===null){p=null;break e}}p=v}p!==null?(t.memoizedState={dehydrated:p,treeContext:ea!==null?{id:an,overflow:ln}:null,retryLane:536870912,hydrationErrors:null},v=yt(18,null,null,0),v.stateNode=p,v.return=t,t.child=v,rt=t,Oe=null,v=!0):v=!1}v||aa(t)}if(p=t.memoizedState,p!==null&&(p=p.dehydrated,p!==null))return hc(p)?t.lanes=32:t.lanes=536870912,null;cn(t)}return p=a.children,a=a.fallback,i?(Un(),i=t.mode,p=fr({mode:"hidden",children:p},i),a=Pn(a,i,n,null),p.return=t,a.return=t,p.sibling=a,t.child=p,i=t.child,i.memoizedState=Cu(n),i.childLanes=zu(e,f,n),t.memoizedState=Mu,a):(Nn(t),Ou(t,p))}if(v=e.memoizedState,v!==null&&(p=v.dehydrated,p!==null)){if(r)t.flags&256?(Nn(t),t.flags&=-257,t=_u(e,t,n)):t.memoizedState!==null?(Un(),t.child=e.child,t.flags|=128,t=null):(Un(),i=a.fallback,p=t.mode,a=fr({mode:"visible",children:a.children},p),i=Pn(i,p,n,null),i.flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,$a(t,e.child,null,n),a=t.child,a.memoizedState=Cu(n),a.childLanes=zu(e,f,n),t.memoizedState=Mu,t=i);else if(Nn(t),hc(p)){if(f=p.nextSibling&&p.nextSibling.dataset,f)var A=f.dgst;f=A,a=Error(u(419)),a.stack="",a.digest=f,Nl({value:a,source:null,stack:null}),t=_u(e,t,n)}else if(Ze||Ul(e,t,n,!1),f=(n&e.childLanes)!==0,Ze||f){if(f=Ae,f!==null&&(a=n&-n,a=(a&42)!==0?1:yo(a),a=(a&(f.suspendedLanes|n))!==0?0:a,a!==0&&a!==v.retryLane))throw v.retryLane=a,Na(e,a),Et(f,e,a),Id;p.data==="$?"||Pu(),t=_u(e,t,n)}else p.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=v.treeContext,Oe=kt(p.nextSibling),rt=t,ye=!0,na=null,Gt=!1,e!==null&&(Nt[Ut++]=an,Nt[Ut++]=ln,Nt[Ut++]=ea,an=e.id,ln=e.overflow,ea=t),t=Ou(t,a.children),t.flags|=4096);return t}return i?(Un(),i=a.fallback,p=t.mode,v=e.child,A=v.sibling,a=nn(v,{mode:"hidden",children:a.children}),a.subtreeFlags=v.subtreeFlags&65011712,A!==null?i=nn(A,i):(i=Pn(i,p,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,p=e.child.memoizedState,p===null?p=Cu(n):(v=p.cachePool,v!==null?(A=Le._currentValue,v=v.parent!==A?{parent:A,pool:A}:v):v=Yf(),p={baseLanes:p.baseLanes|n,cachePool:v}),i.memoizedState=p,i.childLanes=zu(e,f,n),t.memoizedState=Mu,a):(Nn(t),n=e.child,e=n.sibling,n=nn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(f=t.deletions,f===null?(t.deletions=[e],t.flags|=16):f.push(e)),t.child=n,t.memoizedState=null,n)}function Ou(e,t){return t=fr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function fr(e,t){return e=yt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function _u(e,t,n){return $a(t,e.child,null,n),e=Ou(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ip(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Po(e.return,t,n)}function Ku(e,t,n,a,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=i)}function rp(e,t,n){var a=t.pendingProps,i=a.revealOrder,r=a.tail;if(We(e,t,a.children,n),a=qe.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ip(e,n,t);else if(e.tag===19)ip(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(Z(qe,a),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&or(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ku(t,!1,i,n,r);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&or(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ku(t,!0,n,null,r);break;case"together":Ku(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ul(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Hu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Xi(e)))}function Wh(e,t,n){switch(t.tag){case 3:xe(t,t.stateNode.containerInfo),wn(t,Le,e.memoizedState.cache),Dl();break;case 27:case 5:Vn(t);break;case 4:xe(t,t.stateNode.containerInfo);break;case 10:wn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Nn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?lp(e,t,n):(Nn(t),e=sn(e,t,n),e!==null?e.sibling:null);Nn(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ul(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return rp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(qe,qe.current),a)break;return null;case 22:case 23:return t.lanes=0,Pd(e,t,n);case 24:wn(t,Le,e.memoizedState.cache)}return sn(e,t,n)}function op(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!Hu(e,n)&&(t.flags&128)===0)return Ze=!1,Wh(e,t,n);Ze=(e.flags&131072)!==0}else Ze=!1,ye&&(t.flags&1048576)!==0&&Hf(t,Yi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,i=a._init;if(a=i(a._payload),t.type=a,typeof a=="function")Qo(a)?(e=ua(a,e),t.tag=1,t=np(null,t,a,e,n)):(t.tag=0,t=Uu(null,t,a,e,n));else{if(a!=null){if(i=a.$$typeof,i===I){t.tag=11,t=Fd(null,t,a,e,n);break e}else if(i===W){t.tag=14,t=Jd(null,t,a,e,n);break e}}throw t=Wt(a)||a,Error(u(306,t,""))}}return t;case 0:return Uu(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=ua(a,t.pendingProps),np(e,t,a,i,n);case 3:e:{if(xe(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var r=t.memoizedState;i=r.element,ru(e,t),Hl(t,a,null,n);var f=t.memoizedState;if(a=f.cache,wn(t,Le,a),a!==r.cache&&eu(t,[Le],n,!0),Kl(),a=f.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=ap(e,t,a,n);break e}else if(a!==i){i=At(Error(u(424)),t),Nl(i),t=ap(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Oe=kt(e.firstChild),rt=t,ye=!0,na=null,Gt=!0,n=Bd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Dl(),a===i){t=sn(e,t,n);break e}We(e,t,a,n)}t=t.child}return t;case 26:return sr(e,t),e===null?(n=fm(t.type,null,t.pendingProps,null))?t.memoizedState=n:ye||(n=t.type,e=t.pendingProps,a=Tr(ae.current).createElement(n),a[nt]=t,a[ut]=e,et(a,n,e),Ve(a),t.stateNode=a):t.memoizedState=fm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Vn(t),e===null&&ye&&(a=t.stateNode=um(t.type,t.pendingProps,ae.current),rt=t,Gt=!0,i=Oe,Bn(t.type)?(yc=i,Oe=kt(a.firstChild)):Oe=i),We(e,t,t.pendingProps.children,n),sr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ye&&((i=a=Oe)&&(a=R1(a,t.type,t.pendingProps,Gt),a!==null?(t.stateNode=a,rt=t,Oe=kt(a.firstChild),Gt=!1,i=!0):i=!1),i||aa(t)),Vn(t),i=t.type,r=t.pendingProps,f=e!==null?e.memoizedProps:null,a=r.children,pc(i,r)?a=null:f!==null&&pc(i,f)&&(t.flags|=32),t.memoizedState!==null&&(i=du(e,t,Yh,null,null,n),ii._currentValue=i),sr(e,t),We(e,t,a,n),t.child;case 6:return e===null&&ye&&((e=n=Oe)&&(n=A1(n,t.pendingProps,Gt),n!==null?(t.stateNode=n,rt=t,Oe=null,e=!0):e=!1),e||aa(t)),null;case 13:return lp(e,t,n);case 4:return xe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=$a(t,null,a,n):We(e,t,a,n),t.child;case 11:return Fd(e,t,t.type,t.pendingProps,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,wn(t,t.type,a.value),We(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,ia(t),i=at(i),a=a(i),t.flags|=1,We(e,t,a,n),t.child;case 14:return Jd(e,t,t.type,t.pendingProps,n);case 15:return Wd(e,t,t.type,t.pendingProps,n);case 19:return rp(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=fr(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=nn(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Pd(e,t,n);case 24:return ia(t),a=at(Le),e===null?(i=au(),i===null&&(i=Ae,r=tu(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=n),i=r),t.memoizedState={parent:a,cache:i},iu(t),wn(t,Le,i)):((e.lanes&n)!==0&&(ru(e,t),Hl(t,null,null,n),Kl()),i=e.memoizedState,r=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),wn(t,Le,a)):(a=r.cache,wn(t,Le,a),a!==i.cache&&eu(t,[Le],n,!0))),We(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function fn(e){e.flags|=4}function up(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hm(t)){if(t=Mt.current,t!==null&&((me&4194048)===me?Yt!==null:(me&62914560)!==me&&(me&536870912)===0||t!==Yt))throw Ol=lu,Xf;e.flags|=8192}}function dr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bs():536870912,e.lanes|=t,Ya|=t)}function Yl(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Ph(e,t,n){var a=t.pendingProps;switch(Fo(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),on(Le),tt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Al(t)?fn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$f())),ze(t),null;case 26:return n=t.memoizedState,e===null?(fn(t),n!==null?(ze(t),up(t,n)):(ze(t),t.flags&=-16777217)):n?n!==e.memoizedState?(fn(t),ze(t),up(t,n)):(ze(t),t.flags&=-16777217):(e.memoizedProps!==a&&fn(t),ze(t),t.flags&=-16777217),null;case 27:Pt(t),n=ae.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&fn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return ze(t),null}e=P.current,Al(t)?kf(t):(e=um(i,a,n),t.stateNode=e,fn(t))}return ze(t),null;case 5:if(Pt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&fn(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return ze(t),null}if(e=P.current,Al(t))kf(t);else{switch(i=Tr(ae.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}e[nt]=t,e[ut]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(et(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&fn(t)}}return ze(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&fn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=ae.current,Al(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=rt,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[nt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||tm(e.nodeValue,n)),e||aa(t)}else e=Tr(e).createTextNode(a),e[nt]=t,t.stateNode=e}return ze(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Al(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[nt]=t}else Dl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),i=!1}else i=$f(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(cn(t),t):(cn(t),null)}if(cn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==i&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),dr(t,t.updateQueue),ze(t),null;case 4:return tt(),e===null&&uc(t.stateNode.containerInfo),ze(t),null;case 10:return on(t.type),ze(t),null;case 19:if(Q(qe),i=t.memoizedState,i===null)return ze(t),null;if(a=(t.flags&128)!==0,r=i.rendering,r===null)if(a)Yl(i,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=or(e),r!==null){for(t.flags|=128,Yl(i,!1),e=r.updateQueue,t.updateQueue=e,dr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Kf(n,e),n=n.sibling;return Z(qe,qe.current&1|2),t.child}e=e.sibling}i.tail!==null&&qt()>gr&&(t.flags|=128,a=!0,Yl(i,!1),t.lanes=4194304)}else{if(!a)if(e=or(r),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,dr(t,e),Yl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!ye)return ze(t),null}else 2*qt()-i.renderingStartTime>gr&&n!==536870912&&(t.flags|=128,a=!0,Yl(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=qt(),t.sibling=null,e=qe.current,Z(qe,a?e&1|2:e&1),t):(ze(t),null);case 22:case 23:return cn(t),su(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),n=t.updateQueue,n!==null&&dr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Q(ra),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),on(Le),ze(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function e1(e,t){switch(Fo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return on(Le),tt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Pt(t),null;case 13:if(cn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Dl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(qe),null;case 4:return tt(),null;case 10:return on(t.type),null;case 22:case 23:return cn(t),su(),e!==null&&Q(ra),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return on(Le),null;case 25:return null;default:return null}}function cp(e,t){switch(Fo(t),t.tag){case 3:on(Le),tt();break;case 26:case 27:case 5:Pt(t);break;case 4:tt();break;case 13:cn(t);break;case 19:Q(qe);break;case 10:on(t.type);break;case 22:case 23:cn(t),su(),e!==null&&Q(ra);break;case 24:on(Le)}}function Xl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var r=n.create,f=n.inst;a=r(),f.destroy=a}n=n.next}while(n!==i)}}catch(p){Re(t,t.return,p)}}function Mn(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var r=i.next;a=r;do{if((a.tag&e)===e){var f=a.inst,p=f.destroy;if(p!==void 0){f.destroy=void 0,i=t;var v=n,A=p;try{A()}catch(O){Re(i,v,O)}}}a=a.next}while(a!==r)}}catch(O){Re(t,t.return,O)}}function sp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Jf(t,n)}catch(a){Re(e,e.return,a)}}}function fp(e,t,n){n.props=ua(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Re(e,t,a)}}function Ql(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){Re(e,t,i)}}function Xt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){Re(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){Re(e,t,i)}else n.current=null}function dp(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){Re(e,e.return,i)}}function ku(e,t,n){try{var a=e.stateNode;j1(a,e.type,n,t),a[ut]=t}catch(i){Re(e,e.return,i)}}function pp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Bn(e.type)||e.tag===4}function Bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Bn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $u(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wr));else if(a!==4&&(a===27&&Bn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($u(e,t,n),e=e.sibling;e!==null;)$u(e,t,n),e=e.sibling}function pr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Bn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(pr(e,t,n),e=e.sibling;e!==null;)pr(e,t,n),e=e.sibling}function mp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);et(t,a,n),t[nt]=e,t[ut]=n}catch(r){Re(e,e.return,r)}}var dn=!1,He=!1,Lu=!1,gp=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function t1(e,t){if(e=e.containerInfo,fc=Mr,e=Rf(e),Bo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var f=0,p=-1,v=-1,A=0,O=0,H=e,D=null;t:for(;;){for(var N;H!==n||i!==0&&H.nodeType!==3||(p=f+i),H!==r||a!==0&&H.nodeType!==3||(v=f+a),H.nodeType===3&&(f+=H.nodeValue.length),(N=H.firstChild)!==null;)D=H,H=N;for(;;){if(H===e)break t;if(D===n&&++A===i&&(p=f),D===r&&++O===a&&(v=f),(N=H.nextSibling)!==null)break;H=D,D=H.parentNode}H=N}n=p===-1||v===-1?null:{start:p,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(dc={focusedElem:e,selectionRange:n},Mr=!1,Ie=t;Ie!==null;)if(t=Ie,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ie=e;else for(;Ie!==null;){switch(t=Ie,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,i=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var ie=ua(n.type,i,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(ie,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Re(n,n.return,ne)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)gc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Ie=e;break}Ie=t.return}}function hp(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Cn(e,n),a&4&&Xl(5,n);break;case 1:if(Cn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(f){Re(n,n.return,f)}else{var i=ua(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(f){Re(n,n.return,f)}}a&64&&sp(n),a&512&&Ql(n,n.return);break;case 3:if(Cn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Jf(e,t)}catch(f){Re(n,n.return,f)}}break;case 27:t===null&&a&4&&mp(n);case 26:case 5:Cn(e,n),t===null&&a&4&&dp(n),a&512&&Ql(n,n.return);break;case 12:Cn(e,n);break;case 13:Cn(e,n),a&4&&vp(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=s1.bind(null,n),D1(e,n))));break;case 22:if(a=n.memoizedState!==null||dn,!a){t=t!==null&&t.memoizedState!==null||He,i=dn;var r=He;dn=a,(He=t)&&!r?zn(e,n,(n.subtreeFlags&8772)!==0):Cn(e,n),dn=i,He=r}break;case 30:break;default:Cn(e,n)}}function yp(e){var t=e.alternate;t!==null&&(e.alternate=null,yp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&bo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,ft=!1;function pn(e,t,n){for(n=n.child;n!==null;)xp(e,t,n),n=n.sibling}function xp(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(pl,n)}catch{}switch(n.tag){case 26:He||Xt(n,t),pn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:He||Xt(n,t);var a=Ue,i=ft;Bn(n.type)&&(Ue=n.stateNode,ft=!1),pn(e,t,n),ti(n.stateNode),Ue=a,ft=i;break;case 5:He||Xt(n,t);case 6:if(a=Ue,i=ft,Ue=null,pn(e,t,n),Ue=a,ft=i,Ue!==null)if(ft)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(n.stateNode)}catch(r){Re(n,t,r)}else try{Ue.removeChild(n.stateNode)}catch(r){Re(n,t,r)}break;case 18:Ue!==null&&(ft?(e=Ue,rm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ci(e)):rm(Ue,n.stateNode));break;case 4:a=Ue,i=ft,Ue=n.stateNode.containerInfo,ft=!0,pn(e,t,n),Ue=a,ft=i;break;case 0:case 11:case 14:case 15:He||Mn(2,n,t),He||Mn(4,n,t),pn(e,t,n);break;case 1:He||(Xt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&fp(n,t,a)),pn(e,t,n);break;case 21:pn(e,t,n);break;case 22:He=(a=He)||n.memoizedState!==null,pn(e,t,n),He=a;break;default:pn(e,t,n)}}function vp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ci(e)}catch(n){Re(t,t.return,n)}}function n1(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new gp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new gp),t;default:throw Error(u(435,e.tag))}}function qu(e,t){var n=n1(e);t.forEach(function(a){var i=f1.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}function xt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],r=e,f=t,p=f;e:for(;p!==null;){switch(p.tag){case 27:if(Bn(p.type)){Ue=p.stateNode,ft=!1;break e}break;case 5:Ue=p.stateNode,ft=!1;break e;case 3:case 4:Ue=p.stateNode.containerInfo,ft=!0;break e}p=p.return}if(Ue===null)throw Error(u(160));xp(r,f,i),Ue=null,ft=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)bp(t,e),t=t.sibling}var Ht=null;function bp(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xt(t,e),vt(e),a&4&&(Mn(3,e,e.return),Xl(3,e),Mn(5,e,e.return));break;case 1:xt(t,e),vt(e),a&512&&(He||n===null||Xt(n,n.return)),a&64&&dn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=Ht;if(xt(t,e),vt(e),a&512&&(He||n===null||Xt(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":r=i.getElementsByTagName("title")[0],(!r||r[hl]||r[nt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(a),i.head.insertBefore(r,i.querySelector("head > title"))),et(r,a,n),r[nt]=e,Ve(r),a=r;break e;case"link":var f=mm("link","href",i).get(a+(n.href||""));if(f){for(var p=0;p<f.length;p++)if(r=f[p],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){f.splice(p,1);break t}}r=i.createElement(a),et(r,a,n),i.head.appendChild(r);break;case"meta":if(f=mm("meta","content",i).get(a+(n.content||""))){for(p=0;p<f.length;p++)if(r=f[p],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){f.splice(p,1);break t}}r=i.createElement(a),et(r,a,n),i.head.appendChild(r);break;default:throw Error(u(468,a))}r[nt]=e,Ve(r),a=r}e.stateNode=a}else gm(i,e.type,e.stateNode);else e.stateNode=pm(i,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?gm(i,e.type,e.stateNode):pm(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&ku(e,e.memoizedProps,n.memoizedProps)}break;case 27:xt(t,e),vt(e),a&512&&(He||n===null||Xt(n,n.return)),n!==null&&a&4&&ku(e,e.memoizedProps,n.memoizedProps);break;case 5:if(xt(t,e),vt(e),a&512&&(He||n===null||Xt(n,n.return)),e.flags&32){i=e.stateNode;try{Ea(i,"")}catch(N){Re(e,e.return,N)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,ku(e,i,n!==null?n.memoizedProps:i)),a&1024&&(Lu=!0);break;case 6:if(xt(t,e),vt(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(N){Re(e,e.return,N)}}break;case 3:if(Dr=null,i=Ht,Ht=Rr(t.containerInfo),xt(t,e),Ht=i,vt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{ci(t.containerInfo)}catch(N){Re(e,e.return,N)}Lu&&(Lu=!1,jp(e));break;case 4:a=Ht,Ht=Rr(e.stateNode.containerInfo),xt(t,e),vt(e),Ht=a;break;case 12:xt(t,e),vt(e);break;case 13:xt(t,e),vt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Zu=qt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,qu(e,a)));break;case 22:i=e.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,A=dn,O=He;if(dn=A||i,He=O||v,xt(t,e),He=O,dn=A,vt(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||v||dn||He||ca(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){v=n=t;try{if(r=v.stateNode,i)f=r.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{p=v.stateNode;var H=v.memoizedProps.style,D=H!=null&&H.hasOwnProperty("display")?H.display:null;p.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(N){Re(v,v.return,N)}}}else if(t.tag===6){if(n===null){v=t;try{v.stateNode.nodeValue=i?"":v.memoizedProps}catch(N){Re(v,v.return,N)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,qu(e,n))));break;case 19:xt(t,e),vt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,qu(e,a)));break;case 30:break;case 21:break;default:xt(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(pp(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var i=n.stateNode,r=Bu(e);pr(e,r,i);break;case 5:var f=n.stateNode;n.flags&32&&(Ea(f,""),n.flags&=-33);var p=Bu(e);pr(e,p,f);break;case 3:case 4:var v=n.stateNode.containerInfo,A=Bu(e);$u(e,A,v);break;default:throw Error(u(161))}}catch(O){Re(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;jp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Cn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hp(e,t.alternate,t),t=t.sibling}function ca(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Mn(4,t,t.return),ca(t);break;case 1:Xt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&fp(t,t.return,n),ca(t);break;case 27:ti(t.stateNode);case 26:case 5:Xt(t,t.return),ca(t);break;case 22:t.memoizedState===null&&ca(t);break;case 30:ca(t);break;default:ca(t)}e=e.sibling}}function zn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,r=t,f=r.flags;switch(r.tag){case 0:case 11:case 15:zn(i,r,n),Xl(4,r);break;case 1:if(zn(i,r,n),a=r,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(A){Re(a,a.return,A)}if(a=r,i=a.updateQueue,i!==null){var p=a.stateNode;try{var v=i.shared.hiddenCallbacks;if(v!==null)for(i.shared.hiddenCallbacks=null,i=0;i<v.length;i++)Ff(v[i],p)}catch(A){Re(a,a.return,A)}}n&&f&64&&sp(r),Ql(r,r.return);break;case 27:mp(r);case 26:case 5:zn(i,r,n),n&&a===null&&f&4&&dp(r),Ql(r,r.return);break;case 12:zn(i,r,n);break;case 13:zn(i,r,n),n&&f&4&&vp(i,r);break;case 22:r.memoizedState===null&&zn(i,r,n),Ql(r,r.return);break;case 30:break;default:zn(i,r,n)}t=t.sibling}}function Gu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ml(n))}function Yu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ml(e))}function Qt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ep(e,t,n,a),t=t.sibling}function Ep(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Qt(e,t,n,a),i&2048&&Xl(9,t);break;case 1:Qt(e,t,n,a);break;case 3:Qt(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ml(e)));break;case 12:if(i&2048){Qt(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,f=r.id,p=r.onPostCommit;typeof p=="function"&&p(f,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Re(t,t.return,v)}}else Qt(e,t,n,a);break;case 13:Qt(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,f=t.alternate,t.memoizedState!==null?r._visibility&2?Qt(e,t,n,a):Vl(e,t):r._visibility&2?Qt(e,t,n,a):(r._visibility|=2,La(e,t,n,a,(t.subtreeFlags&10256)!==0)),i&2048&&Gu(f,t);break;case 24:Qt(e,t,n,a),i&2048&&Yu(t.alternate,t);break;default:Qt(e,t,n,a)}}function La(e,t,n,a,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,f=t,p=n,v=a,A=f.flags;switch(f.tag){case 0:case 11:case 15:La(r,f,p,v,i),Xl(8,f);break;case 23:break;case 22:var O=f.stateNode;f.memoizedState!==null?O._visibility&2?La(r,f,p,v,i):Vl(r,f):(O._visibility|=2,La(r,f,p,v,i)),i&&A&2048&&Gu(f.alternate,f);break;case 24:La(r,f,p,v,i),i&&A&2048&&Yu(f.alternate,f);break;default:La(r,f,p,v,i)}t=t.sibling}}function Vl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:Vl(n,a),i&2048&&Gu(a.alternate,a);break;case 24:Vl(n,a),i&2048&&Yu(a.alternate,a);break;default:Vl(n,a)}t=t.sibling}}var Zl=8192;function qa(e){if(e.subtreeFlags&Zl)for(e=e.child;e!==null;)Sp(e),e=e.sibling}function Sp(e){switch(e.tag){case 26:qa(e),e.flags&Zl&&e.memoizedState!==null&&L1(Ht,e.memoizedState,e.memoizedProps);break;case 5:qa(e);break;case 3:case 4:var t=Ht;Ht=Rr(e.stateNode.containerInfo),qa(e),Ht=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Zl,Zl=16777216,qa(e),Zl=t):qa(e));break;default:qa(e)}}function wp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Il(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ie=a,Rp(a,e)}wp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Tp(e),e=e.sibling}function Tp(e){switch(e.tag){case 0:case 11:case 15:Il(e),e.flags&2048&&Mn(9,e,e.return);break;case 3:Il(e);break;case 12:Il(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,mr(e)):Il(e);break;default:Il(e)}}function mr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ie=a,Rp(a,e)}wp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Mn(8,t,t.return),mr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,mr(t));break;default:mr(t)}e=e.sibling}}function Rp(e,t){for(;Ie!==null;){var n=Ie;switch(n.tag){case 0:case 11:case 15:Mn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ml(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ie=a;else e:for(n=e;Ie!==null;){a=Ie;var i=a.sibling,r=a.return;if(yp(a),a===n){Ie=null;break e}if(i!==null){i.return=r,Ie=i;break e}Ie=r}}}var a1={getCacheForType:function(e){var t=at(Le),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},l1=typeof WeakMap=="function"?WeakMap:Map,be=0,Ae=null,de=null,me=0,je=0,bt=null,On=!1,Ga=!1,Xu=!1,mn=0,_e=0,_n=0,sa=0,Qu=0,Ct=0,Ya=0,Fl=null,dt=null,Vu=!1,Zu=0,gr=1/0,hr=null,Kn=null,Pe=0,Hn=null,Xa=null,Qa=0,Iu=0,Fu=null,Ap=null,Jl=0,Ju=null;function jt(){if((be&2)!==0&&me!==0)return me&-me;if(z.T!==null){var e=za;return e!==0?e:lc()}return qs()}function Dp(){Ct===0&&(Ct=(me&536870912)===0||ye?ks():536870912);var e=Mt.current;return e!==null&&(e.flags|=32),Ct}function Et(e,t,n){(e===Ae&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(Va(e,0),kn(e,me,Ct,!1)),gl(e,n),((be&2)===0||e!==Ae)&&(e===Ae&&((be&2)===0&&(sa|=n),_e===4&&kn(e,me,Ct,!1)),Vt(e))}function Np(e,t,n){if((be&6)!==0)throw Error(u(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||ml(e,t),i=a?o1(e,t):ec(e,t,!0),r=a;do{if(i===0){Ga&&!a&&kn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!i1(n)){i=ec(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var f=0;else f=e.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;e:{var p=e;i=Fl;var v=p.current.memoizedState.isDehydrated;if(v&&(Va(p,f).flags|=256),f=ec(p,f,!1),f!==2){if(Xu&&!v){p.errorRecoveryDisabledLanes|=r,sa|=r,i=4;break e}r=dt,dt=i,r!==null&&(dt===null?dt=r:dt.push.apply(dt,r))}i=f}if(r=!1,i!==2)continue}}if(i===1){Va(e,0),kn(e,t,0,!0);break}e:{switch(a=e,r=i,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:kn(a,t,Ct,!On);break e;case 2:dt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=Zu+300-qt(),10<i)){if(kn(a,t,Ct,!On),Ai(a,0,!0)!==0)break e;a.timeoutHandle=lm(Up.bind(null,a,n,dt,hr,Vu,t,Ct,sa,Ya,On,r,2,-0,0),i);break e}Up(a,n,dt,hr,Vu,t,Ct,sa,Ya,On,r,0,-0,0)}}break}while(!0);Vt(e)}function Up(e,t,n,a,i,r,f,p,v,A,O,H,D,N){if(e.timeoutHandle=-1,H=t.subtreeFlags,(H&8192||(H&16785408)===16785408)&&(li={stylesheets:null,count:0,unsuspend:$1},Sp(t),H=q1(),H!==null)){e.cancelPendingCommit=H(Hp.bind(null,e,t,r,n,a,i,f,p,v,O,1,D,N)),kn(e,r,f,!A);return}Hp(e,t,r,n,a,i,f,p,v)}function i1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],r=i.getSnapshot;i=i.value;try{if(!ht(r(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kn(e,t,n,a){t&=~Qu,t&=~sa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var r=31-gt(i),f=1<<r;a[r]=-1,i&=~f}n!==0&&$s(e,n,t)}function yr(){return(be&6)===0?(Wl(0),!1):!0}function Wu(){if(de!==null){if(je===0)var e=de.return;else e=de,rn=la=null,gu(e),Ba=null,ql=0,e=de;for(;e!==null;)cp(e.alternate,e),e=e.return;de=null}}function Va(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,S1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Wu(),Ae=e,de=n=nn(e.current,null),me=t,je=0,bt=null,On=!1,Ga=ml(e,t),Xu=!1,Ya=Ct=Qu=sa=_n=_e=0,dt=Fl=null,Vu=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-gt(a),r=1<<i;t|=e[i],a&=~r}return mn=t,Bi(),n}function Mp(e,t){ue=null,z.H=lr,t===zl||t===Zi?(t=Zf(),je=3):t===Xf?(t=Zf(),je=4):je=t===Id?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,bt=t,de===null&&(_e=1,cr(e,At(t,e.current)))}function Cp(){var e=z.H;return z.H=lr,e===null?lr:e}function zp(){var e=z.A;return z.A=a1,e}function Pu(){_e=4,On||(me&4194048)!==me&&Mt.current!==null||(Ga=!0),(_n&134217727)===0&&(sa&134217727)===0||Ae===null||kn(Ae,me,Ct,!1)}function ec(e,t,n){var a=be;be|=2;var i=Cp(),r=zp();(Ae!==e||me!==t)&&(hr=null,Va(e,t)),t=!1;var f=_e;e:do try{if(je!==0&&de!==null){var p=de,v=bt;switch(je){case 8:Wu(),f=6;break e;case 3:case 2:case 9:case 6:Mt.current===null&&(t=!0);var A=je;if(je=0,bt=null,Za(e,p,v,A),n&&Ga){f=0;break e}break;default:A=je,je=0,bt=null,Za(e,p,v,A)}}r1(),f=_e;break}catch(O){Mp(e,O)}while(!0);return t&&e.shellSuspendCounter++,rn=la=null,be=a,z.H=i,z.A=r,de===null&&(Ae=null,me=0,Bi()),f}function r1(){for(;de!==null;)Op(de)}function o1(e,t){var n=be;be|=2;var a=Cp(),i=zp();Ae!==e||me!==t?(hr=null,gr=qt()+500,Va(e,t)):Ga=ml(e,t);e:do try{if(je!==0&&de!==null){t=de;var r=bt;t:switch(je){case 1:je=0,bt=null,Za(e,t,r,1);break;case 2:case 9:if(Qf(r)){je=0,bt=null,_p(t);break}t=function(){je!==2&&je!==9||Ae!==e||(je=7),Vt(e)},r.then(t,t);break e;case 3:je=7;break e;case 4:je=5;break e;case 7:Qf(r)?(je=0,bt=null,_p(t)):(je=0,bt=null,Za(e,t,r,7));break;case 5:var f=null;switch(de.tag){case 26:f=de.memoizedState;case 5:case 27:var p=de;if(!f||hm(f)){je=0,bt=null;var v=p.sibling;if(v!==null)de=v;else{var A=p.return;A!==null?(de=A,xr(A)):de=null}break t}}je=0,bt=null,Za(e,t,r,5);break;case 6:je=0,bt=null,Za(e,t,r,6);break;case 8:Wu(),_e=6;break e;default:throw Error(u(462))}}u1();break}catch(O){Mp(e,O)}while(!0);return rn=la=null,z.H=a,z.A=i,be=n,de!==null?0:(Ae=null,me=0,Bi(),_e)}function u1(){for(;de!==null&&!Ug();)Op(de)}function Op(e){var t=op(e.alternate,e,mn);e.memoizedProps=e.pendingProps,t===null?xr(e):de=t}function _p(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=tp(n,t,t.pendingProps,t.type,void 0,me);break;case 11:t=tp(n,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:gu(t);default:cp(n,t),t=de=Kf(t,mn),t=op(n,t,mn)}e.memoizedProps=e.pendingProps,t===null?xr(e):de=t}function Za(e,t,n,a){rn=la=null,gu(t),Ba=null,ql=0;var i=t.return;try{if(Jh(e,i,t,n,me)){_e=1,cr(e,At(n,e.current)),de=null;return}}catch(r){if(i!==null)throw de=i,r;_e=1,cr(e,At(n,e.current)),de=null;return}t.flags&32768?(ye||a===1?e=!0:Ga||(me&536870912)!==0?e=!1:(On=e=!0,(a===2||a===9||a===3||a===6)&&(a=Mt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Kp(t,e)):xr(t)}function xr(e){var t=e;do{if((t.flags&32768)!==0){Kp(t,On);return}e=t.return;var n=Ph(t.alternate,t,mn);if(n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);_e===0&&(_e=5)}function Kp(e,t){do{var n=e1(e.alternate,e);if(n!==null){n.flags&=32767,de=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=n}while(e!==null);_e=6,de=null}function Hp(e,t,n,a,i,r,f,p,v){e.cancelPendingCommit=null;do vr();while(Pe!==0);if((be&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=Yo,$g(e,n,r,f,p,v),e===Ae&&(de=Ae=null,me=0),Xa=t,Hn=e,Qa=n,Iu=r,Fu=i,Ap=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,d1(wi,function(){return qp(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=z.T,z.T=null,i=V.p,V.p=2,f=be,be|=4;try{t1(e,t,n)}finally{be=f,V.p=i,z.T=a}}Pe=1,kp(),Bp(),$p()}}function kp(){if(Pe===1){Pe=0;var e=Hn,t=Xa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=z.T,z.T=null;var a=V.p;V.p=2;var i=be;be|=4;try{bp(t,e);var r=dc,f=Rf(e.containerInfo),p=r.focusedElem,v=r.selectionRange;if(f!==p&&p&&p.ownerDocument&&Tf(p.ownerDocument.documentElement,p)){if(v!==null&&Bo(p)){var A=v.start,O=v.end;if(O===void 0&&(O=A),"selectionStart"in p)p.selectionStart=A,p.selectionEnd=Math.min(O,p.value.length);else{var H=p.ownerDocument||document,D=H&&H.defaultView||window;if(D.getSelection){var N=D.getSelection(),ie=p.textContent.length,ne=Math.min(v.start,ie),we=v.end===void 0?ne:Math.min(v.end,ie);!N.extend&&ne>we&&(f=we,we=ne,ne=f);var w=wf(p,ne),S=wf(p,we);if(w&&S&&(N.rangeCount!==1||N.anchorNode!==w.node||N.anchorOffset!==w.offset||N.focusNode!==S.node||N.focusOffset!==S.offset)){var R=H.createRange();R.setStart(w.node,w.offset),N.removeAllRanges(),ne>we?(N.addRange(R),N.extend(S.node,S.offset)):(R.setEnd(S.node,S.offset),N.addRange(R))}}}}for(H=[],N=p;N=N.parentNode;)N.nodeType===1&&H.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<H.length;p++){var K=H[p];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Mr=!!fc,dc=fc=null}finally{be=i,V.p=a,z.T=n}}e.current=t,Pe=2}}function Bp(){if(Pe===2){Pe=0;var e=Hn,t=Xa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=z.T,z.T=null;var a=V.p;V.p=2;var i=be;be|=4;try{hp(e,t.alternate,t)}finally{be=i,V.p=a,z.T=n}}Pe=3}}function $p(){if(Pe===4||Pe===3){Pe=0,Mg();var e=Hn,t=Xa,n=Qa,a=Ap;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Pe=5:(Pe=0,Xa=Hn=null,Lp(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Kn=null),xo(n),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(pl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=z.T,i=V.p,V.p=2,z.T=null;try{for(var r=e.onRecoverableError,f=0;f<a.length;f++){var p=a[f];r(p.value,{componentStack:p.stack})}}finally{z.T=t,V.p=i}}(Qa&3)!==0&&vr(),Vt(e),i=e.pendingLanes,(n&4194090)!==0&&(i&42)!==0?e===Ju?Jl++:(Jl=0,Ju=e):Jl=0,Wl(0)}}function Lp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ml(t)))}function vr(e){return kp(),Bp(),$p(),qp()}function qp(){if(Pe!==5)return!1;var e=Hn,t=Iu;Iu=0;var n=xo(Qa),a=z.T,i=V.p;try{V.p=32>n?32:n,z.T=null,n=Fu,Fu=null;var r=Hn,f=Qa;if(Pe=0,Xa=Hn=null,Qa=0,(be&6)!==0)throw Error(u(331));var p=be;if(be|=4,Tp(r.current),Ep(r,r.current,f,n),be=p,Wl(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(pl,r)}catch{}return!0}finally{V.p=i,z.T=a,Lp(e,t)}}function Gp(e,t,n){t=At(n,t),t=Nu(e.stateNode,t,2),e=An(e,t,2),e!==null&&(gl(e,2),Vt(e))}function Re(e,t,n){if(e.tag===3)Gp(e,e,n);else for(;t!==null;){if(t.tag===3){Gp(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Kn===null||!Kn.has(a))){e=At(n,e),n=Vd(2),a=An(t,n,2),a!==null&&(Zd(n,a,t,e),gl(a,2),Vt(a));break}}t=t.return}}function tc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new l1;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(Xu=!0,i.add(n),e=c1.bind(null,e,t,n),t.then(e,e))}function c1(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ae===e&&(me&n)===n&&(_e===4||_e===3&&(me&62914560)===me&&300>qt()-Zu?(be&2)===0&&Va(e,0):Qu|=n,Ya===me&&(Ya=0)),Vt(e)}function Yp(e,t){t===0&&(t=Bs()),e=Na(e,t),e!==null&&(gl(e,t),Vt(e))}function s1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yp(e,n)}function f1(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),Yp(e,n)}function d1(e,t){return mo(e,t)}var br=null,Ia=null,nc=!1,jr=!1,ac=!1,fa=0;function Vt(e){e!==Ia&&e.next===null&&(Ia===null?br=Ia=e:Ia=Ia.next=e),jr=!0,nc||(nc=!0,m1())}function Wl(e,t){if(!ac&&jr){ac=!0;do for(var n=!1,a=br;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var r=0;else{var f=a.suspendedLanes,p=a.pingedLanes;r=(1<<31-gt(42|e)+1)-1,r&=i&~(f&~p),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Zp(a,r))}else r=me,r=Ai(a,a===Ae?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||ml(a,r)||(n=!0,Zp(a,r));a=a.next}while(n);ac=!1}}function p1(){Xp()}function Xp(){jr=nc=!1;var e=0;fa!==0&&(E1()&&(e=fa),fa=0);for(var t=qt(),n=null,a=br;a!==null;){var i=a.next,r=Qp(a,t);r===0?(a.next=null,n===null?br=i:n.next=i,i===null&&(Ia=n)):(n=a,(e!==0||(r&3)!==0)&&(jr=!0)),a=i}Wl(e)}function Qp(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var f=31-gt(r),p=1<<f,v=i[f];v===-1?((p&n)===0||(p&a)!==0)&&(i[f]=Bg(p,t)):v<=t&&(e.expiredLanes|=p),r&=~p}if(t=Ae,n=me,n=Ai(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(je===2||je===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&go(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ml(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&go(a),xo(n)){case 2:case 8:n=Ks;break;case 32:n=wi;break;case 268435456:n=Hs;break;default:n=wi}return a=Vp.bind(null,e),n=mo(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&go(a),e.callbackPriority=2,e.callbackNode=null,2}function Vp(e,t){if(Pe!==0&&Pe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var a=me;return a=Ai(e,e===Ae?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Np(e,a,t),Qp(e,qt()),e.callbackNode!=null&&e.callbackNode===n?Vp.bind(null,e):null)}function Zp(e,t){if(vr())return null;Np(e,t,!0)}function m1(){w1(function(){(be&6)!==0?mo(_s,p1):Xp()})}function lc(){return fa===0&&(fa=ks()),fa}function Ip(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ci(""+e)}function Fp(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function g1(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var r=Ip((i[ut]||null).action),f=a.submitter;f&&(t=(t=f[ut]||null)?Ip(t.formAction):f.getAttribute("formAction"),t!==null&&(r=t,f=null));var p=new Ki("action","action",null,a,i);e.push({event:p,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(fa!==0){var v=f?Fp(i,f):new FormData(i);wu(n,{pending:!0,data:v,method:i.method,action:r},null,v)}}else typeof r=="function"&&(p.preventDefault(),v=f?Fp(i,f):new FormData(i),wu(n,{pending:!0,data:v,method:i.method,action:r},r,v))},currentTarget:i}]})}}for(var ic=0;ic<Go.length;ic++){var rc=Go[ic],h1=rc.toLowerCase(),y1=rc[0].toUpperCase()+rc.slice(1);Kt(h1,"on"+y1)}Kt(Nf,"onAnimationEnd"),Kt(Uf,"onAnimationIteration"),Kt(Mf,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(Oh,"onTransitionRun"),Kt(_h,"onTransitionStart"),Kt(Kh,"onTransitionCancel"),Kt(Cf,"onTransitionEnd"),va("onMouseEnter",["mouseout","mouseover"]),va("onMouseLeave",["mouseout","mouseover"]),va("onPointerEnter",["pointerout","pointerover"]),va("onPointerLeave",["pointerout","pointerover"]),In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),In("onBeforeInput",["compositionend","keypress","textInput","paste"]),In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pl));function Jp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var f=a.length-1;0<=f;f--){var p=a[f],v=p.instance,A=p.currentTarget;if(p=p.listener,v!==r&&i.isPropagationStopped())break e;r=p,i.currentTarget=A;try{r(i)}catch(O){ur(O)}i.currentTarget=null,r=v}else for(f=0;f<a.length;f++){if(p=a[f],v=p.instance,A=p.currentTarget,p=p.listener,v!==r&&i.isPropagationStopped())break e;r=p,i.currentTarget=A;try{r(i)}catch(O){ur(O)}i.currentTarget=null,r=v}}}}function pe(e,t){var n=t[vo];n===void 0&&(n=t[vo]=new Set);var a=e+"__bubble";n.has(a)||(Wp(t,e,2,!1),n.add(a))}function oc(e,t,n){var a=0;t&&(a|=4),Wp(n,e,a,t)}var Er="_reactListening"+Math.random().toString(36).slice(2);function uc(e){if(!e[Er]){e[Er]=!0,Ys.forEach(function(n){n!=="selectionchange"&&(x1.has(n)||oc(n,!1,e),oc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Er]||(t[Er]=!0,oc("selectionchange",!1,t))}}function Wp(e,t,n,a){switch(Em(t)){case 2:var i=X1;break;case 8:i=Q1;break;default:i=Ec}n=i.bind(null,t,n,e),i=void 0,!Uo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function cc(e,t,n,a,i){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var p=a.stateNode.containerInfo;if(p===i)break;if(f===4)for(f=a.return;f!==null;){var v=f.tag;if((v===3||v===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;p!==null;){if(f=ha(p),f===null)return;if(v=f.tag,v===5||v===6||v===26||v===27){a=r=f;continue e}p=p.parentNode}}a=a.return}lf(function(){var A=r,O=Do(n),H=[];e:{var D=zf.get(e);if(D!==void 0){var N=Ki,ie=e;switch(e){case"keypress":if(Oi(n)===0)break e;case"keydown":case"keyup":N=dh;break;case"focusin":ie="focus",N=Oo;break;case"focusout":ie="blur",N=Oo;break;case"beforeblur":case"afterblur":N=Oo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=eh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=gh;break;case Nf:case Uf:case Mf:N=ah;break;case Cf:N=yh;break;case"scroll":case"scrollend":N=Wg;break;case"wheel":N=vh;break;case"copy":case"cut":case"paste":N=ih;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=sf;break;case"toggle":case"beforetoggle":N=jh}var ne=(t&4)!==0,we=!ne&&(e==="scroll"||e==="scrollend"),w=ne?D!==null?D+"Capture":null:D;ne=[];for(var S=A,R;S!==null;){var K=S;if(R=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||R===null||w===null||(K=xl(S,w),K!=null&&ne.push(ei(S,K,R))),we)break;S=S.return}0<ne.length&&(D=new N(D,ie,null,n,O),H.push({event:D,listeners:ne}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",D&&n!==Ao&&(ie=n.relatedTarget||n.fromElement)&&(ha(ie)||ie[ga]))break e;if((N||D)&&(D=O.window===O?O:(D=O.ownerDocument)?D.defaultView||D.parentWindow:window,N?(ie=n.relatedTarget||n.toElement,N=A,ie=ie?ha(ie):null,ie!==null&&(we=m(ie),ne=ie.tag,ie!==we||ne!==5&&ne!==27&&ne!==6)&&(ie=null)):(N=null,ie=A),N!==ie)){if(ne=uf,K="onMouseLeave",w="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ne=sf,K="onPointerLeave",w="onPointerEnter",S="pointer"),we=N==null?D:yl(N),R=ie==null?D:yl(ie),D=new ne(K,S+"leave",N,n,O),D.target=we,D.relatedTarget=R,K=null,ha(O)===A&&(ne=new ne(w,S+"enter",ie,n,O),ne.target=R,ne.relatedTarget=we,K=ne),we=K,N&&ie)t:{for(ne=N,w=ie,S=0,R=ne;R;R=Fa(R))S++;for(R=0,K=w;K;K=Fa(K))R++;for(;0<S-R;)ne=Fa(ne),S--;for(;0<R-S;)w=Fa(w),R--;for(;S--;){if(ne===w||w!==null&&ne===w.alternate)break t;ne=Fa(ne),w=Fa(w)}ne=null}else ne=null;N!==null&&Pp(H,D,N,ne,!1),ie!==null&&we!==null&&Pp(H,we,ie,ne,!0)}}e:{if(D=A?yl(A):window,N=D.nodeName&&D.nodeName.toLowerCase(),N==="select"||N==="input"&&D.type==="file")var F=xf;else if(hf(D))if(vf)F=Mh;else{F=Nh;var ce=Dh}else N=D.nodeName,!N||N.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?A&&Ro(A.elementType)&&(F=xf):F=Uh;if(F&&(F=F(e,A))){yf(H,F,n,O);break e}ce&&ce(e,D,A),e==="focusout"&&A&&D.type==="number"&&A.memoizedProps.value!=null&&To(D,"number",D.value)}switch(ce=A?yl(A):window,e){case"focusin":(hf(ce)||ce.contentEditable==="true")&&(Ra=ce,$o=A,Rl=null);break;case"focusout":Rl=$o=Ra=null;break;case"mousedown":Lo=!0;break;case"contextmenu":case"mouseup":case"dragend":Lo=!1,Af(H,n,O);break;case"selectionchange":if(zh)break;case"keydown":case"keyup":Af(H,n,O)}var J;if(Ko)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else Ta?mf(e,n)&&(le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(le="onCompositionStart");le&&(ff&&n.locale!=="ko"&&(Ta||le!=="onCompositionStart"?le==="onCompositionEnd"&&Ta&&(J=rf()):(Sn=O,Mo="value"in Sn?Sn.value:Sn.textContent,Ta=!0)),ce=Sr(A,le),0<ce.length&&(le=new cf(le,e,null,n,O),H.push({event:le,listeners:ce}),J?le.data=J:(J=gf(n),J!==null&&(le.data=J)))),(J=Sh?wh(e,n):Th(e,n))&&(le=Sr(A,"onBeforeInput"),0<le.length&&(ce=new cf("onBeforeInput","beforeinput",null,n,O),H.push({event:ce,listeners:le}),ce.data=J)),g1(H,e,A,n,O)}Jp(H,t)})}function ei(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Sr(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=xl(e,n),i!=null&&a.unshift(ei(e,i,r)),i=xl(e,t),i!=null&&a.push(ei(e,i,r))),e.tag===3)return a;e=e.return}return[]}function Fa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pp(e,t,n,a,i){for(var r=t._reactName,f=[];n!==null&&n!==a;){var p=n,v=p.alternate,A=p.stateNode;if(p=p.tag,v!==null&&v===a)break;p!==5&&p!==26&&p!==27||A===null||(v=A,i?(A=xl(n,r),A!=null&&f.unshift(ei(n,A,v))):i||(A=xl(n,r),A!=null&&f.push(ei(n,A,v)))),n=n.return}f.length!==0&&e.push({event:t,listeners:f})}var v1=/\r\n?/g,b1=/\u0000|\uFFFD/g;function em(e){return(typeof e=="string"?e:""+e).replace(v1,`
`).replace(b1,"")}function tm(e,t){return t=em(t),em(e)===t}function wr(){}function Se(e,t,n,a,i,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ea(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ea(e,""+a);break;case"className":Ni(e,"class",a);break;case"tabIndex":Ni(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ni(e,n,a);break;case"style":nf(e,a,r);break;case"data":if(t!=="object"){Ni(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ci(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&Se(e,t,"name",i.name,i,null),Se(e,t,"formEncType",i.formEncType,i,null),Se(e,t,"formMethod",i.formMethod,i,null),Se(e,t,"formTarget",i.formTarget,i,null)):(Se(e,t,"encType",i.encType,i,null),Se(e,t,"method",i.method,i,null),Se(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ci(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=wr);break;case"onScroll":a!=null&&pe("scroll",e);break;case"onScrollEnd":a!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Ci(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Di(e,"popover",a);break;case"xlinkActuate":en(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":en(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":en(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":en(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":en(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":en(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":en(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":en(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":en(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Di(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Fg.get(n)||n,Di(e,n,a))}}function sc(e,t,n,a,i,r){switch(n){case"style":nf(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ea(e,a):(typeof a=="number"||typeof a=="bigint")&&Ea(e,""+a);break;case"onScroll":a!=null&&pe("scroll",e);break;case"onScrollEnd":a!=null&&pe("scrollend",e);break;case"onClick":a!=null&&(e.onclick=wr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xs.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),r=e[ut]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Di(e,n,a)}}}function et(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var a=!1,i=!1,r;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Se(e,t,r,f,n,null)}}i&&Se(e,t,"srcSet",n.srcSet,n,null),a&&Se(e,t,"src",n.src,n,null);return;case"input":pe("invalid",e);var p=r=f=i=null,v=null,A=null;for(a in n)if(n.hasOwnProperty(a)){var O=n[a];if(O!=null)switch(a){case"name":i=O;break;case"type":f=O;break;case"checked":v=O;break;case"defaultChecked":A=O;break;case"value":r=O;break;case"defaultValue":p=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(u(137,t));break;default:Se(e,t,a,O,n,null)}}Ws(e,r,p,v,A,f,i,!1),Ui(e);return;case"select":pe("invalid",e),a=f=r=null;for(i in n)if(n.hasOwnProperty(i)&&(p=n[i],p!=null))switch(i){case"value":r=p;break;case"defaultValue":f=p;break;case"multiple":a=p;default:Se(e,t,i,p,n,null)}t=r,n=f,e.multiple=!!a,t!=null?ja(e,!!a,t,!1):n!=null&&ja(e,!!a,n,!0);return;case"textarea":pe("invalid",e),r=i=a=null;for(f in n)if(n.hasOwnProperty(f)&&(p=n[f],p!=null))switch(f){case"value":a=p;break;case"defaultValue":i=p;break;case"children":r=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(u(91));break;default:Se(e,t,f,p,n,null)}ef(e,a,i,r),Ui(e);return;case"option":for(v in n)if(n.hasOwnProperty(v)&&(a=n[v],a!=null))switch(v){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Se(e,t,v,a,n,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(a=0;a<Pl.length;a++)pe(Pl[a],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(a=n[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Se(e,t,A,a,n,null)}return;default:if(Ro(t)){for(O in n)n.hasOwnProperty(O)&&(a=n[O],a!==void 0&&sc(e,t,O,a,n,void 0));return}}for(p in n)n.hasOwnProperty(p)&&(a=n[p],a!=null&&Se(e,t,p,a,n,null))}function j1(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,f=null,p=null,v=null,A=null,O=null;for(N in n){var H=n[N];if(n.hasOwnProperty(N)&&H!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":v=H;default:a.hasOwnProperty(N)||Se(e,t,N,null,a,H)}}for(var D in a){var N=a[D];if(H=n[D],a.hasOwnProperty(D)&&(N!=null||H!=null))switch(D){case"type":r=N;break;case"name":i=N;break;case"checked":A=N;break;case"defaultChecked":O=N;break;case"value":f=N;break;case"defaultValue":p=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:N!==H&&Se(e,t,D,N,a,H)}}wo(e,f,p,v,A,O,r,i);return;case"select":N=f=p=D=null;for(r in n)if(v=n[r],n.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":N=v;default:a.hasOwnProperty(r)||Se(e,t,r,null,a,v)}for(i in a)if(r=a[i],v=n[i],a.hasOwnProperty(i)&&(r!=null||v!=null))switch(i){case"value":D=r;break;case"defaultValue":p=r;break;case"multiple":f=r;default:r!==v&&Se(e,t,i,r,a,v)}t=p,n=f,a=N,D!=null?ja(e,!!n,D,!1):!!a!=!!n&&(t!=null?ja(e,!!n,t,!0):ja(e,!!n,n?[]:"",!1));return;case"textarea":N=D=null;for(p in n)if(i=n[p],n.hasOwnProperty(p)&&i!=null&&!a.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Se(e,t,p,null,a,i)}for(f in a)if(i=a[f],r=n[f],a.hasOwnProperty(f)&&(i!=null||r!=null))switch(f){case"value":D=i;break;case"defaultValue":N=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==r&&Se(e,t,f,i,a,r)}Ps(e,D,N);return;case"option":for(var ie in n)if(D=n[ie],n.hasOwnProperty(ie)&&D!=null&&!a.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:Se(e,t,ie,null,a,D)}for(v in a)if(D=a[v],N=n[v],a.hasOwnProperty(v)&&D!==N&&(D!=null||N!=null))switch(v){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:Se(e,t,v,D,a,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in n)D=n[ne],n.hasOwnProperty(ne)&&D!=null&&!a.hasOwnProperty(ne)&&Se(e,t,ne,null,a,D);for(A in a)if(D=a[A],N=n[A],a.hasOwnProperty(A)&&D!==N&&(D!=null||N!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,t));break;default:Se(e,t,A,D,a,N)}return;default:if(Ro(t)){for(var we in n)D=n[we],n.hasOwnProperty(we)&&D!==void 0&&!a.hasOwnProperty(we)&&sc(e,t,we,void 0,a,D);for(O in a)D=a[O],N=n[O],!a.hasOwnProperty(O)||D===N||D===void 0&&N===void 0||sc(e,t,O,D,a,N);return}}for(var w in n)D=n[w],n.hasOwnProperty(w)&&D!=null&&!a.hasOwnProperty(w)&&Se(e,t,w,null,a,D);for(H in a)D=a[H],N=n[H],!a.hasOwnProperty(H)||D===N||D==null&&N==null||Se(e,t,H,D,a,N)}var fc=null,dc=null;function Tr(e){return e.nodeType===9?e:e.ownerDocument}function nm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function am(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function pc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mc=null;function E1(){var e=window.event;return e&&e.type==="popstate"?e===mc?!1:(mc=e,!0):(mc=null,!1)}var lm=typeof setTimeout=="function"?setTimeout:void 0,S1=typeof clearTimeout=="function"?clearTimeout:void 0,im=typeof Promise=="function"?Promise:void 0,w1=typeof queueMicrotask=="function"?queueMicrotask:typeof im<"u"?function(e){return im.resolve(null).then(e).catch(T1)}:lm;function T1(e){setTimeout(function(){throw e})}function Bn(e){return e==="head"}function rm(e,t){var n=t,a=0,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<a&&8>a){n=a;var f=e.ownerDocument;if(n&1&&ti(f.documentElement),n&2&&ti(f.body),n&4)for(n=f.head,ti(n),f=n.firstChild;f;){var p=f.nextSibling,v=f.nodeName;f[hl]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=p}}if(i===0){e.removeChild(r),ci(t);return}i--}else n==="$"||n==="$?"||n==="$!"?i++:a=n.charCodeAt(0)-48;else a=0;n=r}while(n);ci(t)}function gc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":gc(n),bo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function R1(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[hl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=kt(e.nextSibling),e===null)break}return null}function A1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=kt(e.nextSibling),e===null))return null;return e}function hc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function D1(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var yc=null;function om(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function um(e,t,n){switch(t=Tr(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function ti(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);bo(e)}var zt=new Map,cm=new Set;function Rr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var gn=V.d;V.d={f:N1,r:U1,D:M1,C:C1,L:z1,m:O1,X:K1,S:_1,M:H1};function N1(){var e=gn.f(),t=yr();return e||t}function U1(e){var t=ya(e);t!==null&&t.tag===5&&t.type==="form"?Nd(t):gn.r(e)}var Ja=typeof document>"u"?null:document;function sm(e,t,n){var a=Ja;if(a&&typeof t=="string"&&t){var i=Rt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),cm.has(i)||(cm.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),et(t,"link",e),Ve(t),a.head.appendChild(t)))}}function M1(e){gn.D(e),sm("dns-prefetch",e,null)}function C1(e,t){gn.C(e,t),sm("preconnect",e,t)}function z1(e,t,n){gn.L(e,t,n);var a=Ja;if(a&&e&&t){var i='link[rel="preload"][as="'+Rt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Rt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+Rt(n.imageSizes)+'"]')):i+='[href="'+Rt(e)+'"]';var r=i;switch(t){case"style":r=Wa(e);break;case"script":r=Pa(e)}zt.has(r)||(e=j({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),zt.set(r,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(ni(r))||t==="script"&&a.querySelector(ai(r))||(t=a.createElement("link"),et(t,"link",e),Ve(t),a.head.appendChild(t)))}}function O1(e,t){gn.m(e,t);var n=Ja;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Rt(a)+'"][href="'+Rt(e)+'"]',r=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Pa(e)}if(!zt.has(r)&&(e=j({rel:"modulepreload",href:e},t),zt.set(r,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ai(r)))return}a=n.createElement("link"),et(a,"link",e),Ve(a),n.head.appendChild(a)}}}function _1(e,t,n){gn.S(e,t,n);var a=Ja;if(a&&e){var i=xa(a).hoistableStyles,r=Wa(e);t=t||"default";var f=i.get(r);if(!f){var p={loading:0,preload:null};if(f=a.querySelector(ni(r)))p.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":t},n),(n=zt.get(r))&&xc(e,n);var v=f=a.createElement("link");Ve(v),et(v,"link",e),v._p=new Promise(function(A,O){v.onload=A,v.onerror=O}),v.addEventListener("load",function(){p.loading|=1}),v.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Ar(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:p},i.set(r,f)}}}function K1(e,t){gn.X(e,t);var n=Ja;if(n&&e){var a=xa(n).hoistableScripts,i=Pa(e),r=a.get(i);r||(r=n.querySelector(ai(i)),r||(e=j({src:e,async:!0},t),(t=zt.get(i))&&vc(e,t),r=n.createElement("script"),Ve(r),et(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function H1(e,t){gn.M(e,t);var n=Ja;if(n&&e){var a=xa(n).hoistableScripts,i=Pa(e),r=a.get(i);r||(r=n.querySelector(ai(i)),r||(e=j({src:e,async:!0,type:"module"},t),(t=zt.get(i))&&vc(e,t),r=n.createElement("script"),Ve(r),et(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function fm(e,t,n,a){var i=(i=ae.current)?Rr(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Wa(n.href),n=xa(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Wa(n.href);var r=xa(i).hoistableStyles,f=r.get(e);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,f),(r=i.querySelector(ni(e)))&&!r._p&&(f.instance=r,f.state.loading=5),zt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},zt.set(e,n),r||k1(i,e,n,f.state))),t&&a===null)throw Error(u(528,""));return f}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Pa(n),n=xa(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Wa(e){return'href="'+Rt(e)+'"'}function ni(e){return'link[rel="stylesheet"]['+e+"]"}function dm(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function k1(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),et(t,"link",n),Ve(t),e.head.appendChild(t))}function Pa(e){return'[src="'+Rt(e)+'"]'}function ai(e){return"script[async]"+e}function pm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Rt(n.href)+'"]');if(a)return t.instance=a,Ve(a),a;var i=j({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ve(a),et(a,"style",i),Ar(a,n.precedence,e),t.instance=a;case"stylesheet":i=Wa(n.href);var r=e.querySelector(ni(i));if(r)return t.state.loading|=4,t.instance=r,Ve(r),r;a=dm(n),(i=zt.get(i))&&xc(a,i),r=(e.ownerDocument||e).createElement("link"),Ve(r);var f=r;return f._p=new Promise(function(p,v){f.onload=p,f.onerror=v}),et(r,"link",a),t.state.loading|=4,Ar(r,n.precedence,e),t.instance=r;case"script":return r=Pa(n.src),(i=e.querySelector(ai(r)))?(t.instance=i,Ve(i),i):(a=n,(i=zt.get(r))&&(a=j({},n),vc(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ve(i),et(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ar(a,n.precedence,e));return t.instance}function Ar(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,r=i,f=0;f<a.length;f++){var p=a[f];if(p.dataset.precedence===t)r=p;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function xc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function vc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Dr=null;function mm(e,t,n){if(Dr===null){var a=new Map,i=Dr=new Map;i.set(n,a)}else i=Dr,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var r=n[i];if(!(r[hl]||r[nt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var f=r.getAttribute(t)||"";f=e+f;var p=a.get(f);p?p.push(r):a.set(f,[r])}}return a}function gm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function B1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function hm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var li=null;function $1(){}function L1(e,t,n){if(li===null)throw Error(u(475));var a=li;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Wa(n.href),r=e.querySelector(ni(i));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Nr.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=r,Ve(r);return}r=e.ownerDocument||e,n=dm(n),(i=zt.get(i))&&xc(n,i),r=r.createElement("link"),Ve(r);var f=r;f._p=new Promise(function(p,v){f.onload=p,f.onerror=v}),et(r,"link",n),t.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Nr.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function q1(){if(li===null)throw Error(u(475));var e=li;return e.stylesheets&&e.count===0&&bc(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&bc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Nr(){if(this.count--,this.count===0){if(this.stylesheets)bc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ur=null;function bc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ur=new Map,t.forEach(G1,e),Ur=null,Nr.call(e))}function G1(e,t){if(!(t.state.loading&4)){var n=Ur.get(e);if(n)var a=n.get(null);else{n=new Map,Ur.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var f=i[r];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(n.set(f.dataset.precedence,f),a=f)}a&&n.set(null,a)}i=t.instance,f=i.getAttribute("data-precedence"),r=n.get(f)||a,r===a&&n.set(null,i),n.set(f,i),this.count++,a=Nr.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ii={$$typeof:X,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function Y1(e,t,n,a,i,r,f,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ho(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ho(0),this.hiddenUpdates=ho(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function ym(e,t,n,a,i,r,f,p,v,A,O,H){return e=new Y1(e,t,n,f,p,v,A,H),t=1,r===!0&&(t|=24),r=yt(3,null,null,t),e.current=r,r.stateNode=e,t=tu(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},iu(r),e}function xm(e){return e?(e=Ua,e):Ua}function vm(e,t,n,a,i,r){i=xm(i),a.context===null?a.context=i:a.pendingContext=i,a=Rn(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=An(e,a,t),n!==null&&(Et(n,e,t),_l(n,e,t))}function bm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function jc(e,t){bm(e,t),(e=e.alternate)&&bm(e,t)}function jm(e){if(e.tag===13){var t=Na(e,67108864);t!==null&&Et(t,e,67108864),jc(e,67108864)}}var Mr=!0;function X1(e,t,n,a){var i=z.T;z.T=null;var r=V.p;try{V.p=2,Ec(e,t,n,a)}finally{V.p=r,z.T=i}}function Q1(e,t,n,a){var i=z.T;z.T=null;var r=V.p;try{V.p=8,Ec(e,t,n,a)}finally{V.p=r,z.T=i}}function Ec(e,t,n,a){if(Mr){var i=Sc(a);if(i===null)cc(e,t,a,Cr,n),Sm(e,a);else if(Z1(i,e,t,n,a))a.stopPropagation();else if(Sm(e,a),t&4&&-1<V1.indexOf(e)){for(;i!==null;){var r=ya(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var f=Zn(r.pendingLanes);if(f!==0){var p=r;for(p.pendingLanes|=2,p.entangledLanes|=2;f;){var v=1<<31-gt(f);p.entanglements[1]|=v,f&=~v}Vt(r),(be&6)===0&&(gr=qt()+500,Wl(0))}}break;case 13:p=Na(r,2),p!==null&&Et(p,r,2),yr(),jc(r,2)}if(r=Sc(a),r===null&&cc(e,t,a,Cr,n),r===i)break;i=r}i!==null&&a.stopPropagation()}else cc(e,t,a,null,n)}}function Sc(e){return e=Do(e),wc(e)}var Cr=null;function wc(e){if(Cr=null,e=ha(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=y(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Cr=e,null}function Em(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Cg()){case _s:return 2;case Ks:return 8;case wi:case zg:return 32;case Hs:return 268435456;default:return 32}default:return 32}}var Tc=!1,$n=null,Ln=null,qn=null,ri=new Map,oi=new Map,Gn=[],V1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sm(e,t){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":ri.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oi.delete(t.pointerId)}}function ui(e,t,n,a,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[i]},t!==null&&(t=ya(t),t!==null&&jm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Z1(e,t,n,a,i){switch(t){case"focusin":return $n=ui($n,e,t,n,a,i),!0;case"dragenter":return Ln=ui(Ln,e,t,n,a,i),!0;case"mouseover":return qn=ui(qn,e,t,n,a,i),!0;case"pointerover":var r=i.pointerId;return ri.set(r,ui(ri.get(r)||null,e,t,n,a,i)),!0;case"gotpointercapture":return r=i.pointerId,oi.set(r,ui(oi.get(r)||null,e,t,n,a,i)),!0}return!1}function wm(e){var t=ha(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=y(n),t!==null){e.blockedOn=t,Lg(e.priority,function(){if(n.tag===13){var a=jt();a=yo(a);var i=Na(n,a);i!==null&&Et(i,n,a),jc(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Ao=a,n.target.dispatchEvent(a),Ao=null}else return t=ya(n),t!==null&&jm(t),e.blockedOn=n,!1;t.shift()}return!0}function Tm(e,t,n){zr(e)&&n.delete(t)}function I1(){Tc=!1,$n!==null&&zr($n)&&($n=null),Ln!==null&&zr(Ln)&&(Ln=null),qn!==null&&zr(qn)&&(qn=null),ri.forEach(Tm),oi.forEach(Tm)}function Or(e,t){e.blockedOn===t&&(e.blockedOn=null,Tc||(Tc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,I1)))}var _r=null;function Rm(e){_r!==e&&(_r=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){_r===e&&(_r=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(wc(a||n)===null)continue;break}var r=ya(n);r!==null&&(e.splice(t,3),t-=3,wu(r,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function ci(e){function t(v){return Or(v,e)}$n!==null&&Or($n,e),Ln!==null&&Or(Ln,e),qn!==null&&Or(qn,e),ri.forEach(t),oi.forEach(t);for(var n=0;n<Gn.length;n++){var a=Gn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)wm(n),n.blockedOn===null&&Gn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],r=n[a+1],f=i[ut]||null;if(typeof r=="function")f||Rm(n);else if(f){var p=null;if(r&&r.hasAttribute("formAction")){if(i=r,f=r[ut]||null)p=f.formAction;else if(wc(i)!==null)continue}else p=f.action;typeof p=="function"?n[a+1]=p:(n.splice(a,3),a-=3),Rm(n)}}}function Rc(e){this._internalRoot=e}Kr.prototype.render=Rc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=jt();vm(n,a,e,t,null,null)},Kr.prototype.unmount=Rc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vm(e.current,2,null,e,null,null),yr(),t[ga]=null}};function Kr(e){this._internalRoot=e}Kr.prototype.unstable_scheduleHydration=function(e){if(e){var t=qs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Gn.length&&t!==0&&t<Gn[n].priority;n++);Gn.splice(n,0,e),n===0&&wm(e)}};var Am=o.version;if(Am!=="19.1.1")throw Error(u(527,Am,"19.1.1"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=g(t),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var F1={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hr.isDisabled&&Hr.supportsFiber)try{pl=Hr.inject(F1),mt=Hr}catch{}}return pi.createRoot=function(e,t){if(!d(e))throw Error(u(299));var n=!1,a="",i=Gd,r=Yd,f=Xd,p=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(p=t.unstable_transitionCallbacks)),t=ym(e,1,!1,null,null,n,a,i,r,f,p,null),e[ga]=t.current,uc(e),new Rc(t)},pi.hydrateRoot=function(e,t,n){if(!d(e))throw Error(u(299));var a=!1,i="",r=Gd,f=Yd,p=Xd,v=null,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(v=n.unstable_transitionCallbacks),n.formState!==void 0&&(A=n.formState)),t=ym(e,1,!0,t,n??null,a,i,r,f,p,v,A),t.context=xm(null),n=t.current,a=jt(),a=yo(a),i=Rn(a),i.callback=null,An(n,i,a),n=a,t.current.lanes=n,gl(t,n),Vt(t),e[ga]=t.current,uc(e),new Kr(t)},pi.version="19.1.1",pi}var M0;function XE(){if(M0)return Ic.exports;M0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),Ic.exports=YE(),Ic.exports}var QE=XE();function VE(){const l=It(),o=Ny();return ge.useEffect(()=>{o!=="POP"&&window.scrollTo({top:0,behavior:"instant"});const c=document.getElementById("main");c&&c.focus({preventScroll:!0})},[l,o]),null}function ZE({headerMode:l,setHeaderMode:o}){const c=U.useMemo(()=>[{key:"projects",label:"PROJECTS",href:"/TU2025gradulate/projects"},{key:"peoples",label:"PEOPLES",href:"/TU2025gradulate/peoples"},{key:"showroom",label:"SHOWROOM",href:"/TU2025gradulate/showroom"},{key:"guestbook",label:"GUESTBOOK",href:"/TU2025gradulate/guestbook"},{key:"credits",label:"CREDITS",href:"/TU2025gradulate/credits"}],[]),u=It(),d=U.useMemo(()=>{const m=u.pathname.replace(/^\/+/,"");if(!m)return;const y=m.split("/")[0];return["projects","peoples","showroom","guestbook","credits"].includes(y)?y:void 0},[u.pathname]);return s.jsxs(s.Fragment,{children:[s.jsx(xg,{items:c,activeKey:d,mode:l,autoOnScroll:l===Ge.GRADIENT,scrollThreshold:8,sticky:!0,maxWidth:1280,onModeChange:o}),s.jsx("main",{id:"main",tabIndex:-1,style:{outline:"none",width:"100vw",boxSizing:"border-box",padding:0},children:s.jsx(Zy,{})}),s.jsx(vg,{title:"잔향 : 기억의 향기",nav:[{label:"PROJECTS",href:"/TU2025gradulate/projects"},{label:"PEOPLES",href:"/TU2025gradulate/peoples"},{label:"SHOWROOM",href:"/TU2025gradulate/showroom"},{label:"GUESTBOOK",href:"/TU2025gradulate/guestbook"},{label:"CREDITS",href:"/TU2025gradulate/credits"}],copyright:["ⓒ 2025 TECH UNIV KOREA. ALL RIGHTS RESERVED.","TUKOREA DESIGN ENGINEERING 20TH GRADUATION EXHIBITION"],social:{youtube:{href:"https://youtube.com/",label:"YouTube"},instagram:{href:"https://instagram.com/",label:"Instagram"}},sidePadding:350,maxWidth:1220})]})}function IE({setHeaderMode:l}){return ge.useEffect(()=>{l(Ge.GRADIENT)},[l]),s.jsx(U2,{})}function FE({setHeaderMode:l}){return ge.useEffect(()=>{l(Ge.GRADIENT)},[l]),s.jsx(sb,{})}function JE({setHeaderMode:l}){return ge.useEffect(()=>{l(Ge.GRADIENT)},[l]),s.jsx(zb,{})}function WE({setHeaderMode:l}){return ge.useEffect(()=>{l(Ge.DARK)},[l]),s.jsx(W4,{})}function PE({setHeaderMode:l}){return ge.useEffect(()=>{l(Ge.DARK)},[l]),s.jsx(tE,{})}function eS({setHeaderMode:l}){return ge.useEffect(()=>{l(Ge.LIGHT)},[l]),s.jsx(LE,{})}function tS(){const[l,o]=U.useState(Ge.GRADIENT);return s.jsxs(vx,{basename:"/TU2025gradulate/",children:[s.jsx(VE,{}),s.jsx(Fy,{children:s.jsxs(hn,{element:s.jsx(ZE,{headerMode:l,setHeaderMode:o}),children:[s.jsx(hn,{index:!0,element:s.jsx(WE,{setHeaderMode:o})}),s.jsx(hn,{path:"projects",element:s.jsx(JE,{setHeaderMode:o})}),s.jsx(hn,{path:"peoples",element:s.jsx(FE,{setHeaderMode:o})}),s.jsx(hn,{path:"guestbook",element:s.jsx(PE,{setHeaderMode:o})}),s.jsx(hn,{path:"work/:pid",element:s.jsx(eS,{setHeaderMode:o})}),s.jsx(hn,{path:"credits",element:s.jsx(IE,{setHeaderMode:o})}),s.jsx(hn,{path:"*",element:s.jsx(Vy,{to:"/",replace:!0})})]})})]})}const C0=typeof document<"u"?document.getElementById("root"):null;C0&&QE.createRoot(C0).render(s.jsx(tS,{}));
