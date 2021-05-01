/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PJSAccordion"] = factory();
	else
		root["PJSAccordion"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/pure-js-accordion.ts":
/*!*************************************!*\
  !*** ./src/ts/pure-js-accordion.ts ***!
  \*************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [used in sample/js/pure-js-accordion] [usage prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar typeGuard_1 = __webpack_require__(/*! ./typeGuard */ \"./src/ts/typeGuard.ts\");\nvar PJSAccordion = /** @class */ (function () {\n    function PJSAccordion(options) {\n        var _a, _b, _c;\n        this.activeClass = 'is-active';\n        this.animationClass = 'is-animation';\n        this.inactiveClass = 'is-inactive';\n        this.pjsaStyle = null;\n        (_a = options.isOpen) !== null && _a !== void 0 ? _a : (options.isOpen = false);\n        (_b = options.target) !== null && _b !== void 0 ? _b : (options.target = null);\n        (_c = options.duration) !== null && _c !== void 0 ? _c : (options.duration = 0.2);\n        this.trigger = options.trigger;\n        this.triggerState = options.isOpen;\n        this.trigger.classList.add('pjsa-trigger');\n        this.target = options.target || options.trigger.nextElementSibling;\n        if (!typeGuard_1.isTruthy(this.target)) {\n            throw new Error(\"don't exist target element.\");\n        }\n        this.target.classList.add(\"pjsa-target\");\n        this.targetState = options.isOpen;\n        this.duration = options.duration;\n        this.pjsaStyle = document.querySelector('.pjsa-style');\n        if (!this.pjsaStyle)\n            this.appendPJSAStyle();\n        this.writePJSAStyle();\n        this.applyStateClass(this.trigger, this.triggerState);\n        this.applyStateClass(this.target, this.targetState);\n        this.setEvent();\n    }\n    /**\n     * ライブラリ用のstyle要素をheadに追加する\n     */\n    PJSAccordion.prototype.appendPJSAStyle = function () {\n        var pjsaStyle = document.createElement('style');\n        var cssText = \"\\n        .pjsa-target.\" + this.inactiveClass + \" {\\n            visibility: hidden !important;\\n            height: 0 !important;\\n        }\\n        .pjsa-target.\" + this.inactiveClass + \" .pjsa-target.\" + this.inactiveClass + \" {\\n            display: none;\\n        }\";\n        var cssTextNode = document.createTextNode(cssText);\n        pjsaStyle.classList.add('pjsa-style');\n        pjsaStyle.dataset.pjsaLen = '0';\n        pjsaStyle.appendChild(cssTextNode);\n        document.head.appendChild(pjsaStyle);\n        this.pjsaStyle = pjsaStyle;\n    };\n    /**\n     * ライブラリ用のstyle要素にスタイルを書き込む\n     */\n    PJSAccordion.prototype.writePJSAStyle = function () {\n        var pjsaStyle = this.pjsaStyle;\n        if (!typeGuard_1.isTruthy(pjsaStyle)) {\n            throw new Error(\"don't exist pjsaStyle element.\");\n        }\n        var pjsaLen = parseInt(String(pjsaStyle.dataset.pjsaLen), 10);\n        var cssText = \"\\n        .pjsa-target.\" + this.animationClass + \"[data-index=\\\"\" + pjsaLen + \"\\\"] {\\n            transition: height \" + this.duration + \"s, visibility \" + this.duration + \"s, margin \" + this.duration + \"s, padding \" + this.duration + \"s;\\n        }\";\n        var cssTextNode = document.createTextNode(cssText);\n        pjsaStyle.appendChild(cssTextNode);\n        var target = this.target;\n        if (!typeGuard_1.isTruthy(target)) {\n            throw new Error(\"don't exist target element\");\n        }\n        target.dataset.index = String(pjsaLen);\n        pjsaStyle.dataset.pjsaLen = String(pjsaLen + 1);\n    };\n    /**\n     * targetStateの真偽値によってtargetElmのクラスの付け外しを行う\n     */\n    PJSAccordion.prototype.applyStateClass = function (targetElm, targetState) {\n        if (targetState) {\n            targetElm.classList.remove(this.inactiveClass);\n            targetElm.classList.add(this.activeClass);\n        }\n        else {\n            targetElm.classList.remove(this.activeClass);\n            targetElm.classList.add(this.inactiveClass);\n        }\n    };\n    /**\n     * 各要素にイベントリスナーを追加する\n     */\n    PJSAccordion.prototype.setEvent = function () {\n        this.trigger.addEventListener('click', this.toggle.bind(this));\n        var target = this.target;\n        if (!typeGuard_1.isTruthy(target)) {\n            throw new Error(\"don't exist target element.\");\n        }\n        target.addEventListener('transitionend', this.removeStyle.bind(this));\n    };\n    /**\n     * アコーディオンを開く\n     */\n    PJSAccordion.prototype.open = function () {\n        var target = this.target;\n        if (!typeGuard_1.isTruthy(target)) {\n            throw new Error(\"don't exist target element.\");\n        }\n        var targetScrollHeight = target.scrollHeight;\n        target.style.height = '0';\n        target.style.overflow = 'hidden';\n        target.offsetHeight; // CSSOMの更新\n        target.style.height = targetScrollHeight + \"px\";\n        target.classList.add(this.animationClass);\n        this.triggerState = true;\n        this.targetState = true;\n        this.applyStateClass(this.trigger, this.triggerState);\n        this.applyStateClass(target, this.targetState);\n    };\n    /**\n     * アコーディオンを閉じる\n     */\n    PJSAccordion.prototype.close = function () {\n        var target = this.target;\n        if (!typeGuard_1.isTruthy(target)) {\n            throw new Error(\"don't exist target element\");\n        }\n        var targetOffsetHeight = target.offsetHeight;\n        target.style.height = targetOffsetHeight + \"px\";\n        target.offsetHeight; // CSSOMの更新\n        target.style.height = '0';\n        target.style.overflow = 'hidden';\n        target.classList.add(this.animationClass);\n        this.triggerState = false;\n        this.targetState = false;\n        this.applyStateClass(this.trigger, this.triggerState);\n        this.applyStateClass(target, this.targetState);\n    };\n    /**\n     * triggerStateの真偽値によってアコーディオンを開閉する\n     */\n    PJSAccordion.prototype.toggle = function () {\n        if (this.triggerState) {\n            this.close();\n        }\n        else {\n            this.open();\n        }\n    };\n    /**\n     * 動的に追加されたスタイルを削除する\n     */\n    PJSAccordion.prototype.removeStyle = function (e) {\n        e.stopPropagation();\n        if (e.propertyName === 'height') {\n            var target = e.target;\n            target.style.height = '';\n            target.style.overflow = '';\n            target.classList.remove(this.animationClass);\n        }\n    };\n    return PJSAccordion;\n}());\nexports.default = PJSAccordion;\n\n\n//# sourceURL=webpack://PJSAccordion/./src/ts/pure-js-accordion.ts?");

/***/ }),

/***/ "./src/ts/typeGuard.ts":
/*!*****************************!*\
  !*** ./src/ts/typeGuard.ts ***!
  \*****************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isTruthy [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isTruthy = void 0;\n/**\n * 引数の要素がtruthyか判定\n */\nexports.isTruthy = function (element) { return !!element; };\n\n\n//# sourceURL=webpack://PJSAccordion/./src/ts/typeGuard.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/ts/pure-js-accordion.ts");
/******/ })()
.default;
});