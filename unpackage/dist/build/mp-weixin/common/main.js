(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"32f3":function(t,e,n){"use strict";n.r(e);var r=n("83ad"),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e["default"]=o.a},"3b2e":function(t,e,n){"use strict";var r=n("afdd"),o=n.n(r);o.a},6016:function(t,e,n){"use strict";n.r(e);var r=n("32f3");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("3b2e");var c,u,a,i,f=n("f0c5"),l=Object(f["a"])(r["default"],c,u,!1,null,null,null,!1,a,i);e["default"]=l.exports},"83ad":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{city:"深圳"}},onLaunch:function(){console.log("App Launch");try{t.setStorageSync("cityName",this.city)}catch(e){}},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=n}).call(this,n("543d")["default"])},a93b:function(t,e,n){"use strict";(function(t){n("59e3");var e=o(n("6016")),r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}r.default.config.productionTip=!1,e.default.mpType="app";var i=new r.default(u({},e.default));t(i).$mount()}).call(this,n("543d")["createApp"])},afdd:function(t,e,n){}},[["a93b","common/runtime","common/vendor"]]]);