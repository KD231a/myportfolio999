(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function n0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Mu={exports:{}},ls={},bu={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function r0(){if(dp)return ne;dp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function E(C){return C===null||typeof C!="object"?null:(C=v&&C[v]||C["@@iterator"],typeof C=="function"?C:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function D(C,O,te){this.props=C,this.context=O,this.refs=M,this.updater=te||P}D.prototype.isReactComponent={},D.prototype.setState=function(C,O){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,O,"setState")},D.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function x(){}x.prototype=D.prototype;function U(C,O,te){this.props=C,this.context=O,this.refs=M,this.updater=te||P}var Q=U.prototype=new x;Q.constructor=U,R(Q,D.prototype),Q.isPureReactComponent=!0;var ee=Array.isArray,he=Object.prototype.hasOwnProperty,_e={current:null},ve={key:!0,ref:!0,__self:!0,__source:!0};function Oe(C,O,te){var re,ae={},ue=null,we=null;if(O!=null)for(re in O.ref!==void 0&&(we=O.ref),O.key!==void 0&&(ue=""+O.key),O)he.call(O,re)&&!ve.hasOwnProperty(re)&&(ae[re]=O[re]);var fe=arguments.length-2;if(fe===1)ae.children=te;else if(1<fe){for(var Re=Array(fe),mt=0;mt<fe;mt++)Re[mt]=arguments[mt+2];ae.children=Re}if(C&&C.defaultProps)for(re in fe=C.defaultProps,fe)ae[re]===void 0&&(ae[re]=fe[re]);return{$$typeof:i,type:C,key:ue,ref:we,props:ae,_owner:_e.current}}function ye(C,O){return{$$typeof:i,type:C.type,key:O,ref:C.ref,props:C.props,_owner:C._owner}}function Fe(C){return typeof C=="object"&&C!==null&&C.$$typeof===i}function Ht(C){var O={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(te){return O[te]})}var $t=/\/+/g;function pt(C,O){return typeof C=="object"&&C!==null&&C.key!=null?Ht(""+C.key):O.toString(36)}function Pt(C,O,te,re,ae){var ue=typeof C;(ue==="undefined"||ue==="boolean")&&(C=null);var we=!1;if(C===null)we=!0;else switch(ue){case"string":case"number":we=!0;break;case"object":switch(C.$$typeof){case i:case e:we=!0}}if(we)return we=C,ae=ae(we),C=re===""?"."+pt(we,0):re,ee(ae)?(te="",C!=null&&(te=C.replace($t,"$&/")+"/"),Pt(ae,O,te,"",function(mt){return mt})):ae!=null&&(Fe(ae)&&(ae=ye(ae,te+(!ae.key||we&&we.key===ae.key?"":(""+ae.key).replace($t,"$&/")+"/")+C)),O.push(ae)),1;if(we=0,re=re===""?".":re+":",ee(C))for(var fe=0;fe<C.length;fe++){ue=C[fe];var Re=re+pt(ue,fe);we+=Pt(ue,O,te,Re,ae)}else if(Re=E(C),typeof Re=="function")for(C=Re.call(C),fe=0;!(ue=C.next()).done;)ue=ue.value,Re=re+pt(ue,fe++),we+=Pt(ue,O,te,Re,ae);else if(ue==="object")throw O=String(C),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return we}function Vt(C,O,te){if(C==null)return C;var re=[],ae=0;return Pt(C,re,"","",function(ue){return O.call(te,ue,ae++)}),re}function ot(C){if(C._status===-1){var O=C._result;O=O(),O.then(function(te){(C._status===0||C._status===-1)&&(C._status=1,C._result=te)},function(te){(C._status===0||C._status===-1)&&(C._status=2,C._result=te)}),C._status===-1&&(C._status=0,C._result=O)}if(C._status===1)return C._result.default;throw C._result}var Le={current:null},j={transition:null},J={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:j,ReactCurrentOwner:_e};function $(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:Vt,forEach:function(C,O,te){Vt(C,function(){O.apply(this,arguments)},te)},count:function(C){var O=0;return Vt(C,function(){O++}),O},toArray:function(C){return Vt(C,function(O){return O})||[]},only:function(C){if(!Fe(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},ne.Component=D,ne.Fragment=n,ne.Profiler=l,ne.PureComponent=U,ne.StrictMode=s,ne.Suspense=p,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,ne.act=$,ne.cloneElement=function(C,O,te){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var re=R({},C.props),ae=C.key,ue=C.ref,we=C._owner;if(O!=null){if(O.ref!==void 0&&(ue=O.ref,we=_e.current),O.key!==void 0&&(ae=""+O.key),C.type&&C.type.defaultProps)var fe=C.type.defaultProps;for(Re in O)he.call(O,Re)&&!ve.hasOwnProperty(Re)&&(re[Re]=O[Re]===void 0&&fe!==void 0?fe[Re]:O[Re])}var Re=arguments.length-2;if(Re===1)re.children=te;else if(1<Re){fe=Array(Re);for(var mt=0;mt<Re;mt++)fe[mt]=arguments[mt+2];re.children=fe}return{$$typeof:i,type:C.type,key:ae,ref:ue,props:re,_owner:we}},ne.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:u,_context:C},C.Consumer=C},ne.createElement=Oe,ne.createFactory=function(C){var O=Oe.bind(null,C);return O.type=C,O},ne.createRef=function(){return{current:null}},ne.forwardRef=function(C){return{$$typeof:f,render:C}},ne.isValidElement=Fe,ne.lazy=function(C){return{$$typeof:y,_payload:{_status:-1,_result:C},_init:ot}},ne.memo=function(C,O){return{$$typeof:m,type:C,compare:O===void 0?null:O}},ne.startTransition=function(C){var O=j.transition;j.transition={};try{C()}finally{j.transition=O}},ne.unstable_act=$,ne.useCallback=function(C,O){return Le.current.useCallback(C,O)},ne.useContext=function(C){return Le.current.useContext(C)},ne.useDebugValue=function(){},ne.useDeferredValue=function(C){return Le.current.useDeferredValue(C)},ne.useEffect=function(C,O){return Le.current.useEffect(C,O)},ne.useId=function(){return Le.current.useId()},ne.useImperativeHandle=function(C,O,te){return Le.current.useImperativeHandle(C,O,te)},ne.useInsertionEffect=function(C,O){return Le.current.useInsertionEffect(C,O)},ne.useLayoutEffect=function(C,O){return Le.current.useLayoutEffect(C,O)},ne.useMemo=function(C,O){return Le.current.useMemo(C,O)},ne.useReducer=function(C,O,te){return Le.current.useReducer(C,O,te)},ne.useRef=function(C){return Le.current.useRef(C)},ne.useState=function(C){return Le.current.useState(C)},ne.useSyncExternalStore=function(C,O,te){return Le.current.useSyncExternalStore(C,O,te)},ne.useTransition=function(){return Le.current.useTransition()},ne.version="18.3.1",ne}var hp;function kc(){return hp||(hp=1,bu.exports=r0()),bu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp;function i0(){if(fp)return ls;fp=1;var i=kc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var y,v={},E=null,P=null;m!==void 0&&(E=""+m),p.key!==void 0&&(E=""+p.key),p.ref!==void 0&&(P=p.ref);for(y in p)s.call(p,y)&&!u.hasOwnProperty(y)&&(v[y]=p[y]);if(f&&f.defaultProps)for(y in p=f.defaultProps,p)v[y]===void 0&&(v[y]=p[y]);return{$$typeof:e,type:f,key:E,ref:P,props:v,_owner:l.current}}return ls.Fragment=n,ls.jsx=d,ls.jsxs=d,ls}var pp;function s0(){return pp||(pp=1,Mu.exports=i0()),Mu.exports}var H=s0(),N=kc();const o0=n0(N);var Xo={},Fu={exports:{}},ht={},Uu={exports:{}},zu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function l0(){return mp||(mp=1,function(i){function e(j,J){var $=j.length;j.push(J);e:for(;0<$;){var C=$-1>>>1,O=j[C];if(0<l(O,J))j[C]=J,j[$]=O,$=C;else break e}}function n(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var J=j[0],$=j.pop();if($!==J){j[0]=$;e:for(var C=0,O=j.length,te=O>>>1;C<te;){var re=2*(C+1)-1,ae=j[re],ue=re+1,we=j[ue];if(0>l(ae,$))ue<O&&0>l(we,ae)?(j[C]=we,j[ue]=$,C=ue):(j[C]=ae,j[re]=$,C=re);else if(ue<O&&0>l(we,$))j[C]=we,j[ue]=$,C=ue;else break e}}return J}function l(j,J){var $=j.sortIndex-J.sortIndex;return $!==0?$:j.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();i.unstable_now=function(){return d.now()-f}}var p=[],m=[],y=1,v=null,E=3,P=!1,R=!1,M=!1,D=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Q(j){for(var J=n(m);J!==null;){if(J.callback===null)s(m);else if(J.startTime<=j)s(m),J.sortIndex=J.expirationTime,e(p,J);else break;J=n(m)}}function ee(j){if(M=!1,Q(j),!R)if(n(p)!==null)R=!0,ot(he);else{var J=n(m);J!==null&&Le(ee,J.startTime-j)}}function he(j,J){R=!1,M&&(M=!1,x(Oe),Oe=-1),P=!0;var $=E;try{for(Q(J),v=n(p);v!==null&&(!(v.expirationTime>J)||j&&!Ht());){var C=v.callback;if(typeof C=="function"){v.callback=null,E=v.priorityLevel;var O=C(v.expirationTime<=J);J=i.unstable_now(),typeof O=="function"?v.callback=O:v===n(p)&&s(p),Q(J)}else s(p);v=n(p)}if(v!==null)var te=!0;else{var re=n(m);re!==null&&Le(ee,re.startTime-J),te=!1}return te}finally{v=null,E=$,P=!1}}var _e=!1,ve=null,Oe=-1,ye=5,Fe=-1;function Ht(){return!(i.unstable_now()-Fe<ye)}function $t(){if(ve!==null){var j=i.unstable_now();Fe=j;var J=!0;try{J=ve(!0,j)}finally{J?pt():(_e=!1,ve=null)}}else _e=!1}var pt;if(typeof U=="function")pt=function(){U($t)};else if(typeof MessageChannel<"u"){var Pt=new MessageChannel,Vt=Pt.port2;Pt.port1.onmessage=$t,pt=function(){Vt.postMessage(null)}}else pt=function(){D($t,0)};function ot(j){ve=j,_e||(_e=!0,pt())}function Le(j,J){Oe=D(function(){j(i.unstable_now())},J)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(j){j.callback=null},i.unstable_continueExecution=function(){R||P||(R=!0,ot(he))},i.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<j?Math.floor(1e3/j):5},i.unstable_getCurrentPriorityLevel=function(){return E},i.unstable_getFirstCallbackNode=function(){return n(p)},i.unstable_next=function(j){switch(E){case 1:case 2:case 3:var J=3;break;default:J=E}var $=E;E=J;try{return j()}finally{E=$}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(j,J){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var $=E;E=j;try{return J()}finally{E=$}},i.unstable_scheduleCallback=function(j,J,$){var C=i.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?C+$:C):$=C,j){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=$+O,j={id:y++,callback:J,priorityLevel:j,startTime:$,expirationTime:O,sortIndex:-1},$>C?(j.sortIndex=$,e(m,j),n(p)===null&&j===n(m)&&(M?(x(Oe),Oe=-1):M=!0,Le(ee,$-C))):(j.sortIndex=O,e(p,j),R||P||(R=!0,ot(he))),j},i.unstable_shouldYield=Ht,i.unstable_wrapCallback=function(j){var J=E;return function(){var $=E;E=J;try{return j.apply(this,arguments)}finally{E=$}}}}(zu)),zu}var gp;function a0(){return gp||(gp=1,Uu.exports=l0()),Uu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function u0(){if(_p)return ht;_p=1;var i=kc(),e=a0();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},v={};function E(t){return p.call(v,t)?!0:p.call(y,t)?!1:m.test(t)?v[t]=!0:(y[t]=!0,!1)}function P(t,r,o,a){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R(t,r,o,a){if(r===null||typeof r>"u"||P(t,r,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(t,r,o,a,c,h,g){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=g}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){D[t]=new M(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];D[r]=new M(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){D[t]=new M(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){D[t]=new M(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){D[t]=new M(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){D[t]=new M(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){D[t]=new M(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){D[t]=new M(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){D[t]=new M(t,5,!1,t.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(x,U);D[r]=new M(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(x,U);D[r]=new M(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(x,U);D[r]=new M(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){D[t]=new M(t,1,!1,t.toLowerCase(),null,!1,!1)}),D.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){D[t]=new M(t,1,!1,t.toLowerCase(),null,!0,!0)});function Q(t,r,o,a){var c=D.hasOwnProperty(r)?D[r]:null;(c!==null?c.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(R(r,o,c,a)&&(o=null),a||c===null?E(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(r=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(r):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,r,o):t.setAttribute(r,o))))}var ee=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,he=Symbol.for("react.element"),_e=Symbol.for("react.portal"),ve=Symbol.for("react.fragment"),Oe=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),Fe=Symbol.for("react.provider"),Ht=Symbol.for("react.context"),$t=Symbol.for("react.forward_ref"),pt=Symbol.for("react.suspense"),Pt=Symbol.for("react.suspense_list"),Vt=Symbol.for("react.memo"),ot=Symbol.for("react.lazy"),Le=Symbol.for("react.offscreen"),j=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var $=Object.assign,C;function O(t){if(C===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);C=r&&r[1]||""}return`
`+C+t}var te=!1;function re(t,r){if(!t||te)return"";te=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(T){var a=T}Reflect.construct(t,[],r)}else{try{r.call()}catch(T){a=T}t.call(r.prototype)}else{try{throw Error()}catch(T){a=T}t()}}catch(T){if(T&&a&&typeof T.stack=="string"){for(var c=T.stack.split(`
`),h=a.stack.split(`
`),g=c.length-1,_=h.length-1;1<=g&&0<=_&&c[g]!==h[_];)_--;for(;1<=g&&0<=_;g--,_--)if(c[g]!==h[_]){if(g!==1||_!==1)do if(g--,_--,0>_||c[g]!==h[_]){var w=`
`+c[g].replace(" at new "," at ");return t.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",t.displayName)),w}while(1<=g&&0<=_);break}}}finally{te=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?O(t):""}function ae(t){switch(t.tag){case 5:return O(t.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return t=re(t.type,!1),t;case 11:return t=re(t.type.render,!1),t;case 1:return t=re(t.type,!0),t;default:return""}}function ue(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ve:return"Fragment";case _e:return"Portal";case ye:return"Profiler";case Oe:return"StrictMode";case pt:return"Suspense";case Pt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ht:return(t.displayName||"Context")+".Consumer";case Fe:return(t._context.displayName||"Context")+".Provider";case $t:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vt:return r=t.displayName||null,r!==null?r:ue(t.type)||"Memo";case ot:r=t._payload,t=t._init;try{return ue(t(r))}catch{}}return null}function we(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(r);case 8:return r===Oe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function fe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function mt(t){var r=Re(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),a=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,h.call(this,g)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Ws(t){t._valueTracker||(t._valueTracker=mt(t))}function gd(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),a="";return t&&(a=Re(t)?t.checked?"true":"false":t.value),t=a,t!==o?(r.setValue(t),!0):!1}function Bs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bl(t,r){var o=r.checked;return $({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function _d(t,r){var o=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;o=fe(r.value!=null?r.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function vd(t,r){r=r.checked,r!=null&&Q(t,"checked",r,!1)}function Hl(t,r){vd(t,r);var o=fe(r.value),a=r.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?$l(t,r.type,o):r.hasOwnProperty("defaultValue")&&$l(t,r.type,fe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function yd(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function $l(t,r,o){(r!=="number"||Bs(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Si=Array.isArray;function Tr(t,r,o,a){if(t=t.options,r){r={};for(var c=0;c<o.length;c++)r["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=r.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+fe(o),r=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}r!==null||t[c].disabled||(r=t[c])}r!==null&&(r.selected=!0)}}function Vl(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return $({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wd(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(Si(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:fe(o)}}function Ed(t,r){var o=fe(r.value),a=fe(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function Sd(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Cd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kl(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Cd(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Hs,Id=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(r,o,a,c)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Hs=Hs||document.createElement("div"),Hs.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Hs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Ci(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lv=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(t){lv.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Ii[r]=Ii[t]})});function kd(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Ii.hasOwnProperty(t)&&Ii[t]?(""+r).trim():r+"px"}function Td(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=kd(o,r[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var av=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gl(t,r){if(r){if(av[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function ql(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yl=null;function Ql(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jl=null,Rr=null,Nr=null;function Rd(t){if(t=Ki(t)){if(typeof Jl!="function")throw Error(n(280));var r=t.stateNode;r&&(r=fo(r),Jl(t.stateNode,t.type,r))}}function Nd(t){Rr?Nr?Nr.push(t):Nr=[t]:Rr=t}function Pd(){if(Rr){var t=Rr,r=Nr;if(Nr=Rr=null,Rd(t),r)for(t=0;t<r.length;t++)Rd(r[t])}}function Ad(t,r){return t(r)}function xd(){}var Xl=!1;function Od(t,r,o){if(Xl)return t(r,o);Xl=!0;try{return Ad(t,r,o)}finally{Xl=!1,(Rr!==null||Nr!==null)&&(xd(),Pd())}}function ki(t,r){var o=t.stateNode;if(o===null)return null;var a=fo(o);if(a===null)return null;o=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var Zl=!1;if(f)try{var Ti={};Object.defineProperty(Ti,"passive",{get:function(){Zl=!0}}),window.addEventListener("test",Ti,Ti),window.removeEventListener("test",Ti,Ti)}catch{Zl=!1}function uv(t,r,o,a,c,h,g,_,w){var T=Array.prototype.slice.call(arguments,3);try{r.apply(o,T)}catch(L){this.onError(L)}}var Ri=!1,$s=null,Vs=!1,ea=null,cv={onError:function(t){Ri=!0,$s=t}};function dv(t,r,o,a,c,h,g,_,w){Ri=!1,$s=null,uv.apply(cv,arguments)}function hv(t,r,o,a,c,h,g,_,w){if(dv.apply(this,arguments),Ri){if(Ri){var T=$s;Ri=!1,$s=null}else throw Error(n(198));Vs||(Vs=!0,ea=T)}}function nr(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function Ld(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Dd(t){if(nr(t)!==t)throw Error(n(188))}function fv(t){var r=t.alternate;if(!r){if(r=nr(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,a=r;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Dd(c),t;if(h===a)return Dd(c),r;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var g=!1,_=c.child;_;){if(_===o){g=!0,o=c,a=h;break}if(_===a){g=!0,a=c,o=h;break}_=_.sibling}if(!g){for(_=h.child;_;){if(_===o){g=!0,o=h,a=c;break}if(_===a){g=!0,a=h,o=c;break}_=_.sibling}if(!g)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function Md(t){return t=fv(t),t!==null?bd(t):null}function bd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=bd(t);if(r!==null)return r;t=t.sibling}return null}var Fd=e.unstable_scheduleCallback,Ud=e.unstable_cancelCallback,pv=e.unstable_shouldYield,mv=e.unstable_requestPaint,Me=e.unstable_now,gv=e.unstable_getCurrentPriorityLevel,ta=e.unstable_ImmediatePriority,zd=e.unstable_UserBlockingPriority,Ks=e.unstable_NormalPriority,_v=e.unstable_LowPriority,jd=e.unstable_IdlePriority,Gs=null,Kt=null;function vv(t){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(Gs,t,void 0,(t.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:Ev,yv=Math.log,wv=Math.LN2;function Ev(t){return t>>>=0,t===0?32:31-(yv(t)/wv|0)|0}var qs=64,Ys=4194304;function Ni(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qs(t,r){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,g=o&268435455;if(g!==0){var _=g&~c;_!==0?a=Ni(_):(h&=g,h!==0&&(a=Ni(h)))}else g=o&~c,g!==0?a=Ni(g):h!==0&&(a=Ni(h));if(a===0)return 0;if(r!==0&&r!==a&&!(r&c)&&(c=a&-a,h=r&-r,c>=h||c===16&&(h&4194240)!==0))return r;if(a&4&&(a|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=a;0<r;)o=31-At(r),c=1<<o,a|=t[o],r&=~c;return a}function Sv(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cv(t,r){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var g=31-At(h),_=1<<g,w=c[g];w===-1?(!(_&o)||_&a)&&(c[g]=Sv(_,r)):w<=r&&(t.expiredLanes|=_),h&=~_}}function na(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wd(){var t=qs;return qs<<=1,!(qs&4194240)&&(qs=64),t}function ra(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function Pi(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-At(r),t[r]=o}function Iv(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-At(o),h=1<<c;r[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function ia(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var a=31-At(o),c=1<<a;c&r|t[a]&r&&(t[a]|=r),o&=~c}}var pe=0;function Bd(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Hd,sa,$d,Vd,Kd,oa=!1,Js=[],Sn=null,Cn=null,In=null,Ai=new Map,xi=new Map,kn=[],kv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gd(t,r){switch(t){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":Ai.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":xi.delete(r.pointerId)}}function Oi(t,r,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},r!==null&&(r=Ki(r),r!==null&&sa(r)),t):(t.eventSystemFlags|=a,r=t.targetContainers,c!==null&&r.indexOf(c)===-1&&r.push(c),t)}function Tv(t,r,o,a,c){switch(r){case"focusin":return Sn=Oi(Sn,t,r,o,a,c),!0;case"dragenter":return Cn=Oi(Cn,t,r,o,a,c),!0;case"mouseover":return In=Oi(In,t,r,o,a,c),!0;case"pointerover":var h=c.pointerId;return Ai.set(h,Oi(Ai.get(h)||null,t,r,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,xi.set(h,Oi(xi.get(h)||null,t,r,o,a,c)),!0}return!1}function qd(t){var r=rr(t.target);if(r!==null){var o=nr(r);if(o!==null){if(r=o.tag,r===13){if(r=Ld(o),r!==null){t.blockedOn=r,Kd(t.priority,function(){$d(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xs(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=aa(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);Yl=a,o.target.dispatchEvent(a),Yl=null}else return r=Ki(o),r!==null&&sa(r),t.blockedOn=o,!1;r.shift()}return!0}function Yd(t,r,o){Xs(t)&&o.delete(r)}function Rv(){oa=!1,Sn!==null&&Xs(Sn)&&(Sn=null),Cn!==null&&Xs(Cn)&&(Cn=null),In!==null&&Xs(In)&&(In=null),Ai.forEach(Yd),xi.forEach(Yd)}function Li(t,r){t.blockedOn===r&&(t.blockedOn=null,oa||(oa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rv)))}function Di(t){function r(c){return Li(c,t)}if(0<Js.length){Li(Js[0],t);for(var o=1;o<Js.length;o++){var a=Js[o];a.blockedOn===t&&(a.blockedOn=null)}}for(Sn!==null&&Li(Sn,t),Cn!==null&&Li(Cn,t),In!==null&&Li(In,t),Ai.forEach(r),xi.forEach(r),o=0;o<kn.length;o++)a=kn[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<kn.length&&(o=kn[0],o.blockedOn===null);)qd(o),o.blockedOn===null&&kn.shift()}var Pr=ee.ReactCurrentBatchConfig,Zs=!0;function Nv(t,r,o,a){var c=pe,h=Pr.transition;Pr.transition=null;try{pe=1,la(t,r,o,a)}finally{pe=c,Pr.transition=h}}function Pv(t,r,o,a){var c=pe,h=Pr.transition;Pr.transition=null;try{pe=4,la(t,r,o,a)}finally{pe=c,Pr.transition=h}}function la(t,r,o,a){if(Zs){var c=aa(t,r,o,a);if(c===null)ka(t,r,a,eo,o),Gd(t,a);else if(Tv(c,t,r,o,a))a.stopPropagation();else if(Gd(t,a),r&4&&-1<kv.indexOf(t)){for(;c!==null;){var h=Ki(c);if(h!==null&&Hd(h),h=aa(t,r,o,a),h===null&&ka(t,r,a,eo,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else ka(t,r,a,null,o)}}var eo=null;function aa(t,r,o,a){if(eo=null,t=Ql(a),t=rr(t),t!==null)if(r=nr(t),r===null)t=null;else if(o=r.tag,o===13){if(t=Ld(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return eo=t,null}function Qd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gv()){case ta:return 1;case zd:return 4;case Ks:case _v:return 16;case jd:return 536870912;default:return 16}default:return 16}}var Tn=null,ua=null,to=null;function Jd(){if(to)return to;var t,r=ua,o=r.length,a,c="value"in Tn?Tn.value:Tn.textContent,h=c.length;for(t=0;t<o&&r[t]===c[t];t++);var g=o-t;for(a=1;a<=g&&r[o-a]===c[h-a];a++);return to=c.slice(t,1<a?1-a:void 0)}function no(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function Xd(){return!1}function gt(t){function r(o,a,c,h,g){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=g,this.currentTarget=null;for(var _ in t)t.hasOwnProperty(_)&&(o=t[_],this[_]=o?o(h):h[_]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ro:Xd,this.isPropagationStopped=Xd,this}return $(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),r}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ca=gt(Ar),Mi=$({},Ar,{view:0,detail:0}),Av=gt(Mi),da,ha,bi,io=$({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bi&&(bi&&t.type==="mousemove"?(da=t.screenX-bi.screenX,ha=t.screenY-bi.screenY):ha=da=0,bi=t),da)},movementY:function(t){return"movementY"in t?t.movementY:ha}}),Zd=gt(io),xv=$({},io,{dataTransfer:0}),Ov=gt(xv),Lv=$({},Mi,{relatedTarget:0}),fa=gt(Lv),Dv=$({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Mv=gt(Dv),bv=$({},Ar,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fv=gt(bv),Uv=$({},Ar,{data:0}),eh=gt(Uv),zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Wv[t])?!!r[t]:!1}function pa(){return Bv}var Hv=$({},Mi,{key:function(t){if(t.key){var r=zv[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=no(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pa,charCode:function(t){return t.type==="keypress"?no(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?no(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$v=gt(Hv),Vv=$({},io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),th=gt(Vv),Kv=$({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pa}),Gv=gt(Kv),qv=$({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yv=gt(qv),Qv=$({},io,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jv=gt(Qv),Xv=[9,13,27,32],ma=f&&"CompositionEvent"in window,Fi=null;f&&"documentMode"in document&&(Fi=document.documentMode);var Zv=f&&"TextEvent"in window&&!Fi,nh=f&&(!ma||Fi&&8<Fi&&11>=Fi),rh=" ",ih=!1;function sh(t,r){switch(t){case"keyup":return Xv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xr=!1;function ey(t,r){switch(t){case"compositionend":return oh(r);case"keypress":return r.which!==32?null:(ih=!0,rh);case"textInput":return t=r.data,t===rh&&ih?null:t;default:return null}}function ty(t,r){if(xr)return t==="compositionend"||!ma&&sh(t,r)?(t=Jd(),to=ua=Tn=null,xr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return nh&&r.locale!=="ko"?null:r.data;default:return null}}var ny={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!ny[t.type]:r==="textarea"}function ah(t,r,o,a){Nd(a),r=uo(r,"onChange"),0<r.length&&(o=new ca("onChange","change",null,o,a),t.push({event:o,listeners:r}))}var Ui=null,zi=null;function ry(t){Th(t,0)}function so(t){var r=br(t);if(gd(r))return t}function iy(t,r){if(t==="change")return r}var uh=!1;if(f){var ga;if(f){var _a="oninput"in document;if(!_a){var ch=document.createElement("div");ch.setAttribute("oninput","return;"),_a=typeof ch.oninput=="function"}ga=_a}else ga=!1;uh=ga&&(!document.documentMode||9<document.documentMode)}function dh(){Ui&&(Ui.detachEvent("onpropertychange",hh),zi=Ui=null)}function hh(t){if(t.propertyName==="value"&&so(zi)){var r=[];ah(r,zi,t,Ql(t)),Od(ry,r)}}function sy(t,r,o){t==="focusin"?(dh(),Ui=r,zi=o,Ui.attachEvent("onpropertychange",hh)):t==="focusout"&&dh()}function oy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return so(zi)}function ly(t,r){if(t==="click")return so(r)}function ay(t,r){if(t==="input"||t==="change")return so(r)}function uy(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var xt=typeof Object.is=="function"?Object.is:uy;function ji(t,r){if(xt(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),a=Object.keys(r);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!p.call(r,c)||!xt(t[c],r[c]))return!1}return!0}function fh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ph(t,r){var o=fh(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=r&&a>=r)return{node:o,offset:r-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=fh(o)}}function mh(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?mh(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function gh(){for(var t=window,r=Bs();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Bs(t.document)}return r}function va(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function cy(t){var r=gh(),o=t.focusedElem,a=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&mh(o.ownerDocument.documentElement,o)){if(a!==null&&va(o)){if(r=a.start,t=a.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=ph(o,h);var g=ph(o,a);c&&g&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==g.node||t.focusOffset!==g.offset)&&(r=r.createRange(),r.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(r),t.extend(g.node,g.offset)):(r.setEnd(g.node,g.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dy=f&&"documentMode"in document&&11>=document.documentMode,Or=null,ya=null,Wi=null,wa=!1;function _h(t,r,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;wa||Or==null||Or!==Bs(a)||(a=Or,"selectionStart"in a&&va(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Wi&&ji(Wi,a)||(Wi=a,a=uo(ya,"onSelect"),0<a.length&&(r=new ca("onSelect","select",null,r,o),t.push({event:r,listeners:a}),r.target=Or)))}function oo(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var Lr={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},Ea={},vh={};f&&(vh=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function lo(t){if(Ea[t])return Ea[t];if(!Lr[t])return t;var r=Lr[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in vh)return Ea[t]=r[o];return t}var yh=lo("animationend"),wh=lo("animationiteration"),Eh=lo("animationstart"),Sh=lo("transitionend"),Ch=new Map,Ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rn(t,r){Ch.set(t,r),u(r,[t])}for(var Sa=0;Sa<Ih.length;Sa++){var Ca=Ih[Sa],hy=Ca.toLowerCase(),fy=Ca[0].toUpperCase()+Ca.slice(1);Rn(hy,"on"+fy)}Rn(yh,"onAnimationEnd"),Rn(wh,"onAnimationIteration"),Rn(Eh,"onAnimationStart"),Rn("dblclick","onDoubleClick"),Rn("focusin","onFocus"),Rn("focusout","onBlur"),Rn(Sh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),py=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));function kh(t,r,o){var a=t.type||"unknown-event";t.currentTarget=o,hv(a,r,void 0,t),t.currentTarget=null}function Th(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(r)for(var g=a.length-1;0<=g;g--){var _=a[g],w=_.instance,T=_.currentTarget;if(_=_.listener,w!==h&&c.isPropagationStopped())break e;kh(c,_,T),h=w}else for(g=0;g<a.length;g++){if(_=a[g],w=_.instance,T=_.currentTarget,_=_.listener,w!==h&&c.isPropagationStopped())break e;kh(c,_,T),h=w}}}if(Vs)throw t=ea,Vs=!1,ea=null,t}function Se(t,r){var o=r[xa];o===void 0&&(o=r[xa]=new Set);var a=t+"__bubble";o.has(a)||(Rh(r,t,2,!1),o.add(a))}function Ia(t,r,o){var a=0;r&&(a|=4),Rh(o,t,a,r)}var ao="_reactListening"+Math.random().toString(36).slice(2);function Hi(t){if(!t[ao]){t[ao]=!0,s.forEach(function(o){o!=="selectionchange"&&(py.has(o)||Ia(o,!1,t),Ia(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[ao]||(r[ao]=!0,Ia("selectionchange",!1,r))}}function Rh(t,r,o,a){switch(Qd(r)){case 1:var c=Nv;break;case 4:c=Pv;break;default:c=la}o=c.bind(null,r,o,t),c=void 0,!Zl||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(r,o,{capture:!0,passive:c}):t.addEventListener(r,o,!0):c!==void 0?t.addEventListener(r,o,{passive:c}):t.addEventListener(r,o,!1)}function ka(t,r,o,a,c){var h=a;if(!(r&1)&&!(r&2)&&a!==null)e:for(;;){if(a===null)return;var g=a.tag;if(g===3||g===4){var _=a.stateNode.containerInfo;if(_===c||_.nodeType===8&&_.parentNode===c)break;if(g===4)for(g=a.return;g!==null;){var w=g.tag;if((w===3||w===4)&&(w=g.stateNode.containerInfo,w===c||w.nodeType===8&&w.parentNode===c))return;g=g.return}for(;_!==null;){if(g=rr(_),g===null)return;if(w=g.tag,w===5||w===6){a=h=g;continue e}_=_.parentNode}}a=a.return}Od(function(){var T=h,L=Ql(o),b=[];e:{var A=Ch.get(t);if(A!==void 0){var W=ca,V=t;switch(t){case"keypress":if(no(o)===0)break e;case"keydown":case"keyup":W=$v;break;case"focusin":V="focus",W=fa;break;case"focusout":V="blur",W=fa;break;case"beforeblur":case"afterblur":W=fa;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=Zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=Gv;break;case yh:case wh:case Eh:W=Mv;break;case Sh:W=Yv;break;case"scroll":W=Av;break;case"wheel":W=Jv;break;case"copy":case"cut":case"paste":W=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=th}var K=(r&4)!==0,be=!K&&t==="scroll",I=K?A!==null?A+"Capture":null:A;K=[];for(var S=T,k;S!==null;){k=S;var F=k.stateNode;if(k.tag===5&&F!==null&&(k=F,I!==null&&(F=ki(S,I),F!=null&&K.push($i(S,F,k)))),be)break;S=S.return}0<K.length&&(A=new W(A,V,null,o,L),b.push({event:A,listeners:K}))}}if(!(r&7)){e:{if(A=t==="mouseover"||t==="pointerover",W=t==="mouseout"||t==="pointerout",A&&o!==Yl&&(V=o.relatedTarget||o.fromElement)&&(rr(V)||V[tn]))break e;if((W||A)&&(A=L.window===L?L:(A=L.ownerDocument)?A.defaultView||A.parentWindow:window,W?(V=o.relatedTarget||o.toElement,W=T,V=V?rr(V):null,V!==null&&(be=nr(V),V!==be||V.tag!==5&&V.tag!==6)&&(V=null)):(W=null,V=T),W!==V)){if(K=Zd,F="onMouseLeave",I="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(K=th,F="onPointerLeave",I="onPointerEnter",S="pointer"),be=W==null?A:br(W),k=V==null?A:br(V),A=new K(F,S+"leave",W,o,L),A.target=be,A.relatedTarget=k,F=null,rr(L)===T&&(K=new K(I,S+"enter",V,o,L),K.target=k,K.relatedTarget=be,F=K),be=F,W&&V)t:{for(K=W,I=V,S=0,k=K;k;k=Dr(k))S++;for(k=0,F=I;F;F=Dr(F))k++;for(;0<S-k;)K=Dr(K),S--;for(;0<k-S;)I=Dr(I),k--;for(;S--;){if(K===I||I!==null&&K===I.alternate)break t;K=Dr(K),I=Dr(I)}K=null}else K=null;W!==null&&Nh(b,A,W,K,!1),V!==null&&be!==null&&Nh(b,be,V,K,!0)}}e:{if(A=T?br(T):window,W=A.nodeName&&A.nodeName.toLowerCase(),W==="select"||W==="input"&&A.type==="file")var G=iy;else if(lh(A))if(uh)G=ay;else{G=oy;var q=sy}else(W=A.nodeName)&&W.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(G=ly);if(G&&(G=G(t,T))){ah(b,G,o,L);break e}q&&q(t,A,T),t==="focusout"&&(q=A._wrapperState)&&q.controlled&&A.type==="number"&&$l(A,"number",A.value)}switch(q=T?br(T):window,t){case"focusin":(lh(q)||q.contentEditable==="true")&&(Or=q,ya=T,Wi=null);break;case"focusout":Wi=ya=Or=null;break;case"mousedown":wa=!0;break;case"contextmenu":case"mouseup":case"dragend":wa=!1,_h(b,o,L);break;case"selectionchange":if(dy)break;case"keydown":case"keyup":_h(b,o,L)}var Y;if(ma)e:{switch(t){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else xr?sh(t,o)&&(Z="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Z="onCompositionStart");Z&&(nh&&o.locale!=="ko"&&(xr||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&xr&&(Y=Jd()):(Tn=L,ua="value"in Tn?Tn.value:Tn.textContent,xr=!0)),q=uo(T,Z),0<q.length&&(Z=new eh(Z,t,null,o,L),b.push({event:Z,listeners:q}),Y?Z.data=Y:(Y=oh(o),Y!==null&&(Z.data=Y)))),(Y=Zv?ey(t,o):ty(t,o))&&(T=uo(T,"onBeforeInput"),0<T.length&&(L=new eh("onBeforeInput","beforeinput",null,o,L),b.push({event:L,listeners:T}),L.data=Y))}Th(b,r)})}function $i(t,r,o){return{instance:t,listener:r,currentTarget:o}}function uo(t,r){for(var o=r+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=ki(t,o),h!=null&&a.unshift($i(t,h,c)),h=ki(t,r),h!=null&&a.push($i(t,h,c))),t=t.return}return a}function Dr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nh(t,r,o,a,c){for(var h=r._reactName,g=[];o!==null&&o!==a;){var _=o,w=_.alternate,T=_.stateNode;if(w!==null&&w===a)break;_.tag===5&&T!==null&&(_=T,c?(w=ki(o,h),w!=null&&g.unshift($i(o,w,_))):c||(w=ki(o,h),w!=null&&g.push($i(o,w,_)))),o=o.return}g.length!==0&&t.push({event:r,listeners:g})}var my=/\r\n?/g,gy=/\u0000|\uFFFD/g;function Ph(t){return(typeof t=="string"?t:""+t).replace(my,`
`).replace(gy,"")}function co(t,r,o){if(r=Ph(r),Ph(t)!==r&&o)throw Error(n(425))}function ho(){}var Ta=null,Ra=null;function Na(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Pa=typeof setTimeout=="function"?setTimeout:void 0,_y=typeof clearTimeout=="function"?clearTimeout:void 0,Ah=typeof Promise=="function"?Promise:void 0,vy=typeof queueMicrotask=="function"?queueMicrotask:typeof Ah<"u"?function(t){return Ah.resolve(null).then(t).catch(yy)}:Pa;function yy(t){setTimeout(function(){throw t})}function Aa(t,r){var o=r,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),Di(r);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);Di(r)}function Nn(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function xh(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),Gt="__reactFiber$"+Mr,Vi="__reactProps$"+Mr,tn="__reactContainer$"+Mr,xa="__reactEvents$"+Mr,wy="__reactListeners$"+Mr,Ey="__reactHandles$"+Mr;function rr(t){var r=t[Gt];if(r)return r;for(var o=t.parentNode;o;){if(r=o[tn]||o[Gt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=xh(t);t!==null;){if(o=t[Gt])return o;t=xh(t)}return r}t=o,o=t.parentNode}return null}function Ki(t){return t=t[Gt]||t[tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function br(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function fo(t){return t[Vi]||null}var Oa=[],Fr=-1;function Pn(t){return{current:t}}function Ce(t){0>Fr||(t.current=Oa[Fr],Oa[Fr]=null,Fr--)}function Ee(t,r){Fr++,Oa[Fr]=t.current,t.current=r}var An={},Qe=Pn(An),lt=Pn(!1),ir=An;function Ur(t,r){var o=t.type.contextTypes;if(!o)return An;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=r[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=c),c}function at(t){return t=t.childContextTypes,t!=null}function po(){Ce(lt),Ce(Qe)}function Oh(t,r,o){if(Qe.current!==An)throw Error(n(168));Ee(Qe,r),Ee(lt,o)}function Lh(t,r,o){var a=t.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in r))throw Error(n(108,we(t)||"Unknown",c));return $({},o,a)}function mo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||An,ir=Qe.current,Ee(Qe,t),Ee(lt,lt.current),!0}function Dh(t,r,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Lh(t,r,ir),a.__reactInternalMemoizedMergedChildContext=t,Ce(lt),Ce(Qe),Ee(Qe,t)):Ce(lt),Ee(lt,o)}var nn=null,go=!1,La=!1;function Mh(t){nn===null?nn=[t]:nn.push(t)}function Sy(t){go=!0,Mh(t)}function xn(){if(!La&&nn!==null){La=!0;var t=0,r=pe;try{var o=nn;for(pe=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}nn=null,go=!1}catch(c){throw nn!==null&&(nn=nn.slice(t+1)),Fd(ta,xn),c}finally{pe=r,La=!1}}return null}var zr=[],jr=0,_o=null,vo=0,Et=[],St=0,sr=null,rn=1,sn="";function or(t,r){zr[jr++]=vo,zr[jr++]=_o,_o=t,vo=r}function bh(t,r,o){Et[St++]=rn,Et[St++]=sn,Et[St++]=sr,sr=t;var a=rn;t=sn;var c=32-At(a)-1;a&=~(1<<c),o+=1;var h=32-At(r)+c;if(30<h){var g=c-c%5;h=(a&(1<<g)-1).toString(32),a>>=g,c-=g,rn=1<<32-At(r)+c|o<<c|a,sn=h+t}else rn=1<<h|o<<c|a,sn=t}function Da(t){t.return!==null&&(or(t,1),bh(t,1,0))}function Ma(t){for(;t===_o;)_o=zr[--jr],zr[jr]=null,vo=zr[--jr],zr[jr]=null;for(;t===sr;)sr=Et[--St],Et[St]=null,sn=Et[--St],Et[St]=null,rn=Et[--St],Et[St]=null}var _t=null,vt=null,Ne=!1,Ot=null;function Fh(t,r){var o=Tt(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function Uh(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,_t=t,vt=Nn(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,_t=t,vt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=sr!==null?{id:rn,overflow:sn}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Tt(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,_t=t,vt=null,!0):!1;default:return!1}}function ba(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fa(t){if(Ne){var r=vt;if(r){var o=r;if(!Uh(t,r)){if(ba(t))throw Error(n(418));r=Nn(o.nextSibling);var a=_t;r&&Uh(t,r)?Fh(a,o):(t.flags=t.flags&-4097|2,Ne=!1,_t=t)}}else{if(ba(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ne=!1,_t=t}}}function zh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_t=t}function yo(t){if(t!==_t)return!1;if(!Ne)return zh(t),Ne=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Na(t.type,t.memoizedProps)),r&&(r=vt)){if(ba(t))throw jh(),Error(n(418));for(;r;)Fh(t,r),r=Nn(r.nextSibling)}if(zh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){vt=Nn(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}vt=null}}else vt=_t?Nn(t.stateNode.nextSibling):null;return!0}function jh(){for(var t=vt;t;)t=Nn(t.nextSibling)}function Wr(){vt=_t=null,Ne=!1}function Ua(t){Ot===null?Ot=[t]:Ot.push(t)}var Cy=ee.ReactCurrentBatchConfig;function Gi(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(g){var _=c.refs;g===null?delete _[h]:_[h]=g},r._stringRef=h,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function wo(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Wh(t){var r=t._init;return r(t._payload)}function Bh(t){function r(I,S){if(t){var k=I.deletions;k===null?(I.deletions=[S],I.flags|=16):k.push(S)}}function o(I,S){if(!t)return null;for(;S!==null;)r(I,S),S=S.sibling;return null}function a(I,S){for(I=new Map;S!==null;)S.key!==null?I.set(S.key,S):I.set(S.index,S),S=S.sibling;return I}function c(I,S){return I=zn(I,S),I.index=0,I.sibling=null,I}function h(I,S,k){return I.index=k,t?(k=I.alternate,k!==null?(k=k.index,k<S?(I.flags|=2,S):k):(I.flags|=2,S)):(I.flags|=1048576,S)}function g(I){return t&&I.alternate===null&&(I.flags|=2),I}function _(I,S,k,F){return S===null||S.tag!==6?(S=Pu(k,I.mode,F),S.return=I,S):(S=c(S,k),S.return=I,S)}function w(I,S,k,F){var G=k.type;return G===ve?L(I,S,k.props.children,F,k.key):S!==null&&(S.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===ot&&Wh(G)===S.type)?(F=c(S,k.props),F.ref=Gi(I,S,k),F.return=I,F):(F=$o(k.type,k.key,k.props,null,I.mode,F),F.ref=Gi(I,S,k),F.return=I,F)}function T(I,S,k,F){return S===null||S.tag!==4||S.stateNode.containerInfo!==k.containerInfo||S.stateNode.implementation!==k.implementation?(S=Au(k,I.mode,F),S.return=I,S):(S=c(S,k.children||[]),S.return=I,S)}function L(I,S,k,F,G){return S===null||S.tag!==7?(S=pr(k,I.mode,F,G),S.return=I,S):(S=c(S,k),S.return=I,S)}function b(I,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Pu(""+S,I.mode,k),S.return=I,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case he:return k=$o(S.type,S.key,S.props,null,I.mode,k),k.ref=Gi(I,null,S),k.return=I,k;case _e:return S=Au(S,I.mode,k),S.return=I,S;case ot:var F=S._init;return b(I,F(S._payload),k)}if(Si(S)||J(S))return S=pr(S,I.mode,k,null),S.return=I,S;wo(I,S)}return null}function A(I,S,k,F){var G=S!==null?S.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return G!==null?null:_(I,S,""+k,F);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case he:return k.key===G?w(I,S,k,F):null;case _e:return k.key===G?T(I,S,k,F):null;case ot:return G=k._init,A(I,S,G(k._payload),F)}if(Si(k)||J(k))return G!==null?null:L(I,S,k,F,null);wo(I,k)}return null}function W(I,S,k,F,G){if(typeof F=="string"&&F!==""||typeof F=="number")return I=I.get(k)||null,_(S,I,""+F,G);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case he:return I=I.get(F.key===null?k:F.key)||null,w(S,I,F,G);case _e:return I=I.get(F.key===null?k:F.key)||null,T(S,I,F,G);case ot:var q=F._init;return W(I,S,k,q(F._payload),G)}if(Si(F)||J(F))return I=I.get(k)||null,L(S,I,F,G,null);wo(S,F)}return null}function V(I,S,k,F){for(var G=null,q=null,Y=S,Z=S=0,He=null;Y!==null&&Z<k.length;Z++){Y.index>Z?(He=Y,Y=null):He=Y.sibling;var ce=A(I,Y,k[Z],F);if(ce===null){Y===null&&(Y=He);break}t&&Y&&ce.alternate===null&&r(I,Y),S=h(ce,S,Z),q===null?G=ce:q.sibling=ce,q=ce,Y=He}if(Z===k.length)return o(I,Y),Ne&&or(I,Z),G;if(Y===null){for(;Z<k.length;Z++)Y=b(I,k[Z],F),Y!==null&&(S=h(Y,S,Z),q===null?G=Y:q.sibling=Y,q=Y);return Ne&&or(I,Z),G}for(Y=a(I,Y);Z<k.length;Z++)He=W(Y,I,Z,k[Z],F),He!==null&&(t&&He.alternate!==null&&Y.delete(He.key===null?Z:He.key),S=h(He,S,Z),q===null?G=He:q.sibling=He,q=He);return t&&Y.forEach(function(jn){return r(I,jn)}),Ne&&or(I,Z),G}function K(I,S,k,F){var G=J(k);if(typeof G!="function")throw Error(n(150));if(k=G.call(k),k==null)throw Error(n(151));for(var q=G=null,Y=S,Z=S=0,He=null,ce=k.next();Y!==null&&!ce.done;Z++,ce=k.next()){Y.index>Z?(He=Y,Y=null):He=Y.sibling;var jn=A(I,Y,ce.value,F);if(jn===null){Y===null&&(Y=He);break}t&&Y&&jn.alternate===null&&r(I,Y),S=h(jn,S,Z),q===null?G=jn:q.sibling=jn,q=jn,Y=He}if(ce.done)return o(I,Y),Ne&&or(I,Z),G;if(Y===null){for(;!ce.done;Z++,ce=k.next())ce=b(I,ce.value,F),ce!==null&&(S=h(ce,S,Z),q===null?G=ce:q.sibling=ce,q=ce);return Ne&&or(I,Z),G}for(Y=a(I,Y);!ce.done;Z++,ce=k.next())ce=W(Y,I,Z,ce.value,F),ce!==null&&(t&&ce.alternate!==null&&Y.delete(ce.key===null?Z:ce.key),S=h(ce,S,Z),q===null?G=ce:q.sibling=ce,q=ce);return t&&Y.forEach(function(t0){return r(I,t0)}),Ne&&or(I,Z),G}function be(I,S,k,F){if(typeof k=="object"&&k!==null&&k.type===ve&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case he:e:{for(var G=k.key,q=S;q!==null;){if(q.key===G){if(G=k.type,G===ve){if(q.tag===7){o(I,q.sibling),S=c(q,k.props.children),S.return=I,I=S;break e}}else if(q.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===ot&&Wh(G)===q.type){o(I,q.sibling),S=c(q,k.props),S.ref=Gi(I,q,k),S.return=I,I=S;break e}o(I,q);break}else r(I,q);q=q.sibling}k.type===ve?(S=pr(k.props.children,I.mode,F,k.key),S.return=I,I=S):(F=$o(k.type,k.key,k.props,null,I.mode,F),F.ref=Gi(I,S,k),F.return=I,I=F)}return g(I);case _e:e:{for(q=k.key;S!==null;){if(S.key===q)if(S.tag===4&&S.stateNode.containerInfo===k.containerInfo&&S.stateNode.implementation===k.implementation){o(I,S.sibling),S=c(S,k.children||[]),S.return=I,I=S;break e}else{o(I,S);break}else r(I,S);S=S.sibling}S=Au(k,I.mode,F),S.return=I,I=S}return g(I);case ot:return q=k._init,be(I,S,q(k._payload),F)}if(Si(k))return V(I,S,k,F);if(J(k))return K(I,S,k,F);wo(I,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,S!==null&&S.tag===6?(o(I,S.sibling),S=c(S,k),S.return=I,I=S):(o(I,S),S=Pu(k,I.mode,F),S.return=I,I=S),g(I)):o(I,S)}return be}var Br=Bh(!0),Hh=Bh(!1),Eo=Pn(null),So=null,Hr=null,za=null;function ja(){za=Hr=So=null}function Wa(t){var r=Eo.current;Ce(Eo),t._currentValue=r}function Ba(t,r,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),t===o)break;t=t.return}}function $r(t,r){So=t,za=Hr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(ut=!0),t.firstContext=null)}function Ct(t){var r=t._currentValue;if(za!==t)if(t={context:t,memoizedValue:r,next:null},Hr===null){if(So===null)throw Error(n(308));Hr=t,So.dependencies={lanes:0,firstContext:t}}else Hr=Hr.next=t;return r}var lr=null;function Ha(t){lr===null?lr=[t]:lr.push(t)}function $h(t,r,o,a){var c=r.interleaved;return c===null?(o.next=o,Ha(r)):(o.next=c.next,c.next=o),r.interleaved=o,on(t,a)}function on(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var On=!1;function $a(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vh(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ln(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Ln(t,r,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,le&2){var c=a.pending;return c===null?r.next=r:(r.next=c.next,c.next=r),a.pending=r,on(t,o)}return c=a.interleaved,c===null?(r.next=r,Ha(a)):(r.next=c.next,c.next=r),a.interleaved=r,on(t,o)}function Co(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,ia(t,o)}}function Kh(t,r){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var g={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=g:h=h.next=g,o=o.next}while(o!==null);h===null?c=h=r:h=h.next=r}else c=h=r;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function Io(t,r,o,a){var c=t.updateQueue;On=!1;var h=c.firstBaseUpdate,g=c.lastBaseUpdate,_=c.shared.pending;if(_!==null){c.shared.pending=null;var w=_,T=w.next;w.next=null,g===null?h=T:g.next=T,g=w;var L=t.alternate;L!==null&&(L=L.updateQueue,_=L.lastBaseUpdate,_!==g&&(_===null?L.firstBaseUpdate=T:_.next=T,L.lastBaseUpdate=w))}if(h!==null){var b=c.baseState;g=0,L=T=w=null,_=h;do{var A=_.lane,W=_.eventTime;if((a&A)===A){L!==null&&(L=L.next={eventTime:W,lane:0,tag:_.tag,payload:_.payload,callback:_.callback,next:null});e:{var V=t,K=_;switch(A=r,W=o,K.tag){case 1:if(V=K.payload,typeof V=="function"){b=V.call(W,b,A);break e}b=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=K.payload,A=typeof V=="function"?V.call(W,b,A):V,A==null)break e;b=$({},b,A);break e;case 2:On=!0}}_.callback!==null&&_.lane!==0&&(t.flags|=64,A=c.effects,A===null?c.effects=[_]:A.push(_))}else W={eventTime:W,lane:A,tag:_.tag,payload:_.payload,callback:_.callback,next:null},L===null?(T=L=W,w=b):L=L.next=W,g|=A;if(_=_.next,_===null){if(_=c.shared.pending,_===null)break;A=_,_=A.next,A.next=null,c.lastBaseUpdate=A,c.shared.pending=null}}while(!0);if(L===null&&(w=b),c.baseState=w,c.firstBaseUpdate=T,c.lastBaseUpdate=L,r=c.shared.interleaved,r!==null){c=r;do g|=c.lane,c=c.next;while(c!==r)}else h===null&&(c.shared.lanes=0);cr|=g,t.lanes=g,t.memoizedState=b}}function Gh(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var a=t[r],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var qi={},qt=Pn(qi),Yi=Pn(qi),Qi=Pn(qi);function ar(t){if(t===qi)throw Error(n(174));return t}function Va(t,r){switch(Ee(Qi,r),Ee(Yi,t),Ee(qt,qi),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Kl(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=Kl(r,t)}Ce(qt),Ee(qt,r)}function Vr(){Ce(qt),Ce(Yi),Ce(Qi)}function qh(t){ar(Qi.current);var r=ar(qt.current),o=Kl(r,t.type);r!==o&&(Ee(Yi,t),Ee(qt,o))}function Ka(t){Yi.current===t&&(Ce(qt),Ce(Yi))}var Ae=Pn(0);function ko(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ga=[];function qa(){for(var t=0;t<Ga.length;t++)Ga[t]._workInProgressVersionPrimary=null;Ga.length=0}var To=ee.ReactCurrentDispatcher,Ya=ee.ReactCurrentBatchConfig,ur=0,xe=null,ze=null,We=null,Ro=!1,Ji=!1,Xi=0,Iy=0;function Je(){throw Error(n(321))}function Qa(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!xt(t[o],r[o]))return!1;return!0}function Ja(t,r,o,a,c,h){if(ur=h,xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,To.current=t===null||t.memoizedState===null?Ny:Py,t=o(a,c),Ji){h=0;do{if(Ji=!1,Xi=0,25<=h)throw Error(n(301));h+=1,We=ze=null,r.updateQueue=null,To.current=Ay,t=o(a,c)}while(Ji)}if(To.current=Ao,r=ze!==null&&ze.next!==null,ur=0,We=ze=xe=null,Ro=!1,r)throw Error(n(300));return t}function Xa(){var t=Xi!==0;return Xi=0,t}function Yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?xe.memoizedState=We=t:We=We.next=t,We}function It(){if(ze===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var r=We===null?xe.memoizedState:We.next;if(r!==null)We=r,ze=t;else{if(t===null)throw Error(n(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},We===null?xe.memoizedState=We=t:We=We.next=t}return We}function Zi(t,r){return typeof r=="function"?r(t):r}function Za(t){var r=It(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=ze,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var g=c.next;c.next=h.next,h.next=g}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var _=g=null,w=null,T=h;do{var L=T.lane;if((ur&L)===L)w!==null&&(w=w.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),a=T.hasEagerState?T.eagerState:t(a,T.action);else{var b={lane:L,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};w===null?(_=w=b,g=a):w=w.next=b,xe.lanes|=L,cr|=L}T=T.next}while(T!==null&&T!==h);w===null?g=a:w.next=_,xt(a,r.memoizedState)||(ut=!0),r.memoizedState=a,r.baseState=g,r.baseQueue=w,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,xe.lanes|=h,cr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function eu(t){var r=It(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=r.memoizedState;if(c!==null){o.pending=null;var g=c=c.next;do h=t(h,g.action),g=g.next;while(g!==c);xt(h,r.memoizedState)||(ut=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),o.lastRenderedState=h}return[h,a]}function Yh(){}function Qh(t,r){var o=xe,a=It(),c=r(),h=!xt(a.memoizedState,c);if(h&&(a.memoizedState=c,ut=!0),a=a.queue,tu(Zh.bind(null,o,a,t),[t]),a.getSnapshot!==r||h||We!==null&&We.memoizedState.tag&1){if(o.flags|=2048,es(9,Xh.bind(null,o,a,c,r),void 0,null),Be===null)throw Error(n(349));ur&30||Jh(o,r,c)}return c}function Jh(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=xe.updateQueue,r===null?(r={lastEffect:null,stores:null},xe.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function Xh(t,r,o,a){r.value=o,r.getSnapshot=a,ef(r)&&tf(t)}function Zh(t,r,o){return o(function(){ef(r)&&tf(t)})}function ef(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!xt(t,o)}catch{return!0}}function tf(t){var r=on(t,1);r!==null&&bt(r,t,1,-1)}function nf(t){var r=Yt();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:t},r.queue=t,t=t.dispatch=Ry.bind(null,xe,t),[r.memoizedState,t]}function es(t,r,o,a){return t={tag:t,create:r,destroy:o,deps:a,next:null},r=xe.updateQueue,r===null?(r={lastEffect:null,stores:null},xe.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,r.lastEffect=t)),t}function rf(){return It().memoizedState}function No(t,r,o,a){var c=Yt();xe.flags|=t,c.memoizedState=es(1|r,o,void 0,a===void 0?null:a)}function Po(t,r,o,a){var c=It();a=a===void 0?null:a;var h=void 0;if(ze!==null){var g=ze.memoizedState;if(h=g.destroy,a!==null&&Qa(a,g.deps)){c.memoizedState=es(r,o,h,a);return}}xe.flags|=t,c.memoizedState=es(1|r,o,h,a)}function sf(t,r){return No(8390656,8,t,r)}function tu(t,r){return Po(2048,8,t,r)}function of(t,r){return Po(4,2,t,r)}function lf(t,r){return Po(4,4,t,r)}function af(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function uf(t,r,o){return o=o!=null?o.concat([t]):null,Po(4,4,af.bind(null,r,t),o)}function nu(){}function cf(t,r){var o=It();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&Qa(r,a[1])?a[0]:(o.memoizedState=[t,r],t)}function df(t,r){var o=It();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&Qa(r,a[1])?a[0]:(t=t(),o.memoizedState=[t,r],t)}function hf(t,r,o){return ur&21?(xt(o,r)||(o=Wd(),xe.lanes|=o,cr|=o,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,ut=!0),t.memoizedState=o)}function ky(t,r){var o=pe;pe=o!==0&&4>o?o:4,t(!0);var a=Ya.transition;Ya.transition={};try{t(!1),r()}finally{pe=o,Ya.transition=a}}function ff(){return It().memoizedState}function Ty(t,r,o){var a=Fn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},pf(t))mf(r,o);else if(o=$h(t,r,o,a),o!==null){var c=it();bt(o,t,a,c),gf(o,r,a)}}function Ry(t,r,o){var a=Fn(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(pf(t))mf(r,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var g=r.lastRenderedState,_=h(g,o);if(c.hasEagerState=!0,c.eagerState=_,xt(_,g)){var w=r.interleaved;w===null?(c.next=c,Ha(r)):(c.next=w.next,w.next=c),r.interleaved=c;return}}catch{}finally{}o=$h(t,r,c,a),o!==null&&(c=it(),bt(o,t,a,c),gf(o,r,a))}}function pf(t){var r=t.alternate;return t===xe||r!==null&&r===xe}function mf(t,r){Ji=Ro=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function gf(t,r,o){if(o&4194240){var a=r.lanes;a&=t.pendingLanes,o|=a,r.lanes=o,ia(t,o)}}var Ao={readContext:Ct,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},Ny={readContext:Ct,useCallback:function(t,r){return Yt().memoizedState=[t,r===void 0?null:r],t},useContext:Ct,useEffect:sf,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,No(4194308,4,af.bind(null,r,t),o)},useLayoutEffect:function(t,r){return No(4194308,4,t,r)},useInsertionEffect:function(t,r){return No(4,2,t,r)},useMemo:function(t,r){var o=Yt();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var a=Yt();return r=o!==void 0?o(r):r,a.memoizedState=a.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},a.queue=t,t=t.dispatch=Ty.bind(null,xe,t),[a.memoizedState,t]},useRef:function(t){var r=Yt();return t={current:t},r.memoizedState=t},useState:nf,useDebugValue:nu,useDeferredValue:function(t){return Yt().memoizedState=t},useTransition:function(){var t=nf(!1),r=t[0];return t=ky.bind(null,t[1]),Yt().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var a=xe,c=Yt();if(Ne){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),Be===null)throw Error(n(349));ur&30||Jh(a,r,o)}c.memoizedState=o;var h={value:o,getSnapshot:r};return c.queue=h,sf(Zh.bind(null,a,h,t),[t]),a.flags|=2048,es(9,Xh.bind(null,a,h,o,r),void 0,null),o},useId:function(){var t=Yt(),r=Be.identifierPrefix;if(Ne){var o=sn,a=rn;o=(a&~(1<<32-At(a)-1)).toString(32)+o,r=":"+r+"R"+o,o=Xi++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Iy++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Py={readContext:Ct,useCallback:cf,useContext:Ct,useEffect:tu,useImperativeHandle:uf,useInsertionEffect:of,useLayoutEffect:lf,useMemo:df,useReducer:Za,useRef:rf,useState:function(){return Za(Zi)},useDebugValue:nu,useDeferredValue:function(t){var r=It();return hf(r,ze.memoizedState,t)},useTransition:function(){var t=Za(Zi)[0],r=It().memoizedState;return[t,r]},useMutableSource:Yh,useSyncExternalStore:Qh,useId:ff,unstable_isNewReconciler:!1},Ay={readContext:Ct,useCallback:cf,useContext:Ct,useEffect:tu,useImperativeHandle:uf,useInsertionEffect:of,useLayoutEffect:lf,useMemo:df,useReducer:eu,useRef:rf,useState:function(){return eu(Zi)},useDebugValue:nu,useDeferredValue:function(t){var r=It();return ze===null?r.memoizedState=t:hf(r,ze.memoizedState,t)},useTransition:function(){var t=eu(Zi)[0],r=It().memoizedState;return[t,r]},useMutableSource:Yh,useSyncExternalStore:Qh,useId:ff,unstable_isNewReconciler:!1};function Lt(t,r){if(t&&t.defaultProps){r=$({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function ru(t,r,o,a){r=t.memoizedState,o=o(a,r),o=o==null?r:$({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var xo={isMounted:function(t){return(t=t._reactInternals)?nr(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var a=it(),c=Fn(t),h=ln(a,c);h.payload=r,o!=null&&(h.callback=o),r=Ln(t,h,c),r!==null&&(bt(r,t,c,a),Co(r,t,c))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var a=it(),c=Fn(t),h=ln(a,c);h.tag=1,h.payload=r,o!=null&&(h.callback=o),r=Ln(t,h,c),r!==null&&(bt(r,t,c,a),Co(r,t,c))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=it(),a=Fn(t),c=ln(o,a);c.tag=2,r!=null&&(c.callback=r),r=Ln(t,c,a),r!==null&&(bt(r,t,a,o),Co(r,t,a))}};function _f(t,r,o,a,c,h,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,g):r.prototype&&r.prototype.isPureReactComponent?!ji(o,a)||!ji(c,h):!0}function vf(t,r,o){var a=!1,c=An,h=r.contextType;return typeof h=="object"&&h!==null?h=Ct(h):(c=at(r)?ir:Qe.current,a=r.contextTypes,h=(a=a!=null)?Ur(t,c):An),r=new r(o,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=xo,t.stateNode=r,r._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),r}function yf(t,r,o,a){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,a),r.state!==t&&xo.enqueueReplaceState(r,r.state,null)}function iu(t,r,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},$a(t);var h=r.contextType;typeof h=="object"&&h!==null?c.context=Ct(h):(h=at(r)?ir:Qe.current,c.context=Ur(t,h)),c.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(ru(t,r,h,o),c.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(r=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),r!==c.state&&xo.enqueueReplaceState(c,c.state,null),Io(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function Kr(t,r){try{var o="",a=r;do o+=ae(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:c,digest:null}}function su(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function ou(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var xy=typeof WeakMap=="function"?WeakMap:Map;function wf(t,r,o){o=ln(-1,o),o.tag=3,o.payload={element:null};var a=r.value;return o.callback=function(){Uo||(Uo=!0,Eu=a),ou(t,r)},o}function Ef(t,r,o){o=ln(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=r.value;o.payload=function(){return a(c)},o.callback=function(){ou(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){ou(t,r),typeof a!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var g=r.stack;this.componentDidCatch(r.value,{componentStack:g!==null?g:""})}),o}function Sf(t,r,o){var a=t.pingCache;if(a===null){a=t.pingCache=new xy;var c=new Set;a.set(r,c)}else c=a.get(r),c===void 0&&(c=new Set,a.set(r,c));c.has(o)||(c.add(o),t=Vy.bind(null,t,r,o),r.then(t,t))}function Cf(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function If(t,r,o,a,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=ln(-1,1),r.tag=2,Ln(o,r,1))),o.lanes|=1),t)}var Oy=ee.ReactCurrentOwner,ut=!1;function rt(t,r,o,a){r.child=t===null?Hh(r,null,o,a):Br(r,t.child,o,a)}function kf(t,r,o,a,c){o=o.render;var h=r.ref;return $r(r,c),a=Ja(t,r,o,a,h,c),o=Xa(),t!==null&&!ut?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,an(t,r,c)):(Ne&&o&&Da(r),r.flags|=1,rt(t,r,a,c),r.child)}function Tf(t,r,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!Nu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=h,Rf(t,r,h,a,c)):(t=$o(o.type,null,a,r,r.mode,c),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,!(t.lanes&c)){var g=h.memoizedProps;if(o=o.compare,o=o!==null?o:ji,o(g,a)&&t.ref===r.ref)return an(t,r,c)}return r.flags|=1,t=zn(h,a),t.ref=r.ref,t.return=r,r.child=t}function Rf(t,r,o,a,c){if(t!==null){var h=t.memoizedProps;if(ji(h,a)&&t.ref===r.ref)if(ut=!1,r.pendingProps=a=h,(t.lanes&c)!==0)t.flags&131072&&(ut=!0);else return r.lanes=t.lanes,an(t,r,c)}return lu(t,r,o,a,c)}function Nf(t,r,o){var a=r.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(qr,yt),yt|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Ee(qr,yt),yt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,Ee(qr,yt),yt|=a}else h!==null?(a=h.baseLanes|o,r.memoizedState=null):a=o,Ee(qr,yt),yt|=a;return rt(t,r,c,o),r.child}function Pf(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function lu(t,r,o,a,c){var h=at(o)?ir:Qe.current;return h=Ur(r,h),$r(r,c),o=Ja(t,r,o,a,h,c),a=Xa(),t!==null&&!ut?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,an(t,r,c)):(Ne&&a&&Da(r),r.flags|=1,rt(t,r,o,c),r.child)}function Af(t,r,o,a,c){if(at(o)){var h=!0;mo(r)}else h=!1;if($r(r,c),r.stateNode===null)Lo(t,r),vf(r,o,a),iu(r,o,a,c),a=!0;else if(t===null){var g=r.stateNode,_=r.memoizedProps;g.props=_;var w=g.context,T=o.contextType;typeof T=="object"&&T!==null?T=Ct(T):(T=at(o)?ir:Qe.current,T=Ur(r,T));var L=o.getDerivedStateFromProps,b=typeof L=="function"||typeof g.getSnapshotBeforeUpdate=="function";b||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(_!==a||w!==T)&&yf(r,g,a,T),On=!1;var A=r.memoizedState;g.state=A,Io(r,a,g,c),w=r.memoizedState,_!==a||A!==w||lt.current||On?(typeof L=="function"&&(ru(r,o,L,a),w=r.memoizedState),(_=On||_f(r,o,_,a,A,w,T))?(b||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(r.flags|=4194308)):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=w),g.props=a,g.state=w,g.context=T,a=_):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{g=r.stateNode,Vh(t,r),_=r.memoizedProps,T=r.type===r.elementType?_:Lt(r.type,_),g.props=T,b=r.pendingProps,A=g.context,w=o.contextType,typeof w=="object"&&w!==null?w=Ct(w):(w=at(o)?ir:Qe.current,w=Ur(r,w));var W=o.getDerivedStateFromProps;(L=typeof W=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(_!==b||A!==w)&&yf(r,g,a,w),On=!1,A=r.memoizedState,g.state=A,Io(r,a,g,c);var V=r.memoizedState;_!==b||A!==V||lt.current||On?(typeof W=="function"&&(ru(r,o,W,a),V=r.memoizedState),(T=On||_f(r,o,T,a,A,V,w)||!1)?(L||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(a,V,w),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(a,V,w)),typeof g.componentDidUpdate=="function"&&(r.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof g.componentDidUpdate!="function"||_===t.memoizedProps&&A===t.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&A===t.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=V),g.props=a,g.state=V,g.context=w,a=T):(typeof g.componentDidUpdate!="function"||_===t.memoizedProps&&A===t.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&A===t.memoizedState||(r.flags|=1024),a=!1)}return au(t,r,o,a,h,c)}function au(t,r,o,a,c,h){Pf(t,r);var g=(r.flags&128)!==0;if(!a&&!g)return c&&Dh(r,o,!1),an(t,r,h);a=r.stateNode,Oy.current=r;var _=g&&typeof o.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,t!==null&&g?(r.child=Br(r,t.child,null,h),r.child=Br(r,null,_,h)):rt(t,r,_,h),r.memoizedState=a.state,c&&Dh(r,o,!0),r.child}function xf(t){var r=t.stateNode;r.pendingContext?Oh(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Oh(t,r.context,!1),Va(t,r.containerInfo)}function Of(t,r,o,a,c){return Wr(),Ua(c),r.flags|=256,rt(t,r,o,a),r.child}var uu={dehydrated:null,treeContext:null,retryLane:0};function cu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Lf(t,r,o){var a=r.pendingProps,c=Ae.current,h=!1,g=(r.flags&128)!==0,_;if((_=g)||(_=t!==null&&t.memoizedState===null?!1:(c&2)!==0),_?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Ee(Ae,c&1),t===null)return Fa(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(g=a.children,t=a.fallback,h?(a=r.mode,h=r.child,g={mode:"hidden",children:g},!(a&1)&&h!==null?(h.childLanes=0,h.pendingProps=g):h=Vo(g,a,0,null),t=pr(t,a,o,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=cu(o),r.memoizedState=uu,t):du(r,g));if(c=t.memoizedState,c!==null&&(_=c.dehydrated,_!==null))return Ly(t,r,g,a,_,c,o);if(h){h=a.fallback,g=r.mode,c=t.child,_=c.sibling;var w={mode:"hidden",children:a.children};return!(g&1)&&r.child!==c?(a=r.child,a.childLanes=0,a.pendingProps=w,r.deletions=null):(a=zn(c,w),a.subtreeFlags=c.subtreeFlags&14680064),_!==null?h=zn(_,h):(h=pr(h,g,o,null),h.flags|=2),h.return=r,a.return=r,a.sibling=h,r.child=a,a=h,h=r.child,g=t.child.memoizedState,g=g===null?cu(o):{baseLanes:g.baseLanes|o,cachePool:null,transitions:g.transitions},h.memoizedState=g,h.childLanes=t.childLanes&~o,r.memoizedState=uu,a}return h=t.child,t=h.sibling,a=zn(h,{mode:"visible",children:a.children}),!(r.mode&1)&&(a.lanes=o),a.return=r,a.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=a,r.memoizedState=null,a}function du(t,r){return r=Vo({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Oo(t,r,o,a){return a!==null&&Ua(a),Br(r,t.child,null,o),t=du(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Ly(t,r,o,a,c,h,g){if(o)return r.flags&256?(r.flags&=-257,a=su(Error(n(422))),Oo(t,r,g,a)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=a.fallback,c=r.mode,a=Vo({mode:"visible",children:a.children},c,0,null),h=pr(h,c,g,null),h.flags|=2,a.return=r,h.return=r,a.sibling=h,r.child=a,r.mode&1&&Br(r,t.child,null,g),r.child.memoizedState=cu(g),r.memoizedState=uu,h);if(!(r.mode&1))return Oo(t,r,g,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var _=a.dgst;return a=_,h=Error(n(419)),a=su(h,a,void 0),Oo(t,r,g,a)}if(_=(g&t.childLanes)!==0,ut||_){if(a=Be,a!==null){switch(g&-g){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(a.suspendedLanes|g)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,on(t,c),bt(a,t,c,-1))}return Ru(),a=su(Error(n(421))),Oo(t,r,g,a)}return c.data==="$?"?(r.flags|=128,r.child=t.child,r=Ky.bind(null,t),c._reactRetry=r,null):(t=h.treeContext,vt=Nn(c.nextSibling),_t=r,Ne=!0,Ot=null,t!==null&&(Et[St++]=rn,Et[St++]=sn,Et[St++]=sr,rn=t.id,sn=t.overflow,sr=r),r=du(r,a.children),r.flags|=4096,r)}function Df(t,r,o){t.lanes|=r;var a=t.alternate;a!==null&&(a.lanes|=r),Ba(t.return,r,o)}function hu(t,r,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function Mf(t,r,o){var a=r.pendingProps,c=a.revealOrder,h=a.tail;if(rt(t,r,a.children,o),a=Ae.current,a&2)a=a&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Df(t,o,r);else if(t.tag===19)Df(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(Ee(Ae,a),!(r.mode&1))r.memoizedState=null;else switch(c){case"forwards":for(o=r.child,c=null;o!==null;)t=o.alternate,t!==null&&ko(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=r.child,r.child=null):(c=o.sibling,o.sibling=null),hu(r,!1,c,o,h);break;case"backwards":for(o=null,c=r.child,r.child=null;c!==null;){if(t=c.alternate,t!==null&&ko(t)===null){r.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}hu(r,!0,o,null,h);break;case"together":hu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Lo(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function an(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),cr|=r.lanes,!(o&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=zn(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=zn(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function Dy(t,r,o){switch(r.tag){case 3:xf(r),Wr();break;case 5:qh(r);break;case 1:at(r.type)&&mo(r);break;case 4:Va(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,c=r.memoizedProps.value;Ee(Eo,a._currentValue),a._currentValue=c;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(Ee(Ae,Ae.current&1),r.flags|=128,null):o&r.child.childLanes?Lf(t,r,o):(Ee(Ae,Ae.current&1),t=an(t,r,o),t!==null?t.sibling:null);Ee(Ae,Ae.current&1);break;case 19:if(a=(o&r.childLanes)!==0,t.flags&128){if(a)return Mf(t,r,o);r.flags|=128}if(c=r.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ee(Ae,Ae.current),a)break;return null;case 22:case 23:return r.lanes=0,Nf(t,r,o)}return an(t,r,o)}var bf,fu,Ff,Uf;bf=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},fu=function(){},Ff=function(t,r,o,a){var c=t.memoizedProps;if(c!==a){t=r.stateNode,ar(qt.current);var h=null;switch(o){case"input":c=Bl(t,c),a=Bl(t,a),h=[];break;case"select":c=$({},c,{value:void 0}),a=$({},a,{value:void 0}),h=[];break;case"textarea":c=Vl(t,c),a=Vl(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=ho)}Gl(o,a);var g;o=null;for(T in c)if(!a.hasOwnProperty(T)&&c.hasOwnProperty(T)&&c[T]!=null)if(T==="style"){var _=c[T];for(g in _)_.hasOwnProperty(g)&&(o||(o={}),o[g]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(l.hasOwnProperty(T)?h||(h=[]):(h=h||[]).push(T,null));for(T in a){var w=a[T];if(_=c!=null?c[T]:void 0,a.hasOwnProperty(T)&&w!==_&&(w!=null||_!=null))if(T==="style")if(_){for(g in _)!_.hasOwnProperty(g)||w&&w.hasOwnProperty(g)||(o||(o={}),o[g]="");for(g in w)w.hasOwnProperty(g)&&_[g]!==w[g]&&(o||(o={}),o[g]=w[g])}else o||(h||(h=[]),h.push(T,o)),o=w;else T==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,_=_?_.__html:void 0,w!=null&&_!==w&&(h=h||[]).push(T,w)):T==="children"?typeof w!="string"&&typeof w!="number"||(h=h||[]).push(T,""+w):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(l.hasOwnProperty(T)?(w!=null&&T==="onScroll"&&Se("scroll",t),h||_===w||(h=[])):(h=h||[]).push(T,w))}o&&(h=h||[]).push("style",o);var T=h;(r.updateQueue=T)&&(r.flags|=4)}},Uf=function(t,r,o,a){o!==a&&(r.flags|=4)};function ts(t,r){if(!Ne)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Xe(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(r)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,r}function My(t,r,o){var a=r.pendingProps;switch(Ma(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(r),null;case 1:return at(r.type)&&po(),Xe(r),null;case 3:return a=r.stateNode,Vr(),Ce(lt),Ce(Qe),qa(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(yo(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Ot!==null&&(Iu(Ot),Ot=null))),fu(t,r),Xe(r),null;case 5:Ka(r);var c=ar(Qi.current);if(o=r.type,t!==null&&r.stateNode!=null)Ff(t,r,o,a,c),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(n(166));return Xe(r),null}if(t=ar(qt.current),yo(r)){a=r.stateNode,o=r.type;var h=r.memoizedProps;switch(a[Gt]=r,a[Vi]=h,t=(r.mode&1)!==0,o){case"dialog":Se("cancel",a),Se("close",a);break;case"iframe":case"object":case"embed":Se("load",a);break;case"video":case"audio":for(c=0;c<Bi.length;c++)Se(Bi[c],a);break;case"source":Se("error",a);break;case"img":case"image":case"link":Se("error",a),Se("load",a);break;case"details":Se("toggle",a);break;case"input":_d(a,h),Se("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Se("invalid",a);break;case"textarea":wd(a,h),Se("invalid",a)}Gl(o,h),c=null;for(var g in h)if(h.hasOwnProperty(g)){var _=h[g];g==="children"?typeof _=="string"?a.textContent!==_&&(h.suppressHydrationWarning!==!0&&co(a.textContent,_,t),c=["children",_]):typeof _=="number"&&a.textContent!==""+_&&(h.suppressHydrationWarning!==!0&&co(a.textContent,_,t),c=["children",""+_]):l.hasOwnProperty(g)&&_!=null&&g==="onScroll"&&Se("scroll",a)}switch(o){case"input":Ws(a),yd(a,h,!0);break;case"textarea":Ws(a),Sd(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=ho)}a=c,r.updateQueue=a,a!==null&&(r.flags|=4)}else{g=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cd(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=g.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=g.createElement(o,{is:a.is}):(t=g.createElement(o),o==="select"&&(g=t,a.multiple?g.multiple=!0:a.size&&(g.size=a.size))):t=g.createElementNS(t,o),t[Gt]=r,t[Vi]=a,bf(t,r,!1,!1),r.stateNode=t;e:{switch(g=ql(o,a),o){case"dialog":Se("cancel",t),Se("close",t),c=a;break;case"iframe":case"object":case"embed":Se("load",t),c=a;break;case"video":case"audio":for(c=0;c<Bi.length;c++)Se(Bi[c],t);c=a;break;case"source":Se("error",t),c=a;break;case"img":case"image":case"link":Se("error",t),Se("load",t),c=a;break;case"details":Se("toggle",t),c=a;break;case"input":_d(t,a),c=Bl(t,a),Se("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=$({},a,{value:void 0}),Se("invalid",t);break;case"textarea":wd(t,a),c=Vl(t,a),Se("invalid",t);break;default:c=a}Gl(o,c),_=c;for(h in _)if(_.hasOwnProperty(h)){var w=_[h];h==="style"?Td(t,w):h==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,w!=null&&Id(t,w)):h==="children"?typeof w=="string"?(o!=="textarea"||w!=="")&&Ci(t,w):typeof w=="number"&&Ci(t,""+w):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?w!=null&&h==="onScroll"&&Se("scroll",t):w!=null&&Q(t,h,w,g))}switch(o){case"input":Ws(t),yd(t,a,!1);break;case"textarea":Ws(t),Sd(t);break;case"option":a.value!=null&&t.setAttribute("value",""+fe(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Tr(t,!!a.multiple,h,!1):a.defaultValue!=null&&Tr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=ho)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Xe(r),null;case 6:if(t&&r.stateNode!=null)Uf(t,r,t.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(n(166));if(o=ar(Qi.current),ar(qt.current),yo(r)){if(a=r.stateNode,o=r.memoizedProps,a[Gt]=r,(h=a.nodeValue!==o)&&(t=_t,t!==null))switch(t.tag){case 3:co(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&co(a.nodeValue,o,(t.mode&1)!==0)}h&&(r.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Gt]=r,r.stateNode=a}return Xe(r),null;case 13:if(Ce(Ae),a=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&vt!==null&&r.mode&1&&!(r.flags&128))jh(),Wr(),r.flags|=98560,h=!1;else if(h=yo(r),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[Gt]=r}else Wr(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Xe(r),h=!1}else Ot!==null&&(Iu(Ot),Ot=null),h=!0;if(!h)return r.flags&65536?r:null}return r.flags&128?(r.lanes=o,r):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(r.child.flags|=8192,r.mode&1&&(t===null||Ae.current&1?je===0&&(je=3):Ru())),r.updateQueue!==null&&(r.flags|=4),Xe(r),null);case 4:return Vr(),fu(t,r),t===null&&Hi(r.stateNode.containerInfo),Xe(r),null;case 10:return Wa(r.type._context),Xe(r),null;case 17:return at(r.type)&&po(),Xe(r),null;case 19:if(Ce(Ae),h=r.memoizedState,h===null)return Xe(r),null;if(a=(r.flags&128)!==0,g=h.rendering,g===null)if(a)ts(h,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(g=ko(t),g!==null){for(r.flags|=128,ts(h,!1),a=g.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=o,o=r.child;o!==null;)h=o,t=a,h.flags&=14680066,g=h.alternate,g===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=g.childLanes,h.lanes=g.lanes,h.child=g.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=g.memoizedProps,h.memoizedState=g.memoizedState,h.updateQueue=g.updateQueue,h.type=g.type,t=g.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ee(Ae,Ae.current&1|2),r.child}t=t.sibling}h.tail!==null&&Me()>Yr&&(r.flags|=128,a=!0,ts(h,!1),r.lanes=4194304)}else{if(!a)if(t=ko(g),t!==null){if(r.flags|=128,a=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),ts(h,!0),h.tail===null&&h.tailMode==="hidden"&&!g.alternate&&!Ne)return Xe(r),null}else 2*Me()-h.renderingStartTime>Yr&&o!==1073741824&&(r.flags|=128,a=!0,ts(h,!1),r.lanes=4194304);h.isBackwards?(g.sibling=r.child,r.child=g):(o=h.last,o!==null?o.sibling=g:r.child=g,h.last=g)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Me(),r.sibling=null,o=Ae.current,Ee(Ae,a?o&1|2:o&1),r):(Xe(r),null);case 22:case 23:return Tu(),a=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(r.flags|=8192),a&&r.mode&1?yt&1073741824&&(Xe(r),r.subtreeFlags&6&&(r.flags|=8192)):Xe(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function by(t,r){switch(Ma(r),r.tag){case 1:return at(r.type)&&po(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Vr(),Ce(lt),Ce(Qe),qa(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return Ka(r),null;case 13:if(Ce(Ae),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Wr()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return Ce(Ae),null;case 4:return Vr(),null;case 10:return Wa(r.type._context),null;case 22:case 23:return Tu(),null;case 24:return null;default:return null}}var Do=!1,Ze=!1,Fy=typeof WeakSet=="function"?WeakSet:Set,B=null;function Gr(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){De(t,r,a)}else o.current=null}function pu(t,r,o){try{o()}catch(a){De(t,r,a)}}var zf=!1;function Uy(t,r){if(Ta=Zs,t=gh(),va(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var g=0,_=-1,w=-1,T=0,L=0,b=t,A=null;t:for(;;){for(var W;b!==o||c!==0&&b.nodeType!==3||(_=g+c),b!==h||a!==0&&b.nodeType!==3||(w=g+a),b.nodeType===3&&(g+=b.nodeValue.length),(W=b.firstChild)!==null;)A=b,b=W;for(;;){if(b===t)break t;if(A===o&&++T===c&&(_=g),A===h&&++L===a&&(w=g),(W=b.nextSibling)!==null)break;b=A,A=b.parentNode}b=W}o=_===-1||w===-1?null:{start:_,end:w}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ra={focusedElem:t,selectionRange:o},Zs=!1,B=r;B!==null;)if(r=B,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,B=t;else for(;B!==null;){r=B;try{var V=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(V!==null){var K=V.memoizedProps,be=V.memoizedState,I=r.stateNode,S=I.getSnapshotBeforeUpdate(r.elementType===r.type?K:Lt(r.type,K),be);I.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var k=r.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(F){De(r,r.return,F)}if(t=r.sibling,t!==null){t.return=r.return,B=t;break}B=r.return}return V=zf,zf=!1,V}function ns(t,r,o){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&pu(r,o,h)}c=c.next}while(c!==a)}}function Mo(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==r)}}function mu(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function jf(t){var r=t.alternate;r!==null&&(t.alternate=null,jf(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Gt],delete r[Vi],delete r[xa],delete r[wy],delete r[Ey])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wf(t){return t.tag===5||t.tag===3||t.tag===4}function Bf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gu(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=ho));else if(a!==4&&(t=t.child,t!==null))for(gu(t,r,o),t=t.sibling;t!==null;)gu(t,r,o),t=t.sibling}function _u(t,r,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(_u(t,r,o),t=t.sibling;t!==null;)_u(t,r,o),t=t.sibling}var Ge=null,Dt=!1;function Dn(t,r,o){for(o=o.child;o!==null;)Hf(t,r,o),o=o.sibling}function Hf(t,r,o){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(Gs,o)}catch{}switch(o.tag){case 5:Ze||Gr(o,r);case 6:var a=Ge,c=Dt;Ge=null,Dn(t,r,o),Ge=a,Dt=c,Ge!==null&&(Dt?(t=Ge,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Ge.removeChild(o.stateNode));break;case 18:Ge!==null&&(Dt?(t=Ge,o=o.stateNode,t.nodeType===8?Aa(t.parentNode,o):t.nodeType===1&&Aa(t,o),Di(t)):Aa(Ge,o.stateNode));break;case 4:a=Ge,c=Dt,Ge=o.stateNode.containerInfo,Dt=!0,Dn(t,r,o),Ge=a,Dt=c;break;case 0:case 11:case 14:case 15:if(!Ze&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,g=h.destroy;h=h.tag,g!==void 0&&(h&2||h&4)&&pu(o,r,g),c=c.next}while(c!==a)}Dn(t,r,o);break;case 1:if(!Ze&&(Gr(o,r),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(_){De(o,r,_)}Dn(t,r,o);break;case 21:Dn(t,r,o);break;case 22:o.mode&1?(Ze=(a=Ze)||o.memoizedState!==null,Dn(t,r,o),Ze=a):Dn(t,r,o);break;default:Dn(t,r,o)}}function $f(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Fy),r.forEach(function(a){var c=Gy.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function Mt(t,r){var o=r.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,g=r,_=g;e:for(;_!==null;){switch(_.tag){case 5:Ge=_.stateNode,Dt=!1;break e;case 3:Ge=_.stateNode.containerInfo,Dt=!0;break e;case 4:Ge=_.stateNode.containerInfo,Dt=!0;break e}_=_.return}if(Ge===null)throw Error(n(160));Hf(h,g,c),Ge=null,Dt=!1;var w=c.alternate;w!==null&&(w.return=null),c.return=null}catch(T){De(c,r,T)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Vf(r,t),r=r.sibling}function Vf(t,r){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(r,t),Qt(t),a&4){try{ns(3,t,t.return),Mo(3,t)}catch(K){De(t,t.return,K)}try{ns(5,t,t.return)}catch(K){De(t,t.return,K)}}break;case 1:Mt(r,t),Qt(t),a&512&&o!==null&&Gr(o,o.return);break;case 5:if(Mt(r,t),Qt(t),a&512&&o!==null&&Gr(o,o.return),t.flags&32){var c=t.stateNode;try{Ci(c,"")}catch(K){De(t,t.return,K)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,g=o!==null?o.memoizedProps:h,_=t.type,w=t.updateQueue;if(t.updateQueue=null,w!==null)try{_==="input"&&h.type==="radio"&&h.name!=null&&vd(c,h),ql(_,g);var T=ql(_,h);for(g=0;g<w.length;g+=2){var L=w[g],b=w[g+1];L==="style"?Td(c,b):L==="dangerouslySetInnerHTML"?Id(c,b):L==="children"?Ci(c,b):Q(c,L,b,T)}switch(_){case"input":Hl(c,h);break;case"textarea":Ed(c,h);break;case"select":var A=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var W=h.value;W!=null?Tr(c,!!h.multiple,W,!1):A!==!!h.multiple&&(h.defaultValue!=null?Tr(c,!!h.multiple,h.defaultValue,!0):Tr(c,!!h.multiple,h.multiple?[]:"",!1))}c[Vi]=h}catch(K){De(t,t.return,K)}}break;case 6:if(Mt(r,t),Qt(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(K){De(t,t.return,K)}}break;case 3:if(Mt(r,t),Qt(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Di(r.containerInfo)}catch(K){De(t,t.return,K)}break;case 4:Mt(r,t),Qt(t);break;case 13:Mt(r,t),Qt(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(wu=Me())),a&4&&$f(t);break;case 22:if(L=o!==null&&o.memoizedState!==null,t.mode&1?(Ze=(T=Ze)||L,Mt(r,t),Ze=T):Mt(r,t),Qt(t),a&8192){if(T=t.memoizedState!==null,(t.stateNode.isHidden=T)&&!L&&t.mode&1)for(B=t,L=t.child;L!==null;){for(b=B=L;B!==null;){switch(A=B,W=A.child,A.tag){case 0:case 11:case 14:case 15:ns(4,A,A.return);break;case 1:Gr(A,A.return);var V=A.stateNode;if(typeof V.componentWillUnmount=="function"){a=A,o=A.return;try{r=a,V.props=r.memoizedProps,V.state=r.memoizedState,V.componentWillUnmount()}catch(K){De(a,o,K)}}break;case 5:Gr(A,A.return);break;case 22:if(A.memoizedState!==null){qf(b);continue}}W!==null?(W.return=A,B=W):qf(b)}L=L.sibling}e:for(L=null,b=t;;){if(b.tag===5){if(L===null){L=b;try{c=b.stateNode,T?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(_=b.stateNode,w=b.memoizedProps.style,g=w!=null&&w.hasOwnProperty("display")?w.display:null,_.style.display=kd("display",g))}catch(K){De(t,t.return,K)}}}else if(b.tag===6){if(L===null)try{b.stateNode.nodeValue=T?"":b.memoizedProps}catch(K){De(t,t.return,K)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===t)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===t)break e;for(;b.sibling===null;){if(b.return===null||b.return===t)break e;L===b&&(L=null),b=b.return}L===b&&(L=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:Mt(r,t),Qt(t),a&4&&$f(t);break;case 21:break;default:Mt(r,t),Qt(t)}}function Qt(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(Wf(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Ci(c,""),a.flags&=-33);var h=Bf(t);_u(t,h,c);break;case 3:case 4:var g=a.stateNode.containerInfo,_=Bf(t);gu(t,_,g);break;default:throw Error(n(161))}}catch(w){De(t,t.return,w)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function zy(t,r,o){B=t,Kf(t)}function Kf(t,r,o){for(var a=(t.mode&1)!==0;B!==null;){var c=B,h=c.child;if(c.tag===22&&a){var g=c.memoizedState!==null||Do;if(!g){var _=c.alternate,w=_!==null&&_.memoizedState!==null||Ze;_=Do;var T=Ze;if(Do=g,(Ze=w)&&!T)for(B=c;B!==null;)g=B,w=g.child,g.tag===22&&g.memoizedState!==null?Yf(c):w!==null?(w.return=g,B=w):Yf(c);for(;h!==null;)B=h,Kf(h),h=h.sibling;B=c,Do=_,Ze=T}Gf(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,B=h):Gf(t)}}function Gf(t){for(;B!==null;){var r=B;if(r.flags&8772){var o=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Ze||Mo(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!Ze)if(o===null)a.componentDidMount();else{var c=r.elementType===r.type?o.memoizedProps:Lt(r.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&Gh(r,h,a);break;case 3:var g=r.updateQueue;if(g!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Gh(r,g,o)}break;case 5:var _=r.stateNode;if(o===null&&r.flags&4){o=_;var w=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":w.autoFocus&&o.focus();break;case"img":w.src&&(o.src=w.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var T=r.alternate;if(T!==null){var L=T.memoizedState;if(L!==null){var b=L.dehydrated;b!==null&&Di(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Ze||r.flags&512&&mu(r)}catch(A){De(r,r.return,A)}}if(r===t){B=null;break}if(o=r.sibling,o!==null){o.return=r.return,B=o;break}B=r.return}}function qf(t){for(;B!==null;){var r=B;if(r===t){B=null;break}var o=r.sibling;if(o!==null){o.return=r.return,B=o;break}B=r.return}}function Yf(t){for(;B!==null;){var r=B;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Mo(4,r)}catch(w){De(r,o,w)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var c=r.return;try{a.componentDidMount()}catch(w){De(r,c,w)}}var h=r.return;try{mu(r)}catch(w){De(r,h,w)}break;case 5:var g=r.return;try{mu(r)}catch(w){De(r,g,w)}}}catch(w){De(r,r.return,w)}if(r===t){B=null;break}var _=r.sibling;if(_!==null){_.return=r.return,B=_;break}B=r.return}}var jy=Math.ceil,bo=ee.ReactCurrentDispatcher,vu=ee.ReactCurrentOwner,kt=ee.ReactCurrentBatchConfig,le=0,Be=null,Ue=null,qe=0,yt=0,qr=Pn(0),je=0,rs=null,cr=0,Fo=0,yu=0,is=null,ct=null,wu=0,Yr=1/0,un=null,Uo=!1,Eu=null,Mn=null,zo=!1,bn=null,jo=0,ss=0,Su=null,Wo=-1,Bo=0;function it(){return le&6?Me():Wo!==-1?Wo:Wo=Me()}function Fn(t){return t.mode&1?le&2&&qe!==0?qe&-qe:Cy.transition!==null?(Bo===0&&(Bo=Wd()),Bo):(t=pe,t!==0||(t=window.event,t=t===void 0?16:Qd(t.type)),t):1}function bt(t,r,o,a){if(50<ss)throw ss=0,Su=null,Error(n(185));Pi(t,o,a),(!(le&2)||t!==Be)&&(t===Be&&(!(le&2)&&(Fo|=o),je===4&&Un(t,qe)),dt(t,a),o===1&&le===0&&!(r.mode&1)&&(Yr=Me()+500,go&&xn()))}function dt(t,r){var o=t.callbackNode;Cv(t,r);var a=Qs(t,t===Be?qe:0);if(a===0)o!==null&&Ud(o),t.callbackNode=null,t.callbackPriority=0;else if(r=a&-a,t.callbackPriority!==r){if(o!=null&&Ud(o),r===1)t.tag===0?Sy(Jf.bind(null,t)):Mh(Jf.bind(null,t)),vy(function(){!(le&6)&&xn()}),o=null;else{switch(Bd(a)){case 1:o=ta;break;case 4:o=zd;break;case 16:o=Ks;break;case 536870912:o=jd;break;default:o=Ks}o=sp(o,Qf.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function Qf(t,r){if(Wo=-1,Bo=0,le&6)throw Error(n(327));var o=t.callbackNode;if(Qr()&&t.callbackNode!==o)return null;var a=Qs(t,t===Be?qe:0);if(a===0)return null;if(a&30||a&t.expiredLanes||r)r=Ho(t,a);else{r=a;var c=le;le|=2;var h=Zf();(Be!==t||qe!==r)&&(un=null,Yr=Me()+500,hr(t,r));do try{Hy();break}catch(_){Xf(t,_)}while(!0);ja(),bo.current=h,le=c,Ue!==null?r=0:(Be=null,qe=0,r=je)}if(r!==0){if(r===2&&(c=na(t),c!==0&&(a=c,r=Cu(t,c))),r===1)throw o=rs,hr(t,0),Un(t,a),dt(t,Me()),o;if(r===6)Un(t,a);else{if(c=t.current.alternate,!(a&30)&&!Wy(c)&&(r=Ho(t,a),r===2&&(h=na(t),h!==0&&(a=h,r=Cu(t,h))),r===1))throw o=rs,hr(t,0),Un(t,a),dt(t,Me()),o;switch(t.finishedWork=c,t.finishedLanes=a,r){case 0:case 1:throw Error(n(345));case 2:fr(t,ct,un);break;case 3:if(Un(t,a),(a&130023424)===a&&(r=wu+500-Me(),10<r)){if(Qs(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){it(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=Pa(fr.bind(null,t,ct,un),r);break}fr(t,ct,un);break;case 4:if(Un(t,a),(a&4194240)===a)break;for(r=t.eventTimes,c=-1;0<a;){var g=31-At(a);h=1<<g,g=r[g],g>c&&(c=g),a&=~h}if(a=c,a=Me()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*jy(a/1960))-a,10<a){t.timeoutHandle=Pa(fr.bind(null,t,ct,un),a);break}fr(t,ct,un);break;case 5:fr(t,ct,un);break;default:throw Error(n(329))}}}return dt(t,Me()),t.callbackNode===o?Qf.bind(null,t):null}function Cu(t,r){var o=is;return t.current.memoizedState.isDehydrated&&(hr(t,r).flags|=256),t=Ho(t,r),t!==2&&(r=ct,ct=o,r!==null&&Iu(r)),t}function Iu(t){ct===null?ct=t:ct.push.apply(ct,t)}function Wy(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!xt(h(),c))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Un(t,r){for(r&=~yu,r&=~Fo,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-At(r),a=1<<o;t[o]=-1,r&=~a}}function Jf(t){if(le&6)throw Error(n(327));Qr();var r=Qs(t,0);if(!(r&1))return dt(t,Me()),null;var o=Ho(t,r);if(t.tag!==0&&o===2){var a=na(t);a!==0&&(r=a,o=Cu(t,a))}if(o===1)throw o=rs,hr(t,0),Un(t,r),dt(t,Me()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,fr(t,ct,un),dt(t,Me()),null}function ku(t,r){var o=le;le|=1;try{return t(r)}finally{le=o,le===0&&(Yr=Me()+500,go&&xn())}}function dr(t){bn!==null&&bn.tag===0&&!(le&6)&&Qr();var r=le;le|=1;var o=kt.transition,a=pe;try{if(kt.transition=null,pe=1,t)return t()}finally{pe=a,kt.transition=o,le=r,!(le&6)&&xn()}}function Tu(){yt=qr.current,Ce(qr)}function hr(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,_y(o)),Ue!==null)for(o=Ue.return;o!==null;){var a=o;switch(Ma(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&po();break;case 3:Vr(),Ce(lt),Ce(Qe),qa();break;case 5:Ka(a);break;case 4:Vr();break;case 13:Ce(Ae);break;case 19:Ce(Ae);break;case 10:Wa(a.type._context);break;case 22:case 23:Tu()}o=o.return}if(Be=t,Ue=t=zn(t.current,null),qe=yt=r,je=0,rs=null,yu=Fo=cr=0,ct=is=null,lr!==null){for(r=0;r<lr.length;r++)if(o=lr[r],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var g=h.next;h.next=c,a.next=g}o.pending=a}lr=null}return t}function Xf(t,r){do{var o=Ue;try{if(ja(),To.current=Ao,Ro){for(var a=xe.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}Ro=!1}if(ur=0,We=ze=xe=null,Ji=!1,Xi=0,vu.current=null,o===null||o.return===null){je=1,rs=r,Ue=null;break}e:{var h=t,g=o.return,_=o,w=r;if(r=qe,_.flags|=32768,w!==null&&typeof w=="object"&&typeof w.then=="function"){var T=w,L=_,b=L.tag;if(!(L.mode&1)&&(b===0||b===11||b===15)){var A=L.alternate;A?(L.updateQueue=A.updateQueue,L.memoizedState=A.memoizedState,L.lanes=A.lanes):(L.updateQueue=null,L.memoizedState=null)}var W=Cf(g);if(W!==null){W.flags&=-257,If(W,g,_,h,r),W.mode&1&&Sf(h,T,r),r=W,w=T;var V=r.updateQueue;if(V===null){var K=new Set;K.add(w),r.updateQueue=K}else V.add(w);break e}else{if(!(r&1)){Sf(h,T,r),Ru();break e}w=Error(n(426))}}else if(Ne&&_.mode&1){var be=Cf(g);if(be!==null){!(be.flags&65536)&&(be.flags|=256),If(be,g,_,h,r),Ua(Kr(w,_));break e}}h=w=Kr(w,_),je!==4&&(je=2),is===null?is=[h]:is.push(h),h=g;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var I=wf(h,w,r);Kh(h,I);break e;case 1:_=w;var S=h.type,k=h.stateNode;if(!(h.flags&128)&&(typeof S.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Mn===null||!Mn.has(k)))){h.flags|=65536,r&=-r,h.lanes|=r;var F=Ef(h,_,r);Kh(h,F);break e}}h=h.return}while(h!==null)}tp(o)}catch(G){r=G,Ue===o&&o!==null&&(Ue=o=o.return);continue}break}while(!0)}function Zf(){var t=bo.current;return bo.current=Ao,t===null?Ao:t}function Ru(){(je===0||je===3||je===2)&&(je=4),Be===null||!(cr&268435455)&&!(Fo&268435455)||Un(Be,qe)}function Ho(t,r){var o=le;le|=2;var a=Zf();(Be!==t||qe!==r)&&(un=null,hr(t,r));do try{By();break}catch(c){Xf(t,c)}while(!0);if(ja(),le=o,bo.current=a,Ue!==null)throw Error(n(261));return Be=null,qe=0,je}function By(){for(;Ue!==null;)ep(Ue)}function Hy(){for(;Ue!==null&&!pv();)ep(Ue)}function ep(t){var r=ip(t.alternate,t,yt);t.memoizedProps=t.pendingProps,r===null?tp(t):Ue=r,vu.current=null}function tp(t){var r=t;do{var o=r.alternate;if(t=r.return,r.flags&32768){if(o=by(o,r),o!==null){o.flags&=32767,Ue=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Ue=null;return}}else if(o=My(o,r,yt),o!==null){Ue=o;return}if(r=r.sibling,r!==null){Ue=r;return}Ue=r=t}while(r!==null);je===0&&(je=5)}function fr(t,r,o){var a=pe,c=kt.transition;try{kt.transition=null,pe=1,$y(t,r,o,a)}finally{kt.transition=c,pe=a}return null}function $y(t,r,o,a){do Qr();while(bn!==null);if(le&6)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(Iv(t,h),t===Be&&(Ue=Be=null,qe=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||zo||(zo=!0,sp(Ks,function(){return Qr(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=kt.transition,kt.transition=null;var g=pe;pe=1;var _=le;le|=4,vu.current=null,Uy(t,o),Vf(o,t),cy(Ra),Zs=!!Ta,Ra=Ta=null,t.current=o,zy(o),mv(),le=_,pe=g,kt.transition=h}else t.current=o;if(zo&&(zo=!1,bn=t,jo=c),h=t.pendingLanes,h===0&&(Mn=null),vv(o.stateNode),dt(t,Me()),r!==null)for(a=t.onRecoverableError,o=0;o<r.length;o++)c=r[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Uo)throw Uo=!1,t=Eu,Eu=null,t;return jo&1&&t.tag!==0&&Qr(),h=t.pendingLanes,h&1?t===Su?ss++:(ss=0,Su=t):ss=0,xn(),null}function Qr(){if(bn!==null){var t=Bd(jo),r=kt.transition,o=pe;try{if(kt.transition=null,pe=16>t?16:t,bn===null)var a=!1;else{if(t=bn,bn=null,jo=0,le&6)throw Error(n(331));var c=le;for(le|=4,B=t.current;B!==null;){var h=B,g=h.child;if(B.flags&16){var _=h.deletions;if(_!==null){for(var w=0;w<_.length;w++){var T=_[w];for(B=T;B!==null;){var L=B;switch(L.tag){case 0:case 11:case 15:ns(8,L,h)}var b=L.child;if(b!==null)b.return=L,B=b;else for(;B!==null;){L=B;var A=L.sibling,W=L.return;if(jf(L),L===T){B=null;break}if(A!==null){A.return=W,B=A;break}B=W}}}var V=h.alternate;if(V!==null){var K=V.child;if(K!==null){V.child=null;do{var be=K.sibling;K.sibling=null,K=be}while(K!==null)}}B=h}}if(h.subtreeFlags&2064&&g!==null)g.return=h,B=g;else e:for(;B!==null;){if(h=B,h.flags&2048)switch(h.tag){case 0:case 11:case 15:ns(9,h,h.return)}var I=h.sibling;if(I!==null){I.return=h.return,B=I;break e}B=h.return}}var S=t.current;for(B=S;B!==null;){g=B;var k=g.child;if(g.subtreeFlags&2064&&k!==null)k.return=g,B=k;else e:for(g=S;B!==null;){if(_=B,_.flags&2048)try{switch(_.tag){case 0:case 11:case 15:Mo(9,_)}}catch(G){De(_,_.return,G)}if(_===g){B=null;break e}var F=_.sibling;if(F!==null){F.return=_.return,B=F;break e}B=_.return}}if(le=c,xn(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(Gs,t)}catch{}a=!0}return a}finally{pe=o,kt.transition=r}}return!1}function np(t,r,o){r=Kr(o,r),r=wf(t,r,1),t=Ln(t,r,1),r=it(),t!==null&&(Pi(t,1,r),dt(t,r))}function De(t,r,o){if(t.tag===3)np(t,t,o);else for(;r!==null;){if(r.tag===3){np(r,t,o);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Mn===null||!Mn.has(a))){t=Kr(o,t),t=Ef(r,t,1),r=Ln(r,t,1),t=it(),r!==null&&(Pi(r,1,t),dt(r,t));break}}r=r.return}}function Vy(t,r,o){var a=t.pingCache;a!==null&&a.delete(r),r=it(),t.pingedLanes|=t.suspendedLanes&o,Be===t&&(qe&o)===o&&(je===4||je===3&&(qe&130023424)===qe&&500>Me()-wu?hr(t,0):yu|=o),dt(t,r)}function rp(t,r){r===0&&(t.mode&1?(r=Ys,Ys<<=1,!(Ys&130023424)&&(Ys=4194304)):r=1);var o=it();t=on(t,r),t!==null&&(Pi(t,r,o),dt(t,o))}function Ky(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),rp(t,o)}function Gy(t,r){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(r),rp(t,o)}var ip;ip=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||lt.current)ut=!0;else{if(!(t.lanes&o)&&!(r.flags&128))return ut=!1,Dy(t,r,o);ut=!!(t.flags&131072)}else ut=!1,Ne&&r.flags&1048576&&bh(r,vo,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;Lo(t,r),t=r.pendingProps;var c=Ur(r,Qe.current);$r(r,o),c=Ja(null,r,a,t,c,o);var h=Xa();return r.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,at(a)?(h=!0,mo(r)):h=!1,r.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,$a(r),c.updater=xo,r.stateNode=c,c._reactInternals=r,iu(r,a,t,o),r=au(null,r,a,!0,h,o)):(r.tag=0,Ne&&h&&Da(r),rt(null,r,c,o),r=r.child),r;case 16:a=r.elementType;e:{switch(Lo(t,r),t=r.pendingProps,c=a._init,a=c(a._payload),r.type=a,c=r.tag=Yy(a),t=Lt(a,t),c){case 0:r=lu(null,r,a,t,o);break e;case 1:r=Af(null,r,a,t,o);break e;case 11:r=kf(null,r,a,t,o);break e;case 14:r=Tf(null,r,a,Lt(a.type,t),o);break e}throw Error(n(306,a,""))}return r;case 0:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Lt(a,c),lu(t,r,a,c,o);case 1:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Lt(a,c),Af(t,r,a,c,o);case 3:e:{if(xf(r),t===null)throw Error(n(387));a=r.pendingProps,h=r.memoizedState,c=h.element,Vh(t,r),Io(r,a,null,o);var g=r.memoizedState;if(a=g.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){c=Kr(Error(n(423)),r),r=Of(t,r,a,o,c);break e}else if(a!==c){c=Kr(Error(n(424)),r),r=Of(t,r,a,o,c);break e}else for(vt=Nn(r.stateNode.containerInfo.firstChild),_t=r,Ne=!0,Ot=null,o=Hh(r,null,a,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Wr(),a===c){r=an(t,r,o);break e}rt(t,r,a,o)}r=r.child}return r;case 5:return qh(r),t===null&&Fa(r),a=r.type,c=r.pendingProps,h=t!==null?t.memoizedProps:null,g=c.children,Na(a,c)?g=null:h!==null&&Na(a,h)&&(r.flags|=32),Pf(t,r),rt(t,r,g,o),r.child;case 6:return t===null&&Fa(r),null;case 13:return Lf(t,r,o);case 4:return Va(r,r.stateNode.containerInfo),a=r.pendingProps,t===null?r.child=Br(r,null,a,o):rt(t,r,a,o),r.child;case 11:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Lt(a,c),kf(t,r,a,c,o);case 7:return rt(t,r,r.pendingProps,o),r.child;case 8:return rt(t,r,r.pendingProps.children,o),r.child;case 12:return rt(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(a=r.type._context,c=r.pendingProps,h=r.memoizedProps,g=c.value,Ee(Eo,a._currentValue),a._currentValue=g,h!==null)if(xt(h.value,g)){if(h.children===c.children&&!lt.current){r=an(t,r,o);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var _=h.dependencies;if(_!==null){g=h.child;for(var w=_.firstContext;w!==null;){if(w.context===a){if(h.tag===1){w=ln(-1,o&-o),w.tag=2;var T=h.updateQueue;if(T!==null){T=T.shared;var L=T.pending;L===null?w.next=w:(w.next=L.next,L.next=w),T.pending=w}}h.lanes|=o,w=h.alternate,w!==null&&(w.lanes|=o),Ba(h.return,o,r),_.lanes|=o;break}w=w.next}}else if(h.tag===10)g=h.type===r.type?null:h.child;else if(h.tag===18){if(g=h.return,g===null)throw Error(n(341));g.lanes|=o,_=g.alternate,_!==null&&(_.lanes|=o),Ba(g,o,r),g=h.sibling}else g=h.child;if(g!==null)g.return=h;else for(g=h;g!==null;){if(g===r){g=null;break}if(h=g.sibling,h!==null){h.return=g.return,g=h;break}g=g.return}h=g}rt(t,r,c.children,o),r=r.child}return r;case 9:return c=r.type,a=r.pendingProps.children,$r(r,o),c=Ct(c),a=a(c),r.flags|=1,rt(t,r,a,o),r.child;case 14:return a=r.type,c=Lt(a,r.pendingProps),c=Lt(a.type,c),Tf(t,r,a,c,o);case 15:return Rf(t,r,r.type,r.pendingProps,o);case 17:return a=r.type,c=r.pendingProps,c=r.elementType===a?c:Lt(a,c),Lo(t,r),r.tag=1,at(a)?(t=!0,mo(r)):t=!1,$r(r,o),vf(r,a,c),iu(r,a,c,o),au(null,r,a,!0,t,o);case 19:return Mf(t,r,o);case 22:return Nf(t,r,o)}throw Error(n(156,r.tag))};function sp(t,r){return Fd(t,r)}function qy(t,r,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(t,r,o,a){return new qy(t,r,o,a)}function Nu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yy(t){if(typeof t=="function")return Nu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$t)return 11;if(t===Vt)return 14}return 2}function zn(t,r){var o=t.alternate;return o===null?(o=Tt(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function $o(t,r,o,a,c,h){var g=2;if(a=t,typeof t=="function")Nu(t)&&(g=1);else if(typeof t=="string")g=5;else e:switch(t){case ve:return pr(o.children,c,h,r);case Oe:g=8,c|=8;break;case ye:return t=Tt(12,o,r,c|2),t.elementType=ye,t.lanes=h,t;case pt:return t=Tt(13,o,r,c),t.elementType=pt,t.lanes=h,t;case Pt:return t=Tt(19,o,r,c),t.elementType=Pt,t.lanes=h,t;case Le:return Vo(o,c,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fe:g=10;break e;case Ht:g=9;break e;case $t:g=11;break e;case Vt:g=14;break e;case ot:g=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=Tt(g,o,r,c),r.elementType=t,r.type=a,r.lanes=h,r}function pr(t,r,o,a){return t=Tt(7,t,a,r),t.lanes=o,t}function Vo(t,r,o,a){return t=Tt(22,t,a,r),t.elementType=Le,t.lanes=o,t.stateNode={isHidden:!1},t}function Pu(t,r,o){return t=Tt(6,t,null,r),t.lanes=o,t}function Au(t,r,o){return r=Tt(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Qy(t,r,o,a,c){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ra(0),this.expirationTimes=ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ra(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function xu(t,r,o,a,c,h,g,_,w){return t=new Qy(t,r,o,_,w),r===1?(r=1,h===!0&&(r|=8)):r=0,h=Tt(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},$a(h),t}function Jy(t,r,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_e,key:a==null?null:""+a,children:t,containerInfo:r,implementation:o}}function op(t){if(!t)return An;t=t._reactInternals;e:{if(nr(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(at(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(at(o))return Lh(t,o,r)}return r}function lp(t,r,o,a,c,h,g,_,w){return t=xu(o,a,!0,t,c,h,g,_,w),t.context=op(null),o=t.current,a=it(),c=Fn(o),h=ln(a,c),h.callback=r??null,Ln(o,h,c),t.current.lanes=c,Pi(t,c,a),dt(t,a),t}function Ko(t,r,o,a){var c=r.current,h=it(),g=Fn(c);return o=op(o),r.context===null?r.context=o:r.pendingContext=o,r=ln(h,g),r.payload={element:t},a=a===void 0?null:a,a!==null&&(r.callback=a),t=Ln(c,r,g),t!==null&&(bt(t,c,g,h),Co(t,c,g)),g}function Go(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ap(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function Ou(t,r){ap(t,r),(t=t.alternate)&&ap(t,r)}var up=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lu(t){this._internalRoot=t}qo.prototype.render=Lu.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));Ko(t,r,null,null)},qo.prototype.unmount=Lu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;dr(function(){Ko(null,t,null,null)}),r[tn]=null}};function qo(t){this._internalRoot=t}qo.prototype.unstable_scheduleHydration=function(t){if(t){var r=Vd();t={blockedOn:null,target:t,priority:r};for(var o=0;o<kn.length&&r!==0&&r<kn[o].priority;o++);kn.splice(o,0,t),o===0&&qd(t)}};function Du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cp(){}function Xy(t,r,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var T=Go(g);h.call(T)}}var g=lp(r,a,t,0,null,!1,!1,"",cp);return t._reactRootContainer=g,t[tn]=g.current,Hi(t.nodeType===8?t.parentNode:t),dr(),g}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var _=a;a=function(){var T=Go(w);_.call(T)}}var w=xu(t,0,!1,null,null,!1,!1,"",cp);return t._reactRootContainer=w,t[tn]=w.current,Hi(t.nodeType===8?t.parentNode:t),dr(function(){Ko(r,w,o,a)}),w}function Qo(t,r,o,a,c){var h=o._reactRootContainer;if(h){var g=h;if(typeof c=="function"){var _=c;c=function(){var w=Go(g);_.call(w)}}Ko(r,g,t,c)}else g=Xy(o,r,t,c,a);return Go(g)}Hd=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Ni(r.pendingLanes);o!==0&&(ia(r,o|1),dt(r,Me()),!(le&6)&&(Yr=Me()+500,xn()))}break;case 13:dr(function(){var a=on(t,1);if(a!==null){var c=it();bt(a,t,1,c)}}),Ou(t,1)}},sa=function(t){if(t.tag===13){var r=on(t,134217728);if(r!==null){var o=it();bt(r,t,134217728,o)}Ou(t,134217728)}},$d=function(t){if(t.tag===13){var r=Fn(t),o=on(t,r);if(o!==null){var a=it();bt(o,t,r,a)}Ou(t,r)}},Vd=function(){return pe},Kd=function(t,r){var o=pe;try{return pe=t,r()}finally{pe=o}},Jl=function(t,r,o){switch(r){case"input":if(Hl(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var a=o[r];if(a!==t&&a.form===t.form){var c=fo(a);if(!c)throw Error(n(90));gd(a),Hl(a,c)}}}break;case"textarea":Ed(t,o);break;case"select":r=o.value,r!=null&&Tr(t,!!o.multiple,r,!1)}},Ad=ku,xd=dr;var Zy={usingClientEntryPoint:!1,Events:[Ki,br,fo,Nd,Pd,ku]},os={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e0={bundleType:os.bundleType,version:os.version,rendererPackageName:os.rendererPackageName,rendererConfig:os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Md(t),t===null?null:t.stateNode},findFiberByHostInstance:os.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{Gs=Jo.inject(e0),Kt=Jo}catch{}}return ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zy,ht.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Du(r))throw Error(n(200));return Jy(t,r,null,o)},ht.createRoot=function(t,r){if(!Du(t))throw Error(n(299));var o=!1,a="",c=up;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),r=xu(t,1,!1,null,null,o,!1,a,c),t[tn]=r.current,Hi(t.nodeType===8?t.parentNode:t),new Lu(r)},ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Md(r),t=t===null?null:t.stateNode,t},ht.flushSync=function(t){return dr(t)},ht.hydrate=function(t,r,o){if(!Yo(r))throw Error(n(200));return Qo(null,t,r,!0,o)},ht.hydrateRoot=function(t,r,o){if(!Du(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",g=up;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),r=lp(r,null,t,1,o??null,c,!1,h,g),t[tn]=r.current,Hi(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,c]:r.mutableSourceEagerHydrationData.push(o,c);return new qo(r)},ht.render=function(t,r,o){if(!Yo(r))throw Error(n(200));return Qo(null,t,r,!1,o)},ht.unmountComponentAtNode=function(t){if(!Yo(t))throw Error(n(40));return t._reactRootContainer?(dr(function(){Qo(null,null,t,!1,function(){t._reactRootContainer=null,t[tn]=null})}),!0):!1},ht.unstable_batchedUpdates=ku,ht.unstable_renderSubtreeIntoContainer=function(t,r,o,a){if(!Yo(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Qo(t,r,o,!1,a)},ht.version="18.3.1-next-f1338f8080-20240426",ht}var vp;function c0(){if(vp)return Fu.exports;vp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Fu.exports=u0(),Fu.exports}var yp;function d0(){if(yp)return Xo;yp=1;var i=c0();return Xo.createRoot=i.createRoot,Xo.hydrateRoot=i.hydrateRoot,Xo}var h0=d0(),as={},wp;function f0(){if(wp)return as;wp=1,Object.defineProperty(as,"__esModule",{value:!0}),as.parse=d,as.serialize=m;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const E=function(){};return E.prototype=Object.create(null),E})();function d(E,P){const R=new u,M=E.length;if(M<2)return R;const D=(P==null?void 0:P.decode)||y;let x=0;do{const U=E.indexOf("=",x);if(U===-1)break;const Q=E.indexOf(";",x),ee=Q===-1?M:Q;if(U>ee){x=E.lastIndexOf(";",U-1)+1;continue}const he=f(E,x,U),_e=p(E,U,he),ve=E.slice(he,_e);if(R[ve]===void 0){let Oe=f(E,U+1,ee),ye=p(E,ee,Oe);const Fe=D(E.slice(Oe,ye));R[ve]=Fe}x=ee+1}while(x<M);return R}function f(E,P,R){do{const M=E.charCodeAt(P);if(M!==32&&M!==9)return P}while(++P<R);return R}function p(E,P,R){for(;P>R;){const M=E.charCodeAt(--P);if(M!==32&&M!==9)return P+1}return R}function m(E,P,R){const M=(R==null?void 0:R.encode)||encodeURIComponent;if(!i.test(E))throw new TypeError(`argument name is invalid: ${E}`);const D=M(P);if(!e.test(D))throw new TypeError(`argument val is invalid: ${P}`);let x=E+"="+D;if(!R)return x;if(R.maxAge!==void 0){if(!Number.isInteger(R.maxAge))throw new TypeError(`option maxAge is invalid: ${R.maxAge}`);x+="; Max-Age="+R.maxAge}if(R.domain){if(!n.test(R.domain))throw new TypeError(`option domain is invalid: ${R.domain}`);x+="; Domain="+R.domain}if(R.path){if(!s.test(R.path))throw new TypeError(`option path is invalid: ${R.path}`);x+="; Path="+R.path}if(R.expires){if(!v(R.expires)||!Number.isFinite(R.expires.valueOf()))throw new TypeError(`option expires is invalid: ${R.expires}`);x+="; Expires="+R.expires.toUTCString()}if(R.httpOnly&&(x+="; HttpOnly"),R.secure&&(x+="; Secure"),R.partitioned&&(x+="; Partitioned"),R.priority)switch(typeof R.priority=="string"?R.priority.toLowerCase():void 0){case"low":x+="; Priority=Low";break;case"medium":x+="; Priority=Medium";break;case"high":x+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${R.priority}`)}if(R.sameSite)switch(typeof R.sameSite=="string"?R.sameSite.toLowerCase():R.sameSite){case!0:case"strict":x+="; SameSite=Strict";break;case"lax":x+="; SameSite=Lax";break;case"none":x+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${R.sameSite}`)}return x}function y(E){if(E.indexOf("%")===-1)return E;try{return decodeURIComponent(E)}catch{return E}}function v(E){return l.call(E)==="[object Date]"}return as}f0();/**
 * react-router v7.1.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ep="popstate";function p0(i={}){function e(s,l){let{pathname:u,search:d,hash:f}=s.location;return nc("",{pathname:u,search:d,hash:f},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(s,l){return typeof l=="string"?l:Cs(l)}return g0(e,n,null,i)}function Pe(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function zt(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function m0(){return Math.random().toString(36).substring(2,10)}function Sp(i,e){return{usr:i.state,key:i.key,idx:e}}function nc(i,e,n=null,s){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?di(e):e,state:n,key:e&&e.key||s||m0()}}function Cs({pathname:i="/",search:e="",hash:n=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(i+=n.charAt(0)==="#"?n:"#"+n),i}function di(i){let e={};if(i){let n=i.indexOf("#");n>=0&&(e.hash=i.substring(n),i=i.substring(0,n));let s=i.indexOf("?");s>=0&&(e.search=i.substring(s),i=i.substring(0,s)),i&&(e.pathname=i)}return e}function g0(i,e,n,s={}){let{window:l=document.defaultView,v5Compat:u=!1}=s,d=l.history,f="POP",p=null,m=y();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function y(){return(d.state||{idx:null}).idx}function v(){f="POP";let D=y(),x=D==null?null:D-m;m=D,p&&p({action:f,location:M.location,delta:x})}function E(D,x){f="PUSH";let U=nc(M.location,D,x);m=y()+1;let Q=Sp(U,m),ee=M.createHref(U);try{d.pushState(Q,"",ee)}catch(he){if(he instanceof DOMException&&he.name==="DataCloneError")throw he;l.location.assign(ee)}u&&p&&p({action:f,location:M.location,delta:1})}function P(D,x){f="REPLACE";let U=nc(M.location,D,x);m=y();let Q=Sp(U,m),ee=M.createHref(U);d.replaceState(Q,"",ee),u&&p&&p({action:f,location:M.location,delta:0})}function R(D){let x=l.location.origin!=="null"?l.location.origin:l.location.href,U=typeof D=="string"?D:Cs(D);return U=U.replace(/ $/,"%20"),Pe(x,`No window.location.(origin|href) available to create URL for href: ${U}`),new URL(U,x)}let M={get action(){return f},get location(){return i(l,d)},listen(D){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(Ep,v),p=D,()=>{l.removeEventListener(Ep,v),p=null}},createHref(D){return e(l,D)},createURL:R,encodeLocation(D){let x=R(D);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:E,replace:P,go(D){return d.go(D)}};return M}function zm(i,e,n="/"){return _0(i,e,n,!1)}function _0(i,e,n,s){let l=typeof e=="string"?di(e):e,u=Jn(l.pathname||"/",n);if(u==null)return null;let d=jm(i);v0(d);let f=null;for(let p=0;f==null&&p<d.length;++p){let m=P0(u);f=R0(d[p],m,s)}return f}function jm(i,e=[],n=[],s=""){let l=(u,d,f)=>{let p={relativePath:f===void 0?u.path||"":f,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};p.relativePath.startsWith("/")&&(Pe(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let m=mn([s,p.relativePath]),y=n.concat(p);u.children&&u.children.length>0&&(Pe(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),jm(u.children,e,y,m)),!(u.path==null&&!u.index)&&e.push({path:m,score:k0(m,u.index),routesMeta:y})};return i.forEach((u,d)=>{var f;if(u.path===""||!((f=u.path)!=null&&f.includes("?")))l(u,d);else for(let p of Wm(u.path))l(u,d,p)}),e}function Wm(i){let e=i.split("/");if(e.length===0)return[];let[n,...s]=e,l=n.endsWith("?"),u=n.replace(/\?$/,"");if(s.length===0)return l?[u,""]:[u];let d=Wm(s.join("/")),f=[];return f.push(...d.map(p=>p===""?u:[u,p].join("/"))),l&&f.push(...d),f.map(p=>i.startsWith("/")&&p===""?"/":p)}function v0(i){i.sort((e,n)=>e.score!==n.score?n.score-e.score:T0(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var y0=/^:[\w-]+$/,w0=3,E0=2,S0=1,C0=10,I0=-2,Cp=i=>i==="*";function k0(i,e){let n=i.split("/"),s=n.length;return n.some(Cp)&&(s+=I0),e&&(s+=E0),n.filter(l=>!Cp(l)).reduce((l,u)=>l+(y0.test(u)?w0:u===""?S0:C0),s)}function T0(i,e){return i.length===e.length&&i.slice(0,-1).every((s,l)=>s===e[l])?i[i.length-1]-e[e.length-1]:0}function R0(i,e,n=!1){let{routesMeta:s}=i,l={},u="/",d=[];for(let f=0;f<s.length;++f){let p=s[f],m=f===s.length-1,y=u==="/"?e:e.slice(u.length)||"/",v=cl({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},y),E=p.route;if(!v&&m&&n&&!s[s.length-1].route.index&&(v=cl({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!v)return null;Object.assign(l,v.params),d.push({params:l,pathname:mn([u,v.pathname]),pathnameBase:L0(mn([u,v.pathnameBase])),route:E}),v.pathnameBase!=="/"&&(u=mn([u,v.pathnameBase]))}return d}function cl(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[n,s]=N0(i.path,i.caseSensitive,i.end),l=e.match(n);if(!l)return null;let u=l[0],d=u.replace(/(.)\/+$/,"$1"),f=l.slice(1);return{params:s.reduce((m,{paramName:y,isOptional:v},E)=>{if(y==="*"){let R=f[E]||"";d=u.slice(0,u.length-R.length).replace(/(.)\/+$/,"$1")}const P=f[E];return v&&!P?m[y]=void 0:m[y]=(P||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:d,pattern:i}}function N0(i,e=!1,n=!0){zt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],l="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,f,p)=>(s.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(s.push({paramName:"*"}),l+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":i!==""&&i!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function P0(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zt(!1,`The URL path "${i}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function Jn(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=i.charAt(n);return s&&s!=="/"?null:i.slice(n)||"/"}function A0(i,e="/"){let{pathname:n,search:s="",hash:l=""}=typeof i=="string"?di(i):i;return{pathname:n?n.startsWith("/")?n:x0(n,e):e,search:D0(s),hash:M0(l)}}function x0(i,e){let n=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function ju(i,e,n,s){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function O0(i){return i.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Tc(i){let e=O0(i);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function Rc(i,e,n,s=!1){let l;typeof i=="string"?l=di(i):(l={...i},Pe(!l.pathname||!l.pathname.includes("?"),ju("?","pathname","search",l)),Pe(!l.pathname||!l.pathname.includes("#"),ju("#","pathname","hash",l)),Pe(!l.search||!l.search.includes("#"),ju("#","search","hash",l)));let u=i===""||l.pathname==="",d=u?"/":l.pathname,f;if(d==null)f=n;else{let v=e.length-1;if(!s&&d.startsWith("..")){let E=d.split("/");for(;E[0]==="..";)E.shift(),v-=1;l.pathname=E.join("/")}f=v>=0?e[v]:"/"}let p=A0(l,f),m=d&&d!=="/"&&d.endsWith("/"),y=(u||d===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(m||y)&&(p.pathname+="/"),p}var mn=i=>i.join("/").replace(/\/\/+/g,"/"),L0=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),D0=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,M0=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function b0(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var Bm=["POST","PUT","PATCH","DELETE"];new Set(Bm);var F0=["GET",...Bm];new Set(F0);var hi=N.createContext(null);hi.displayName="DataRouter";var Pl=N.createContext(null);Pl.displayName="DataRouterState";var Hm=N.createContext({isTransitioning:!1});Hm.displayName="ViewTransition";var U0=N.createContext(new Map);U0.displayName="Fetchers";var z0=N.createContext(null);z0.displayName="Await";var Wt=N.createContext(null);Wt.displayName="Navigation";var As=N.createContext(null);As.displayName="Location";var Bt=N.createContext({outlet:null,matches:[],isDataRoute:!1});Bt.displayName="Route";var Nc=N.createContext(null);Nc.displayName="RouteError";function j0(i,{relative:e}={}){Pe(fi(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=N.useContext(Wt),{hash:l,pathname:u,search:d}=xs(i,{relative:e}),f=u;return n!=="/"&&(f=u==="/"?n:mn([n,u])),s.createHref({pathname:f,search:d,hash:l})}function fi(){return N.useContext(As)!=null}function Zn(){return Pe(fi(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(As).location}var $m="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vm(i){N.useContext(Wt).static||N.useLayoutEffect(i)}function Al(){let{isDataRoute:i}=N.useContext(Bt);return i?ew():W0()}function W0(){Pe(fi(),"useNavigate() may be used only in the context of a <Router> component.");let i=N.useContext(hi),{basename:e,navigator:n}=N.useContext(Wt),{matches:s}=N.useContext(Bt),{pathname:l}=Zn(),u=JSON.stringify(Tc(s)),d=N.useRef(!1);return Vm(()=>{d.current=!0}),N.useCallback((p,m={})=>{if(zt(d.current,$m),!d.current)return;if(typeof p=="number"){n.go(p);return}let y=Rc(p,JSON.parse(u),l,m.relative==="path");i==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:mn([e,y.pathname])),(m.replace?n.replace:n.push)(y,m.state,m)},[e,n,u,l,i])}N.createContext(null);function B0(){let{matches:i}=N.useContext(Bt),e=i[i.length-1];return e?e.params:{}}function xs(i,{relative:e}={}){let{matches:n}=N.useContext(Bt),{pathname:s}=Zn(),l=JSON.stringify(Tc(n));return N.useMemo(()=>Rc(i,JSON.parse(l),s,e==="path"),[i,l,s,e])}function H0(i,e){return Km(i,e)}function Km(i,e,n,s){var x;Pe(fi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=N.useContext(Wt),{matches:u}=N.useContext(Bt),d=u[u.length-1],f=d?d.params:{},p=d?d.pathname:"/",m=d?d.pathnameBase:"/",y=d&&d.route;{let U=y&&y.path||"";Gm(p,!y||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let v=Zn(),E;if(e){let U=typeof e=="string"?di(e):e;Pe(m==="/"||((x=U.pathname)==null?void 0:x.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${U.pathname}" was given in the \`location\` prop.`),E=U}else E=v;let P=E.pathname||"/",R=P;if(m!=="/"){let U=m.replace(/^\//,"").split("/");R="/"+P.replace(/^\//,"").split("/").slice(U.length).join("/")}let M=zm(i,{pathname:R});zt(y||M!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),zt(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=q0(M&&M.map(U=>Object.assign({},U,{params:Object.assign({},f,U.params),pathname:mn([m,l.encodeLocation?l.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?m:mn([m,l.encodeLocation?l.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),u,n,s);return e&&D?N.createElement(As.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},D):D}function $0(){let i=Z0(),e=b0(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),n=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",i),d=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:u},"ErrorBoundary")," or"," ",N.createElement("code",{style:u},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:l},n):null,d)}var V0=N.createElement($0,null),K0=class extends N.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){console.error("React Router caught the following error during render",i,e)}render(){return this.state.error!==void 0?N.createElement(Bt.Provider,{value:this.props.routeContext},N.createElement(Nc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function G0({routeContext:i,match:e,children:n}){let s=N.useContext(hi);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),N.createElement(Bt.Provider,{value:i},n)}function q0(i,e=[],n=null,s=null){if(i==null){if(!n)return null;if(n.errors)i=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)i=n.matches;else return null}let l=i,u=n==null?void 0:n.errors;if(u!=null){let p=l.findIndex(m=>m.route.id&&(u==null?void 0:u[m.route.id])!==void 0);Pe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let d=!1,f=-1;if(n)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(f=p),m.route.id){let{loaderData:y,errors:v}=n,E=m.route.loader&&!y.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||E){d=!0,f>=0?l=l.slice(0,f+1):l=[l[0]];break}}}return l.reduceRight((p,m,y)=>{let v,E=!1,P=null,R=null;n&&(v=u&&m.route.id?u[m.route.id]:void 0,P=m.route.errorElement||V0,d&&(f<0&&y===0?(Gm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,R=null):f===y&&(E=!0,R=m.route.hydrateFallbackElement||null)));let M=e.concat(l.slice(0,y+1)),D=()=>{let x;return v?x=P:E?x=R:m.route.Component?x=N.createElement(m.route.Component,null):m.route.element?x=m.route.element:x=p,N.createElement(G0,{match:m,routeContext:{outlet:p,matches:M,isDataRoute:n!=null},children:x})};return n&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?N.createElement(K0,{location:n.location,revalidation:n.revalidation,component:P,error:v,children:D(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):D()},null)}function Pc(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Y0(i){let e=N.useContext(hi);return Pe(e,Pc(i)),e}function Q0(i){let e=N.useContext(Pl);return Pe(e,Pc(i)),e}function J0(i){let e=N.useContext(Bt);return Pe(e,Pc(i)),e}function Ac(i){let e=J0(i),n=e.matches[e.matches.length-1];return Pe(n.route.id,`${i} can only be used on routes that contain a unique "id"`),n.route.id}function X0(){return Ac("useRouteId")}function Z0(){var s;let i=N.useContext(Nc),e=Q0("useRouteError"),n=Ac("useRouteError");return i!==void 0?i:(s=e.errors)==null?void 0:s[n]}function ew(){let{router:i}=Y0("useNavigate"),e=Ac("useNavigate"),n=N.useRef(!1);return Vm(()=>{n.current=!0}),N.useCallback(async(l,u={})=>{zt(n.current,$m),n.current&&(typeof l=="number"?i.navigate(l):await i.navigate(l,{fromRouteId:e,...u}))},[i,e])}var Ip={};function Gm(i,e,n){!e&&!Ip[i]&&(Ip[i]=!0,zt(!1,n))}N.memo(tw);function tw({routes:i,future:e,state:n}){return Km(i,void 0,n,e)}function nw({to:i,replace:e,state:n,relative:s}){Pe(fi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=N.useContext(Wt);zt(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=N.useContext(Bt),{pathname:d}=Zn(),f=Al(),p=Rc(i,Tc(u),d,s==="path"),m=JSON.stringify(p);return N.useEffect(()=>{f(JSON.parse(m),{replace:e,state:n,relative:s})},[f,m,s,e,n]),null}function ms(i){Pe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function rw({basename:i="/",children:e=null,location:n,navigationType:s="POP",navigator:l,static:u=!1}){Pe(!fi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=i.replace(/^\/*/,"/"),f=N.useMemo(()=>({basename:d,navigator:l,static:u,future:{}}),[d,l,u]);typeof n=="string"&&(n=di(n));let{pathname:p="/",search:m="",hash:y="",state:v=null,key:E="default"}=n,P=N.useMemo(()=>{let R=Jn(p,d);return R==null?null:{location:{pathname:R,search:m,hash:y,state:v,key:E},navigationType:s}},[d,p,m,y,v,E,s]);return zt(P!=null,`<Router basename="${d}"> is not able to match the URL "${p}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),P==null?null:N.createElement(Wt.Provider,{value:f},N.createElement(As.Provider,{children:e,value:P}))}function iw({children:i,location:e}){return H0(rc(i),e)}function rc(i,e=[]){let n=[];return N.Children.forEach(i,(s,l)=>{if(!N.isValidElement(s))return;let u=[...e,l];if(s.type===N.Fragment){n.push.apply(n,rc(s.props.children,u));return}Pe(s.type===ms,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Pe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=rc(s.props.children,u)),n.push(d)}),n}var rl="get",il="application/x-www-form-urlencoded";function xl(i){return i!=null&&typeof i.tagName=="string"}function sw(i){return xl(i)&&i.tagName.toLowerCase()==="button"}function ow(i){return xl(i)&&i.tagName.toLowerCase()==="form"}function lw(i){return xl(i)&&i.tagName.toLowerCase()==="input"}function aw(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function uw(i,e){return i.button===0&&(!e||e==="_self")&&!aw(i)}var Zo=null;function cw(){if(Zo===null)try{new FormData(document.createElement("form"),0),Zo=!1}catch{Zo=!0}return Zo}var dw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Wu(i){return i!=null&&!dw.has(i)?(zt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${il}"`),null):i}function hw(i,e){let n,s,l,u,d;if(ow(i)){let f=i.getAttribute("action");s=f?Jn(f,e):null,n=i.getAttribute("method")||rl,l=Wu(i.getAttribute("enctype"))||il,u=new FormData(i)}else if(sw(i)||lw(i)&&(i.type==="submit"||i.type==="image")){let f=i.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=i.getAttribute("formaction")||f.getAttribute("action");if(s=p?Jn(p,e):null,n=i.getAttribute("formmethod")||f.getAttribute("method")||rl,l=Wu(i.getAttribute("formenctype"))||Wu(f.getAttribute("enctype"))||il,u=new FormData(f,i),!cw()){let{name:m,type:y,value:v}=i;if(y==="image"){let E=m?`${m}.`:"";u.append(`${E}x`,"0"),u.append(`${E}y`,"0")}else m&&u.append(m,v)}}else{if(xl(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=rl,s=null,l=il,d=i}return u&&l==="text/plain"&&(d=u,u=void 0),{action:s,method:n.toLowerCase(),encType:l,formData:u,body:d}}function xc(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}async function fw(i,e){if(i.id in e)return e[i.id];try{let n=await import(i.module);return e[i.id]=n,n}catch(n){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pw(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function mw(i,e,n){let s=await Promise.all(i.map(async l=>{let u=e.routes[l.route.id];if(u){let d=await fw(u,n);return d.links?d.links():[]}return[]}));return yw(s.flat(1).filter(pw).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function kp(i,e,n,s,l,u){let d=(p,m)=>n[m]?p.route.id!==n[m].route.id:!0,f=(p,m)=>{var y;return n[m].pathname!==p.pathname||((y=n[m].route.path)==null?void 0:y.endsWith("*"))&&n[m].params["*"]!==p.params["*"]};return u==="assets"?e.filter((p,m)=>d(p,m)||f(p,m)):u==="data"?e.filter((p,m)=>{var v;let y=s.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(d(p,m)||f(p,m))return!0;if(p.route.shouldRevalidate){let E=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((v=n[0])==null?void 0:v.params)||{},nextUrl:new URL(i,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function gw(i,e){return _w(i.map(n=>{let s=e.routes[n.route.id];if(!s)return[];let l=[s.module];return s.imports&&(l=l.concat(s.imports)),l}).flat(1))}function _w(i){return[...new Set(i)]}function vw(i){let e={},n=Object.keys(i).sort();for(let s of n)e[s]=i[s];return e}function yw(i,e){let n=new Set;return new Set(e),i.reduce((s,l)=>{let u=JSON.stringify(vw(l));return n.has(u)||(n.add(u),s.push({key:u,link:l})),s},[])}function ww(i){let e=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function Ew(){let i=N.useContext(hi);return xc(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Sw(){let i=N.useContext(Pl);return xc(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Oc=N.createContext(void 0);Oc.displayName="FrameworkContext";function qm(){let i=N.useContext(Oc);return xc(i,"You must render this element inside a <HydratedRouter> element"),i}function Cw(i,e){let n=N.useContext(Oc),[s,l]=N.useState(!1),[u,d]=N.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:m,onMouseLeave:y,onTouchStart:v}=e,E=N.useRef(null);N.useEffect(()=>{if(i==="render"&&d(!0),i==="viewport"){let M=x=>{x.forEach(U=>{d(U.isIntersecting)})},D=new IntersectionObserver(M,{threshold:.5});return E.current&&D.observe(E.current),()=>{D.disconnect()}}},[i]),N.useEffect(()=>{if(s){let M=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(M)}}},[s]);let P=()=>{l(!0)},R=()=>{l(!1),d(!1)};return n?i!=="intent"?[u,E,{}]:[u,E,{onFocus:us(f,P),onBlur:us(p,R),onMouseEnter:us(m,P),onMouseLeave:us(y,R),onTouchStart:us(v,P)}]:[!1,E,{}]}function us(i,e){return n=>{i&&i(n),n.defaultPrevented||e(n)}}function Iw({page:i,...e}){let{router:n}=Ew(),s=N.useMemo(()=>zm(n.routes,i,n.basename),[n.routes,i,n.basename]);return s?N.createElement(Tw,{page:i,matches:s,...e}):null}function kw(i){let{manifest:e,routeModules:n}=qm(),[s,l]=N.useState([]);return N.useEffect(()=>{let u=!1;return mw(i,e,n).then(d=>{u||l(d)}),()=>{u=!0}},[i,e,n]),s}function Tw({page:i,matches:e,...n}){let s=Zn(),{manifest:l,routeModules:u}=qm(),{loaderData:d,matches:f}=Sw(),p=N.useMemo(()=>kp(i,e,f,l,s,"data"),[i,e,f,l,s]),m=N.useMemo(()=>kp(i,e,f,l,s,"assets"),[i,e,f,l,s]),y=N.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let P=new Set,R=!1;if(e.forEach(D=>{var U;let x=l.routes[D.route.id];!x||!x.hasLoader||(!p.some(Q=>Q.route.id===D.route.id)&&D.route.id in d&&((U=u[D.route.id])!=null&&U.shouldRevalidate)||x.hasClientLoader?R=!0:P.add(D.route.id))}),P.size===0)return[];let M=ww(i);return R&&P.size>0&&M.searchParams.set("_routes",e.filter(D=>P.has(D.route.id)).map(D=>D.route.id).join(",")),[M.pathname+M.search]},[d,s,l,p,e,i,u]),v=N.useMemo(()=>gw(m,l),[m,l]),E=kw(m);return N.createElement(N.Fragment,null,y.map(P=>N.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...n})),v.map(P=>N.createElement("link",{key:P,rel:"modulepreload",href:P,...n})),E.map(({key:P,link:R})=>N.createElement("link",{key:P,...R})))}function Rw(...i){return e=>{i.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Ym=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ym&&(window.__reactRouterVersion="7.1.0")}catch{}function Nw({basename:i,children:e,window:n}){let s=N.useRef();s.current==null&&(s.current=p0({window:n,v5Compat:!0}));let l=s.current,[u,d]=N.useState({action:l.action,location:l.location}),f=N.useCallback(p=>{N.startTransition(()=>d(p))},[d]);return N.useLayoutEffect(()=>l.listen(f),[l,f]),N.createElement(rw,{basename:i,children:e,location:u.location,navigationType:u.action,navigator:l})}var Qm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ei=N.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:l,reloadDocument:u,replace:d,state:f,target:p,to:m,preventScrollReset:y,viewTransition:v,...E},P){let{basename:R}=N.useContext(Wt),M=typeof m=="string"&&Qm.test(m),D,x=!1;if(typeof m=="string"&&M&&(D=m,Ym))try{let ye=new URL(window.location.href),Fe=m.startsWith("//")?new URL(ye.protocol+m):new URL(m),Ht=Jn(Fe.pathname,R);Fe.origin===ye.origin&&Ht!=null?m=Ht+Fe.search+Fe.hash:x=!0}catch{zt(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=j0(m,{relative:l}),[Q,ee,he]=Cw(s,E),_e=Ow(m,{replace:d,state:f,target:p,preventScrollReset:y,relative:l,viewTransition:v});function ve(ye){e&&e(ye),ye.defaultPrevented||_e(ye)}let Oe=N.createElement("a",{...E,...he,href:D||U,onClick:x||u?e:ve,ref:Rw(P,ee),target:p,"data-discover":!M&&n==="render"?"true":void 0});return Q&&!M?N.createElement(N.Fragment,null,Oe,N.createElement(Iw,{page:U})):Oe});ei.displayName="Link";var Pw=N.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:l=!1,style:u,to:d,viewTransition:f,children:p,...m},y){let v=xs(d,{relative:m.relative}),E=Zn(),P=N.useContext(Pl),{navigator:R,basename:M}=N.useContext(Wt),D=P!=null&&Fw(v)&&f===!0,x=R.encodeLocation?R.encodeLocation(v).pathname:v.pathname,U=E.pathname,Q=P&&P.navigation&&P.navigation.location?P.navigation.location.pathname:null;n||(U=U.toLowerCase(),Q=Q?Q.toLowerCase():null,x=x.toLowerCase()),Q&&M&&(Q=Jn(Q,M)||Q);const ee=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let he=U===x||!l&&U.startsWith(x)&&U.charAt(ee)==="/",_e=Q!=null&&(Q===x||!l&&Q.startsWith(x)&&Q.charAt(x.length)==="/"),ve={isActive:he,isPending:_e,isTransitioning:D},Oe=he?e:void 0,ye;typeof s=="function"?ye=s(ve):ye=[s,he?"active":null,_e?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let Fe=typeof u=="function"?u(ve):u;return N.createElement(ei,{...m,"aria-current":Oe,className:ye,ref:y,style:Fe,to:d,viewTransition:f},typeof p=="function"?p(ve):p)});Pw.displayName="NavLink";var Aw=N.forwardRef(({discover:i="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:l,state:u,method:d=rl,action:f,onSubmit:p,relative:m,preventScrollReset:y,viewTransition:v,...E},P)=>{let R=Mw(),M=bw(f,{relative:m}),D=d.toLowerCase()==="get"?"get":"post",x=typeof f=="string"&&Qm.test(f),U=Q=>{if(p&&p(Q),Q.defaultPrevented)return;Q.preventDefault();let ee=Q.nativeEvent.submitter,he=(ee==null?void 0:ee.getAttribute("formmethod"))||d;R(ee||Q.currentTarget,{fetcherKey:e,method:he,navigate:n,replace:l,state:u,relative:m,preventScrollReset:y,viewTransition:v})};return N.createElement("form",{ref:P,method:D,action:M,onSubmit:s?p:U,...E,"data-discover":!x&&i==="render"?"true":void 0})});Aw.displayName="Form";function xw(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jm(i){let e=N.useContext(hi);return Pe(e,xw(i)),e}function Ow(i,{target:e,replace:n,state:s,preventScrollReset:l,relative:u,viewTransition:d}={}){let f=Al(),p=Zn(),m=xs(i,{relative:u});return N.useCallback(y=>{if(uw(y,e)){y.preventDefault();let v=n!==void 0?n:Cs(p)===Cs(m);f(i,{replace:v,state:s,preventScrollReset:l,relative:u,viewTransition:d})}},[p,f,m,n,s,e,i,l,u,d])}var Lw=0,Dw=()=>`__${String(++Lw)}__`;function Mw(){let{router:i}=Jm("useSubmit"),{basename:e}=N.useContext(Wt),n=X0();return N.useCallback(async(s,l={})=>{let{action:u,method:d,encType:f,formData:p,body:m}=hw(s,e);if(l.navigate===!1){let y=l.fetcherKey||Dw();await i.fetch(y,n,l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||d,formEncType:l.encType||f,flushSync:l.flushSync})}else await i.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||d,formEncType:l.encType||f,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[i,e,n])}function bw(i,{relative:e}={}){let{basename:n}=N.useContext(Wt),s=N.useContext(Bt);Pe(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),u={...xs(i||".",{relative:e})},d=Zn();if(i==null){u.search=d.search;let f=new URLSearchParams(u.search),p=f.getAll("index");if(p.some(y=>y==="")){f.delete("index"),p.filter(v=>v).forEach(v=>f.append("index",v));let y=f.toString();u.search=y?`?${y}`:""}}return(!i||i===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:mn([n,u.pathname])),Cs(u)}function Fw(i,e={}){let n=N.useContext(Hm);Pe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Jm("useViewTransitionState"),l=xs(i,{relative:e.relative});if(!n.isTransitioning)return!1;let u=Jn(n.currentLocation.pathname,s)||n.currentLocation.pathname,d=Jn(n.nextLocation.pathname,s)||n.nextLocation.pathname;return cl(l.pathname,d)!=null||cl(l.pathname,u)!=null}new TextEncoder;const Tp=({isLoggedIn:i,children:e})=>i?e:o0.createElement(nw,{to:"/login"});function Uw(){return H.jsx("footer",{className:"footer bg-light text-center py-3",children:H.jsx("div",{className:"container",children:H.jsxs("p",{className:"mb-0",children:["© ",new Date().getFullYear()," จัดทำโดย PraiwanX. All Rights Reserved."]})})})}var Rp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=function(i,e){if(!i)throw pi(e)},pi=function(i){return new Error("Firebase Database ("+Xm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},zw=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const l=i[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=i[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=i[n++],d=i[n++],f=i[n++],p=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=i[n++],d=i[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Lc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<i.length;l+=3){const u=i[l],d=l+1<i.length,f=d?i[l+1]:0,p=l+2<i.length,m=p?i[l+2]:0,y=u>>2,v=(u&3)<<4|f>>4;let E=(f&15)<<2|m>>6,P=m&63;p||(P=64,d||(E=64)),s.push(n[y],n[v],n[E],n[P])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Zm(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):zw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<i.length;){const u=n[i.charAt(l++)],f=l<i.length?n[i.charAt(l)]:0;++l;const m=l<i.length?n[i.charAt(l)]:64;++l;const v=l<i.length?n[i.charAt(l)]:64;if(++l,u==null||f==null||m==null||v==null)throw new jw;const E=u<<2|f>>4;if(s.push(E),m!==64){const P=f<<4&240|m>>2;if(s.push(P),v!==64){const R=m<<6&192|v;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class jw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eg=function(i){const e=Zm(i);return Lc.encodeByteArray(e,!0)},dl=function(i){return eg(i).replace(/\./g,"")},hl=function(i){try{return Lc.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(i){return tg(void 0,i)}function tg(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Bw(n)||(i[n]=tg(i[n],e[n]));return i}function Bw(i){return i!=="__proto__"}/**
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
 */function Hw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $w=()=>Hw().__FIREBASE_DEFAULTS__,Vw=()=>{if(typeof process>"u"||typeof Rp>"u")return;const i=Rp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Kw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&hl(i[1]);return e&&JSON.parse(e)},Dc=()=>{try{return $w()||Vw()||Kw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},ng=i=>{var e,n;return(n=(e=Dc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},Gw=i=>{const e=ng(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},rg=()=>{var i;return(i=Dc())===null||i===void 0?void 0:i.config},ig=i=>{var e;return(e=Dc())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function qw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[dl(JSON.stringify(n)),dl(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function Yw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function sg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jw(){const i=st();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function og(){return Xm.NODE_ADMIN===!0}function Xw(){try{return typeof indexedDB=="object"}catch{return!1}}function Zw(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE="FirebaseError";class er extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=eE,Object.setPrototypeOf(this,er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os.prototype.create)}}class Os{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?tE(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new er(l,f,s)}}function tE(i,e){return i.replace(nE,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const nE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(i){return JSON.parse(i)}function Ye(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=function(i){let e={},n={},s={},l="";try{const u=i.split(".");e=Is(hl(u[0])||""),n=Is(hl(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},rE=function(i){const e=lg(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},iE=function(i){const e=lg(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function oi(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function ic(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function fl(i,e,n){const s={};for(const l in i)Object.prototype.hasOwnProperty.call(i,l)&&(s[l]=e.call(n,i[l],l,i));return s}function pl(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=i[l],d=e[l];if(Np(u)&&Np(d)){if(!pl(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Np(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function gs(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,u]=s.split("=");e[decodeURIComponent(l)]=decodeURIComponent(u)}}),e}function _s(i){const e=i.indexOf("?");if(!e)return"";const n=i.indexOf("#",e);return i.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const E=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(E<<1|E>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],p=this.chain_[4],m,y;for(let v=0;v<80;v++){v<40?v<20?(m=f^u&(d^f),y=1518500249):(m=u^d^f,y=1859775393):v<60?(m=u&d|f&(u|d),y=2400959708):(m=u^d^f,y=3395469782);const E=(l<<5|l>>>27)+m+p+y+s[v]&4294967295;p=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=E}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function oE(i,e){const n=new lE(i,e);return n.subscribe.bind(n)}class lE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");aE(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=Bu),l.error===void 0&&(l.error=Bu),l.complete===void 0&&(l.complete=Bu);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aE(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Bu(){}function uE(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let l=i.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,z(s<i.length,"Surrogate pair missing trail surrogate.");const d=i.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Ol=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function En(i){return i&&i._delegate?i._delegate:i}class vr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mr="[DEFAULT]";/**
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
 */class dE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Mc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fE(e))try{this.getOrInitializeService({instanceIdentifier:mr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mr){return this.instances.has(e)}getOptions(e=mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const d=this.instances.get(l);return d&&e(d,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=mr){return this.component?this.component.multipleInstances?e:mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hE(i){return i===mr?void 0:i}function fE(i){return i.instantiationMode==="EAGER"}/**
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
 */class pE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(me||(me={}));const mE={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},gE=me.INFO,_E={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},vE=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),l=_E[e];if(l)console[l](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fc{constructor(e){this.name=e,this._logLevel=gE,this._logHandler=vE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const yE=(i,e)=>e.some(n=>i instanceof n);let Pp,Ap;function wE(){return Pp||(Pp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function EE(){return Ap||(Ap=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ag=new WeakMap,sc=new WeakMap,ug=new WeakMap,Hu=new WeakMap,Uc=new WeakMap;function SE(i){const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("success",u),i.removeEventListener("error",d)},u=()=>{n(Kn(i.result)),l()},d=()=>{s(i.error),l()};i.addEventListener("success",u),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&ag.set(n,i)}).catch(()=>{}),Uc.set(e,i),e}function CE(i){if(sc.has(i))return;const e=new Promise((n,s)=>{const l=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",d),i.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),l()};i.addEventListener("complete",u),i.addEventListener("error",d),i.addEventListener("abort",d)});sc.set(i,e)}let oc={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return sc.get(i);if(e==="objectStoreNames")return i.objectStoreNames||ug.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kn(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function IE(i){oc=i(oc)}function kE(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call($u(this),e,...n);return ug.set(s,e.sort?e.sort():[e]),Kn(s)}:EE().includes(i)?function(...e){return i.apply($u(this),e),Kn(ag.get(this))}:function(...e){return Kn(i.apply($u(this),e))}}function TE(i){return typeof i=="function"?kE(i):(i instanceof IDBTransaction&&CE(i),yE(i,wE())?new Proxy(i,oc):i)}function Kn(i){if(i instanceof IDBRequest)return SE(i);if(Hu.has(i))return Hu.get(i);const e=TE(i);return e!==i&&(Hu.set(i,e),Uc.set(e,i)),e}const $u=i=>Uc.get(i);function RE(i,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(i,e),f=Kn(d);return s&&d.addEventListener("upgradeneeded",p=>{s(Kn(d.result),p.oldVersion,p.newVersion,Kn(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",m=>l(m.oldVersion,m.newVersion,m))}).catch(()=>{}),f}const NE=["get","getKey","getAll","getAllKeys","count"],PE=["put","add","delete","clear"],Vu=new Map;function xp(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Vu.get(e))return Vu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=PE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||NE.includes(n)))return;const u=async function(d,...f){const p=this.transaction(d,l?"readwrite":"readonly");let m=p.store;return s&&(m=m.index(f.shift())),(await Promise.all([m[n](...f),l&&p.done]))[0]};return Vu.set(e,u),u}IE(i=>({...i,get:(e,n,s)=>xp(e,n)||i.get(e,n,s),has:(e,n)=>!!xp(e,n)||i.has(e,n)}));/**
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
 */class AE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xE(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lc="@firebase/app",Op="0.10.18";/**
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
 */const _n=new Fc("@firebase/app"),OE="@firebase/app-compat",LE="@firebase/analytics-compat",DE="@firebase/analytics",ME="@firebase/app-check-compat",bE="@firebase/app-check",FE="@firebase/auth",UE="@firebase/auth-compat",zE="@firebase/database",jE="@firebase/data-connect",WE="@firebase/database-compat",BE="@firebase/functions",HE="@firebase/functions-compat",$E="@firebase/installations",VE="@firebase/installations-compat",KE="@firebase/messaging",GE="@firebase/messaging-compat",qE="@firebase/performance",YE="@firebase/performance-compat",QE="@firebase/remote-config",JE="@firebase/remote-config-compat",XE="@firebase/storage",ZE="@firebase/storage-compat",eS="@firebase/firestore",tS="@firebase/vertexai",nS="@firebase/firestore-compat",rS="firebase",iS="11.2.0";/**
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
 */const ac="[DEFAULT]",sS={[lc]:"fire-core",[OE]:"fire-core-compat",[DE]:"fire-analytics",[LE]:"fire-analytics-compat",[bE]:"fire-app-check",[ME]:"fire-app-check-compat",[FE]:"fire-auth",[UE]:"fire-auth-compat",[zE]:"fire-rtdb",[jE]:"fire-data-connect",[WE]:"fire-rtdb-compat",[BE]:"fire-fn",[HE]:"fire-fn-compat",[$E]:"fire-iid",[VE]:"fire-iid-compat",[KE]:"fire-fcm",[GE]:"fire-fcm-compat",[qE]:"fire-perf",[YE]:"fire-perf-compat",[QE]:"fire-rc",[JE]:"fire-rc-compat",[XE]:"fire-gcs",[ZE]:"fire-gcs-compat",[eS]:"fire-fst",[nS]:"fire-fst-compat",[tS]:"fire-vertex","fire-js":"fire-js",[rS]:"fire-js-all"};/**
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
 */const ml=new Map,oS=new Map,uc=new Map;function Lp(i,e){try{i.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function li(i){const e=i.name;if(uc.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;uc.set(e,i);for(const n of ml.values())Lp(n,i);for(const n of oS.values())Lp(n,i);return!0}function zc(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function cn(i){return i.settings!==void 0}/**
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
 */const lS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gn=new Os("app","Firebase",lS);/**
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
 */class aS{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
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
 */const gi=iS;function cg(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ac,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw Gn.create("bad-app-name",{appName:String(l)});if(n||(n=rg()),!n)throw Gn.create("no-options");const u=ml.get(l);if(u){if(pl(n,u.options)&&pl(s,u.config))return u;throw Gn.create("duplicate-app",{appName:l})}const d=new pE(l);for(const p of uc.values())d.addComponent(p);const f=new aS(n,s,d);return ml.set(l,f),f}function dg(i=ac){const e=ml.get(i);if(!e&&i===ac&&rg())return cg();if(!e)throw Gn.create("no-app",{appName:i});return e}function qn(i,e,n){var s;let l=(s=sS[i])!==null&&s!==void 0?s:i;n&&(l+=`-${n}`);const u=l.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const f=[`Unable to register library "${l}" with version "${e}":`];u&&f.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(f.join(" "));return}li(new vr(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const uS="firebase-heartbeat-database",cS=1,ks="firebase-heartbeat-store";let Ku=null;function hg(){return Ku||(Ku=RE(uS,cS,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ks)}catch(n){console.warn(n)}}}}).catch(i=>{throw Gn.create("idb-open",{originalErrorMessage:i.message})})),Ku}async function dS(i){try{const n=(await hg()).transaction(ks),s=await n.objectStore(ks).get(fg(i));return await n.done,s}catch(e){if(e instanceof er)_n.warn(e.message);else{const n=Gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(n.message)}}}async function Dp(i,e){try{const s=(await hg()).transaction(ks,"readwrite");await s.objectStore(ks).put(e,fg(i)),await s.done}catch(n){if(n instanceof er)_n.warn(n.message);else{const s=Gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(s.message)}}}function fg(i){return`${i.name}!${i.options.appId}`}/**
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
 */const hS=1024,fS=30*24*60*60*1e3;class pS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Mp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const f=new Date(d.date).valueOf();return Date.now()-f<=fS}),this._storage.overwrite(this._heartbeatsCache))}catch(s){_n.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Mp(),{heartbeatsToSend:s,unsentEntries:l}=mS(this._heartbeatsCache.heartbeats),u=dl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return _n.warn(n),""}}}function Mp(){return new Date().toISOString().substring(0,10)}function mS(i,e=hS){const n=[];let s=i.slice();for(const l of i){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),bp(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),bp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class gS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xw()?Zw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await dS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Dp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Dp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function bp(i){return dl(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function _S(i){li(new vr("platform-logger",e=>new AE(e),"PRIVATE")),li(new vr("heartbeat",e=>new pS(e),"PRIVATE")),qn(lc,Op,i),qn(lc,Op,"esm2017"),qn("fire-js","")}_S("");function jc(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(i);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(i,s[l])&&(n[s[l]]=i[s[l]]);return n}function pg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vS=pg,mg=new Os("auth","Firebase",pg());/**
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
 */const gl=new Fc("@firebase/auth");function yS(i,...e){gl.logLevel<=me.WARN&&gl.warn(`Auth (${gi}): ${i}`,...e)}function sl(i,...e){gl.logLevel<=me.ERROR&&gl.error(`Auth (${gi}): ${i}`,...e)}/**
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
 */function jt(i,...e){throw Wc(i,...e)}function Zt(i,...e){return Wc(i,...e)}function gg(i,e,n){const s=Object.assign(Object.assign({},vS()),{[e]:n});return new Os("auth","Firebase",s).create(e,{appName:i.name})}function Yn(i){return gg(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wc(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return mg.create(i,...e)}function X(i,e,...n){if(!i)throw Wc(e,...n)}function dn(i){const e="INTERNAL ASSERTION FAILED: "+i;throw sl(e),new Error(e)}function vn(i,e){i||dn(e)}/**
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
 */function cc(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function wS(){return Fp()==="http:"||Fp()==="https:"}function Fp(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function ES(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wS()||Qw()||"connection"in navigator)?navigator.onLine:!0}function SS(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Ls{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=bc()||sg()}get(){return ES()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bc(i,e){vn(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class _g{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const CS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const IS=new Ls(3e4,6e4);function Cr(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function tr(i,e,n,s,l={}){return vg(i,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=mi(Object.assign({key:i.config.apiKey},d)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const m=Object.assign({method:e,headers:p},u);return Yw()||(m.referrerPolicy="no-referrer"),_g.fetch()(yg(i,i.config.apiHost,n,f),m)})}async function vg(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},CS),e);try{const l=new TS(i),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw el(i,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[p,m]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw el(i,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw el(i,"email-already-in-use",d);if(p==="USER_DISABLED")throw el(i,"user-disabled",d);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw gg(i,y,m);jt(i,y)}}catch(l){if(l instanceof er)throw l;jt(i,"network-request-failed",{message:String(l)})}}async function Ll(i,e,n,s,l={}){const u=await tr(i,e,n,s,l);return"mfaPendingCredential"in u&&jt(i,"multi-factor-auth-required",{_serverResponse:u}),u}function yg(i,e,n,s){const l=`${e}${n}?${s}`;return i.config.emulator?Bc(i.config,l):`${i.config.apiScheme}://${l}`}function kS(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Zt(this.auth,"network-request-failed")),IS.get())})}}function el(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=Zt(i,e,s);return l.customData._tokenResponse=n,l}function Up(i){return i!==void 0&&i.enterprise!==void 0}class RS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return kS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function NS(i,e){return tr(i,"GET","/v2/recaptchaConfig",Cr(i,e))}/**
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
 */async function PS(i,e){return tr(i,"POST","/v1/accounts:delete",e)}async function wg(i,e){return tr(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function vs(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AS(i,e=!1){const n=En(i),s=await n.getIdToken(e),l=Hc(s);X(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:vs(Gu(l.auth_time)),issuedAtTime:vs(Gu(l.iat)),expirationTime:vs(Gu(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Gu(i){return Number(i)*1e3}function Hc(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return sl("JWT malformed, contained fewer than 3 sections"),null;try{const l=hl(n);return l?JSON.parse(l):(sl("Failed to decode base64 JWT payload"),null)}catch(l){return sl("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function zp(i){const e=Hc(i);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ts(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof er&&xS(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function xS({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class OS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vs(this.lastLoginAt),this.creationTime=vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _l(i){var e;const n=i.auth,s=await i.getIdToken(),l=await Ts(i,wg(n,{idToken:s}));X(l==null?void 0:l.users.length,n,"internal-error");const u=l.users[0];i._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Eg(u.providerUserInfo):[],f=DS(i.providerData,d),p=i.isAnonymous,m=!(i.email&&u.passwordHash)&&!(f!=null&&f.length),y=p?m:!1,v={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new dc(u.createdAt,u.lastLoginAt),isAnonymous:y};Object.assign(i,v)}async function LS(i){const e=En(i);await _l(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DS(i,e){return[...i.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Eg(i){return i.map(e=>{var{providerId:n}=e,s=jc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function MS(i,e){const n=await vg(i,{},async()=>{const s=mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=i.config,d=yg(i,l,"/v1/token",`key=${u}`),f=await i._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",_g.fetch()(d,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bS(i,e){return tr(i,"POST","/v2/accounts:revokeToken",Cr(i,e))}/**
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
 */class ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=zp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await MS(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new ti;return s&&(X(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(X(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(X(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ti,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
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
 */function Wn(i,e){X(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class hn{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,u=jc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new dc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await Ts(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AS(this,e)}reload(){return LS(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await _l(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(Yn(this.auth));const e=await this.getIdToken();return await Ts(this,PS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,u,d,f,p,m,y;const v=(s=n.displayName)!==null&&s!==void 0?s:void 0,E=(l=n.email)!==null&&l!==void 0?l:void 0,P=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,R=(d=n.photoURL)!==null&&d!==void 0?d:void 0,M=(f=n.tenantId)!==null&&f!==void 0?f:void 0,D=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,x=(m=n.createdAt)!==null&&m!==void 0?m:void 0,U=(y=n.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:Q,emailVerified:ee,isAnonymous:he,providerData:_e,stsTokenManager:ve}=n;X(Q&&ve,e,"internal-error");const Oe=ti.fromJSON(this.name,ve);X(typeof Q=="string",e,"internal-error"),Wn(v,e.name),Wn(E,e.name),X(typeof ee=="boolean",e,"internal-error"),X(typeof he=="boolean",e,"internal-error"),Wn(P,e.name),Wn(R,e.name),Wn(M,e.name),Wn(D,e.name),Wn(x,e.name),Wn(U,e.name);const ye=new hn({uid:Q,auth:e,email:E,emailVerified:ee,displayName:v,isAnonymous:he,photoURL:R,phoneNumber:P,tenantId:M,stsTokenManager:Oe,createdAt:x,lastLoginAt:U});return _e&&Array.isArray(_e)&&(ye.providerData=_e.map(Fe=>Object.assign({},Fe))),D&&(ye._redirectEventId=D),ye}static async _fromIdTokenResponse(e,n,s=!1){const l=new ti;l.updateFromServerResponse(n);const u=new hn({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await _l(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];X(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?Eg(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),f=new ti;f.updateFromIdToken(s);const p=new hn({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),m={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new dc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,m),p}}/**
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
 */const jp=new Map;function fn(i){vn(i instanceof Function,"Expected a class definition");let e=jp.get(i);return e?(vn(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,jp.set(i,e),e)}/**
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
 */class Sg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sg.type="NONE";const Wp=Sg;/**
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
 */function ol(i,e,n){return`firebase:${i}:${e}:${n}`}class ni{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=ol(this.userKey,l.apiKey,u),this.fullPersistenceKey=ol("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ni(fn(Wp),e,s);const l=(await Promise.all(n.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let u=l[0]||fn(Wp);const d=ol(s,e.config.apiKey,e.name);let f=null;for(const m of n)try{const y=await m._get(d);if(y){const v=hn._fromJSON(e,y);m!==u&&(f=v),u=m;break}}catch{}const p=l.filter(m=>m._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new ni(u,e,s):(u=p[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async m=>{if(m!==u)try{await m._remove(d)}catch{}})),new ni(u,e,s))}}/**
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
 */function Bp(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ng(e))return"Blackberry";if(Pg(e))return"Webos";if(Ig(e))return"Safari";if((e.includes("chrome/")||kg(e))&&!e.includes("edge/"))return"Chrome";if(Rg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Cg(i=st()){return/firefox\//i.test(i)}function Ig(i=st()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kg(i=st()){return/crios\//i.test(i)}function Tg(i=st()){return/iemobile/i.test(i)}function Rg(i=st()){return/android/i.test(i)}function Ng(i=st()){return/blackberry/i.test(i)}function Pg(i=st()){return/webos/i.test(i)}function $c(i=st()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function FS(i=st()){var e;return $c(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function US(){return Jw()&&document.documentMode===10}function Ag(i=st()){return $c(i)||Rg(i)||Pg(i)||Ng(i)||/windows phone/i.test(i)||Tg(i)}/**
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
 */function xg(i,e=[]){let n;switch(i){case"Browser":n=Bp(st());break;case"Worker":n=`${Bp(st())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gi}/${s}`}/**
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
 */class zS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const p=e(u);d(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function jS(i,e={}){return tr(i,"GET","/v2/passwordPolicy",Cr(i,e))}/**
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
 */const WS=6;class BS{constructor(e){var n,s,l,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:WS,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,u,d,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsLowercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class HS{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hp(this),this.idTokenSubscription=new Hp(this),this.beforeStateQueue=new zS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await ni.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wg(this,{idToken:e}),s=await hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(cn(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=l==null?void 0:l._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===f)&&(p!=null&&p.user)&&(l=p.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _l(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(Yn(this));const n=e?En(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(Yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(Yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jS(this),n=new BS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Os("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await bS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await ni.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{d=!0,p()}}else{const p=e.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&yS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _i(i){return En(i)}class Hp{constructor(e){this.auth=e,this.observer=null,this.addObserver=oE(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Dl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $S(i){Dl=i}function Og(i){return Dl.loadJS(i)}function VS(){return Dl.recaptchaEnterpriseScript}function KS(){return Dl.gapiScript}function GS(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class qS{constructor(){this.enterprise=new YS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class YS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const QS="recaptcha-enterprise",Lg="NO_RECAPTCHA";class JS{constructor(e){this.type=QS,this.auth=_i(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(d,f)=>{NS(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const m=new RS(p);return u.tenantId==null?u._agentRecaptchaConfig=m:u._tenantRecaptchaConfigs[u.tenantId]=m,d(m.siteKey)}}).catch(p=>{f(p)})})}function l(u,d,f){const p=window.grecaptcha;Up(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(m=>{d(m)}).catch(()=>{d(Lg)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new qS().execute("siteKey",{action:"verify"}):new Promise((u,d)=>{s(this.auth).then(f=>{if(!n&&Up(window.grecaptcha))l(f,u,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let p=VS();p.length!==0&&(p+=f),Og(p).then(()=>{l(f,u,d)}).catch(m=>{d(m)})}}).catch(f=>{d(f)})})}}async function $p(i,e,n,s=!1,l=!1){const u=new JS(i);let d;if(l)d=Lg;else try{d=await u.verify(n)}catch{d=await u.verify(n,!0)}const f=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,m=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:d}):Object.assign(f,{captchaResponse:d}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Vp(i,e,n,s,l){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await $p(i,e,n,n==="getOobCode");return s(i,d)}else return s(i,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await $p(i,e,n,n==="getOobCode");return s(i,f)}else return Promise.reject(d)})}/**
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
 */function XS(i,e){const n=zc(i,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(pl(u,e??{}))return l;jt(l,"already-initialized")}return n.initialize({options:e})}function ZS(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function eC(i,e,n){const s=_i(i);X(s._canInitEmulator,s,"emulator-config-failed"),X(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=Dg(e),{host:d,port:f}=tC(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${u}//${d}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})}),nC()}function Dg(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function tC(i){const e=Dg(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:Kp(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:Kp(d)}}}function Kp(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function nC(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Vc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}async function rC(i,e){return tr(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function iC(i,e){return Ll(i,"POST","/v1/accounts:signInWithPassword",Cr(i,e))}/**
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
 */async function sC(i,e){return Ll(i,"POST","/v1/accounts:signInWithEmailLink",Cr(i,e))}async function oC(i,e){return Ll(i,"POST","/v1/accounts:signInWithEmailLink",Cr(i,e))}/**
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
 */class Rs extends Vc{constructor(e,n,s,l=null){super("password",s),this._email=e,this._password=n,this._tenantId=l}static _fromEmailAndPassword(e,n){return new Rs(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Rs(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vp(e,n,"signInWithPassword",iC);case"emailLink":return sC(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vp(e,s,"signUpPassword",rC);case"emailLink":return oC(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ri(i,e){return Ll(i,"POST","/v1/accounts:signInWithIdp",Cr(i,e))}/**
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
 */const lC="http://localhost";class yr extends Vc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,u=jc(n,["providerId","signInMethod"]);if(!s||!l)return null;const d=new yr(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return ri(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ri(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ri(e,n)}buildRequest(){const e={requestUri:lC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mi(n)}return e}}/**
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
 */function aC(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uC(i){const e=gs(_s(i)).link,n=e?gs(_s(e)).deep_link_id:null,s=gs(_s(i)).deep_link_id;return(s?gs(_s(s)).link:null)||s||n||e||i}class Kc{constructor(e){var n,s,l,u,d,f;const p=gs(_s(e)),m=(n=p.apiKey)!==null&&n!==void 0?n:null,y=(s=p.oobCode)!==null&&s!==void 0?s:null,v=aC((l=p.mode)!==null&&l!==void 0?l:null);X(m&&y&&v,"argument-error"),this.apiKey=m,this.operation=v,this.code=y,this.continueUrl=(u=p.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(d=p.languageCode)!==null&&d!==void 0?d:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const n=uC(e);try{return new Kc(n)}catch{return null}}}/**
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
 */class vi{constructor(){this.providerId=vi.PROVIDER_ID}static credential(e,n){return Rs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Kc.parseLink(n);return X(s,"argument-error"),Rs._fromEmailAndCode(e,s.code,s.tenantId)}}vi.PROVIDER_ID="password";vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Mg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ds extends Mg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Bn extends Ds{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
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
 */class Hn extends Ds{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Hn.credential(n,s)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
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
 */class $n extends Ds{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
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
 */class Vn extends Ds{constructor(){super("twitter.com")}static credential(e,n){return yr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Vn.credential(n,s)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
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
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await hn._fromIdTokenResponse(e,s,l),d=Gp(s);return new ai({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=Gp(s);return new ai({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function Gp(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class vl extends er{constructor(e,n,s,l){var u;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,vl.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new vl(e,n,s,l)}}function bg(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?vl._fromErrorAndOperation(i,u,e,s):u})}async function cC(i,e,n=!1){const s=await Ts(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return ai._forOperation(i,"link",s)}/**
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
 */async function dC(i,e,n=!1){const{auth:s}=i;if(cn(s.app))return Promise.reject(Yn(s));const l="reauthenticate";try{const u=await Ts(i,bg(s,l,e,i),n);X(u.idToken,s,"internal-error");const d=Hc(u.idToken);X(d,s,"internal-error");const{sub:f}=d;return X(i.uid===f,s,"user-mismatch"),ai._forOperation(i,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&jt(s,"user-mismatch"),u}}/**
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
 */async function Fg(i,e,n=!1){if(cn(i.app))return Promise.reject(Yn(i));const s="signIn",l=await bg(i,s,e),u=await ai._fromIdTokenResponse(i,s,l);return n||await i._updateCurrentUser(u.user),u}async function hC(i,e){return Fg(_i(i),e)}/**
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
 */async function fC(i){const e=_i(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function pC(i,e,n){return cn(i.app)?Promise.reject(Yn(i)):hC(En(i),vi.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&fC(i),s})}function mC(i,e,n,s){return En(i).onIdTokenChanged(e,n,s)}function gC(i,e,n){return En(i).beforeAuthStateChanged(e,n)}const yl="__sak";/**
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
 */class Ug{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yl,"1"),this.storage.removeItem(yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const _C=1e3,vC=10;class zg extends Ug{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ag(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);US()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,vC):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},_C)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zg.type="LOCAL";const yC=zg;/**
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
 */class jg extends Ug{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jg.type="SESSION";const Wg=jg;/**
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
 */function wC(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ml{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new Ml(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async m=>m(n.origin,u)),p=await wC(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ml.receivers=[];/**
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
 */function Gc(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class EC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,p)=>{const m=Gc("",20);l.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(v){const E=v;if(E.data.eventId===m)switch(E.data.status){case"ack":clearTimeout(y),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(E.data.response);break;default:clearTimeout(y),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:m,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function en(){return window}function SC(i){en().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function CC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IC(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function kC(){return Bg()?self:null}/**
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
 */const Hg="firebaseLocalStorageDb",TC=1,wl="firebaseLocalStorage",$g="fbase_key";class Ms{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bl(i,e){return i.transaction([wl],e?"readwrite":"readonly").objectStore(wl)}function RC(){const i=indexedDB.deleteDatabase(Hg);return new Ms(i).toPromise()}function hc(){const i=indexedDB.open(Hg,TC);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(wl,{keyPath:$g})}catch(l){n(l)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(wl)?e(s):(s.close(),await RC(),e(await hc()))})})}async function qp(i,e,n){const s=bl(i,!0).put({[$g]:e,value:n});return new Ms(s).toPromise()}async function NC(i,e){const n=bl(i,!1).get(e),s=await new Ms(n).toPromise();return s===void 0?null:s.value}function Yp(i,e){const n=bl(i,!0).delete(e);return new Ms(n).toPromise()}const PC=800,AC=3;class Vg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>AC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ml._getInstance(kC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CC(),!this.activeServiceWorker)return;this.sender=new EC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hc();return await qp(e,yl,"1"),await Yp(e,yl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>qp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>NC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=bl(l,!1).getAll();return new Ms(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vg.type="LOCAL";const xC=Vg;new Ls(3e4,6e4);/**
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
 */function OC(i,e){return e?fn(e):(X(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class qc extends Vc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LC(i){return Fg(i.auth,new qc(i),i.bypassAuthState)}function DC(i){const{auth:e,user:n}=i;return X(n,e,"internal-error"),dC(n,new qc(i),i.bypassAuthState)}async function MC(i){const{auth:e,user:n}=i;return X(n,e,"internal-error"),cC(n,new qc(i),i.bypassAuthState)}/**
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
 */class Kg{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LC;case"linkViaPopup":case"linkViaRedirect":return MC;case"reauthViaPopup":case"reauthViaRedirect":return DC;default:jt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bC=new Ls(2e3,1e4);class Jr extends Kg{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,Jr.currentPopupAction&&Jr.currentPopupAction.cancel(),Jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bC.get())};e()}}Jr.currentPopupAction=null;/**
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
 */const FC="pendingRedirect",ll=new Map;class UC extends Kg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ll.get(this.auth._key());if(!e){try{const s=await zC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ll.set(this.auth._key(),e)}return this.bypassAuthState||ll.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zC(i,e){const n=BC(e),s=WC(i);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function jC(i,e){ll.set(i._key(),e)}function WC(i){return fn(i._redirectPersistence)}function BC(i){return ol(FC,i.config.apiKey,i.name)}async function HC(i,e,n=!1){if(cn(i.app))return Promise.reject(Yn(i));const s=_i(i),l=OC(s,e),d=await new UC(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
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
 */const $C=10*60*1e3;class VC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Gg(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$C&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qp(e))}saveEventToCache(e){this.cachedEventUids.add(Qp(e)),this.lastProcessedEventTime=Date.now()}}function Qp(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Gg({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KC(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gg(i);default:return!1}}/**
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
 */async function GC(i,e={}){return tr(i,"GET","/v1/projects",e)}/**
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
 */const qC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YC=/^https?/;async function QC(i){if(i.config.emulator)return;const{authorizedDomains:e}=await GC(i);for(const n of e)try{if(JC(n))return}catch{}jt(i,"unauthorized-domain")}function JC(i){const e=cc(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!YC.test(n))return!1;if(qC.test(i))return s===i;const l=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=new Ls(3e4,6e4);function Jp(){const i=en().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function ZC(i){return new Promise((e,n)=>{var s,l,u;function d(){Jp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jp(),n(Zt(i,"network-request-failed"))},timeout:XC.get()})}if(!((l=(s=en().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=en().gapi)===null||u===void 0)&&u.load)d();else{const f=GS("iframefcb");return en()[f]=()=>{gapi.load?d():n(Zt(i,"network-request-failed"))},Og(`${KS()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw al=null,e})}let al=null;function eI(i){return al=al||ZC(i),al}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=new Ls(5e3,15e3),nI="__/auth/iframe",rI="emulator/auth/iframe",iI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oI(i){const e=i.config;X(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Bc(e,rI):`https://${i.config.authDomain}/${nI}`,s={apiKey:e.apiKey,appName:i.name,v:gi},l=sI.get(i.config.apiHost);l&&(s.eid=l);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${mi(s).slice(1)}`}async function lI(i){const e=await eI(i),n=en().gapi;return X(n,i,"internal-error"),e.open({where:document.body,url:oI(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iI,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=Zt(i,"network-request-failed"),f=en().setTimeout(()=>{u(d)},tI.get());function p(){en().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uI=500,cI=600,dI="_blank",hI="http://localhost";class Xp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fI(i,e,n,s=uI,l=cI){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},aI),{width:s.toString(),height:l.toString(),top:u,left:d}),m=st().toLowerCase();n&&(f=kg(m)?dI:n),Cg(m)&&(e=e||hI,p.scrollbars="yes");const y=Object.entries(p).reduce((E,[P,R])=>`${E}${P}=${R},`,"");if(FS(m)&&f!=="_self")return pI(e||"",f),new Xp(null);const v=window.open(e||"",f,y);X(v,i,"popup-blocked");try{v.focus()}catch{}return new Xp(v)}function pI(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const mI="__/auth/handler",gI="emulator/auth/handler",_I=encodeURIComponent("fac");async function Zp(i,e,n,s,l,u){X(i.config.authDomain,i,"auth-domain-config-required"),X(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:gi,eventId:l};if(e instanceof Mg){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",ic(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,v]of Object.entries({}))d[y]=v}if(e instanceof Ds){const y=e.getScopes().filter(v=>v!=="");y.length>0&&(d.scopes=y.join(","))}i.tenantId&&(d.tid=i.tenantId);const f=d;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const p=await i._getAppCheckToken(),m=p?`#${_I}=${encodeURIComponent(p)}`:"";return`${vI(i)}?${mi(f).slice(1)}${m}`}function vI({config:i}){return i.emulator?Bc(i,gI):`https://${i.authDomain}/${mI}`}/**
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
 */const qu="webStorageSupport";class yI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wg,this._completeRedirectFn=HC,this._overrideRedirectResult=jC}async _openPopup(e,n,s,l){var u;vn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await Zp(e,n,s,cc(),l);return fI(e,d,Gc())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await Zp(e,n,s,cc(),l);return SC(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(vn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await lI(e),s=new VC(e);return n.register("authEvent",l=>(X(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qu,{type:qu},l=>{var u;const d=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[qu];d!==void 0&&n(!!d),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ag()||Ig()||$c()}}const wI=yI;var em="@firebase/auth",tm="1.8.2";/**
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
 */class EI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function SI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CI(i){li(new vr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;X(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xg(i)},m=new HS(s,l,u,p);return ZS(m,n),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),li(new vr("auth-internal",e=>{const n=_i(e.getProvider("auth").getImmediate());return(s=>new EI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qn(em,tm,SI(i)),qn(em,tm,"esm2017")}/**
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
 */const II=5*60,kI=ig("authIdTokenMaxAge")||II;let nm=null;const TI=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>kI)return;const l=n==null?void 0:n.token;nm!==l&&(nm=l,await fetch(i,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function RI(i=dg()){const e=zc(i,"auth");if(e.isInitialized())return e.getImmediate();const n=XS(i,{popupRedirectResolver:wI,persistence:[xC,yC,Wg]}),s=ig("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=TI(u.toString());gC(n,d,()=>d(n.currentUser)),mC(n,f=>d(f))}}const l=ng("auth");return l&&eC(n,`http://${l}`),n}function NI(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}$S({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=l=>{const u=Zt("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",NI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CI("Browser");var PI="firebase",AI="11.2.0";/**
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
 */qn(PI,AI,"app");var rm={};const im="@firebase/database",sm="1.0.11";/**
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
 */let qg="";function xI(i){qg=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Is(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return wn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new OI(e)}}catch{}return new LI},_r=Yg("localStorage"),DI=Yg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new Fc("@firebase/database"),MI=function(){let i=1;return function(){return i++}}(),Qg=function(i){const e=cE(i),n=new sE;n.update(e);const s=n.digest();return Lc.encodeByteArray(s)},bs=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=bs.apply(null,s):typeof s=="object"?e+=Ye(s):e+=s,e+=" "}return e};let ys=null,om=!0;const bI=function(i,e){z(!e,"Can't turn on custom loggers persistently."),ii.logLevel=me.VERBOSE,ys=ii.log.bind(ii)},et=function(...i){if(om===!0&&(om=!1,ys===null&&DI.get("logging_enabled")===!0&&bI()),ys){const e=bs.apply(null,i);ys(e)}},Fs=function(i){return function(...e){et(i,...e)}},fc=function(...i){const e="FIREBASE INTERNAL ERROR: "+bs(...i);ii.error(e)},yn=function(...i){const e=`FIREBASE FATAL ERROR: ${bs(...i)}`;throw ii.error(e),new Error(e)},wt=function(...i){const e="FIREBASE WARNING: "+bs(...i);ii.warn(e)},FI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&wt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Jg=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},UI=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ui="[MIN_NAME]",wr="[MAX_NAME]",yi=function(i,e){if(i===e)return 0;if(i===ui||e===wr)return-1;if(e===ui||i===wr)return 1;{const n=lm(i),s=lm(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},zI=function(i,e){return i===e?0:i<e?-1:1},cs=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+Ye(e))},Yc=function(i){if(typeof i!="object"||i===null)return Ye(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ye(e[s]),n+=":",n+=Yc(i[e[s]]);return n+="}",n},Xg=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(i.substring(l,n)):s.push(i.substring(l,l+e));return s};function Nt(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const Zg=function(i){z(!Jg(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,p;i===0?(u=0,d=0,l=1/i===-1/0?1:0):(l=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),u=f+s,d=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(i/Math.pow(2,1-s-n))));const m=[];for(p=n;p;p-=1)m.push(d%2?1:0),d=Math.floor(d/2);for(p=e;p;p-=1)m.push(u%2?1:0),u=Math.floor(u/2);m.push(l?1:0),m.reverse();const y=m.join("");let v="";for(p=0;p<64;p+=8){let E=parseInt(y.substr(p,8),2).toString(16);E.length===1&&(E="0"+E),v=v+E}return v.toLowerCase()},jI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},WI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},BI=new RegExp("^-?(0*)\\d{1,10}$"),HI=-2147483648,$I=2147483647,lm=function(i){if(BI.test(i)){const e=Number(i);if(e>=HI&&e<=$I)return e}return null},Us=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw wt("Exception was thrown by user callback.",n),e},Math.floor(0))}},VI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ws=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class KI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){wt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',wt(e)}}class ul{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ul.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="5",e_="v",t_="s",n_="r",r_="f",i_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,s_="ls",o_="p",pc="ac",l_="websocket",a_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n,s,l,u=!1,d="",f=!1,p=!1){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_r.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_r.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function qI(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function c_(i,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let s;if(e===l_)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===a_)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qI(i)&&(n.ns=i.namespace);const l=[];return Nt(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(){this.counters_={}}incrementCounter(e,n=1){wn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Ww(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu={},Qu={};function Jc(i){const e=i.toString();return Yu[e]||(Yu[e]=new YI),Yu[e]}function QI(i,e){const n=i.toString();return Qu[n]||(Qu[n]=e()),Qu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Us(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="start",XI="close",ZI="pLPCommand",ek="pRTLPCB",d_="id",h_="pw",f_="ser",tk="cb",nk="seg",rk="ts",ik="d",sk="dframe",p_=1870,m_=30,ok=p_-m_,lk=25e3,ak=3e4;class Xr{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fs(e),this.stats_=Jc(n),this.urlFn=p=>(this.appCheckToken&&(p[pc]=this.appCheckToken),c_(n,a_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new JI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ak)),UI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xc((...u)=>{const[d,f,p,m,y]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===am)this.id=f,this.password=p;else if(d===XI)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[am]="t",s[f_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[tk]=this.scriptTagHolder.uniqueCallbackIdentifier),s[e_]=Qc,this.transportSessionId&&(s[t_]=this.transportSessionId),this.lastSessionId&&(s[s_]=this.lastSessionId),this.applicationId&&(s[o_]=this.applicationId),this.appCheckToken&&(s[pc]=this.appCheckToken),typeof location<"u"&&location.hostname&&i_.test(location.hostname)&&(s[n_]=r_);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Xr.forceAllow_=!0}static forceDisallow(){Xr.forceDisallow_=!0}static isAvailable(){return Xr.forceAllow_?!0:!Xr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!jI()&&!WI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=eg(n),l=Xg(s,ok);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[sk]="t",s[d_]=e,s[h_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xc{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=MI(),window[ZI+this.uniqueCallbackIdentifier]=e,window[ek+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xc.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){et("frame writing exception"),f.stack&&et(f.stack),et(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||et("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[d_]=this.myID,e[h_]=this.myPW,e[f_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+m_+s.length<=p_;){const d=this.pendingSegs.shift();s=s+"&"+nk+l+"="+d.seg+"&"+rk+l+"="+d.ts+"&"+ik+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(lk)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{et("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=16384,ck=45e3;let El=null;typeof MozWebSocket<"u"?El=MozWebSocket:typeof WebSocket<"u"&&(El=WebSocket);class Jt{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fs(this.connId),this.stats_=Jc(n),this.connURL=Jt.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[e_]=Qc,typeof location<"u"&&location.hostname&&i_.test(location.hostname)&&(d[n_]=r_),n&&(d[t_]=n),s&&(d[s_]=s),l&&(d[pc]=l),u&&(d[o_]=u),c_(e,l_,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_r.set("previous_websocket_failure",!0);try{let s;og(),this.mySock=new El(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Jt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&El!==null&&!Jt.forceDisallow_}static previouslyFailed(){return _r.isInMemoryStorage||_r.get("previous_websocket_failure")===!0}markConnectionHealthy(){_r.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Is(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Xg(n,uk);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ck))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Jt.responsesRequiredToBeHealthy=2;Jt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{static get ALL_TRANSPORTS(){return[Xr,Jt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Jt.isAvailable();let s=n&&!Jt.previouslyFailed();if(e.webSocketOnly&&(n||wt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Jt];else{const l=this.transports_=[];for(const u of Ns.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);Ns.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ns.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=6e4,hk=5e3,fk=10*1024,pk=100*1024,Ju="t",um="d",mk="s",cm="r",gk="e",dm="o",hm="a",fm="n",pm="p",_k="h";class vk{constructor(e,n,s,l,u,d,f,p,m,y){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fs("c:"+this.id+":"),this.transportManager_=new Ns(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=ws(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ju in e){const n=e[Ju];n===hm?this.upgradeIfSecondaryHealthy_():n===cm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===dm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=cs("t",e),s=cs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:pm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=cs("t",e),s=cs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=cs(Ju,e);if(um in e){const s=e[um];if(n===_k){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===fm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===mk?this.onConnectionShutdown_(s):n===cm?this.onReset_(s):n===gk?fc("Server Error: "+s):n===dm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):fc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Qc!==s&&wt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ws(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(dk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ws(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(hk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:pm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_r.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){z(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends __{static getInstance(){return new Sl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!bc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=32,gm=768;class Te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ge(){return new Te("")}function se(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function Xn(i){return i.pieces_.length-i.pieceNum_}function ke(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new Te(i.pieces_,e)}function v_(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function yk(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function y_(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function w_(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new Te(e,0)}function Ke(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof Te)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new Te(n,0)}function ie(i){return i.pieceNum_>=i.pieces_.length}function Rt(i,e){const n=se(i),s=se(e);if(n===null)return e;if(n===s)return Rt(ke(i),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function E_(i,e){if(Xn(i)!==Xn(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ft(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(Xn(i)>Xn(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class wk{constructor(e,n){this.errorPrefix_=n,this.parts_=y_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ol(this.parts_[s]);S_(this)}}function Ek(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Ol(e),S_(i)}function Sk(i){const e=i.parts_.pop();i.byteLength_-=Ol(e),i.parts_.length>0&&(i.byteLength_-=1)}function S_(i){if(i.byteLength_>gm)throw new Error(i.errorPrefix_+"has a key path longer than "+gm+" bytes ("+i.byteLength_+").");if(i.parts_.length>mm)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+mm+") or object contains a cycle "+gr(i))}function gr(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc extends __{static getInstance(){return new Zc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=1e3,Ck=60*5*1e3,_m=30*1e3,Ik=1.3,kk=3e4,Tk="server_kill",vm=3;class gn extends g_{constructor(e,n,s,l,u,d,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=gn.nextPersistentConnectionId_++,this.log_=Fs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ds,this.maxReconnectDelay_=Ck,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!og())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(Ye(u)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Mc,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const p=f.d,m=f.s;gn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),m!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&wn(e,"w")){const s=oi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();wt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||iE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_m)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=rE(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ye(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):fc("Unrecognized action received from server: "+Ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ds,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ds,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kk&&(this.reconnectDelay_=ds),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ik)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+gn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const p=function(){f?f.close():(d=!0,s())},m=function(v){z(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:p,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,E]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);d?et("getToken() completed but was canceled"):(et("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=E&&E.token,f=new vk(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,P=>{wt(P+" ("+this.repoInfo_.toString()+")"),this.interrupt(Tk)},u))}catch(v){this.log_("Failed to get token: "+v),d||(this.repoInfo_.nodeAdmin&&wt(v),p())}}}interrupt(e){et("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){et("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ic(this.interruptReasons_)&&(this.reconnectDelay_=ds,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>Yc(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new Te(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){et("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=vm&&(this.reconnectDelay_=_m,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){et("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=vm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+qg.replace(/\./g,"-")]=1,bc()?e["framework.cordova"]=1:sg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sl.getInstance().currentlyOnline();return ic(this.interruptReasons_)&&e}}gn.nextPersistentConnectionId_=0;gn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new oe(ui,e),l=new oe(ui,n);return this.compare(s,l)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tl;class C_ extends Fl{static get __EMPTY_NODE(){return tl}static set __EMPTY_NODE(e){tl=e}compare(e,n){return yi(e.name,n.name)}isDefinedOn(e){throw pi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(wr,tl)}makePost(e,n){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,tl)}toString(){return".key"}}const si=new C_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ve{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??Ve.RED,this.left=l??ft.EMPTY_NODE,this.right=u??ft.EMPTY_NODE}copy(e,n,s,l,u){return new Ve(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return ft.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ft.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ve.RED=!0;Ve.BLACK=!1;class Rk{copy(e,n,s,l,u){return this}insert(e,n,s){return new Ve(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ft{constructor(e,n=ft.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ft(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ve.BLACK,null,null))}remove(e){return new ft(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ve.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new nl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new nl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new nl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new nl(this.root_,null,this.comparator_,!0,e)}}ft.EMPTY_NODE=new Rk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(i,e){return yi(i.name,e.name)}function ed(i,e){return yi(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc;function Pk(i){mc=i}const I_=function(i){return typeof i=="number"?"number:"+Zg(i):"string:"+i},k_=function(i){if(i.isLeafNode()){const e=i.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&wn(e,".sv"),"Priority must be a string or number.")}else z(i===mc||i.isEmpty(),"priority of unexpected type.");z(i===mc||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ym;class $e{static set __childrenNodeConstructor(e){ym=e}static get __childrenNodeConstructor(){return ym}constructor(e,n=$e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),k_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ie(e)?this:se(e)===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:$e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=se(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(z(s!==".priority"||Xn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,$e.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+I_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Zg(this.value_):e+=this.value_,this.lazyHash_=Qg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $e.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=$e.VALUE_TYPE_ORDER.indexOf(n),u=$e.VALUE_TYPE_ORDER.indexOf(s);return z(l>=0,"Unknown leaf type: "+n),z(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}$e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let T_,R_;function Ak(i){T_=i}function xk(i){R_=i}class Ok extends Fl{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?yi(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(wr,new $e("[PRIORITY-POST]",R_))}makePost(e,n){const s=T_(e);return new oe(n,new $e("[PRIORITY-POST]",s))}toString(){return".priority"}}const nt=new Ok;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=Math.log(2);class Dk{constructor(e){const n=u=>parseInt(Math.log(u)/Lk,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Cl=function(i,e,n,s){i.sort(e);const l=function(p,m){const y=m-p;let v,E;if(y===0)return null;if(y===1)return v=i[p],E=n?n(v):v,new Ve(E,v.node,Ve.BLACK,null,null);{const P=parseInt(y/2,10)+p,R=l(p,P),M=l(P+1,m);return v=i[P],E=n?n(v):v,new Ve(E,v.node,Ve.BLACK,R,M)}},u=function(p){let m=null,y=null,v=i.length;const E=function(R,M){const D=v-R,x=v;v-=R;const U=l(D+1,x),Q=i[D],ee=n?n(Q):Q;P(new Ve(ee,Q.node,M,null,U))},P=function(R){m?(m.left=R,m=R):(y=R,m=R)};for(let R=0;R<p.count;++R){const M=p.nextBitIsOne(),D=Math.pow(2,p.count-(R+1));M?E(D,Ve.BLACK):(E(D,Ve.BLACK),E(D,Ve.RED))}return y},d=new Dk(i.length),f=u(d);return new ft(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xu;const hs={};class pn{static get Default(){return z(nt,"ChildrenNode.ts has not been loaded"),Xu=Xu||new pn({".priority":hs},{".priority":nt}),Xu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=oi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ft?n:null}hasIndex(e){return wn(this.indexSet_,e.toString())}addIndex(e,n){z(e!==si,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(oe.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=Cl(s,e.getCompare()):f=hs;const p=e.toString(),m=Object.assign({},this.indexSet_);m[p]=e;const y=Object.assign({},this.indexes_);return y[p]=f,new pn(y,m)}addToIndexes(e,n){const s=fl(this.indexes_,(l,u)=>{const d=oi(this.indexSet_,u);if(z(d,"Missing index implementation for "+u),l===hs)if(d.isDefinedOn(e.node)){const f=[],p=n.getIterator(oe.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&f.push(m),m=p.getNext();return f.push(e),Cl(f,d.getCompare())}else return hs;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new oe(e.name,f))),p.insert(e,e.node)}});return new pn(s,this.indexSet_)}removeFromIndexes(e,n){const s=fl(this.indexes_,l=>{if(l===hs)return l;{const u=n.get(e.name);return u?l.remove(new oe(e.name,u)):l}});return new pn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs;class de{static get EMPTY_NODE(){return fs||(fs=new de(new ft(ed),null,pn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&k_(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fs}updatePriority(e){return this.children_.isEmpty()?this:new de(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fs:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(z(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new oe(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?fs:this.priorityNode_;return new de(l,d,u)}}updateChild(e,n){const s=se(e);if(s===null)return n;{z(se(e)!==".priority"||Xn(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(ke(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(nt,(d,f)=>{n[d]=f.val(e),s++,u&&de.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+I_(this.getPriority().val())+":"),this.forEachChild(nt,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":Qg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new oe(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,oe.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zs?-1:0}withIndex(e){if(e===si||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new de(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===si||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(nt),l=n.getIterator(nt);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===si?null:this.indexMap_.get(e.toString())}}de.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Mk extends de{constructor(){super(new ft(ed),de.EMPTY_NODE,pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return de.EMPTY_NODE}isEmpty(){return!1}}const zs=new Mk;Object.defineProperties(oe,{MIN:{value:new oe(ui,de.EMPTY_NODE)},MAX:{value:new oe(wr,zs)}});C_.__EMPTY_NODE=de.EMPTY_NODE;$e.__childrenNodeConstructor=de;Pk(zs);xk(zs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=!0;function tt(i,e=null){if(i===null)return de.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new $e(n,tt(e))}if(!(i instanceof Array)&&bk){const n=[];let s=!1;if(Nt(i,(d,f)=>{if(d.substring(0,1)!=="."){const p=tt(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new oe(d,p)))}}),n.length===0)return de.EMPTY_NODE;const u=Cl(n,Nk,d=>d.name,ed);if(s){const d=Cl(n,nt.getCompare());return new de(u,tt(e),new pn({".priority":d},{".priority":nt}))}else return new de(u,tt(e),pn.Default)}else{let n=de.EMPTY_NODE;return Nt(i,(s,l)=>{if(wn(i,s)&&s.substring(0,1)!=="."){const u=tt(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(tt(e))}}Ak(tt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk extends Fl{constructor(e){super(),this.indexPath_=e,z(!ie(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?yi(e.name,n.name):u}makePost(e,n){const s=tt(e),l=de.EMPTY_NODE.updateChild(this.indexPath_,s);return new oe(n,l)}maxPost(){const e=de.EMPTY_NODE.updateChild(this.indexPath_,zs);return new oe(wr,e)}toString(){return y_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk extends Fl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?yi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const s=tt(e);return new oe(n,s)}toString(){return".value"}}const zk=new Uk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jk(i){return{type:"value",snapshotNode:i}}function Wk(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function Bk(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function wm(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function Hk(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=nt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ui}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:wr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===nt}copy(){const e=new td;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Em(i){const e={};if(i.isDefault())return e;let n;if(i.index_===nt?n="$priority":i.index_===zk?n="$value":i.index_===si?n="$key":(z(i.index_ instanceof Fk,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=Ye(n),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=Ye(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+Ye(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=Ye(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+Ye(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function Sm(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==nt&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends g_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Fs("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=Il.getListenId_(e,s),f={};this.listens_[d]=f;const p=Em(e._queryParams);this.restRequest_(u+".json",p,(m,y)=>{let v=y;if(m===404&&(v=null,m=null),m===null&&this.onDataUpdate_(u,v,!1,s),oi(this.listens_,d)===f){let E;m?m===401?E="permission_denied":E="rest_error:"+m:E="ok",l(E,null)}})}unlisten(e,n){const s=Il.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Em(e._queryParams),s=e._path.toString(),l=new Mc;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+mi(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Is(f.responseText)}catch{wt("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&wt("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(){this.rootNode_=de.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(){return{value:null,children:new Map}}function N_(i,e,n){if(ie(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=se(e);i.children.has(s)||i.children.set(s,kl());const l=i.children.get(s);e=ke(e),N_(l,e,n)}}function gc(i,e,n){i.value!==null?n(e,i.value):Vk(i,(s,l)=>{const u=new Te(e.toString()+"/"+s);gc(l,u,n)})}function Vk(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Nt(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=10*1e3,Gk=30*1e3,qk=5*60*1e3;class Yk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Kk(e);const s=Cm+(Gk-Cm)*Math.random();ws(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Nt(e,(l,u)=>{u>0&&wn(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),ws(this.reportStats_.bind(this),Math.floor(Math.random()*2*qk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xt;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xt||(Xt={}));function P_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function A_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function x_(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Xt.ACK_USER_WRITE,this.source=P_()}operationForChild(e){if(ie(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Te(e));return new Tl(ge(),n,this.revert)}}else return z(se(this.path)===e,"operationForChild called for unrelated child."),new Tl(ke(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Xt.OVERWRITE}operationForChild(e){return ie(this.path)?new Er(this.source,ge(),this.snap.getImmediateChild(e)):new Er(this.source,ke(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Xt.MERGE}operationForChild(e){if(ie(this.path)){const n=this.children.subtree(new Te(e));return n.isEmpty()?null:n.value?new Er(this.source,ge(),n.value):new Ps(this.source,ge(),n)}else return z(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ps(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function Qk(i,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&i.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(Hk(d.childName,d.snapshotNode))}),ps(i,l,"child_removed",e,s,n),ps(i,l,"child_added",e,s,n),ps(i,l,"child_moved",u,s,n),ps(i,l,"child_changed",e,s,n),ps(i,l,"value",e,s,n),l}function ps(i,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,p)=>Xk(i,f,p)),d.forEach(f=>{const p=Jk(i,f,u);l.forEach(m=>{m.respondsTo(f.type)&&e.push(m.createEvent(p,i.query_))})})}function Jk(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function Xk(i,e,n){if(e.childName==null||n.childName==null)throw pi("Should only compare child_ events.");const s=new oe(e.childName,e.snapshotNode),l=new oe(n.childName,n.snapshotNode);return i.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(i,e){return{eventCache:i,serverCache:e}}function Es(i,e,n,s){return O_(new nd(e,n,s),i.serverCache)}function L_(i,e,n,s){return O_(i.eventCache,new nd(e,n,s))}function _c(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function Sr(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zu;const Zk=()=>(Zu||(Zu=new ft(zI)),Zu);class Ie{static fromObject(e){let n=new Ie(null);return Nt(e,(s,l)=>{n=n.set(new Te(s),l)}),n}constructor(e,n=Zk()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ge(),value:this.value};if(ie(e))return null;{const s=se(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(ke(e),n);return u!=null?{path:Ke(new Te(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ie(e))return this;{const n=se(e),s=this.children.get(n);return s!==null?s.subtree(ke(e)):new Ie(null)}}set(e,n){if(ie(e))return new Ie(n,this.children);{const s=se(e),u=(this.children.get(s)||new Ie(null)).set(ke(e),n),d=this.children.insert(s,u);return new Ie(this.value,d)}}remove(e){if(ie(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=se(e),s=this.children.get(n);if(s){const l=s.remove(ke(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new Ie(null):new Ie(this.value,u)}else return this}}get(e){if(ie(e))return this.value;{const n=se(e),s=this.children.get(n);return s?s.get(ke(e)):null}}setTree(e,n){if(ie(e))return n;{const s=se(e),u=(this.children.get(s)||new Ie(null)).setTree(ke(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new Ie(this.value,d)}}fold(e){return this.fold_(ge(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(Ke(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ge(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(ie(e))return null;{const u=se(e),d=this.children.get(u);return d?d.findOnPath_(ke(e),Ke(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ge(),n)}foreachOnPath_(e,n,s){if(ie(e))return this;{this.value&&s(n,this.value);const l=se(e),u=this.children.get(l);return u?u.foreachOnPath_(ke(e),Ke(n,l),s):new Ie(null)}}foreach(e){this.foreach_(ge(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(Ke(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.writeTree_=e}static empty(){return new Ut(new Ie(null))}}function Ss(i,e,n){if(ie(e))return new Ut(new Ie(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=Rt(l,e);return u=u.updateChild(d,n),new Ut(i.writeTree_.set(l,u))}else{const l=new Ie(n),u=i.writeTree_.setTree(e,l);return new Ut(u)}}}function Im(i,e,n){let s=i;return Nt(n,(l,u)=>{s=Ss(s,Ke(e,l),u)}),s}function km(i,e){if(ie(e))return Ut.empty();{const n=i.writeTree_.setTree(e,new Ie(null));return new Ut(n)}}function vc(i,e){return Ir(i,e)!=null}function Ir(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(Rt(n.path,e)):null}function Tm(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(nt,(s,l)=>{e.push(new oe(s,l))}):i.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new oe(s,l.value))}),e}function Qn(i,e){if(ie(e))return i;{const n=Ir(i,e);return n!=null?new Ut(new Ie(n)):new Ut(i.writeTree_.subtree(e))}}function yc(i){return i.writeTree_.isEmpty()}function ci(i,e){return D_(ge(),i.writeTree_,e)}function D_(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(z(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=D_(Ke(i,l),u,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(Ke(i,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(i,e){return j_(e,i)}function eT(i,e,n,s,l){z(s>i.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(i.visibleWrites=Ss(i.visibleWrites,e,n)),i.lastWriteId=s}function tT(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function nT(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let l=s.visible,u=!1,d=i.allWrites.length-1;for(;l&&d>=0;){const f=i.allWrites[d];f.visible&&(d>=n&&rT(f,s.path)?l=!1:Ft(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return iT(i),!0;if(s.snap)i.visibleWrites=km(i.visibleWrites,s.path);else{const f=s.children;Nt(f,p=>{i.visibleWrites=km(i.visibleWrites,Ke(s.path,p))})}return!0}else return!1}function rT(i,e){if(i.snap)return Ft(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&Ft(Ke(i.path,n),e))return!0;return!1}function iT(i){i.visibleWrites=b_(i.allWrites,sT,ge()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function sT(i){return i.visible}function b_(i,e,n){let s=Ut.empty();for(let l=0;l<i.length;++l){const u=i[l];if(e(u)){const d=u.path;let f;if(u.snap)Ft(n,d)?(f=Rt(n,d),s=Ss(s,f,u.snap)):Ft(d,n)&&(f=Rt(d,n),s=Ss(s,ge(),u.snap.getChild(f)));else if(u.children){if(Ft(n,d))f=Rt(n,d),s=Im(s,f,u.children);else if(Ft(d,n))if(f=Rt(d,n),ie(f))s=Im(s,ge(),u.children);else{const p=oi(u.children,se(f));if(p){const m=p.getChild(ke(f));s=Ss(s,ge(),m)}}}else throw pi("WriteRecord should have .snap or .children")}}return s}function F_(i,e,n,s,l){if(!s&&!l){const u=Ir(i.visibleWrites,e);if(u!=null)return u;{const d=Qn(i.visibleWrites,e);if(yc(d))return n;if(n==null&&!vc(d,ge()))return null;{const f=n||de.EMPTY_NODE;return ci(d,f)}}}else{const u=Qn(i.visibleWrites,e);if(!l&&yc(u))return n;if(!l&&n==null&&!vc(u,ge()))return null;{const d=function(m){return(m.visible||l)&&(!s||!~s.indexOf(m.writeId))&&(Ft(m.path,e)||Ft(e,m.path))},f=b_(i.allWrites,d,e),p=n||de.EMPTY_NODE;return ci(f,p)}}}function oT(i,e,n){let s=de.EMPTY_NODE;const l=Ir(i.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(nt,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=Qn(i.visibleWrites,e);return n.forEachChild(nt,(d,f)=>{const p=ci(Qn(u,new Te(d)),f);s=s.updateImmediateChild(d,p)}),Tm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=Qn(i.visibleWrites,e);return Tm(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function lT(i,e,n,s,l){z(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=Ke(e,n);if(vc(i.visibleWrites,u))return null;{const d=Qn(i.visibleWrites,u);return yc(d)?l.getChild(n):ci(d,l.getChild(n))}}function aT(i,e,n,s){const l=Ke(e,n),u=Ir(i.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=Qn(i.visibleWrites,l);return ci(d,s.getNode().getImmediateChild(n))}else return null}function uT(i,e){return Ir(i.visibleWrites,e)}function cT(i,e,n,s,l,u,d){let f;const p=Qn(i.visibleWrites,e),m=Ir(p,ge());if(m!=null)f=m;else if(n!=null)f=ci(p,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const y=[],v=d.getCompare(),E=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let P=E.getNext();for(;P&&y.length<l;)v(P,s)!==0&&y.push(P),P=E.getNext();return y}else return[]}function dT(){return{visibleWrites:Ut.empty(),allWrites:[],lastWriteId:-1}}function wc(i,e,n,s){return F_(i.writeTree,i.treePath,e,n,s)}function U_(i,e){return oT(i.writeTree,i.treePath,e)}function Rm(i,e,n,s){return lT(i.writeTree,i.treePath,e,n,s)}function Rl(i,e){return uT(i.writeTree,Ke(i.treePath,e))}function hT(i,e,n,s,l,u){return cT(i.writeTree,i.treePath,e,n,s,l,u)}function rd(i,e,n){return aT(i.writeTree,i.treePath,e,n)}function z_(i,e){return j_(Ke(i.treePath,e),i.writeTree)}function j_(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,wm(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,Bk(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,Wk(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,wm(s,e.snapshotNode,l.oldSnap));else throw pi("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const W_=new pT;class id{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new nd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Sr(this.viewCache_),u=hT(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}function mT(i,e){z(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function gT(i,e,n,s,l){const u=new fT;let d,f;if(n.type===Xt.OVERWRITE){const m=n;m.source.fromUser?d=Ec(i,e,m.path,m.snap,s,l,u):(z(m.source.fromServer,"Unknown source."),f=m.source.tagged||e.serverCache.isFiltered()&&!ie(m.path),d=Nl(i,e,m.path,m.snap,s,l,f,u))}else if(n.type===Xt.MERGE){const m=n;m.source.fromUser?d=vT(i,e,m.path,m.children,s,l,u):(z(m.source.fromServer,"Unknown source."),f=m.source.tagged||e.serverCache.isFiltered(),d=Sc(i,e,m.path,m.children,s,l,f,u))}else if(n.type===Xt.ACK_USER_WRITE){const m=n;m.revert?d=ET(i,e,m.path,s,l,u):d=yT(i,e,m.path,m.affectedTree,s,l,u)}else if(n.type===Xt.LISTEN_COMPLETE)d=wT(i,e,n.path,s,u);else throw pi("Unknown operation type: "+n.type);const p=u.getChanges();return _T(e,d,p),{viewCache:d,changes:p}}function _T(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=_c(i);(n.length>0||!i.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(jk(_c(e)))}}function B_(i,e,n,s,l,u){const d=e.eventCache;if(Rl(s,n)!=null)return e;{let f,p;if(ie(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Sr(e),y=m instanceof de?m:de.EMPTY_NODE,v=U_(s,y);f=i.filter.updateFullNode(e.eventCache.getNode(),v,u)}else{const m=wc(s,Sr(e));f=i.filter.updateFullNode(e.eventCache.getNode(),m,u)}else{const m=se(n);if(m===".priority"){z(Xn(n)===1,"Can't have a priority with additional path components");const y=d.getNode();p=e.serverCache.getNode();const v=Rm(s,n,y,p);v!=null?f=i.filter.updatePriority(y,v):f=d.getNode()}else{const y=ke(n);let v;if(d.isCompleteForChild(m)){p=e.serverCache.getNode();const E=Rm(s,n,d.getNode(),p);E!=null?v=d.getNode().getImmediateChild(m).updateChild(y,E):v=d.getNode().getImmediateChild(m)}else v=rd(s,m,e.serverCache);v!=null?f=i.filter.updateChild(d.getNode(),m,v,y,l,u):f=d.getNode()}}return Es(e,f,d.isFullyInitialized()||ie(n),i.filter.filtersNodes())}}function Nl(i,e,n,s,l,u,d,f){const p=e.serverCache;let m;const y=d?i.filter:i.filter.getIndexedFilter();if(ie(n))m=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const P=p.getNode().updateChild(n,s);m=y.updateFullNode(p.getNode(),P,null)}else{const P=se(n);if(!p.isCompleteForPath(n)&&Xn(n)>1)return e;const R=ke(n),D=p.getNode().getImmediateChild(P).updateChild(R,s);P===".priority"?m=y.updatePriority(p.getNode(),D):m=y.updateChild(p.getNode(),P,D,R,W_,null)}const v=L_(e,m,p.isFullyInitialized()||ie(n),y.filtersNodes()),E=new id(l,v,u);return B_(i,v,n,l,E,f)}function Ec(i,e,n,s,l,u,d){const f=e.eventCache;let p,m;const y=new id(l,e,u);if(ie(n))m=i.filter.updateFullNode(e.eventCache.getNode(),s,d),p=Es(e,m,!0,i.filter.filtersNodes());else{const v=se(n);if(v===".priority")m=i.filter.updatePriority(e.eventCache.getNode(),s),p=Es(e,m,f.isFullyInitialized(),f.isFiltered());else{const E=ke(n),P=f.getNode().getImmediateChild(v);let R;if(ie(E))R=s;else{const M=y.getCompleteChild(v);M!=null?v_(E)===".priority"&&M.getChild(w_(E)).isEmpty()?R=M:R=M.updateChild(E,s):R=de.EMPTY_NODE}if(P.equals(R))p=e;else{const M=i.filter.updateChild(f.getNode(),v,R,E,y,d);p=Es(e,M,f.isFullyInitialized(),i.filter.filtersNodes())}}}return p}function Nm(i,e){return i.eventCache.isCompleteForChild(e)}function vT(i,e,n,s,l,u,d){let f=e;return s.foreach((p,m)=>{const y=Ke(n,p);Nm(e,se(y))&&(f=Ec(i,f,y,m,l,u,d))}),s.foreach((p,m)=>{const y=Ke(n,p);Nm(e,se(y))||(f=Ec(i,f,y,m,l,u,d))}),f}function Pm(i,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Sc(i,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;ie(n)?m=s:m=new Ie(null).setTree(n,s);const y=e.serverCache.getNode();return m.children.inorderTraversal((v,E)=>{if(y.hasChild(v)){const P=e.serverCache.getNode().getImmediateChild(v),R=Pm(i,P,E);p=Nl(i,p,new Te(v),R,l,u,d,f)}}),m.children.inorderTraversal((v,E)=>{const P=!e.serverCache.isCompleteForChild(v)&&E.value===null;if(!y.hasChild(v)&&!P){const R=e.serverCache.getNode().getImmediateChild(v),M=Pm(i,R,E);p=Nl(i,p,new Te(v),M,l,u,d,f)}}),p}function yT(i,e,n,s,l,u,d){if(Rl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(ie(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Nl(i,e,n,p.getNode().getChild(n),l,u,f,d);if(ie(n)){let m=new Ie(null);return p.getNode().forEachChild(si,(y,v)=>{m=m.set(new Te(y),v)}),Sc(i,e,n,m,l,u,f,d)}else return e}else{let m=new Ie(null);return s.foreach((y,v)=>{const E=Ke(n,y);p.isCompleteForPath(E)&&(m=m.set(y,p.getNode().getChild(E)))}),Sc(i,e,n,m,l,u,f,d)}}function wT(i,e,n,s,l){const u=e.serverCache,d=L_(e,u.getNode(),u.isFullyInitialized()||ie(n),u.isFiltered());return B_(i,d,n,s,W_,l)}function ET(i,e,n,s,l,u){let d;if(Rl(s,n)!=null)return e;{const f=new id(s,e,l),p=e.eventCache.getNode();let m;if(ie(n)||se(n)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=wc(s,Sr(e));else{const v=e.serverCache.getNode();z(v instanceof de,"serverChildren would be complete if leaf node"),y=U_(s,v)}y=y,m=i.filter.updateFullNode(p,y,u)}else{const y=se(n);let v=rd(s,y,e.serverCache);v==null&&e.serverCache.isCompleteForChild(y)&&(v=p.getImmediateChild(y)),v!=null?m=i.filter.updateChild(p,y,v,ke(n),f,u):e.eventCache.getNode().hasChild(y)?m=i.filter.updateChild(p,y,de.EMPTY_NODE,ke(n),f,u):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=wc(s,Sr(e)),d.isLeafNode()&&(m=i.filter.updateFullNode(m,d,u)))}return d=e.serverCache.isFullyInitialized()||Rl(s,ge())!=null,Es(e,m,d,i.filter.filtersNodes())}}function ST(i,e){const n=Sr(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!ie(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function Am(i,e,n,s){e.type===Xt.MERGE&&e.source.queryId!==null&&(z(Sr(i.viewCache_),"We should always have a full cache before handling merges"),z(_c(i.viewCache_),"Missing event cache, even though we have a server cache"));const l=i.viewCache_,u=gT(i.processor_,l,e,n,s);return mT(i.processor_,u.viewCache),z(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=u.viewCache,CT(i,u.changes,u.viewCache.eventCache.getNode())}function CT(i,e,n,s){const l=i.eventRegistrations_;return Qk(i.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xm;function IT(i){z(!xm,"__referenceConstructor has already been defined"),xm=i}function sd(i,e,n,s){const l=e.source.queryId;if(l!==null){const u=i.views.get(l);return z(u!=null,"SyncTree gave us an op for an invalid query."),Am(u,e,n,s)}else{let u=[];for(const d of i.views.values())u=u.concat(Am(d,e,n,s));return u}}function od(i,e){let n=null;for(const s of i.views.values())n=n||ST(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Om;function kT(i){z(!Om,"__referenceConstructor has already been defined"),Om=i}class Lm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=dT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function TT(i,e,n,s,l){return eT(i.pendingWriteTree_,e,n,s,l),l?zl(i,new Er(P_(),e,n)):[]}function Zr(i,e,n=!1){const s=tT(i.pendingWriteTree_,e);if(nT(i.pendingWriteTree_,e)){let u=new Ie(null);return s.snap!=null?u=u.set(ge(),!0):Nt(s.children,d=>{u=u.set(new Te(d),!0)}),zl(i,new Tl(s.path,u,n))}else return[]}function Ul(i,e,n){return zl(i,new Er(A_(),e,n))}function RT(i,e,n){const s=Ie.fromObject(n);return zl(i,new Ps(A_(),e,s))}function NT(i,e,n,s){const l=K_(i,s);if(l!=null){const u=G_(l),d=u.path,f=u.queryId,p=Rt(d,e),m=new Er(x_(f),p,n);return q_(i,d,m)}else return[]}function PT(i,e,n,s){const l=K_(i,s);if(l){const u=G_(l),d=u.path,f=u.queryId,p=Rt(d,e),m=Ie.fromObject(n),y=new Ps(x_(f),p,m);return q_(i,d,y)}else return[]}function H_(i,e,n){const l=i.pendingWriteTree_,u=i.syncPointTree_.findOnPath(e,(d,f)=>{const p=Rt(d,e),m=od(f,p);if(m)return m});return F_(l,e,u,n,!0)}function zl(i,e){return $_(e,i.syncPointTree_,null,M_(i.pendingWriteTree_,ge()))}function $_(i,e,n,s){if(ie(i.path))return V_(i,e,n,s);{const l=e.get(ge());n==null&&l!=null&&(n=od(l,ge()));let u=[];const d=se(i.path),f=i.operationForChild(d),p=e.children.get(d);if(p&&f){const m=n?n.getImmediateChild(d):null,y=z_(s,d);u=u.concat($_(f,p,m,y))}return l&&(u=u.concat(sd(l,i,s,n))),u}}function V_(i,e,n,s){const l=e.get(ge());n==null&&l!=null&&(n=od(l,ge()));let u=[];return e.children.inorderTraversal((d,f)=>{const p=n?n.getImmediateChild(d):null,m=z_(s,d),y=i.operationForChild(d);y&&(u=u.concat(V_(y,f,p,m)))}),l&&(u=u.concat(sd(l,i,s,n))),u}function K_(i,e){return i.tagToQueryMap.get(e)}function G_(i){const e=i.indexOf("$");return z(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new Te(i.substr(0,e))}}function q_(i,e,n){const s=i.syncPointTree_.get(e);z(s,"Missing sync point for query tag that we're tracking");const l=M_(i.pendingWriteTree_,e);return sd(s,n,l,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ld(n)}node(){return this.node_}}class ad{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ke(this.path_,e);return new ad(this.syncTree_,n)}node(){return H_(this.syncTree_,this.path_)}}const AT=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},Dm=function(i,e,n){if(!i||typeof i!="object")return i;if(z(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return xT(i[".sv"],e,n);if(typeof i[".sv"]=="object")return OT(i[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},xT=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+i)}},OT=function(i,e,n){i.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&z(!1,"Unexpected increment value: "+s);const l=e.node();if(z(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},LT=function(i,e,n,s){return ud(e,new ad(n,i),s)},DT=function(i,e,n){return ud(i,new ld(e),n)};function ud(i,e,n){const s=i.getPriority().val(),l=Dm(s,e.getImmediateChild(".priority"),n);let u;if(i.isLeafNode()){const d=i,f=Dm(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new $e(f,tt(l)):i}else{const d=i;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new $e(l))),d.forEachChild(nt,(f,p)=>{const m=ud(p,e.getImmediateChild(f),n);m!==p&&(u=u.updateImmediateChild(f,m))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function dd(i,e){let n=e instanceof Te?e:new Te(e),s=i,l=se(n);for(;l!==null;){const u=oi(s.node.children,l)||{children:{},childCount:0};s=new cd(l,s,u),n=ke(n),l=se(n)}return s}function wi(i){return i.node.value}function Y_(i,e){i.node.value=e,Cc(i)}function Q_(i){return i.node.childCount>0}function MT(i){return wi(i)===void 0&&!Q_(i)}function jl(i,e){Nt(i.node.children,(n,s)=>{e(new cd(n,i,s))})}function J_(i,e,n,s){n&&!s&&e(i),jl(i,l=>{J_(l,e,!0,s)})}function bT(i,e,n){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function js(i){return new Te(i.parent===null?i.name:js(i.parent)+"/"+i.name)}function Cc(i){i.parent!==null&&FT(i.parent,i.name,i)}function FT(i,e,n){const s=MT(n),l=wn(i.node.children,e);s&&l?(delete i.node.children[e],i.node.childCount--,Cc(i)):!s&&!l&&(i.node.children[e]=n.node,i.node.childCount++,Cc(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=/[\[\].#$\/\u0000-\u001F\u007F]/,zT=/[\[\].#$\u0000-\u001F\u007F]/,ec=10*1024*1024,X_=function(i){return typeof i=="string"&&i.length!==0&&!UT.test(i)},jT=function(i){return typeof i=="string"&&i.length!==0&&!zT.test(i)},WT=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),jT(i)},Z_=function(i,e,n){const s=n instanceof Te?new wk(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+gr(s));if(typeof e=="function")throw new Error(i+"contains a function "+gr(s)+" with contents = "+e.toString());if(Jg(e))throw new Error(i+"contains "+e.toString()+" "+gr(s));if(typeof e=="string"&&e.length>ec/3&&Ol(e)>ec)throw new Error(i+"contains a string greater than "+ec+" utf8 bytes "+gr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(Nt(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!X_(d)))throw new Error(i+" contains an invalid key ("+d+") "+gr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ek(s,d),Z_(i,f,s),Sk(s)}),l&&u)throw new Error(i+' contains ".value" child '+gr(s)+" in addition to actual children.")}},BT=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!X_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!WT(n))throw new Error(uE(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $T(i,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!E_(u,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&i.eventLists_.push(n)}function kr(i,e,n){$T(i,n),VT(i,s=>Ft(s,e)||Ft(e,s))}function VT(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const l=i.eventLists_[s];if(l){const u=l.path;e(u)?(KT(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function KT(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();ys&&et("event: "+n.toString()),Us(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT="repo_interrupt",qT=25;class YT{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new HT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=kl(),this.transactionQueueTree_=new cd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function QT(i,e,n){if(i.stats_=Jc(i.repoInfo_),i.forceRestClient_||VI())i.server_=new Il(i.repoInfo_,(s,l,u,d)=>{Mm(i,s,l,u,d)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>bm(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ye(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new gn(i.repoInfo_,e,(s,l,u,d)=>{Mm(i,s,l,u,d)},s=>{bm(i,s)},s=>{XT(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=QI(i.repoInfo_,()=>new Yk(i.stats_,i.server_)),i.infoData_=new $k,i.infoSyncTree_=new Lm({startListening:(s,l,u,d)=>{let f=[];const p=i.infoData_.getNode(s._path);return p.isEmpty()||(f=Ul(i.infoSyncTree_,s._path,p),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),hd(i,"connected",!1),i.serverSyncTree_=new Lm({startListening:(s,l,u,d)=>(i.server_.listen(s,u,l,(f,p)=>{const m=d(f,p);kr(i.eventQueue_,s._path,m)}),[]),stopListening:(s,l)=>{i.server_.unlisten(s,l)}})}function JT(i){const n=i.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ev(i){return AT({timestamp:JT(i)})}function Mm(i,e,n,s,l){i.dataUpdateCount++;const u=new Te(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const p=fl(n,m=>tt(m));d=PT(i.serverSyncTree_,u,p,l)}else{const p=tt(n);d=NT(i.serverSyncTree_,u,p,l)}else if(s){const p=fl(n,m=>tt(m));d=RT(i.serverSyncTree_,u,p)}else{const p=tt(n);d=Ul(i.serverSyncTree_,u,p)}let f=u;d.length>0&&(f=pd(i,u)),kr(i.eventQueue_,f,d)}function bm(i,e){hd(i,"connected",e),e===!1&&e1(i)}function XT(i,e){Nt(e,(n,s)=>{hd(i,n,s)})}function hd(i,e,n){const s=new Te("/.info/"+e),l=tt(n);i.infoData_.updateSnapshot(s,l);const u=Ul(i.infoSyncTree_,s,l);kr(i.eventQueue_,s,u)}function ZT(i){return i.nextWriteId_++}function e1(i){tv(i,"onDisconnectEvents");const e=ev(i),n=kl();gc(i.onDisconnect_,ge(),(l,u)=>{const d=LT(l,u,i.serverSyncTree_,e);N_(n,l,d)});let s=[];gc(n,ge(),(l,u)=>{s=s.concat(Ul(i.serverSyncTree_,l,u));const d=i1(i,l);pd(i,d)}),i.onDisconnect_=kl(),kr(i.eventQueue_,ge(),s)}function t1(i){i.persistentConnection_&&i.persistentConnection_.interrupt(GT)}function tv(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),et(n,...e)}function nv(i,e,n){return H_(i.serverSyncTree_,e,n)||de.EMPTY_NODE}function fd(i,e=i.transactionQueueTree_){if(e||Wl(i,e),wi(e)){const n=iv(i,e);z(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&n1(i,js(e),n)}else Q_(e)&&jl(e,n=>{fd(i,n)})}function n1(i,e,n){const s=n.map(m=>m.currentWriteId),l=nv(i,e,s);let u=l;const d=l.hash();for(let m=0;m<n.length;m++){const y=n[m];z(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const v=Rt(e,y.path);u=u.updateChild(v,y.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;i.server_.put(p.toString(),f,m=>{tv(i,"transaction put response",{path:p.toString(),status:m});let y=[];if(m==="ok"){const v=[];for(let E=0;E<n.length;E++)n[E].status=2,y=y.concat(Zr(i.serverSyncTree_,n[E].currentWriteId)),n[E].onComplete&&v.push(()=>n[E].onComplete(null,!0,n[E].currentOutputSnapshotResolved)),n[E].unwatcher();Wl(i,dd(i.transactionQueueTree_,e)),fd(i,i.transactionQueueTree_),kr(i.eventQueue_,e,y);for(let E=0;E<v.length;E++)Us(v[E])}else{if(m==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{wt("transaction at "+p.toString()+" failed: "+m);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=m}pd(i,e)}},d)}function pd(i,e){const n=rv(i,e),s=js(n),l=iv(i,n);return r1(i,l,s),s}function r1(i,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],m=Rt(n,p.path);let y=!1,v;if(z(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,v=p.abortReason,l=l.concat(Zr(i.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=qT)y=!0,v="maxretry",l=l.concat(Zr(i.serverSyncTree_,p.currentWriteId,!0));else{const E=nv(i,p.path,d);p.currentInputSnapshot=E;const P=e[f].update(E.val());if(P!==void 0){Z_("transaction failed: Data returned ",P,p.path);let R=tt(P);typeof P=="object"&&P!=null&&wn(P,".priority")||(R=R.updatePriority(E.getPriority()));const D=p.currentWriteId,x=ev(i),U=DT(R,E,x);p.currentOutputSnapshotRaw=R,p.currentOutputSnapshotResolved=U,p.currentWriteId=ZT(i),d.splice(d.indexOf(D),1),l=l.concat(TT(i.serverSyncTree_,p.path,U,p.currentWriteId,p.applyLocally)),l=l.concat(Zr(i.serverSyncTree_,D,!0))}else y=!0,v="nodata",l=l.concat(Zr(i.serverSyncTree_,p.currentWriteId,!0))}kr(i.eventQueue_,n,l),l=[],y&&(e[f].status=2,function(E){setTimeout(E,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(v==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(v),!1,null))))}Wl(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)Us(s[f]);fd(i,i.transactionQueueTree_)}function rv(i,e){let n,s=i.transactionQueueTree_;for(n=se(e);n!==null&&wi(s)===void 0;)s=dd(s,n),e=ke(e),n=se(e);return s}function iv(i,e){const n=[];return sv(i,e,n),n.sort((s,l)=>s.order-l.order),n}function sv(i,e,n){const s=wi(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);jl(e,l=>{sv(i,l,n)})}function Wl(i,e){const n=wi(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,Y_(e,n.length>0?n:void 0)}jl(e,s=>{Wl(i,s)})}function i1(i,e){const n=js(rv(i,e)),s=dd(i.transactionQueueTree_,e);return bT(s,l=>{tc(i,l)}),tc(i,s),J_(s,l=>{tc(i,l)}),n}function tc(i,e){const n=wi(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(z(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(z(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(Zr(i.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?Y_(e,void 0):n.length=u+1,kr(i.eventQueue_,js(e),l);for(let d=0;d<s.length;d++)Us(s[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function o1(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):wt(`Invalid query segment '${n}' in query '${i}'`)}return e}const Fm=function(i,e){const n=l1(i),s=n.namespace;n.domain==="firebase.com"&&yn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&yn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||FI();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new u_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new Te(n.pathString)}},l1=function(i){let e="",n="",s="",l="",u="",d=!0,f="https",p=443;if(typeof i=="string"){let m=i.indexOf("//");m>=0&&(f=i.substring(0,m-1),i=i.substring(m+2));let y=i.indexOf("/");y===-1&&(y=i.length);let v=i.indexOf("?");v===-1&&(v=i.length),e=i.substring(0,Math.min(y,v)),y<v&&(l=s1(i.substring(y,v)));const E=o1(i.substring(Math.min(i.length,v)));m=e.indexOf(":"),m>=0?(d=f==="https"||f==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const P=e.slice(0,m);if(P.toLowerCase()==="localhost")n="localhost";else if(P.split(".").length<=2)n=P;else{const R=e.indexOf(".");s=e.substring(0,R).toLowerCase(),n=e.substring(R+1),u=s}"ns"in E&&(u=E.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
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
 */class md{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return ie(this._path)?null:v_(this._path)}get ref(){return new Ei(this._repo,this._path)}get _queryIdentifier(){const e=Sm(this._queryParams),n=Yc(e);return n==="{}"?"default":n}get _queryObject(){return Sm(this._queryParams)}isEqual(e){if(e=En(e),!(e instanceof md))return!1;const n=this._repo===e._repo,s=E_(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+yk(this._path)}}class Ei extends md{constructor(e,n){super(e,n,new td,!1)}get parent(){const e=w_(this._path);return e===null?null:new Ei(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}IT(Ei);kT(Ei);/**
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
 */const a1="FIREBASE_DATABASE_EMULATOR_HOST",Ic={};let u1=!1;function c1(i,e,n,s){i.repoInfo_=new u_(`${e}:${n}`,!1,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0),s&&(i.authTokenProvider_=s)}function d1(i,e,n,s,l){let u=s||i.options.databaseURL;u===void 0&&(i.options.projectId||yn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),et("Using default host for project ",i.options.projectId),u=`${i.options.projectId}-default-rtdb.firebaseio.com`);let d=Fm(u,l),f=d.repoInfo,p;typeof process<"u"&&rm&&(p=rm[a1]),p?(u=`http://${p}?ns=${f.namespace}`,d=Fm(u,l),f=d.repoInfo):d.repoInfo.secure;const m=new GI(i.name,i.options,e);BT("Invalid Firebase Database URL",d),ie(d.path)||yn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=f1(f,i,m,new KI(i.name,n));return new p1(y,i)}function h1(i,e){const n=Ic[e];(!n||n[i.key]!==i)&&yn(`Database ${e}(${i.repoInfo_}) has already been deleted.`),t1(i),delete n[i.key]}function f1(i,e,n,s){let l=Ic[e.name];l||(l={},Ic[e.name]=l);let u=l[i.toURLString()];return u&&yn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new YT(i,u1,n,s),l[i.toURLString()]=u,u}class p1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(QT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ei(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(h1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yn("Cannot call "+e+" on a deleted database.")}}function m1(i=dg(),e){const n=zc(i,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Gw("database");s&&g1(n,...s)}return n}function g1(i,e,n,s={}){i=En(i),i._checkNotDeleted("useEmulator"),i._instanceStarted&&yn("Cannot call useEmulator() after instance has already been initialized.");const l=i._repoInternal;let u;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&yn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new ul(ul.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:qw(s.mockUserToken,i.app.options.projectId);u=new ul(d)}c1(l,e,n,u)}/**
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
 */function _1(i){xI(gi),li(new vr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return d1(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),qn(im,sm,i),qn(im,sm,"esm2017")}gn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};gn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};_1();const v1={apiKey:"AIzaSyBSHYxpYmmY-VfxS3AFXpNhWCg0ebsg3IY",authDomain:"porforlio999.firebaseapp.com",databaseURL:"https://porforlio999-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"porforlio999",storageBucket:"porforlio999.firebasestorage.app",messagingSenderId:"506823677936",appId:"1:506823677936:web:03028fa08e61132e39ef35",measurementId:"G-Q9VJSPT236"},ov=cg(v1),y1=RI(ov);m1(ov);const w1=()=>{const[i,e]=N.useState(""),[n,s]=N.useState(""),[l,u]=N.useState(""),d=Al(),f=async p=>{p.preventDefault();try{await pC(y1,i,n),alert("Logged in successfully!"),d("/home")}catch(m){u("Error: "+m.message)}};return H.jsx("div",{className:"min-vh-100 d-flex align-items-center justify-content-center bg-light",children:H.jsx("div",{className:"card shadow-lg p-4",style:{width:"24rem"},children:H.jsxs("div",{className:"card-body",children:[H.jsx("h2",{className:"card-title text-center mb-4",children:"Login"}),H.jsxs("form",{onSubmit:f,children:[H.jsxs("div",{className:"mb-3",children:[H.jsx("label",{htmlFor:"email",className:"form-label",children:"Email Address"}),H.jsx("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter your email",value:i,onChange:p=>e(p.target.value),required:!0})]}),H.jsxs("div",{className:"mb-3",children:[H.jsx("label",{htmlFor:"password",className:"form-label",children:"Password"}),H.jsx("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter your password",value:n,onChange:p=>s(p.target.value),required:!0})]}),H.jsx("button",{type:"submit",className:"btn btn-primary w-100",children:"Login"})]}),l&&H.jsx("p",{className:"text-danger mt-3",children:l}),H.jsxs("p",{className:"text-center mt-3",children:["Don't have an account? ",H.jsx(ei,{to:"/register",children:"Register here"})]})]})})})};function E1(){const{category:i}=B0(),n={all_certificates:["Certificate A","Certificate B","Certificate C"],best_certificates:["Best Certificate A","Best Certificate B"],profiles_student:["Profile: Student A","Profile: Student B"],complete_project_certificates:["Project A","Project B","Project C"]}[i]||[];return H.jsx("div",{className:"portfolio-container",children:H.jsxs("div",{className:"container mt-5",children:[H.jsx("h1",{children:i.replace(/_/g," ").toUpperCase()}),n.length>0?H.jsx("ul",{children:n.map((s,l)=>H.jsx("li",{children:s},l))}):H.jsx("p",{children:"ไม่มีข้อมูลสำหรับหมวดหมู่นี้"})]})})}function S1(){const[i,e]=N.useState(""),[n,s]=N.useState([]),[l,u]=N.useState(0),[d,f]=N.useState(!1),[p,m]=N.useState(""),y=Al(),v=x=>{const U=x.target.value;e(U),U.length>0?(f(!0),E(U)):f(!1)},E=x=>{const Q=[{label:"ผลงานของฉัน",path:"/all_certificates"},{label:"ผลงานดีเด่น",path:"/best_certificates"},{label:"โปรไฟล์ส่วนตัว",path:"/profiles_student"},{label:"โปรเจคที่สำเร็จ",path:"/project_certificates"}].filter(ee=>ee.label.toLowerCase().includes(x.toLowerCase()));s(Q)},P=x=>{try{e(x.label),f(!1),y(x.path)}catch{m("ไม่สามารถไปยังหน้านั้นได้!")}},R=x=>{if(x.key==="ArrowDown")l<n.length-1&&u(l+1);else if(x.key==="ArrowUp")l>0&&u(l-1);else if(x.key==="Enter"){const U=n[l];P(U)}},M=()=>{i.length===0&&(f(!0),E(""))},D=()=>{f(!1)};return H.jsxs("div",{className:"search-container",style:{position:"relative"},children:[H.jsxs("form",{onSubmit:x=>x.preventDefault(),className:"d-flex",children:[H.jsx("input",{type:"text",className:"form-control me-2",placeholder:"ค้นหา...",value:i,onChange:v,onKeyDown:R,onFocus:M,onBlur:D}),H.jsx("button",{type:"submit",className:"btn btn-outline-primary",children:"ค้นหา"})]}),d&&n.length>0&&H.jsx("ul",{className:"suggestions-list",children:n.map((x,U)=>H.jsx("li",{onClick:()=>P(x),className:`suggestion-item ${l===U?"active":""}`,children:x.label},U))}),p&&H.jsx("div",{className:"alert alert-danger",children:p})]})}function Um(){return H.jsx("div",{className:"home-container",children:H.jsxs("div",{className:"container mt-5",children:[H.jsx("h1",{children:"Welcome to PraiwanX"}),H.jsx("p",{children:"ยินดีต้อนรับเข้าสู่เว็บไซต์ เก็บผลงาน หรือ Portfolio"})]})})}function C1(){const[i,e]=N.useState(!1);return H.jsx("div",{className:"app-container",children:H.jsxs(Nw,{children:[H.jsxs("div",{className:"App",children:[H.jsx("nav",{className:"navbar navbar-expand-lg navbar-light bg-light shadow",children:H.jsxs("div",{className:"container-fluid",children:[H.jsx(ei,{className:"navbar-brand fw-bold",to:"/",children:"PraiwanX"}),H.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:H.jsx("span",{className:"navbar-toggler-icon"})}),H.jsxs("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[H.jsxs("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[H.jsx("li",{className:"nav-item",children:H.jsx(ei,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),i?H.jsx("li",{className:"nav-item",children:H.jsx("button",{className:"btn btn-outline-danger ms-3",onClick:()=>e(!1),children:"Logout"})}):H.jsx("li",{className:"nav-item",children:H.jsx(ei,{className:"nav-link",to:"/login",children:"Login"})})]}),H.jsx(S1,{})]})]})}),H.jsxs(iw,{children:[H.jsx(ms,{path:"/",element:H.jsx(Um,{})}),H.jsx(ms,{path:"/login",element:H.jsx(w1,{setIsLoggedIn:e})}),H.jsx(ms,{path:"/portfolio",element:H.jsx(Tp,{isLoggedIn:i,children:H.jsx(E1,{})})}),H.jsx(ms,{path:"/protected",element:H.jsx(Tp,{isLoggedIn:i,children:H.jsx(Um,{})})})]})]}),H.jsx(Uw,{})]})})}h0.createRoot(document.getElementById("root")).render(H.jsx(N.StrictMode,{children:H.jsx(C1,{})}));
