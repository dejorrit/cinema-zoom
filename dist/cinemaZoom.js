(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../animate-element/dist/animate-element.js":
/*!**************************************************!*\
  !*** ../animate-element/dist/animate-element.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () {\n\tfunction defineProperties(target, props) {\n\t\tfor (var i = 0; i < props.length; i++) {\n\t\t\tvar descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n\t\t}\n\t}return function (Constructor, protoProps, staticProps) {\n\t\tif (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n\t};\n}();\n\nfunction _classCallCheck(instance, Constructor) {\n\tif (!(instance instanceof Constructor)) {\n\t\tthrow new TypeError(\"Cannot call a class as a function\");\n\t}\n}\n\nvar AnimateElement = function () {\n\tfunction AnimateElement(element, properties) {\n\t\tvar _this = this;\n\n\t\tvar options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n\t\t_classCallCheck(this, AnimateElement);\n\n\t\tthis.element = element;\n\t\tthis.properties = properties;\n\t\tthis.duration = options.duration || 250;\n\t\tthis.easing = options.easing || false;\n\t\tthis.easing = false;\n\t\tthis.starttime = null;\n\t\tthis.startStyles = Object.assign({}, window.getComputedStyle(element));\n\n\t\treturn new Promise(function (resolve, reject) {\n\t\t\t_this.resolve = resolve;\n\t\t\t_this.reject = reject;\n\n\t\t\treturn requestAnimationFrame(function (timestamp) {\n\t\t\t\t_this.starttime = timestamp || new Date().getTime();\n\t\t\t\treturn _this.animate(timestamp);\n\t\t\t});\n\t\t});\n\t}\n\n\t_createClass(AnimateElement, [{\n\t\tkey: 'animate',\n\t\tvalue: function animate(timestamp) {\n\t\t\tvar _this2 = this;\n\n\t\t\ttimestamp = timestamp || new Date().getTime();\n\n\t\t\tvar runtime = timestamp - this.starttime;\n\t\t\tvar progress = Math.min(runtime / this.duration, 1);\n\n\t\t\tObject.entries(this.properties).forEach(function (property) {\n\t\t\t\tvar key = property[0];\n\t\t\t\tvar val = property[1];\n\t\t\t\tvar unit = _this2.startStyles[key].indexOf('px') !== -1 ? 'px' : '';\n\n\t\t\t\tvar startValue = parseFloat(_this2.startStyles[key]);\n\t\t\t\tvar newValue = startValue + (val - startValue) * (_this2.easing ? ease(progress) : progress);\n\n\t\t\t\t_this2.element.style[key] = newValue + unit;\n\t\t\t});\n\n\t\t\tif (runtime < this.duration) {\n\t\t\t\treturn requestAnimationFrame(function (timestamp) {\n\t\t\t\t\treturn _this2.animate(timestamp);\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tthis.resolve();\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn AnimateElement;\n}();\n\nexports.default = AnimateElement;\n\nfunction ease(n) {\n\treturn --t * t * t + 1;\n\t// return .5 * (1 - Math.cos(Math.PI * n));\n}\n\n//# sourceURL=webpack:///../animate-element/dist/animate-element.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/main.scss":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/css/main.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".cinema-zoom__background {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n  cursor: zoom-out;\\n  z-index: 999999;\\n  opacity: 0;\\n  background-color: #fff; }\\n\\n.cinema-zoom__original {\\n  cursor: zoom-in; }\\n\\n.cinema-zoom__clone {\\n  position: absolute;\\n  z-index: 999999; }\\n\\n.cinema-zoom__image {\\n  position: relative;\\n  width: 100%;\\n  height: 100%;\\n  z-index: 999999; }\\n\\n.cinema-zoom__caption {\\n  position: fixed;\\n  bottom: 0;\\n  left: 50%;\\n  max-width: 800px;\\n  padding: 15px;\\n  font-family: 'Arial', sans-serif;\\n  font-size: 14px;\\n  color: #666;\\n  text-align: center;\\n  z-index: 999999;\\n  transform: translateX(-50%); }\\n  .cinema-zoom__caption:empty {\\n    display: none; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/css/main.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif (item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function (modules, mediaQuery) {\n\t\tif (typeof modules === \"string\") modules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor (var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif (typeof id === \"number\") alreadyImportedModules[id] = true;\n\t\t}\n\t\tfor (i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif (typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif (mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if (mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\toptions.attrs.type = \"text/css\";\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\toptions.attrs.type = \"text/css\";\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n\t// get current location\n\tvar location = typeof window !== \"undefined\" && window.location;\n\n\tif (!location) {\n\t\tthrow new Error(\"fixUrls requires window.location\");\n\t}\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t\treturn css;\n\t}\n\n\tvar baseUrl = location.protocol + \"//\" + location.host;\n\tvar currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n This regular expression is just a way to recursively match brackets within\n a string.\n \t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n    (  = Start a capturing group\n      (?:  = Start a non-capturing group\n          [^)(]  = Match anything that isn't a parentheses\n          |  = OR\n          \\(  = Match a start parentheses\n              (?:  = Start another non-capturing groups\n                  [^)(]+  = Match anything that isn't a parentheses\n                  |  = OR\n                  \\(  = Match a start parentheses\n                      [^)(]*  = Match anything that isn't a parentheses\n                  \\)  = Match a end parentheses\n              )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n  \\)  = Match a close parens\n \t /gi  = Get all matches, not the first.  Be case insensitive.\n  */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function (fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl.trim().replace(/^\"(.*)\"$/, function (o, $1) {\n\t\t\treturn $1;\n\t\t}).replace(/^'(.*)'$/, function (o, $1) {\n\t\t\treturn $1;\n\t\t});\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t\treturn fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t\t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/main.scss?");

/***/ }),

