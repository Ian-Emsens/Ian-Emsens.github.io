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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_skills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/skills */ \"./src/modules/skills.js\");\n/* harmony import */ var _modules_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/time */ \"./src/modules/time.js\");\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    console.info('[DOM] DOMContentLoaded');\r\n\r\n    _modules_time__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\r\n    _modules_skills__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/elements.js":
/*!*********************************!*\
  !*** ./src/modules/elements.js ***!
  \*********************************/
/*! exports provided: elements, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\nconsole.info('[Elements] Init');\r\n\r\n// A central collection of the elements I want adjusted on the page.\r\n\r\nconst elements = {\r\n    age: document.getElementById('age'),\r\n    year: document.getElementById('year'),\r\n    skills: document.getElementById('skills'),\r\n};\r\n\r\n// Prevents warning in webpack\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (elements);\n\n//# sourceURL=webpack:///./src/modules/elements.js?");

/***/ }),

/***/ "./src/modules/skills.js":
/*!*******************************!*\
  !*** ./src/modules/skills.js ***!
  \*******************************/
/*! exports provided: init, randomiseChildren, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomiseChildren\", function() { return randomiseChildren; });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/modules/elements.js\");\n\r\n\r\nfunction init() {\r\n    randomiseChildren(_elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].skills);\r\n}\r\n\r\nfunction randomiseChildren(list) {\r\n    for (var i = list.children.length; i >= 0; i--) {\r\n        list.appendChild(list.children[Math.random() * i | 0]);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    init\r\n});\n\n//# sourceURL=webpack:///./src/modules/skills.js?");

/***/ }),

/***/ "./src/modules/time.js":
/*!*****************************!*\
  !*** ./src/modules/time.js ***!
  \*****************************/
/*! exports provided: init, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/modules/elements.js\");\n\r\n\r\nfunction init() {\r\n    const now = new Date();\r\n\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].age.innerHTML = new Date(now - new Date('Dec 03 1995')).getFullYear() - 1970;\r\n    _elements__WEBPACK_IMPORTED_MODULE_0__[\"default\"].year.innerHTML = now.getFullYear();\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    init\r\n});\n\n//# sourceURL=webpack:///./src/modules/time.js?");

/***/ })

/******/ });