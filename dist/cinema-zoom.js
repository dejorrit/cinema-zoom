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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _animateElement = __webpack_require__(1);

var _animateElement2 = _interopRequireDefault(_animateElement);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(3);


var PADDING = 10;

var CinemaZoom = function () {
	function CinemaZoom(element) {
		_classCallCheck(this, CinemaZoom);

		this.original = element;
		this.image = null;

		this.options = {
			transitionDuration: element.getAttribute('data-cz-transition-duration') || 200,
			backgroundOpacity: element.getAttribute('data-cz-background-opacity') || 1,
			zoomOutOnScroll: element.getAttribute('data-cz-zoom-out-on-scroll') || true
		};

		this.createElements();

		this._onClickOriginal = this.onClickOriginal.bind(this);
		this._zoomOut = this.zoomOut.bind(this);

		this.original.addEventListener('click', this._onClickOriginal, true);
		this.background.addEventListener('click', this._zoomOut, true);
	}

	_createClass(CinemaZoom, [{
		key: 'createElements',
		value: function createElements() {
			this.background = (0, _utils.createElement)('div', 'cinema-zoom__background');
			this.clone = (0, _utils.createElement)('div', 'cinema-zoom__clone');
			this.caption = (0, _utils.createElement)('div', 'cinema-zoom__caption');
			this.caption.innerHTML = this.original.getAttribute('title');

			this.original.classList.add('cinema-zoom__original');
		}
	}, {
		key: 'onClickOriginal',
		value: function onClickOriginal() {
			var _this = this;

			if (!this.image) {
				this.createAndLoadImage().then(function () {
					_this.clone.append(_this.image);
					_this.zoomIn();
				}).catch(function () {
					throw new Error('Error loading large version of image');
				});
			} else {
				this.zoomIn();
			}
		}
	}, {
		key: 'hideOriginal',
		value: function hideOriginal() {
			this.original.style.visibility = 'hidden';
		}
	}, {
		key: 'showOriginal',
		value: function showOriginal() {
			this.original.style.visibility = 'visible';
		}
	}, {
		key: 'createAndLoadImage',
		value: function createAndLoadImage() {
			var _this2 = this;

			return new Promise(function (resolve, reject) {
				_this2.image = new Image();
				_this2.image.className = 'cinema-zoom__image';

				_this2.image.onload = function () {
					resolve();
				};

				_this2.image.onerror = function () {
					reject();
				};

				_this2.image.src = _this2.original.getAttribute('data-cz-zoom');
			});
		}
	}, {
		key: 'zoomIn',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var _this3 = this;

				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								this.addElementsToDocumentBody();
								this.positionCloneOnOriginal();
								this.hideOriginal();

								_context.next = 5;
								return Promise.all([this.animateBackgroundIn(), this.animateCloneIn(), this.animateCaptionIn()]).then(function () {
									window.addEventListener('resize', _this3._zoomOut, true);
									if (_this3.options.zoomOutOnScroll) {
										window.addEventListener('scroll', _this3._zoomOut, true);
									}
								});

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function zoomIn() {
				return _ref.apply(this, arguments);
			}

			return zoomIn;
		}()
	}, {
		key: 'zoomOut',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
				var _this4 = this;

				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								// cleanup event listeners
								window.removeEventListener('resize', this._zoomOut, true);
								if (this.options.zoomOutOnScroll) {
									window.removeEventListener('scroll', this._zoomOut, true);
								}

								_context2.next = 4;
								return Promise.all([this.animateBackgroundOut(), this.animateCloneOut(), this.animateCaptionOut()]).then(function () {
									_this4.removeElementsFromDocumentBody();
									_this4.showOriginal();
								});

							case 4:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function zoomOut() {
				return _ref2.apply(this, arguments);
			}

			return zoomOut;
		}()
	}, {
		key: 'positionCloneOnOriginal',
		value: function positionCloneOnOriginal() {
			var original = (0, _utils.getPositionAndDimensionsOfElement)(this.original);

			this.clone.style.left = original.x + 'px';
			this.clone.style.top = original.y + 'px';
			this.clone.style.width = original.width + 'px';
			this.clone.style.height = original.height + 'px';
		}
	}, {
		key: 'animateCloneIn',
		value: function animateCloneIn() {
			return new _animateElement2.default(this.clone, this.getDestinationPositionAndCoordinates(), {
				duration: this.options.transitionDuration
			});
		}
	}, {
		key: 'animateCloneOut',
		value: function animateCloneOut() {
			var original = (0, _utils.getPositionAndDimensionsOfElement)(this.original);

			return new _animateElement2.default(this.clone, {
				top: original.y,
				left: original.x,
				width: original.width,
				height: original.height
			}, {
				duration: this.options.transitionDuration
			});
		}
	}, {
		key: 'animateBackgroundIn',
		value: function animateBackgroundIn() {
			return new _animateElement2.default(this.background, {
				opacity: this.options.backgroundOpacity
			}, {
				duration: this.options.transitionDuration
			});
		}
	}, {
		key: 'animateBackgroundOut',
		value: function animateBackgroundOut() {
			return new _animateElement2.default(this.background, {
				opacity: 0
			}, {
				duration: this.options.transitionDuration
			});
		}
	}, {
		key: 'animateCaptionIn',
		value: function animateCaptionIn() {
			return new _animateElement2.default(this.caption, {
				bottom: 0
			}, {
				duration: this.options.transitionDuration
			});
		}
	}, {
		key: 'animateCaptionOut',
		value: function animateCaptionOut() {
			return new _animateElement2.default(this.caption, {
				bottom: -this.caption.offsetHeight
			}, {
				duration: this.options.transitionDuration
			});
		}
	}, {
		key: 'getDestinationPositionAndCoordinates',
		value: function getDestinationPositionAndCoordinates() {
			var width = this.image.naturalWidth;
			var height = this.image.naturalHeight;
			var imageRatio = height / width;
			var padding = PADDING * 2;
			var captionHeight = this.caption.offsetHeight;

			// scale down if the image is wider than the window
			if (width > (0, _utils.getWindowWidth)() - padding) {
				width = (0, _utils.getWindowWidth)() - padding;
				height = width * imageRatio;
			}

			// scale down if the image is higher than the window
			if (height > (0, _utils.getWindowHeight)() - padding - (captionHeight + padding)) {
				height = (0, _utils.getWindowHeight)() - padding - (captionHeight + padding);
				width = height / imageRatio;
			}

			// center coordinates
			var left = ((0, _utils.getWindowWidth)() - width) / 2;
			var top = ((0, _utils.getWindowHeight)() - height) / 2;

			return {
				top: Math.round((0, _utils.getScrollY)() + top, 10),
				left: Math.round((0, _utils.getScrollX)() + left, 10),
				width: Math.round(width, 10),
				height: Math.round(height, 10)
			};
		}
	}, {
		key: 'addElementsToDocumentBody',
		value: function addElementsToDocumentBody() {
			document.body.appendChild(this.background);
			document.body.appendChild(this.caption);
			document.body.appendChild(this.clone);

			this.caption.style.bottom = '-' + this.caption.offsetHeight + 'px';
		}
	}, {
		key: 'removeElementsFromDocumentBody',
		value: function removeElementsFromDocumentBody() {
			this.background.parentNode.removeChild(this.background);
			this.caption.parentNode.removeChild(this.caption);
			this.clone.parentNode.removeChild(this.clone);
		}
	}]);

	return CinemaZoom;
}();