/***/ "./src/js/Utils.js":
/*!*************************!*\
  !*** ./src/js/Utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.createElement = createElement;\nexports.getPositionAndDimensionsOfElement = getPositionAndDimensionsOfElement;\nexports.getWindowHeight = getWindowHeight;\nexports.getWindowWidth = getWindowWidth;\nexports.getScrollX = getScrollX;\nexports.getScrollY = getScrollY;\nfunction createElement(type, className) {\n\tvar element = document.createElement(type);\n\telement.className = className;\n\n\treturn element;\n}\n\nfunction getPositionAndDimensionsOfElement(element) {\n\tvar rect = element.getBoundingClientRect();\n\n\treturn {\n\t\tx: rect.left + getScrollX(),\n\t\ty: rect.top + getScrollY(),\n\t\twidth: element.offsetWidth,\n\t\theight: element.offsetHeight\n\t};\n}\n\nfunction getWindowHeight() {\n\treturn window.innerHeight;\n}\n\nfunction getWindowWidth() {\n\treturn window.innerWidth;\n}\n\nfunction getScrollX() {\n\treturn window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;\n}\n\nfunction getScrollY() {\n\treturn window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;\n}\n\n//# sourceURL=webpack:///./src/js/Utils.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _animateElement = __webpack_require__(/*! ./../../../animate-element/dist/animate-element */ \"../animate-element/dist/animate-element.js\");\n\nvar _animateElement2 = _interopRequireDefault(_animateElement);\n\nvar _Utils = __webpack_require__(/*! ./Utils.js */ \"./src/js/Utils.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n__webpack_require__(/*! ./../css/main.scss */ \"./src/css/main.scss\");\n\n\nvar defaults = {\n\tduration: 250,\n\tpadding: 20,\n\tbackgroundOpacity: 0.95,\n\tzoomOutOnScroll: true\n};\n\nmodule.exports = function () {\n\tfunction _class(element) {\n\t\tvar options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n\t\t_classCallCheck(this, _class);\n\n\t\tthis.original = element;\n\t\tthis.image = null;\n\t\tthis.callbacks = new Map();\n\t\tthis.options = Object.assign({}, defaults, options);\n\n\t\tthis.createElements();\n\n\t\tthis._onClickOriginal = this.onClickOriginal.bind(this);\n\t\tthis._zoomOut = this.zoomOut.bind(this);\n\n\t\tthis.original.addEventListener('click', this._onClickOriginal, true);\n\t\tthis.background.addEventListener('click', this._zoomOut, true);\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: 'createElements',\n\t\tvalue: function createElements() {\n\t\t\tthis.background = (0, _Utils.createElement)('div', 'cinema-zoom__background');\n\t\t\tthis.clone = (0, _Utils.createElement)('div', 'cinema-zoom__clone');\n\t\t\tthis.caption = (0, _Utils.createElement)('div', 'cinema-zoom__caption');\n\t\t\tthis.caption.innerHTML = this.original.getAttribute('title');\n\n\t\t\tthis.original.classList.add('cinema-zoom__original');\n\t\t}\n\t}, {\n\t\tkey: 'onClickOriginal',\n\t\tvalue: function onClickOriginal() {\n\t\t\tvar _this = this;\n\n\t\t\tif (!this.image) {\n\t\t\t\tthis.createAndLoadImage().then(function () {\n\t\t\t\t\t_this.clone.append(_this.image);\n\t\t\t\t\t_this.zoomIn();\n\t\t\t\t}).catch(function () {\n\t\t\t\t\tthrow new Error('Error loading large version of image');\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tthis.zoomIn();\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'hideOriginal',\n\t\tvalue: function hideOriginal() {\n\t\t\tthis.original.style.visibility = 'hidden';\n\t\t}\n\t}, {\n\t\tkey: 'showOriginal',\n\t\tvalue: function showOriginal() {\n\t\t\tthis.original.style.visibility = 'visible';\n\t\t}\n\t}, {\n\t\tkey: 'createAndLoadImage',\n\t\tvalue: function createAndLoadImage() {\n\t\t\tvar _this2 = this;\n\n\t\t\tthis.runCallback('imageLoadStart');\n\n\t\t\treturn new Promise(function (resolve, reject) {\n\t\t\t\t_this2.image = new Image();\n\t\t\t\t_this2.image.className = 'cinema-zoom__image';\n\n\t\t\t\t_this2.image.onload = function () {\n\t\t\t\t\t_this2.runCallback('imageLoadComplete');\n\t\t\t\t\tresolve();\n\t\t\t\t};\n\n\t\t\t\t_this2.image.onerror = function () {\n\t\t\t\t\t_this2.runCallback('imageLoadError');\n\t\t\t\t\treject();\n\t\t\t\t};\n\n\t\t\t\t_this2.image.src = _this2.original.dataset.cinemaZoom;\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'zoomIn',\n\t\tvalue: async function zoomIn() {\n\t\t\tvar _this3 = this;\n\n\t\t\tthis.runCallback('zoomInStart');\n\t\t\tthis.addElementsToDocumentBody();\n\t\t\tthis.positionCloneOnOriginal();\n\t\t\tthis.hideOriginal();\n\n\t\t\tawait Promise.all([this.animateBackgroundIn(), this.animateCloneIn(), this.animateCaptionIn()]).then(function () {\n\t\t\t\t_this3.runCallback('zoomInComplete');\n\t\t\t\twindow.addEventListener('scroll', _this3._zoomOut, true);\n\t\t\t\twindow.addEventListener('resize', _this3._zoomOut, true);\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'zoomOut',\n\t\tvalue: async function zoomOut() {\n\t\t\tvar _this4 = this;\n\n\t\t\tthis.runCallback('zoomOutStart');\n\n\t\t\t// cleanup event listeners\n\t\t\twindow.removeEventListener('resize', this._zoomOut, true);\n\t\t\twindow.removeEventListener('scroll', this._zoomOut, true);\n\n\t\t\tawait Promise.all([this.animateBackgroundOut(), this.animateCloneOut(), this.animateCaptionOut()]).then(function () {\n\t\t\t\t_this4.runCallback('zoomOutComplete');\n\t\t\t\t_this4.removeElementsFromDocumentBody();\n\t\t\t\t_this4.showOriginal();\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'positionCloneOnOriginal',\n\t\tvalue: function positionCloneOnOriginal() {\n\t\t\tvar original = (0, _Utils.getPositionAndDimensionsOfElement)(this.original);\n\n\t\t\tthis.clone.style.left = original.x + 'px';\n\t\t\tthis.clone.style.top = original.y + 'px';\n\t\t\tthis.clone.style.width = original.width + 'px';\n\t\t\tthis.clone.style.height = original.height + 'px';\n\t\t}\n\t}, {\n\t\tkey: 'animateCloneIn',\n\t\tvalue: function animateCloneIn() {\n\t\t\treturn new _animateElement2.default(this.clone, this.getDestinationPositionAndCoordinates(), {\n\t\t\t\teasing: true,\n\t\t\t\tduration: this.options.duration\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'animateCloneOut',\n\t\tvalue: function animateCloneOut() {\n\t\t\tvar original = (0, _Utils.getPositionAndDimensionsOfElement)(this.original);\n\n\t\t\treturn new _animateElement2.default(this.clone, {\n\t\t\t\ttop: original.y,\n\t\t\t\tleft: original.x,\n\t\t\t\twidth: original.width,\n\t\t\t\theight: original.height\n\t\t\t}, {\n\t\t\t\teasing: true,\n\t\t\t\tduration: this.options.duration\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'animateBackgroundIn',\n\t\tvalue: function animateBackgroundIn() {\n\t\t\treturn new _animateElement2.default(this.background, {\n\t\t\t\topacity: this.options.backgroundOpacity\n\t\t\t}, {\n\t\t\t\tduration: this.options.duration\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'animateBackgroundOut',\n\t\tvalue: function animateBackgroundOut() {\n\t\t\treturn new _animateElement2.default(this.background, {\n\t\t\t\topacity: 0\n\t\t\t}, {\n\t\t\t\tduration: this.options.duration\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'animateCaptionIn',\n\t\tvalue: function animateCaptionIn() {\n\t\t\treturn new _animateElement2.default(this.caption, {\n\t\t\t\tbottom: 0\n\t\t\t}, {\n\t\t\t\teasing: true,\n\t\t\t\tduration: this.options.duration\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'animateCaptionOut',\n\t\tvalue: function animateCaptionOut() {\n\t\t\treturn new _animateElement2.default(this.caption, {\n\t\t\t\tbottom: -this.caption.offsetHeight\n\t\t\t}, {\n\t\t\t\teasing: true,\n\t\t\t\tduration: this.options.duration\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'getDestinationPositionAndCoordinates',\n\t\tvalue: function getDestinationPositionAndCoordinates() {\n\t\t\tvar width = this.image.naturalWidth;\n\t\t\tvar height = this.image.naturalHeight;\n\t\t\tvar imageRatio = height / width;\n\t\t\tvar padding = this.options.padding * 2;\n\t\t\tvar captionHeight = this.caption.offsetHeight;\n\n\t\t\t// scale down if the image is wider than the window\n\t\t\tif (width > (0, _Utils.getWindowWidth)() - padding) {\n\t\t\t\twidth = (0, _Utils.getWindowWidth)() - padding;\n\t\t\t\theight = width * imageRatio;\n\t\t\t}\n\n\t\t\t// scale down if the image is higher than the window\n\t\t\tif (height > (0, _Utils.getWindowHeight)() - padding - (captionHeight + padding)) {\n\t\t\t\theight = (0, _Utils.getWindowHeight)() - padding - (captionHeight + padding);\n\t\t\t\twidth = height / imageRatio;\n\t\t\t}\n\n\t\t\t// center coordinates\n\t\t\tvar left = ((0, _Utils.getWindowWidth)() - width) / 2;\n\t\t\tvar top = ((0, _Utils.getWindowHeight)() - height) / 2;\n\n\t\t\treturn {\n\t\t\t\ttop: Math.round((0, _Utils.getScrollY)() + top, 10),\n\t\t\t\tleft: Math.round((0, _Utils.getScrollX)() + left, 10),\n\t\t\t\twidth: Math.round(width, 10),\n\t\t\t\theight: Math.round(height, 10)\n\t\t\t};\n\t\t}\n\t}, {\n\t\tkey: 'addElementsToDocumentBody',\n\t\tvalue: function addElementsToDocumentBody() {\n\t\t\tdocument.body.append(this.background);\n\t\t\tdocument.body.append(this.caption);\n\t\t\tdocument.body.append(this.clone);\n\n\t\t\tthis.caption.style.bottom = '-' + this.caption.offsetHeight + 'px';\n\t\t}\n\t}, {\n\t\tkey: 'removeElementsFromDocumentBody',\n\t\tvalue: function removeElementsFromDocumentBody() {\n\t\t\tthis.background.parentNode.removeChild(this.background);\n\t\t\tthis.caption.parentNode.removeChild(this.caption);\n\t\t\tthis.clone.parentNode.removeChild(this.clone);\n\t\t}\n\n\t\t// register events\n\n\t}, {\n\t\tkey: 'on',\n\t\tvalue: function on(event, callback) {\n\t\t\tthis.callbacks.set(event, callback);\n\t\t}\n\n\t\t// remove registered events\n\n\t}, {\n\t\tkey: 'off',\n\t\tvalue: function off(event) {\n\t\t\tif (this.callbacks.has(event)) {\n\t\t\t\tthis.callbacks.delete(event);\n\t\t\t}\n\t\t}\n\n\t\t// running callbacks\n\n\t}, {\n\t\tkey: 'runCallback',\n\t\tvalue: function runCallback(eventName) {\n\t\t\tvar _this5 = this;\n\n\t\t\tvar delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n\n\t\t\tif (this.callbacks.has(eventName) && typeof this.callbacks.get(eventName) === 'function') {\n\t\t\t\tif (delay > 0) {\n\t\t\t\t\tsetTimeout(function () {\n\t\t\t\t\t\t_this5.callbacks.get(eventName)();\n\t\t\t\t\t}, delay);\n\t\t\t\t} else {\n\t\t\t\t\tthis.callbacks.get(eventName)();\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn _class;\n}();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });
});