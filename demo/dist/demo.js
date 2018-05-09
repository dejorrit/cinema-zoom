/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/demo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../dist/cinemaZoom.js":
/*!*****************************!*\
  !*** ../dist/cinemaZoom.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(t,e){if(true)module.exports=e();else { var i, n; }}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.r=function(t){Object.defineProperty(t,\"__esModule\",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,\"a\",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p=\"\",n(n.s=7)}([function(t,e,n){\"use strict\";t.exports=function(t){var e=\"undefined\"!=typeof window&&window.location;if(!e)throw new Error(\"fixUrls requires window.location\");if(!t||\"string\"!=typeof t)return t;var n=e.protocol+\"//\"+e.host,i=n+e.pathname.replace(/\\/[^\\/]*$/,\"/\");return t.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi,function(t,e){var o,r=e.trim().replace(/^\"(.*)\"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(r)?t:(o=0===r.indexOf(\"//\")?r:0===r.indexOf(\"/\")?n+r:i+r.replace(/^\\.\\//,\"\"),\"url(\"+JSON.stringify(o)+\")\")})}},function(t,e,n){var i,o,r={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=i.apply(this,arguments)),o}),s=function(t){var e={};return function(t){if(\"function\"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),u=null,c=0,l=[],f=n(0);function d(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=r[i.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(y(i.parts[a],e))}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(y(i.parts[a],e));r[i.id]={id:i.id,refs:1,parts:s}}}}function h(t,e){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],a=e.base?r[0]+e.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};i[a]?i[a].parts.push(s):n.push(i[a]={id:a,parts:[s]})}return n}function p(t,e){var n=s(t.insertInto);if(!n)throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");var i=l[l.length-1];if(\"top\"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if(\"bottom\"===t.insertAt)n.appendChild(e);else{if(\"object\"!=typeof t.insertAt||!t.insertAt.before)throw new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");var o=s(t.insertInto+\" \"+t.insertAt.before);n.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function g(t){var e=document.createElement(\"style\");return t.attrs.type=\"text/css\",v(e,t.attrs),p(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,i,o,r;if(e.transform&&t.css){if(!(r=e.transform(t.css)))return function(){};t.css=r}if(e.singleton){var a=c++;n=u||(u=g(e)),i=O.bind(null,n,a,!1),o=O.bind(null,n,a,!0)}else t.sourceMap&&\"function\"==typeof URL&&\"function\"==typeof URL.createObjectURL&&\"function\"==typeof URL.revokeObjectURL&&\"function\"==typeof Blob&&\"function\"==typeof btoa?(n=function(t){var e=document.createElement(\"link\");return t.attrs.type=\"text/css\",t.attrs.rel=\"stylesheet\",v(e,t.attrs),p(t,e),e}(e),i=function(t,e,n){var i=n.css,o=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||r)&&(i=f(i));o&&(i+=\"\\n/*# sourceMappingURL=data:application/json;base64,\"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+\" */\");var a=new Blob([i],{type:\"text/css\"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),i=function(t,e){var n=e.css,i=e.media;i&&t.setAttribute(\"media\",i);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){if(\"undefined\"!=typeof DEBUG&&DEBUG&&\"object\"!=typeof document)throw new Error(\"The style-loader cannot be used in a non-browser environment\");(e=e||{}).attrs=\"object\"==typeof e.attrs?e.attrs:{},e.singleton||\"boolean\"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto=\"head\"),e.insertAt||(e.insertAt=\"bottom\");var n=h(t,e);return d(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var a=n[o];(s=r[a.id]).refs--,i.push(s)}t&&d(h(t,e),e);for(o=0;o<i.length;o++){var s;if(0===(s=i[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete r[s.id]}}}};var b,w=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join(\"\\n\")});function O(t,e,n,i){var o=n?\"\":i.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}},function(t,e,n){\"use strict\";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||\"\",i=t[3];if(!i)return n;if(e&&\"function\"==typeof btoa){var o=(a=i,\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,\"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+\" */\"),r=i.sources.map(function(t){return\"/*# sourceURL=\"+i.sourceRoot+t+\" */\"});return[n].concat(r).concat([o]).join(\"\\n\")}var a;return[n].join(\"\\n\")}(e,t);return e[2]?\"@media \"+e[2]+\"{\"+n+\"}\":n}).join(\"\")},e.i=function(t,n){\"string\"==typeof t&&(t=[[null,t,\"\"]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];\"number\"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var a=t[o];\"number\"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]=\"(\"+a[2]+\") and (\"+n+\")\"),e.push(a))}},e}},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,\".cinema-zoom__background {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  cursor: zoom-out;\\n  z-index: 999999;\\n  opacity: 0;\\n  background-color: #fff; }\\n\\n.cinema-zoom__original {\\n  cursor: zoom-in; }\\n\\n.cinema-zoom__clone {\\n  position: absolute;\\n  z-index: 999999; }\\n\\n.cinema-zoom__image {\\n  position: relative;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 999999; }\\n\\n.cinema-zoom__caption {\\n  position: fixed;\\n  bottom: 0;\\n  left: 50%;\\n  max-width: 800px;\\n  padding: 15px;\\n  font-family: 'Georgia', serif;\\n  font-size: 14px;\\n  font-style: italic;\\n  color: #999;\\n  text-align: center;\\n  z-index: 999999;\\n  transform: translateX(-50%); }\\n  .cinema-zoom__caption:empty {\\n    display: none; }\\n\",\"\"])},function(t,e,n){var i=n(3);\"string\"==typeof i&&(i=[[t.i,i,\"\"]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(t.exports=i.locals)},function(t,e,n){\"use strict\";function i(){return void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft}function o(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop}Object.defineProperty(e,\"__esModule\",{value:!0}),e.createElement=function(t,e){var n=document.createElement(t);return n.className=e,n},e.getPositionAndDimensionsOfElement=function(t){var e=t.getBoundingClientRect();return{x:e.left+i(),y:e.top+o(),width:t.offsetWidth,height:t.offsetHeight}},e.getWindowHeight=function(){return window.innerHeight},e.getWindowWidth=function(){return window.innerWidth},e.getScrollX=i,e.getScrollY=o},function(e,n,i){\"use strict\";var o=function(){function t(t,e){for(var n,i=0;i<e.length;i++)(n=e[i]).enumerable=n.enumerable||!1,n.configurable=!0,\"value\"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();Object.defineProperty(n,\"__esModule\",{value:!0});var r=function(){function e(t,n){var i=this,o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return function(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}(this,e),this.element=t,this.properties=n,this.duration=o.duration||250,this.easing=o.easing||!1,this.easing=!1,this.starttime=null,this.startStyles=Object.assign({},window.getComputedStyle(t)),new Promise(function(t){return i.resolve=t,requestAnimationFrame(function(t){return i.starttime=t||(new Date).getTime(),i.animate(t)})})}return o(e,[{key:\"animate\",value:function(e){var n=this,i=(e=e||(new Date).getTime())-this.starttime,o=Math.min(i/this.duration,1);return Object.entries(this.properties).forEach(function(e){var i=e[0],r=e[1],a=-1===n.startStyles[i].indexOf(\"px\")?\"\":\"px\",s=parseFloat(n.startStyles[i]),u=s+(r-s)*(n.easing?--t*t*t+1:o);n.element.style[i]=u+a}),i<this.duration?requestAnimationFrame(function(t){return n.animate(t)}):void this.resolve()}}]),e}();n.default=r},function(t,e,n){\"use strict\";var i,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,\"value\"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(6),a=(i=r)&&i.__esModule?i:{default:i},s=n(5);n(4);var u={animationDuration:250,backgroundOpacity:.95,zoomOutOnScroll:!0,padding:20};t.exports=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}(this,t),this.original=e,this.image=null,this.callbacks=new Map,this.options=Object.assign({},u,n),this.createElements(),this._onClickOriginal=this.onClickOriginal.bind(this),this._zoomOut=this.zoomOut.bind(this),this.original.addEventListener(\"click\",this._onClickOriginal,!0),this.background.addEventListener(\"click\",this._zoomOut,!0)}return o(t,[{key:\"createElements\",value:function(){this.background=(0,s.createElement)(\"div\",\"cinema-zoom__background\"),this.clone=(0,s.createElement)(\"div\",\"cinema-zoom__clone\"),this.caption=(0,s.createElement)(\"div\",\"cinema-zoom__caption\"),this.caption.innerHTML=this.original.getAttribute(\"title\"),this.original.classList.add(\"cinema-zoom__original\")}},{key:\"onClickOriginal\",value:function(){var t=this;this.image?this.zoomIn():this.createAndLoadImage().then(function(){t.clone.append(t.image),t.zoomIn()}).catch(function(){throw new Error(\"Error loading large version of image\")})}},{key:\"hideOriginal\",value:function(){this.original.style.visibility=\"hidden\"}},{key:\"showOriginal\",value:function(){this.original.style.visibility=\"visible\"}},{key:\"createAndLoadImage\",value:function(){var t=this;return this.runCallback(\"imageLoadStart\"),new Promise(function(e,n){t.image=new Image,t.image.className=\"cinema-zoom__image\",t.image.onload=function(){t.runCallback(\"imageLoadComplete\"),e()},t.image.onerror=function(){t.runCallback(\"imageLoadError\"),n()},t.image.src=t.original.dataset.czLarge})}},{key:\"zoomIn\",value:async function(){var t=this;this.runCallback(\"zoomInStart\"),this.addElementsToDocumentBody(),this.positionCloneOnOriginal(),this.hideOriginal(),await Promise.all([this.animateBackgroundIn(),this.animateCloneIn(),this.animateCaptionIn()]).then(function(){t.runCallback(\"zoomInComplete\"),window.addEventListener(\"resize\",t._zoomOut,!0),t.options.zoomOutOnScroll&&window.addEventListener(\"scroll\",t._zoomOut,!0)})}},{key:\"zoomOut\",value:async function(){var t=this;this.runCallback(\"zoomOutStart\"),window.removeEventListener(\"resize\",this._zoomOut,!0),this.options.zoomOutOnScroll&&window.removeEventListener(\"scroll\",this._zoomOut,!0),await Promise.all([this.animateBackgroundOut(),this.animateCloneOut(),this.animateCaptionOut()]).then(function(){t.runCallback(\"zoomOutComplete\"),t.removeElementsFromDocumentBody(),t.showOriginal()})}},{key:\"positionCloneOnOriginal\",value:function(){var t=(0,s.getPositionAndDimensionsOfElement)(this.original);this.clone.style.left=t.x+\"px\",this.clone.style.top=t.y+\"px\",this.clone.style.width=t.width+\"px\",this.clone.style.height=t.height+\"px\"}},{key:\"animateCloneIn\",value:function(){return new a.default(this.clone,this.getDestinationPositionAndCoordinates(),{easing:!0,duration:this.options.animationDuration})}},{key:\"animateCloneOut\",value:function(){var t=(0,s.getPositionAndDimensionsOfElement)(this.original);return new a.default(this.clone,{top:t.y,left:t.x,width:t.width,height:t.height},{easing:!0,duration:this.options.animationDuration})}},{key:\"animateBackgroundIn\",value:function(){return new a.default(this.background,{opacity:this.options.backgroundOpacity},{duration:this.options.animationDuration})}},{key:\"animateBackgroundOut\",value:function(){return new a.default(this.background,{opacity:0},{duration:this.options.animationDuration})}},{key:\"animateCaptionIn\",value:function(){return new a.default(this.caption,{bottom:0},{easing:!0,duration:this.options.animationDuration})}},{key:\"animateCaptionOut\",value:function(){return new a.default(this.caption,{bottom:-this.caption.offsetHeight},{easing:!0,duration:this.options.animationDuration})}},{key:\"getDestinationPositionAndCoordinates\",value:function(){var t=this.image.naturalWidth,e=this.image.naturalHeight,n=e/t,i=2*this.options.padding,o=this.caption.offsetHeight;t>(0,s.getWindowWidth)()-i&&(e=(t=(0,s.getWindowWidth)()-i)*n),e>(0,s.getWindowHeight)()-i-(o+i)&&(t=(e=(0,s.getWindowHeight)()-i-(o+i))/n);var r=((0,s.getWindowWidth)()-t)/2,a=((0,s.getWindowHeight)()-e)/2;return{top:Math.round((0,s.getScrollY)()+a,10),left:Math.round((0,s.getScrollX)()+r,10),width:Math.round(t,10),height:Math.round(e,10)}}},{key:\"addElementsToDocumentBody\",value:function(){document.body.append(this.background),document.body.append(this.caption),document.body.append(this.clone),this.caption.style.bottom=\"-\"+this.caption.offsetHeight+\"px\"}},{key:\"removeElementsFromDocumentBody\",value:function(){this.background.parentNode.removeChild(this.background),this.caption.parentNode.removeChild(this.caption),this.clone.parentNode.removeChild(this.clone)}},{key:\"on\",value:function(t,e){this.callbacks.set(t,e)}},{key:\"off\",value:function(t){this.callbacks.has(t)&&this.callbacks.delete(t)}},{key:\"runCallback\",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.callbacks.has(t)&&\"function\"==typeof this.callbacks.get(t)&&(n>0?setTimeout(function(){e.callbacks.get(t)()},n):this.callbacks.get(t)())}}]),t}()}])});\n\n//# sourceURL=webpack:///../dist/cinemaZoom.js?");

/***/ }),

/***/ "./src/demo.js":
/*!*********************!*\
  !*** ./src/demo.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_cinemaZoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/cinemaZoom */ \"../dist/cinemaZoom.js\");\n/* harmony import */ var _dist_cinemaZoom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_cinemaZoom__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet images = document.querySelectorAll('img');\nimages.forEach(image => {\n\tlet zoom = new _dist_cinemaZoom__WEBPACK_IMPORTED_MODULE_0___default.a(image);\n\n\tzoom.on('imageLoadStart',    () => console.log('imageLoadStart'));\n\tzoom.on('imageLoadComplete', () => console.log('imageLoadComplete'));\n\tzoom.on('zoomInStart',       () => console.log('zoomInStart'));\n\tzoom.on('zoomOutStart',      () => console.log('zoomOutStart'));\n\tzoom.on('zoomInComplete',    () => console.log('zoomInComplete'));\n\tzoom.on('zoomOutComplete',   () => console.log('zoomOutComplete'));\n});\n\n//# sourceURL=webpack:///./src/demo.js?");

/***/ })

/******/ });