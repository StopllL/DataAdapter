!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("@babel/runtime/helpers/typeof"),require("@babel/runtime/helpers/toConsumableArray"),require("@babel/runtime/helpers/defineProperty"),require("@babel/runtime/helpers/classCallCheck"),require("@babel/runtime/helpers/createClass")):"function"==typeof define&&define.amd?define(["@babel/runtime/helpers/typeof","@babel/runtime/helpers/toConsumableArray","@babel/runtime/helpers/defineProperty","@babel/runtime/helpers/classCallCheck","@babel/runtime/helpers/createClass"],r):(e="undefined"!=typeof globalThis?globalThis:e||self)["bundle-name"]=r(e._typeof,e._toConsumableArray,e._defineProperty,e._classCallCheck,e._createClass)}(this,(function(e,r,t,n,a){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=i(e),u=i(r),o=i(t),f=i(n),s=i(a);function c(e){var r=l.default(e).toLocaleLowerCase();return"object"===r&&Array.isArray(e)&&(r="array"),r}function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){o.default(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d=function(){function e(r){f.default(this,e),this.data=r}return s.default(e,[{key:"transData",value:function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(0===t.length)return r;var n=t.shift(),a=n.split(":"),i=r,l=r,o=e.filterMap[a[0]],f=c(i);if("object"===f&&(i=p({},r)),"array"===f&&(i=u.default(r)),o&&"function"===c(o))l=o(i);else if(o&&"object"===c(o)){var s=o[f];l=s?s(i):i}return this.transData(l,t)}},{key:"get",value:function(e,r){var t,n=this;if(Array.isArray(e))t=e;else if("string"===l.default(e).toLowerCase())t=e.split(".");else if("object"===l.default(e).toLowerCase()){var a={};return Object.keys(e).forEach((function(t){a[t]=n.get(e[t],r)})),a}return t.reduce((function(e,t){var a=t.split("|"),i=a.shift();return e&&e[i]?n.transData(e[i],a):r}),this.data)}}],[{key:"addFilter",value:function(r,t){var n=r,a=t;if("string"!==c(r)&&(a=r,n=r.filterName),"function"!==c(a)&&"object"!==c(a))throw new Error("参数错误");if(e.filterMap[n])throw new Error("存在重复的过滤器名称");e.filterMap[n]=a}}]),e}();function y(e){return new d(e)}d.filterMap={},y.addFilter=d.addFilter;var h={array:function(e){return e.reverse()},filterName:"reverse"};function m(e){return Array.isArray(e)?e.map((function(e){return Number(e)})):Number(e)}function v(e){return Array.isArray(e)?e.map((function(e){return String(e)})):String(e)}return m.filterName="number",v.filterName="string",y.addFilter(h),y.addFilter(m),y.addFilter(v),y}));
//# sourceMappingURL=index.js.map