// run on all cz-zoom images


(function () {
	var images = Array.from(document.querySelectorAll('[data-cz-zoom]'));
	images.forEach(function (image) {
		if (image.nodeName !== 'IMG') {
			return false;
		}

		new CinemaZoom(image);
	});
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _createClass = function () {
  function a(a, b) {
    for (var c, d = 0; d < b.length; d++) {
      c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, 'value' in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
  }return function (b, c, d) {
    return c && a(b.prototype, c), d && a(b, d), b;
  };
}();Object.defineProperty(exports, '__esModule', { value: !0 });function _classCallCheck(a, b) {
  if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function');
}var AnimateElement = function () {
  function a(b, c) {
    var d = this,
        e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};return _classCallCheck(this, a), this.element = b, this.properties = c, this.duration = e.duration || 250, this.easing = e.easing || !1, this.easing = !1, this.starttime = null, this.startStyles = Object.assign({}, window.getComputedStyle(b)), new Promise(function (a) {
      return d.resolve = a, requestAnimationFrame(function (a) {
        return d.starttime = a || new Date().getTime(), d.animate(a);
      });
    });
  }return _createClass(a, [{ key: 'animate', value: function animate(a) {
      var b = this;a = a || new Date().getTime();var c = a - this.starttime,
          d = Math.min(c / this.duration, 1);return Object.entries(this.properties).forEach(function (a) {
        var c = a[0],
            e = a[1],
            f = -1 === b.startStyles[c].indexOf('px') ? '' : 'px',
            g = parseFloat(b.startStyles[c]),
            h = g + (e - g) * (b.easing ? ease(d) : d);b.element.style[c] = h + f;
      }), c < this.duration ? requestAnimationFrame(function (a) {
        return b.animate(a);
      }) : void this.resolve();
    } }]), a;
}();exports.default = AnimateElement;function ease() {
  return --t * t * t + 1;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createElement = createElement;
exports.getPositionAndDimensionsOfElement = getPositionAndDimensionsOfElement;
exports.getWindowHeight = getWindowHeight;
exports.getWindowWidth = getWindowWidth;
exports.getScrollX = getScrollX;
exports.getScrollY = getScrollY;
function createElement(type, className) {
	var element = document.createElement(type);
	element.className = className;

	return element;
}

function getPositionAndDimensionsOfElement(element) {
	var rect = element.getBoundingClientRect();

	return {
		x: rect.left + getScrollX(),
		y: rect.top + getScrollY(),
		width: element.offsetWidth,
		height: element.offsetHeight
	};
}

function getWindowHeight() {
	return window.innerHeight;
}

function getWindowWidth() {
	return window.innerWidth;
}

function getScrollX() {
	return window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
}

function getScrollY() {
	return window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(4);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(6)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".cinema-zoom__background {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  cursor: zoom-out;\n  z-index: 999999;\n  opacity: 0;\n  background-color: #fff; }\n\n.cinema-zoom__original {\n  cursor: zoom-in; }\n\n.cinema-zoom__clone {\n  position: absolute;\n  z-index: 999999; }\n\n.cinema-zoom__image {\n  width: 100%;\n  height: 100%; }\n\n.cinema-zoom__caption {\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  max-width: 800px;\n  padding: 15px;\n  font-family: 'Georgia', serif;\n  font-size: 14px;\n  font-style: italic;\n  color: #999;\n  text-align: center;\n  z-index: 999999;\n  transform: translateX(-50%); }\n  .cinema-zoom__caption:empty {\n    display: none; }\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ })
/******/ ]);
});