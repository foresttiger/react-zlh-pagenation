!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r="object"==typeof exports?t(require("react")):t(e.React);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(e=>(()=>{"use strict";var t={787:t=>{t.exports=e}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a={};return(()=>{n.d(a,{default:()=>o});var e=n(787),t=n.n(e);function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const o=function(n){var a,o,c=n.currentPage,i=n.pageSize,l=n.pageSizeOptions,u=n.total,f=n.totalText,s=n.handleChangePage,p=n.handleChangePageSize,m=Math.ceil(u/i),d=(a=(0,e.useState)([]),o=2,function(e){if(Array.isArray(e))return e}(a)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,c,i=[],l=!0,u=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);l=!0);}catch(e){u=!0,a=e}finally{try{if(!l&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(u)throw a}}return i}}(a,o)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(a,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),v=d[0],y=d[1];(0,e.useEffect)((function(){g()}),[c,i,l,u]);var g=function(){var e=[],t=1;if(m<=6)for(;t<=m;)e.push(t),t++;else e=7===m?c<=4?[1,2,3,4,5,"···",7]:[1,"···",3,4,5,6,7]:c<=3?[1,2,3,4,5,"···",m]:c>=m-2?[1,"···",m-4,m-3,m-2,m-1,m]:[1,"···",c-1,c,c+1,"···",m];y(e)};return t().createElement("div",{className:"react-hook-pagenation"},t().createElement("button",{disabled:1===c,className:"prev-page",onClick:function(){return s(1===c?1:c-1)}},"上一页"),v.map((function(e,r){return"···"===e?t().createElement("div",{className:"page-item-omit",key:"".concat(e,"-").concat(r)},e):t().createElement("div",{className:"page-item ".concat(e===c?"current-page":""),key:"".concat(e,"-").concat(r),onClick:function(){return s(+e)}},e)})),t().createElement("button",{disabled:c===m,className:"next-page",onClick:function(){return s(c===m?m:c+1)}},"下一页"),l?t().createElement("select",{name:"pageSize",className:"page-size",id:"react-hook-pagenation-page-size",value:i,onChange:function(e){return p(Number(e.target.value))}},l.map((function(e,r){return t().createElement("option",{key:r,value:e},e,"条/页")}))):"",f&&t().createElement("div",{className:"total"},f))}})(),a.default})()));