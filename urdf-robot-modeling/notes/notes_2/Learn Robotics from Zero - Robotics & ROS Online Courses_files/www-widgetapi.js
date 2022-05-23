(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function r(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},qa={};try{qa.__proto__=pa;oa=qa.a;break a}catch(a){}oa=!1}ma=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=ma;
function u(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.O=b.prototype}
function ta(){this.v=!1;this.o=null;this.j=void 0;this.i=1;this.m=this.A=0;this.J=this.l=null}
function ua(a){if(a.v)throw new TypeError("Generator is already running");a.v=!0}
ta.prototype.D=function(a){this.j=a};
function va(a,b){a.l={Ta:b,Ya:!0};a.i=a.A||a.m}
ta.prototype.return=function(a){this.l={return:a};this.i=this.m};
function v(a,b,c){a.i=c;return{value:b}}
ta.prototype.s=function(a){this.i=a};
function xa(a,b,c){a.A=b;void 0!=c&&(a.m=c)}
function ya(a,b){a.i=b;a.A=0}
function za(a){a.A=0;var b=a.l.Ta;a.l=null;return b}
function Aa(a){a.J=[a.l];a.A=0;a.m=0}
function Ba(a){var b=a.J.splice(0)[0];(b=a.l=a.l||b)?b.Ya?a.i=a.A||a.m:void 0!=b.s&&a.m<b.s?(a.i=b.s,a.l=null):a.i=a.m:a.i=0}
function Ca(a){this.i=new ta;this.j=a}
function Da(a,b){ua(a.i);var c=a.i.o;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.i.o,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.v=!1,e;var f=e.value}catch(g){return a.i.o=null,va(a.i,g),Fa(a)}a.i.o=null;d.call(a.i,f);return Fa(a)}
function Fa(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.v=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,va(a.i,c)}a.i.v=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.Ya)throw b.Ta;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){ua(a.i);a.i.o?b=Ea(a,a.i.o.next,b,a.i.D):(a.i.D(b),b=Fa(a));return b};
this.throw=function(b){ua(a.i);a.i.o?b=Ea(a,a.i.o["throw"],b,a.i.D):(va(a.i,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ha(new Ga(new Ca(a)))}
function Ia(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.v=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.m()})}this.i.push(g)};
var e=fa.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.m=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.i=null};
c.prototype.o=function(g){this.l(function(){throw g;})};
b.prototype.o=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Aa),reject:g(this.m)}};
b.prototype.Aa=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.kb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.oa(g):this.A(g)}};
b.prototype.oa=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.lb(h,g):this.A(g)};
b.prototype.m=function(g){this.D(2,g)};
b.prototype.A=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.jb();this.J()};
b.prototype.jb=function(){var g=this;e(function(){if(g.P()){var h=fa.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.P=function(){if(this.v)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.J=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.kb=function(g){var h=this.o();g.ra(h.resolve,h.reject)};
b.prototype.lb=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(w,p){return"function"==typeof w?function(y){try{l(w(y))}catch(z){m(z)}}:p}
var l,m,q=new b(function(w,p){l=w;m=p});
this.ra(k(g,l),k(h,m));return q};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ra=function(g,h){function k(){switch(l.i){case 1:g(l.l);break;case 2:h(l.l);break;default:throw Error("Unexpected state: "+l.i);}}
var l=this;null==this.j?f.j(k):this.j.push(k);this.v=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=t(g),m=l.next();!m.done;m=l.next())d(m.value).ra(h,k)})};
b.all=function(g){var h=t(g),k=h.next();return k.done?d([]):new b(function(l,m){function q(y){return function(z){w[y]=z;p--;0==p&&l(w)}}
var w=[],p=0;do w.push(void 0),p++,d(k.value).ra(q(w.length-1),m),k=h.next();while(!k.done)})};
return b});
r("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=t(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)?delete k[g][this.i]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.i;return ha(function(){if(l){for(;l.head!=h.i;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&ja(h.data_,l))for(h=0;h<m.length;h++){var q=m[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:h,entry:q}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=t(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(t([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},l.list.push(l.entry),this.i.previous.next=l.entry,this.i.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
r("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
r("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Object.setPrototypeOf",function(a){return a||sa});
r("Set",function(a){function b(c){this.i=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
var A=this||self;function B(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va=Ta:Va=Ua;return Va.apply(null,arguments)}
function C(a,b){a=a.split(".");var c=A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.O=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ub=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.nb=b)}
Xa(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},db=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function eb(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function fb(a){return Array.prototype.concat.apply([],arguments)}
function gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function jb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function kb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<tb.length;f++)c=tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var vb;function wb(){}
function xb(a){return new wb(yb,a)}
var yb={};xb("");var zb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ab=/&/g,Bb=/</g,Cb=/>/g,Db=/"/g,Eb=/'/g,Fb=/\x00/g,Gb=/[\x00&<>"']/;function Hb(a,b){this.i=b===Ib?a:""}
Hb.prototype.toString=function(){return this.i.toString()};
var Ib={};function Jb(){var a=A.navigator;return a&&(a=a.userAgent)?a:""}
function E(a){return-1!=Jb().indexOf(a)}
;function Kb(){return(E("Chrome")||E("CriOS"))&&!E("Edge")||E("Silk")}
;var Lb={};function Mb(a){this.i=Lb===Lb?a:""}
Mb.prototype.toString=function(){return this.i.toString()};var Rb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sb(a){return a?decodeURI(a):a}
function Tb(a){return Sb(a.match(Rb)[3]||null)}
function Ub(a){var b=a.match(Rb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Vb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Vb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Wb(a){var b=[],c;for(c in a)Vb(c,a[c],b);return b.join("&")}
var Xb=/#|$/;function Yb(a,b){var c=a.search(Xb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;var Zb={};function $b(a){if(a!==Zb)throw Error("requires a valid immutable API token");}
;function ac(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;function bc(a){bc[" "](a);return a}
bc[" "]=function(){};var cc=E("Opera"),dc=E("Trident")||E("MSIE"),ec=E("Edge"),fc=E("Gecko")&&!(-1!=Jb().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),gc=-1!=Jb().toLowerCase().indexOf("webkit")&&!E("Edge");function hc(){var a=A.document;return a?a.documentMode:void 0}
var ic;a:{var jc="",lc=function(){var a=Jb();if(fc)return/rv:([^\);]+)(\)|;)/.exec(a);if(ec)return/Edge\/([\d\.]+)/.exec(a);if(dc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(gc)return/WebKit\/(\S+)/.exec(a);if(cc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
lc&&(jc=lc?lc[1]:"");if(dc){var mc=hc();if(null!=mc&&mc>parseFloat(jc)){ic=String(mc);break a}}ic=jc}var nc=ic,oc;if(A.document&&dc){var pc=hc();oc=pc?pc:parseInt(nc,10)||void 0}else oc=void 0;var qc=oc;var rc=ac()||E("iPod"),sc=E("iPad");!E("Android")||Kb();Kb();var tc=E("Safari")&&!(Kb()||E("Coast")||E("Opera")||E("Edge")||E("Edg/")||E("OPR")||E("Firefox")||E("FxiOS")||E("Silk")||E("Android"))&&!(ac()||E("iPad")||E("iPod"));var uc={},yc=null;
function zc(a,b){Oa(a);void 0===b&&(b=0);if(!yc){yc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));uc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===yc[h]&&(yc[h]=g)}}}b=uc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Ac="undefined"!==typeof Uint8Array,Bc={};var Cc;function Dc(a){if(Bc!==Bc)throw Error("illegal external caller");this.Na=a;if(null!==a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Dc.prototype.isEmpty=function(){return null==this.Na};var Ec="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Fc(a,b){Object.isFrozen(a)||(Ec?a[Ec]|=b:void 0!==a.wa?a.wa|=b:Object.defineProperties(a,{wa:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Gc(a){var b;Ec?b=a[Ec]:b=a.wa;return null==b?0:b}
function Hc(a){return Array.isArray(a)?!!(Gc(a)&1):!1}
function Ic(a){Fc(a,1);return a}
function Jc(a){return Array.isArray(a)?!!(Gc(a)&2):!1}
function Kc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");Fc(a,2)}
;function Lc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Mc,Nc=Object.freeze(Ic([]));function Oc(a){if(Jc(a.u))throw Error("Cannot mutate an immutable Message");}
var Pc="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Qc(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Rc(a){A.setTimeout(function(){throw a;},0)}
;function Sc(a,b,c){c=void 0===c?!1:c;if(Array.isArray(a))return new b(a);if(c)return new b}
;function Tc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(Ac&&null!=a&&a instanceof Uint8Array)return zc(a);if(a instanceof Dc){var b=a.Na;null!=b&&"string"!==typeof b&&(Ac&&b instanceof Uint8Array?b=zc(b):(Na(b),b=null));return(a.Na=b)||""}}}return a}
;function Uc(a,b){b=void 0===b?Vc:b;return Wc(a,b)}
function Xc(a,b){if(null!=a){if(Array.isArray(a))a=Wc(a,b);else if(Lc(a)){var c={},d;for(d in a)c[d]=Xc(a[d],b);a=c}else a=b(a);return a}}
function Wc(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=Xc(c[d],b);Hc(a)&&Ic(c);return c}
function Yc(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Tc(a);return Array.isArray(a)?Uc(a,Yc):a}
function Vc(a){return Ac&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function Zc(a){return a.j||(a.j=a.u[a.l+a.Z]={})}
function $c(a,b,c){return-1===b?null:b>=a.l?a.j?a.j[b]:void 0:(void 0===c?0:c)&&a.j&&(c=a.j[b],null!=c)?c:a.u[b+a.Z]}
function G(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Oc(a);b<a.l&&!d?a.u[b+a.Z]=c:Zc(a)[b]=c;return a}
function ad(a,b,c,d){c=void 0===c?!0:c;var e=$c(a,b,d);null==e&&(e=Nc);if(Jc(a.u))c&&(Kc(e),Object.freeze(e));else if(e===Nc||Jc(e))e=Ic(e.slice()),G(a,b,e,d);return e}
function bd(a,b,c,d){Oc(a);(c=cd(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),G(a,c));return G(a,b,d)}
function cd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=$c(a,e)&&(0!==c&&G(a,c,void 0,!1,!0),c=e)}return c}
function dd(a,b,c,d,e){e=void 0===e?!1:e;var f=e;if(-1===c)d=null;else{a.i||(a.i={});var g=a.i[c];if(g)d=g;else{var h=$c(a,c,f);b=Sc(h,b,d);void 0==b?d=g:(d&&b.u!==h&&G(a,c,b.u,f,!0),a.i[c]=b,Jc(a.u)&&Kc(b.u),d=b)}}if(null==d)return d;Jc(d.u)&&!Jc(a.u)&&(d=d.Ma(Zb),G(a,c,d.u,e),a.i[c]=d);return d}
function ed(a,b,c,d){a.i||(a.i={});var e=Jc(a.u),f=a.i[c];if(!f){d=ad(a,c,!0,d);f=[];e=e||Jc(d);for(var g=0;g<d.length;g++){var h=Sc(d[g],b);void 0!==h&&(f.push(h),e&&Kc(h.u))}e&&(Kc(f),Object.freeze(f));a.i[c]=f}return f}
function H(a,b,c){Oc(a);a.i||(a.i={});var d=null!=c?c.u:c;a.i[b]=c;return G(a,b,d)}
function fd(a,b,c,d){Oc(a);a.i||(a.i={});var e=null!=d?d.u:d;a.i[b]=d;bd(a,b,c,e)}
function gd(a,b,c){Oc(a);if(c){var d=Ic([]);for(var e=0;e<c.length;e++)d[e]=c[e].u;a.i||(a.i={});a.i[b]=c}else a.i&&(a.i[b]=void 0),d=Nc;return G(a,b,d)}
function hd(a,b,c,d){Oc(a);var e=ed(a,c,b);c=null!=d?d:new c;a=ad(a,b);e.push(c);a.push(c.u)}
function id(a,b){a=$c(a,b);return null==a?"":a}
;function jd(a,b,c){a||(a=kd);kd=null;var d=this.constructor.j;a||(a=d?[d]:[]);this.Z=(d?0:-1)-(this.constructor.i||0);this.i=void 0;this.u=a;a:{d=this.u.length;a=d-1;if(d&&(d=this.u[a],Lc(d))){this.l=a-this.Z;this.j=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.Z),this.j=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.Z,(d=this.u[a])?Array.isArray(d)&&Ic(d):this.u[a]=Nc;else{d=Zc(this);var e=d[a];e?Array.isArray(e)&&Ic(e):d[a]=Nc}}
jd.prototype.toJSON=function(){var a=this.u;return Mc?a:Uc(a,Yc)};
function ld(a){Mc=!0;try{return JSON.stringify(a.toJSON(),md)}finally{Mc=!1}}
jd.prototype.clone=function(){var a=Uc(this.u);kd=a;a=new this.constructor(a);kd=null;nd(a,this);return a};
jd.prototype.isMutable=function(a){$b(a);return!Jc(this.u)};
jd.prototype.toString=function(){return this.u.toString()};
function md(a,b){return Tc(b)}
function nd(a,b){b.ia&&(a.ia=b.ia.slice());var c=b.i;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length){var h=a,k=f;k=void 0===k?!1:k;f=ed(h,e[0].constructor,g,k);var l=Jc(h.u);g=$c(h,g,k);for(h=0;h<f.length;h++)(k=f[h])&&Jc(k.u)&&!l&&(f[h]=f[h].Ma(Zb),g[h]=f[h].u);for(l=0;l<Math.min(f.length,e.length);l++)nd(f[l],e[l])}}else(f=dd(a,e.constructor,g,void 0,f))&&nd(f,e)}}}}
var kd;function od(){jd.apply(this,arguments)}
u(od,jd);od.prototype.Ma=function(){return this};
if(Pc){var pd={};Object.defineProperties(od,(pd[Symbol.hasInstance]=Qc(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),pd))};function qd(a,b,c,d,e,f){(a=a.i&&a.i[c])?Array.isArray(a)?(e=f.Ca?Ic(a.slice()):a,gd(b,c,e)):H(b,c,a):(Ac&&d instanceof Uint8Array?e=d.length?new Dc(new Uint8Array(d)):Cc||(Cc=new Dc(null)):(Array.isArray(d)&&(e?Kc(d):Hc(d)&&f.Ca&&(d=d.slice())),e=d),G(b,c,e))}
;function I(){od.apply(this,arguments)}
u(I,od);I.prototype.Ma=function(a){$b(a);if(Jc(this.u)){a={Ca:!0};var b=Jc(this.u);if(b&&!a.Ca)throw Error("copyRepeatedFields must be true for frozen messages");var c=new this.constructor;this.ia&&(c.ia=this.ia.slice());for(var d=this.u,e=0;e<d.length;e++){var f=d[e];if(e===d.length-1&&Lc(f))for(h in f){var g=+h;Number.isNaN(g)?Zc(c)[h]=f[h]:qd(this,c,g,f[h],b,a)}else qd(this,c,e-this.Z,f,b,a)}var h=c}else h=this;return h};
if(Pc){var rd={};Object.defineProperties(I,(rd[Symbol.hasInstance]=Qc(Object[Symbol.hasInstance]),rd))};var sd=window;xb("csi.gstatic.com");xb("googleads.g.doubleclick.net");xb("partner.googleadservices.com");xb("pubads.g.doubleclick.net");xb("securepubads.g.doubleclick.net");xb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var td={};function ud(){}
function vd(a){this.i=a}
u(vd,ud);vd.prototype.toString=function(){return this.i};
var wd=new vd("about:invalid#zTSz",td);function xd(a){if(a instanceof ud)if(a instanceof vd)a=a.i;else throw Error("");else a instanceof Hb&&a.constructor===Hb?a=a.i:(Na(a),a="type_error:SafeUrl");return a}
;function Ad(a,b){a.removeAttribute("srcdoc");a.src=xd(b);for(b="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");0<a.sandbox.length;)a.sandbox.remove(a.sandbox.item(0));for(var c=0;c<b.length;c++)a.sandbox.supports&&!a.sandbox.supports(b[c])||a.sandbox.add(b[c])}
;function Bd(a,b){this.width=a;this.height=b}
n=Bd.prototype;n.clone=function(){return new Bd(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Cd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Dd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Ed(a){var b=Fd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Gd(){var a=[];Ed(function(b){a.push(b)});
return a}
var Fd={Cb:"allow-forms",Db:"allow-modals",Eb:"allow-orientation-lock",Fb:"allow-pointer-lock",Gb:"allow-popups",Hb:"allow-popups-to-escape-sandbox",Ib:"allow-presentation",Jb:"allow-same-origin",Kb:"allow-scripts",Lb:"allow-top-navigation",Mb:"allow-top-navigation-by-user-activation"},Hd=bb(function(){return Gd()});
function Id(){var a=Jd(),b={};D(Hd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Jd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Kd(a){this.isValid=a}
function Ld(a){return new Kd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Md=[Ld("data"),Ld("http"),Ld("https"),Ld("mailto"),Ld("ftp"),new Kd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Nd(a,b){b=void 0===b?Md:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Kd&&d.isValid(a))return new vd(a,td)}}
function Od(a){var b=void 0===b?Md:b;return Nd(a,b)||wd}
;var Pd=(new Date).getTime();var Qd=new function(a,b){this.flag=a;this.defaultValue=void 0===b?!1:b}(434462125,!0);function Rd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var Sd="client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(Sd);function Td(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(q){for(var w=g,p=0;64>p;p+=4)w[p/4]=q[p]<<24|q[p+1]<<16|q[p+2]<<8|q[p+3];for(p=16;80>p;p++)q=w[p-3]^w[p-8]^w[p-14]^w[p-16],w[p]=(q<<1|q>>>31)&4294967295;q=e[0];var y=e[1],z=e[2],F=e[3],K=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var M=F^y&(z^F);var P=1518500249}else M=y^z^F,P=1859775393;else 60>p?(M=y&z|F&(y|z),P=2400959708):(M=y^z^F,P=3395469782);M=((q<<5|q>>>27)&4294967295)+M+K+P+w[p]&4294967295;K=F;F=z;z=(y<<30|y>>>2)&4294967295;y=q;q=M}e[0]=e[0]+q&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+K&4294967295}
function c(q,w){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var p=[],y=0,z=q.length;y<z;++y)p.push(q.charCodeAt(y));q=p}w||(w=q.length);p=0;if(0==l)for(;p+64<w;)b(q.slice(p,p+64)),p+=64,m+=64;for(;p<w;)if(f[l++]=q[p++],m++,64==l)for(l=0,b(f);p+64<w;)b(q.slice(p,p+64)),p+=64,m+=64}
function d(){var q=[],w=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=w&255,w>>>=8;b(f);for(p=w=0;5>p;p++)for(var y=24;0<=y;y-=8)q[w++]=e[p]>>y&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,pb:function(){for(var q=d(),w="",p=0;p<q.length;p++)w+="0123456789ABCDEF".charAt(Math.floor(q[p]/16))+"0123456789ABCDEF".charAt(q[p]%16);return w}}}
;function Ud(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,Vd(Rd(d),a,c||null)].join(" "):null}
function Vd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],D(d,function(h){e.push(h)}),Wd(e.join(" "));
var f=[],g=[];D(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(h){e.push(h)});
a=Wd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Wd(a){var b=Td();b.update(a);return b.pb().toLowerCase()}
;var Xd={};function Yd(a){this.i=a||{cookie:""}}
n=Yd.prototype;n.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Ga:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Yb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ga}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=zb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ga:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.i.cookie};
n.clear=function(){for(var a=(this.i.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=zb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Zd=new Yd("undefined"==typeof document?null:document);function $d(a){return!!Xd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function ae(a,b,c,d){(a=A[a])||(a=(new Yd(document)).get(b));return a?Ud(a,c,d):null}
function be(a){var b=void 0===b?!1:b;var c=Rd(String(A.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;$d(e)&&(f=f||A.__1PSAPISID);if(f)e=!0;else{var g=new Yd(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");$d(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?A.__SAPISID:A.__APISID,e||(e=new Yd(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Ud(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&$d(b)&&((b=ae("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=ae("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function ce(){this.o=this.o;this.A=this.A}
ce.prototype.o=!1;ce.prototype.dispose=function(){this.o||(this.o=!0,this.ha())};
ce.prototype.ha=function(){if(this.A)for(;this.A.length;)this.A.shift()()};function de(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
de.prototype.stopPropagation=function(){this.l=!0};
de.prototype.preventDefault=function(){this.defaultPrevented=!0};function ee(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=fe(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ge[c])c=ge[c];else{c=String(c);if(!ge[c]){var f=/function\s+([^\(]+)/m.exec(c);ge[c]=f?f[1]:"[Anonymous]"}c=ge[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function fe(a,b){b||(b={});b[he(a)]=!0;var c=a.stack||"";(a=a.nb)&&!b[he(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=fe(a,b));return c}
function he(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ge={};var ie=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",function(){},b),A.removeEventListener("test",function(){},b)}catch(c){}return a}();function je(a,b){de.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
Xa(je,de);var ke={2:"touch",3:"pen",4:"mouse"};
je.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(fc){a:{try{bc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ke[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&je.O.preventDefault.call(this)};
je.prototype.stopPropagation=function(){je.O.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
je.prototype.preventDefault=function(){je.O.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var le="closure_listenable_"+(1E6*Math.random()|0);var me=0;function ne(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.va=e;this.key=++me;this.ka=this.qa=!1}
function oe(a){a.ka=!0;a.listener=null;a.proxy=null;a.src=null;a.va=null}
;function pe(a){this.src=a;this.listeners={};this.i=0}
pe.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=qe(a,b,d,e);-1<g?(b=a[g],c||(b.qa=!1)):(b=new ne(b,this.src,f,!!d,e),b.qa=c,a.push(b));return b};
pe.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=qe(e,b,c,d);return-1<b?(oe(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function re(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(oe(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function qe(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ka&&f.listener==b&&f.capture==!!c&&f.va==d)return e}return-1}
;var se="closure_lm_"+(1E6*Math.random()|0),te={},ue=0;function ve(a,b,c,d,e){if(d&&d.once)we(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ve(a,b[f],c,d,e);else c=xe(c),a&&a[le]?a.S(b,c,Pa(d)?!!d.capture:!!d,e):ye(a,b,c,!1,d,e)}
function ye(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=ze(a);h||(a[se]=h=new pe(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ae();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ie||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Be(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ue++}}
function Ae(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ce;return a}
function we(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)we(a,b[f],c,d,e);else c=xe(c),a&&a[le]?a.l.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):ye(a,b,c,!0,d,e)}
function De(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)De(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=xe(c),a&&a[le])?a.l.remove(String(b),c,d,e):a&&(a=ze(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=qe(b,c,d,e)),(c=-1<a?b[a]:null)&&Ee(c))}
function Ee(a){if("number"!==typeof a&&a&&!a.ka){var b=a.src;if(b&&b[le])re(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Be(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ue--;(c=ze(b))?(re(c,a),0==c.i&&(c.src=null,b[se]=null)):oe(a)}}}
function Be(a){return a in te?te[a]:te[a]="on"+a}
function Ce(a,b){if(a.ka)a=!0;else{b=new je(b,this);var c=a.listener,d=a.va||a.src;a.qa&&Ee(a);a=c.call(d,b)}return a}
function ze(a){a=a[se];return a instanceof pe?a:null}
var Fe="__closure_events_fn_"+(1E9*Math.random()>>>0);function xe(a){if("function"===typeof a)return a;a[Fe]||(a[Fe]=function(b){return a.handleEvent(b)});
return a[Fe]}
;function J(){ce.call(this);this.l=new pe(this);this.Aa=this;this.J=null}
Xa(J,ce);J.prototype[le]=!0;J.prototype.addEventListener=function(a,b,c,d){ve(this,a,b,c,d)};
J.prototype.removeEventListener=function(a,b,c,d){De(this,a,b,c,d)};
function Ge(a,b){var c=a.J;if(c){var d=[];for(var e=1;c;c=c.J)d.push(c),++e}a=a.Aa;c=b.type||b;"string"===typeof b?b=new de(b,a):b instanceof de?b.target=b.target||a:(e=b,b=new de(c,a),ub(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=He(g,c,!0,b)&&e}b.l||(g=b.i=a,e=He(g,c,!0,b)&&e,b.l||(e=He(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=He(g,c,!1,b)&&e}
J.prototype.ha=function(){J.O.ha.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,oe(d[e]);delete a.listeners[c];a.i--}}this.J=null};
J.prototype.S=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
function He(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ka&&g.capture==c){var h=g.listener,k=g.va||g.src;g.qa&&re(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ie(a){J.call(this);var b=this;this.D=this.j=0;this.K=null!=a?a:{M:function(e,f){return setTimeout(e,f)},
aa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return x(function(e){return v(e,Je(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.D||Ke(this)}
u(Ie,J);function Le(){var a=Me;Ie.i||(Ie.i=new Ie(a));return Ie.i}
Ie.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.K.aa(this.D);delete Ie.i};
Ie.prototype.G=function(){return this.i};
function Ke(a){a.D=a.K.M(function(){var b;return x(function(c){if(1==c.i)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.s(3):v(c,Je(a),3):v(c,Je(a),3);Ke(a);c.i=0})},3E4)}
function Je(a,b){return a.v?a.v:a.v=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,xa(h,2,3),d&&(a.j=a.K.M(function(){d.abort()},b||2E4)),v(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Aa(h);a.v=void 0;a.j&&(a.K.aa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?Ge(a,"networkstatus-online"):Ge(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:za(h),g=!1,h.s(3)}})})}
;function Ne(){this.data_=[];this.i=-1}
Ne.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
Ne.prototype.get=function(a){return!!this.data_[a]};
function Oe(a){-1===a.i&&(a.i=db(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function Pe(){var a=Qe,b="Fa";if(a.Fa&&a.hasOwnProperty(b))return a.Fa;var c=new a;a.Fa=c;a.hasOwnProperty(b);return c}
;function Qe(){var a={};this.C=function(b,c){return null!=a[b]?a[b]:c}}
;function Re(a){I.call(this,a,-1,Se)}
u(Re,I);function Te(a,b){return G(a,2,b)}
function Ue(a,b){return G(a,3,b)}
function Ve(a,b){return G(a,4,b)}
function We(a,b){return G(a,5,b)}
function Xe(a,b){return G(a,9,b)}
function Ye(a,b){return gd(a,10,b)}
function Ze(a,b){return G(a,11,b)}
function $e(a,b){return G(a,1,b)}
function af(a){I.call(this,a)}
u(af,I);var Se=[10,6];var bf="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function cf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function df(a){var b,c;if("function"!==typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues))return null;var d=cf(a);if(d.uach_promise)return d.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(bf).then(function(e){null!=d.uach||(d.uach=e);return e});
return d.uach_promise=a}
function ef(a){var b;return Ze(Ye(Xe(We(Ve(Ue(Te($e(new Re,a.platform||""),a.platformVersion||""),a.architecture||""),a.model||""),a.uaFullVersion||""),a.bitness||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new af;d=G(d,1,c.brand);return G(d,2,c.version)}))||[]),a.wow64||!1)}
function ff(){var a=window;if(Pe().C(Qd.flag,Qd.defaultValue)){var b,c;return null!=(c=null==(b=df(a))?void 0:b.then(function(g){return ef(g)}))?c:null}var d,e;
if("function"!==typeof(null==(d=a.navigator)?void 0:null==(e=d.userAgentData)?void 0:e.getHighEntropyValues))return null;var f;return null!=(f=a.navigator.userAgentData.getHighEntropyValues(bf).then(function(g){return ef(g)}))?f:null}
;function gf(a,b){this.l=a;this.o=b;this.j=0;this.i=null}
gf.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function hf(a,b){a.o(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;var jf;function kf(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=Cd();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Qa;c.Qa=null;e()}};
return function(e){d.next={Qa:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function lf(){this.j=this.i=null}
lf.prototype.add=function(a,b){var c=mf.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
lf.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var mf=new gf(function(){return new nf},function(a){return a.reset()});
function nf(){this.next=this.scope=this.i=null}
nf.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
nf.prototype.reset=function(){this.next=this.scope=this.i=null};var of,pf=!1,qf=new lf;function rf(a,b){of||Pf();pf||(of(),pf=!0);qf.add(a,b)}
function Pf(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);of=function(){a.then(Qf)}}else of=function(){var b=Qf;
"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&!E("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(jf||(jf=kf()),jf(b)):A.setImmediate(b)}}
function Qf(){for(var a;a=qf.remove();){try{a.i.call(a.scope)}catch(b){Rc(b)}hf(mf,a)}pf=!1}
;function Rf(a,b){this.i=a[A.Symbol.iterator]();this.j=b}
Rf.prototype[Symbol.iterator]=function(){return this};
Rf.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function Sf(a,b){return new Rf(a,b)}
;function Tf(){this.blockSize=-1}
;function Uf(){this.blockSize=-1;this.blockSize=64;this.i=[];this.m=[];this.A=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.o=this.j=0;this.reset()}
Xa(Uf,Tf);Uf.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.o=this.j=0};
function Vf(a,b,c){c||(c=0);var d=a.A;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
Uf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.j;d<b;){if(0==f)for(;d<=c;)Vf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Vf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Vf(this,e);f=0;break}}this.j=f;this.o+=b}};
Uf.prototype.digest=function(){var a=[],b=8*this.o;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;Vf(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function Wf(){}
Wf.prototype.next=function(){return Xf};
var Xf={done:!0,value:void 0};function Yf(a){return{value:a,done:!1}}
Wf.prototype.L=function(){return this};function Zf(a){if(a instanceof $f||a instanceof ag||a instanceof bg)return a;if("function"==typeof a.next)return new $f(function(){return a});
if("function"==typeof a[Symbol.iterator])return new $f(function(){return a[Symbol.iterator]()});
if("function"==typeof a.L)return new $f(function(){return a.L()});
throw Error("Not an iterator or iterable.");}
function $f(a){this.j=a}
$f.prototype.L=function(){return new ag(this.j())};
$f.prototype[Symbol.iterator]=function(){return new bg(this.j())};
$f.prototype.i=function(){return new bg(this.j())};
function ag(a){this.j=a}
u(ag,Wf);ag.prototype.next=function(){return this.j.next()};
ag.prototype[Symbol.iterator]=function(){return new bg(this.j)};
ag.prototype.i=function(){return new bg(this.j)};
function bg(a){$f.call(this,function(){return a});
this.l=a}
u(bg,$f);bg.prototype.next=function(){return this.l.next()};function cg(a,b){this.j={};this.i=[];this.l=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof cg)for(c=dg(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function dg(a){eg(a);return a.i.concat()}
n=cg.prototype;n.has=function(a){return fg(this.j,a)};
n.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||gg;eg(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function gg(a,b){return a===b}
n.isEmpty=function(){return 0==this.size};
n.clear=function(){this.j={};this.l=this.size=this.i.length=0};
n.remove=function(a){return this.delete(a)};
n.delete=function(a){return fg(this.j,a)?(delete this.j[a],--this.size,this.l++,this.i.length>2*this.size&&eg(this),!0):!1};
function eg(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];fg(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],fg(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
n.get=function(a,b){return fg(this.j,a)?this.j[a]:b};
n.set=function(a,b){fg(this.j,a)||(this.size+=1,this.i.push(a),this.l++);this.j[a]=b};
n.forEach=function(a,b){for(var c=dg(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new cg(this)};
n.keys=function(){return Zf(this.L(!0)).i()};
n.values=function(){return Zf(this.L(!1)).i()};
n.entries=function(){var a=this;return Sf(this.keys(),function(b){return[b,a.get(b)]})};
n.L=function(a){eg(this);var b=0,c=this.l,d=this,e=new Wf;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return Xf;var f=d.i[b++];return Yf(a?f:d.j[f])};
return e};
function fg(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var hg=A.JSON.stringify;function ig(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function jg(a){this.i=0;this.v=void 0;this.o=this.j=this.l=null;this.m=this.A=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){kg(b,2,c)},function(c){kg(b,3,c)})}catch(c){kg(this,3,c)}}
function lg(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
lg.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var mg=new gf(function(){return new lg},function(a){a.reset()});
function ng(a,b,c){var d=mg.get();d.j=a;d.onRejected=b;d.context=c;return d}
jg.prototype.then=function(a,b,c){return og(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
jg.prototype.$goog_Thenable=!0;jg.prototype.cancel=function(a){if(0==this.i){var b=new pg(a);rf(function(){qg(this,b)},this)}};
function qg(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?qg(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):rg(c),sg(c,e,3,b)))}a.l=null}else kg(a,3,b)}
function tg(a,b){a.j||2!=a.i&&3!=a.i||ug(a);a.o?a.o.next=b:a.j=b;a.o=b}
function og(a,b,c,d){var e=ng(null,null,null);e.i=new jg(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof pg?g(h):f(k)}catch(l){g(l)}}:g});
e.i.l=a;tg(a,e);return e.i}
jg.prototype.J=function(a){this.i=0;kg(this,2,a)};
jg.prototype.P=function(a){this.i=0;kg(this,3,a)};
function kg(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.J,f=a.P;if(d instanceof jg){tg(d,ng(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if("function"===typeof k){vg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.v=c,a.i=b,a.l=null,ug(a),3!=b||c instanceof pg||wg(a,c))}}
function vg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ug(a){a.A||(a.A=!0,rf(a.D,a))}
function rg(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.o=null);return b}
jg.prototype.D=function(){for(var a;a=rg(this);)sg(this,a,this.i,this.v);this.A=!1};
function sg(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.m;a=a.l)a.m=!1;if(b.i)b.i.l=null,xg(b,c,d);else try{b.l?b.j.call(b.context):xg(b,c,d)}catch(e){yg.call(null,e)}hf(mg,b)}
function xg(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function wg(a,b){a.m=!0;rf(function(){a.m&&yg.call(null,b)})}
var yg=Rc;function pg(a){Za.call(this,a)}
Xa(pg,Za);pg.prototype.name="cancel";function L(a){ce.call(this);this.v=1;this.l=[];this.m=0;this.i=[];this.j={};this.D=!!a}
Xa(L,ce);n=L.prototype;n.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.v;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.v=e+3;d.push(e);return e};
function zg(a,b,c){var d=Ag;if(a=d.j[a]){var e=d.i;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.na(a)}}
n.na=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&eb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
n.ea=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.D)for(e=0;e<c.length;e++){var g=c[e];Bg(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.o;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.na(c)}}return 0!=e}return!1};
function Bg(a,b,c){rf(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.na,this),delete this.j[a])}else this.i.length=0,this.j={}};
n.ha=function(){L.O.ha.call(this);this.clear();this.l.length=0};function Cg(a){this.i=a}
Cg.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,hg(b))};
Cg.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Cg.prototype.remove=function(a){this.i.remove(a)};function Dg(a){this.i=a}
Xa(Dg,Cg);function Eg(a){this.data=a}
function Fg(a){return void 0===a||a instanceof Eg?a:new Eg(a)}
Dg.prototype.set=function(a,b){Dg.O.set.call(this,a,Fg(b))};
Dg.prototype.j=function(a){a=Dg.O.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Dg.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Gg(a){this.i=a}
Xa(Gg,Dg);Gg.prototype.set=function(a,b,c){if(b=Fg(b)){if(c){if(c<Date.now()){Gg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Gg.O.set.call(this,a,b)};
Gg.prototype.j=function(a){var b=Gg.O.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Gg.prototype.remove.call(this,a);else return b}};function Hg(){}
;function Ig(){}
Xa(Ig,Hg);Ig.prototype[Symbol.iterator]=function(){return Zf(this.L(!0)).i()};
Ig.prototype.clear=function(){var a=Array.from(this);a=t(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Jg(a){this.i=a}
Xa(Jg,Ig);n=Jg.prototype;n.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeItem(a)};
n.L=function(a){var b=0,c=this.i,d=new Wf;d.next=function(){if(b>=c.length)return Xf;var e=c.key(b++);if(a)return Yf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Yf(e)};
return d};
n.clear=function(){this.i.clear()};
n.key=function(a){return this.i.key(a)};function Kg(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
Xa(Kg,Jg);function Lg(a,b){this.j=a;this.i=null;var c;if(c=dc)c=!(9<=Number(qc));if(c){Mg||(Mg=new cg);this.i=Mg.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),Mg.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
Xa(Lg,Ig);var Ng={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Mg=null;function Og(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ng[b]})}
n=Lg.prototype;n.isAvailable=function(){return!!this.i};
n.set=function(a,b){this.i.setAttribute(Og(a),b);Pg(this)};
n.get=function(a){a=this.i.getAttribute(Og(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeAttribute(Og(a));Pg(this)};
n.L=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new Wf;d.next=function(){if(b>=c.length)return Xf;var e=c[b++];if(a)return Yf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Yf(e)};
return d};
n.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Pg(this)};
function Pg(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Qg(a,b){this.j=a;this.i=b+"::"}
Xa(Qg,Ig);Qg.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Qg.prototype.get=function(a){return this.j.get(this.i+a)};
Qg.prototype.remove=function(a){this.j.remove(this.i+a)};
Qg.prototype.L=function(a){var b=this.j[Symbol.iterator](),c=this,d=new Wf;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return Yf(a?e.slice(c.i.length):c.j.get(e))};
return d};function Rg(a){I.call(this,a)}
u(Rg,I);Rg.prototype.getKey=function(){return $c(this,1)};
Rg.prototype.X=function(){return $c(this,2===cd(this,Sg)?2:-1)};
Rg.prototype.setValue=function(a){return bd(this,2,Sg,a)};
var Sg=[2,3,4,5,6];function Tg(a){I.call(this,a)}
u(Tg,I);function Ug(a){I.call(this,a)}
u(Ug,I);function Vg(a){I.call(this,a,-1,Wg)}
u(Vg,I);Vg.prototype.getPlayerType=function(){return $c(this,36)};
Vg.prototype.setHomeGroupInfo=function(a){return H(this,81,a)};
var Wg=[9,66,24,32,86,100,101];function Xg(a){I.call(this,a,-1,Yg)}
u(Xg,I);var Yg=[15,26,28];function Zg(a){I.call(this,a)}
u(Zg,I);Zg.prototype.setToken=function(a){return G(this,2,a)};function $g(a){I.call(this,a,-1,ah)}
u($g,I);$g.prototype.setSafetyMode=function(a){return G(this,5,a)};
var ah=[12];function bh(a){I.call(this,a,-1,ch)}
u(bh,I);var ch=[12];function dh(a){I.call(this,a,-1,eh)}
u(dh,I);function fh(a){I.call(this,a)}
u(fh,I);fh.prototype.getKey=function(){return id(this,1)};
fh.prototype.X=function(){return id(this,2)};
fh.prototype.setValue=function(a){return G(this,2,a)};
var eh=[4,5];function gh(a){I.call(this,a)}
u(gh,I);function hh(a){I.call(this,a)}
u(hh,I);var ih=[2,3,4];function jh(a){I.call(this,a)}
u(jh,I);function kh(a){I.call(this,a)}
u(kh,I);function lh(a){I.call(this,a)}
u(lh,I);function mh(a){I.call(this,a,-1,nh)}
u(mh,I);var nh=[10,17];function oh(a){I.call(this,a)}
u(oh,I);function ph(a){I.call(this,a)}
u(ph,I);function qh(a){I.call(this,a)}
u(qh,I);function rh(a){I.call(this,a,432)}
u(rh,I);
var sh=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,
378,380,381,388,389,403,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117];function th(a){I.call(this,a)}
u(th,I);function uh(a){I.call(this,a)}
u(uh,I);uh.prototype.setVideoId=function(a){return bd(this,1,vh,a)};
uh.prototype.getPlaylistId=function(){return $c(this,2===cd(this,vh)?2:-1)};
var vh=[1,2];function wh(a){I.call(this,a,-1,xh)}
u(wh,I);var xh=[3];var yh=A.window,zh,Ah,Bh=(null==yh?void 0:null==(zh=yh.yt)?void 0:zh.config_)||(null==yh?void 0:null==(Ah=yh.ytcfg)?void 0:Ah.data_)||{};C("yt.config_",Bh);function Ch(){var a=arguments;1<a.length?Bh[a[0]]=a[1]:1===a.length&&Object.assign(Bh,a[0])}
function N(a,b){return a in Bh?Bh[a]:b}
function Dh(){return N("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Eh(){var a=Bh.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Fh=[];function Gh(a){Fh.forEach(function(b){return b(a)})}
function Hh(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ih(b)}}:a}
function Ih(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=N("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Ch("ERRORS",e));Gh(a)}
function Jh(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=N("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Ch("ERRORS",e))}
;var Kh=0;C("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Kh});var Lh={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Mh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Lh||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Mh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Mh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Mh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=A.ytEventsEventsListeners||{};C("ytEventsEventsListeners",lb);var Nh=A.ytEventsEventsCounter||{count:0};C("ytEventsEventsCounter",Nh);
function Oh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return kb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Ph(a){a&&("string"==typeof a&&(a=[a]),D(a,function(b){if(b in lb){var c=lb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Qh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[b]}}))}
var Qh=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Rh(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Oh(a,b,c,d);if(!e){e=++Nh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Mh(h);if(!Dd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Mh(h);
h.currentTarget=a;return c.call(a,h)};
g=Hh(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Qh()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d]}}}
;function Sh(a,b){"function"===typeof a&&(a=Hh(a));return window.setTimeout(a,b)}
function Th(a){"function"===typeof a&&(a=Hh(a));return window.setInterval(a,250)}
;var Uh=/^[\w.]*$/,Vh={q:!0,search_query:!0};function Wh(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Xh(f[0]||""),h=Xh(f[1]||"");g in c?Array.isArray(c[g])?ib(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(q){var k=q,l=f[0],m=String(Wh);k.args=[{key:l,value:f[1],query:a,method:Yh==m?"unchanged":m}];Vh.hasOwnProperty(l)||Jh(k)}}return c}
var Yh=String(Wh);function Zh(a){var b=[];jb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];D(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function $h(a){"?"==a.charAt(0)&&(a=a.substr(1));return Wh(a,"&")}
function ai(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=$h(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Wb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function bi(a){if(!b)var b=window.location.href;var c=a.match(Rb)[1]||null,d=Tb(a);c&&d?(a=a.match(Rb),b=b.match(Rb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Tb(b)==d&&(Number(b.match(Rb)[4]||null)||null)==(Number(a.match(Rb)[4]||null)||null):!0;return a}
function Xh(a){return a&&a.match(Uh)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function O(a){a=ci(a);return"string"===typeof a&&"false"===a?!1:!!a}
function di(a,b){a=ci(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ci(a){var b=N("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:N("EXPERIMENT_FLAGS",{})[a]}
function ei(){var a=[],b=N("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=N("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function fi(a){var b=gi;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Pd;e.flash="0";a:{try{var f=b.i.top.location.href}catch(X){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?sd:g;try{var h=g.history.length}catch(X){h=0}e.u_his=h;var k;e.u_h=null==(k=sd.screen)?void 0:k.height;var l;e.u_w=null==(l=sd.screen)?void 0:l.width;var m;e.u_ah=null==(m=sd.screen)?void 0:m.availHeight;var q;e.u_aw=null==
(q=sd.screen)?void 0:q.availWidth;var w;e.u_cd=null==(w=sd.screen)?void 0:w.colorDepth}catch(X){}h=b.i;try{var p=h.screenX;var y=h.screenY}catch(X){}try{var z=h.outerWidth;var F=h.outerHeight}catch(X){}try{var K=h.innerWidth;var M=h.innerHeight}catch(X){}try{var P=h.screenLeft;var hb=h.screenTop}catch(X){}try{K=h.innerWidth,M=h.innerHeight}catch(X){}try{var kc=h.screen.availWidth;var wa=h.screen.availTop}catch(X){}p=[P,hb,p,y,kc,wa,z,F,K,M];y=b.i.top;try{var na=(y||window).document,Y="CSS1Compat"==
na.compatMode?na.documentElement:na.body;var ca=(new Bd(Y.clientWidth,Y.clientHeight)).round()}catch(X){ca=new Bd(-12245933,-12245933)}na=ca;ca={};var da=void 0===da?A:da;Y=new Ne;da.SVGElement&&da.document.createElementNS&&Y.set(0);y=Id();y["allow-top-navigation-by-user-activation"]&&Y.set(1);y["allow-popups-to-escape-sandbox"]&&Y.set(2);da.crypto&&da.crypto.subtle&&Y.set(3);da.TextDecoder&&da.TextEncoder&&Y.set(4);da=Oe(Y);ca.bc=da;ca.bih=na.height;ca.biw=na.width;ca.brdim=p.join();b=b.j;b=(ca.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ca.wgl=!!sd.WebGLRenderingContext,ca);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var gi=new function(){var a=window.document;this.i=window;this.j=a};
C("yt.ads_.signals_.getAdSignalsString",function(a){return Zh(fi(a))});Date.now();var hi="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function ii(){if(!hi)return null;var a=hi();return"open"in a?a:null}
;var ji={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ki="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Sd)),li=!1;
function mi(a,b){b=void 0===b?{}:b;var c=bi(a),d=O("web_ajax_ignore_global_headers_if_set"),e;for(e in ji){var f=N(ji[e]);O("enable_visitor_header_for_vss")&&"X-Goog-Visitor-Id"===e&&!f&&(f=N("VISITOR_DATA"));!f||!c&&Tb(a)||d&&void 0!==b[e]||!O("enable_web_eom_visitor_data")&&"X-Goog-EOM-Visitor-Id"===e||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Tb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Tb(a)){try{var g=
(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!Tb(a))b["X-YouTube-Ad-Signals"]=Zh(fi());return b}
function ni(a){var b=window.location.search,c=Tb(a);O("debug_handle_relative_url_for_query_forward_killswitch")||c||!bi(a)||(c=document.location.hostname);var d=Sb(a.match(Rb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=$h(b),f={};D(ki,function(g){e[g]&&(f[g]=e[g])});
return ai(a,f||{},!1)}
function oi(a,b){var c=b.format||"JSON";a=pi(a,b);var d=qi(a,b),e=!1,f=ri(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,q=400<=k.status&&500>k.status,w=500<=k.status&&600>k.status;if(l||q||w)m=si(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};q=b.context||A;l?b.onSuccess&&b.onSuccess.call(q,k,m):b.onError&&b.onError.call(q,k,m);b.onFinish&&b.onFinish.call(q,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Sh(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},d)}}
function pi(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=N("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=ai(a,b||{},!0);return a}
function qi(a,b){var c=N("XSRF_FIELD_NAME"),d=N("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=N("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Tb(a)&&!b.withCredentials&&Tb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=$h(e),ub(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Wb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;
break a}f=!0}a=!f}!li&&a&&"POST"!=b.method&&(li=!0,Ih(Error("AJAX request with postData should use POST")));return e}
function si(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Jh(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?ti(a):null)e={},D(a.getElementsByTagName("*"),function(g){e[g.tagName]=ui(g)})}d&&vi(e);
return e}
function vi(a){if(Pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;xb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b];if(void 0===vb){var e=null;var f=A.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(g){A.console&&A.console.error(g.message)}vb=e}else vb=e}d=(e=vb)?e.createHTML(d):d;a[c]=new Mb(d)}else vi(a[b])}}
function ti(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ui(a){var b="";D(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ri(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Hh(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ii();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;O("debug_forward_web_query_parameters")&&(a=ni(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=mi(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var wi={Rb:"WEB_DISPLAY_MODE_UNKNOWN",Nb:"WEB_DISPLAY_MODE_BROWSER",Pb:"WEB_DISPLAY_MODE_MINIMAL_UI",Qb:"WEB_DISPLAY_MODE_STANDALONE",Ob:"WEB_DISPLAY_MODE_FULLSCREEN"};function xi(){if(!A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;C("ytglobal.prefsUserPrefsPrefs_",B("ytglobal.prefsUserPrefsPrefs_")||{});var yi={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},zi={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Ai={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Bi={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Ci(){var a=A.navigator;return a?a.connection:void 0}
;function Di(){return"INNERTUBE_API_KEY"in Bh&&"INNERTUBE_API_VERSION"in Bh}
function Ei(){return{innertubeApiKey:N("INNERTUBE_API_KEY"),innertubeApiVersion:N("INNERTUBE_API_VERSION"),Ea:N("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Va:N("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),sb:N("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:N("INNERTUBE_CONTEXT_CLIENT_VERSION"),Xa:N("INNERTUBE_CONTEXT_HL"),Wa:N("INNERTUBE_CONTEXT_GL"),tb:N("INNERTUBE_HOST_OVERRIDE")||"",vb:!!N("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ub:!!N("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:N("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Fi(a){var b={client:{hl:a.Xa,gl:a.Wa,clientName:a.Va,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ea}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=N("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=ei();0<c.length&&(b.request={internalExperimentFlags:c});Gi(a,void 0,b);Hi(void 0,b);Ii(a,void 0,b);Ji(void 0,b);N("DELEGATED_SESSION_ID")&&!O("pageid_as_header_web")&&
(b.user={onBehalfOfUser:N("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=t(Object.entries($h(N("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=t(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Ki(a){var b=new bh,c=new Vg;G(c,1,a.Xa);G(c,2,a.Wa);G(c,16,a.sb);G(c,17,a.innertubeContextClientVersion);if(a.Ea){var d=a.Ea,e=new Tg;d.coldConfigData&&G(e,1,d.coldConfigData);d.appInstallData&&G(e,6,d.appInstallData);d.coldHashData&&G(e,3,d.coldHashData);d.hotHashData&&G(e,5,d.hotHashData);H(c,62,e)}(d=A.devicePixelRatio)&&1!=d&&G(c,65,d);d=N("EXPERIMENTS_TOKEN","");""!==d&&G(c,54,d);d=ei();if(0<d.length){e=new Xg;for(var f=0;f<d.length;f++){var g=new Rg;G(g,1,d[f].key);g.setValue(d[f].value);
hd(e,15,Rg,g)}H(b,5,e)}Gi(a,c);Hi(c);Ii(a,c);Ji(c);N("DELEGATED_SESSION_ID")&&!O("pageid_as_header_web")&&(a=new $g,G(a,3,N("DELEGATED_SESSION_ID")));a=t(Object.entries($h(N("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=t(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?G(c,12,e):"cmodel"===d?G(c,13,e):"cbr"===d?G(c,87,e):"cbrver"===d?G(c,88,e):"cos"===d?G(c,18,e):"cosver"===d?G(c,19,e):"cplatform"===d&&G(c,42,e);H(b,1,c);return b}
function Gi(a,b,c){a=a.Va;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=dd(b,Ug,96)||new Ug;var d=xi();d=Object.keys(wi).indexOf(d);d=-1===d?null:d;null!==d&&G(c,3,d);H(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=xi())}
function Hi(a,b){var c;if(O("web_log_memory_total_kbytes")&&(null==(c=A.navigator)?0:c.deviceMemory)){var d;c=null==(d=A.navigator)?void 0:d.deviceMemory;a?G(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Ii(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=dd(b,Tg,62))?d:new Tg;G(c,6,a.appInstallData);H(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Ji(a,b){a:{var c=Ci();if(c){var d=yi[c.type||"unknown"]||"CONN_UNKNOWN";c=yi[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?G(a,61,zi[d]):b&&(b.client.connectionType=d));O("web_log_effective_connection_type")&&(d=Ci(),d=null!=d&&d.effectiveType?Bi.hasOwnProperty(d.effectiveType)?Bi[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?G(a,94,Ai[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Li(a,b,c){c=void 0===c?{}:c;var d={};O("enable_web_eom_visitor_data")&&N("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":N("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||N("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Tb||N("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().Sb:b=be([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=N("SESSION_INDEX",0),O("pageid_as_header_web")&&(d["X-Goog-PageId"]=N("DELEGATED_SESSION_ID")));return d}
;function Mi(a){a=Object.assign({},a);delete a.Authorization;var b=be();if(b){var c=new Uf;c.update(N("INNERTUBE_API_KEY"));c.update(b);a.hash=zc(c.digest(),3)}return a}
;function Ni(a){var b=new Kg;(b=b.isAvailable()?a?new Qg(b,a):b:null)||(a=new Lg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new Gg(a):null;this.j=document.domain||window.location.hostname}
Ni.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(hg(b))}catch(f){return}else e=escape(b);b=this.j;Zd.set(""+a,e,{Ga:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Ni.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=Zd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ni.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;Zd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Oi=window,Q=Oi.ytcsi&&Oi.ytcsi.now?Oi.ytcsi.now:Oi.performance&&Oi.performance.timing&&Oi.performance.now&&Oi.performance.timing.navigationStart?function(){return Oi.performance.timing.navigationStart+Oi.performance.now()}:function(){return(new Date).getTime()};var Pi;function Qi(){Pi||(Pi=new Ni("yt.innertube"));return Pi}
function Ri(a,b,c,d){if(d)return null;d=Qi().get("nextId",!0)||1;var e=Qi().get("requests",!0)||{};e[d]={method:a,request:b,authState:Mi(c),requestTime:Math.round(Q())};Qi().set("nextId",d+1,86400,!0);Qi().set("requests",e,86400,!0);return d}
function Si(a){var b=Qi().get("requests",!0)||{};delete b[a];Qi().set("requests",b,86400,!0)}
function Ti(a){var b=Qi().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Q())-d.requestTime)){var e=d.authState,f=Mi(Li(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Q())),Ui(a,d.method,e,{}));delete b[c]}}Qi().set("requests",b,86400,!0)}}
;function Vi(){}
function Wi(a,b){return Xi(a,0,b)}
Vi.prototype.M=function(a,b){return Xi(a,1,b)};
function Yi(a,b){Xi(a,2,b)}
;function Zi(){Vi.apply(this,arguments)}
u(Zi,Vi);function $i(){Zi.i||(Zi.i=new Zi);return Zi.i}
function Xi(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Sh(a,c||0)}
Zi.prototype.aa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Zi.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};var Me=$i();var aj=rc||sc;var bj=function(){var a;return function(){a||(a=new Ni("ytidb"));return a}}();
function cj(){var a;return null==(a=bj())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var dj=[],ej=!1;function fj(a){ej||(dj.push({type:"ERROR",payload:a}),10<dj.length&&dj.shift())}
function gj(a,b){ej||(dj.push({type:"EVENT",eventType:a,payload:b}),10<dj.length&&dj.shift())}
;function hj(a){var b=Ia.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
u(hj,Error);function ij(){try{return jj(),!0}catch(a){return!1}}
function jj(){if(void 0!==N("DATASYNC_ID"))return N("DATASYNC_ID");throw new hj("Datasync ID not set","unknown");}
;function kj(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function lj(a){return a.substr(0,a.indexOf(":"))||a}
;var mj={},nj=(mj.AUTH_INVALID="No user identifier specified.",mj.EXPLICIT_ABORT="Transaction was explicitly aborted.",mj.IDB_NOT_SUPPORTED="IndexedDB is not supported.",mj.MISSING_INDEX="Index not created.",mj.MISSING_OBJECT_STORES="Object stores not created.",mj.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",mj.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",mj.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
mj.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",mj.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",mj.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",mj.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",mj),oj={},pj=(oj.AUTH_INVALID="ERROR",oj.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",oj.EXPLICIT_ABORT="IGNORED",oj.IDB_NOT_SUPPORTED="ERROR",oj.MISSING_INDEX=
"WARNING",oj.MISSING_OBJECT_STORES="ERROR",oj.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",oj.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",oj.QUOTA_EXCEEDED="WARNING",oj.QUOTA_MAYBE_EXCEEDED="WARNING",oj.UNKNOWN_ABORT="WARNING",oj.INCOMPATIBLE_DB_VERSION="WARNING",oj),qj={},rj=(qj.AUTH_INVALID=!1,qj.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,qj.EXPLICIT_ABORT=!1,qj.IDB_NOT_SUPPORTED=!1,qj.MISSING_INDEX=!1,qj.MISSING_OBJECT_STORES=!1,qj.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,qj.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,qj.QUOTA_EXCEEDED=!1,qj.QUOTA_MAYBE_EXCEEDED=!0,qj.UNKNOWN_ABORT=!0,qj.INCOMPATIBLE_DB_VERSION=!1,qj);function T(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?nj[a]:c;d=void 0===d?pj[a]:d;e=void 0===e?rj[a]:e;hj.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,T.prototype)}
u(T,hj);function sj(a,b){T.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},nj.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,sj.prototype)}
u(sj,T);function tj(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,tj.prototype)}
u(tj,Error);var uj=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function vj(a,b,c,d){b=lj(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof T)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new T("QUOTA_EXCEEDED",a);if(tc&&"UnknownError"===e.name)return new T("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof tj)return new T("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&uj.some(function(f){return e.message.includes(f)}))return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new T("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Xb:e.name})];e.level="WARNING";return e}
function wj(a,b,c){var d=cj();return new T("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function xj(a){if(!a)throw Error();throw a;}
function yj(a){return a}
function zj(a){this.i=a}
function U(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=t(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=t(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
U.all=function(a){return new U(new zj(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ba:0};f.ba<a.length;f={ba:f.ba},++f.ba)Aj(U.resolve(a[f.ba]).then(function(g){return function(h){d[g.ba]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
U.resolve=function(a){return new U(new zj(function(b,c){a instanceof U?a.then(b,c):b(a)}))};
U.reject=function(a){return new U(new zj(function(b,c){c(a)}))};
U.prototype.then=function(a,b){var c=this,d=null!=a?a:yj,e=null!=b?b:xj;return new U(new zj(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){Bj(c,c,d,f,g)}),c.onRejected.push(function(){Cj(c,c,e,f,g)})):"FULFILLED"===c.state.status?Bj(c,c,d,f,g):"REJECTED"===c.state.status&&Cj(c,c,e,f,g)}))};
function Aj(a,b){a.then(void 0,b)}
function Bj(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof U?Dj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Cj(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof U?Dj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Dj(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof U?Dj(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Ej(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Fj(a){return new Promise(function(b,c){Ej(a,b,c)})}
function V(a){return new U(new zj(function(b,c){Ej(a,b,c)}))}
;function Gj(a,b){return new U(new zj(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Hj(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(Q());this.j=!1}
n=Hj.prototype;n.add=function(a,b,c){return Ij(this,[a],{mode:"readwrite",I:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return Ij(this,[a],{mode:"readwrite",I:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return Ij(this,[a],{mode:"readonly",I:!0},function(c){return c.objectStore(a).count(b)})};
function xk(a,b,c){a=a.i.createObjectStore(b,c);return new yk(a)}
n.delete=function(a,b){return Ij(this,[a],{mode:"readwrite",I:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return Ij(this,[a],{mode:"readonly",I:!0},function(c){return c.objectStore(a).get(b)})};
function zk(a,b){return Ij(a,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(c){c=c.objectStore("LogsRequestsStore");return V(c.i.put(b,void 0))})}
n.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function Ij(a,b,c,d){var e,f,g,h,k,l,m,q,w,p,y,z;return x(function(F){switch(F.i){case 1:var K={mode:"readonly",I:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?K.mode=c:Object.assign(K,c);e=K;a.transactionCount++;f=e.I?3:1;g=0;case 2:if(h){F.s(3);break}g++;k=Math.round(Q());xa(F,4);l=a.i.transaction(b,e.mode);K=new Ak(l);K=Bk(K,d);return v(F,K,6);case 6:return m=F.j,q=Math.round(Q()),Ck(a,k,q,g,void 0,b.join(),e),F.return(m);case 4:w=za(F);p=Math.round(Q());y=vj(w,a.i.name,b.join(),a.i.version);
if((z=y instanceof T&&!y.i)||g>=f)Ck(a,k,p,g,y,b.join(),e),h=y;F.s(2);break;case 3:return F.return(Promise.reject(h))}})}
function Ck(a,b,c,d,e,f,g){b=c-b;e?(e instanceof T&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&gj("QUOTA_EXCEEDED",{dbName:lj(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof T&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),gj("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),Dk(a,!1,d,f,b,g.tag),fj(e)):Dk(a,!0,d,f,b,g.tag)}
function Dk(a,b,c,d,e,f){gj("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.i.name};
function yk(a){this.i=a}
n=yk.prototype;n.add=function(a,b){return V(this.i.add(a,b))};
n.autoIncrement=function(){return this.i.autoIncrement};
n.clear=function(){return V(this.i.clear()).then(function(){})};
n.count=function(a){return V(this.i.count(a))};
function Ek(a,b){return Fk(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?Ek(this,a):V(this.i.delete(a))};
n.get=function(a){return V(this.i.get(a))};
n.index=function(a){try{return new Gk(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new tj(a,this.i.name);throw b;}};
n.getName=function(){return this.i.name};
n.keyPath=function(){return this.i.keyPath};
function Fk(a,b,c){a=a.i.openCursor(b.query,b.direction);return Hk(a).then(function(d){return Gj(d,c)})}
function Ak(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=T;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function Bk(a,b){var c=new Promise(function(d,e){try{Aj(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return t(d).next().value})}
Ak.prototype.abort=function(){this.i.abort();this.j=!0;throw new T("EXPLICIT_ABORT");};
Ak.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new yk(a),this.l.set(a,b));return b};
function Gk(a){this.i=a}
n=Gk.prototype;n.count=function(a){return V(this.i.count(a))};
n.delete=function(a){return Ik(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
n.get=function(a){return V(this.i.get(a))};
n.getKey=function(a){return V(this.i.getKey(a))};
n.keyPath=function(){return this.i.keyPath};
n.unique=function(){return this.i.unique};
function Ik(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Hk(a).then(function(d){return Gj(d,c)})}
function Jk(a,b){this.request=a;this.cursor=b}
function Hk(a){return V(a).then(function(b){return b?new Jk(a,b):null})}
n=Jk.prototype;n.advance=function(a){this.cursor.advance(a);return Hk(this.request)};
n.continue=function(a){this.cursor.continue(a);return Hk(this.request)};
n.delete=function(){return V(this.cursor.delete()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.X=function(){return this.cursor.value};
n.update=function(a){return V(this.cursor.update(a))};function Kk(a,b,c){return new Promise(function(d,e){function f(){w||(w=new Hj(g.result,{closed:q}));return w}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.Ab,m=c.upgrade,q=c.closed,w;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&gj("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:lj(a)});var y=f(),z=new Ak(g.transaction);
m&&m(y,function(F){return p.oldVersion<F&&p.newVersion>=F},z);
z.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){gj("IDB_UNEXPECTEDLY_CLOSED",{dbName:lj(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Lk(a,b,c){c=void 0===c?{}:c;return Kk(a,b,c)}
function Mk(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.i)return xa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),v(g,Fj(c),4);
if(2!=g.i)return ya(g,0);f=za(g);throw vj(f,a,"",-1);})}
;function Nk(a){return new Promise(function(b){Yi(function(){b()},a)})}
function Ok(a,b){this.name=a;this.options=b;this.o=!0;this.A=this.m=0;this.j=500}
Ok.prototype.l=function(a,b,c){c=void 0===c?{}:c;return Lk(a,b,c)};
Ok.prototype.delete=function(a){a=void 0===a?{}:a;return Mk(this.name,a)};
function Pk(a,b){return new T("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Qk(a,b){if(!b)throw wj("openWithToken",lj(a.name));return Rk(a)}
function Rk(a){function b(){var f,g,h,k,l,m,q,w,p,y;return x(function(z){switch(z.i){case 1:return g=null!=(f=Error().stack)?f:"",xa(z,2),v(z,a.l(a.name,a.options.version,d),4);case 4:h=z.j;for(var F=a.options,K=[],M=t(Object.keys(F.ja)),P=M.next();!P.done;P=M.next()){P=P.value;var hb=F.ja[P],kc=void 0===hb.yb?Number.MAX_VALUE:hb.yb;!(h.i.version>=hb.Ba)||h.i.version>=kc||h.i.objectStoreNames.contains(P)||K.push(P)}k=K;if(0===k.length){z.s(5);break}l=Object.keys(a.options.ja);m=h.objectStoreNames();
if(a.A<di("ytidb_reopen_db_retries",0))return a.A++,h.close(),fj(new T("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());if(!(a.m<di("ytidb_remake_db_retries",1))){z.s(6);break}a.m++;if(!O("ytidb_remake_db_enable_backoff_delay")){z.s(7);break}return v(z,Nk(a.j),8);case 8:a.j*=2;case 7:return v(z,a.delete(),9);case 9:return fj(new T("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());
case 6:throw new sj(m,l);case 5:return z.return(h);case 2:q=za(z);if(q instanceof DOMException?"VersionError"!==q.name:"DOMError"in self&&q instanceof DOMError?"VersionError"!==q.name:!(q instanceof Object&&"message"in q)||"An attempt was made to open a database using a lower version than the existing version."!==q.message){z.s(10);break}return v(z,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:w=z.j;p=w.i.version;if(void 0!==a.options.version&&p>a.options.version+1)throw w.close(),
a.o=!1,Pk(a,p);return z.return(w);case 10:throw c(),q instanceof Error&&!O("ytidb_async_stack_killswitch")&&(q.stack=q.stack+"\n"+g.substring(g.indexOf("\n")+1)),vj(q,a.name,"",null!=(y=a.options.version)?y:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.o)throw Pk(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,Ab:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var Sk=new Ok("YtIdbMeta",{ja:{databases:{Ba:1}},upgrade:function(a,b){b(1)&&xk(a,"databases",{keyPath:"actualName"})}});
function Tk(a,b){var c;return x(function(d){if(1==d.i)return v(d,Qk(Sk,b),2);c=d.j;return d.return(Ij(c,["databases"],{I:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return V(f.i.put(a,void 0)).then(function(){})})}))})}
function Uk(a,b){var c;return x(function(d){if(1==d.i)return a?v(d,Qk(Sk,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function Vk(a,b){var c,d;return x(function(e){return 1==e.i?(c=[],v(e,Qk(Sk,b),2)):3!=e.i?(d=e.j,v(e,Ij(d,["databases"],{I:!0,mode:"readonly"},function(f){c.length=0;return Fk(f.objectStore("databases"),{},function(g){a(g.X())&&c.push(g.X());return g.continue()})}),3)):e.return(c)})}
function Wk(a){return Vk(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Xk,Yk=new function(){}(new function(){});
function Zk(){var a,b,c,d;return x(function(e){switch(e.i){case 1:a=cj();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=aj)f=/WebKit\/([0-9]+)/.exec(Jb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Jb()),f=!(f&&602<=parseInt(f[1],10)));if(f||ec)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
xa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return v(e,Tk(d,Yk),4);case 4:return v(e,Uk("yt-idb-test-do-not-use",Yk),5);case 5:return e.return(!0);case 2:return za(e),e.return(!1)}})}
function $k(){if(void 0!==Xk)return Xk;ej=!0;return Xk=Zk().then(function(a){ej=!1;var b;if(null!=(b=bj())&&b.i){var c;b={hasSucceededOnce:(null==(c=cj())?void 0:c.hasSucceededOnce)||a};var d;null==(d=bj())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function al(){return B("ytglobal.idbToken_")||void 0}
function bl(){var a=al();return a?Promise.resolve(a):$k().then(function(b){(b=b?Yk:void 0)&&C("ytglobal.idbToken_",b);return b})}
;new ig;function cl(a){if(!ij())throw a=new T("AUTH_INVALID",{dbName:a}),fj(a),a;var b=jj();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function dl(a,b,c,d){var e,f,g,h,k,l;return x(function(m){switch(m.i){case 1:return f=null!=(e=Error().stack)?e:"",v(m,bl(),2);case 2:g=m.j;if(!g)throw h=wj("openDbImpl",a,b),O("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),fj(h),h;kj(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:cl(a);xa(m,3);return v(m,Tk(k,g),5);case 5:return v(m,Lk(k.actualName,b,d),6);case 6:return m.return(m.j);case 3:return l=za(m),xa(m,7),v(m,Uk(k.actualName,g),9);case 9:ya(m,
8);break;case 7:za(m);case 8:throw l;}})}
function el(a,b,c){c=void 0===c?{}:c;return dl(a,b,!1,c)}
function fl(a,b,c){c=void 0===c?{}:c;return dl(a,b,!0,c)}
function gl(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.i)return v(e,bl(),2);if(3!=e.i){c=e.j;if(!c)return e.return();kj(a);d=cl(a);return v(e,Mk(d.actualName,b),3)}return v(e,Uk(d.actualName,c),0)})}
function hl(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.i?v(e,Mk(d.actualName,b),2):v(e,Uk(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function il(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.i)return v(d,bl(),2);if(3!=d.i){b=d.j;if(!b)return d.return();kj("LogsDatabaseV2");return v(d,Wk(b),3)}c=d.j;return v(d,hl(c,a,b),0)})}
function jl(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.i)return v(d,bl(),2);if(3!=d.i){c=d.j;if(!c)return d.return();kj(a);return v(d,Mk(a,b),3)}return v(d,Uk(a,c),0)})}
;function kl(a){this.pa=this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.da=function(){};
this.now=Date.now;this.ga=!1;var b;this.hb=null!=(b=a.hb)?b:100;var c;this.gb=null!=(c=a.gb)?c:1;var d;this.eb=null!=(d=a.eb)?d:2592E6;var e;this.cb=null!=(e=a.cb)?e:12E4;var f;this.fb=null!=(f=a.fb)?f:5E3;var g;this.B=null!=(g=a.B)?g:void 0;this.ta=!!a.ta;var h;this.sa=null!=(h=a.sa)?h:.1;var k;this.ya=null!=(k=a.ya)?k:10;a.handleError&&(this.handleError=a.handleError);a.da&&(this.da=a.da);a.ga&&(this.ga=a.ga);a.pa&&(this.pa=a.pa);this.C=a.C;this.K=a.K;this.F=a.F;this.H=a.H;this.U=a.U;this.Ja=a.Ja;
this.Ia=a.Ia;ll(this)&&(!this.C||this.C("networkless_logging"))&&ml(this)}
function ml(a){ll(a)&&!a.ga&&(a.i=!0,a.ta&&Math.random()<=a.sa&&a.F.ob(a.B),nl(a),a.H.G()&&a.ma(),a.H.S(a.Ja,a.ma.bind(a)),a.H.S(a.Ia,a.Pa.bind(a)))}
n=kl.prototype;n.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(ll(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.F.set(d,this.B).then(function(e){d.id=e;c.H.G()&&ol(c,d)}).catch(function(e){ol(c,d);
pl(c,e)})}else this.U(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(ll(this)&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.C&&this.C("nwl_skip_retry")&&(e.skipRetry=c);if(this.H.G()||this.C&&this.C("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.i)return v(k,d.F.set(e,d.B).catch(function(l){pl(d,l)}),2);
f(g,h);k.i=0})}}this.U(a,b,e.skipRetry)}else this.F.set(e,this.B).catch(function(g){d.U(a,b,e.skipRetry);
pl(d,g)})}else this.U(a,b,this.C&&this.C("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(ll(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.F.ca(d.id,c.B):e=!0;c.H.T&&c.C&&c.C("vss_network_hint")&&c.H.T(!0);f(g,h)};
this.U(d.url,d.options);this.F.set(d,this.B).then(function(g){d.id=g;e&&c.F.ca(d.id,c.B)}).catch(function(g){pl(c,g)})}else this.U(a,b)};
n.ma=function(){var a=this;if(!ll(this))throw wj("throttleSend");this.j||(this.j=this.K.M(function(){var b;return x(function(c){if(1==c.i)return v(c,a.F.Ua("NEW",a.B),2);if(3!=c.i)return b=c.j,b?v(c,ol(a,b),3):(a.Pa(),c.return());a.j&&(a.j=0,a.ma());c.i=0})},this.hb))};
n.Pa=function(){this.K.aa(this.j);this.j=0};
function ol(a,b){var c,d;return x(function(e){switch(e.i){case 1:if(!ll(a))throw c=wj("immediateSend"),c;if(void 0===b.id){e.s(2);break}return v(e,a.F.wb(b.id,a.B),3);case 3:(d=e.j)?b=d:a.da(Error("The request cannot be found in the database."));case 2:if(ql(a,b,a.eb)){e.s(4);break}a.da(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.s(5);break}return v(e,a.F.ca(b.id,a.B),5);case 5:return e.return();case 4:b.skipRetry||(b=rl(a,b));if(!b){e.s(0);break}if(!b.skipRetry||
void 0===b.id){e.s(8);break}return v(e,a.F.ca(b.id,a.B),8);case 8:a.U(b.url,b.options,!!b.skipRetry),e.i=0}})}
function rl(a,b){if(!ll(a))throw wj("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.i){case 1:g=sl(f);if(!(a.C&&a.C("nwl_consider_error_code")&&g||a.C&&!a.C("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.ya)){l.s(2);break}if(!a.H.V){l.s(3);break}return v(l,a.H.V(),3);case 3:if(a.H.G()){l.s(2);break}c(e,f);if(!a.C||!a.C("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){l.s(6);break}return v(l,a.F.Ka(b.id,a.B,!1),6);case 6:return l.return();case 2:if(a.C&&a.C("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.ya)return l.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){l.s(8);break}return b.sendCount<a.gb?v(l,a.F.Ka(b.id,a.B),12):v(l,a.F.ca(b.id,a.B),8);case 12:a.K.M(function(){a.H.G()&&a.ma()},a.fb);
case 8:c(e,f),l.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.s(2):v(h,a.F.ca(b.id,a.B),2);a.H.T&&a.C&&a.C("vss_network_hint")&&a.H.T(!0);d(e,f);h.i=0})};
return b}
function ql(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function nl(a){if(!ll(a))throw wj("retryQueuedRequests");a.F.Ua("QUEUED",a.B).then(function(b){b&&!ql(a,b,a.cb)?a.K.M(function(){return x(function(c){if(1==c.i)return void 0===b.id?c.s(2):v(c,a.F.Ka(b.id,a.B),2);nl(a);c.i=0})}):a.H.G()&&a.ma()})}
function pl(a,b){a.ib&&!a.H.G()?a.ib(b):a.handleError(b)}
function ll(a){return!!a.B||a.pa}
function sl(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var tl=B("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.na;L.prototype.publish=L.prototype.ea;L.prototype.clear=L.prototype.clear;C("ytPubsub2Pubsub2Instance",tl);C("ytPubsub2Pubsub2SubscribedKeys",B("ytPubsub2Pubsub2SubscribedKeys")||{});C("ytPubsub2Pubsub2TopicToKeys",B("ytPubsub2Pubsub2TopicToKeys")||{});C("ytPubsub2Pubsub2IsAsync",B("ytPubsub2Pubsub2IsAsync")||{});C("ytPubsub2Pubsub2SkipSubKey",null);function ul(a,b){Ok.call(this,a,b);this.options=b;kj(a)}
u(ul,Ok);function vl(a,b){var c;return function(){c||(c=new ul(a,b));return c}}
ul.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.La?fl:el)(a,b,Object.assign({},c))};
ul.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.La?jl:gl)(this.name,a)};
function wl(a,b){return vl(a,b)}
;var xl;
function yl(){if(xl)return xl();var a={};xl=wl("LogsDatabaseV2",{ja:(a.LogsRequestsStore={Ba:2},a),La:!1,upgrade:function(b,c,d){c(2)&&xk(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return xl()}
;function zl(a){return Qk(yl(),a)}
function Al(a,b){var c,d,e,f;return x(function(g){if(1==g.i)return c={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},v(g,zl(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:N("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),v(g,zk(d,e),3);f=g.j;c.Bb=Q();Bl(c);return g.return(f)})}
function Cl(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.i)return c={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},v(l,zl(b),2);if(3!=l.i)return d=l.j,e=N("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Q()],h=IDBKeyRange.bound(f,g),k=void 0,v(l,Ij(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(m){return Ik(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(q){q.X()&&(k=q.X(),"NEW"===a&&(k.status="QUEUED",q.update(k)))})}),
3);
c.Bb=Q();Bl(c);return l.return(k)})}
function Dl(a,b){var c;return x(function(d){if(1==d.i)return v(d,zl(b),2);c=d.j;return d.return(Ij(c,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",V(f.i.put(g,void 0)).then(function(){return g})})}))})}
function El(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.i)return v(e,zl(b),2);d=e.j;return e.return(Ij(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),V(g.i.put(h,void 0)).then(function(){return h})):U.resolve(void 0)})}))})}
function Fl(a,b){var c;return x(function(d){if(1==d.i)return v(d,zl(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function Gl(a){var b,c;return x(function(d){if(1==d.i)return v(d,zl(a),2);b=d.j;c=Q()-2592E6;return v(d,Ij(b,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(e){return Fk(e.objectStore("LogsRequestsStore"),{},function(f){if(f.X().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Hl(){x(function(a){return v(a,il(),0)})}
function Bl(a){if(!O("nwl_csi_killswitch")&&.01>=Math.random()){var b=B("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var Il={},Jl=wl("ServiceWorkerLogsDatabase",{ja:(Il.SWHealthLog={Ba:1},Il),La:!0,upgrade:function(a,b){b(1)&&xk(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Kl(a){return Qk(Jl(),a)}
function Ll(a){var b,c;x(function(d){if(1==d.i)return v(d,Kl(a),2);b=d.j;c=Q()-2592E6;return v(d,Ij(b,["SWHealthLog"],{mode:"readwrite",I:!0},function(e){return Fk(e.objectStore("SWHealthLog"),{},function(f){if(f.X().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Ml(a){var b;return x(function(c){if(1==c.i)return v(c,Kl(a),2);b=c.j;return v(c,b.clear("SWHealthLog"),0)})}
;var Nl={},Ol=0;
function Pl(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)ri(a,void 0,"POST",b);else if(N("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))ri(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new $a({url:a});if(d.l&&d.j||d.o){var e=Sb(a.match(Rb)[5]||null);var f=!(!e||!e.endsWith("/aclk")||"1"!==Yb(a,"ri"));break b}}catch(h){}f=!1}if(f){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var g=!0;break b}}catch(h){}g=!1}b=g?!0:!1}else b=!1;b||Ql(a)}}
function Ql(a){var b=new Image,c=""+Ol++;Nl[c]=b;b.onload=b.onerror=function(){delete Nl[c]};
b.src=a}
;function W(){this.i=new Map;this.j=!1}
function Rl(){if(!W.i){var a=B("yt.networkRequestMonitor.instance")||new W;C("yt.networkRequestMonitor.instance",a);W.i=a}return W.i}
W.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
W.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
W.prototype.removeParams=function(a){return a.split("?")[0]};
W.prototype.removeParams=W.prototype.removeParams;W.prototype.isEndpointCFR=W.prototype.isEndpointCFR;W.prototype.requestComplete=W.prototype.requestComplete;W.getInstance=Rl;var Sl;function Tl(){Sl||(Sl=new Ni("yt.offline"));return Sl}
function Ul(a){if(O("offline_error_handling")){var b=Tl().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Tl().set("errors",b,2592E3,!0)}}
function Vl(){if(O("offline_error_handling")){var a=Tl().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new hj(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;Ih(c)}Tl().set("errors",{},2592E3,!0)}}}
;var Wl=di("network_polling_interval",3E4);function Z(){J.call(this);var a=this;this.oa=0;this.D=this.m=!1;this.j=this.Da();O("use_shared_nsm")?(this.i=Le(),O("use_shared_nsm_and_keep_yt_online_updated")&&(this.i.S("networkstatus-online",function(){a.j=!0;a.D&&Vl()}),this.i.S("networkstatus-offline",function(){a.j=!1}))):(Xl(this),Yl(this))}
u(Z,J);function Zl(){if(!Z.i){var a=B("yt.networkStatusManager.instance")||new Z;C("yt.networkStatusManager.instance",a);Z.i=a}return Z.i}
n=Z.prototype;n.G=function(){if(O("use_shared_nsm")&&this.i){var a;return null==(a=this.i)?void 0:a.G()}return this.j};
n.T=function(a){if(O("use_shared_nsm")&&this.i){var b;null!=(b=this.i)&&(b.i=a)}else a!==this.j&&(this.j=a)};
n.xb=function(a){!O("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.oa||$l(this))};
n.Da=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
n.qb=function(){this.D=!0};
n.S=function(a,b){return O("use_shared_nsm")&&this.i?this.i.S(a,b):J.prototype.S.call(this,a,b)};
function Yl(a){window.addEventListener("online",function(){return x(function(b){if(1==b.i)return v(b,a.V(),2);a.D&&Vl();b.i=0})})}
function Xl(a){window.addEventListener("offline",function(){return x(function(b){return v(b,a.V(),0)})})}
function $l(a){a.oa=Wi(function(){return x(function(b){if(1==b.i)return a.j?a.Da()||!a.m?b.s(3):v(b,a.V(),3):v(b,a.V(),3);$l(a);b.i=0})},Wl)}
n.V=function(a){var b=this;if(O("use_shared_nsm")&&this.i){var c=Je(this.i,a);c.then(function(d){O("use_cfr_monitor")&&Rl().requestComplete("generate_204",d)});
return c}return this.v?this.v:this.v=new Promise(function(d){var e,f,g,h;return x(function(k){switch(k.i){case 1:return e=window.AbortController?new window.AbortController:void 0,g=null==(f=e)?void 0:f.signal,h=!1,xa(k,2,3),e&&(b.P=Me.M(function(){e.abort()},a||2E4)),v(k,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:Aa(k);O("use_cfr_monitor")&&Rl().requestComplete("generate_204",h);b.v=void 0;b.P&&Me.aa(b.P);h!==b.j&&(b.j=h,b.j&&b.m?Ge(b,"ytnetworkstatus-online"):b.m&&Ge(b,"ytnetworkstatus-offline"));d(h);Ba(k);break;case 2:za(k),h=!1,k.s(3)}})})};
Z.prototype.sendNetworkCheckRequest=Z.prototype.V;Z.prototype.listen=Z.prototype.S;Z.prototype.enableErrorFlushing=Z.prototype.qb;Z.prototype.getWindowStatus=Z.prototype.Da;Z.prototype.monitorNetworkStatusChange=Z.prototype.xb;Z.prototype.networkStatusHint=Z.prototype.T;Z.prototype.isNetworkAvailable=Z.prototype.G;Z.getInstance=Zl;function am(a){a=void 0===a?{}:a;J.call(this);var b=this;this.j=this.P=0;this.m="ytnetworkstatus-offline";this.v="ytnetworkstatus-online";O("use_shared_nsm")&&(this.m="networkstatus-offline",this.v="networkstatus-online");this.i=Zl();var c=B("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.Sa);a.Za&&(c=B("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=B("yt.networkStatusManager.instance.listen").bind(this.i))a.za?(this.za=a.za,c(this.v,
function(){bm(b,"publicytnetworkstatus-online")}),c(this.m,function(){bm(b,"publicytnetworkstatus-offline")})):(c(this.v,function(){Ge(b,"publicytnetworkstatus-online")}),c(this.m,function(){Ge(b,"publicytnetworkstatus-offline")}))}
u(am,J);am.prototype.G=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
am.prototype.T=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
am.prototype.V=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return O("skip_network_check_if_cfr")&&Rl().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.T((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.G())})):c?d.return(c(a)):d.return(!0)})};
function bm(a,b){a.za?a.j?(Me.aa(a.P),a.P=Me.M(function(){a.D!==b&&(Ge(a,b),a.D=b,a.j=Q())},a.za-(Q()-a.j))):(Ge(a,b),a.D=b,a.j=Q()):Ge(a,b)}
;var cm;function dm(){kl.call(this,{F:{ob:Gl,ca:Fl,Ua:Cl,wb:Dl,Ka:El,set:Al},H:em(),handleError:Ih,da:Jh,U:fm,now:Q,ib:Ul,K:$i(),Ja:"publicytnetworkstatus-online",Ia:"publicytnetworkstatus-offline",ta:!0,sa:.1,ya:di("potential_esf_error_limit",10),C:O,ga:!(ij()&&"www.youtube-nocookie.com"!==Tb(document.location.toString()))});this.l=new ig;O("networkless_immediately_drop_all_requests")&&Hl();jl("LogsDatabaseV2")}
u(dm,kl);function gm(){var a=B("yt.networklessRequestController.instance");a||(a=new dm,C("yt.networklessRequestController.instance",a),O("networkless_logging")&&bl().then(function(b){a.B=b;ml(a);a.l.resolve();a.ta&&Math.random()<=a.sa&&a.B&&Ll(a.B);O("networkless_immediately_drop_sw_health_store")&&hm(a)}));
return a}
dm.prototype.writeThenSend=function(a,b){b||(b={});ij()||(this.i=!1);kl.prototype.writeThenSend.call(this,a,b)};
dm.prototype.sendThenWrite=function(a,b,c){b||(b={});ij()||(this.i=!1);kl.prototype.sendThenWrite.call(this,a,b,c)};
dm.prototype.sendAndWrite=function(a,b){b||(b={});ij()||(this.i=!1);kl.prototype.sendAndWrite.call(this,a,b)};
dm.prototype.awaitInitialization=function(){return this.l.promise};
function hm(a){var b;x(function(c){if(!a.B)throw b=wj("clearSWHealthLogsDb"),b;return c.return(Ml(a.B).catch(function(d){a.handleError(d)}))})}
function fm(a,b,c){O("use_cfr_monitor")&&im(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Q());c&&0===Object.keys(b).length?Pl(a):oi(a,b)}
function em(){cm||(cm=new am({Za:!0,Sa:!0}));return cm}
function im(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Rl().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Rl().requestComplete(a,!0);d(e,f)}}
;var jm=0,km=0,lm,mm=A.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,potentialEsfErrorCounter:km};C("ytNetworklessLoggingInitializationOptions",mm);function nm(a,b){function c(d){var e=om().G();if(!pm()||!d||e&&O("vss_networkless_bypass_write"))qm(a,b);else{var f={url:a,options:b,timestamp:Q(),status:"NEW",sendCount:0};Al(f,d).then(function(g){f.id=g;om().G()&&rm(f)}).catch(function(g){rm(f);
om().G()?Ih(g):Ul(g)})}}
b=void 0===b?{}:b;O("skip_is_supported_killswitch")?bl().then(function(d){c(d)}):c(al())}
function sm(a,b){function c(d){if(pm()&&d){var e={url:a,options:b,timestamp:Q(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,l){O("use_cfr_monitor")&&Rl().requestComplete(e.url,!0);void 0!==e.id?Fl(e.id,d):f=!0;O("vss_network_hint")&&om().T(!0);g(k,l)};
if(O("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,l){Rl().requestComplete(e.url,!1);h(k,l)}}qm(e.url,e.options);
Al(e,d).then(function(k){e.id=k;f&&Fl(e.id,d)}).catch(function(k){om().G()?Ih(k):Ul(k)})}else qm(a,b)}
b=void 0===b?{}:b;O("skip_is_supported_killswitch")?bl().then(function(d){c(d)}):c(al())}
function tm(){var a=al();if(!a)throw wj("throttleSend");jm||(jm=Me.M(function(){var b;return x(function(c){if(1==c.i)return v(c,Cl("NEW",a),2);if(3!=c.i)return b=c.j,b?v(c,rm(b),3):(Me.aa(jm),jm=0,c.return());jm&&(jm=0,tm());c.i=0})},100))}
function rm(a){var b,c,d;return x(function(e){switch(e.i){case 1:b=al();if(!b)throw c=wj("immediateSend"),c;if(void 0===a.id){e.s(2);break}return v(e,Dl(a.id,b),3);case 3:(d=e.j)?a=d:Jh(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=Q()-f)){e.s(4);break}Jh(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.s(5);break}return v(e,Fl(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=um(a));f=a;var g,h;if(null==
f?0:null==(g=f.options)?0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(Q());a=f;if(!a){e.s(0);break}if(!a.skipRetry||void 0===a.id){e.s(8);break}return v(e,Fl(a.id,b),8);case 8:qm(a.url,a.options,!!a.skipRetry),e.i=0}})}
function um(a){var b=al();if(!b)throw wj("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.i){case 1:O("use_cfr_monitor")&&Rl().requestComplete(a.url,!1);g=sl(f);if(!(O("nwl_consider_error_code")&&g||!O("nwl_consider_error_code")&&vm()<=di("potential_esf_error_limit",10))){l.s(2);break}if(O("skip_checking_network_on_cfr_failure")&&(!O("skip_checking_network_on_cfr_failure")||Rl().isEndpointCFR(a.url))){l.s(3);break}return v(l,om().V(),3);case 3:if(om().G()){l.s(2);break}c(e,f);if(!O("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){l.s(6);break}return v(l,El(a.id,b,!1),6);case 6:return l.return();case 2:if(O("nwl_consider_error_code")&&!g&&vm()>di("potential_esf_error_limit",10))return l.return();B("ytNetworklessLoggingInitializationOptions")&&mm.potentialEsfErrorCounter++;km++;if(void 0===(null==(k=a)?void 0:k.id)){l.s(8);break}return 1>a.sendCount?v(l,El(a.id,b),12):v(l,Fl(a.id,b),8);case 12:Me.M(function(){om().G()&&tm()},5E3);
case 8:c(e,f),l.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return O("use_cfr_monitor")&&Rl().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.s(2):v(h,Fl(a.id,b),2);O("vss_network_hint")&&om().T(!0);d(e,f);h.i=0})};
return a}
function om(){if(O("use_new_nwl"))return em();lm||(lm=new am({Za:!0,Sa:!0}));return lm}
function qm(a,b,c){c&&0===Object.keys(b).length?Pl(a):oi(a,b)}
function pm(){return B("ytNetworklessLoggingInitializationOptions")?mm.isNwlInitialized:!1}
function vm(){return B("ytNetworklessLoggingInitializationOptions")?mm.potentialEsfErrorCounter:km}
;function wm(a){var b=this;this.config_=null;a?this.config_=a:Di()&&(this.config_=Ei());Wi(function(){Ti(b)},5E3)}
wm.prototype.isReady=function(){!this.config_&&Di()&&(this.config_=Ei());return!!this.config_};
function Ui(a,b,c,d){function e(y){y=void 0===y?!1:y;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||O("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=Ri(b,c,l,k)),z)){var F=g.onSuccess,K=g.onFetchSuccess;g.onSuccess=function(M,P){Si(z);F(M,P)};
c.onFetchSuccess=function(M,P){Si(z);K(M,P)}}try{y&&d.retry&&!d.ab.bypassNetworkless?(g.method="POST",d.ab.writeThenSend?O("use_new_nwl_wts")?gm().writeThenSend(p,g):nm(p,g):O("use_new_nwl_saw")?gm().sendAndWrite(p,g):sm(p,g)):(g.method="POST",g.postParams||(g.postParams={}),oi(p,g))}catch(M){if("InvalidAccessError"==M.name)z&&(Si(z),z=0),Jh(Error("An extension is blocking network request."));
else throw M;}z&&Wi(function(){Ti(a)},5E3)}
!N("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Jh(new hj("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new hj("innertube xhrclient not ready",b,c,d);Ih(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,z){if(d.onError)d.onError(z)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.tb)&&(h=f);var k=a.config_.vb||!1,l=Li(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,q={alt:"json"},w=a.config_.ub&&f;w=w&&f.startsWith("Bearer");w||(q.key=a.config_.innertubeApiKey);var p=ai(""+h+m,q||{},!0);O("use_new_nwl")&&gm().i||!O("use_new_nwl")&&
pm()?$k().then(function(y){e(y)}):e(!1)}
;var xm={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},ym={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};function zm(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Am=A.ytPubsubPubsubInstance||new L,Bm=A.ytPubsubPubsubSubscribedKeys||{},Cm=A.ytPubsubPubsubTopicToKeys||{},Dm=A.ytPubsubPubsubIsSynchronous||{};L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.na;L.prototype.publish=L.prototype.ea;L.prototype.clear=L.prototype.clear;C("ytPubsubPubsubInstance",Am);C("ytPubsubPubsubTopicToKeys",Cm);C("ytPubsubPubsubIsSynchronous",Dm);C("ytPubsubPubsubSubscribedKeys",Bm);var Em=di("initial_gel_batch_timeout",2E3),Fm=Math.pow(2,16)-1,Gm=void 0;function Hm(){this.l=this.i=this.j=0}
var Im=new Hm,Jm=new Hm,Km=!0,Lm=A.ytLoggingTransportGELQueue_||new Map;C("ytLoggingTransportGELQueue_",Lm);var Mm=A.ytLoggingTransportGELProtoQueue_||new Map;C("ytLoggingTransportGELProtoQueue_",Mm);var Nm=A.ytLoggingTransportTokensToCttTargetIds_||{};C("ytLoggingTransportTokensToCttTargetIds_",Nm);var Om=A.ytLoggingTransportTokensToJspbCttTargetIds_||{};C("ytLoggingTransportTokensToJspbCttTargetIds_",Om);
function Pm(a,b){if("log_event"===a.endpoint){var c=Qm(a),d=Lm.get(c)||[];Lm.set(c,d);d.push(a.payload);Rm(b,d,c)}}
function Sm(a,b){if("log_event"===a.endpoint){var c=Qm(a,!0),d=Mm.get(c)||[];Mm.set(c,d);a=a.payload.toJSON();d.push(a);Rm(b,d,c,!0)}}
function Rm(a,b,c,d){d=void 0===d?!1:d;a&&(Gm=new a);a=di("tvhtml5_logging_max_batch")||di("web_logging_max_batch")||100;var e=Q(),f=d?Jm.l:Im.l;b.length>=a?Tm({writeThenSend:!0},O("flush_only_full_queue")?c:void 0,d):10<=e-f&&(Um(d),d?Jm.l=e:Im.l=e)}
function Vm(a,b){if("log_event"===a.endpoint){var c=Qm(a),d=new Map;d.set(c,[a.payload]);b&&(Gm=new b);return new jg(function(e,f){Gm&&Gm.isReady()?Wm(d,e,f,{bypassNetworkless:!0},!0):e()})}}
function Xm(a,b){if("log_event"===a.endpoint){var c=Qm(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Gm=new b);return new jg(function(e){Gm&&Gm.isReady()?Ym(d,e,{bypassNetworkless:!0},!0):e()})}}
function Qm(a,b){var c="";if(a.fa)c="visitorOnlyApprovedKey";else if(a.R){if(void 0===b?0:b){b=a.R.token;c=a.R;var d=new uh;c.videoId?d.setVideoId(c.videoId):c.playlistId&&bd(d,2,vh,c.playlistId);Om[b]=d}else b=a.R,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Nm[a.R.token]=c;c=a.R.token}return c}
function Tm(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new jg(function(d,e){c?(window.clearTimeout(Jm.j),window.clearTimeout(Jm.i),Jm.i=0):(window.clearTimeout(Im.j),window.clearTimeout(Im.i),Im.i=0);if(Gm&&Gm.isReady())if(void 0!==b)if(c){e=new Map;var f=Mm.get(b)||[];e.set(b,f);Ym(e,d,a);Mm.delete(b)}else{f=new Map;var g=Lm.get(b)||[];f.set(b,g);Wm(f,d,e,a);Lm.delete(b)}else c?(Ym(Mm,d,a),Mm.clear()):(Wm(Lm,d,e,a),Lm.clear());else Um(c),d()})}
function Um(a){a=void 0===a?!1:a;if(O("web_gel_timeout_cap")&&(!a&&!Im.i||a&&!Jm.i)){var b=Sh(function(){Tm({writeThenSend:!0},void 0,a)},6E4);
a?Jm.i=b:Im.i=b}window.clearTimeout(a?Jm.j:Im.j);b=N("LOGGING_BATCH_TIMEOUT",di("web_gel_debounce_ms",1E4));O("shorten_initial_gel_batch_timeout")&&Km&&(b=Em);b=Sh(function(){Tm({writeThenSend:!0},void 0,a)},b);
a?Jm.j=b:Im.j=b}
function Wm(a,b,c,d,e){var f=Gm;d=void 0===d?{}:d;var g=Math.round(Q()),h=a.size;a=t(a);for(var k=a.next();!k.done;k=a.next()){var l=t(k.value);k=l.next().value;var m=l.next().value;l=k;k=nb({context:Fi(f.config_||Ei())});k.events=m;(m=Nm[l])&&Zm(k,l,m);delete Nm[l];l="visitorOnlyApprovedKey"===l;$m(k,g,l);an(d);m=function(){h--;h||b()};
var q=function(){h--;h||b()};
try{Ui(f,"log_event",k,bn(d,l,m,q,e)),Km=!1}catch(w){Ih(w),c()}}}
function Ym(a,b,c,d){var e=Gm;c=void 0===c?{}:c;var f=Math.round(Q()),g=a.size;a=t(a);for(var h=a.next();!h.done;h=a.next()){var k=t(h.value);h=k.next().value;var l=k=k.next().value;k=new wh;var m=Ki(e.config_||Ei());H(k,1,m);l=cn(l);for(m=0;m<l.length;m++)hd(k,3,rh,l[m]);(l=Om[h])&&dn(k,h,l);delete Om[h];h="visitorOnlyApprovedKey"===h;en(k,f,h);an(c);k=ld(k);h=bn(c,h,function(){g--;g||b()},function(){g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=k;Ui(e,"log_event","",h);Km=!1}}
function an(a){O("always_send_and_write")&&(a.writeThenSend=!1)}
function bn(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,ab:a,fa:b,Vb:!!e,headers:{},postBodyFormat:"",postBody:""}}
function $m(a,b,c){a.requestTimeMs=String(b);O("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=N("EVENT_ID"))&&(c=fn(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function en(a,b,c){G(a,2,b);if(!c&&(b=N("EVENT_ID"))){c=fn();var d=new th;G(d,1,b);G(d,2,c);H(a,5,d)}}
function fn(){var a=N("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Fm/2));a++;a>Fm&&(a=1);Ch("BATCH_CLIENT_COUNTER",a);return a}
function Zm(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function dn(a,b,c){if($c(c,1===cd(c,vh)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;H(a,4,c);a=dd(a,bh,1)||new bh;c=dd(a,$g,3)||new $g;var e=new Zg;e.setToken(b);G(e,1,d);hd(c,12,Zg,e);H(a,3,c)}
function cn(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new rh(a[c]))}catch(d){Ih(new hj("Transport failed to deserialize "+String(a[c])))}return b}
;var gn=A.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",gn);function hn(a){Tm(void 0,void 0,void 0===a?!1:a)}
function jn(a){gn[a]=a in gn?gn[a]+1:0;return gn[a]}
;function kn(a,b){var c=void 0===c?{}:c;var d=wm;N("ytLoggingEventsDefaultDisabled",!1)&&wm==wm&&(d=null);a:{c=void 0===c?{}:c;if(O("lr_drop_other_and_business_payloads")){if(ym[a]||xm[a])break a}else if(O("lr_drop_other_payloads")&&ym[a])break a;var e={},f=Math.round(c.timestamp||Q());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=zm();e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};O("log_sequence_info_on_gel_web")&&c.la&&(a=e.context,b=c.la,b={index:jn(b),groupKey:b},a.sequence=
b,c.rb&&delete gn[c.la]);(c.zb?Vm:Pm)({endpoint:"log_event",payload:e,R:c.R,fa:c.fa},d)}}
;var ln=[{Ha:function(a){return"Cannot read property '"+a.key+"'"},
xa:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ha:function(a){return"Cannot call '"+a.key+"'"},
xa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ha:function(a){return a.key+" is not defined"},
xa:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var nn={Y:[],W:[{mb:mn,weight:500}]};function mn(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function on(){this.W=[];this.Y=[]}
var pn;function qn(){if(!pn){var a=pn=new on;a.Y.length=0;a.W.length=0;nn.Y&&a.Y.push.apply(a.Y,nn.Y);nn.W&&a.W.push.apply(a.W,nn.W)}return pn}
;var rn=new L;function sn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=tn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=tn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=tn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function tn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function un(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=vn(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=sn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?vn(e+".ve",f,g,h):0;d+=g;d+=vn(e,a[e],b,c);if(500<d)break}}else c[b]=wn(a),d+=c[b].length;else c[b]=wn(a),d+=c[b].length;return d}
function vn(a,b,c,d){c+="."+a;a=wn(b);d[c]=a;return c.length+a.length}
function wn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var xn=A.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",xn);function yn(a){var b=void 0;b=void 0===b?{}:b;var c=!1;N("ytLoggingEventsDefaultDisabled",!1)&&wm===wm&&(c=!0);c=c?null:wm;b=void 0===b?{}:b;var d=Math.round(b.timestamp||Q());G(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=zm();d=new qh;G(d,1,b.timestamp||!isFinite(e)?-1:e);if(O("log_sequence_info_on_gel_web")&&b.la){e=b.la;var f=jn(e),g=new ph;G(g,2,f);G(g,1,e);H(d,3,g);b.rb&&delete xn[b.la]}H(a,33,d);(b.zb?Xm:Sm)({endpoint:"log_event",payload:a,R:b.R,fa:b.fa},c)}
;var zn=new Set,An=0,Bn=0,Cn=0,Dn=[],En=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Fn(){for(var a=t(En),b=a.next();!b.done;b=a.next()){var c=Jb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
;function Gn(){var a;return x(function(b){return(a=ff())?b.return(a.then(function(c){c=ld(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return zc(d,3)})):b.return(Promise.resolve(null))})}
;var Hn={};function In(a){return Hn[a]||(Hn[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Jn={},Kn=[],Ag=new L,Ln={};function Mn(){for(var a=t(Kn),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Nn(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[In(b)]:a.getAttribute("data-"+b):null;return c}
function On(a){Ag.ea.apply(Ag,arguments)}
;function Pn(a){this.i=a||{};a=[this.i,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Qn(a,b){a=[a.i,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Rn(a,b,c){Sn||(Sn={},Rh(window,"message",function(d){a:{if(d.origin===Qn(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=Sn[e.id])d.v=!0,d.v&&(D(d.A,d.sendMessage,d),d.A.length=0),d.Oa(e)}e=void 0}return e}));
Sn[c]=b}
var Sn=null;var Tn=window;function Un(a,b,c){this.m=this.i=this.j=null;this.l=0;this.v=!1;this.A=[];this.o=null;this.J={};if(!a)throw Error("YouTube player element ID required.");this.id=Qa(this);this.D=c;this.setup(a,b)}
n=Un.prototype;n.setSize=function(a,b){this.i.width=a.toString();this.i.height=b.toString();return this};
n.getIframe=function(){return this.i};
n.Oa=function(a){Vn(this,a.event,a)};
n.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.o.subscribe(a,c);Wn(this,a);return this};
function Xn(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.D===b[0]&&Wn(a,c)}}
n.destroy=function(){this.i&&this.i.id&&(Jn[this.i.id]=null);var a=this.o;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){a=this.i;var b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.i)&&a.parentNode&&a.parentNode.removeChild(a);Sn&&(Sn[this.id]=null);this.j=null;a=this.i;for(var c in lb)lb[c][0]==a&&Ph(c);this.m=this.i=null};
n.Ra=function(){return{}};
function Yn(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.v?a.sendMessage(b):a.A.push(b)}
function Vn(a,b,c){a.o.o||(c={target:a,data:c},a.o.ea(b,c),On(a.D+"."+b,c))}
function Zn(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Qn(a.j,"title"));(b=Qn(a.j,"width"))&&c.setAttribute("width",b.toString());(b=Qn(a.j,"height"))&&c.setAttribute("height",
b.toString());var g=a.Ra();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&D(["debugjs","debugcss"],function(k){var l=Yb(window.location.href,k);null!==l&&(g[k]=l)});
Tn.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(Tn.yt_embedsTokenValue),delete Tn.yt_embedsTokenValue);var h=""+Qn(a.j,"host")+("/embed/"+Qn(a.j,"videoId"))+"?"+Wb(g);Tn.yt_embedsEnableUaChProbe?Gn().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Nd(l.href).toString();Ad(c,Od(k));return k}):
Tn.yt_embedsEnableIframeSrcWithIntent?Ad(c,Od(h)):c.src=h;
return c}
n.bb=function(){this.i&&this.i.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.l)};
function $n(a){Rn(a.j,a,a.id);a.l=Th(a.bb.bind(a));Rh(a.i,"load",function(){window.clearInterval(a.l);a.l=Th(a.bb.bind(a))})}
n.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Ub(a.src):"https://www.youtube.com"),this.j=new Pn(b),c||(b=Zn(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.i=a,this.i.id||(this.i.id="widget"+Qa(this.i)),Jn[this.i.id]=this,window.postMessage){this.o=new L;$n(this);b=Qn(this.j,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Ln)Ln.hasOwnProperty(e)&&
Xn(this,e)}};
function Wn(a,b){a.J[b]||(a.J[b]=!0,Yn(a,"addEventListener",[b]))}
n.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=hg(a),c=[Ub(this.i.src||"").replace("http:","https:")];if(this.i.contentWindow)for(var d=0;d<c.length;d++)try{this.i.contentWindow.postMessage(b,c[d])}catch(Nb){if(Nb.name&&"SyntaxError"===Nb.name){if(!(Nb.message&&0<Nb.message.indexOf("target origin ''"))){var e=void 0,f=Nb;e=void 0===e?{}:e;e.name=N("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=N("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=e||{},h="WARNING";h=void 0===h?"ERROR":h;if(f){f.hasOwnProperty("level")&&
f.level&&(h=f.level);if(O("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=An)){var m=void 0,q=void 0,w=f,p=g,y=ee(w),z=y.message||"Unknown Error",F=y.name||"UnknownError",K=y.stack||w.j||"Not available";
if(K.startsWith(F+": "+z)){var M=K.split("\n");M.shift();K=M.join("\n")}var P=y.lineNumber||"Not available",hb=y.fileName||"Not available",kc=K,wa=0;if(w.hasOwnProperty("args")&&w.args&&w.args.length)for(var na=0;na<w.args.length&&!(wa=un(w.args[na],"params."+na,p,wa),500<=wa);na++);else if(w.hasOwnProperty("params")&&w.params){var Y=w.params;if("object"===typeof w.params)for(q in Y){if(Y[q]){var ca="params."+q,da=wn(Y[q]);p[ca]=da;wa+=ca.length+da.length;if(500<wa)break}}else p.params=wn(Y)}if(Dn.length)for(var X=
0;X<Dn.length&&!(wa=un(Dn[X],"params.context."+X,p,wa),500<=wa);X++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var S={message:z,name:F,lineNumber:P,fileName:hb,stack:kc,params:p,sampleWeight:1},Jj=Number(w.columnNumber);isNaN(Jj)||(S.lineNumber=S.lineNumber+":"+Jj);if("IGNORED"===w.level)m=0;else a:{for(var Kj=qn(),Lj=t(Kj.Y),sf=Lj.next();!sf.done;sf=Lj.next()){var Mj=sf.value;if(S.message&&S.message.match(Mj.Wb)){m=Mj.weight;break a}}for(var Nj=t(Kj.W),
tf=Nj.next();!tf.done;tf=Nj.next()){var Oj=tf.value;if(Oj.mb(S)){m=Oj.weight;break a}}m=1}S.sampleWeight=m;for(var Pj=t(ln),uf=Pj.next();!uf.done;uf=Pj.next()){var vf=uf.value;if(vf.xa[S.name])for(var Qj=t(vf.xa[S.name]),wf=Qj.next();!wf.done;wf=Qj.next()){var Rj=wf.value,yd=S.message.match(Rj.regexp);if(yd){S.params["params.error.original"]=yd[0];for(var xf=Rj.groups,Sj={},Ob=0;Ob<xf.length;Ob++)Sj[xf[Ob]]=yd[Ob+1],S.params["params.error."+xf[Ob]]=yd[Ob+1];S.message=vf.Ha(Sj);break}}}S.params||(S.params=
{});var Tj=qn();S.params["params.errorServiceSignature"]="msg="+Tj.Y.length+"&cb="+Tj.W.length;S.params["params.serviceWorker"]="false";A.document&&A.document.querySelectorAll&&(S.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));xb("sample").constructor!==wb&&(S.params["params.fconst"]="true");var ra=S;window.yterr&&"function"===typeof window.yterr&&window.yterr(ra);if(0!==ra.sampleWeight&&!zn.has(ra.message)){if("ERROR"===h){rn.ea("handleError",ra);if(O("record_app_crashed_web")&&
0===Cn&&1===ra.sampleWeight)if(Cn++,O("errors_via_jspb")){var yf=new oh;G(yf,1,1);if(!O("report_client_error_with_app_crash_ks")){var Uj=new jh;G(Uj,1,ra.message);var Vj=new kh;H(Vj,3,Uj);var Wj=new lh;H(Wj,5,Vj);var Xj=new mh;H(Xj,9,Wj);H(yf,4,Xj)}var go=yf,Yj=new rh;fd(Yj,20,sh,go);yn(Yj)}else{var Zj={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};O("report_client_error_with_app_crash_ks")||(Zj.systemHealth={crashData:{clientError:{logMessage:{message:ra.message}}}});kn("appCrashed",Zj)}Bn++}else"WARNING"===
h&&rn.ea("handleWarning",ra);if(O("kevlar_gel_error_routing"))a:{var zf=void 0,Af=void 0,vc=h,R=ra;if(O("errors_via_jspb")){if(Fn())Af=void 0;else{var Pb=new gh;G(Pb,1,R.stack);R.fileName&&G(Pb,4,R.fileName);var Ja=R.lineNumber&&R.lineNumber.split?R.lineNumber.split(":"):[];0!==Ja.length&&(1!==Ja.length||isNaN(Number(Ja[0]))?2!==Ja.length||isNaN(Number(Ja[0]))||isNaN(Number(Ja[1]))||(G(Pb,2,Number(Ja[0])),G(Pb,3,Number(Ja[1]))):G(Pb,2,Number(Ja[0])));var ob=new jh;G(ob,1,R.message);G(ob,3,R.name);
G(ob,6,R.sampleWeight);"ERROR"===vc?G(ob,2,2):"WARNING"===vc?G(ob,2,1):G(ob,2,0);var Bf=new hh;G(Bf,1,!0);fd(Bf,3,ih,Pb);var pb=new dh;G(pb,3,window.location.href);for(var ak=N("FEXP_EXPERIMENTS",[]),Cf=0;Cf<ak.length;Cf++){var bk=pb,ho=ak[Cf];Oc(bk);ad(bk,5).push(ho)}var Df=Dh();if(!Eh()&&Df)for(var ck=t(Object.keys(Df)),qb=ck.next();!qb.done;qb=ck.next()){var dk=qb.value,Ef=new fh;G(Ef,1,dk);Ef.setValue(String(Df[dk]));hd(pb,4,fh,Ef)}var Ff=R.params;if(Ff){var ek=t(Object.keys(Ff));for(qb=ek.next();!qb.done;qb=
ek.next()){var fk=qb.value,Gf=new fh;G(Gf,1,"client."+fk);Gf.setValue(String(Ff[fk]));hd(pb,4,fh,Gf)}}var gk=N("SERVER_NAME"),hk=N("SERVER_VERSION");if(gk&&hk){var Hf=new fh;G(Hf,1,"server.name");Hf.setValue(gk);hd(pb,4,fh,Hf);var If=new fh;G(If,1,"server.version");If.setValue(hk);hd(pb,4,fh,If)}var zd=new kh;H(zd,1,pb);H(zd,2,Bf);H(zd,3,ob);Af=zd}var ik=Af;if(!ik)break a;var jk=new rh;fd(jk,163,sh,ik);yn(jk)}else{if(Fn())zf=void 0;else{var wc={stackTrace:R.stack};R.fileName&&(wc.filename=R.fileName);
var Ka=R.lineNumber&&R.lineNumber.split?R.lineNumber.split(":"):[];0!==Ka.length&&(1!==Ka.length||isNaN(Number(Ka[0]))?2!==Ka.length||isNaN(Number(Ka[0]))||isNaN(Number(Ka[1]))||(wc.lineNumber=Number(Ka[0]),wc.columnNumber=Number(Ka[1])):wc.lineNumber=Number(Ka[0]));var Jf={level:"ERROR_LEVEL_UNKNOWN",message:R.message,errorClassName:R.name,sampleWeight:R.sampleWeight};"ERROR"===vc?Jf.level="ERROR_LEVEL_ERROR":"WARNING"===vc&&(Jf.level="ERROR_LEVEL_WARNNING");var io={isObfuscated:!0,browserStackInfo:wc},
Qb={pageUrl:window.location.href,kvPairs:[]};N("FEXP_EXPERIMENTS")&&(Qb.experimentIds=N("FEXP_EXPERIMENTS"));var Kf=Dh();if(!Eh()&&Kf)for(var kk=t(Object.keys(Kf)),rb=kk.next();!rb.done;rb=kk.next()){var lk=rb.value;Qb.kvPairs.push({key:lk,value:String(Kf[lk])})}var Lf=R.params;if(Lf){var mk=t(Object.keys(Lf));for(rb=mk.next();!rb.done;rb=mk.next()){var nk=rb.value;Qb.kvPairs.push({key:"client."+nk,value:String(Lf[nk])})}}var ok=N("SERVER_NAME"),pk=N("SERVER_VERSION");ok&&pk&&(Qb.kvPairs.push({key:"server.name",
value:ok}),Qb.kvPairs.push({key:"server.version",value:pk}));zf={errorMetadata:Qb,stackTrace:io,logMessage:Jf}}var qk=zf;if(!qk)break a;kn("clientError",qk)}if("ERROR"===vc||O("errors_flush_gel_always_killswitch"))O("web_fp_via_jspb")&&hn(!0),hn()}if(!O("suppress_error_204_logging")){var sb=ra,xc=sb.params||{},Wa={urlParams:{a:"logerror",t:"jserror",type:sb.name,msg:sb.message.substr(0,250),line:sb.lineNumber,level:h,"client.name":xc.name},postParams:{url:N("PAGE_NAME",window.location.href),file:sb.fileName},
method:"POST"};xc.version&&(Wa["client.version"]=xc.version);if(Wa.postParams){sb.stack&&(Wa.postParams.stack=sb.stack);for(var rk=t(Object.keys(xc)),Mf=rk.next();!Mf.done;Mf=rk.next()){var sk=Mf.value;Wa.postParams["client."+sk]=xc[sk]}var Nf=Dh();if(Nf)for(var tk=t(Object.keys(Nf)),Of=tk.next();!Of.done;Of=tk.next()){var uk=Of.value;Wa.postParams[uk]=Nf[uk]}var vk=N("SERVER_NAME"),wk=N("SERVER_VERSION");vk&&wk&&(Wa.postParams["server.name"]=vk,Wa.postParams["server.version"]=wk)}oi(N("ECATCHER_REPORT_HOST",
"")+"/error_204",Wa)}try{zn.add(ra.message)}catch(no){}An++}}}}}else throw Nb;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function ao(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function bo(a){return 0===a.search("get")||0===a.search("is")}
;function co(a,b){Un.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.N={};this.playerInfo={}}
u(co,Un);n=co.prototype;n.Ra=function(){var a=Qn(this.j,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Qn(this.j,"embedConfig")){if(Pa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
n.Oa=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Pa(a))for(var c in a)a.hasOwnProperty(c)&&(this.N[c]=a[c]);break;case "infoDelivery":eo(this,a);break;case "initialDelivery":Pa(a)&&(window.clearInterval(this.l),this.playerInfo={},this.N={},fo(this,a.apiInterface),eo(this,a));break;default:Vn(this,b,a)}};
function eo(a,b){if(Pa(b))for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c])}
function fo(a,b){D(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:ao(c)?this[c]=function(){this.playerInfo={};
this.N={};Yn(this,c,arguments);return this}:bo(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Yn(this,c,arguments);
return this})},a)}
n.getVideoEmbedCode=function(){var a=Qn(this.j,"host")+("/embed/"+Qn(this.j,"videoId")),b=Number(Qn(this.j,"width")),c=Number(Qn(this.j,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);Gb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Ab,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Bb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Cb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Db,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Eb,"&#39;")),-1!=a.indexOf("\x00")&&
(a=a.replace(Fb,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
n.getOptions=function(a){return this.N.namespaces?a?this.N[a]?this.N[a].options||[]:[]:this.N.namespaces||[]:[]};
n.getOption=function(a,b){if(this.N.namespaces&&a&&b&&this.N[a])return this.N[a][b]};
function jo(a){if("iframe"!==a.tagName.toLowerCase()){var b=Nn(a,"videoid");b&&(b={videoId:b,width:Nn(a,"width"),height:Nn(a,"height")},new co(a,b))}}
;C("YT.PlayerState.UNSTARTED",-1);C("YT.PlayerState.ENDED",0);C("YT.PlayerState.PLAYING",1);C("YT.PlayerState.PAUSED",2);C("YT.PlayerState.BUFFERING",3);C("YT.PlayerState.CUED",5);C("YT.get",function(a){return Jn[a]});
C("YT.scan",Mn);C("YT.subscribe",function(a,b,c){Ag.subscribe(a,b,c);Ln[a]=!0;for(var d in Jn)Jn.hasOwnProperty(d)&&Xn(Jn[d],a)});
C("YT.unsubscribe",function(a,b,c){zg(a,b,c)});
C("YT.Player",co);Un.prototype.destroy=Un.prototype.destroy;Un.prototype.setSize=Un.prototype.setSize;Un.prototype.getIframe=Un.prototype.getIframe;Un.prototype.addEventListener=Un.prototype.addEventListener;co.prototype.getVideoEmbedCode=co.prototype.getVideoEmbedCode;co.prototype.getOptions=co.prototype.getOptions;co.prototype.getOption=co.prototype.getOption;
Kn.push(function(a){var b=a;b||(b=document);a=gb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=cb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=gb(b);D(fb(a,b),jo)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Mn();var ko=A.onYTReady;ko&&ko();var lo=A.onYouTubeIframeAPIReady;lo&&lo();var mo=A.onYouTubePlayerAPIReady;mo&&mo();}).call(this);
