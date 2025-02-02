(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function n0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var op={exports:{}},os={},lp={exports:{}},ne={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var up;function r0(){if(up)return ne;up=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function k(E){return E===null||typeof E!="object"?null:(E=v&&E[v]||E["@@iterator"],typeof E=="function"?E:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function x(E,O,te){this.props=E,this.context=O,this.refs=M,this.updater=te||P}x.prototype.isReactComponent={},x.prototype.setState=function(E,O){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,O,"setState")},x.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function D(){}D.prototype=x.prototype;function z(E,O,te){this.props=E,this.context=O,this.refs=M,this.updater=te||P}var ee=z.prototype=new D;ee.constructor=z,T(ee,x.prototype),ee.isPureReactComponent=!0;var X=Array.isArray,pe=Object.prototype.hasOwnProperty,ve={current:null},we={key:!0,ref:!0,__self:!0,__source:!0};function me(E,O,te){var re,le={},ue=null,_e=null;if(O!=null)for(re in O.ref!==void 0&&(_e=O.ref),O.key!==void 0&&(ue=""+O.key),O)pe.call(O,re)&&!we.hasOwnProperty(re)&&(le[re]=O[re]);var he=arguments.length-2;if(he===1)le.children=te;else if(1<he){for(var Te=Array(he),mt=0;mt<he;mt++)Te[mt]=arguments[mt+2];le.children=Te}if(E&&E.defaultProps)for(re in he=E.defaultProps,he)le[re]===void 0&&(le[re]=he[re]);return{$$typeof:i,type:E,key:ue,ref:_e,props:le,_owner:ve.current}}function Le(E,O){return{$$typeof:i,type:E.type,key:O,ref:E.ref,props:E.props,_owner:E._owner}}function Ge(E){return typeof E=="object"&&E!==null&&E.$$typeof===i}function tr(E){var O={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(te){return O[te]})}var Bt=/\/+/g;function pt(E,O){return typeof E=="object"&&E!==null&&E.key!=null?tr(""+E.key):O.toString(36)}function Pt(E,O,te,re,le){var ue=typeof E;(ue==="undefined"||ue==="boolean")&&(E=null);var _e=!1;if(E===null)_e=!0;else switch(ue){case"string":case"number":_e=!0;break;case"object":switch(E.$$typeof){case i:case e:_e=!0}}if(_e)return _e=E,le=le(_e),E=re===""?"."+pt(_e,0):re,X(le)?(te="",E!=null&&(te=E.replace(Bt,"$&/")+"/"),Pt(le,O,te,"",function(mt){return mt})):le!=null&&(Ge(le)&&(le=Le(le,te+(!le.key||_e&&_e.key===le.key?"":(""+le.key).replace(Bt,"$&/")+"/")+E)),O.push(le)),1;if(_e=0,re=re===""?".":re+":",X(E))for(var he=0;he<E.length;he++){ue=E[he];var Te=re+pt(ue,he);_e+=Pt(ue,O,te,Te,le)}else if(Te=k(E),typeof Te=="function")for(E=Te.call(E),he=0;!(ue=E.next()).done;)ue=ue.value,Te=re+pt(ue,he++),_e+=Pt(ue,O,te,Te,le);else if(ue==="object")throw O=String(E),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return _e}function $t(E,O,te){if(E==null)return E;var re=[],le=0;return Pt(E,re,"","",function(ue){return O.call(te,ue,le++)}),re}function at(E){if(E._status===-1){var O=E._result;O=O(),O.then(function(te){(E._status===0||E._status===-1)&&(E._status=1,E._result=te)},function(te){(E._status===0||E._status===-1)&&(E._status=2,E._result=te)}),E._status===-1&&(E._status=0,E._result=O)}if(E._status===1)return E._result.default;throw E._result}var Oe={current:null},j={transition:null},J={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:j,ReactCurrentOwner:ve};function $(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:$t,forEach:function(E,O,te){$t(E,function(){O.apply(this,arguments)},te)},count:function(E){var O=0;return $t(E,function(){O++}),O},toArray:function(E){return $t(E,function(O){return O})||[]},only:function(E){if(!Ge(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},ne.Component=x,ne.Fragment=n,ne.Profiler=o,ne.PureComponent=z,ne.StrictMode=s,ne.Suspense=p,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,ne.act=$,ne.cloneElement=function(E,O,te){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var re=T({},E.props),le=E.key,ue=E.ref,_e=E._owner;if(O!=null){if(O.ref!==void 0&&(ue=O.ref,_e=ve.current),O.key!==void 0&&(le=""+O.key),E.type&&E.type.defaultProps)var he=E.type.defaultProps;for(Te in O)pe.call(O,Te)&&!we.hasOwnProperty(Te)&&(re[Te]=O[Te]===void 0&&he!==void 0?he[Te]:O[Te])}var Te=arguments.length-2;if(Te===1)re.children=te;else if(1<Te){he=Array(Te);for(var mt=0;mt<Te;mt++)he[mt]=arguments[mt+2];re.children=he}return{$$typeof:i,type:E.type,key:le,ref:ue,props:re,_owner:_e}},ne.createContext=function(E){return E={$$typeof:d,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:u,_context:E},E.Consumer=E},ne.createElement=me,ne.createFactory=function(E){var O=me.bind(null,E);return O.type=E,O},ne.createRef=function(){return{current:null}},ne.forwardRef=function(E){return{$$typeof:f,render:E}},ne.isValidElement=Ge,ne.lazy=function(E){return{$$typeof:_,_payload:{_status:-1,_result:E},_init:at}},ne.memo=function(E,O){return{$$typeof:g,type:E,compare:O===void 0?null:O}},ne.startTransition=function(E){var O=j.transition;j.transition={};try{E()}finally{j.transition=O}},ne.unstable_act=$,ne.useCallback=function(E,O){return Oe.current.useCallback(E,O)},ne.useContext=function(E){return Oe.current.useContext(E)},ne.useDebugValue=function(){},ne.useDeferredValue=function(E){return Oe.current.useDeferredValue(E)},ne.useEffect=function(E,O){return Oe.current.useEffect(E,O)},ne.useId=function(){return Oe.current.useId()},ne.useImperativeHandle=function(E,O,te){return Oe.current.useImperativeHandle(E,O,te)},ne.useInsertionEffect=function(E,O){return Oe.current.useInsertionEffect(E,O)},ne.useLayoutEffect=function(E,O){return Oe.current.useLayoutEffect(E,O)},ne.useMemo=function(E,O){return Oe.current.useMemo(E,O)},ne.useReducer=function(E,O,te){return Oe.current.useReducer(E,O,te)},ne.useRef=function(E){return Oe.current.useRef(E)},ne.useState=function(E){return Oe.current.useState(E)},ne.useSyncExternalStore=function(E,O,te){return Oe.current.useSyncExternalStore(E,O,te)},ne.useTransition=function(){return Oe.current.useTransition()},ne.version="18.3.1",ne}var cp;function bc(){return cp||(cp=1,lp.exports=r0()),lp.exports}/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var dp;function i0(){if(dp)return os;dp=1;var i=bc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,g){var _,v={},k=null,P=null;g!==void 0&&(k=""+g),p.key!==void 0&&(k=""+p.key),p.ref!==void 0&&(P=p.ref);for(_ in p)s.call(p,_)&&!u.hasOwnProperty(_)&&(v[_]=p[_]);if(f&&f.defaultProps)for(_ in p=f.defaultProps,p)v[_]===void 0&&(v[_]=p[_]);return{$$typeof:e,type:f,key:k,ref:P,props:v,_owner:o.current}}return os.Fragment=n,os.jsx=d,os.jsxs=d,os}var hp;function s0(){return hp||(hp=1,op.exports=i0()),op.exports}var B=s0(),N=bc();const a0=n0(N);var Qa={},Lu={exports:{}},ht={},fp={exports:{}},pp={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var mp;function o0(){return mp||(mp=1,function(i){function e(j,J){var $=j.length;j.push(J);e:for(;0<$;){var E=$-1>>>1,O=j[E];if(0<o(O,J))j[E]=J,j[$]=O,$=E;else break e}}function n(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var J=j[0],$=j.pop();if($!==J){j[0]=$;e:for(var E=0,O=j.length,te=O>>>1;E<te;){var re=2*(E+1)-1,le=j[re],ue=re+1,_e=j[ue];if(0>o(le,$))ue<O&&0>o(_e,le)?(j[E]=_e,j[ue]=$,E=ue):(j[E]=le,j[re]=$,E=re);else if(ue<O&&0>o(_e,$))j[E]=_e,j[ue]=$,E=ue;else break e}}return J}function o(j,J){var $=j.sortIndex-J.sortIndex;return $!==0?$:j.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();i.unstable_now=function(){return d.now()-f}}var p=[],g=[],_=1,v=null,k=3,P=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(j){for(var J=n(g);J!==null;){if(J.callback===null)s(g);else if(J.startTime<=j)s(g),J.sortIndex=J.expirationTime,e(p,J);else break;J=n(g)}}function X(j){if(M=!1,ee(j),!T)if(n(p)!==null)T=!0,at(pe);else{var J=n(g);J!==null&&Oe(X,J.startTime-j)}}function pe(j,J){T=!1,M&&(M=!1,D(me),me=-1),P=!0;var $=k;try{for(ee(J),v=n(p);v!==null&&(!(v.expirationTime>J)||j&&!tr());){var E=v.callback;if(typeof E=="function"){v.callback=null,k=v.priorityLevel;var O=E(v.expirationTime<=J);J=i.unstable_now(),typeof O=="function"?v.callback=O:v===n(p)&&s(p),ee(J)}else s(p);v=n(p)}if(v!==null)var te=!0;else{var re=n(g);re!==null&&Oe(X,re.startTime-J),te=!1}return te}finally{v=null,k=$,P=!1}}var ve=!1,we=null,me=-1,Le=5,Ge=-1;function tr(){return!(i.unstable_now()-Ge<Le)}function Bt(){if(we!==null){var j=i.unstable_now();Ge=j;var J=!0;try{J=we(!0,j)}finally{J?pt():(ve=!1,we=null)}}else ve=!1}var pt;if(typeof z=="function")pt=function(){z(Bt)};else if(typeof MessageChannel<"u"){var Pt=new MessageChannel,$t=Pt.port2;Pt.port1.onmessage=Bt,pt=function(){$t.postMessage(null)}}else pt=function(){x(Bt,0)};function at(j){we=j,ve||(ve=!0,pt())}function Oe(j,J){me=x(function(){j(i.unstable_now())},J)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(j){j.callback=null},i.unstable_continueExecution=function(){T||P||(T=!0,at(pe))},i.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Le=0<j?Math.floor(1e3/j):5},i.unstable_getCurrentPriorityLevel=function(){return k},i.unstable_getFirstCallbackNode=function(){return n(p)},i.unstable_next=function(j){switch(k){case 1:case 2:case 3:var J=3;break;default:J=k}var $=k;k=J;try{return j()}finally{k=$}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(j,J){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var $=k;k=j;try{return J()}finally{k=$}},i.unstable_scheduleCallback=function(j,J,$){var E=i.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?E+$:E):$=E,j){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=$+O,j={id:_++,callback:J,priorityLevel:j,startTime:$,expirationTime:O,sortIndex:-1},$>E?(j.sortIndex=$,e(g,j),n(p)===null&&j===n(g)&&(M?(D(me),me=-1):M=!0,Oe(X,$-E))):(j.sortIndex=O,e(p,j),T||P||(T=!0,at(pe))),j},i.unstable_shouldYield=tr,i.unstable_wrapCallback=function(j){var J=k;return function(){var $=k;k=J;try{return j.apply(this,arguments)}finally{k=$}}}}(pp)),pp}var gp;function l0(){return gp||(gp=1,fp.exports=o0()),fp.exports}/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var yp;function u0(){if(yp)return ht;yp=1;var i=bc(),e=l0();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(o[t]=r,t=0;t<r.length;t++)s.add(r[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function k(t){return p.call(v,t)?!0:p.call(_,t)?!1:g.test(t)?v[t]=!0:(_[t]=!0,!1)}function P(t,r,a,l){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,r,a,l){if(r===null||typeof r>"u"||P(t,r,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(t,r,a,l,c,h,m){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=m}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){x[t]=new M(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];x[r]=new M(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){x[t]=new M(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){x[t]=new M(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){x[t]=new M(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){x[t]=new M(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){x[t]=new M(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){x[t]=new M(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){x[t]=new M(t,5,!1,t.toLowerCase(),null,!1,!1)});var D=/[\-:]([a-z])/g;function z(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(D,z);x[r]=new M(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(D,z);x[r]=new M(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(D,z);x[r]=new M(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){x[t]=new M(t,1,!1,t.toLowerCase(),null,!1,!1)}),x.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){x[t]=new M(t,1,!1,t.toLowerCase(),null,!0,!0)});function ee(t,r,a,l){var c=x.hasOwnProperty(r)?x[r]:null;(c!==null?c.type!==0:l||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(T(r,a,c,l)&&(a=null),l||c===null?k(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):c.mustUseProperty?t[c.propertyName]=a===null?c.type===3?!1:"":a:(r=c.attributeName,l=c.attributeNamespace,a===null?t.removeAttribute(r):(c=c.type,a=c===3||c===4&&a===!0?"":""+a,l?t.setAttributeNS(l,r,a):t.setAttribute(r,a))))}var X=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pe=Symbol.for("react.element"),ve=Symbol.for("react.portal"),we=Symbol.for("react.fragment"),me=Symbol.for("react.strict_mode"),Le=Symbol.for("react.profiler"),Ge=Symbol.for("react.provider"),tr=Symbol.for("react.context"),Bt=Symbol.for("react.forward_ref"),pt=Symbol.for("react.suspense"),Pt=Symbol.for("react.suspense_list"),$t=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),Oe=Symbol.for("react.offscreen"),j=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var $=Object.assign,E;function O(t){if(E===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);E=r&&r[1]||""}return`
`+E+t}var te=!1;function re(t,r){if(!t||te)return"";te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(I){var l=I}Reflect.construct(t,[],r)}else{try{r.call()}catch(I){l=I}t.call(r.prototype)}else{try{throw Error()}catch(I){l=I}t()}}catch(I){if(I&&l&&typeof I.stack=="string"){for(var c=I.stack.split(`
`),h=l.stack.split(`
`),m=c.length-1,y=h.length-1;1<=m&&0<=y&&c[m]!==h[y];)y--;for(;1<=m&&0<=y;m--,y--)if(c[m]!==h[y]){if(m!==1||y!==1)do if(m--,y--,0>y||c[m]!==h[y]){var b=`
`+c[m].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=m&&0<=y);break}}}finally{te=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?O(t):""}function le(t){switch(t.tag){case 5:return O(t.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return t=re(t.type,!1),t;case 11:return t=re(t.type.render,!1),t;case 1:return t=re(t.type,!0),t;default:return""}}function ue(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case we:return"Fragment";case ve:return"Portal";case Le:return"Profiler";case me:return"StrictMode";case pt:return"Suspense";case Pt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tr:return(t.displayName||"Context")+".Consumer";case Ge:return(t._context.displayName||"Context")+".Provider";case Bt:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $t:return r=t.displayName||null,r!==null?r:ue(t.type)||"Memo";case at:r=t._payload,t=t._init;try{return ue(t(r))}catch{}}return null}function _e(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(r);case 8:return r===me?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function he(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Te(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function mt(t){var r=Te(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),l=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,h=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return c.call(this)},set:function(m){l=""+m,h.call(this,m)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(m){l=""+m},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Ws(t){t._valueTracker||(t._valueTracker=mt(t))}function dd(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return t&&(l=Te(t)?t.checked?"true":"false":t.value),t=l,t!==a?(r.setValue(t),!0):!1}function Hs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ho(t,r){var a=r.checked;return $({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function hd(t,r){var a=r.defaultValue==null?"":r.defaultValue,l=r.checked!=null?r.checked:r.defaultChecked;a=he(r.value!=null?r.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function fd(t,r){r=r.checked,r!=null&&ee(t,"checked",r,!1)}function Bo(t,r){fd(t,r);var a=he(r.value),l=r.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?$o(t,r.type,a):r.hasOwnProperty("defaultValue")&&$o(t,r.type,he(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function pd(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var l=r.type;if(!(l!=="submit"&&l!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function $o(t,r,a){(r!=="number"||Hs(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var ki=Array.isArray;function Ir(t,r,a,l){if(t=t.options,r){r={};for(var c=0;c<a.length;c++)r["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=r.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&l&&(t[a].defaultSelected=!0)}else{for(a=""+he(a),r=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}r!==null||t[c].disabled||(r=t[c])}r!==null&&(r.selected=!0)}}function Vo(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return $({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function md(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(n(92));if(ki(a)){if(1<a.length)throw Error(n(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:he(a)}}function gd(t,r){var a=he(r.value),l=he(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function yd(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function vd(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qo(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?vd(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Bs,_d=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,l,c){MSApp.execUnsafeLocalFunction(function(){return t(r,a,l,c)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Bs=Bs||document.createElement("div"),Bs.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Bs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Ei(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var Si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ov=["Webkit","ms","Moz","O"];Object.keys(Si).forEach(function(t){ov.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Si[r]=Si[t]})});function bd(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Si.hasOwnProperty(t)&&Si[t]?(""+r).trim():r+"px"}function wd(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var l=a.indexOf("--")===0,c=bd(a,r[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,c):t[a]=c}}var lv=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ko(t,r){if(r){if(lv[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function Yo(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Go=null;function Jo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qo=null,Tr=null,Nr=null;function kd(t){if(t=qi(t)){if(typeof Qo!="function")throw Error(n(280));var r=t.stateNode;r&&(r=ha(r),Qo(t.stateNode,t.type,r))}}function Ed(t){Tr?Nr?Nr.push(t):Nr=[t]:Tr=t}function Sd(){if(Tr){var t=Tr,r=Nr;if(Nr=Tr=null,kd(t),r)for(t=0;t<r.length;t++)kd(r[t])}}function Cd(t,r){return t(r)}function Id(){}var Zo=!1;function Td(t,r,a){if(Zo)return t(r,a);Zo=!0;try{return Cd(t,r,a)}finally{Zo=!1,(Tr!==null||Nr!==null)&&(Id(),Sd())}}function Ci(t,r){var a=t.stateNode;if(a===null)return null;var l=ha(a);if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,r,typeof a));return a}var Xo=!1;if(f)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){Xo=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{Xo=!1}function uv(t,r,a,l,c,h,m,y,b){var I=Array.prototype.slice.call(arguments,3);try{r.apply(a,I)}catch(A){this.onError(A)}}var Ti=!1,$s=null,Vs=!1,el=null,cv={onError:function(t){Ti=!0,$s=t}};function dv(t,r,a,l,c,h,m,y,b){Ti=!1,$s=null,uv.apply(cv,arguments)}function hv(t,r,a,l,c,h,m,y,b){if(dv.apply(this,arguments),Ti){if(Ti){var I=$s;Ti=!1,$s=null}else throw Error(n(198));Vs||(Vs=!0,el=I)}}function nr(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function Nd(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Pd(t){if(nr(t)!==t)throw Error(n(188))}function fv(t){var r=t.alternate;if(!r){if(r=nr(t),r===null)throw Error(n(188));return r!==t?null:t}for(var a=t,l=r;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){a=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return Pd(c),t;if(h===l)return Pd(c),r;h=h.sibling}throw Error(n(188))}if(a.return!==l.return)a=c,l=h;else{for(var m=!1,y=c.child;y;){if(y===a){m=!0,a=c,l=h;break}if(y===l){m=!0,l=c,a=h;break}y=y.sibling}if(!m){for(y=h.child;y;){if(y===a){m=!0,a=h,l=c;break}if(y===l){m=!0,l=h,a=c;break}y=y.sibling}if(!m)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:r}function xd(t){return t=fv(t),t!==null?Rd(t):null}function Rd(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Rd(t);if(r!==null)return r;t=t.sibling}return null}var Od=e.unstable_scheduleCallback,Ad=e.unstable_cancelCallback,pv=e.unstable_shouldYield,mv=e.unstable_requestPaint,De=e.unstable_now,gv=e.unstable_getCurrentPriorityLevel,tl=e.unstable_ImmediatePriority,Ld=e.unstable_UserBlockingPriority,qs=e.unstable_NormalPriority,yv=e.unstable_LowPriority,Dd=e.unstable_IdlePriority,Ks=null,Vt=null;function vv(t){if(Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Ks,t,void 0,(t.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:wv,_v=Math.log,bv=Math.LN2;function wv(t){return t>>>=0,t===0?32:31-(_v(t)/bv|0)|0}var Ys=64,Gs=4194304;function Ni(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Js(t,r){var a=t.pendingLanes;if(a===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,m=a&268435455;if(m!==0){var y=m&~c;y!==0?l=Ni(y):(h&=m,h!==0&&(l=Ni(h)))}else m=a&~c,m!==0?l=Ni(m):h!==0&&(l=Ni(h));if(l===0)return 0;if(r!==0&&r!==l&&!(r&c)&&(c=l&-l,h=r&-r,c>=h||c===16&&(h&4194240)!==0))return r;if(l&4&&(l|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=l;0<r;)a=31-xt(r),c=1<<a,l|=t[a],r&=~c;return l}function kv(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ev(t,r){for(var a=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-xt(h),y=1<<m,b=c[m];b===-1?(!(y&a)||y&l)&&(c[m]=kv(y,r)):b<=r&&(t.expiredLanes|=y),h&=~y}}function nl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Md(){var t=Ys;return Ys<<=1,!(Ys&4194240)&&(Ys=64),t}function rl(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function Pi(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-xt(r),t[r]=a}function Sv(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var c=31-xt(a),h=1<<c;r[c]=0,l[c]=-1,t[c]=-1,a&=~h}}function il(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var l=31-xt(a),c=1<<l;c&r|t[l]&r&&(t[l]|=r),a&=~c}}var fe=0;function Fd(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var zd,sl,Ud,jd,Wd,al=!1,Qs=[],wn=null,kn=null,En=null,xi=new Map,Ri=new Map,Sn=[],Cv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hd(t,r){switch(t){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":xi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ri.delete(r.pointerId)}}function Oi(t,r,a,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},r!==null&&(r=qi(r),r!==null&&sl(r)),t):(t.eventSystemFlags|=l,r=t.targetContainers,c!==null&&r.indexOf(c)===-1&&r.push(c),t)}function Iv(t,r,a,l,c){switch(r){case"focusin":return wn=Oi(wn,t,r,a,l,c),!0;case"dragenter":return kn=Oi(kn,t,r,a,l,c),!0;case"mouseover":return En=Oi(En,t,r,a,l,c),!0;case"pointerover":var h=c.pointerId;return xi.set(h,Oi(xi.get(h)||null,t,r,a,l,c)),!0;case"gotpointercapture":return h=c.pointerId,Ri.set(h,Oi(Ri.get(h)||null,t,r,a,l,c)),!0}return!1}function Bd(t){var r=rr(t.target);if(r!==null){var a=nr(r);if(a!==null){if(r=a.tag,r===13){if(r=Nd(a),r!==null){t.blockedOn=r,Wd(t.priority,function(){Ud(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zs(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=ll(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Go=l,a.target.dispatchEvent(l),Go=null}else return r=qi(a),r!==null&&sl(r),t.blockedOn=a,!1;r.shift()}return!0}function $d(t,r,a){Zs(t)&&a.delete(r)}function Tv(){al=!1,wn!==null&&Zs(wn)&&(wn=null),kn!==null&&Zs(kn)&&(kn=null),En!==null&&Zs(En)&&(En=null),xi.forEach($d),Ri.forEach($d)}function Ai(t,r){t.blockedOn===r&&(t.blockedOn=null,al||(al=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Tv)))}function Li(t){function r(c){return Ai(c,t)}if(0<Qs.length){Ai(Qs[0],t);for(var a=1;a<Qs.length;a++){var l=Qs[a];l.blockedOn===t&&(l.blockedOn=null)}}for(wn!==null&&Ai(wn,t),kn!==null&&Ai(kn,t),En!==null&&Ai(En,t),xi.forEach(r),Ri.forEach(r),a=0;a<Sn.length;a++)l=Sn[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Sn.length&&(a=Sn[0],a.blockedOn===null);)Bd(a),a.blockedOn===null&&Sn.shift()}var Pr=X.ReactCurrentBatchConfig,Xs=!0;function Nv(t,r,a,l){var c=fe,h=Pr.transition;Pr.transition=null;try{fe=1,ol(t,r,a,l)}finally{fe=c,Pr.transition=h}}function Pv(t,r,a,l){var c=fe,h=Pr.transition;Pr.transition=null;try{fe=4,ol(t,r,a,l)}finally{fe=c,Pr.transition=h}}function ol(t,r,a,l){if(Xs){var c=ll(t,r,a,l);if(c===null)Cl(t,r,l,ea,a),Hd(t,l);else if(Iv(c,t,r,a,l))l.stopPropagation();else if(Hd(t,l),r&4&&-1<Cv.indexOf(t)){for(;c!==null;){var h=qi(c);if(h!==null&&zd(h),h=ll(t,r,a,l),h===null&&Cl(t,r,l,ea,a),h===c)break;c=h}c!==null&&l.stopPropagation()}else Cl(t,r,l,null,a)}}var ea=null;function ll(t,r,a,l){if(ea=null,t=Jo(l),t=rr(t),t!==null)if(r=nr(t),r===null)t=null;else if(a=r.tag,a===13){if(t=Nd(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return ea=t,null}function Vd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gv()){case tl:return 1;case Ld:return 4;case qs:case yv:return 16;case Dd:return 536870912;default:return 16}default:return 16}}var Cn=null,ul=null,ta=null;function qd(){if(ta)return ta;var t,r=ul,a=r.length,l,c="value"in Cn?Cn.value:Cn.textContent,h=c.length;for(t=0;t<a&&r[t]===c[t];t++);var m=a-t;for(l=1;l<=m&&r[a-l]===c[h-l];l++);return ta=c.slice(t,1<l?1-l:void 0)}function na(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function ra(){return!0}function Kd(){return!1}function gt(t){function r(a,l,c,h,m){this._reactName=a,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(a=t[y],this[y]=a?a(h):h[y]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ra:Kd,this.isPropagationStopped=Kd,this}return $(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ra)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ra)},persist:function(){},isPersistent:ra}),r}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=gt(xr),Di=$({},xr,{view:0,detail:0}),xv=gt(Di),dl,hl,Mi,ia=$({},Di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mi&&(Mi&&t.type==="mousemove"?(dl=t.screenX-Mi.screenX,hl=t.screenY-Mi.screenY):hl=dl=0,Mi=t),dl)},movementY:function(t){return"movementY"in t?t.movementY:hl}}),Yd=gt(ia),Rv=$({},ia,{dataTransfer:0}),Ov=gt(Rv),Av=$({},Di,{relatedTarget:0}),fl=gt(Av),Lv=$({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),Dv=gt(Lv),Mv=$({},xr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fv=gt(Mv),zv=$({},xr,{data:0}),Gd=gt(zv),Uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hv(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Wv[t])?!!r[t]:!1}function pl(){return Hv}var Bv=$({},Di,{key:function(t){if(t.key){var r=Uv[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=na(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pl,charCode:function(t){return t.type==="keypress"?na(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?na(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$v=gt(Bv),Vv=$({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jd=gt(Vv),qv=$({},Di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pl}),Kv=gt(qv),Yv=$({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gv=gt(Yv),Jv=$({},ia,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qv=gt(Jv),Zv=[9,13,27,32],ml=f&&"CompositionEvent"in window,Fi=null;f&&"documentMode"in document&&(Fi=document.documentMode);var Xv=f&&"TextEvent"in window&&!Fi,Qd=f&&(!ml||Fi&&8<Fi&&11>=Fi),Zd=" ",Xd=!1;function eh(t,r){switch(t){case"keyup":return Zv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function th(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function e_(t,r){switch(t){case"compositionend":return th(r);case"keypress":return r.which!==32?null:(Xd=!0,Zd);case"textInput":return t=r.data,t===Zd&&Xd?null:t;default:return null}}function t_(t,r){if(Rr)return t==="compositionend"||!ml&&eh(t,r)?(t=qd(),ta=ul=Cn=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Qd&&r.locale!=="ko"?null:r.data;default:return null}}var n_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!n_[t.type]:r==="textarea"}function rh(t,r,a,l){Ed(l),r=ua(r,"onChange"),0<r.length&&(a=new cl("onChange","change",null,a,l),t.push({event:a,listeners:r}))}var zi=null,Ui=null;function r_(t){wh(t,0)}function sa(t){var r=Mr(t);if(dd(r))return t}function i_(t,r){if(t==="change")return r}var ih=!1;if(f){var gl;if(f){var yl="oninput"in document;if(!yl){var sh=document.createElement("div");sh.setAttribute("oninput","return;"),yl=typeof sh.oninput=="function"}gl=yl}else gl=!1;ih=gl&&(!document.documentMode||9<document.documentMode)}function ah(){zi&&(zi.detachEvent("onpropertychange",oh),Ui=zi=null)}function oh(t){if(t.propertyName==="value"&&sa(Ui)){var r=[];rh(r,Ui,t,Jo(t)),Td(r_,r)}}function s_(t,r,a){t==="focusin"?(ah(),zi=r,Ui=a,zi.attachEvent("onpropertychange",oh)):t==="focusout"&&ah()}function a_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sa(Ui)}function o_(t,r){if(t==="click")return sa(r)}function l_(t,r){if(t==="input"||t==="change")return sa(r)}function u_(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Rt=typeof Object.is=="function"?Object.is:u_;function ji(t,r){if(Rt(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var c=a[l];if(!p.call(r,c)||!Rt(t[c],r[c]))return!1}return!0}function lh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function uh(t,r){var a=lh(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=r&&l>=r)return{node:a,offset:r-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=lh(a)}}function ch(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?ch(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function dh(){for(var t=window,r=Hs();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=Hs(t.document)}return r}function vl(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function c_(t){var r=dh(),a=t.focusedElem,l=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&ch(a.ownerDocument.documentElement,a)){if(l!==null&&vl(a)){if(r=l.start,t=l.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var c=a.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=uh(a,h);var m=uh(a,l);c&&m&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(r=r.createRange(),r.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(r),t.extend(m.node,m.offset)):(r.setEnd(m.node,m.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var d_=f&&"documentMode"in document&&11>=document.documentMode,Or=null,_l=null,Wi=null,bl=!1;function hh(t,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bl||Or==null||Or!==Hs(l)||(l=Or,"selectionStart"in l&&vl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Wi&&ji(Wi,l)||(Wi=l,l=ua(_l,"onSelect"),0<l.length&&(r=new cl("onSelect","select",null,r,a),t.push({event:r,listeners:l}),r.target=Or)))}function aa(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var Ar={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},wl={},fh={};f&&(fh=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function oa(t){if(wl[t])return wl[t];if(!Ar[t])return t;var r=Ar[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in fh)return wl[t]=r[a];return t}var ph=oa("animationend"),mh=oa("animationiteration"),gh=oa("animationstart"),yh=oa("transitionend"),vh=new Map,_h="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(t,r){vh.set(t,r),u(r,[t])}for(var kl=0;kl<_h.length;kl++){var El=_h[kl],h_=El.toLowerCase(),f_=El[0].toUpperCase()+El.slice(1);In(h_,"on"+f_)}In(ph,"onAnimationEnd"),In(mh,"onAnimationIteration"),In(gh,"onAnimationStart"),In("dblclick","onDoubleClick"),In("focusin","onFocus"),In("focusout","onBlur"),In(yh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hi));function bh(t,r,a){var l=t.type||"unknown-event";t.currentTarget=a,hv(l,r,void 0,t),t.currentTarget=null}function wh(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],c=l.event;l=l.listeners;e:{var h=void 0;if(r)for(var m=l.length-1;0<=m;m--){var y=l[m],b=y.instance,I=y.currentTarget;if(y=y.listener,b!==h&&c.isPropagationStopped())break e;bh(c,y,I),h=b}else for(m=0;m<l.length;m++){if(y=l[m],b=y.instance,I=y.currentTarget,y=y.listener,b!==h&&c.isPropagationStopped())break e;bh(c,y,I),h=b}}}if(Vs)throw t=el,Vs=!1,el=null,t}function ke(t,r){var a=r[Rl];a===void 0&&(a=r[Rl]=new Set);var l=t+"__bubble";a.has(l)||(kh(r,t,2,!1),a.add(l))}function Sl(t,r,a){var l=0;r&&(l|=4),kh(a,t,l,r)}var la="_reactListening"+Math.random().toString(36).slice(2);function Bi(t){if(!t[la]){t[la]=!0,s.forEach(function(a){a!=="selectionchange"&&(p_.has(a)||Sl(a,!1,t),Sl(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[la]||(r[la]=!0,Sl("selectionchange",!1,r))}}function kh(t,r,a,l){switch(Vd(r)){case 1:var c=Nv;break;case 4:c=Pv;break;default:c=ol}a=c.bind(null,r,a,t),c=void 0,!Xo||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(r,a,{capture:!0,passive:c}):t.addEventListener(r,a,!0):c!==void 0?t.addEventListener(r,a,{passive:c}):t.addEventListener(r,a,!1)}function Cl(t,r,a,l,c){var h=l;if(!(r&1)&&!(r&2)&&l!==null)e:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var y=l.stateNode.containerInfo;if(y===c||y.nodeType===8&&y.parentNode===c)break;if(m===4)for(m=l.return;m!==null;){var b=m.tag;if((b===3||b===4)&&(b=m.stateNode.containerInfo,b===c||b.nodeType===8&&b.parentNode===c))return;m=m.return}for(;y!==null;){if(m=rr(y),m===null)return;if(b=m.tag,b===5||b===6){l=h=m;continue e}y=y.parentNode}}l=l.return}Td(function(){var I=h,A=Jo(a),L=[];e:{var R=vh.get(t);if(R!==void 0){var W=cl,V=t;switch(t){case"keypress":if(na(a)===0)break e;case"keydown":case"keyup":W=$v;break;case"focusin":V="focus",W=fl;break;case"focusout":V="blur",W=fl;break;case"beforeblur":case"afterblur":W=fl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=Kv;break;case ph:case mh:case gh:W=Dv;break;case yh:W=Gv;break;case"scroll":W=xv;break;case"wheel":W=Qv;break;case"copy":case"cut":case"paste":W=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=Jd}var q=(r&4)!==0,Me=!q&&t==="scroll",S=q?R!==null?R+"Capture":null:R;q=[];for(var w=I,C;w!==null;){C=w;var F=C.stateNode;if(C.tag===5&&F!==null&&(C=F,S!==null&&(F=Ci(w,S),F!=null&&q.push($i(w,F,C)))),Me)break;w=w.return}0<q.length&&(R=new W(R,V,null,a,A),L.push({event:R,listeners:q}))}}if(!(r&7)){e:{if(R=t==="mouseover"||t==="pointerover",W=t==="mouseout"||t==="pointerout",R&&a!==Go&&(V=a.relatedTarget||a.fromElement)&&(rr(V)||V[en]))break e;if((W||R)&&(R=A.window===A?A:(R=A.ownerDocument)?R.defaultView||R.parentWindow:window,W?(V=a.relatedTarget||a.toElement,W=I,V=V?rr(V):null,V!==null&&(Me=nr(V),V!==Me||V.tag!==5&&V.tag!==6)&&(V=null)):(W=null,V=I),W!==V)){if(q=Yd,F="onMouseLeave",S="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(q=Jd,F="onPointerLeave",S="onPointerEnter",w="pointer"),Me=W==null?R:Mr(W),C=V==null?R:Mr(V),R=new q(F,w+"leave",W,a,A),R.target=Me,R.relatedTarget=C,F=null,rr(A)===I&&(q=new q(S,w+"enter",V,a,A),q.target=C,q.relatedTarget=Me,F=q),Me=F,W&&V)t:{for(q=W,S=V,w=0,C=q;C;C=Lr(C))w++;for(C=0,F=S;F;F=Lr(F))C++;for(;0<w-C;)q=Lr(q),w--;for(;0<C-w;)S=Lr(S),C--;for(;w--;){if(q===S||S!==null&&q===S.alternate)break t;q=Lr(q),S=Lr(S)}q=null}else q=null;W!==null&&Eh(L,R,W,q,!1),V!==null&&Me!==null&&Eh(L,Me,V,q,!0)}}e:{if(R=I?Mr(I):window,W=R.nodeName&&R.nodeName.toLowerCase(),W==="select"||W==="input"&&R.type==="file")var K=i_;else if(nh(R))if(ih)K=l_;else{K=a_;var Y=s_}else(W=R.nodeName)&&W.toLowerCase()==="input"&&(R.type==="checkbox"||R.type==="radio")&&(K=o_);if(K&&(K=K(t,I))){rh(L,K,a,A);break e}Y&&Y(t,R,I),t==="focusout"&&(Y=R._wrapperState)&&Y.controlled&&R.type==="number"&&$o(R,"number",R.value)}switch(Y=I?Mr(I):window,t){case"focusin":(nh(Y)||Y.contentEditable==="true")&&(Or=Y,_l=I,Wi=null);break;case"focusout":Wi=_l=Or=null;break;case"mousedown":bl=!0;break;case"contextmenu":case"mouseup":case"dragend":bl=!1,hh(L,a,A);break;case"selectionchange":if(d_)break;case"keydown":case"keyup":hh(L,a,A)}var G;if(ml)e:{switch(t){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else Rr?eh(t,a)&&(Z="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Z="onCompositionStart");Z&&(Qd&&a.locale!=="ko"&&(Rr||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&Rr&&(G=qd()):(Cn=A,ul="value"in Cn?Cn.value:Cn.textContent,Rr=!0)),Y=ua(I,Z),0<Y.length&&(Z=new Gd(Z,t,null,a,A),L.push({event:Z,listeners:Y}),G?Z.data=G:(G=th(a),G!==null&&(Z.data=G)))),(G=Xv?e_(t,a):t_(t,a))&&(I=ua(I,"onBeforeInput"),0<I.length&&(A=new Gd("onBeforeInput","beforeinput",null,a,A),L.push({event:A,listeners:I}),A.data=G))}wh(L,r)})}function $i(t,r,a){return{instance:t,listener:r,currentTarget:a}}function ua(t,r){for(var a=r+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Ci(t,a),h!=null&&l.unshift($i(t,h,c)),h=Ci(t,r),h!=null&&l.push($i(t,h,c))),t=t.return}return l}function Lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Eh(t,r,a,l,c){for(var h=r._reactName,m=[];a!==null&&a!==l;){var y=a,b=y.alternate,I=y.stateNode;if(b!==null&&b===l)break;y.tag===5&&I!==null&&(y=I,c?(b=Ci(a,h),b!=null&&m.unshift($i(a,b,y))):c||(b=Ci(a,h),b!=null&&m.push($i(a,b,y)))),a=a.return}m.length!==0&&t.push({event:r,listeners:m})}var m_=/\r\n?/g,g_=/\u0000|\uFFFD/g;function Sh(t){return(typeof t=="string"?t:""+t).replace(m_,`
`).replace(g_,"")}function ca(t,r,a){if(r=Sh(r),Sh(t)!==r&&a)throw Error(n(425))}function da(){}var Il=null,Tl=null;function Nl(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Pl=typeof setTimeout=="function"?setTimeout:void 0,y_=typeof clearTimeout=="function"?clearTimeout:void 0,Ch=typeof Promise=="function"?Promise:void 0,v_=typeof queueMicrotask=="function"?queueMicrotask:typeof Ch<"u"?function(t){return Ch.resolve(null).then(t).catch(__)}:Pl;function __(t){setTimeout(function(){throw t})}function xl(t,r){var a=r,l=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(l===0){t.removeChild(c),Li(r);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=c}while(a);Li(r)}function Tn(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Ih(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var Dr=Math.random().toString(36).slice(2),qt="__reactFiber$"+Dr,Vi="__reactProps$"+Dr,en="__reactContainer$"+Dr,Rl="__reactEvents$"+Dr,b_="__reactListeners$"+Dr,w_="__reactHandles$"+Dr;function rr(t){var r=t[qt];if(r)return r;for(var a=t.parentNode;a;){if(r=a[en]||a[qt]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=Ih(t);t!==null;){if(a=t[qt])return a;t=Ih(t)}return r}t=a,a=t.parentNode}return null}function qi(t){return t=t[qt]||t[en],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Mr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ha(t){return t[Vi]||null}var Ol=[],Fr=-1;function Nn(t){return{current:t}}function Ee(t){0>Fr||(t.current=Ol[Fr],Ol[Fr]=null,Fr--)}function be(t,r){Fr++,Ol[Fr]=t.current,t.current=r}var Pn={},Je=Nn(Pn),ot=Nn(!1),ir=Pn;function zr(t,r){var a=t.type.contextTypes;if(!a)return Pn;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===r)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in a)c[h]=r[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=c),c}function lt(t){return t=t.childContextTypes,t!=null}function fa(){Ee(ot),Ee(Je)}function Th(t,r,a){if(Je.current!==Pn)throw Error(n(168));be(Je,r),be(ot,a)}function Nh(t,r,a){var l=t.stateNode;if(r=r.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var c in l)if(!(c in r))throw Error(n(108,_e(t)||"Unknown",c));return $({},a,l)}function pa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pn,ir=Je.current,be(Je,t),be(ot,ot.current),!0}function Ph(t,r,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=Nh(t,r,ir),l.__reactInternalMemoizedMergedChildContext=t,Ee(ot),Ee(Je),be(Je,t)):Ee(ot),be(ot,a)}var tn=null,ma=!1,Al=!1;function xh(t){tn===null?tn=[t]:tn.push(t)}function k_(t){ma=!0,xh(t)}function xn(){if(!Al&&tn!==null){Al=!0;var t=0,r=fe;try{var a=tn;for(fe=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}tn=null,ma=!1}catch(c){throw tn!==null&&(tn=tn.slice(t+1)),Od(tl,xn),c}finally{fe=r,Al=!1}}return null}var Ur=[],jr=0,ga=null,ya=0,wt=[],kt=0,sr=null,nn=1,rn="";function ar(t,r){Ur[jr++]=ya,Ur[jr++]=ga,ga=t,ya=r}function Rh(t,r,a){wt[kt++]=nn,wt[kt++]=rn,wt[kt++]=sr,sr=t;var l=nn;t=rn;var c=32-xt(l)-1;l&=~(1<<c),a+=1;var h=32-xt(r)+c;if(30<h){var m=c-c%5;h=(l&(1<<m)-1).toString(32),l>>=m,c-=m,nn=1<<32-xt(r)+c|a<<c|l,rn=h+t}else nn=1<<h|a<<c|l,rn=t}function Ll(t){t.return!==null&&(ar(t,1),Rh(t,1,0))}function Dl(t){for(;t===ga;)ga=Ur[--jr],Ur[jr]=null,ya=Ur[--jr],Ur[jr]=null;for(;t===sr;)sr=wt[--kt],wt[kt]=null,rn=wt[--kt],wt[kt]=null,nn=wt[--kt],wt[kt]=null}var yt=null,vt=null,Ne=!1,Ot=null;function Oh(t,r){var a=It(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function Ah(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,yt=t,vt=Tn(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,yt=t,vt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=sr!==null?{id:nn,overflow:rn}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=It(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,yt=t,vt=null,!0):!1;default:return!1}}function Ml(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fl(t){if(Ne){var r=vt;if(r){var a=r;if(!Ah(t,r)){if(Ml(t))throw Error(n(418));r=Tn(a.nextSibling);var l=yt;r&&Ah(t,r)?Oh(l,a):(t.flags=t.flags&-4097|2,Ne=!1,yt=t)}}else{if(Ml(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ne=!1,yt=t}}}function Lh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yt=t}function va(t){if(t!==yt)return!1;if(!Ne)return Lh(t),Ne=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Nl(t.type,t.memoizedProps)),r&&(r=vt)){if(Ml(t))throw Dh(),Error(n(418));for(;r;)Oh(t,r),r=Tn(r.nextSibling)}if(Lh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){vt=Tn(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}vt=null}}else vt=yt?Tn(t.stateNode.nextSibling):null;return!0}function Dh(){for(var t=vt;t;)t=Tn(t.nextSibling)}function Wr(){vt=yt=null,Ne=!1}function zl(t){Ot===null?Ot=[t]:Ot.push(t)}var E_=X.ReactCurrentBatchConfig;function Ki(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(m){var y=c.refs;m===null?delete y[h]:y[h]=m},r._stringRef=h,r)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function _a(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Mh(t){var r=t._init;return r(t._payload)}function Fh(t){function r(S,w){if(t){var C=S.deletions;C===null?(S.deletions=[w],S.flags|=16):C.push(w)}}function a(S,w){if(!t)return null;for(;w!==null;)r(S,w),w=w.sibling;return null}function l(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function c(S,w){return S=zn(S,w),S.index=0,S.sibling=null,S}function h(S,w,C){return S.index=C,t?(C=S.alternate,C!==null?(C=C.index,C<w?(S.flags|=2,w):C):(S.flags|=2,w)):(S.flags|=1048576,w)}function m(S){return t&&S.alternate===null&&(S.flags|=2),S}function y(S,w,C,F){return w===null||w.tag!==6?(w=Nu(C,S.mode,F),w.return=S,w):(w=c(w,C),w.return=S,w)}function b(S,w,C,F){var K=C.type;return K===we?A(S,w,C.props.children,F,C.key):w!==null&&(w.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===at&&Mh(K)===w.type)?(F=c(w,C.props),F.ref=Ki(S,w,C),F.return=S,F):(F=Ba(C.type,C.key,C.props,null,S.mode,F),F.ref=Ki(S,w,C),F.return=S,F)}function I(S,w,C,F){return w===null||w.tag!==4||w.stateNode.containerInfo!==C.containerInfo||w.stateNode.implementation!==C.implementation?(w=Pu(C,S.mode,F),w.return=S,w):(w=c(w,C.children||[]),w.return=S,w)}function A(S,w,C,F,K){return w===null||w.tag!==7?(w=pr(C,S.mode,F,K),w.return=S,w):(w=c(w,C),w.return=S,w)}function L(S,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Nu(""+w,S.mode,C),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case pe:return C=Ba(w.type,w.key,w.props,null,S.mode,C),C.ref=Ki(S,null,w),C.return=S,C;case ve:return w=Pu(w,S.mode,C),w.return=S,w;case at:var F=w._init;return L(S,F(w._payload),C)}if(ki(w)||J(w))return w=pr(w,S.mode,C,null),w.return=S,w;_a(S,w)}return null}function R(S,w,C,F){var K=w!==null?w.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return K!==null?null:y(S,w,""+C,F);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case pe:return C.key===K?b(S,w,C,F):null;case ve:return C.key===K?I(S,w,C,F):null;case at:return K=C._init,R(S,w,K(C._payload),F)}if(ki(C)||J(C))return K!==null?null:A(S,w,C,F,null);_a(S,C)}return null}function W(S,w,C,F,K){if(typeof F=="string"&&F!==""||typeof F=="number")return S=S.get(C)||null,y(w,S,""+F,K);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case pe:return S=S.get(F.key===null?C:F.key)||null,b(w,S,F,K);case ve:return S=S.get(F.key===null?C:F.key)||null,I(w,S,F,K);case at:var Y=F._init;return W(S,w,C,Y(F._payload),K)}if(ki(F)||J(F))return S=S.get(C)||null,A(w,S,F,K,null);_a(w,F)}return null}function V(S,w,C,F){for(var K=null,Y=null,G=w,Z=w=0,He=null;G!==null&&Z<C.length;Z++){G.index>Z?(He=G,G=null):He=G.sibling;var ce=R(S,G,C[Z],F);if(ce===null){G===null&&(G=He);break}t&&G&&ce.alternate===null&&r(S,G),w=h(ce,w,Z),Y===null?K=ce:Y.sibling=ce,Y=ce,G=He}if(Z===C.length)return a(S,G),Ne&&ar(S,Z),K;if(G===null){for(;Z<C.length;Z++)G=L(S,C[Z],F),G!==null&&(w=h(G,w,Z),Y===null?K=G:Y.sibling=G,Y=G);return Ne&&ar(S,Z),K}for(G=l(S,G);Z<C.length;Z++)He=W(G,S,Z,C[Z],F),He!==null&&(t&&He.alternate!==null&&G.delete(He.key===null?Z:He.key),w=h(He,w,Z),Y===null?K=He:Y.sibling=He,Y=He);return t&&G.forEach(function(Un){return r(S,Un)}),Ne&&ar(S,Z),K}function q(S,w,C,F){var K=J(C);if(typeof K!="function")throw Error(n(150));if(C=K.call(C),C==null)throw Error(n(151));for(var Y=K=null,G=w,Z=w=0,He=null,ce=C.next();G!==null&&!ce.done;Z++,ce=C.next()){G.index>Z?(He=G,G=null):He=G.sibling;var Un=R(S,G,ce.value,F);if(Un===null){G===null&&(G=He);break}t&&G&&Un.alternate===null&&r(S,G),w=h(Un,w,Z),Y===null?K=Un:Y.sibling=Un,Y=Un,G=He}if(ce.done)return a(S,G),Ne&&ar(S,Z),K;if(G===null){for(;!ce.done;Z++,ce=C.next())ce=L(S,ce.value,F),ce!==null&&(w=h(ce,w,Z),Y===null?K=ce:Y.sibling=ce,Y=ce);return Ne&&ar(S,Z),K}for(G=l(S,G);!ce.done;Z++,ce=C.next())ce=W(G,S,Z,ce.value,F),ce!==null&&(t&&ce.alternate!==null&&G.delete(ce.key===null?Z:ce.key),w=h(ce,w,Z),Y===null?K=ce:Y.sibling=ce,Y=ce);return t&&G.forEach(function(t0){return r(S,t0)}),Ne&&ar(S,Z),K}function Me(S,w,C,F){if(typeof C=="object"&&C!==null&&C.type===we&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case pe:e:{for(var K=C.key,Y=w;Y!==null;){if(Y.key===K){if(K=C.type,K===we){if(Y.tag===7){a(S,Y.sibling),w=c(Y,C.props.children),w.return=S,S=w;break e}}else if(Y.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===at&&Mh(K)===Y.type){a(S,Y.sibling),w=c(Y,C.props),w.ref=Ki(S,Y,C),w.return=S,S=w;break e}a(S,Y);break}else r(S,Y);Y=Y.sibling}C.type===we?(w=pr(C.props.children,S.mode,F,C.key),w.return=S,S=w):(F=Ba(C.type,C.key,C.props,null,S.mode,F),F.ref=Ki(S,w,C),F.return=S,S=F)}return m(S);case ve:e:{for(Y=C.key;w!==null;){if(w.key===Y)if(w.tag===4&&w.stateNode.containerInfo===C.containerInfo&&w.stateNode.implementation===C.implementation){a(S,w.sibling),w=c(w,C.children||[]),w.return=S,S=w;break e}else{a(S,w);break}else r(S,w);w=w.sibling}w=Pu(C,S.mode,F),w.return=S,S=w}return m(S);case at:return Y=C._init,Me(S,w,Y(C._payload),F)}if(ki(C))return V(S,w,C,F);if(J(C))return q(S,w,C,F);_a(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,w!==null&&w.tag===6?(a(S,w.sibling),w=c(w,C),w.return=S,S=w):(a(S,w),w=Nu(C,S.mode,F),w.return=S,S=w),m(S)):a(S,w)}return Me}var Hr=Fh(!0),zh=Fh(!1),ba=Nn(null),wa=null,Br=null,Ul=null;function jl(){Ul=Br=wa=null}function Wl(t){var r=ba.current;Ee(ba),t._currentValue=r}function Hl(t,r,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),t===a)break;t=t.return}}function $r(t,r){wa=t,Ul=Br=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(ut=!0),t.firstContext=null)}function Et(t){var r=t._currentValue;if(Ul!==t)if(t={context:t,memoizedValue:r,next:null},Br===null){if(wa===null)throw Error(n(308));Br=t,wa.dependencies={lanes:0,firstContext:t}}else Br=Br.next=t;return r}var or=null;function Bl(t){or===null?or=[t]:or.push(t)}function Uh(t,r,a,l){var c=r.interleaved;return c===null?(a.next=a,Bl(r)):(a.next=c.next,c.next=a),r.interleaved=a,sn(t,l)}function sn(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Rn=!1;function $l(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jh(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function an(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function On(t,r,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,oe&2){var c=l.pending;return c===null?r.next=r:(r.next=c.next,c.next=r),l.pending=r,sn(t,a)}return c=l.interleaved,c===null?(r.next=r,Bl(l)):(r.next=c.next,c.next=r),l.interleaved=r,sn(t,a)}function ka(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,il(t,a)}}function Wh(t,r){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var m={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?c=h=m:h=h.next=m,a=a.next}while(a!==null);h===null?c=h=r:h=h.next=r}else c=h=r;a={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function Ea(t,r,a,l){var c=t.updateQueue;Rn=!1;var h=c.firstBaseUpdate,m=c.lastBaseUpdate,y=c.shared.pending;if(y!==null){c.shared.pending=null;var b=y,I=b.next;b.next=null,m===null?h=I:m.next=I,m=b;var A=t.alternate;A!==null&&(A=A.updateQueue,y=A.lastBaseUpdate,y!==m&&(y===null?A.firstBaseUpdate=I:y.next=I,A.lastBaseUpdate=b))}if(h!==null){var L=c.baseState;m=0,A=I=b=null,y=h;do{var R=y.lane,W=y.eventTime;if((l&R)===R){A!==null&&(A=A.next={eventTime:W,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var V=t,q=y;switch(R=r,W=a,q.tag){case 1:if(V=q.payload,typeof V=="function"){L=V.call(W,L,R);break e}L=V;break e;case 3:V.flags=V.flags&-65537|128;case 0:if(V=q.payload,R=typeof V=="function"?V.call(W,L,R):V,R==null)break e;L=$({},L,R);break e;case 2:Rn=!0}}y.callback!==null&&y.lane!==0&&(t.flags|=64,R=c.effects,R===null?c.effects=[y]:R.push(y))}else W={eventTime:W,lane:R,tag:y.tag,payload:y.payload,callback:y.callback,next:null},A===null?(I=A=W,b=L):A=A.next=W,m|=R;if(y=y.next,y===null){if(y=c.shared.pending,y===null)break;R=y,y=R.next,R.next=null,c.lastBaseUpdate=R,c.shared.pending=null}}while(!0);if(A===null&&(b=L),c.baseState=b,c.firstBaseUpdate=I,c.lastBaseUpdate=A,r=c.shared.interleaved,r!==null){c=r;do m|=c.lane,c=c.next;while(c!==r)}else h===null&&(c.shared.lanes=0);cr|=m,t.lanes=m,t.memoizedState=L}}function Hh(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var l=t[r],c=l.callback;if(c!==null){if(l.callback=null,l=a,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var Yi={},Kt=Nn(Yi),Gi=Nn(Yi),Ji=Nn(Yi);function lr(t){if(t===Yi)throw Error(n(174));return t}function Vl(t,r){switch(be(Ji,r),be(Gi,t),be(Kt,Yi),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:qo(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=qo(r,t)}Ee(Kt),be(Kt,r)}function Vr(){Ee(Kt),Ee(Gi),Ee(Ji)}function Bh(t){lr(Ji.current);var r=lr(Kt.current),a=qo(r,t.type);r!==a&&(be(Gi,t),be(Kt,a))}function ql(t){Gi.current===t&&(Ee(Kt),Ee(Gi))}var xe=Nn(0);function Sa(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Kl=[];function Yl(){for(var t=0;t<Kl.length;t++)Kl[t]._workInProgressVersionPrimary=null;Kl.length=0}var Ca=X.ReactCurrentDispatcher,Gl=X.ReactCurrentBatchConfig,ur=0,Re=null,ze=null,je=null,Ia=!1,Qi=!1,Zi=0,S_=0;function Qe(){throw Error(n(321))}function Jl(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!Rt(t[a],r[a]))return!1;return!0}function Ql(t,r,a,l,c,h){if(ur=h,Re=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ca.current=t===null||t.memoizedState===null?N_:P_,t=a(l,c),Qi){h=0;do{if(Qi=!1,Zi=0,25<=h)throw Error(n(301));h+=1,je=ze=null,r.updateQueue=null,Ca.current=x_,t=a(l,c)}while(Qi)}if(Ca.current=Pa,r=ze!==null&&ze.next!==null,ur=0,je=ze=Re=null,Ia=!1,r)throw Error(n(300));return t}function Zl(){var t=Zi!==0;return Zi=0,t}function Yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Re.memoizedState=je=t:je=je.next=t,je}function St(){if(ze===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var r=je===null?Re.memoizedState:je.next;if(r!==null)je=r,ze=t;else{if(t===null)throw Error(n(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},je===null?Re.memoizedState=je=t:je=je.next=t}return je}function Xi(t,r){return typeof r=="function"?r(t):r}function Xl(t){var r=St(),a=r.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=ze,c=l.baseQueue,h=a.pending;if(h!==null){if(c!==null){var m=c.next;c.next=h.next,h.next=m}l.baseQueue=c=h,a.pending=null}if(c!==null){h=c.next,l=l.baseState;var y=m=null,b=null,I=h;do{var A=I.lane;if((ur&A)===A)b!==null&&(b=b.next={lane:0,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),l=I.hasEagerState?I.eagerState:t(l,I.action);else{var L={lane:A,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null};b===null?(y=b=L,m=l):b=b.next=L,Re.lanes|=A,cr|=A}I=I.next}while(I!==null&&I!==h);b===null?m=l:b.next=y,Rt(l,r.memoizedState)||(ut=!0),r.memoizedState=l,r.baseState=m,r.baseQueue=b,a.lastRenderedState=l}if(t=a.interleaved,t!==null){c=t;do h=c.lane,Re.lanes|=h,cr|=h,c=c.next;while(c!==t)}else c===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function eu(t){var r=St(),a=r.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,c=a.pending,h=r.memoizedState;if(c!==null){a.pending=null;var m=c=c.next;do h=t(h,m.action),m=m.next;while(m!==c);Rt(h,r.memoizedState)||(ut=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),a.lastRenderedState=h}return[h,l]}function $h(){}function Vh(t,r){var a=Re,l=St(),c=r(),h=!Rt(l.memoizedState,c);if(h&&(l.memoizedState=c,ut=!0),l=l.queue,tu(Yh.bind(null,a,l,t),[t]),l.getSnapshot!==r||h||je!==null&&je.memoizedState.tag&1){if(a.flags|=2048,es(9,Kh.bind(null,a,l,c,r),void 0,null),We===null)throw Error(n(349));ur&30||qh(a,r,c)}return c}function qh(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=Re.updateQueue,r===null?(r={lastEffect:null,stores:null},Re.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function Kh(t,r,a,l){r.value=a,r.getSnapshot=l,Gh(r)&&Jh(t)}function Yh(t,r,a){return a(function(){Gh(r)&&Jh(t)})}function Gh(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!Rt(t,a)}catch{return!0}}function Jh(t){var r=sn(t,1);r!==null&&Mt(r,t,1,-1)}function Qh(t){var r=Yt();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:t},r.queue=t,t=t.dispatch=T_.bind(null,Re,t),[r.memoizedState,t]}function es(t,r,a,l){return t={tag:t,create:r,destroy:a,deps:l,next:null},r=Re.updateQueue,r===null?(r={lastEffect:null,stores:null},Re.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,r.lastEffect=t)),t}function Zh(){return St().memoizedState}function Ta(t,r,a,l){var c=Yt();Re.flags|=t,c.memoizedState=es(1|r,a,void 0,l===void 0?null:l)}function Na(t,r,a,l){var c=St();l=l===void 0?null:l;var h=void 0;if(ze!==null){var m=ze.memoizedState;if(h=m.destroy,l!==null&&Jl(l,m.deps)){c.memoizedState=es(r,a,h,l);return}}Re.flags|=t,c.memoizedState=es(1|r,a,h,l)}function Xh(t,r){return Ta(8390656,8,t,r)}function tu(t,r){return Na(2048,8,t,r)}function ef(t,r){return Na(4,2,t,r)}function tf(t,r){return Na(4,4,t,r)}function nf(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function rf(t,r,a){return a=a!=null?a.concat([t]):null,Na(4,4,nf.bind(null,r,t),a)}function nu(){}function sf(t,r){var a=St();r=r===void 0?null:r;var l=a.memoizedState;return l!==null&&r!==null&&Jl(r,l[1])?l[0]:(a.memoizedState=[t,r],t)}function af(t,r){var a=St();r=r===void 0?null:r;var l=a.memoizedState;return l!==null&&r!==null&&Jl(r,l[1])?l[0]:(t=t(),a.memoizedState=[t,r],t)}function of(t,r,a){return ur&21?(Rt(a,r)||(a=Md(),Re.lanes|=a,cr|=a,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,ut=!0),t.memoizedState=a)}function C_(t,r){var a=fe;fe=a!==0&&4>a?a:4,t(!0);var l=Gl.transition;Gl.transition={};try{t(!1),r()}finally{fe=a,Gl.transition=l}}function lf(){return St().memoizedState}function I_(t,r,a){var l=Mn(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},uf(t))cf(r,a);else if(a=Uh(t,r,a,l),a!==null){var c=it();Mt(a,t,l,c),df(a,r,l)}}function T_(t,r,a){var l=Mn(t),c={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(uf(t))cf(r,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var m=r.lastRenderedState,y=h(m,a);if(c.hasEagerState=!0,c.eagerState=y,Rt(y,m)){var b=r.interleaved;b===null?(c.next=c,Bl(r)):(c.next=b.next,b.next=c),r.interleaved=c;return}}catch{}finally{}a=Uh(t,r,c,l),a!==null&&(c=it(),Mt(a,t,l,c),df(a,r,l))}}function uf(t){var r=t.alternate;return t===Re||r!==null&&r===Re}function cf(t,r){Qi=Ia=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function df(t,r,a){if(a&4194240){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,il(t,a)}}var Pa={readContext:Et,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},N_={readContext:Et,useCallback:function(t,r){return Yt().memoizedState=[t,r===void 0?null:r],t},useContext:Et,useEffect:Xh,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,Ta(4194308,4,nf.bind(null,r,t),a)},useLayoutEffect:function(t,r){return Ta(4194308,4,t,r)},useInsertionEffect:function(t,r){return Ta(4,2,t,r)},useMemo:function(t,r){var a=Yt();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var l=Yt();return r=a!==void 0?a(r):r,l.memoizedState=l.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},l.queue=t,t=t.dispatch=I_.bind(null,Re,t),[l.memoizedState,t]},useRef:function(t){var r=Yt();return t={current:t},r.memoizedState=t},useState:Qh,useDebugValue:nu,useDeferredValue:function(t){return Yt().memoizedState=t},useTransition:function(){var t=Qh(!1),r=t[0];return t=C_.bind(null,t[1]),Yt().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var l=Re,c=Yt();if(Ne){if(a===void 0)throw Error(n(407));a=a()}else{if(a=r(),We===null)throw Error(n(349));ur&30||qh(l,r,a)}c.memoizedState=a;var h={value:a,getSnapshot:r};return c.queue=h,Xh(Yh.bind(null,l,h,t),[t]),l.flags|=2048,es(9,Kh.bind(null,l,h,a,r),void 0,null),a},useId:function(){var t=Yt(),r=We.identifierPrefix;if(Ne){var a=rn,l=nn;a=(l&~(1<<32-xt(l)-1)).toString(32)+a,r=":"+r+"R"+a,a=Zi++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=S_++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},P_={readContext:Et,useCallback:sf,useContext:Et,useEffect:tu,useImperativeHandle:rf,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:af,useReducer:Xl,useRef:Zh,useState:function(){return Xl(Xi)},useDebugValue:nu,useDeferredValue:function(t){var r=St();return of(r,ze.memoizedState,t)},useTransition:function(){var t=Xl(Xi)[0],r=St().memoizedState;return[t,r]},useMutableSource:$h,useSyncExternalStore:Vh,useId:lf,unstable_isNewReconciler:!1},x_={readContext:Et,useCallback:sf,useContext:Et,useEffect:tu,useImperativeHandle:rf,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:af,useReducer:eu,useRef:Zh,useState:function(){return eu(Xi)},useDebugValue:nu,useDeferredValue:function(t){var r=St();return ze===null?r.memoizedState=t:of(r,ze.memoizedState,t)},useTransition:function(){var t=eu(Xi)[0],r=St().memoizedState;return[t,r]},useMutableSource:$h,useSyncExternalStore:Vh,useId:lf,unstable_isNewReconciler:!1};function At(t,r){if(t&&t.defaultProps){r=$({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function ru(t,r,a,l){r=t.memoizedState,a=a(l,r),a=a==null?r:$({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var xa={isMounted:function(t){return(t=t._reactInternals)?nr(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var l=it(),c=Mn(t),h=an(l,c);h.payload=r,a!=null&&(h.callback=a),r=On(t,h,c),r!==null&&(Mt(r,t,c,l),ka(r,t,c))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var l=it(),c=Mn(t),h=an(l,c);h.tag=1,h.payload=r,a!=null&&(h.callback=a),r=On(t,h,c),r!==null&&(Mt(r,t,c,l),ka(r,t,c))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=it(),l=Mn(t),c=an(a,l);c.tag=2,r!=null&&(c.callback=r),r=On(t,c,l),r!==null&&(Mt(r,t,l,a),ka(r,t,l))}};function hf(t,r,a,l,c,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,m):r.prototype&&r.prototype.isPureReactComponent?!ji(a,l)||!ji(c,h):!0}function ff(t,r,a){var l=!1,c=Pn,h=r.contextType;return typeof h=="object"&&h!==null?h=Et(h):(c=lt(r)?ir:Je.current,l=r.contextTypes,h=(l=l!=null)?zr(t,c):Pn),r=new r(a,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=xa,t.stateNode=r,r._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),r}function pf(t,r,a,l){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==t&&xa.enqueueReplaceState(r,r.state,null)}function iu(t,r,a,l){var c=t.stateNode;c.props=a,c.state=t.memoizedState,c.refs={},$l(t);var h=r.contextType;typeof h=="object"&&h!==null?c.context=Et(h):(h=lt(r)?ir:Je.current,c.context=zr(t,h)),c.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(ru(t,r,h,a),c.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(r=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),r!==c.state&&xa.enqueueReplaceState(c,c.state,null),Ea(t,a,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function qr(t,r){try{var a="",l=r;do a+=le(l),l=l.return;while(l);var c=a}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:c,digest:null}}function su(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function au(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var R_=typeof WeakMap=="function"?WeakMap:Map;function mf(t,r,a){a=an(-1,a),a.tag=3,a.payload={element:null};var l=r.value;return a.callback=function(){Fa||(Fa=!0,bu=l),au(t,r)},a}function gf(t,r,a){a=an(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;a.payload=function(){return l(c)},a.callback=function(){au(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){au(t,r),typeof l!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var m=r.stack;this.componentDidCatch(r.value,{componentStack:m!==null?m:""})}),a}function yf(t,r,a){var l=t.pingCache;if(l===null){l=t.pingCache=new R_;var c=new Set;l.set(r,c)}else c=l.get(r),c===void 0&&(c=new Set,l.set(r,c));c.has(a)||(c.add(a),t=V_.bind(null,t,r,a),r.then(t,t))}function vf(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function _f(t,r,a,l,c){return t.mode&1?(t.flags|=65536,t.lanes=c,t):(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=an(-1,1),r.tag=2,On(a,r,1))),a.lanes|=1),t)}var O_=X.ReactCurrentOwner,ut=!1;function rt(t,r,a,l){r.child=t===null?zh(r,null,a,l):Hr(r,t.child,a,l)}function bf(t,r,a,l,c){a=a.render;var h=r.ref;return $r(r,c),l=Ql(t,r,a,l,h,c),a=Zl(),t!==null&&!ut?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,on(t,r,c)):(Ne&&a&&Ll(r),r.flags|=1,rt(t,r,l,c),r.child)}function wf(t,r,a,l,c){if(t===null){var h=a.type;return typeof h=="function"&&!Tu(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=h,kf(t,r,h,l,c)):(t=Ba(a.type,null,l,r,r.mode,c),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,!(t.lanes&c)){var m=h.memoizedProps;if(a=a.compare,a=a!==null?a:ji,a(m,l)&&t.ref===r.ref)return on(t,r,c)}return r.flags|=1,t=zn(h,l),t.ref=r.ref,t.return=r,r.child=t}function kf(t,r,a,l,c){if(t!==null){var h=t.memoizedProps;if(ji(h,l)&&t.ref===r.ref)if(ut=!1,r.pendingProps=l=h,(t.lanes&c)!==0)t.flags&131072&&(ut=!0);else return r.lanes=t.lanes,on(t,r,c)}return ou(t,r,a,l,c)}function Ef(t,r,a){var l=r.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(Yr,_t),_t|=a;else{if(!(a&1073741824))return t=h!==null?h.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,be(Yr,_t),_t|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:a,be(Yr,_t),_t|=l}else h!==null?(l=h.baseLanes|a,r.memoizedState=null):l=a,be(Yr,_t),_t|=l;return rt(t,r,c,a),r.child}function Sf(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function ou(t,r,a,l,c){var h=lt(a)?ir:Je.current;return h=zr(r,h),$r(r,c),a=Ql(t,r,a,l,h,c),l=Zl(),t!==null&&!ut?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~c,on(t,r,c)):(Ne&&l&&Ll(r),r.flags|=1,rt(t,r,a,c),r.child)}function Cf(t,r,a,l,c){if(lt(a)){var h=!0;pa(r)}else h=!1;if($r(r,c),r.stateNode===null)Oa(t,r),ff(r,a,l),iu(r,a,l,c),l=!0;else if(t===null){var m=r.stateNode,y=r.memoizedProps;m.props=y;var b=m.context,I=a.contextType;typeof I=="object"&&I!==null?I=Et(I):(I=lt(a)?ir:Je.current,I=zr(r,I));var A=a.getDerivedStateFromProps,L=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function";L||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==l||b!==I)&&pf(r,m,l,I),Rn=!1;var R=r.memoizedState;m.state=R,Ea(r,l,m,c),b=r.memoizedState,y!==l||R!==b||ot.current||Rn?(typeof A=="function"&&(ru(r,a,A,l),b=r.memoizedState),(y=Rn||hf(r,a,y,l,R,b,I))?(L||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=b),m.props=l,m.state=b,m.context=I,l=y):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{m=r.stateNode,jh(t,r),y=r.memoizedProps,I=r.type===r.elementType?y:At(r.type,y),m.props=I,L=r.pendingProps,R=m.context,b=a.contextType,typeof b=="object"&&b!==null?b=Et(b):(b=lt(a)?ir:Je.current,b=zr(r,b));var W=a.getDerivedStateFromProps;(A=typeof W=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==L||R!==b)&&pf(r,m,l,b),Rn=!1,R=r.memoizedState,m.state=R,Ea(r,l,m,c);var V=r.memoizedState;y!==L||R!==V||ot.current||Rn?(typeof W=="function"&&(ru(r,a,W,l),V=r.memoizedState),(I=Rn||hf(r,a,I,l,R,V,b)||!1)?(A||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,V,b),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,V,b)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&R===t.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&R===t.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=V),m.props=l,m.state=V,m.context=b,l=I):(typeof m.componentDidUpdate!="function"||y===t.memoizedProps&&R===t.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&R===t.memoizedState||(r.flags|=1024),l=!1)}return lu(t,r,a,l,h,c)}function lu(t,r,a,l,c,h){Sf(t,r);var m=(r.flags&128)!==0;if(!l&&!m)return c&&Ph(r,a,!1),on(t,r,h);l=r.stateNode,O_.current=r;var y=m&&typeof a.getDerivedStateFromError!="function"?null:l.render();return r.flags|=1,t!==null&&m?(r.child=Hr(r,t.child,null,h),r.child=Hr(r,null,y,h)):rt(t,r,y,h),r.memoizedState=l.state,c&&Ph(r,a,!0),r.child}function If(t){var r=t.stateNode;r.pendingContext?Th(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Th(t,r.context,!1),Vl(t,r.containerInfo)}function Tf(t,r,a,l,c){return Wr(),zl(c),r.flags|=256,rt(t,r,a,l),r.child}var uu={dehydrated:null,treeContext:null,retryLane:0};function cu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Nf(t,r,a){var l=r.pendingProps,c=xe.current,h=!1,m=(r.flags&128)!==0,y;if((y=m)||(y=t!==null&&t.memoizedState===null?!1:(c&2)!==0),y?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),be(xe,c&1),t===null)return Fl(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(m=l.children,t=l.fallback,h?(l=r.mode,h=r.child,m={mode:"hidden",children:m},!(l&1)&&h!==null?(h.childLanes=0,h.pendingProps=m):h=$a(m,l,0,null),t=pr(t,l,a,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=cu(a),r.memoizedState=uu,t):du(r,m));if(c=t.memoizedState,c!==null&&(y=c.dehydrated,y!==null))return A_(t,r,m,l,y,c,a);if(h){h=l.fallback,m=r.mode,c=t.child,y=c.sibling;var b={mode:"hidden",children:l.children};return!(m&1)&&r.child!==c?(l=r.child,l.childLanes=0,l.pendingProps=b,r.deletions=null):(l=zn(c,b),l.subtreeFlags=c.subtreeFlags&14680064),y!==null?h=zn(y,h):(h=pr(h,m,a,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,m=t.child.memoizedState,m=m===null?cu(a):{baseLanes:m.baseLanes|a,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~a,r.memoizedState=uu,l}return h=t.child,t=h.sibling,l=zn(h,{mode:"visible",children:l.children}),!(r.mode&1)&&(l.lanes=a),l.return=r,l.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=l,r.memoizedState=null,l}function du(t,r){return r=$a({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Ra(t,r,a,l){return l!==null&&zl(l),Hr(r,t.child,null,a),t=du(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function A_(t,r,a,l,c,h,m){if(a)return r.flags&256?(r.flags&=-257,l=su(Error(n(422))),Ra(t,r,m,l)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=l.fallback,c=r.mode,l=$a({mode:"visible",children:l.children},c,0,null),h=pr(h,c,m,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,r.mode&1&&Hr(r,t.child,null,m),r.child.memoizedState=cu(m),r.memoizedState=uu,h);if(!(r.mode&1))return Ra(t,r,m,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var y=l.dgst;return l=y,h=Error(n(419)),l=su(h,l,void 0),Ra(t,r,m,l)}if(y=(m&t.childLanes)!==0,ut||y){if(l=We,l!==null){switch(m&-m){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(l.suspendedLanes|m)?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,sn(t,c),Mt(l,t,c,-1))}return Iu(),l=su(Error(n(421))),Ra(t,r,m,l)}return c.data==="$?"?(r.flags|=128,r.child=t.child,r=q_.bind(null,t),c._reactRetry=r,null):(t=h.treeContext,vt=Tn(c.nextSibling),yt=r,Ne=!0,Ot=null,t!==null&&(wt[kt++]=nn,wt[kt++]=rn,wt[kt++]=sr,nn=t.id,rn=t.overflow,sr=r),r=du(r,l.children),r.flags|=4096,r)}function Pf(t,r,a){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r),Hl(t.return,r,a)}function hu(t,r,a,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:c}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=a,h.tailMode=c)}function xf(t,r,a){var l=r.pendingProps,c=l.revealOrder,h=l.tail;if(rt(t,r,l.children,a),l=xe.current,l&2)l=l&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pf(t,a,r);else if(t.tag===19)Pf(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(be(xe,l),!(r.mode&1))r.memoizedState=null;else switch(c){case"forwards":for(a=r.child,c=null;a!==null;)t=a.alternate,t!==null&&Sa(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=r.child,r.child=null):(c=a.sibling,a.sibling=null),hu(r,!1,c,a,h);break;case"backwards":for(a=null,c=r.child,r.child=null;c!==null;){if(t=c.alternate,t!==null&&Sa(t)===null){r.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}hu(r,!0,a,null,h);break;case"together":hu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Oa(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function on(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),cr|=r.lanes,!(a&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,a=zn(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=zn(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function L_(t,r,a){switch(r.tag){case 3:If(r),Wr();break;case 5:Bh(r);break;case 1:lt(r.type)&&pa(r);break;case 4:Vl(r,r.stateNode.containerInfo);break;case 10:var l=r.type._context,c=r.memoizedProps.value;be(ba,l._currentValue),l._currentValue=c;break;case 13:if(l=r.memoizedState,l!==null)return l.dehydrated!==null?(be(xe,xe.current&1),r.flags|=128,null):a&r.child.childLanes?Nf(t,r,a):(be(xe,xe.current&1),t=on(t,r,a),t!==null?t.sibling:null);be(xe,xe.current&1);break;case 19:if(l=(a&r.childLanes)!==0,t.flags&128){if(l)return xf(t,r,a);r.flags|=128}if(c=r.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),be(xe,xe.current),l)break;return null;case 22:case 23:return r.lanes=0,Ef(t,r,a)}return on(t,r,a)}var Rf,fu,Of,Af;Rf=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},fu=function(){},Of=function(t,r,a,l){var c=t.memoizedProps;if(c!==l){t=r.stateNode,lr(Kt.current);var h=null;switch(a){case"input":c=Ho(t,c),l=Ho(t,l),h=[];break;case"select":c=$({},c,{value:void 0}),l=$({},l,{value:void 0}),h=[];break;case"textarea":c=Vo(t,c),l=Vo(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=da)}Ko(a,l);var m;a=null;for(I in c)if(!l.hasOwnProperty(I)&&c.hasOwnProperty(I)&&c[I]!=null)if(I==="style"){var y=c[I];for(m in y)y.hasOwnProperty(m)&&(a||(a={}),a[m]="")}else I!=="dangerouslySetInnerHTML"&&I!=="children"&&I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&I!=="autoFocus"&&(o.hasOwnProperty(I)?h||(h=[]):(h=h||[]).push(I,null));for(I in l){var b=l[I];if(y=c!=null?c[I]:void 0,l.hasOwnProperty(I)&&b!==y&&(b!=null||y!=null))if(I==="style")if(y){for(m in y)!y.hasOwnProperty(m)||b&&b.hasOwnProperty(m)||(a||(a={}),a[m]="");for(m in b)b.hasOwnProperty(m)&&y[m]!==b[m]&&(a||(a={}),a[m]=b[m])}else a||(h||(h=[]),h.push(I,a)),a=b;else I==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,y=y?y.__html:void 0,b!=null&&y!==b&&(h=h||[]).push(I,b)):I==="children"?typeof b!="string"&&typeof b!="number"||(h=h||[]).push(I,""+b):I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&(o.hasOwnProperty(I)?(b!=null&&I==="onScroll"&&ke("scroll",t),h||y===b||(h=[])):(h=h||[]).push(I,b))}a&&(h=h||[]).push("style",a);var I=h;(r.updateQueue=I)&&(r.flags|=4)}},Af=function(t,r,a,l){a!==l&&(r.flags|=4)};function ts(t,r){if(!Ne)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Ze(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(r)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=a,r}function D_(t,r,a){var l=r.pendingProps;switch(Dl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(r),null;case 1:return lt(r.type)&&fa(),Ze(r),null;case 3:return l=r.stateNode,Vr(),Ee(ot),Ee(Je),Yl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(va(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Ot!==null&&(Eu(Ot),Ot=null))),fu(t,r),Ze(r),null;case 5:ql(r);var c=lr(Ji.current);if(a=r.type,t!==null&&r.stateNode!=null)Of(t,r,a,l,c),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!l){if(r.stateNode===null)throw Error(n(166));return Ze(r),null}if(t=lr(Kt.current),va(r)){l=r.stateNode,a=r.type;var h=r.memoizedProps;switch(l[qt]=r,l[Vi]=h,t=(r.mode&1)!==0,a){case"dialog":ke("cancel",l),ke("close",l);break;case"iframe":case"object":case"embed":ke("load",l);break;case"video":case"audio":for(c=0;c<Hi.length;c++)ke(Hi[c],l);break;case"source":ke("error",l);break;case"img":case"image":case"link":ke("error",l),ke("load",l);break;case"details":ke("toggle",l);break;case"input":hd(l,h),ke("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},ke("invalid",l);break;case"textarea":md(l,h),ke("invalid",l)}Ko(a,h),c=null;for(var m in h)if(h.hasOwnProperty(m)){var y=h[m];m==="children"?typeof y=="string"?l.textContent!==y&&(h.suppressHydrationWarning!==!0&&ca(l.textContent,y,t),c=["children",y]):typeof y=="number"&&l.textContent!==""+y&&(h.suppressHydrationWarning!==!0&&ca(l.textContent,y,t),c=["children",""+y]):o.hasOwnProperty(m)&&y!=null&&m==="onScroll"&&ke("scroll",l)}switch(a){case"input":Ws(l),pd(l,h,!0);break;case"textarea":Ws(l),yd(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=da)}l=c,r.updateQueue=l,l!==null&&(r.flags|=4)}else{m=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vd(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=m.createElement(a,{is:l.is}):(t=m.createElement(a),a==="select"&&(m=t,l.multiple?m.multiple=!0:l.size&&(m.size=l.size))):t=m.createElementNS(t,a),t[qt]=r,t[Vi]=l,Rf(t,r,!1,!1),r.stateNode=t;e:{switch(m=Yo(a,l),a){case"dialog":ke("cancel",t),ke("close",t),c=l;break;case"iframe":case"object":case"embed":ke("load",t),c=l;break;case"video":case"audio":for(c=0;c<Hi.length;c++)ke(Hi[c],t);c=l;break;case"source":ke("error",t),c=l;break;case"img":case"image":case"link":ke("error",t),ke("load",t),c=l;break;case"details":ke("toggle",t),c=l;break;case"input":hd(t,l),c=Ho(t,l),ke("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=$({},l,{value:void 0}),ke("invalid",t);break;case"textarea":md(t,l),c=Vo(t,l),ke("invalid",t);break;default:c=l}Ko(a,c),y=c;for(h in y)if(y.hasOwnProperty(h)){var b=y[h];h==="style"?wd(t,b):h==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&_d(t,b)):h==="children"?typeof b=="string"?(a!=="textarea"||b!=="")&&Ei(t,b):typeof b=="number"&&Ei(t,""+b):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?b!=null&&h==="onScroll"&&ke("scroll",t):b!=null&&ee(t,h,b,m))}switch(a){case"input":Ws(t),pd(t,l,!1);break;case"textarea":Ws(t),yd(t);break;case"option":l.value!=null&&t.setAttribute("value",""+he(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?Ir(t,!!l.multiple,h,!1):l.defaultValue!=null&&Ir(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=da)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ze(r),null;case 6:if(t&&r.stateNode!=null)Af(t,r,t.memoizedProps,l);else{if(typeof l!="string"&&r.stateNode===null)throw Error(n(166));if(a=lr(Ji.current),lr(Kt.current),va(r)){if(l=r.stateNode,a=r.memoizedProps,l[qt]=r,(h=l.nodeValue!==a)&&(t=yt,t!==null))switch(t.tag){case 3:ca(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ca(l.nodeValue,a,(t.mode&1)!==0)}h&&(r.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[qt]=r,r.stateNode=l}return Ze(r),null;case 13:if(Ee(xe),l=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&vt!==null&&r.mode&1&&!(r.flags&128))Dh(),Wr(),r.flags|=98560,h=!1;else if(h=va(r),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[qt]=r}else Wr(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Ze(r),h=!1}else Ot!==null&&(Eu(Ot),Ot=null),h=!0;if(!h)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(r.child.flags|=8192,r.mode&1&&(t===null||xe.current&1?Ue===0&&(Ue=3):Iu())),r.updateQueue!==null&&(r.flags|=4),Ze(r),null);case 4:return Vr(),fu(t,r),t===null&&Bi(r.stateNode.containerInfo),Ze(r),null;case 10:return Wl(r.type._context),Ze(r),null;case 17:return lt(r.type)&&fa(),Ze(r),null;case 19:if(Ee(xe),h=r.memoizedState,h===null)return Ze(r),null;if(l=(r.flags&128)!==0,m=h.rendering,m===null)if(l)ts(h,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(m=Sa(t),m!==null){for(r.flags|=128,ts(h,!1),l=m.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),r.subtreeFlags=0,l=a,a=r.child;a!==null;)h=a,t=l,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return be(xe,xe.current&1|2),r.child}t=t.sibling}h.tail!==null&&De()>Gr&&(r.flags|=128,l=!0,ts(h,!1),r.lanes=4194304)}else{if(!l)if(t=Sa(m),t!==null){if(r.flags|=128,l=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),ts(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!Ne)return Ze(r),null}else 2*De()-h.renderingStartTime>Gr&&a!==1073741824&&(r.flags|=128,l=!0,ts(h,!1),r.lanes=4194304);h.isBackwards?(m.sibling=r.child,r.child=m):(a=h.last,a!==null?a.sibling=m:r.child=m,h.last=m)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=De(),r.sibling=null,a=xe.current,be(xe,l?a&1|2:a&1),r):(Ze(r),null);case 22:case 23:return Cu(),l=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(r.flags|=8192),l&&r.mode&1?_t&1073741824&&(Ze(r),r.subtreeFlags&6&&(r.flags|=8192)):Ze(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function M_(t,r){switch(Dl(r),r.tag){case 1:return lt(r.type)&&fa(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Vr(),Ee(ot),Ee(Je),Yl(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return ql(r),null;case 13:if(Ee(xe),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Wr()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return Ee(xe),null;case 4:return Vr(),null;case 10:return Wl(r.type._context),null;case 22:case 23:return Cu(),null;case 24:return null;default:return null}}var Aa=!1,Xe=!1,F_=typeof WeakSet=="function"?WeakSet:Set,H=null;function Kr(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Ae(t,r,l)}else a.current=null}function Lf(t,r,a){try{a()}catch(l){Ae(t,r,l)}}var Df=!1;function z_(t,r){if(Il=Xs,t=dh(),vl(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var m=0,y=-1,b=-1,I=0,A=0,L=t,R=null;t:for(;;){for(var W;L!==a||c!==0&&L.nodeType!==3||(y=m+c),L!==h||l!==0&&L.nodeType!==3||(b=m+l),L.nodeType===3&&(m+=L.nodeValue.length),(W=L.firstChild)!==null;)R=L,L=W;for(;;){if(L===t)break t;if(R===a&&++I===c&&(y=m),R===h&&++A===l&&(b=m),(W=L.nextSibling)!==null)break;L=R,R=L.parentNode}L=W}a=y===-1||b===-1?null:{start:y,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(Tl={focusedElem:t,selectionRange:a},Xs=!1,H=r;H!==null;)if(r=H,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,H=t;else for(;H!==null;){r=H;try{var V=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(V!==null){var q=V.memoizedProps,Me=V.memoizedState,S=r.stateNode,w=S.getSnapshotBeforeUpdate(r.elementType===r.type?q:At(r.type,q),Me);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var C=r.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(F){Ae(r,r.return,F)}if(t=r.sibling,t!==null){t.return=r.return,H=t;break}H=r.return}return V=Df,Df=!1,V}function ns(t,r,a){var l=r.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Lf(r,a,h)}c=c.next}while(c!==l)}}function La(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==r)}}function pu(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function Mf(t){var r=t.alternate;r!==null&&(t.alternate=null,Mf(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[qt],delete r[Vi],delete r[Rl],delete r[b_],delete r[w_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ff(t){return t.tag===5||t.tag===3||t.tag===4}function zf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ff(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mu(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=da));else if(l!==4&&(t=t.child,t!==null))for(mu(t,r,a),t=t.sibling;t!==null;)mu(t,r,a),t=t.sibling}function gu(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(gu(t,r,a),t=t.sibling;t!==null;)gu(t,r,a),t=t.sibling}var qe=null,Lt=!1;function An(t,r,a){for(a=a.child;a!==null;)Uf(t,r,a),a=a.sibling}function Uf(t,r,a){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Ks,a)}catch{}switch(a.tag){case 5:Xe||Kr(a,r);case 6:var l=qe,c=Lt;qe=null,An(t,r,a),qe=l,Lt=c,qe!==null&&(Lt?(t=qe,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):qe.removeChild(a.stateNode));break;case 18:qe!==null&&(Lt?(t=qe,a=a.stateNode,t.nodeType===8?xl(t.parentNode,a):t.nodeType===1&&xl(t,a),Li(t)):xl(qe,a.stateNode));break;case 4:l=qe,c=Lt,qe=a.stateNode.containerInfo,Lt=!0,An(t,r,a),qe=l,Lt=c;break;case 0:case 11:case 14:case 15:if(!Xe&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,m=h.destroy;h=h.tag,m!==void 0&&(h&2||h&4)&&Lf(a,r,m),c=c.next}while(c!==l)}An(t,r,a);break;case 1:if(!Xe&&(Kr(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(y){Ae(a,r,y)}An(t,r,a);break;case 21:An(t,r,a);break;case 22:a.mode&1?(Xe=(l=Xe)||a.memoizedState!==null,An(t,r,a),Xe=l):An(t,r,a);break;default:An(t,r,a)}}function jf(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new F_),r.forEach(function(l){var c=K_.bind(null,t,l);a.has(l)||(a.add(l),l.then(c,c))})}}function Dt(t,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var c=a[l];try{var h=t,m=r,y=m;e:for(;y!==null;){switch(y.tag){case 5:qe=y.stateNode,Lt=!1;break e;case 3:qe=y.stateNode.containerInfo,Lt=!0;break e;case 4:qe=y.stateNode.containerInfo,Lt=!0;break e}y=y.return}if(qe===null)throw Error(n(160));Uf(h,m,c),qe=null,Lt=!1;var b=c.alternate;b!==null&&(b.return=null),c.return=null}catch(I){Ae(c,r,I)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Wf(r,t),r=r.sibling}function Wf(t,r){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dt(r,t),Gt(t),l&4){try{ns(3,t,t.return),La(3,t)}catch(q){Ae(t,t.return,q)}try{ns(5,t,t.return)}catch(q){Ae(t,t.return,q)}}break;case 1:Dt(r,t),Gt(t),l&512&&a!==null&&Kr(a,a.return);break;case 5:if(Dt(r,t),Gt(t),l&512&&a!==null&&Kr(a,a.return),t.flags&32){var c=t.stateNode;try{Ei(c,"")}catch(q){Ae(t,t.return,q)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,m=a!==null?a.memoizedProps:h,y=t.type,b=t.updateQueue;if(t.updateQueue=null,b!==null)try{y==="input"&&h.type==="radio"&&h.name!=null&&fd(c,h),Yo(y,m);var I=Yo(y,h);for(m=0;m<b.length;m+=2){var A=b[m],L=b[m+1];A==="style"?wd(c,L):A==="dangerouslySetInnerHTML"?_d(c,L):A==="children"?Ei(c,L):ee(c,A,L,I)}switch(y){case"input":Bo(c,h);break;case"textarea":gd(c,h);break;case"select":var R=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var W=h.value;W!=null?Ir(c,!!h.multiple,W,!1):R!==!!h.multiple&&(h.defaultValue!=null?Ir(c,!!h.multiple,h.defaultValue,!0):Ir(c,!!h.multiple,h.multiple?[]:"",!1))}c[Vi]=h}catch(q){Ae(t,t.return,q)}}break;case 6:if(Dt(r,t),Gt(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(q){Ae(t,t.return,q)}}break;case 3:if(Dt(r,t),Gt(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Li(r.containerInfo)}catch(q){Ae(t,t.return,q)}break;case 4:Dt(r,t),Gt(t);break;case 13:Dt(r,t),Gt(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(_u=De())),l&4&&jf(t);break;case 22:if(A=a!==null&&a.memoizedState!==null,t.mode&1?(Xe=(I=Xe)||A,Dt(r,t),Xe=I):Dt(r,t),Gt(t),l&8192){if(I=t.memoizedState!==null,(t.stateNode.isHidden=I)&&!A&&t.mode&1)for(H=t,A=t.child;A!==null;){for(L=H=A;H!==null;){switch(R=H,W=R.child,R.tag){case 0:case 11:case 14:case 15:ns(4,R,R.return);break;case 1:Kr(R,R.return);var V=R.stateNode;if(typeof V.componentWillUnmount=="function"){l=R,a=R.return;try{r=l,V.props=r.memoizedProps,V.state=r.memoizedState,V.componentWillUnmount()}catch(q){Ae(l,a,q)}}break;case 5:Kr(R,R.return);break;case 22:if(R.memoizedState!==null){$f(L);continue}}W!==null?(W.return=R,H=W):$f(L)}A=A.sibling}e:for(A=null,L=t;;){if(L.tag===5){if(A===null){A=L;try{c=L.stateNode,I?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(y=L.stateNode,b=L.memoizedProps.style,m=b!=null&&b.hasOwnProperty("display")?b.display:null,y.style.display=bd("display",m))}catch(q){Ae(t,t.return,q)}}}else if(L.tag===6){if(A===null)try{L.stateNode.nodeValue=I?"":L.memoizedProps}catch(q){Ae(t,t.return,q)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===t)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===t)break e;for(;L.sibling===null;){if(L.return===null||L.return===t)break e;A===L&&(A=null),L=L.return}A===L&&(A=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:Dt(r,t),Gt(t),l&4&&jf(t);break;case 21:break;default:Dt(r,t),Gt(t)}}function Gt(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if(Ff(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Ei(c,""),l.flags&=-33);var h=zf(t);gu(t,h,c);break;case 3:case 4:var m=l.stateNode.containerInfo,y=zf(t);mu(t,y,m);break;default:throw Error(n(161))}}catch(b){Ae(t,t.return,b)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function U_(t,r,a){H=t,Hf(t)}function Hf(t,r,a){for(var l=(t.mode&1)!==0;H!==null;){var c=H,h=c.child;if(c.tag===22&&l){var m=c.memoizedState!==null||Aa;if(!m){var y=c.alternate,b=y!==null&&y.memoizedState!==null||Xe;y=Aa;var I=Xe;if(Aa=m,(Xe=b)&&!I)for(H=c;H!==null;)m=H,b=m.child,m.tag===22&&m.memoizedState!==null?Vf(c):b!==null?(b.return=m,H=b):Vf(c);for(;h!==null;)H=h,Hf(h),h=h.sibling;H=c,Aa=y,Xe=I}Bf(t)}else c.subtreeFlags&8772&&h!==null?(h.return=c,H=h):Bf(t)}}function Bf(t){for(;H!==null;){var r=H;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Xe||La(5,r);break;case 1:var l=r.stateNode;if(r.flags&4&&!Xe)if(a===null)l.componentDidMount();else{var c=r.elementType===r.type?a.memoizedProps:At(r.type,a.memoizedProps);l.componentDidUpdate(c,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&Hh(r,h,l);break;case 3:var m=r.updateQueue;if(m!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Hh(r,m,a)}break;case 5:var y=r.stateNode;if(a===null&&r.flags&4){a=y;var b=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&a.focus();break;case"img":b.src&&(a.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var I=r.alternate;if(I!==null){var A=I.memoizedState;if(A!==null){var L=A.dehydrated;L!==null&&Li(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Xe||r.flags&512&&pu(r)}catch(R){Ae(r,r.return,R)}}if(r===t){H=null;break}if(a=r.sibling,a!==null){a.return=r.return,H=a;break}H=r.return}}function $f(t){for(;H!==null;){var r=H;if(r===t){H=null;break}var a=r.sibling;if(a!==null){a.return=r.return,H=a;break}H=r.return}}function Vf(t){for(;H!==null;){var r=H;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{La(4,r)}catch(b){Ae(r,a,b)}break;case 1:var l=r.stateNode;if(typeof l.componentDidMount=="function"){var c=r.return;try{l.componentDidMount()}catch(b){Ae(r,c,b)}}var h=r.return;try{pu(r)}catch(b){Ae(r,h,b)}break;case 5:var m=r.return;try{pu(r)}catch(b){Ae(r,m,b)}}}catch(b){Ae(r,r.return,b)}if(r===t){H=null;break}var y=r.sibling;if(y!==null){y.return=r.return,H=y;break}H=r.return}}var j_=Math.ceil,Da=X.ReactCurrentDispatcher,yu=X.ReactCurrentOwner,Ct=X.ReactCurrentBatchConfig,oe=0,We=null,Fe=null,Ke=0,_t=0,Yr=Nn(0),Ue=0,rs=null,cr=0,Ma=0,vu=0,is=null,ct=null,_u=0,Gr=1/0,ln=null,Fa=!1,bu=null,Ln=null,za=!1,Dn=null,Ua=0,ss=0,wu=null,ja=-1,Wa=0;function it(){return oe&6?De():ja!==-1?ja:ja=De()}function Mn(t){return t.mode&1?oe&2&&Ke!==0?Ke&-Ke:E_.transition!==null?(Wa===0&&(Wa=Md()),Wa):(t=fe,t!==0||(t=window.event,t=t===void 0?16:Vd(t.type)),t):1}function Mt(t,r,a,l){if(50<ss)throw ss=0,wu=null,Error(n(185));Pi(t,a,l),(!(oe&2)||t!==We)&&(t===We&&(!(oe&2)&&(Ma|=a),Ue===4&&Fn(t,Ke)),dt(t,l),a===1&&oe===0&&!(r.mode&1)&&(Gr=De()+500,ma&&xn()))}function dt(t,r){var a=t.callbackNode;Ev(t,r);var l=Js(t,t===We?Ke:0);if(l===0)a!==null&&Ad(a),t.callbackNode=null,t.callbackPriority=0;else if(r=l&-l,t.callbackPriority!==r){if(a!=null&&Ad(a),r===1)t.tag===0?k_(Kf.bind(null,t)):xh(Kf.bind(null,t)),v_(function(){!(oe&6)&&xn()}),a=null;else{switch(Fd(l)){case 1:a=tl;break;case 4:a=Ld;break;case 16:a=qs;break;case 536870912:a=Dd;break;default:a=qs}a=tp(a,qf.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function qf(t,r){if(ja=-1,Wa=0,oe&6)throw Error(n(327));var a=t.callbackNode;if(Jr()&&t.callbackNode!==a)return null;var l=Js(t,t===We?Ke:0);if(l===0)return null;if(l&30||l&t.expiredLanes||r)r=Ha(t,l);else{r=l;var c=oe;oe|=2;var h=Gf();(We!==t||Ke!==r)&&(ln=null,Gr=De()+500,hr(t,r));do try{B_();break}catch(y){Yf(t,y)}while(!0);jl(),Da.current=h,oe=c,Fe!==null?r=0:(We=null,Ke=0,r=Ue)}if(r!==0){if(r===2&&(c=nl(t),c!==0&&(l=c,r=ku(t,c))),r===1)throw a=rs,hr(t,0),Fn(t,l),dt(t,De()),a;if(r===6)Fn(t,l);else{if(c=t.current.alternate,!(l&30)&&!W_(c)&&(r=Ha(t,l),r===2&&(h=nl(t),h!==0&&(l=h,r=ku(t,h))),r===1))throw a=rs,hr(t,0),Fn(t,l),dt(t,De()),a;switch(t.finishedWork=c,t.finishedLanes=l,r){case 0:case 1:throw Error(n(345));case 2:fr(t,ct,ln);break;case 3:if(Fn(t,l),(l&130023424)===l&&(r=_u+500-De(),10<r)){if(Js(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){it(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=Pl(fr.bind(null,t,ct,ln),r);break}fr(t,ct,ln);break;case 4:if(Fn(t,l),(l&4194240)===l)break;for(r=t.eventTimes,c=-1;0<l;){var m=31-xt(l);h=1<<m,m=r[m],m>c&&(c=m),l&=~h}if(l=c,l=De()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*j_(l/1960))-l,10<l){t.timeoutHandle=Pl(fr.bind(null,t,ct,ln),l);break}fr(t,ct,ln);break;case 5:fr(t,ct,ln);break;default:throw Error(n(329))}}}return dt(t,De()),t.callbackNode===a?qf.bind(null,t):null}function ku(t,r){var a=is;return t.current.memoizedState.isDehydrated&&(hr(t,r).flags|=256),t=Ha(t,r),t!==2&&(r=ct,ct=a,r!==null&&Eu(r)),t}function Eu(t){ct===null?ct=t:ct.push.apply(ct,t)}function W_(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var c=a[l],h=c.getSnapshot;c=c.value;try{if(!Rt(h(),c))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Fn(t,r){for(r&=~vu,r&=~Ma,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-xt(r),l=1<<a;t[a]=-1,r&=~l}}function Kf(t){if(oe&6)throw Error(n(327));Jr();var r=Js(t,0);if(!(r&1))return dt(t,De()),null;var a=Ha(t,r);if(t.tag!==0&&a===2){var l=nl(t);l!==0&&(r=l,a=ku(t,l))}if(a===1)throw a=rs,hr(t,0),Fn(t,r),dt(t,De()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,fr(t,ct,ln),dt(t,De()),null}function Su(t,r){var a=oe;oe|=1;try{return t(r)}finally{oe=a,oe===0&&(Gr=De()+500,ma&&xn())}}function dr(t){Dn!==null&&Dn.tag===0&&!(oe&6)&&Jr();var r=oe;oe|=1;var a=Ct.transition,l=fe;try{if(Ct.transition=null,fe=1,t)return t()}finally{fe=l,Ct.transition=a,oe=r,!(oe&6)&&xn()}}function Cu(){_t=Yr.current,Ee(Yr)}function hr(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,y_(a)),Fe!==null)for(a=Fe.return;a!==null;){var l=a;switch(Dl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&fa();break;case 3:Vr(),Ee(ot),Ee(Je),Yl();break;case 5:ql(l);break;case 4:Vr();break;case 13:Ee(xe);break;case 19:Ee(xe);break;case 10:Wl(l.type._context);break;case 22:case 23:Cu()}a=a.return}if(We=t,Fe=t=zn(t.current,null),Ke=_t=r,Ue=0,rs=null,vu=Ma=cr=0,ct=is=null,or!==null){for(r=0;r<or.length;r++)if(a=or[r],l=a.interleaved,l!==null){a.interleaved=null;var c=l.next,h=a.pending;if(h!==null){var m=h.next;h.next=c,l.next=m}a.pending=l}or=null}return t}function Yf(t,r){do{var a=Fe;try{if(jl(),Ca.current=Pa,Ia){for(var l=Re.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ia=!1}if(ur=0,je=ze=Re=null,Qi=!1,Zi=0,yu.current=null,a===null||a.return===null){Ue=1,rs=r,Fe=null;break}e:{var h=t,m=a.return,y=a,b=r;if(r=Ke,y.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var I=b,A=y,L=A.tag;if(!(A.mode&1)&&(L===0||L===11||L===15)){var R=A.alternate;R?(A.updateQueue=R.updateQueue,A.memoizedState=R.memoizedState,A.lanes=R.lanes):(A.updateQueue=null,A.memoizedState=null)}var W=vf(m);if(W!==null){W.flags&=-257,_f(W,m,y,h,r),W.mode&1&&yf(h,I,r),r=W,b=I;var V=r.updateQueue;if(V===null){var q=new Set;q.add(b),r.updateQueue=q}else V.add(b);break e}else{if(!(r&1)){yf(h,I,r),Iu();break e}b=Error(n(426))}}else if(Ne&&y.mode&1){var Me=vf(m);if(Me!==null){!(Me.flags&65536)&&(Me.flags|=256),_f(Me,m,y,h,r),zl(qr(b,y));break e}}h=b=qr(b,y),Ue!==4&&(Ue=2),is===null?is=[h]:is.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var S=mf(h,b,r);Wh(h,S);break e;case 1:y=b;var w=h.type,C=h.stateNode;if(!(h.flags&128)&&(typeof w.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Ln===null||!Ln.has(C)))){h.flags|=65536,r&=-r,h.lanes|=r;var F=gf(h,y,r);Wh(h,F);break e}}h=h.return}while(h!==null)}Qf(a)}catch(K){r=K,Fe===a&&a!==null&&(Fe=a=a.return);continue}break}while(!0)}function Gf(){var t=Da.current;return Da.current=Pa,t===null?Pa:t}function Iu(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),We===null||!(cr&268435455)&&!(Ma&268435455)||Fn(We,Ke)}function Ha(t,r){var a=oe;oe|=2;var l=Gf();(We!==t||Ke!==r)&&(ln=null,hr(t,r));do try{H_();break}catch(c){Yf(t,c)}while(!0);if(jl(),oe=a,Da.current=l,Fe!==null)throw Error(n(261));return We=null,Ke=0,Ue}function H_(){for(;Fe!==null;)Jf(Fe)}function B_(){for(;Fe!==null&&!pv();)Jf(Fe)}function Jf(t){var r=ep(t.alternate,t,_t);t.memoizedProps=t.pendingProps,r===null?Qf(t):Fe=r,yu.current=null}function Qf(t){var r=t;do{var a=r.alternate;if(t=r.return,r.flags&32768){if(a=M_(a,r),a!==null){a.flags&=32767,Fe=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Fe=null;return}}else if(a=D_(a,r,_t),a!==null){Fe=a;return}if(r=r.sibling,r!==null){Fe=r;return}Fe=r=t}while(r!==null);Ue===0&&(Ue=5)}function fr(t,r,a){var l=fe,c=Ct.transition;try{Ct.transition=null,fe=1,$_(t,r,a,l)}finally{Ct.transition=c,fe=l}return null}function $_(t,r,a,l){do Jr();while(Dn!==null);if(oe&6)throw Error(n(327));a=t.finishedWork;var c=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=a.lanes|a.childLanes;if(Sv(t,h),t===We&&(Fe=We=null,Ke=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||za||(za=!0,tp(qs,function(){return Jr(),null})),h=(a.flags&15990)!==0,a.subtreeFlags&15990||h){h=Ct.transition,Ct.transition=null;var m=fe;fe=1;var y=oe;oe|=4,yu.current=null,z_(t,a),Wf(a,t),c_(Tl),Xs=!!Il,Tl=Il=null,t.current=a,U_(a),mv(),oe=y,fe=m,Ct.transition=h}else t.current=a;if(za&&(za=!1,Dn=t,Ua=c),h=t.pendingLanes,h===0&&(Ln=null),vv(a.stateNode),dt(t,De()),r!==null)for(l=t.onRecoverableError,a=0;a<r.length;a++)c=r[a],l(c.value,{componentStack:c.stack,digest:c.digest});if(Fa)throw Fa=!1,t=bu,bu=null,t;return Ua&1&&t.tag!==0&&Jr(),h=t.pendingLanes,h&1?t===wu?ss++:(ss=0,wu=t):ss=0,xn(),null}function Jr(){if(Dn!==null){var t=Fd(Ua),r=Ct.transition,a=fe;try{if(Ct.transition=null,fe=16>t?16:t,Dn===null)var l=!1;else{if(t=Dn,Dn=null,Ua=0,oe&6)throw Error(n(331));var c=oe;for(oe|=4,H=t.current;H!==null;){var h=H,m=h.child;if(H.flags&16){var y=h.deletions;if(y!==null){for(var b=0;b<y.length;b++){var I=y[b];for(H=I;H!==null;){var A=H;switch(A.tag){case 0:case 11:case 15:ns(8,A,h)}var L=A.child;if(L!==null)L.return=A,H=L;else for(;H!==null;){A=H;var R=A.sibling,W=A.return;if(Mf(A),A===I){H=null;break}if(R!==null){R.return=W,H=R;break}H=W}}}var V=h.alternate;if(V!==null){var q=V.child;if(q!==null){V.child=null;do{var Me=q.sibling;q.sibling=null,q=Me}while(q!==null)}}H=h}}if(h.subtreeFlags&2064&&m!==null)m.return=h,H=m;else e:for(;H!==null;){if(h=H,h.flags&2048)switch(h.tag){case 0:case 11:case 15:ns(9,h,h.return)}var S=h.sibling;if(S!==null){S.return=h.return,H=S;break e}H=h.return}}var w=t.current;for(H=w;H!==null;){m=H;var C=m.child;if(m.subtreeFlags&2064&&C!==null)C.return=m,H=C;else e:for(m=w;H!==null;){if(y=H,y.flags&2048)try{switch(y.tag){case 0:case 11:case 15:La(9,y)}}catch(K){Ae(y,y.return,K)}if(y===m){H=null;break e}var F=y.sibling;if(F!==null){F.return=y.return,H=F;break e}H=y.return}}if(oe=c,xn(),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Ks,t)}catch{}l=!0}return l}finally{fe=a,Ct.transition=r}}return!1}function Zf(t,r,a){r=qr(a,r),r=mf(t,r,1),t=On(t,r,1),r=it(),t!==null&&(Pi(t,1,r),dt(t,r))}function Ae(t,r,a){if(t.tag===3)Zf(t,t,a);else for(;r!==null;){if(r.tag===3){Zf(r,t,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ln===null||!Ln.has(l))){t=qr(a,t),t=gf(r,t,1),r=On(r,t,1),t=it(),r!==null&&(Pi(r,1,t),dt(r,t));break}}r=r.return}}function V_(t,r,a){var l=t.pingCache;l!==null&&l.delete(r),r=it(),t.pingedLanes|=t.suspendedLanes&a,We===t&&(Ke&a)===a&&(Ue===4||Ue===3&&(Ke&130023424)===Ke&&500>De()-_u?hr(t,0):vu|=a),dt(t,r)}function Xf(t,r){r===0&&(t.mode&1?(r=Gs,Gs<<=1,!(Gs&130023424)&&(Gs=4194304)):r=1);var a=it();t=sn(t,r),t!==null&&(Pi(t,r,a),dt(t,a))}function q_(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),Xf(t,a)}function K_(t,r){var a=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(r),Xf(t,a)}var ep;ep=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||ot.current)ut=!0;else{if(!(t.lanes&a)&&!(r.flags&128))return ut=!1,L_(t,r,a);ut=!!(t.flags&131072)}else ut=!1,Ne&&r.flags&1048576&&Rh(r,ya,r.index);switch(r.lanes=0,r.tag){case 2:var l=r.type;Oa(t,r),t=r.pendingProps;var c=zr(r,Je.current);$r(r,a),c=Ql(null,r,l,t,c,a);var h=Zl();return r.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,lt(l)?(h=!0,pa(r)):h=!1,r.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,$l(r),c.updater=xa,r.stateNode=c,c._reactInternals=r,iu(r,l,t,a),r=lu(null,r,l,!0,h,a)):(r.tag=0,Ne&&h&&Ll(r),rt(null,r,c,a),r=r.child),r;case 16:l=r.elementType;e:{switch(Oa(t,r),t=r.pendingProps,c=l._init,l=c(l._payload),r.type=l,c=r.tag=G_(l),t=At(l,t),c){case 0:r=ou(null,r,l,t,a);break e;case 1:r=Cf(null,r,l,t,a);break e;case 11:r=bf(null,r,l,t,a);break e;case 14:r=wf(null,r,l,At(l.type,t),a);break e}throw Error(n(306,l,""))}return r;case 0:return l=r.type,c=r.pendingProps,c=r.elementType===l?c:At(l,c),ou(t,r,l,c,a);case 1:return l=r.type,c=r.pendingProps,c=r.elementType===l?c:At(l,c),Cf(t,r,l,c,a);case 3:e:{if(If(r),t===null)throw Error(n(387));l=r.pendingProps,h=r.memoizedState,c=h.element,jh(t,r),Ea(r,l,null,a);var m=r.memoizedState;if(l=m.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){c=qr(Error(n(423)),r),r=Tf(t,r,l,a,c);break e}else if(l!==c){c=qr(Error(n(424)),r),r=Tf(t,r,l,a,c);break e}else for(vt=Tn(r.stateNode.containerInfo.firstChild),yt=r,Ne=!0,Ot=null,a=zh(r,null,l,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Wr(),l===c){r=on(t,r,a);break e}rt(t,r,l,a)}r=r.child}return r;case 5:return Bh(r),t===null&&Fl(r),l=r.type,c=r.pendingProps,h=t!==null?t.memoizedProps:null,m=c.children,Nl(l,c)?m=null:h!==null&&Nl(l,h)&&(r.flags|=32),Sf(t,r),rt(t,r,m,a),r.child;case 6:return t===null&&Fl(r),null;case 13:return Nf(t,r,a);case 4:return Vl(r,r.stateNode.containerInfo),l=r.pendingProps,t===null?r.child=Hr(r,null,l,a):rt(t,r,l,a),r.child;case 11:return l=r.type,c=r.pendingProps,c=r.elementType===l?c:At(l,c),bf(t,r,l,c,a);case 7:return rt(t,r,r.pendingProps,a),r.child;case 8:return rt(t,r,r.pendingProps.children,a),r.child;case 12:return rt(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(l=r.type._context,c=r.pendingProps,h=r.memoizedProps,m=c.value,be(ba,l._currentValue),l._currentValue=m,h!==null)if(Rt(h.value,m)){if(h.children===c.children&&!ot.current){r=on(t,r,a);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var y=h.dependencies;if(y!==null){m=h.child;for(var b=y.firstContext;b!==null;){if(b.context===l){if(h.tag===1){b=an(-1,a&-a),b.tag=2;var I=h.updateQueue;if(I!==null){I=I.shared;var A=I.pending;A===null?b.next=b:(b.next=A.next,A.next=b),I.pending=b}}h.lanes|=a,b=h.alternate,b!==null&&(b.lanes|=a),Hl(h.return,a,r),y.lanes|=a;break}b=b.next}}else if(h.tag===10)m=h.type===r.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=a,y=m.alternate,y!==null&&(y.lanes|=a),Hl(m,a,r),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===r){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}rt(t,r,c.children,a),r=r.child}return r;case 9:return c=r.type,l=r.pendingProps.children,$r(r,a),c=Et(c),l=l(c),r.flags|=1,rt(t,r,l,a),r.child;case 14:return l=r.type,c=At(l,r.pendingProps),c=At(l.type,c),wf(t,r,l,c,a);case 15:return kf(t,r,r.type,r.pendingProps,a);case 17:return l=r.type,c=r.pendingProps,c=r.elementType===l?c:At(l,c),Oa(t,r),r.tag=1,lt(l)?(t=!0,pa(r)):t=!1,$r(r,a),ff(r,l,c),iu(r,l,c,a),lu(null,r,l,!0,t,a);case 19:return xf(t,r,a);case 22:return Ef(t,r,a)}throw Error(n(156,r.tag))};function tp(t,r){return Od(t,r)}function Y_(t,r,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(t,r,a,l){return new Y_(t,r,a,l)}function Tu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function G_(t){if(typeof t=="function")return Tu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bt)return 11;if(t===$t)return 14}return 2}function zn(t,r){var a=t.alternate;return a===null?(a=It(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Ba(t,r,a,l,c,h){var m=2;if(l=t,typeof t=="function")Tu(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case we:return pr(a.children,c,h,r);case me:m=8,c|=8;break;case Le:return t=It(12,a,r,c|2),t.elementType=Le,t.lanes=h,t;case pt:return t=It(13,a,r,c),t.elementType=pt,t.lanes=h,t;case Pt:return t=It(19,a,r,c),t.elementType=Pt,t.lanes=h,t;case Oe:return $a(a,c,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ge:m=10;break e;case tr:m=9;break e;case Bt:m=11;break e;case $t:m=14;break e;case at:m=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=It(m,a,r,c),r.elementType=t,r.type=l,r.lanes=h,r}function pr(t,r,a,l){return t=It(7,t,l,r),t.lanes=a,t}function $a(t,r,a,l){return t=It(22,t,l,r),t.elementType=Oe,t.lanes=a,t.stateNode={isHidden:!1},t}function Nu(t,r,a){return t=It(6,t,null,r),t.lanes=a,t}function Pu(t,r,a){return r=It(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function J_(t,r,a,l,c){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rl(0),this.expirationTimes=rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rl(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function xu(t,r,a,l,c,h,m,y,b){return t=new J_(t,r,a,y,b),r===1?(r=1,h===!0&&(r|=8)):r=0,h=It(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$l(h),t}function Q_(t,r,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ve,key:l==null?null:""+l,children:t,containerInfo:r,implementation:a}}function np(t){if(!t)return Pn;t=t._reactInternals;e:{if(nr(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(lt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(lt(a))return Nh(t,a,r)}return r}function rp(t,r,a,l,c,h,m,y,b){return t=xu(a,l,!0,t,c,h,m,y,b),t.context=np(null),a=t.current,l=it(),c=Mn(a),h=an(l,c),h.callback=r??null,On(a,h,c),t.current.lanes=c,Pi(t,c,l),dt(t,l),t}function Va(t,r,a,l){var c=r.current,h=it(),m=Mn(c);return a=np(a),r.context===null?r.context=a:r.pendingContext=a,r=an(h,m),r.payload={element:t},l=l===void 0?null:l,l!==null&&(r.callback=l),t=On(c,r,m),t!==null&&(Mt(t,c,m,h),ka(t,c,m)),m}function qa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ip(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function Ru(t,r){ip(t,r),(t=t.alternate)&&ip(t,r)}var sp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ou(t){this._internalRoot=t}Ka.prototype.render=Ou.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));Va(t,r,null,null)},Ka.prototype.unmount=Ou.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;dr(function(){Va(null,t,null,null)}),r[en]=null}};function Ka(t){this._internalRoot=t}Ka.prototype.unstable_scheduleHydration=function(t){if(t){var r=jd();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Sn.length&&r!==0&&r<Sn[a].priority;a++);Sn.splice(a,0,t),a===0&&Bd(t)}};function Au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ya(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ap(){}function Z_(t,r,a,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var I=qa(m);h.call(I)}}var m=rp(r,l,t,0,null,!1,!1,"",ap);return t._reactRootContainer=m,t[en]=m.current,Bi(t.nodeType===8?t.parentNode:t),dr(),m}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var y=l;l=function(){var I=qa(b);y.call(I)}}var b=xu(t,0,!1,null,null,!1,!1,"",ap);return t._reactRootContainer=b,t[en]=b.current,Bi(t.nodeType===8?t.parentNode:t),dr(function(){Va(r,b,a,l)}),b}function Ga(t,r,a,l,c){var h=a._reactRootContainer;if(h){var m=h;if(typeof c=="function"){var y=c;c=function(){var b=qa(m);y.call(b)}}Va(r,m,t,c)}else m=Z_(a,r,t,c,l);return qa(m)}zd=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=Ni(r.pendingLanes);a!==0&&(il(r,a|1),dt(r,De()),!(oe&6)&&(Gr=De()+500,xn()))}break;case 13:dr(function(){var l=sn(t,1);if(l!==null){var c=it();Mt(l,t,1,c)}}),Ru(t,1)}},sl=function(t){if(t.tag===13){var r=sn(t,134217728);if(r!==null){var a=it();Mt(r,t,134217728,a)}Ru(t,134217728)}},Ud=function(t){if(t.tag===13){var r=Mn(t),a=sn(t,r);if(a!==null){var l=it();Mt(a,t,r,l)}Ru(t,r)}},jd=function(){return fe},Wd=function(t,r){var a=fe;try{return fe=t,r()}finally{fe=a}},Qo=function(t,r,a){switch(r){case"input":if(Bo(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==t&&l.form===t.form){var c=ha(l);if(!c)throw Error(n(90));dd(l),Bo(l,c)}}}break;case"textarea":gd(t,a);break;case"select":r=a.value,r!=null&&Ir(t,!!a.multiple,r,!1)}},Cd=Su,Id=dr;var X_={usingClientEntryPoint:!1,Events:[qi,Mr,ha,Ed,Sd,Su]},as={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e0={bundleType:as.bundleType,version:as.version,rendererPackageName:as.rendererPackageName,rendererConfig:as.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:X.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xd(t),t===null?null:t.stateNode},findFiberByHostInstance:as.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ja.isDisabled&&Ja.supportsFiber)try{Ks=Ja.inject(e0),Vt=Ja}catch{}}return ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X_,ht.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Au(r))throw Error(n(200));return Q_(t,r,null,a)},ht.createRoot=function(t,r){if(!Au(t))throw Error(n(299));var a=!1,l="",c=sp;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),r=xu(t,1,!1,null,null,a,!1,l,c),t[en]=r.current,Bi(t.nodeType===8?t.parentNode:t),new Ou(r)},ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=xd(r),t=t===null?null:t.stateNode,t},ht.flushSync=function(t){return dr(t)},ht.hydrate=function(t,r,a){if(!Ya(r))throw Error(n(200));return Ga(null,t,r,!0,a)},ht.hydrateRoot=function(t,r,a){if(!Au(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,c=!1,h="",m=sp;if(a!=null&&(a.unstable_strictMode===!0&&(c=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(m=a.onRecoverableError)),r=rp(r,null,t,1,a??null,c,!1,h,m),t[en]=r.current,Bi(t),l)for(t=0;t<l.length;t++)a=l[t],c=a._getVersion,c=c(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,c]:r.mutableSourceEagerHydrationData.push(a,c);return new Ka(r)},ht.render=function(t,r,a){if(!Ya(r))throw Error(n(200));return Ga(null,t,r,!1,a)},ht.unmountComponentAtNode=function(t){if(!Ya(t))throw Error(n(40));return t._reactRootContainer?(dr(function(){Ga(null,null,t,!1,function(){t._reactRootContainer=null,t[en]=null})}),!0):!1},ht.unstable_batchedUpdates=Su,ht.unstable_renderSubtreeIntoContainer=function(t,r,a,l){if(!Ya(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ga(t,r,a,!1,l)},ht.version="18.3.1-next-f1338f8080-20240426",ht}var vp;function c0(){if(vp)return Lu.exports;vp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Lu.exports=u0(),Lu.exports}var _p;function d0(){if(_p)return Qa;_p=1;var i=c0();return Qa.createRoot=i.createRoot,Qa.hydrateRoot=i.hydrateRoot,Qa}var h0=d0(),ls={},bp;function f0(){if(bp)return ls;bp=1,Object.defineProperty(ls,"__esModule",{value:!0}),ls.parse=d,ls.serialize=g;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const k=function(){};return k.prototype=Object.create(null),k})();function d(k,P){const T=new u,M=k.length;if(M<2)return T;const x=(P==null?void 0:P.decode)||_;let D=0;do{const z=k.indexOf("=",D);if(z===-1)break;const ee=k.indexOf(";",D),X=ee===-1?M:ee;if(z>X){D=k.lastIndexOf(";",z-1)+1;continue}const pe=f(k,D,z),ve=p(k,z,pe),we=k.slice(pe,ve);if(T[we]===void 0){let me=f(k,z+1,X),Le=p(k,X,me);const Ge=x(k.slice(me,Le));T[we]=Ge}D=X+1}while(D<M);return T}function f(k,P,T){do{const M=k.charCodeAt(P);if(M!==32&&M!==9)return P}while(++P<T);return T}function p(k,P,T){for(;P>T;){const M=k.charCodeAt(--P);if(M!==32&&M!==9)return P+1}return T}function g(k,P,T){const M=(T==null?void 0:T.encode)||encodeURIComponent;if(!i.test(k))throw new TypeError(`argument name is invalid: ${k}`);const x=M(P);if(!e.test(x))throw new TypeError(`argument val is invalid: ${P}`);let D=k+"="+x;if(!T)return D;if(T.maxAge!==void 0){if(!Number.isInteger(T.maxAge))throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);D+="; Max-Age="+T.maxAge}if(T.domain){if(!n.test(T.domain))throw new TypeError(`option domain is invalid: ${T.domain}`);D+="; Domain="+T.domain}if(T.path){if(!s.test(T.path))throw new TypeError(`option path is invalid: ${T.path}`);D+="; Path="+T.path}if(T.expires){if(!v(T.expires)||!Number.isFinite(T.expires.valueOf()))throw new TypeError(`option expires is invalid: ${T.expires}`);D+="; Expires="+T.expires.toUTCString()}if(T.httpOnly&&(D+="; HttpOnly"),T.secure&&(D+="; Secure"),T.partitioned&&(D+="; Partitioned"),T.priority)switch(typeof T.priority=="string"?T.priority.toLowerCase():void 0){case"low":D+="; Priority=Low";break;case"medium":D+="; Priority=Medium";break;case"high":D+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${T.priority}`)}if(T.sameSite)switch(typeof T.sameSite=="string"?T.sameSite.toLowerCase():T.sameSite){case!0:case"strict":D+="; SameSite=Strict";break;case"lax":D+="; SameSite=Lax";break;case"none":D+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${T.sameSite}`)}return D}function _(k){if(k.indexOf("%")===-1)return k;try{return decodeURIComponent(k)}catch{return k}}function v(k){return o.call(k)==="[object Date]"}return ls}f0();/**
* react-router v7.1.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/var wp="popstate";function p0(i={}){function e(s,o){let{pathname:u,search:d,hash:f}=s.location;return Qu("",{pathname:u,search:d,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:Es(o)}return g0(e,n,null,i)}function Pe(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Ut(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function m0(){return Math.random().toString(36).substring(2,10)}function kp(i,e){return{usr:i.state,key:i.key,idx:e}}function Qu(i,e,n=null,s){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?di(e):e,state:n,key:e&&e.key||s||m0()}}function Es({pathname:i="/",search:e="",hash:n=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(i+=n.charAt(0)==="#"?n:"#"+n),i}function di(i){let e={};if(i){let n=i.indexOf("#");n>=0&&(e.hash=i.substring(n),i=i.substring(0,n));let s=i.indexOf("?");s>=0&&(e.search=i.substring(s),i=i.substring(0,s)),i&&(e.pathname=i)}return e}function g0(i,e,n,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,d=o.history,f="POP",p=null,g=_();g==null&&(g=0,d.replaceState({...d.state,idx:g},""));function _(){return(d.state||{idx:null}).idx}function v(){f="POP";let x=_(),D=x==null?null:x-g;g=x,p&&p({action:f,location:M.location,delta:D})}function k(x,D){f="PUSH";let z=Qu(M.location,x,D);g=_()+1;let ee=kp(z,g),X=M.createHref(z);try{d.pushState(ee,"",X)}catch(pe){if(pe instanceof DOMException&&pe.name==="DataCloneError")throw pe;o.location.assign(X)}u&&p&&p({action:f,location:M.location,delta:1})}function P(x,D){f="REPLACE";let z=Qu(M.location,x,D);g=_();let ee=kp(z,g),X=M.createHref(z);d.replaceState(ee,"",X),u&&p&&p({action:f,location:M.location,delta:0})}function T(x){let D=o.location.origin!=="null"?o.location.origin:o.location.href,z=typeof x=="string"?x:Es(x);return z=z.replace(/ $/,"%20"),Pe(D,`No window.location.(origin|href) available to create URL for href: ${z}`),new URL(z,D)}let M={get action(){return f},get location(){return i(o,d)},listen(x){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(wp,v),p=x,()=>{o.removeEventListener(wp,v),p=null}},createHref(x){return e(o,x)},createURL:T,encodeLocation(x){let D=T(x);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:k,replace:P,go(x){return d.go(x)}};return M}function Um(i,e,n="/"){return y0(i,e,n,!1)}function y0(i,e,n,s){let o=typeof e=="string"?di(e):e,u=Jn(o.pathname||"/",n);if(u==null)return null;let d=jm(i);v0(d);let f=null;for(let p=0;f==null&&p<d.length;++p){let g=P0(u);f=T0(d[p],g,s)}return f}function jm(i,e=[],n=[],s=""){let o=(u,d,f)=>{let p={relativePath:f===void 0?u.path||"":f,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};p.relativePath.startsWith("/")&&(Pe(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let g=pn([s,p.relativePath]),_=n.concat(p);u.children&&u.children.length>0&&(Pe(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),jm(u.children,e,_,g)),!(u.path==null&&!u.index)&&e.push({path:g,score:C0(g,u.index),routesMeta:_})};return i.forEach((u,d)=>{var f;if(u.path===""||!((f=u.path)!=null&&f.includes("?")))o(u,d);else for(let p of Wm(u.path))o(u,d,p)}),e}function Wm(i){let e=i.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let d=Wm(s.join("/")),f=[];return f.push(...d.map(p=>p===""?u:[u,p].join("/"))),o&&f.push(...d),f.map(p=>i.startsWith("/")&&p===""?"/":p)}function v0(i){i.sort((e,n)=>e.score!==n.score?n.score-e.score:I0(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var _0=/^:[\w-]+$/,b0=3,w0=2,k0=1,E0=10,S0=-2,Ep=i=>i==="*";function C0(i,e){let n=i.split("/"),s=n.length;return n.some(Ep)&&(s+=S0),e&&(s+=w0),n.filter(o=>!Ep(o)).reduce((o,u)=>o+(_0.test(u)?b0:u===""?k0:E0),s)}function I0(i,e){return i.length===e.length&&i.slice(0,-1).every((n,s)=>n===e[s])?i[i.length-1]-e[e.length-1]:0}function T0(i,e,n=!1){let{routesMeta:s}=i,o={},u="/",d=[];for(let f=0;f<s.length;++f){let p=s[f],g=f===s.length-1,_=u==="/"?e:e.slice(u.length)||"/",v=uo({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},_),k=p.route;if(!v&&g&&n&&!s[s.length-1].route.index&&(v=uo({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!v)return null;Object.assign(o,v.params),d.push({params:o,pathname:pn([u,v.pathname]),pathnameBase:A0(pn([u,v.pathnameBase])),route:k}),v.pathnameBase!=="/"&&(u=pn([u,v.pathnameBase]))}return d}function uo(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[n,s]=N0(i.path,i.caseSensitive,i.end),o=e.match(n);if(!o)return null;let u=o[0],d=u.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((p,{paramName:g,isOptional:_},v)=>{if(g==="*"){let P=f[v]||"";d=u.slice(0,u.length-P.length).replace(/(.)\/+$/,"$1")}const k=f[v];return _&&!k?p[g]=void 0:p[g]=(k||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:d,pattern:i}}function N0(i,e=!1,n=!0){Ut(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,f)=>(s.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(s.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function P0(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ut(!1,`The URL path "${i}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function Jn(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=i.charAt(n);return s&&s!=="/"?null:i.slice(n)||"/"}function x0(i,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof i=="string"?di(i):i;return{pathname:n?n.startsWith("/")?n:R0(n,e):e,search:L0(s),hash:D0(o)}}function R0(i,e){let n=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Du(i,e,n,s){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function O0(i){return i.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function wc(i){let e=O0(i);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function kc(i,e,n,s=!1){let o;typeof i=="string"?o=di(i):(o={...i},Pe(!o.pathname||!o.pathname.includes("?"),Du("?","pathname","search",o)),Pe(!o.pathname||!o.pathname.includes("#"),Du("#","pathname","hash",o)),Pe(!o.search||!o.search.includes("#"),Du("#","search","hash",o)));let u=i===""||o.pathname==="",d=u?"/":o.pathname,f;if(d==null)f=n;else{let v=e.length-1;if(!s&&d.startsWith("..")){let k=d.split("/");for(;k[0]==="..";)k.shift(),v-=1;o.pathname=k.join("/")}f=v>=0?e[v]:"/"}let p=x0(o,f),g=d&&d!=="/"&&d.endsWith("/"),_=(u||d===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(g||_)&&(p.pathname+="/"),p}var pn=i=>i.join("/").replace(/\/\/+/g,"/"),A0=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),L0=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,D0=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function M0(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var Hm=["POST","PUT","PATCH","DELETE"];new Set(Hm);var F0=["GET",...Hm];new Set(F0);var hi=N.createContext(null);hi.displayName="DataRouter";var Po=N.createContext(null);Po.displayName="DataRouterState";var Bm=N.createContext({isTransitioning:!1});Bm.displayName="ViewTransition";var z0=N.createContext(new Map);z0.displayName="Fetchers";var U0=N.createContext(null);U0.displayName="Await";var Wt=N.createContext(null);Wt.displayName="Navigation";var xs=N.createContext(null);xs.displayName="Location";var Ht=N.createContext({outlet:null,matches:[],isDataRoute:!1});Ht.displayName="Route";var Ec=N.createContext(null);Ec.displayName="RouteError";function j0(i,{relative:e}={}){Pe(fi(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=N.useContext(Wt),{hash:o,pathname:u,search:d}=Rs(i,{relative:e}),f=u;return n!=="/"&&(f=u==="/"?n:pn([n,u])),s.createHref({pathname:f,search:d,hash:o})}function fi(){return N.useContext(xs)!=null}function Zn(){return Pe(fi(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(xs).location}var $m="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vm(i){N.useContext(Wt).static||N.useLayoutEffect(i)}function xo(){let{isDataRoute:i}=N.useContext(Ht);return i?eb():W0()}function W0(){Pe(fi(),"useNavigate() may be used only in the context of a <Router> component.");let i=N.useContext(hi),{basename:e,navigator:n}=N.useContext(Wt),{matches:s}=N.useContext(Ht),{pathname:o}=Zn(),u=JSON.stringify(wc(s)),d=N.useRef(!1);return Vm(()=>{d.current=!0}),N.useCallback((f,p={})=>{if(Ut(d.current,$m),!d.current)return;if(typeof f=="number"){n.go(f);return}let g=kc(f,JSON.parse(u),o,p.relative==="path");i==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:pn([e,g.pathname])),(p.replace?n.replace:n.push)(g,p.state,p)},[e,n,u,o,i])}N.createContext(null);function H0(){let{matches:i}=N.useContext(Ht),e=i[i.length-1];return e?e.params:{}}function Rs(i,{relative:e}={}){let{matches:n}=N.useContext(Ht),{pathname:s}=Zn(),o=JSON.stringify(wc(n));return N.useMemo(()=>kc(i,JSON.parse(o),s,e==="path"),[i,o,s,e])}function B0(i,e){return qm(i,e)}function qm(i,e,n,s){var o;Pe(fi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=N.useContext(Wt),{matches:d}=N.useContext(Ht),f=d[d.length-1],p=f?f.params:{},g=f?f.pathname:"/",_=f?f.pathnameBase:"/",v=f&&f.route;{let z=v&&v.path||"";Km(g,!v||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let k=Zn(),P;if(e){let z=typeof e=="string"?di(e):e;Pe(_==="/"||((o=z.pathname)==null?void 0:o.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${z.pathname}" was given in the \`location\` prop.`),P=z}else P=k;let T=P.pathname||"/",M=T;if(_!=="/"){let z=_.replace(/^\//,"").split("/");M="/"+T.replace(/^\//,"").split("/").slice(z.length).join("/")}let x=Um(i,{pathname:M});Ut(v||x!=null,`No routes matched location "${P.pathname}${P.search}${P.hash}" `),Ut(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${P.pathname}${P.search}${P.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=Y0(x&&x.map(z=>Object.assign({},z,{params:Object.assign({},p,z.params),pathname:pn([_,u.encodeLocation?u.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?_:pn([_,u.encodeLocation?u.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),d,n,s);return e&&D?N.createElement(xs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...P},navigationType:"POP"}},D):D}function $0(){let i=X0(),e=M0(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),n=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",i),d=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:u},"ErrorBoundary")," or"," ",N.createElement("code",{style:u},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:o},n):null,d)}var V0=N.createElement($0,null),q0=class extends N.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){console.error("React Router caught the following error during render",i,e)}render(){return this.state.error!==void 0?N.createElement(Ht.Provider,{value:this.props.routeContext},N.createElement(Ec.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function K0({routeContext:i,match:e,children:n}){let s=N.useContext(hi);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),N.createElement(Ht.Provider,{value:i},n)}function Y0(i,e=[],n=null,s=null){if(i==null){if(!n)return null;if(n.errors)i=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)i=n.matches;else return null}let o=i,u=n==null?void 0:n.errors;if(u!=null){let p=o.findIndex(g=>g.route.id&&(u==null?void 0:u[g.route.id])!==void 0);Pe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let d=!1,f=-1;if(n)for(let p=0;p<o.length;p++){let g=o[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(f=p),g.route.id){let{loaderData:_,errors:v}=n,k=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!v||v[g.route.id]===void 0);if(g.route.lazy||k){d=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((p,g,_)=>{let v,k=!1,P=null,T=null;n&&(v=u&&g.route.id?u[g.route.id]:void 0,P=g.route.errorElement||V0,d&&(f<0&&_===0?(Km("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,T=null):f===_&&(k=!0,T=g.route.hydrateFallbackElement||null)));let M=e.concat(o.slice(0,_+1)),x=()=>{let D;return v?D=P:k?D=T:g.route.Component?D=N.createElement(g.route.Component,null):g.route.element?D=g.route.element:D=p,N.createElement(K0,{match:g,routeContext:{outlet:p,matches:M,isDataRoute:n!=null},children:D})};return n&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?N.createElement(q0,{location:n.location,revalidation:n.revalidation,component:P,error:v,children:x(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):x()},null)}function Sc(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function G0(i){let e=N.useContext(hi);return Pe(e,Sc(i)),e}function J0(i){let e=N.useContext(Po);return Pe(e,Sc(i)),e}function Q0(i){let e=N.useContext(Ht);return Pe(e,Sc(i)),e}function Cc(i){let e=Q0(i),n=e.matches[e.matches.length-1];return Pe(n.route.id,`${i} can only be used on routes that contain a unique "id"`),n.route.id}function Z0(){return Cc("useRouteId")}function X0(){var i;let e=N.useContext(Ec),n=J0("useRouteError"),s=Cc("useRouteError");return e!==void 0?e:(i=n.errors)==null?void 0:i[s]}function eb(){let{router:i}=G0("useNavigate"),e=Cc("useNavigate"),n=N.useRef(!1);return Vm(()=>{n.current=!0}),N.useCallback(async(s,o={})=>{Ut(n.current,$m),n.current&&(typeof s=="number"?i.navigate(s):await i.navigate(s,{fromRouteId:e,...o}))},[i,e])}var Sp={};function Km(i,e,n){!e&&!Sp[i]&&(Sp[i]=!0,Ut(!1,n))}N.memo(tb);function tb({routes:i,future:e,state:n}){return qm(i,void 0,n,e)}function nb({to:i,replace:e,state:n,relative:s}){Pe(fi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=N.useContext(Wt);Ut(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=N.useContext(Ht),{pathname:d}=Zn(),f=xo(),p=kc(i,wc(u),d,s==="path"),g=JSON.stringify(p);return N.useEffect(()=>{f(JSON.parse(g),{replace:e,state:n,relative:s})},[f,g,s,e,n]),null}function ms(i){Pe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function rb({basename:i="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:u=!1}){Pe(!fi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=i.replace(/^\/*/,"/"),f=N.useMemo(()=>({basename:d,navigator:o,static:u,future:{}}),[d,o,u]);typeof n=="string"&&(n=di(n));let{pathname:p="/",search:g="",hash:_="",state:v=null,key:k="default"}=n,P=N.useMemo(()=>{let T=Jn(p,d);return T==null?null:{location:{pathname:T,search:g,hash:_,state:v,key:k},navigationType:s}},[d,p,g,_,v,k,s]);return Ut(P!=null,`<Router basename="${d}"> is not able to match the URL "${p}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),P==null?null:N.createElement(Wt.Provider,{value:f},N.createElement(xs.Provider,{children:e,value:P}))}function ib({children:i,location:e}){return B0(Zu(i),e)}function Zu(i,e=[]){let n=[];return N.Children.forEach(i,(s,o)=>{if(!N.isValidElement(s))return;let u=[...e,o];if(s.type===N.Fragment){n.push.apply(n,Zu(s.props.children,u));return}Pe(s.type===ms,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Pe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=Zu(s.props.children,u)),n.push(d)}),n}var no="get",ro="application/x-www-form-urlencoded";function Ro(i){return i!=null&&typeof i.tagName=="string"}function sb(i){return Ro(i)&&i.tagName.toLowerCase()==="button"}function ab(i){return Ro(i)&&i.tagName.toLowerCase()==="form"}function ob(i){return Ro(i)&&i.tagName.toLowerCase()==="input"}function lb(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function ub(i,e){return i.button===0&&(!e||e==="_self")&&!lb(i)}var Za=null;function cb(){if(Za===null)try{new FormData(document.createElement("form"),0),Za=!1}catch{Za=!0}return Za}var db=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Mu(i){return i!=null&&!db.has(i)?(Ut(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ro}"`),null):i}function hb(i,e){let n,s,o,u,d;if(ab(i)){let f=i.getAttribute("action");s=f?Jn(f,e):null,n=i.getAttribute("method")||no,o=Mu(i.getAttribute("enctype"))||ro,u=new FormData(i)}else if(sb(i)||ob(i)&&(i.type==="submit"||i.type==="image")){let f=i.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=i.getAttribute("formaction")||f.getAttribute("action");if(s=p?Jn(p,e):null,n=i.getAttribute("formmethod")||f.getAttribute("method")||no,o=Mu(i.getAttribute("formenctype"))||Mu(f.getAttribute("enctype"))||ro,u=new FormData(f,i),!cb()){let{name:g,type:_,value:v}=i;if(_==="image"){let k=g?`${g}.`:"";u.append(`${k}x`,"0"),u.append(`${k}y`,"0")}else g&&u.append(g,v)}}else{if(Ro(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=no,s=null,o=ro,d=i}return u&&o==="text/plain"&&(d=u,u=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:u,body:d}}function Ic(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}async function fb(i,e){if(i.id in e)return e[i.id];try{let n=await import(i.module);return e[i.id]=n,n}catch(n){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pb(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function mb(i,e,n){let s=await Promise.all(i.map(async o=>{let u=e.routes[o.route.id];if(u){let d=await fb(u,n);return d.links?d.links():[]}return[]}));return _b(s.flat(1).filter(pb).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Cp(i,e,n,s,o,u){let d=(p,g)=>n[g]?p.route.id!==n[g].route.id:!0,f=(p,g)=>{var _;return n[g].pathname!==p.pathname||((_=n[g].route.path)==null?void 0:_.endsWith("*"))&&n[g].params["*"]!==p.params["*"]};return u==="assets"?e.filter((p,g)=>d(p,g)||f(p,g)):u==="data"?e.filter((p,g)=>{var _;let v=s.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(d(p,g)||f(p,g))return!0;if(p.route.shouldRevalidate){let k=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((_=n[0])==null?void 0:_.params)||{},nextUrl:new URL(i,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof k=="boolean")return k}return!0}):[]}function gb(i,e){return yb(i.map(n=>{let s=e.routes[n.route.id];if(!s)return[];let o=[s.module];return s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function yb(i){return[...new Set(i)]}function vb(i){let e={},n=Object.keys(i).sort();for(let s of n)e[s]=i[s];return e}function _b(i,e){let n=new Set;return new Set(e),i.reduce((s,o)=>{let u=JSON.stringify(vb(o));return n.has(u)||(n.add(u),s.push({key:u,link:o})),s},[])}function bb(i){let e=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function wb(){let i=N.useContext(hi);return Ic(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function kb(){let i=N.useContext(Po);return Ic(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Tc=N.createContext(void 0);Tc.displayName="FrameworkContext";function Ym(){let i=N.useContext(Tc);return Ic(i,"You must render this element inside a <HydratedRouter> element"),i}function Eb(i,e){let n=N.useContext(Tc),[s,o]=N.useState(!1),[u,d]=N.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:g,onMouseLeave:_,onTouchStart:v}=e,k=N.useRef(null);N.useEffect(()=>{if(i==="render"&&d(!0),i==="viewport"){let M=D=>{D.forEach(z=>{d(z.isIntersecting)})},x=new IntersectionObserver(M,{threshold:.5});return k.current&&x.observe(k.current),()=>{x.disconnect()}}},[i]),N.useEffect(()=>{if(s){let M=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(M)}}},[s]);let P=()=>{o(!0)},T=()=>{o(!1),d(!1)};return n?i!=="intent"?[u,k,{}]:[u,k,{onFocus:us(f,P),onBlur:us(p,T),onMouseEnter:us(g,P),onMouseLeave:us(_,T),onTouchStart:us(v,P)}]:[!1,k,{}]}function us(i,e){return n=>{i&&i(n),n.defaultPrevented||e(n)}}function Sb({page:i,...e}){let{router:n}=wb(),s=N.useMemo(()=>Um(n.routes,i,n.basename),[n.routes,i,n.basename]);return s?N.createElement(Ib,{page:i,matches:s,...e}):null}function Cb(i){let{manifest:e,routeModules:n}=Ym(),[s,o]=N.useState([]);return N.useEffect(()=>{let u=!1;return mb(i,e,n).then(d=>{u||o(d)}),()=>{u=!0}},[i,e,n]),s}function Ib({page:i,matches:e,...n}){let s=Zn(),{manifest:o,routeModules:u}=Ym(),{loaderData:d,matches:f}=kb(),p=N.useMemo(()=>Cp(i,e,f,o,s,"data"),[i,e,f,o,s]),g=N.useMemo(()=>Cp(i,e,f,o,s,"assets"),[i,e,f,o,s]),_=N.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let P=new Set,T=!1;if(e.forEach(x=>{var D;let z=o.routes[x.route.id];!z||!z.hasLoader||(!p.some(ee=>ee.route.id===x.route.id)&&x.route.id in d&&(D=u[x.route.id])!=null&&D.shouldRevalidate||z.hasClientLoader?T=!0:P.add(x.route.id))}),P.size===0)return[];let M=bb(i);return T&&P.size>0&&M.searchParams.set("_routes",e.filter(x=>P.has(x.route.id)).map(x=>x.route.id).join(",")),[M.pathname+M.search]},[d,s,o,p,e,i,u]),v=N.useMemo(()=>gb(g,o),[g,o]),k=Cb(g);return N.createElement(N.Fragment,null,_.map(P=>N.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...n})),v.map(P=>N.createElement("link",{key:P,rel:"modulepreload",href:P,...n})),k.map(({key:P,link:T})=>N.createElement("link",{key:P,...T})))}function Tb(...i){return e=>{i.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Gm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Gm&&(window.__reactRouterVersion="7.1.0")}catch{}function Nb({basename:i,children:e,window:n}){let s=N.useRef();s.current==null&&(s.current=p0({window:n,v5Compat:!0}));let o=s.current,[u,d]=N.useState({action:o.action,location:o.location}),f=N.useCallback(p=>{N.startTransition(()=>d(p))},[d]);return N.useLayoutEffect(()=>o.listen(f),[o,f]),N.createElement(rb,{basename:i,children:e,location:u.location,navigationType:u.action,navigator:o})}var Jm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ei=N.forwardRef(function({onClick:i,discover:e="render",prefetch:n="none",relative:s,reloadDocument:o,replace:u,state:d,target:f,to:p,preventScrollReset:g,viewTransition:_,...v},k){let{basename:P}=N.useContext(Wt),T=typeof p=="string"&&Jm.test(p),M,x=!1;if(typeof p=="string"&&T&&(M=p,Gm))try{let me=new URL(window.location.href),Le=p.startsWith("//")?new URL(me.protocol+p):new URL(p),Ge=Jn(Le.pathname,P);Le.origin===me.origin&&Ge!=null?p=Ge+Le.search+Le.hash:x=!0}catch{Ut(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=j0(p,{relative:s}),[z,ee,X]=Eb(n,v),pe=Ob(p,{replace:u,state:d,target:f,preventScrollReset:g,relative:s,viewTransition:_});function ve(me){i&&i(me),me.defaultPrevented||pe(me)}let we=N.createElement("a",{...v,...X,href:M||D,onClick:x||o?i:ve,ref:Tb(k,ee),target:f,"data-discover":!T&&e==="render"?"true":void 0});return z&&!T?N.createElement(N.Fragment,null,we,N.createElement(Sb,{page:D})):we});ei.displayName="Link";var Pb=N.forwardRef(function({"aria-current":i="page",caseSensitive:e=!1,className:n="",end:s=!1,style:o,to:u,viewTransition:d,children:f,...p},g){let _=Rs(u,{relative:p.relative}),v=Zn(),k=N.useContext(Po),{navigator:P,basename:T}=N.useContext(Wt),M=k!=null&&Fb(_)&&d===!0,x=P.encodeLocation?P.encodeLocation(_).pathname:_.pathname,D=v.pathname,z=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;e||(D=D.toLowerCase(),z=z?z.toLowerCase():null,x=x.toLowerCase()),z&&T&&(z=Jn(z,T)||z);const ee=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let X=D===x||!s&&D.startsWith(x)&&D.charAt(ee)==="/",pe=z!=null&&(z===x||!s&&z.startsWith(x)&&z.charAt(x.length)==="/"),ve={isActive:X,isPending:pe,isTransitioning:M},we=X?i:void 0,me;typeof n=="function"?me=n(ve):me=[n,X?"active":null,pe?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let Le=typeof o=="function"?o(ve):o;return N.createElement(ei,{...p,"aria-current":we,className:me,ref:g,style:Le,to:u,viewTransition:d},typeof f=="function"?f(ve):f)});Pb.displayName="NavLink";var xb=N.forwardRef(({discover:i="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:u,method:d=no,action:f,onSubmit:p,relative:g,preventScrollReset:_,viewTransition:v,...k},P)=>{let T=Db(),M=Mb(f,{relative:g}),x=d.toLowerCase()==="get"?"get":"post",D=typeof f=="string"&&Jm.test(f),z=ee=>{if(p&&p(ee),ee.defaultPrevented)return;ee.preventDefault();let X=ee.nativeEvent.submitter,pe=(X==null?void 0:X.getAttribute("formmethod"))||d;T(X||ee.currentTarget,{fetcherKey:e,method:pe,navigate:n,replace:o,state:u,relative:g,preventScrollReset:_,viewTransition:v})};return N.createElement("form",{ref:P,method:x,action:M,onSubmit:s?p:z,...k,"data-discover":!D&&i==="render"?"true":void 0})});xb.displayName="Form";function Rb(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qm(i){let e=N.useContext(hi);return Pe(e,Rb(i)),e}function Ob(i,{target:e,replace:n,state:s,preventScrollReset:o,relative:u,viewTransition:d}={}){let f=xo(),p=Zn(),g=Rs(i,{relative:u});return N.useCallback(_=>{if(ub(_,e)){_.preventDefault();let v=n!==void 0?n:Es(p)===Es(g);f(i,{replace:v,state:s,preventScrollReset:o,relative:u,viewTransition:d})}},[p,f,g,n,s,e,i,o,u,d])}var Ab=0,Lb=()=>`__${String(++Ab)}__`;function Db(){let{router:i}=Qm("useSubmit"),{basename:e}=N.useContext(Wt),n=Z0();return N.useCallback(async(s,o={})=>{let{action:u,method:d,encType:f,formData:p,body:g}=hb(s,e);if(o.navigate===!1){let _=o.fetcherKey||Lb();await i.fetch(_,n,o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||d,formEncType:o.encType||f,flushSync:o.flushSync})}else await i.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||d,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[i,e,n])}function Mb(i,{relative:e}={}){let{basename:n}=N.useContext(Wt),s=N.useContext(Ht);Pe(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Rs(i||".",{relative:e})},d=Zn();if(i==null){u.search=d.search;let f=new URLSearchParams(u.search),p=f.getAll("index");if(p.some(g=>g==="")){f.delete("index"),p.filter(_=>_).forEach(_=>f.append("index",_));let g=f.toString();u.search=g?`?${g}`:""}}return(!i||i===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:pn([n,u.pathname])),Es(u)}function Fb(i,e={}){let n=N.useContext(Bm);Pe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Qm("useViewTransitionState"),o=Rs(i,{relative:e.relative});if(!n.isTransitioning)return!1;let u=Jn(n.currentLocation.pathname,s)||n.currentLocation.pathname,d=Jn(n.nextLocation.pathname,s)||n.nextLocation.pathname;return uo(o.pathname,d)!=null||uo(o.pathname,u)!=null}new TextEncoder;const Ip=({isLoggedIn:i,children:e})=>i?e:a0.createElement(nb,{to:"/login"});function zb(){return B.jsx("footer",{className:"footer bg-light text-center py-3",children:B.jsx("div",{className:"container",children:B.jsxs("p",{className:"mb-0",children:["© ",new Date().getFullYear()," จัดทำโดย PraiwanX. All Rights Reserved."]})})})}var Tp={};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Zm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const U=function(i,e){if(!i)throw pi(e)},pi=function(i){return new Error("Firebase Database ("+Zm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Xm=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Ub=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const o=i[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[n++],d=i[n++],f=i[n++],p=((o&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=i[n++],d=i[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Nc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],d=o+1<i.length,f=d?i[o+1]:0,p=o+2<i.length,g=p?i[o+2]:0,_=u>>2,v=(u&3)<<4|f>>4;let k=(f&15)<<2|g>>6,P=g&63;p||(P=64,d||(k=64)),s.push(n[_],n[v],n[k],n[P])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Xm(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Ub(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=n[i.charAt(o++)],d=o<i.length?n[i.charAt(o)]:0;++o;const f=o<i.length?n[i.charAt(o)]:64;++o;const p=o<i.length?n[i.charAt(o)]:64;if(++o,u==null||d==null||f==null||p==null)throw new jb;const g=u<<2|d>>4;if(s.push(g),f!==64){const _=d<<4&240|f>>2;if(s.push(_),p!==64){const v=f<<6&192|p;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class jb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eg=function(i){const e=Xm(i);return Nc.encodeByteArray(e,!0)},co=function(i){return eg(i).replace(/\./g,"")},ho=function(i){try{return Nc.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Wb(i){return tg(void 0,i)}function tg(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Hb(n)||(i[n]=tg(i[n],e[n]));return i}function Hb(i){return i!=="__proto__"}/**
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
*/function Bb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
*/const $b=()=>Bb().__FIREBASE_DEFAULTS__,Vb=()=>{if(typeof process>"u"||typeof Tp>"u")return;const i=Tp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},qb=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&ho(i[1]);return e&&JSON.parse(e)},Pc=()=>{try{return $b()||Vb()||qb()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},ng=i=>{var e,n;return(n=(e=Pc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},Kb=i=>{const e=ng(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},rg=()=>{var i;return(i=Pc())===null||i===void 0?void 0:i.config},ig=i=>{var e;return(e=Pc())===null||e===void 0?void 0:e[`_${i}`]};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class xc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
*/function Yb(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[co(JSON.stringify(n)),co(JSON.stringify(d)),""].join(".")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function Gb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jb(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function sg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qb(){const i=st();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function ag(){return Zm.NODE_ADMIN===!0}function Zb(){try{return typeof indexedDB=="object"}catch{return!1}}function Xb(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ew="FirebaseError";class Xn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ew,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os.prototype.create)}}class Os{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],d=u?tw(u,s):"Error",f=`${this.serviceName}: ${d} (${o}).`;return new Xn(o,f,s)}}function tw(i,e){return i.replace(nw,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const nw=/\{\$([^}]+)}/g;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ss(i){return JSON.parse(i)}function Ye(i){return JSON.stringify(i)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const og=function(i){let e={},n={},s={},o="";try{const u=i.split(".");e=Ss(ho(u[0])||""),n=Ss(ho(u[1])||""),o=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:o}},rw=function(i){const e=og(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},iw=function(i){const e=og(i).claims;return typeof e=="object"&&e.admin===!0};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _n(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function ai(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function Xu(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function fo(i,e,n){const s={};for(const o in i)Object.prototype.hasOwnProperty.call(i,o)&&(s[o]=e.call(n,i[o],o,i));return s}function po(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=i[o],d=e[o];if(Np(u)&&Np(d)){if(!po(u,d))return!1}else if(u!==d)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function Np(i){return i!==null&&typeof i=="object"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function mi(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function gs(i){const e={};return i.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,o]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function ys(i){const e=i.indexOf("?");if(!e)return"";const n=i.indexOf("#",e);return i.substring(e,n>0?n:void 0)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class sw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let v=0;v<16;v++)s[v]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let v=16;v<80;v++){const k=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(k<<1|k>>>31)&4294967295}let o=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,_;for(let v=0;v<80;v++){v<40?v<20?(g=f^u&(d^f),_=1518500249):(g=u^d^f,_=1859775393):v<60?(g=u&d|f&(u|d),_=2400959708):(g=u^d^f,_=3395469782);const k=(o<<5|o>>>27)+g+p+_+s[v]&4294967295;p=f,f=d,d=(u<<30|u>>>2)&4294967295,u=o,o=k}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let o=0;const u=this.buf_;let d=this.inbuf_;for(;o<n;){if(d===0)for(;o<=s;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<n;)if(u[d]=e.charCodeAt(o),++d,++o,d===this.blockSize){this.compress_(u),d=0;break}}else for(;o<n;)if(u[d]=e[o],++d,++o,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let o=0;o<5;o++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[o]>>u&255,++s;return e}}function aw(i,e){const n=new ow(i,e);return n.subscribe.bind(n)}class ow{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");lw(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=Fu),o.error===void 0&&(o.error=Fu),o.complete===void 0&&(o.complete=Fu);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lw(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Fu(){}function uw(i,e){return`${i} failed: ${e} argument `}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const cw=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);if(o>=55296&&o<=56319){const u=o-55296;s++,U(s<i.length,"Surrogate pair missing trail surrogate.");const d=i.charCodeAt(s)-56320;o=65536+(u<<10)+d}o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):o<65536?(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Oo=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
*/function bn(i){return i&&i._delegate?i._delegate:i}class vr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
*/class dw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new xc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fw(e))try{this.getOrInitializeService({instanceIdentifier:mr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mr){return this.instances.has(e)}getOptions(e=mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(o)}return o}onInit(e,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const d=this.instances.get(o);return d&&e(d,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=mr){return this.component?this.component.multipleInstances?e:mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hw(i){return i===mr?void 0:i}function fw(i){return i.instantiationMode==="EAGER"}/**
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
*/class pw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ge;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ge||(ge={}));const mw={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},gw=ge.INFO,yw={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},vw=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=yw[e];if(o)console[o](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oc{constructor(e){this.name=e,this._logLevel=gw,this._logHandler=vw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const _w=(i,e)=>e.some(n=>i instanceof n);let Pp,xp;function bw(){return Pp||(Pp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ww(){return xp||(xp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lg=new WeakMap,ec=new WeakMap,ug=new WeakMap,zu=new WeakMap,Ac=new WeakMap;function kw(i){const e=new Promise((n,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",d)},u=()=>{n(Vn(i.result)),o()},d=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&lg.set(n,i)}).catch(()=>{}),Ac.set(e,i),e}function Ew(i){if(ec.has(i))return;const e=new Promise((n,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",d),i.removeEventListener("abort",d)},u=()=>{n(),o()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",d),i.addEventListener("abort",d)});ec.set(i,e)}let tc={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return ec.get(i);if(e==="objectStoreNames")return i.objectStoreNames||ug.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vn(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Sw(i){tc=i(tc)}function Cw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Uu(this),e,...n);return ug.set(s,e.sort?e.sort():[e]),Vn(s)}:ww().includes(i)?function(...e){return i.apply(Uu(this),e),Vn(lg.get(this))}:function(...e){return Vn(i.apply(Uu(this),e))}}function Iw(i){return typeof i=="function"?Cw(i):(i instanceof IDBTransaction&&Ew(i),_w(i,bw())?new Proxy(i,tc):i)}function Vn(i){if(i instanceof IDBRequest)return kw(i);if(zu.has(i))return zu.get(i);const e=Iw(i);return e!==i&&(zu.set(i,e),Ac.set(e,i)),e}const Uu=i=>Ac.get(i);function Tw(i,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const d=indexedDB.open(i,e),f=Vn(d);return s&&d.addEventListener("upgradeneeded",p=>{s(Vn(d.result),p.oldVersion,p.newVersion,Vn(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const Nw=["get","getKey","getAll","getAllKeys","count"],Pw=["put","add","delete","clear"],ju=new Map;function Rp(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(ju.get(e))return ju.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=Pw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Nw.includes(n)))return;const u=async function(d,...f){const p=this.transaction(d,o?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),o&&p.done]))[0]};return ju.set(e,u),u}Sw(i=>({...i,get:(e,n,s)=>Rp(e,n)||i.get(e,n,s),has:(e,n)=>!!Rp(e,n)||i.has(e,n)}));/**
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
*/class xw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Rw(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function Rw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nc="@firebase/app",Op="0.10.18";/**
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
*/const gn=new Oc("@firebase/app"),Ow="@firebase/app-compat",Aw="@firebase/analytics-compat",Lw="@firebase/analytics",Dw="@firebase/app-check-compat",Mw="@firebase/app-check",Fw="@firebase/auth",zw="@firebase/auth-compat",Uw="@firebase/database",jw="@firebase/data-connect",Ww="@firebase/database-compat",Hw="@firebase/functions",Bw="@firebase/functions-compat",$w="@firebase/installations",Vw="@firebase/installations-compat",qw="@firebase/messaging",Kw="@firebase/messaging-compat",Yw="@firebase/performance",Gw="@firebase/performance-compat",Jw="@firebase/remote-config",Qw="@firebase/remote-config-compat",Zw="@firebase/storage",Xw="@firebase/storage-compat",e1="@firebase/firestore",t1="@firebase/vertexai",n1="@firebase/firestore-compat",r1="firebase",i1="11.2.0";/**
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
*/const rc="[DEFAULT]",s1={[nc]:"fire-core",[Ow]:"fire-core-compat",[Lw]:"fire-analytics",[Aw]:"fire-analytics-compat",[Mw]:"fire-app-check",[Dw]:"fire-app-check-compat",[Fw]:"fire-auth",[zw]:"fire-auth-compat",[Uw]:"fire-rtdb",[jw]:"fire-data-connect",[Ww]:"fire-rtdb-compat",[Hw]:"fire-fn",[Bw]:"fire-fn-compat",[$w]:"fire-iid",[Vw]:"fire-iid-compat",[qw]:"fire-fcm",[Kw]:"fire-fcm-compat",[Yw]:"fire-perf",[Gw]:"fire-perf-compat",[Jw]:"fire-rc",[Qw]:"fire-rc-compat",[Zw]:"fire-gcs",[Xw]:"fire-gcs-compat",[e1]:"fire-fst",[n1]:"fire-fst-compat",[t1]:"fire-vertex","fire-js":"fire-js",[r1]:"fire-js-all"};/**
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
*/const mo=new Map,a1=new Map,ic=new Map;function Ap(i,e){try{i.container.addComponent(e)}catch(n){gn.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function oi(i){const e=i.name;if(ic.has(e))return gn.debug(`There were multiple attempts to register component ${e}.`),!1;ic.set(e,i);for(const n of mo.values())Ap(n,i);for(const n of a1.values())Ap(n,i);return!0}function Lc(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function un(i){return i.settings!==void 0}/**
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
*/const o1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new Os("app","Firebase",o1);/**
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
*/class l1{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
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
*/const gi=i1;function cg(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:rc,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw qn.create("bad-app-name",{appName:String(o)});if(n||(n=rg()),!n)throw qn.create("no-options");const u=mo.get(o);if(u){if(po(n,u.options)&&po(s,u.config))return u;throw qn.create("duplicate-app",{appName:o})}const d=new pw(o);for(const p of ic.values())d.addComponent(p);const f=new l1(n,s,d);return mo.set(o,f),f}function dg(i=rc){const e=mo.get(i);if(!e&&i===rc&&rg())return cg();if(!e)throw qn.create("no-app",{appName:i});return e}function Kn(i,e,n){var s;let o=(s=s1[i])!==null&&s!==void 0?s:i;n&&(o+=`-${n}`);const u=o.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const f=[`Unable to register library "${o}" with version "${e}":`];u&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gn.warn(f.join(" "));return}oi(new vr(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
*/const u1="firebase-heartbeat-database",c1=1,Cs="firebase-heartbeat-store";let Wu=null;function hg(){return Wu||(Wu=Tw(u1,c1,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Cs)}catch(n){console.warn(n)}}}}).catch(i=>{throw qn.create("idb-open",{originalErrorMessage:i.message})})),Wu}async function d1(i){try{const e=(await hg()).transaction(Cs),n=await e.objectStore(Cs).get(fg(i));return await e.done,n}catch(e){if(e instanceof Xn)gn.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gn.warn(n.message)}}}async function Lp(i,e){try{const n=(await hg()).transaction(Cs,"readwrite");await n.objectStore(Cs).put(e,fg(i)),await n.done}catch(n){if(n instanceof Xn)gn.warn(n.message);else{const s=qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gn.warn(s.message)}}}function fg(i){return`${i.name}!${i.options.appId}`}/**
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
*/const h1=1024,f1=30*24*60*60*1e3;class p1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new g1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Dp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const d=new Date(u.date).valueOf();return Date.now()-d<=f1}),this._storage.overwrite(this._heartbeatsCache))}catch(s){gn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dp(),{heartbeatsToSend:s,unsentEntries:o}=m1(this._heartbeatsCache.heartbeats),u=co(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return gn.warn(n),""}}}function Dp(){return new Date().toISOString().substring(0,10)}function m1(i,e=h1){const n=[];let s=i.slice();for(const o of i){const u=n.find(d=>d.agent===o.agent);if(u){if(u.dates.push(o.date),Mp(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Mp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class g1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zb()?Xb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await d1(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Mp(i){return co(JSON.stringify({version:2,heartbeats:i})).length}/**
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
*/function y1(i){oi(new vr("platform-logger",e=>new xw(e),"PRIVATE")),oi(new vr("heartbeat",e=>new p1(e),"PRIVATE")),Kn(nc,Op,i),Kn(nc,Op,"esm2017"),Kn("fire-js","")}y1("");function Dc(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(n[s[o]]=i[s[o]]);return n}function pg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const v1=pg,mg=new Os("auth","Firebase",pg());/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const go=new Oc("@firebase/auth");function _1(i,...e){go.logLevel<=ge.WARN&&go.warn(`Auth (${gi}): ${i}`,...e)}function io(i,...e){go.logLevel<=ge.ERROR&&go.error(`Auth (${gi}): ${i}`,...e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function jt(i,...e){throw Mc(i,...e)}function Zt(i,...e){return Mc(i,...e)}function gg(i,e,n){const s=Object.assign(Object.assign({},v1()),{[e]:n});return new Os("auth","Firebase",s).create(e,{appName:i.name})}function Yn(i){return gg(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mc(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return mg.create(i,...e)}function Q(i,e,...n){if(!i)throw Mc(e,...n)}function cn(i){const e="INTERNAL ASSERTION FAILED: "+i;throw io(e),new Error(e)}function yn(i,e){i||cn(e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function sc(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function b1(){return Fp()==="http:"||Fp()==="https:"}function Fp(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function w1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(b1()||Jb()||"connection"in navigator)?navigator.onLine:!0}function k1(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class As{constructor(e,n){this.shortDelay=e,this.longDelay=n,yn(n>e,"Short delay should be less than long delay!"),this.isMobile=Rc()||sg()}get(){return w1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Fc(i,e){yn(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class yg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const E1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const S1=new As(3e4,6e4);function Er(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function er(i,e,n,s,o={}){return vg(i,o,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=mi(Object.assign({key:i.config.apiKey},d)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},u);return Gb()||(g.referrerPolicy="no-referrer"),yg.fetch()(_g(i,i.config.apiHost,n,f),g)})}async function vg(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},E1),e);try{const o=new I1(i),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw Xa(i,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xa(i,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw Xa(i,"email-already-in-use",d);if(p==="USER_DISABLED")throw Xa(i,"user-disabled",d);const _=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw gg(i,_,g);jt(i,_)}}catch(o){if(o instanceof Xn)throw o;jt(i,"network-request-failed",{message:String(o)})}}async function Ao(i,e,n,s,o={}){const u=await er(i,e,n,s,o);return"mfaPendingCredential"in u&&jt(i,"multi-factor-auth-required",{_serverResponse:u}),u}function _g(i,e,n,s){const o=`${e}${n}?${s}`;return i.config.emulator?Fc(i.config,o):`${i.config.apiScheme}://${o}`}function C1(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class I1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Zt(this.auth,"network-request-failed")),S1.get())})}}function Xa(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Zt(i,e,s);return o.customData._tokenResponse=n,o}function zp(i){return i!==void 0&&i.enterprise!==void 0}class T1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return C1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function N1(i,e){return er(i,"GET","/v2/recaptchaConfig",Er(i,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function P1(i,e){return er(i,"POST","/v1/accounts:delete",e)}async function bg(i,e){return er(i,"POST","/v1/accounts:lookup",e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function vs(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function x1(i,e=!1){const n=bn(i),s=await n.getIdToken(e),o=zc(s);Q(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:vs(Hu(o.auth_time)),issuedAtTime:vs(Hu(o.iat)),expirationTime:vs(Hu(o.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Hu(i){return Number(i)*1e3}function zc(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return io("JWT malformed, contained fewer than 3 sections"),null;try{const o=ho(n);return o?JSON.parse(o):(io("Failed to decode base64 JWT payload"),null)}catch(o){return io("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Up(i){const e=zc(i);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Is(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Xn&&R1(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function R1({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class O1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ac{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vs(this.lastLoginAt),this.creationTime=vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
*/async function yo(i){var e;const n=i.auth,s=await i.getIdToken(),o=await Is(i,bg(n,{idToken:s}));Q(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?wg(u.providerUserInfo):[],f=L1(i.providerData,d),p=i.isAnonymous,g=!(i.email&&u.passwordHash)&&!(f!=null&&f.length),_=p?g:!1,v={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new ac(u.createdAt,u.lastLoginAt),isAnonymous:_};Object.assign(i,v)}async function A1(i){const e=bn(i);await yo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function L1(i,e){return[...i.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function wg(i){return i.map(e=>{var{providerId:n}=e,s=Dc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function D1(i,e){const n=await vg(i,{},async()=>{const s=mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,d=_g(i,o,"/v1/token",`key=${u}`),f=await i._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",yg.fetch()(d,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function M1(i,e){return er(i,"POST","/v2/accounts:revokeToken",Er(i,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Up(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Up(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await D1(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,d=new ti;return s&&(Q(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),o&&(Q(typeof o=="string","internal-error",{appName:e}),d.accessToken=o),u&&(Q(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ti,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function jn(i,e){Q(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class dn{constructor(e){var{uid:n,auth:s,stsTokenManager:o}=e,u=Dc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new O1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new ac(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await Is(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return x1(this,e)}reload(){return A1(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await yo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(Yn(this.auth));const e=await this.getIdToken();return await Is(this,P1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,o,u,d,f,p,g,_;const v=(s=n.displayName)!==null&&s!==void 0?s:void 0,k=(o=n.email)!==null&&o!==void 0?o:void 0,P=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,T=(d=n.photoURL)!==null&&d!==void 0?d:void 0,M=(f=n.tenantId)!==null&&f!==void 0?f:void 0,x=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,D=(g=n.createdAt)!==null&&g!==void 0?g:void 0,z=(_=n.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:ee,emailVerified:X,isAnonymous:pe,providerData:ve,stsTokenManager:we}=n;Q(ee&&we,e,"internal-error");const me=ti.fromJSON(this.name,we);Q(typeof ee=="string",e,"internal-error"),jn(v,e.name),jn(k,e.name),Q(typeof X=="boolean",e,"internal-error"),Q(typeof pe=="boolean",e,"internal-error"),jn(P,e.name),jn(T,e.name),jn(M,e.name),jn(x,e.name),jn(D,e.name),jn(z,e.name);const Le=new dn({uid:ee,auth:e,email:k,emailVerified:X,displayName:v,isAnonymous:pe,photoURL:T,phoneNumber:P,tenantId:M,stsTokenManager:me,createdAt:D,lastLoginAt:z});return ve&&Array.isArray(ve)&&(Le.providerData=ve.map(Ge=>Object.assign({},Ge))),x&&(Le._redirectEventId=x),Le}static async _fromIdTokenResponse(e,n,s=!1){const o=new ti;o.updateFromServerResponse(n);const u=new dn({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await yo(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];Q(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?wg(o.providerUserInfo):[],d=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),f=new ti;f.updateFromIdToken(s);const p=new dn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new ac(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,g),p}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const jp=new Map;function hn(i){yn(i instanceof Function,"Expected a class definition");let e=jp.get(i);return e?(yn(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,jp.set(i,e),e)}/**
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
*/class kg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kg.type="NONE";const Wp=kg;/**
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
*/function so(i,e,n){return`firebase:${i}:${e}:${n}`}class ni{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=so(this.userKey,o.apiKey,u),this.fullPersistenceKey=so("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ni(hn(Wp),e,s);const o=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||hn(Wp);const d=so(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const _=await g._get(d);if(_){const v=dn._fromJSON(e,_);g!==u&&(f=v),u=g;break}}catch{}const p=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new ni(u,e,s):(u=p[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new ni(u,e,s))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Hp(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ig(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Eg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ng(e))return"Blackberry";if(Pg(e))return"Webos";if(Sg(e))return"Safari";if((e.includes("chrome/")||Cg(e))&&!e.includes("edge/"))return"Chrome";if(Tg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Eg(i=st()){return/firefox\//i.test(i)}function Sg(i=st()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cg(i=st()){return/crios\//i.test(i)}function Ig(i=st()){return/iemobile/i.test(i)}function Tg(i=st()){return/android/i.test(i)}function Ng(i=st()){return/blackberry/i.test(i)}function Pg(i=st()){return/webos/i.test(i)}function Uc(i=st()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function F1(i=st()){var e;return Uc(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function z1(){return Qb()&&document.documentMode===10}function xg(i=st()){return Uc(i)||Tg(i)||Pg(i)||Ng(i)||/windows phone/i.test(i)||Ig(i)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Rg(i,e=[]){let n;switch(i){case"Browser":n=Hp(st());break;case"Worker":n=`${Hp(st())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gi}/${s}`}/**
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
*/class U1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const p=e(u);d(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
*/async function j1(i,e={}){return er(i,"GET","/v2/passwordPolicy",Er(i,e))}/**
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
*/const W1=6;class H1{constructor(e){var n,s,o,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:W1,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,o,u,d,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class B1{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bp(this),this.idTokenSubscription=new Bp(this),this.beforeStateQueue=new U1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await ni.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bg(this,{idToken:e}),s=await dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(un(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===f)&&p!=null&&p.user&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(d){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(Yn(this));const n=e?bn(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(Yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(Yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await j1(this),n=new H1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Os("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await M1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await ni.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,o);return()=>{d=!0,p()}}else{const p=e.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yi(i){return bn(i)}class Bp{constructor(e){this.auth=e,this.observer=null,this.addObserver=aw(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Lo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $1(i){Lo=i}function Og(i){return Lo.loadJS(i)}function V1(){return Lo.recaptchaEnterpriseScript}function q1(){return Lo.gapiScript}function K1(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class Y1{constructor(){this.enterprise=new G1}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class G1{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const J1="recaptcha-enterprise",Ag="NO_RECAPTCHA";class Q1{constructor(e){this.type=J1,this.auth=yi(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(d,f)=>{N1(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new T1(p);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,d(g.siteKey)}}).catch(p=>{f(p)})})}function o(u,d,f){const p=window.grecaptcha;zp(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(g=>{d(g)}).catch(()=>{d(Ag)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Y1().execute("siteKey",{action:"verify"}):new Promise((u,d)=>{s(this.auth).then(f=>{if(!n&&zp(window.grecaptcha))o(f,u,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let p=V1();p.length!==0&&(p+=f),Og(p).then(()=>{o(f,u,d)}).catch(g=>{d(g)})}}).catch(f=>{d(f)})})}}async function $p(i,e,n,s=!1,o=!1){const u=new Q1(i);let d;if(o)d=Ag;else try{d=await u.verify(n)}catch{d=await u.verify(n,!0)}const f=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:d}):Object.assign(f,{captchaResponse:d}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Vp(i,e,n,s,o){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await $p(i,e,n,n==="getOobCode");return s(i,d)}else return s(i,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await $p(i,e,n,n==="getOobCode");return s(i,f)}else return Promise.reject(d)})}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Z1(i,e){const n=Lc(i,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(po(o,e))return s;jt(s,"already-initialized")}return n.initialize({options:e})}function X1(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function ek(i,e,n){const s=yi(i);Q(s._canInitEmulator,s,"emulator-config-failed"),Q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Lg(e),{host:d,port:f}=tk(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${u}//${d}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),nk()}function Lg(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function tk(i){const e=Lg(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:qp(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:qp(d)}}}function qp(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function nk(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class jc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,n){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}async function rk(i,e){return er(i,"POST","/v1/accounts:signUp",e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function ik(i,e){return Ao(i,"POST","/v1/accounts:signInWithPassword",Er(i,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function sk(i,e){return Ao(i,"POST","/v1/accounts:signInWithEmailLink",Er(i,e))}async function ak(i,e){return Ao(i,"POST","/v1/accounts:signInWithEmailLink",Er(i,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ts extends jc{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new Ts(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ts(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&n!=null&&n.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vp(e,n,"signInWithPassword",ik);case"emailLink":return sk(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vp(e,s,"signUpPassword",rk);case"emailLink":return ak(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function ri(i,e){return Ao(i,"POST","/v1/accounts:signInWithIdp",Er(i,e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ok="http://localhost";class _r extends jc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=n,u=Dc(n,["providerId","signInMethod"]);if(!s||!o)return null;const d=new _r(s,o);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return ri(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ri(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ri(e,n)}buildRequest(){const e={requestUri:ok,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mi(n)}return e}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function lk(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uk(i){const e=gs(ys(i)).link,n=e?gs(ys(e)).deep_link_id:null,s=gs(ys(i)).deep_link_id;return(s?gs(ys(s)).link:null)||s||n||e||i}class Wc{constructor(e){var n,s,o,u,d,f;const p=gs(ys(e)),g=(n=p.apiKey)!==null&&n!==void 0?n:null,_=(s=p.oobCode)!==null&&s!==void 0?s:null,v=lk((o=p.mode)!==null&&o!==void 0?o:null);Q(g&&_&&v,"argument-error"),this.apiKey=g,this.operation=v,this.code=_,this.continueUrl=(u=p.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(d=p.languageCode)!==null&&d!==void 0?d:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const n=uk(e);try{return new Wc(n)}catch{return null}}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class vi{constructor(){this.providerId=vi.PROVIDER_ID}static credential(e,n){return Ts._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Wc.parseLink(n);return Q(s,"argument-error"),Ts._fromEmailAndCode(e,s.code,s.tenantId)}}vi.PROVIDER_ID="password";vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Dg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
*/class Ls extends Dg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Wn extends Ls{constructor(){super("facebook.com")}static credential(e){return _r._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Hn extends Ls{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _r._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Hn.credential(n,s)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Bn extends Ls{constructor(){super("github.com")}static credential(e){return _r._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class $n extends Ls{constructor(){super("twitter.com")}static credential(e,n){return _r._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return $n.credential(n,s)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await dn._fromIdTokenResponse(e,s,o),d=Kp(s);return new li({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=Kp(s);return new li({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function Kp(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class vo extends Xn{constructor(e,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,vo.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new vo(e,n,s,o)}}function Mg(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?vo._fromErrorAndOperation(i,o,e,s):o})}async function ck(i,e,n=!1){const s=await Is(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return li._forOperation(i,"link",s)}/**
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
*/async function dk(i,e,n=!1){const{auth:s}=i;if(un(s.app))return Promise.reject(Yn(s));const o="reauthenticate";try{const u=await Is(i,Mg(s,o,e,i),n);Q(u.idToken,s,"internal-error");const d=zc(u.idToken);Q(d,s,"internal-error");const{sub:f}=d;return Q(i.uid===f,s,"user-mismatch"),li._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&jt(s,"user-mismatch"),u}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Fg(i,e,n=!1){if(un(i.app))return Promise.reject(Yn(i));const s="signIn",o=await Mg(i,s,e),u=await li._fromIdTokenResponse(i,s,o);return n||await i._updateCurrentUser(u.user),u}async function hk(i,e){return Fg(yi(i),e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function fk(i){const e=yi(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function pk(i,e,n){return un(i.app)?Promise.reject(Yn(i)):hk(bn(i),vi.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&fk(i),s})}function mk(i,e,n,s){return bn(i).onIdTokenChanged(e,n,s)}function gk(i,e,n){return bn(i).beforeAuthStateChanged(e,n)}const _o="__sak";/**
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
*/class zg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_o,"1"),this.storage.removeItem(_o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const yk=1e3,vk=10;class Ug extends zg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);z1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,vk):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},yk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ug.type="LOCAL";const _k=Ug;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class jg extends zg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}jg.type="SESSION";const Wg=jg;/**
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
*/function bk(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
*/class Do{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new Do(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,d=this.handlersMap[o];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(d).map(async g=>g(n.origin,u)),p=await bk(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Do.receivers=[];/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Hc(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
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
*/class wk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,d;return new Promise((f,p)=>{const g=Hc("",20);o.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:o,onMessage(v){const k=v;if(k.data.eventId===g)switch(k.data.status){case"ack":clearTimeout(_),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(k.data.response);break;default:clearTimeout(_),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),o.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[o.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Xt(){return window}function kk(i){Xt().location.href=i}/**
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
*/function Hg(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function Ek(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sk(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Ck(){return Hg()?self:null}/**
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
*/const Bg="firebaseLocalStorageDb",Ik=1,bo="firebaseLocalStorage",$g="fbase_key";class Ds{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mo(i,e){return i.transaction([bo],e?"readwrite":"readonly").objectStore(bo)}function Tk(){const i=indexedDB.deleteDatabase(Bg);return new Ds(i).toPromise()}function oc(){const i=indexedDB.open(Bg,Ik);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(bo,{keyPath:$g})}catch(o){n(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(bo)?e(s):(s.close(),await Tk(),e(await oc()))})})}async function Yp(i,e,n){const s=Mo(i,!0).put({[$g]:e,value:n});return new Ds(s).toPromise()}async function Nk(i,e){const n=Mo(i,!1).get(e),s=await new Ds(n).toPromise();return s===void 0?null:s.value}function Gp(i,e){const n=Mo(i,!0).delete(e);return new Ds(n).toPromise()}const Pk=800,xk=3;class Vg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>xk)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Do._getInstance(Ck()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ek(),!this.activeServiceWorker)return;this.sender=new wk(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oc();return await Yp(e,_o,"1"),await Gp(e,_o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Yp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Nk(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Mo(o,!1).getAll();return new Ds(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vg.type="LOCAL";const Rk=Vg;new As(3e4,6e4);/**
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
*/function Ok(i,e){return e?hn(e):(Q(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
*/class Bc extends jc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ak(i){return Fg(i.auth,new Bc(i),i.bypassAuthState)}function Lk(i){const{auth:e,user:n}=i;return Q(n,e,"internal-error"),dk(n,new Bc(i),i.bypassAuthState)}async function Dk(i){const{auth:e,user:n}=i;return Q(n,e,"internal-error"),ck(n,new Bc(i),i.bypassAuthState)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class qg{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ak;case"linkViaPopup":case"linkViaRedirect":return Dk;case"reauthViaPopup":case"reauthViaRedirect":return Lk;default:jt(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Mk=new As(2e3,1e4);class Qr extends qg{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Qr.currentPopupAction&&Qr.currentPopupAction.cancel(),Qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=Hc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mk.get())};e()}}Qr.currentPopupAction=null;/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Fk="pendingRedirect",ao=new Map;class zk extends qg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ao.get(this.auth._key());if(!e){try{const n=await Uk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(n){e=()=>Promise.reject(n)}ao.set(this.auth._key(),e)}return this.bypassAuthState||ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Uk(i,e){const n=Hk(e),s=Wk(i);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function jk(i,e){ao.set(i._key(),e)}function Wk(i){return hn(i._redirectPersistence)}function Hk(i){return so(Fk,i.config.apiKey,i.name)}async function Bk(i,e,n=!1){if(un(i.app))return Promise.reject(Yn(i));const s=yi(i),o=Ok(s,e),u=await new zk(s,o,n).execute();return u&&!n&&(delete u.user._redirectEventId,await s._persistUserIfCurrent(u.user),await s._setRedirectUser(null,e)),u}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const $k=10*60*1e3;class Vk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Kg(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$k&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jp(e))}saveEventToCache(e){this.cachedEventUids.add(Jp(e)),this.lastProcessedEventTime=Date.now()}}function Jp(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Kg({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qk(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kg(i);default:return!1}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function Kk(i,e={}){return er(i,"GET","/v1/projects",e)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Yk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gk=/^https?/;async function Jk(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Kk(i);for(const n of e)try{if(Qk(n))return}catch{}jt(i,"unauthorized-domain")}function Qk(i){const e=sc(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const u=new URL(i);return u.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===s}if(!Gk.test(n))return!1;if(Yk.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
*/const Zk=new As(3e4,6e4);function Qp(){const i=Xt().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function Xk(i){return new Promise((e,n)=>{var s,o,u;function d(){Qp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qp(),n(Zt(i,"network-request-failed"))},timeout:Zk.get()})}if(!((o=(s=Xt().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Xt().gapi)===null||u===void 0)&&u.load)d();else{const f=K1("iframefcb");return Xt()[f]=()=>{gapi.load?d():n(Zt(i,"network-request-failed"))},Og(`${q1()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw oo=null,e})}let oo=null;function eE(i){return oo=oo||Xk(i),oo}/**
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
*/const tE=new As(5e3,15e3),nE="__/auth/iframe",rE="emulator/auth/iframe",iE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aE(i){const e=i.config;Q(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Fc(e,rE):`https://${i.config.authDomain}/${nE}`,s={apiKey:e.apiKey,appName:i.name,v:gi},o=sE.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${mi(s).slice(1)}`}async function oE(i){const e=await eE(i),n=Xt().gapi;return Q(n,i,"internal-error"),e.open({where:document.body,url:aE(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iE,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const d=Zt(i,"network-request-failed"),f=Xt().setTimeout(()=>{u(d)},tE.get());function p(){Xt().clearTimeout(f),o(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
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
*/const lE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uE=500,cE=600,dE="_blank",hE="http://localhost";class Zp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fE(i,e,n,s=uE,o=cE){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},lE),{width:s.toString(),height:o.toString(),top:u,left:d}),g=st().toLowerCase();n&&(f=Cg(g)?dE:n),Eg(g)&&(e=e||hE,p.scrollbars="yes");const _=Object.entries(p).reduce((k,[P,T])=>`${k}${P}=${T},`,"");if(F1(g)&&f!=="_self")return pE(e||"",f),new Zp(null);const v=window.open(e||"",f,_);Q(v,i,"popup-blocked");try{v.focus()}catch{}return new Zp(v)}function pE(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
*/const mE="__/auth/handler",gE="emulator/auth/handler",yE=encodeURIComponent("fac");async function Xp(i,e,n,s,o,u){Q(i.config.authDomain,i,"auth-domain-config-required"),Q(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:gi,eventId:o};if(e instanceof Dg){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",Xu(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,v]of Object.entries({}))d[_]=v}if(e instanceof Ls){const _=e.getScopes().filter(v=>v!=="");_.length>0&&(d.scopes=_.join(","))}i.tenantId&&(d.tid=i.tenantId);const f=d;for(const _ of Object.keys(f))f[_]===void 0&&delete f[_];const p=await i._getAppCheckToken(),g=p?`#${yE}=${encodeURIComponent(p)}`:"";return`${vE(i)}?${mi(f).slice(1)}${g}`}function vE({config:i}){return i.emulator?Fc(i,gE):`https://${i.authDomain}/${mE}`}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Bu="webStorageSupport";class _E{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wg,this._completeRedirectFn=Bk,this._overrideRedirectResult=jk}async _openPopup(e,n,s,o){var u;yn((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await Xp(e,n,s,sc(),o);return fE(e,d,Hc())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await Xp(e,n,s,sc(),o);return kk(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(yn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await oE(e),s=new Vk(e);return n.register("authEvent",o=>(Q(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bu,{type:Bu},s=>{var o;const u=(o=s==null?void 0:s[0])===null||o===void 0?void 0:o[Bu];u!==void 0&&n(!!u),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Jk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xg()||Sg()||Uc()}}const bE=_E;var em="@firebase/auth",tm="1.8.2";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class wE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function kE(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function EE(i){oi(new vr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;Q(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rg(i)},g=new B1(s,o,u,p);return X1(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),oi(new vr("auth-internal",e=>{const n=yi(e.getProvider("auth").getImmediate());return(s=>new wE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(em,tm,kE(i)),Kn(em,tm,"esm2017")}/**
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
*/const SE=5*60,CE=ig("authIdTokenMaxAge")||SE;let nm=null;const IE=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>CE)return;const o=n==null?void 0:n.token;nm!==o&&(nm=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function TE(i=dg()){const e=Lc(i,"auth");if(e.isInitialized())return e.getImmediate();const n=Z1(i,{popupRedirectResolver:bE,persistence:[Rk,_k,Wg]}),s=ig("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=IE(u.toString());gk(n,d,()=>d(n.currentUser)),mk(n,f=>d(f))}}const o=ng("auth");return o&&ek(n,`http://${o}`),n}function NE(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}$1({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Zt("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",NE().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});EE("Browser");var PE="firebase",xE="11.2.0";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/Kn(PE,xE,"app");var rm={};const im="@firebase/database",sm="1.0.11";/**
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
*/let Yg="";function RE(i){Yg=i}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class OE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ss(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class AE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return _n(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Gg=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new OE(e)}}catch{}return new AE},yr=Gg("localStorage"),LE=Gg("sessionStorage");/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ii=new Oc("@firebase/database"),DE=function(){let i=1;return function(){return i++}}(),Jg=function(i){const e=cw(i),n=new sw;n.update(e);const s=n.digest();return Nc.encodeByteArray(s)},Ms=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ms.apply(null,s):typeof s=="object"?e+=Ye(s):e+=s,e+=" "}return e};let _s=null,am=!0;const ME=function(i,e){U(!e,"Can't turn on custom loggers persistently."),ii.logLevel=ge.VERBOSE,_s=ii.log.bind(ii)},et=function(...i){if(am===!0&&(am=!1,_s===null&&LE.get("logging_enabled")===!0&&ME()),_s){const e=Ms.apply(null,i);_s(e)}},Fs=function(i){return function(...e){et(i,...e)}},lc=function(...i){const e="FIREBASE INTERNAL ERROR: "+Ms(...i);ii.error(e)},vn=function(...i){const e=`FIREBASE FATAL ERROR: ${Ms(...i)}`;throw ii.error(e),new Error(e)},bt=function(...i){const e="FIREBASE WARNING: "+Ms(...i);ii.warn(e)},FE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Qg=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},zE=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ui="[MIN_NAME]",br="[MAX_NAME]",_i=function(i,e){if(i===e)return 0;if(i===ui||e===br)return-1;if(e===ui||i===br)return 1;{const n=om(i),s=om(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},UE=function(i,e){return i===e?0:i<e?-1:1},cs=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+Ye(e))},$c=function(i){if(typeof i!="object"||i===null)return Ye(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ye(e[s]),n+=":",n+=$c(i[e[s]]);return n+="}",n},Zg=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let o=0;o<n;o+=e)o+e>n?s.push(i.substring(o,n)):s.push(i.substring(o,o+e));return s};function Nt(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const Xg=function(i){U(!Qg(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let o,u,d,f,p;i===0?(u=0,d=0,o=1/i===-1/0?1:0):(o=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),u=f+s,d=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(i/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(o?1:0),g.reverse();const _=g.join("");let v="";for(p=0;p<64;p+=8){let k=parseInt(_.substr(p,8),2).toString(16);k.length===1&&(k="0"+k),v=v+k}return v.toLowerCase()},jE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},WE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},HE=new RegExp("^-?(0*)\\d{1,10}$"),BE=-2147483648,$E=2147483647,om=function(i){if(HE.test(i)){const e=Number(i);if(e>=BE&&e<=$E)return e}return null},zs=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw bt("Exception was thrown by user callback.",n),e},Math.floor(0))}},VE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},bs=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
*/class qE{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){bt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class KE{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',bt(e)}}class lo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}lo.OWNER="owner";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Vc="5",ey="v",ty="s",ny="r",ry="f",iy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,sy="ls",ay="p",uc="ac",oy="websocket",ly="long_polling";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class uy{constructor(e,n,s,o,u=!1,d="",f=!1,p=!1){this.secure=n,this.namespace=s,this.webSocketOnly=o,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=yr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&yr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function YE(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function cy(i,e,n){U(typeof e=="string","typeof type must == string"),U(typeof n=="object","typeof params must == object");let s;if(e===oy)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===ly)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);YE(i)&&(n.ns=i.namespace);const o=[];return Nt(n,(u,d)=>{o.push(u+"="+d)}),s+o.join("&")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class GE{constructor(){this.counters_={}}incrementCounter(e,n=1){_n(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Wb(this.counters_)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const $u={},Vu={};function qc(i){const e=i.toString();return $u[e]||($u[e]=new GE),$u[e]}function JE(i,e){const n=i.toString();return Vu[n]||(Vu[n]=e()),Vu[n]}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class QE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<s.length;++o)s[o]&&zs(()=>{this.onMessage_(s[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const lm="start",ZE="close",XE="pLPCommand",eS="pRTLPCB",dy="id",hy="pw",fy="ser",tS="cb",nS="seg",rS="ts",iS="d",sS="dframe",py=1870,my=30,aS=py-my,oS=25e3,lS=3e4;class Zr{constructor(e,n,s,o,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=o,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fs(e),this.stats_=qc(n),this.urlFn=p=>(this.appCheckToken&&(p[uc]=this.appCheckToken),cy(n,ly,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new QE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(lS)),zE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Kc((...u)=>{const[d,f,p,g,_]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===lm)this.id=f,this.password=p;else if(d===ZE)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[lm]="t",s[fy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[tS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ey]=Vc,this.transportSessionId&&(s[ty]=this.transportSessionId),this.lastSessionId&&(s[sy]=this.lastSessionId),this.applicationId&&(s[ay]=this.applicationId),this.appCheckToken&&(s[uc]=this.appCheckToken),typeof location<"u"&&location.hostname&&iy.test(location.hostname)&&(s[ny]=ry);const o=this.urlFn(s);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zr.forceAllow_=!0}static forceDisallow(){Zr.forceDisallow_=!0}static isAvailable(){return Zr.forceAllow_?!0:!Zr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!jE()&&!WE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=eg(n),o=Zg(s,aS);for(let u=0;u<o.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[sS]="t",s[dy]=e,s[hy]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Kc{constructor(e,n,s,o){this.onDisconnect=s,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=DE(),window[XE+this.uniqueCallbackIdentifier]=e,window[eS+this.uniqueCallbackIdentifier]=n,this.myIFrame=Kc.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){et("frame writing exception"),f.stack&&et(f.stack),et(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||et("No IE domain setting required")}catch{const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[dy]=this.myID,e[hy]=this.myPW,e[fy]=this.currentSerial;let n=this.urlFn(e),s="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+my+s.length<=py;){const u=this.pendingSegs.shift();s=s+"&"+nS+o+"="+u.seg+"&"+rS+o+"="+u.ts+"&"+iS+o+"="+u.d,o++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},o=setTimeout(s,Math.floor(oS)),u=()=>{clearTimeout(o),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const o=s.readyState;(!o||o==="loaded"||o==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{et("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const uS=16384,cS=45e3;let wo=null;typeof MozWebSocket<"u"?wo=MozWebSocket:typeof WebSocket<"u"&&(wo=WebSocket);class Jt{constructor(e,n,s,o,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=o,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fs(this.connId),this.stats_=qc(n),this.connURL=Jt.connectionURL_(n,d,f,o,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,o,u){const d={};return d[ey]=Vc,typeof location<"u"&&location.hostname&&iy.test(location.hostname)&&(d[ny]=ry),n&&(d[ty]=n),s&&(d[sy]=s),o&&(d[uc]=o),u&&(d[ay]=u),cy(e,oy,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,yr.set("previous_websocket_failure",!0);try{let s;ag(),this.mySock=new wo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){Jt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&wo!==null&&!Jt.forceDisallow_}static previouslyFailed(){return yr.isInMemoryStorage||yr.get("previous_websocket_failure")===!0}markConnectionHealthy(){yr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ss(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Zg(n,uS);s.length>1&&this.sendString_(String(s.length));for(let o=0;o<s.length;o++)this.sendString_(s[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(cS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Jt.responsesRequiredToBeHealthy=2;Jt.healthyTimeout=3e4;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ns{static get ALL_TRANSPORTS(){return[Zr,Jt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Jt.isAvailable();let s=n&&!Jt.previouslyFailed();if(e.webSocketOnly&&(n||bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Jt];else{const o=this.transports_=[];for(const u of Ns.ALL_TRANSPORTS)u&&u.isAvailable()&&o.push(u);Ns.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ns.globalTransportInitialized_=!1;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const dS=6e4,hS=5e3,fS=10*1024,pS=100*1024,qu="t",um="d",mS="s",cm="r",gS="e",dm="o",hm="a",fm="n",pm="p",yS="h";class vS{constructor(e,n,s,o,u,d,f,p,g,_){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=o,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=_,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fs("c:"+this.id+":"),this.transportManager_=new Ns(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=bs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qu in e){const n=e[qu];n===hm?this.upgradeIfSecondaryHealthy_():n===cm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===dm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=cs("t",e),s=cs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:pm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=cs("t",e),s=cs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=cs(qu,e);if(um in e){const s=e[um];if(n===yS){const o=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(n===fm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===mS?this.onConnectionShutdown_(s):n===cm?this.onReset_(s):n===gS?lc("Server Error: "+s):n===dm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):lc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Vc!==s&&bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),bs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(dS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):bs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(hS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:pm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(yr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class gy{put(e,n,s,o){}merge(e,n,s,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class yy{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let o=0;o<s.length;o++)s[o].callback.apply(s[o].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const o=this.getInitialEvent(e);o&&n.apply(s,o)}off(e,n,s){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let u=0;u<o.length;u++)if(o[u].callback===n&&(!s||s===o[u].context)){o.splice(u,1);return}}validateEventType_(e){U(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ko extends yy{static getInstance(){return new ko}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Rc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return U(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const mm=32,gm=768;class Ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[s]=this.pieces_[o],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ye(){return new Ie("")}function se(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function Qn(i){return i.pieces_.length-i.pieceNum_}function Ce(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new Ie(i.pieces_,e)}function vy(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function _S(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function _y(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function by(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new Ie(e,0)}function Ve(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof Ie)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let o=0;o<s.length;o++)s[o].length>0&&n.push(s[o])}return new Ie(n,0)}function ie(i){return i.pieceNum_>=i.pieces_.length}function Tt(i,e){const n=se(i),s=se(e);if(n===null)return e;if(n===s)return Tt(Ce(i),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function wy(i,e){if(Qn(i)!==Qn(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ft(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(Qn(i)>Qn(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class bS{constructor(e,n){this.errorPrefix_=n,this.parts_=_y(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Oo(this.parts_[s]);ky(this)}}function wS(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Oo(e),ky(i)}function kS(i){const e=i.parts_.pop();i.byteLength_-=Oo(e),i.parts_.length>0&&(i.byteLength_-=1)}function ky(i){if(i.byteLength_>gm)throw new Error(i.errorPrefix_+"has a key path longer than "+gm+" bytes ("+i.byteLength_+").");if(i.parts_.length>mm)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+mm+") or object contains a cycle "+gr(i))}function gr(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Yc extends yy{static getInstance(){return new Yc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return U(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ds=1e3,ES=60*5*1e3,ym=30*1e3,SS=1.3,CS=3e4,IS="server_kill",vm=3;class mn extends gy{constructor(e,n,s,o,u,d,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=o,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=mn.nextPersistentConnectionId_++,this.log_=Fs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ds,this.maxReconnectDelay_=ES,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!ag())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Yc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ko.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const o=++this.requestNumber_,u={r:o,a:e,b:n};this.log_(Ye(u)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[o]=s)}get(e){this.initConnection_();const n=new xc,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?n.resolve(d):n.reject(d)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),n.promise}listen(e,n,s,o){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:o,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+s+" for "+o);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const p=f.d,g=f.s;mn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(o))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,o),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&_n(e,"w")){const s=ai(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const o='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||iw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ym)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=rw(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,o=>{const u=o.s,d=o.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+o),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,o)&&this.connected_&&this.sendUnlisten_(s,o,e._queryObject,n)}sendUnlisten_(e,n,s,o){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";o&&(u.q=s,u.t=o),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,o){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{o&&setTimeout(()=>{o(d.s,d.d)},Math.floor(0))})}put(e,n,s,o){this.putInternal("p",e,n,s,o)}merge(e,n,s,o){this.putInternal("m",e,n,s,o)}putInternal(e,n,s,o,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:o}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const o=s.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ye(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):lc("Unrecognized action received from server: "+Ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ds,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ds,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>CS&&(this.reconnectDelay_=ds),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*SS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+mn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const p=function(){f?f.close():(d=!0,s())},g=function(v){U(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:p,sendRequest:g};const _=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,k]=await Promise.all([this.authTokenProvider_.getToken(_),this.appCheckTokenProvider_.getToken(_)]);d?et("getToken() completed but was canceled"):(et("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=k&&k.token,f=new vS(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,P=>{bt(P+" ("+this.repoInfo_.toString()+")"),this.interrupt(IS)},u))}catch(v){this.log_("Failed to get token: "+v),d||(this.repoInfo_.nodeAdmin&&bt(v),p())}}}interrupt(e){et("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){et("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Xu(this.interruptReasons_)&&(this.reconnectDelay_=ds,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>$c(u)).join("$"):s="default";const o=this.removeListen_(e,s);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,n){const s=new Ie(e).toString();let o;if(this.listens.has(s)){const u=this.listens.get(s);o=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else o=void 0;return o}onAuthRevoked_(e,n){et("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=vm&&(this.reconnectDelay_=ym,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){et("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=vm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Yg.replace(/\./g,"-")]=1,Rc()?e["framework.cordova"]=1:sg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ko.getInstance().currentlyOnline();return Xu(this.interruptReasons_)&&e}}mn.nextPersistentConnectionId_=0;mn.nextConnectionId_=0;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ae(e,n)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Fo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ae(ui,e),o=new ae(ui,n);return this.compare(s,o)!==0}minPost(){return ae.MIN}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let eo;class Ey extends Fo{static get __EMPTY_NODE(){return eo}static set __EMPTY_NODE(e){eo=e}compare(e,n){return _i(e.name,n.name)}isDefinedOn(e){throw pi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(br,eo)}makePost(e,n){return U(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,eo)}toString(){return".key"}}const si=new Ey;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class to{constructor(e,n,s,o,u=null){this.isReverse_=o,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,o&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??$e.RED,this.left=o??ft.EMPTY_NODE,this.right=u??ft.EMPTY_NODE}copy(e,n,s,o,u){return new $e(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return u<0?o=o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o=o.copy(null,n,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return ft.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,o;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ft.EMPTY_NODE;o=s.right.min_(),s=s.copy(o.key,o.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class TS{copy(e,n,s,o,u){return this}insert(e,n,s){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ft{constructor(e,n=ft.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ft(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new ft(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,o=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return o?o.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(o=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new to(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new to(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new to(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new to(this.root_,null,this.comparator_,!0,e)}}ft.EMPTY_NODE=new TS;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function NS(i,e){return _i(i.name,e.name)}function Gc(i,e){return _i(i,e)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let cc;function PS(i){cc=i}const Sy=function(i){return typeof i=="number"?"number:"+Xg(i):"string:"+i},Cy=function(i){if(i.isLeafNode()){const e=i.val();U(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_n(e,".sv"),"Priority must be a string or number.")}else U(i===cc||i.isEmpty(),"priority of unexpected type.");U(i===cc||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let _m;class Be{static set __childrenNodeConstructor(e){_m=e}static get __childrenNodeConstructor(){return _m}constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Cy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ie(e)?this:se(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=se(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(U(s!==".priority"||Qn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Sy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Xg(this.value_):e+=this.value_,this.lazyHash_=Jg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,o=Be.VALUE_TYPE_ORDER.indexOf(n),u=Be.VALUE_TYPE_ORDER.indexOf(s);return U(o>=0,"Unknown leaf type: "+n),U(u>=0,"Unknown leaf type: "+s),o===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Iy,Ty;function xS(i){Iy=i}function RS(i){Ty=i}class OS extends Fo{compare(e,n){const s=e.node.getPriority(),o=n.node.getPriority(),u=s.compareTo(o);return u===0?_i(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(br,new Be("[PRIORITY-POST]",Ty))}makePost(e,n){const s=Iy(e);return new ae(n,new Be("[PRIORITY-POST]",s))}toString(){return".priority"}}const nt=new OS;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const AS=Math.log(2);class LS{constructor(e){const n=u=>parseInt(Math.log(u)/AS,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const o=s(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Eo=function(i,e,n,s){i.sort(e);const o=function(p,g){const _=g-p;let v,k;if(_===0)return null;if(_===1)return v=i[p],k=n?n(v):v,new $e(k,v.node,$e.BLACK,null,null);{const P=parseInt(_/2,10)+p,T=o(p,P),M=o(P+1,g);return v=i[P],k=n?n(v):v,new $e(k,v.node,$e.BLACK,T,M)}},u=function(p){let g=null,_=null,v=i.length;const k=function(T,M){const x=v-T,D=v;v-=T;const z=o(x+1,D),ee=i[x],X=n?n(ee):ee;P(new $e(X,ee.node,M,null,z))},P=function(T){g?(g.left=T,g=T):(_=T,g=T)};for(let T=0;T<p.count;++T){const M=p.nextBitIsOne(),x=Math.pow(2,p.count-(T+1));M?k(x,$e.BLACK):(k(x,$e.BLACK),k(x,$e.RED))}return _},d=new LS(i.length),f=u(d);return new ft(s||e,f)};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Ku;const hs={};class fn{static get Default(){return U(nt,"ChildrenNode.ts has not been loaded"),Ku=Ku||new fn({".priority":hs},{".priority":nt}),Ku}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ai(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ft?n:null}hasIndex(e){return _n(this.indexSet_,e.toString())}addIndex(e,n){U(e!==si,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let o=!1;const u=n.getIterator(ae.Wrap);let d=u.getNext();for(;d;)o=o||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;o?f=Eo(s,e.getCompare()):f=hs;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const _=Object.assign({},this.indexes_);return _[p]=f,new fn(_,g)}addToIndexes(e,n){const s=fo(this.indexes_,(o,u)=>{const d=ai(this.indexSet_,u);if(U(d,"Missing index implementation for "+u),o===hs)if(d.isDefinedOn(e.node)){const f=[],p=n.getIterator(ae.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),Eo(f,d.getCompare())}else return hs;else{const f=n.get(e.name);let p=o;return f&&(p=p.remove(new ae(e.name,f))),p.insert(e,e.node)}});return new fn(s,this.indexSet_)}removeFromIndexes(e,n){const s=fo(this.indexes_,o=>{if(o===hs)return o;{const u=n.get(e.name);return u?o.remove(new ae(e.name,u)):o}});return new fn(s,this.indexSet_)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let fs;class de{static get EMPTY_NODE(){return fs||(fs=new de(new ft(Gc),null,fn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Cy(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fs}updatePriority(e){return this.children_.isEmpty()?this:new de(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fs:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(U(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ae(e,n);let o,u;n.isEmpty()?(o=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(o=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=o.isEmpty()?fs:this.priorityNode_;return new de(o,d,u)}}updateChild(e,n){const s=se(e);if(s===null)return n;{U(se(e)!==".priority"||Qn(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(s).updateChild(Ce(e),n);return this.updateImmediateChild(s,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,o=0,u=!0;if(this.forEachChild(nt,(d,f)=>{n[d]=f.val(e),s++,u&&de.INTEGER_REGEXP_.test(d)?o=Math.max(o,Number(d)):u=!1}),!e&&u&&o<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Sy(this.getPriority().val())+":"),this.forEachChild(nt,(n,s)=>{const o=s.hash();o!==""&&(e+=":"+n+":"+o)}),this.lazyHash_=e===""?"":Jg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const o=this.resolveIndex_(s);if(o){const u=o.getPredecessorKey(new ae(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(o=>n(o.name,o.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,ae.Wrap);let u=o.peek();for(;u!=null&&n.compare(u,e)<0;)o.getNext(),u=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let u=o.peek();for(;u!=null&&n.compare(u,e)>0;)o.getNext(),u=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Us?-1:0}withIndex(e){if(e===si||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new de(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===si||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(nt),o=n.getIterator(nt);let u=s.getNext(),d=o.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=o.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===si?null:this.indexMap_.get(e.toString())}}de.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class DS extends de{constructor(){super(new ft(Gc),de.EMPTY_NODE,fn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return de.EMPTY_NODE}isEmpty(){return!1}}const Us=new DS;Object.defineProperties(ae,{MIN:{value:new ae(ui,de.EMPTY_NODE)},MAX:{value:new ae(br,Us)}});Ey.__EMPTY_NODE=de.EMPTY_NODE;Be.__childrenNodeConstructor=de;PS(Us);RS(Us);/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const MS=!0;function tt(i,e=null){if(i===null)return de.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),U(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new Be(n,tt(e))}if(!(i instanceof Array)&&MS){const n=[];let s=!1;if(Nt(i,(u,d)=>{if(u.substring(0,1)!=="."){const f=tt(d);f.isEmpty()||(s=s||!f.getPriority().isEmpty(),n.push(new ae(u,f)))}}),n.length===0)return de.EMPTY_NODE;const o=Eo(n,NS,u=>u.name,Gc);if(s){const u=Eo(n,nt.getCompare());return new de(o,tt(e),new fn({".priority":u},{".priority":nt}))}else return new de(o,tt(e),fn.Default)}else{let n=de.EMPTY_NODE;return Nt(i,(s,o)=>{if(_n(i,s)&&s.substring(0,1)!=="."){const u=tt(o);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(tt(e))}}xS(tt);/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class FS extends Fo{constructor(e){super(),this.indexPath_=e,U(!ie(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),o=this.extractChild(n.node),u=s.compareTo(o);return u===0?_i(e.name,n.name):u}makePost(e,n){const s=tt(e),o=de.EMPTY_NODE.updateChild(this.indexPath_,s);return new ae(n,o)}maxPost(){const e=de.EMPTY_NODE.updateChild(this.indexPath_,Us);return new ae(br,e)}toString(){return _y(this.indexPath_,0).join("/")}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zS extends Fo{compare(e,n){const s=e.node.compareTo(n.node);return s===0?_i(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const s=tt(e);return new ae(n,s)}toString(){return".value"}}const US=new zS;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function jS(i){return{type:"value",snapshotNode:i}}function WS(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function HS(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function bm(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function BS(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Jc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=nt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ui}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:br}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===nt}copy(){const e=new Jc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wm(i){const e={};if(i.isDefault())return e;let n;if(i.index_===nt?n="$priority":i.index_===US?n="$value":i.index_===si?n="$key":(U(i.index_ instanceof FS,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=Ye(n),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=Ye(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+Ye(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=Ye(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+Ye(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function km(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==nt&&(e.i=i.index_.toString()),e}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class So extends gy{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,o){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.log_=Fs("p:rest:"),this.listens_={}}listen(e,n,s,o){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=So.getListenId_(e,s),f={};this.listens_[d]=f;const p=wm(e._queryParams);this.restRequest_(u+".json",p,(g,_)=>{let v=_;if(g===404&&(v=null,g=null),g===null&&this.onDataUpdate_(u,v,!1,s),ai(this.listens_,d)===f){let k;g?g===401?k="permission_denied":k="rest_error:"+g:k="ok",o(k,null)}})}unlisten(e,n){const s=So.getListenId_(e,n);delete this.listens_[s]}get(e){const n=wm(e._queryParams),s=e._path.toString(),o=new xc;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),o.resolve(f)):o.reject(new Error(f))}),o.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,u])=>{o&&o.accessToken&&(n.auth=o.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+mi(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Ss(f.responseText)}catch{bt("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&bt("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class $S{constructor(){this.rootNode_=de.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Co(){return{value:null,children:new Map}}function Ny(i,e,n){if(ie(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=se(e);i.children.has(s)||i.children.set(s,Co());const o=i.children.get(s);e=Ce(e),Ny(o,e,n)}}function dc(i,e,n){i.value!==null?n(e,i.value):VS(i,(s,o)=>{const u=new Ie(e.toString()+"/"+s);dc(o,u,n)})}function VS(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class qS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Nt(this.last_,(s,o)=>{n[s]=n[s]-o}),this.last_=e,n}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Em=10*1e3,KS=30*1e3,YS=5*60*1e3;class GS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new qS(e);const s=Em+(KS-Em)*Math.random();bs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Nt(e,(o,u)=>{u>0&&_n(this.statsToReport_,o)&&(n[o]=u,s=!0)}),s&&this.server_.reportStats(n),bs(this.reportStats_.bind(this),Math.floor(Math.random()*2*YS))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var Qt;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qt||(Qt={}));function Py(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ry(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Io{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Qt.ACK_USER_WRITE,this.source=Py()}operationForChild(e){if(ie(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ie(e));return new Io(ye(),n,this.revert)}}else return U(se(this.path)===e,"operationForChild called for unrelated child."),new Io(Ce(this.path),this.affectedTree,this.revert)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class wr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Qt.OVERWRITE}operationForChild(e){return ie(this.path)?new wr(this.source,ye(),this.snap.getImmediateChild(e)):new wr(this.source,Ce(this.path),this.snap)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ps{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Qt.MERGE}operationForChild(e){if(ie(this.path)){const n=this.children.subtree(new Ie(e));return n.isEmpty()?null:n.value?new wr(this.source,ye(),n.value):new Ps(this.source,ye(),n)}else return U(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ps(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Qc{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function JS(i,e,n,s){const o=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&i.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(BS(d.childName,d.snapshotNode))}),ps(i,o,"child_removed",e,s,n),ps(i,o,"child_added",e,s,n),ps(i,o,"child_moved",u,s,n),ps(i,o,"child_changed",e,s,n),ps(i,o,"value",e,s,n),o}function ps(i,e,n,s,o,u){const d=s.filter(f=>f.type===n);d.sort((f,p)=>ZS(i,f,p)),d.forEach(f=>{const p=QS(i,f,u);o.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,i.query_))})})}function QS(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function ZS(i,e,n){if(e.childName==null||n.childName==null)throw pi("Should only compare child_ events.");const s=new ae(e.childName,e.snapshotNode),o=new ae(n.childName,n.snapshotNode);return i.index_.compare(s,o)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Oy(i,e){return{eventCache:i,serverCache:e}}function ws(i,e,n,s){return Oy(new Qc(e,n,s),i.serverCache)}function Ay(i,e,n,s){return Oy(i.eventCache,new Qc(e,n,s))}function hc(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function kr(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Yu;const XS=()=>(Yu||(Yu=new ft(UE)),Yu);class Se{static fromObject(e){let n=new Se(null);return Nt(e,(s,o)=>{n=n.set(new Ie(s),o)}),n}constructor(e,n=XS()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ye(),value:this.value};if(ie(e))return null;{const s=se(e),o=this.children.get(s);if(o!==null){const u=o.findRootMostMatchingPathAndValue(Ce(e),n);return u!=null?{path:Ve(new Ie(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ie(e))return this;{const n=se(e),s=this.children.get(n);return s!==null?s.subtree(Ce(e)):new Se(null)}}set(e,n){if(ie(e))return new Se(n,this.children);{const s=se(e),o=(this.children.get(s)||new Se(null)).set(Ce(e),n),u=this.children.insert(s,o);return new Se(this.value,u)}}remove(e){if(ie(e))return this.children.isEmpty()?new Se(null):new Se(null,this.children);{const n=se(e),s=this.children.get(n);if(s){const o=s.remove(Ce(e));let u;return o.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,o),this.value===null&&u.isEmpty()?new Se(null):new Se(this.value,u)}else return this}}get(e){if(ie(e))return this.value;{const n=se(e),s=this.children.get(n);return s?s.get(Ce(e)):null}}setTree(e,n){if(ie(e))return n;{const s=se(e),o=(this.children.get(s)||new Se(null)).setTree(Ce(e),n);let u;return o.isEmpty()?u=this.children.remove(s):u=this.children.insert(s,o),new Se(this.value,u)}}fold(e){return this.fold_(ye(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((o,u)=>{s[o]=u.fold_(Ve(e,o),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ye(),n)}findOnPath_(e,n,s){const o=this.value?s(n,this.value):!1;if(o)return o;if(ie(e))return null;{const u=se(e),d=this.children.get(u);return d?d.findOnPath_(Ce(e),Ve(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ye(),n)}foreachOnPath_(e,n,s){if(ie(e))return this;{this.value&&s(n,this.value);const o=se(e),u=this.children.get(o);return u?u.foreachOnPath_(Ce(e),Ve(n,o),s):new Se(null)}}foreach(e){this.foreach_(ye(),e)}foreach_(e,n){this.children.inorderTraversal((s,o)=>{o.foreach_(Ve(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zt{constructor(e){this.writeTree_=e}static empty(){return new zt(new Se(null))}}function ks(i,e,n){if(ie(e))return new zt(new Se(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const o=s.path;let u=s.value;const d=Tt(o,e);return u=u.updateChild(d,n),new zt(i.writeTree_.set(o,u))}else{const o=new Se(n),u=i.writeTree_.setTree(e,o);return new zt(u)}}}function Sm(i,e,n){let s=i;return Nt(n,(o,u)=>{s=ks(s,Ve(e,o),u)}),s}function Cm(i,e){if(ie(e))return zt.empty();{const n=i.writeTree_.setTree(e,new Se(null));return new zt(n)}}function fc(i,e){return Sr(i,e)!=null}function Sr(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(Tt(n.path,e)):null}function Im(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(nt,(s,o)=>{e.push(new ae(s,o))}):i.writeTree_.children.inorderTraversal((s,o)=>{o.value!=null&&e.push(new ae(s,o.value))}),e}function Gn(i,e){if(ie(e))return i;{const n=Sr(i,e);return n!=null?new zt(new Se(n)):new zt(i.writeTree_.subtree(e))}}function pc(i){return i.writeTree_.isEmpty()}function ci(i,e){return Ly(ye(),i.writeTree_,e)}function Ly(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((o,u)=>{o===".priority"?(U(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=Ly(Ve(i,o),u,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(Ve(i,".priority"),s)),n}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Dy(i,e){return jy(e,i)}function eC(i,e,n,s,o){U(s>i.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:o}),o&&(i.visibleWrites=ks(i.visibleWrites,e,n)),i.lastWriteId=s}function tC(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function nC(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);U(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let o=s.visible,u=!1,d=i.allWrites.length-1;for(;o&&d>=0;){const f=i.allWrites[d];f.visible&&(d>=n&&rC(f,s.path)?o=!1:Ft(s.path,f.path)&&(u=!0)),d--}if(o){if(u)return iC(i),!0;if(s.snap)i.visibleWrites=Cm(i.visibleWrites,s.path);else{const f=s.children;Nt(f,p=>{i.visibleWrites=Cm(i.visibleWrites,Ve(s.path,p))})}return!0}else return!1}function rC(i,e){if(i.snap)return Ft(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&Ft(Ve(i.path,n),e))return!0;return!1}function iC(i){i.visibleWrites=My(i.allWrites,sC,ye()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function sC(i){return i.visible}function My(i,e,n){let s=zt.empty();for(let o=0;o<i.length;++o){const u=i[o];if(e(u)){const d=u.path;let f;if(u.snap)Ft(n,d)?(f=Tt(n,d),s=ks(s,f,u.snap)):Ft(d,n)&&(f=Tt(d,n),s=ks(s,ye(),u.snap.getChild(f)));else if(u.children){if(Ft(n,d))f=Tt(n,d),s=Sm(s,f,u.children);else if(Ft(d,n))if(f=Tt(d,n),ie(f))s=Sm(s,ye(),u.children);else{const p=ai(u.children,se(f));if(p){const g=p.getChild(Ce(f));s=ks(s,ye(),g)}}}else throw pi("WriteRecord should have .snap or .children")}}return s}function Fy(i,e,n,s,o){if(!s&&!o){const u=Sr(i.visibleWrites,e);if(u!=null)return u;{const d=Gn(i.visibleWrites,e);if(pc(d))return n;if(n==null&&!fc(d,ye()))return null;{const f=n||de.EMPTY_NODE;return ci(d,f)}}}else{const u=Gn(i.visibleWrites,e);if(!o&&pc(u))return n;if(!o&&n==null&&!fc(u,ye()))return null;{const d=function(g){return(g.visible||o)&&(!s||!~s.indexOf(g.writeId))&&(Ft(g.path,e)||Ft(e,g.path))},f=My(i.allWrites,d,e),p=n||de.EMPTY_NODE;return ci(f,p)}}}function aC(i,e,n){let s=de.EMPTY_NODE;const o=Sr(i.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(nt,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=Gn(i.visibleWrites,e);return n.forEachChild(nt,(d,f)=>{const p=ci(Gn(u,new Ie(d)),f);s=s.updateImmediateChild(d,p)}),Im(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=Gn(i.visibleWrites,e);return Im(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function oC(i,e,n,s,o){U(s||o,"Either existingEventSnap or existingServerSnap must exist");const u=Ve(e,n);if(fc(i.visibleWrites,u))return null;{const d=Gn(i.visibleWrites,u);return pc(d)?o.getChild(n):ci(d,o.getChild(n))}}function lC(i,e,n,s){const o=Ve(e,n),u=Sr(i.visibleWrites,o);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=Gn(i.visibleWrites,o);return ci(d,s.getNode().getImmediateChild(n))}else return null}function uC(i,e){return Sr(i.visibleWrites,e)}function cC(i,e,n,s,o,u,d){let f;const p=Gn(i.visibleWrites,e),g=Sr(p,ye());if(g!=null)f=g;else if(n!=null)f=ci(p,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const _=[],v=d.getCompare(),k=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let P=k.getNext();for(;P&&_.length<o;)v(P,s)!==0&&_.push(P),P=k.getNext();return _}else return[]}function dC(){return{visibleWrites:zt.empty(),allWrites:[],lastWriteId:-1}}function mc(i,e,n,s){return Fy(i.writeTree,i.treePath,e,n,s)}function zy(i,e){return aC(i.writeTree,i.treePath,e)}function Tm(i,e,n,s){return oC(i.writeTree,i.treePath,e,n,s)}function To(i,e){return uC(i.writeTree,Ve(i.treePath,e))}function hC(i,e,n,s,o,u){return cC(i.writeTree,i.treePath,e,n,s,o,u)}function Zc(i,e,n){return lC(i.writeTree,i.treePath,e,n)}function Uy(i,e){return jy(Ve(i.treePath,e),i.writeTree)}function jy(i,e){return{treePath:i,writeTree:e}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class fC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;U(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),U(s!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(s);if(o){const u=o.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,bm(s,e.snapshotNode,o.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,HS(s,o.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,WS(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,bm(s,e.snapshotNode,o.oldSnap));else throw pi("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class pC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Wy=new pC;class Xc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Qc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Zc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kr(this.viewCache_),u=hC(this.writes_,o,n,1,s,e);return u.length===0?null:u[0]}}function mC(i,e){U(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),U(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function gC(i,e,n,s,o){const u=new fC;let d,f;if(n.type===Qt.OVERWRITE){const g=n;g.source.fromUser?d=gc(i,e,g.path,g.snap,s,o,u):(U(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!ie(g.path),d=No(i,e,g.path,g.snap,s,o,f,u))}else if(n.type===Qt.MERGE){const g=n;g.source.fromUser?d=vC(i,e,g.path,g.children,s,o,u):(U(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=yc(i,e,g.path,g.children,s,o,f,u))}else if(n.type===Qt.ACK_USER_WRITE){const g=n;g.revert?d=wC(i,e,g.path,s,o,u):d=_C(i,e,g.path,g.affectedTree,s,o,u)}else if(n.type===Qt.LISTEN_COMPLETE)d=bC(i,e,n.path,s,u);else throw pi("Unknown operation type: "+n.type);const p=u.getChanges();return yC(e,d,p),{viewCache:d,changes:p}}function yC(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const o=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=hc(i);(n.length>0||!i.eventCache.isFullyInitialized()||o&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(jS(hc(e)))}}function Hy(i,e,n,s,o,u){const d=e.eventCache;if(To(s,n)!=null)return e;{let f,p;if(ie(n))if(U(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=kr(e),_=g instanceof de?g:de.EMPTY_NODE,v=zy(s,_);f=i.filter.updateFullNode(e.eventCache.getNode(),v,u)}else{const g=mc(s,kr(e));f=i.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=se(n);if(g===".priority"){U(Qn(n)===1,"Can't have a priority with additional path components");const _=d.getNode();p=e.serverCache.getNode();const v=Tm(s,n,_,p);v!=null?f=i.filter.updatePriority(_,v):f=d.getNode()}else{const _=Ce(n);let v;if(d.isCompleteForChild(g)){p=e.serverCache.getNode();const k=Tm(s,n,d.getNode(),p);k!=null?v=d.getNode().getImmediateChild(g).updateChild(_,k):v=d.getNode().getImmediateChild(g)}else v=Zc(s,g,e.serverCache);v!=null?f=i.filter.updateChild(d.getNode(),g,v,_,o,u):f=d.getNode()}}return ws(e,f,d.isFullyInitialized()||ie(n),i.filter.filtersNodes())}}function No(i,e,n,s,o,u,d,f){const p=e.serverCache;let g;const _=d?i.filter:i.filter.getIndexedFilter();if(ie(n))g=_.updateFullNode(p.getNode(),s,null);else if(_.filtersNodes()&&!p.isFiltered()){const P=p.getNode().updateChild(n,s);g=_.updateFullNode(p.getNode(),P,null)}else{const P=se(n);if(!p.isCompleteForPath(n)&&Qn(n)>1)return e;const T=Ce(n),M=p.getNode().getImmediateChild(P).updateChild(T,s);P===".priority"?g=_.updatePriority(p.getNode(),M):g=_.updateChild(p.getNode(),P,M,T,Wy,null)}const v=Ay(e,g,p.isFullyInitialized()||ie(n),_.filtersNodes()),k=new Xc(o,v,u);return Hy(i,v,n,o,k,f)}function gc(i,e,n,s,o,u,d){const f=e.eventCache;let p,g;const _=new Xc(o,e,u);if(ie(n))g=i.filter.updateFullNode(e.eventCache.getNode(),s,d),p=ws(e,g,!0,i.filter.filtersNodes());else{const v=se(n);if(v===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),p=ws(e,g,f.isFullyInitialized(),f.isFiltered());else{const k=Ce(n),P=f.getNode().getImmediateChild(v);let T;if(ie(k))T=s;else{const M=_.getCompleteChild(v);M!=null?vy(k)===".priority"&&M.getChild(by(k)).isEmpty()?T=M:T=M.updateChild(k,s):T=de.EMPTY_NODE}if(P.equals(T))p=e;else{const M=i.filter.updateChild(f.getNode(),v,T,k,_,d);p=ws(e,M,f.isFullyInitialized(),i.filter.filtersNodes())}}}return p}function Nm(i,e){return i.eventCache.isCompleteForChild(e)}function vC(i,e,n,s,o,u,d){let f=e;return s.foreach((p,g)=>{const _=Ve(n,p);Nm(e,se(_))&&(f=gc(i,f,_,g,o,u,d))}),s.foreach((p,g)=>{const _=Ve(n,p);Nm(e,se(_))||(f=gc(i,f,_,g,o,u,d))}),f}function Pm(i,e,n){return n.foreach((s,o)=>{e=e.updateChild(s,o)}),e}function yc(i,e,n,s,o,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;ie(n)?g=s:g=new Se(null).setTree(n,s);const _=e.serverCache.getNode();return g.children.inorderTraversal((v,k)=>{if(_.hasChild(v)){const P=e.serverCache.getNode().getImmediateChild(v),T=Pm(i,P,k);p=No(i,p,new Ie(v),T,o,u,d,f)}}),g.children.inorderTraversal((v,k)=>{const P=!e.serverCache.isCompleteForChild(v)&&k.value===null;if(!_.hasChild(v)&&!P){const T=e.serverCache.getNode().getImmediateChild(v),M=Pm(i,T,k);p=No(i,p,new Ie(v),M,o,u,d,f)}}),p}function _C(i,e,n,s,o,u,d){if(To(o,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(ie(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return No(i,e,n,p.getNode().getChild(n),o,u,f,d);if(ie(n)){let g=new Se(null);return p.getNode().forEachChild(si,(_,v)=>{g=g.set(new Ie(_),v)}),yc(i,e,n,g,o,u,f,d)}else return e}else{let g=new Se(null);return s.foreach((_,v)=>{const k=Ve(n,_);p.isCompleteForPath(k)&&(g=g.set(_,p.getNode().getChild(k)))}),yc(i,e,n,g,o,u,f,d)}}function bC(i,e,n,s,o){const u=e.serverCache,d=Ay(e,u.getNode(),u.isFullyInitialized()||ie(n),u.isFiltered());return Hy(i,d,n,s,Wy,o)}function wC(i,e,n,s,o,u){let d;if(To(s,n)!=null)return e;{const f=new Xc(s,e,o),p=e.eventCache.getNode();let g;if(ie(n)||se(n)===".priority"){let _;if(e.serverCache.isFullyInitialized())_=mc(s,kr(e));else{const v=e.serverCache.getNode();U(v instanceof de,"serverChildren would be complete if leaf node"),_=zy(s,v)}_=_,g=i.filter.updateFullNode(p,_,u)}else{const _=se(n);let v=Zc(s,_,e.serverCache);v==null&&e.serverCache.isCompleteForChild(_)&&(v=p.getImmediateChild(_)),v!=null?g=i.filter.updateChild(p,_,v,Ce(n),f,u):e.eventCache.getNode().hasChild(_)?g=i.filter.updateChild(p,_,de.EMPTY_NODE,Ce(n),f,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=mc(s,kr(e)),d.isLeafNode()&&(g=i.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||To(s,ye())!=null,ws(e,g,d,i.filter.filtersNodes())}}function kC(i,e){const n=kr(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!ie(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function xm(i,e,n,s){e.type===Qt.MERGE&&e.source.queryId!==null&&(U(kr(i.viewCache_),"We should always have a full cache before handling merges"),U(hc(i.viewCache_),"Missing event cache, even though we have a server cache"));const o=i.viewCache_,u=gC(i.processor_,o,e,n,s);return mC(i.processor_,u.viewCache),U(u.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=u.viewCache,EC(i,u.changes,u.viewCache.eventCache.getNode())}function EC(i,e,n,s){const o=i.eventRegistrations_;return JS(i.eventGenerator_,e,n,o)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Rm;function SC(i){U(!Rm,"__referenceConstructor has already been defined"),Rm=i}function ed(i,e,n,s){const o=e.source.queryId;if(o!==null){const u=i.views.get(o);return U(u!=null,"SyncTree gave us an op for an invalid query."),xm(u,e,n,s)}else{let u=[];for(const d of i.views.values())u=u.concat(xm(d,e,n,s));return u}}function td(i,e){let n=null;for(const s of i.views.values())n=n||kC(s,e);return n}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Om;function CC(i){U(!Om,"__referenceConstructor has already been defined"),Om=i}class Am{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Se(null),this.pendingWriteTree_=dC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function IC(i,e,n,s,o){return eC(i.pendingWriteTree_,e,n,s,o),o?Uo(i,new wr(Py(),e,n)):[]}function Xr(i,e,n=!1){const s=tC(i.pendingWriteTree_,e);if(nC(i.pendingWriteTree_,e)){let o=new Se(null);return s.snap!=null?o=o.set(ye(),!0):Nt(s.children,u=>{o=o.set(new Ie(u),!0)}),Uo(i,new Io(s.path,o,n))}else return[]}function zo(i,e,n){return Uo(i,new wr(xy(),e,n))}function TC(i,e,n){const s=Se.fromObject(n);return Uo(i,new Ps(xy(),e,s))}function NC(i,e,n,s){const o=qy(i,s);if(o!=null){const u=Ky(o),d=u.path,f=u.queryId,p=Tt(d,e),g=new wr(Ry(f),p,n);return Yy(i,d,g)}else return[]}function PC(i,e,n,s){const o=qy(i,s);if(o){const u=Ky(o),d=u.path,f=u.queryId,p=Tt(d,e),g=Se.fromObject(n),_=new Ps(Ry(f),p,g);return Yy(i,d,_)}else return[]}function By(i,e,n){const s=i.pendingWriteTree_,o=i.syncPointTree_.findOnPath(e,(u,d)=>{const f=Tt(u,e),p=td(d,f);if(p)return p});return Fy(s,e,o,n,!0)}function Uo(i,e){return $y(e,i.syncPointTree_,null,Dy(i.pendingWriteTree_,ye()))}function $y(i,e,n,s){if(ie(i.path))return Vy(i,e,n,s);{const o=e.get(ye());n==null&&o!=null&&(n=td(o,ye()));let u=[];const d=se(i.path),f=i.operationForChild(d),p=e.children.get(d);if(p&&f){const g=n?n.getImmediateChild(d):null,_=Uy(s,d);u=u.concat($y(f,p,g,_))}return o&&(u=u.concat(ed(o,i,s,n))),u}}function Vy(i,e,n,s){const o=e.get(ye());n==null&&o!=null&&(n=td(o,ye()));let u=[];return e.children.inorderTraversal((d,f)=>{const p=n?n.getImmediateChild(d):null,g=Uy(s,d),_=i.operationForChild(d);_&&(u=u.concat(Vy(_,f,p,g)))}),o&&(u=u.concat(ed(o,i,s,n))),u}function qy(i,e){return i.tagToQueryMap.get(e)}function Ky(i){const e=i.indexOf("$");return U(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new Ie(i.substr(0,e))}}function Yy(i,e,n){const s=i.syncPointTree_.get(e);U(s,"Missing sync point for query tag that we're tracking");const o=Dy(i.pendingWriteTree_,e);return ed(s,n,o,null)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class nd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new nd(n)}node(){return this.node_}}class rd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ve(this.path_,e);return new rd(this.syncTree_,n)}node(){return By(this.syncTree_,this.path_)}}const xC=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},Lm=function(i,e,n){if(!i||typeof i!="object")return i;if(U(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return RC(i[".sv"],e,n);if(typeof i[".sv"]=="object")return OC(i[".sv"],e);U(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},RC=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:U(!1,"Unexpected server value: "+i)}},OC=function(i,e,n){i.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&U(!1,"Unexpected increment value: "+s);const o=e.node();if(U(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return s;const u=o.getValue();return typeof u!="number"?s:u+s},AC=function(i,e,n,s){return id(e,new rd(n,i),s)},LC=function(i,e,n){return id(i,new nd(e),n)};function id(i,e,n){const s=i.getPriority().val(),o=Lm(s,e.getImmediateChild(".priority"),n);let u;if(i.isLeafNode()){const d=i,f=Lm(d.getValue(),e,n);return f!==d.getValue()||o!==d.getPriority().val()?new Be(f,tt(o)):i}else{const d=i;return u=d,o!==d.getPriority().val()&&(u=u.updatePriority(new Be(o))),d.forEachChild(nt,(f,p)=>{const g=id(p,e.getImmediateChild(f),n);g!==p&&(u=u.updateImmediateChild(f,g))}),u}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class sd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ad(i,e){let n=e instanceof Ie?e:new Ie(e),s=i,o=se(n);for(;o!==null;){const u=ai(s.node.children,o)||{children:{},childCount:0};s=new sd(o,s,u),n=Ce(n),o=se(n)}return s}function bi(i){return i.node.value}function Gy(i,e){i.node.value=e,vc(i)}function Jy(i){return i.node.childCount>0}function DC(i){return bi(i)===void 0&&!Jy(i)}function jo(i,e){Nt(i.node.children,(n,s)=>{e(new sd(n,i,s))})}function Qy(i,e,n,s){n&&!s&&e(i),jo(i,o=>{Qy(o,e,!0,s)})}function MC(i,e,n){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function js(i){return new Ie(i.parent===null?i.name:js(i.parent)+"/"+i.name)}function vc(i){i.parent!==null&&FC(i.parent,i.name,i)}function FC(i,e,n){const s=DC(n),o=_n(i.node.children,e);s&&o?(delete i.node.children[e],i.node.childCount--,vc(i)):!s&&!o&&(i.node.children[e]=n.node,i.node.childCount++,vc(i))}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const zC=/[\[\].#$\/\u0000-\u001F\u007F]/,UC=/[\[\].#$\u0000-\u001F\u007F]/,Gu=10*1024*1024,Zy=function(i){return typeof i=="string"&&i.length!==0&&!zC.test(i)},jC=function(i){return typeof i=="string"&&i.length!==0&&!UC.test(i)},WC=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),jC(i)},Xy=function(i,e,n){const s=n instanceof Ie?new bS(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+gr(s));if(typeof e=="function")throw new Error(i+"contains a function "+gr(s)+" with contents = "+e.toString());if(Qg(e))throw new Error(i+"contains "+e.toString()+" "+gr(s));if(typeof e=="string"&&e.length>Gu/3&&Oo(e)>Gu)throw new Error(i+"contains a string greater than "+Gu+" utf8 bytes "+gr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,u=!1;if(Nt(e,(d,f)=>{if(d===".value")o=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!Zy(d)))throw new Error(i+" contains an invalid key ("+d+") "+gr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);wS(s,d),Xy(i,f,s),kS(s)}),o&&u)throw new Error(i+' contains ".value" child '+gr(s)+" in addition to actual children.")}},HC=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Zy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!WC(n))throw new Error(uw(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class BC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function $C(i,e){let n=null;for(let s=0;s<e.length;s++){const o=e[s],u=o.getPath();n!==null&&!wy(u,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(o)}n&&i.eventLists_.push(n)}function Cr(i,e,n){$C(i,n),VC(i,s=>Ft(s,e)||Ft(e,s))}function VC(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const o=i.eventLists_[s];if(o){const u=o.path;e(u)?(qC(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function qC(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();_s&&et("event: "+n.toString()),zs(s)}}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const KC="repo_interrupt",YC=25;class GC{constructor(e,n,s,o){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new BC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Co(),this.transactionQueueTree_=new sd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function JC(i,e,n){if(i.stats_=qc(i.repoInfo_),i.forceRestClient_||VE())i.server_=new So(i.repoInfo_,(s,o,u,d)=>{Dm(i,s,o,u,d)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>Mm(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ye(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new mn(i.repoInfo_,e,(s,o,u,d)=>{Dm(i,s,o,u,d)},s=>{Mm(i,s)},s=>{ZC(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=JE(i.repoInfo_,()=>new GS(i.stats_,i.server_)),i.infoData_=new $S,i.infoSyncTree_=new Am({startListening:(s,o,u,d)=>{let f=[];const p=i.infoData_.getNode(s._path);return p.isEmpty()||(f=zo(i.infoSyncTree_,s._path,p),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),od(i,"connected",!1),i.serverSyncTree_=new Am({startListening:(s,o,u,d)=>(i.server_.listen(s,u,o,(f,p)=>{const g=d(f,p);Cr(i.eventQueue_,s._path,g)}),[]),stopListening:(s,o)=>{i.server_.unlisten(s,o)}})}function QC(i){const e=i.infoData_.getNode(new Ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+e}function ev(i){return xC({timestamp:QC(i)})}function Dm(i,e,n,s,o){i.dataUpdateCount++;const u=new Ie(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let d=[];if(o)if(s){const p=fo(n,g=>tt(g));d=PC(i.serverSyncTree_,u,p,o)}else{const p=tt(n);d=NC(i.serverSyncTree_,u,p,o)}else if(s){const p=fo(n,g=>tt(g));d=TC(i.serverSyncTree_,u,p)}else{const p=tt(n);d=zo(i.serverSyncTree_,u,p)}let f=u;d.length>0&&(f=ud(i,u)),Cr(i.eventQueue_,f,d)}function Mm(i,e){od(i,"connected",e),e===!1&&eI(i)}function ZC(i,e){Nt(e,(n,s)=>{od(i,n,s)})}function od(i,e,n){const s=new Ie("/.info/"+e),o=tt(n);i.infoData_.updateSnapshot(s,o);const u=zo(i.infoSyncTree_,s,o);Cr(i.eventQueue_,s,u)}function XC(i){return i.nextWriteId_++}function eI(i){tv(i,"onDisconnectEvents");const e=ev(i),n=Co();dc(i.onDisconnect_,ye(),(o,u)=>{const d=AC(o,u,i.serverSyncTree_,e);Ny(n,o,d)});let s=[];dc(n,ye(),(o,u)=>{s=s.concat(zo(i.serverSyncTree_,o,u));const d=iI(i,o);ud(i,d)}),i.onDisconnect_=Co(),Cr(i.eventQueue_,ye(),s)}function tI(i){i.persistentConnection_&&i.persistentConnection_.interrupt(KC)}function tv(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),et(n,...e)}function nv(i,e,n){return By(i.serverSyncTree_,e,n)||de.EMPTY_NODE}function ld(i,e=i.transactionQueueTree_){if(e||Wo(i,e),bi(e)){const n=iv(i,e);U(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&nI(i,js(e),n)}else Jy(e)&&jo(e,n=>{ld(i,n)})}function nI(i,e,n){const s=n.map(g=>g.currentWriteId),o=nv(i,e,s);let u=o;const d=o.hash();for(let g=0;g<n.length;g++){const _=n[g];U(_.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),_.status=1,_.retryCount++;const v=Tt(e,_.path);u=u.updateChild(v,_.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;i.server_.put(p.toString(),f,g=>{tv(i,"transaction put response",{path:p.toString(),status:g});let _=[];if(g==="ok"){const v=[];for(let k=0;k<n.length;k++)n[k].status=2,_=_.concat(Xr(i.serverSyncTree_,n[k].currentWriteId)),n[k].onComplete&&v.push(()=>n[k].onComplete(null,!0,n[k].currentOutputSnapshotResolved)),n[k].unwatcher();Wo(i,ad(i.transactionQueueTree_,e)),ld(i,i.transactionQueueTree_),Cr(i.eventQueue_,e,_);for(let k=0;k<v.length;k++)zs(v[k])}else{if(g==="datastale")for(let v=0;v<n.length;v++)n[v].status===3?n[v].status=4:n[v].status=0;else{bt("transaction at "+p.toString()+" failed: "+g);for(let v=0;v<n.length;v++)n[v].status=4,n[v].abortReason=g}ud(i,e)}},d)}function ud(i,e){const n=rv(i,e),s=js(n),o=iv(i,n);return rI(i,o,s),s}function rI(i,e,n){if(e.length===0)return;const s=[];let o=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const f=e[d],p=Tt(n,f.path);let g=!1,_;if(U(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),f.status===4)g=!0,_=f.abortReason,o=o.concat(Xr(i.serverSyncTree_,f.currentWriteId,!0));else if(f.status===0)if(f.retryCount>=YC)g=!0,_="maxretry",o=o.concat(Xr(i.serverSyncTree_,f.currentWriteId,!0));else{const v=nv(i,f.path,u);f.currentInputSnapshot=v;const k=e[d].update(v.val());if(k!==void 0){Xy("transaction failed: Data returned ",k,f.path);let P=tt(k);typeof k=="object"&&k!=null&&_n(k,".priority")||(P=P.updatePriority(v.getPriority()));const T=f.currentWriteId,M=ev(i),x=LC(P,v,M);f.currentOutputSnapshotRaw=P,f.currentOutputSnapshotResolved=x,f.currentWriteId=XC(i),u.splice(u.indexOf(T),1),o=o.concat(IC(i.serverSyncTree_,f.path,x,f.currentWriteId,f.applyLocally)),o=o.concat(Xr(i.serverSyncTree_,T,!0))}else g=!0,_="nodata",o=o.concat(Xr(i.serverSyncTree_,f.currentWriteId,!0))}Cr(i.eventQueue_,n,o),o=[],g&&(e[d].status=2,function(v){setTimeout(v,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(_==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(_),!1,null))))}Wo(i,i.transactionQueueTree_);for(let d=0;d<s.length;d++)zs(s[d]);ld(i,i.transactionQueueTree_)}function rv(i,e){let n,s=i.transactionQueueTree_;for(n=se(e);n!==null&&bi(s)===void 0;)s=ad(s,n),e=Ce(e),n=se(e);return s}function iv(i,e){const n=[];return sv(i,e,n),n.sort((s,o)=>s.order-o.order),n}function sv(i,e,n){const s=bi(e);if(s)for(let o=0;o<s.length;o++)n.push(s[o]);jo(e,o=>{sv(i,o,n)})}function Wo(i,e){const n=bi(e);if(n){let s=0;for(let o=0;o<n.length;o++)n[o].status!==2&&(n[s]=n[o],s++);n.length=s,Gy(e,n.length>0?n:void 0)}jo(e,s=>{Wo(i,s)})}function iI(i,e){const n=js(rv(i,e)),s=ad(i.transactionQueueTree_,e);return MC(s,o=>{Ju(i,o)}),Ju(i,s),Qy(s,o=>{Ju(i,o)}),n}function Ju(i,e){const n=bi(e);if(n){const s=[];let o=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(U(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(U(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),o=o.concat(Xr(i.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?Gy(e,void 0):n.length=u+1,Cr(i.eventQueue_,js(e),o);for(let d=0;d<s.length;d++)zs(s[d])}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function sI(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let o=n[s];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function aI(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):bt(`Invalid query segment '${n}' in query '${i}'`)}return e}const Fm=function(i,e){const n=oI(i),s=n.namespace;n.domain==="firebase.com"&&vn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&vn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||FE();const o=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new uy(n.host,n.secure,s,o,e,"",s!==n.subdomain),path:new Ie(n.pathString)}},oI=function(i){let e="",n="",s="",o="",u="",d=!0,f="https",p=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(f=i.substring(0,g-1),i=i.substring(g+2));let _=i.indexOf("/");_===-1&&(_=i.length);let v=i.indexOf("?");v===-1&&(v=i.length),e=i.substring(0,Math.min(_,v)),_<v&&(o=sI(i.substring(_,v)));const k=aI(i.substring(Math.min(i.length,v)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const P=e.slice(0,g);if(P.toLowerCase()==="localhost")n="localhost";else if(P.split(".").length<=2)n=P;else{const T=e.indexOf(".");s=e.substring(0,T).toLowerCase(),n=e.substring(T+1),u=s}"ns"in k&&(u=k.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:d,scheme:f,pathString:o,namespace:u}};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class cd{constructor(e,n,s,o){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=o}get key(){return ie(this._path)?null:vy(this._path)}get ref(){return new wi(this._repo,this._path)}get _queryIdentifier(){const e=km(this._queryParams),n=$c(e);return n==="{}"?"default":n}get _queryObject(){return km(this._queryParams)}isEqual(e){if(e=bn(e),!(e instanceof cd))return!1;const n=this._repo===e._repo,s=wy(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return n&&s&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+_S(this._path)}}class wi extends cd{constructor(e,n){super(e,n,new Jc,!1)}get parent(){const e=by(this._path);return e===null?null:new wi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}SC(wi);CC(wi);/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const lI="FIREBASE_DATABASE_EMULATOR_HOST",_c={};let uI=!1;function cI(i,e,n,s){i.repoInfo_=new uy(`${e}:${n}`,!1,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0),s&&(i.authTokenProvider_=s)}function dI(i,e,n,s,o){let u=s||i.options.databaseURL;u===void 0&&(i.options.projectId||vn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),et("Using default host for project ",i.options.projectId),u=`${i.options.projectId}-default-rtdb.firebaseio.com`);let d=Fm(u,o),f=d.repoInfo,p;typeof process<"u"&&rm&&(p=rm[lI]),p?(u=`http://${p}?ns=${f.namespace}`,d=Fm(u,o),f=d.repoInfo):d.repoInfo.secure;const g=new KE(i.name,i.options,e);HC("Invalid Firebase Database URL",d),ie(d.path)||vn("Database URL must point to the root of a Firebase Database (not including a child path).");const _=fI(f,i,g,new qE(i.name,n));return new pI(_,i)}function hI(i,e){const n=_c[e];(!n||n[i.key]!==i)&&vn(`Database ${e}(${i.repoInfo_}) has already been deleted.`),tI(i),delete n[i.key]}function fI(i,e,n,s){let o=_c[e.name];o||(o={},_c[e.name]=o);let u=o[i.toURLString()];return u&&vn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new GC(i,uI,n,s),o[i.toURLString()]=u,u}class pI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(JC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wi(this._repo,ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&vn("Cannot call "+e+" on a deleted database.")}}function mI(i=dg(),e){const n=Lc(i,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Kb("database");s&&gI(n,...s)}return n}function gI(i,e,n,s={}){i=bn(i),i._checkNotDeleted("useEmulator"),i._instanceStarted&&vn("Cannot call useEmulator() after instance has already been initialized.");const o=i._repoInternal;let u;if(o.repoInfo_.nodeAdmin)s.mockUserToken&&vn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new lo(lo.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:Yb(s.mockUserToken,i.app.options.projectId);u=new lo(d)}cI(o,e,n,u)}/**
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
*/function yI(i){RE(gi),oi(new vr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return dI(s,o,u,n)},"PUBLIC").setMultipleInstances(!0)),Kn(im,sm,i),Kn(im,sm,"esm2017")}mn.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};mn.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};yI();const vI={apiKey:"AIzaSyBSHYxpYmmY-VfxS3AFXpNhWCg0ebsg3IY",authDomain:"porforlio999.firebaseapp.com",databaseURL:"https://porforlio999-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"porforlio999",storageBucket:"porforlio999.firebasestorage.app",messagingSenderId:"506823677936",appId:"1:506823677936:web:03028fa08e61132e39ef35",measurementId:"G-Q9VJSPT236"},av=cg(vI),_I=TE(av);mI(av);const bI=()=>{const[i,e]=N.useState(""),[n,s]=N.useState(""),[o,u]=N.useState(""),d=xo(),f=async p=>{p.preventDefault();try{await pk(_I,i,n),alert("Logged in successfully!"),d("/home")}catch(g){u("Error: "+g.message)}};return B.jsx("div",{className:"min-vh-100 d-flex align-items-center justify-content-center bg-light",children:B.jsx("div",{className:"card shadow-lg p-4",style:{width:"24rem"},children:B.jsxs("div",{className:"card-body",children:[B.jsx("h2",{className:"card-title text-center mb-4",children:"Login"}),B.jsxs("form",{onSubmit:f,children:[B.jsxs("div",{className:"mb-3",children:[B.jsx("label",{htmlFor:"email",className:"form-label",children:"Email Address"}),B.jsx("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter your email",value:i,onChange:p=>e(p.target.value),required:!0})]}),B.jsxs("div",{className:"mb-3",children:[B.jsx("label",{htmlFor:"password",className:"form-label",children:"Password"}),B.jsx("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter your password",value:n,onChange:p=>s(p.target.value),required:!0})]}),B.jsx("button",{type:"submit",className:"btn btn-primary w-100",children:"Login"})]}),o&&B.jsx("p",{className:"text-danger mt-3",children:o}),B.jsxs("p",{className:"text-center mt-3",children:["Don't have an account? ",B.jsx(ei,{to:"/register",children:"Register here"})]})]})})})};function wI(){const{category:i}=H0(),e={all_certificates:["Certificate A","Certificate B","Certificate C"],best_certificates:["Best Certificate A","Best Certificate B"],profiles_student:["Profile: Student A","Profile: Student B"],complete_project_certificates:["Project A","Project B","Project C"]}[i]||[];return B.jsx("div",{className:"portfolio-container",children:B.jsxs("div",{className:"container mt-5",children:[B.jsx("h1",{children:i.replace(/_/g," ").toUpperCase()}),e.length>0?B.jsx("ul",{children:e.map((n,s)=>B.jsx("li",{children:n},s))}):B.jsx("p",{children:"ไม่มีข้อมูลสำหรับหมวดหมู่นี้"})]})})}function kI(){const[i,e]=N.useState(""),[n,s]=N.useState([]),[o,u]=N.useState(0),[d,f]=N.useState(!1),[p,g]=N.useState(""),_=xo(),v=D=>{const z=D.target.value;e(z),z.length>0?(f(!0),k(z)):f(!1)},k=D=>{const z=[{label:"ผลงานของฉัน",path:"/all_certificates"},{label:"ผลงานดีเด่น",path:"/best_certificates"},{label:"โปรไฟล์ส่วนตัว",path:"/profiles_student"},{label:"โปรเจคที่สำเร็จ",path:"/project_certificates"}].filter(ee=>ee.label.toLowerCase().includes(D.toLowerCase()));s(z)},P=D=>{try{e(D.label),f(!1),_(D.path)}catch{g("ไม่สามารถไปยังหน้านั้นได้!")}},T=D=>{if(D.key==="ArrowDown")o<n.length-1&&u(o+1);else if(D.key==="ArrowUp")o>0&&u(o-1);else if(D.key==="Enter"){const z=n[o];P(z)}},M=()=>{i.length===0&&(f(!0),k(""))},x=()=>{f(!1)};return B.jsxs("div",{className:"search-container",style:{position:"relative"},children:[B.jsxs("form",{onSubmit:D=>D.preventDefault(),className:"d-flex",children:[B.jsx("input",{type:"text",className:"form-control me-2",placeholder:"ค้นหา...",value:i,onChange:v,onKeyDown:T,onFocus:M,onBlur:x}),B.jsx("button",{type:"submit",className:"btn btn-outline-primary",children:"ค้นหา"})]}),d&&n.length>0&&B.jsx("ul",{className:"suggestions-list",children:n.map((D,z)=>B.jsx("li",{onClick:()=>P(D),className:`suggestion-item ${o===z?"active":""}`,children:D.label},z))}),p&&B.jsx("div",{className:"alert alert-danger",children:p})]})}function zm(){return B.jsx("div",{className:"home-container",children:B.jsxs("div",{className:"container mt-5",children:[B.jsx("h1",{children:"Welcome to PraiwanX"}),B.jsx("p",{children:"ยินดีต้อนรับเข้าสู่เว็บไซต์ เก็บผลงาน หรือ Portfolio"})]})})}function EI(){const[i,e]=N.useState(!1);return B.jsx("div",{className:"app-container",children:B.jsxs(Nb,{children:[B.jsxs("div",{className:"App",children:[B.jsx("nav",{className:"navbar navbar-expand-lg navbar-light bg-light shadow",children:B.jsxs("div",{className:"container-fluid",children:[B.jsx(ei,{className:"navbar-brand fw-bold",to:"/",children:"PraiwanX"}),B.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:B.jsx("span",{className:"navbar-toggler-icon"})}),B.jsxs("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[B.jsxs("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[B.jsx("li",{className:"nav-item",children:B.jsx(ei,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),i?B.jsx("li",{className:"nav-item",children:B.jsx("button",{className:"btn btn-outline-danger ms-3",onClick:()=>e(!1),children:"Logout"})}):B.jsx("li",{className:"nav-item",children:B.jsx(ei,{className:"nav-link",to:"/login",children:"Login"})})]}),B.jsx(kI,{})]})]})}),B.jsxs(ib,{children:[B.jsx(ms,{path:"/",element:B.jsx(zm,{})}),B.jsx(ms,{path:"/login",element:B.jsx(bI,{setIsLoggedIn:e})}),B.jsx(ms,{path:"/portfolio",element:B.jsx(Ip,{isLoggedIn:i,children:B.jsx(wI,{})})}),B.jsx(ms,{path:"/protected",element:B.jsx(Ip,{isLoggedIn:i,children:B.jsx(zm,{})})})]})]}),B.jsx(zb,{})]})})}h0.createRoot(document.getElementById("root")).render(B.jsx(N.StrictMode,{children:B.jsx(EI,{})}));
