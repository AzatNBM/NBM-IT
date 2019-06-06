module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout/Benefits/Benefits.jsx":
/*!*************************************************!*\
  !*** ./components/Layout/Benefits/Benefits.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Benefits_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Benefits.scss */ "./components/Layout/Benefits/styles/Benefits.scss");
/* harmony import */ var _styles_Benefits_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Benefits_scss__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "D:\\WorkStation\\NBM-IT\\components\\Layout\\Benefits\\Benefits.jsx";

 // import CSSModules from 'react-css-modules'

 // import './styles/Grid.scss'

var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "benefits_section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "benefits_block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "benefits benefit_1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "\u041F\u043E\u043B\u043D\u044B\u0439 \u0446\u0438\u043A\u043B"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "benefit_description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "\u041F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0441\u0430\u0439\u0442\u0430 \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u0430\u0436, \u043C\u044B \u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u0440\u044B\u043D\u043E\u043A \u0438 \u0432\u0430\u0448\u0438\u0445 \u043F\u0440\u044F\u043C\u044B\u0445 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432. \u041E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u0442\u0435\u043A\u0441\u0442\u044B \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0438 \u0443\u0436\u0435 \u0437\u043D\u0430\u0435\u043C \u043F\u043E \u043A\u0430\u043A\u0438\u043C \u0437\u0430\u043F\u0440\u043E\u0441\u0430\u043C \u0438 \u043A\u0430\u043A \u0435\u0433\u043E \u043F\u0440\u043E\u0434\u0432\u0438\u0433\u0430\u0442\u044C.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "benefits benefit_2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "\u0412\u044B\u0433\u043E\u0434\u043D\u043E \u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "benefit_description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "\u041C\u044B \u043D\u0435 \u0441\u0442\u0435\u0441\u043D\u044F\u0435\u043C\u0441\u044F \u043F\u043E\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0432 \u043F\u043B\u0430\u043D\u0435 \u0443\u0437\u043A\u0438\u0445 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439, \u0435\u0441\u043B\u0438 \u043E\u043D\u0438 \u043D\u0435 \u043F\u0440\u0430\u0432\u044B, \u0447\u0442\u043E\u0431\u044B \u0432 \u0438\u0442\u043E\u0433\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u043F\u0440\u0438\u043D\u0435\u0441 \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u0443\u044E \u043F\u0440\u0438\u0431\u044B\u043B\u044C\u0451")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "benefits benefit_3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "benefit_description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "\u041C\u044B \u0431\u043E\u0440\u0435\u043C\u0441\u044F \u0437\u0430 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044E \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u043E\u0442 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043E \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F \u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438, \u043F\u0440\u0438\u0447\u0435\u043C \u0432\u0441\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u043C \u043A\u043E\u043C\u0430\u043D\u0434\u043D\u043E. \u041F\u043E\u044D\u0442\u043E\u043C\u0443 \u043C\u043E\u0436\u0435\u043C \u043F\u043E\u0440\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0437\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0438 \u0431\u044B\u0441\u0442\u0440\u043E \u0432\u043D\u043E\u0441\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F.")))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout/Benefits/styles/Benefits.scss":
/*!*********************************************************!*\
  !*** ./components/Layout/Benefits/styles/Benefits.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout/Footer/Footer.jsx":
/*!*********************************************!*\
  !*** ./components/Layout/Footer/Footer.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Footer.scss */ "./components/Layout/Footer/styles/Footer.scss");
/* harmony import */ var _styles_Footer_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_scss__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "D:\\WorkStation\\NBM-IT\\components\\Layout\\Footer\\Footer.jsx";
 // import CSSModules from 'react-css-modules'



var Footer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Footer, _Component);

  function Footer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "contact_section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "contact_block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "contact_1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0438 \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "\u041C\u044B \u0437\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u0443\u044E \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u044E."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "\u0412 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u043E\u043F\u044B\u0442\u043D\u044B\u0435 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438. \u0418 \u043F\u043E\u0442\u043E\u043C\u0443 NBM-IT \u043C\u043E\u0436\u0435\u0442 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0412\u0430\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442. \u041D\u0430\u0448\u0430 \u0446\u0435\u043B\u044C \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0438 \u043D\u0430\u0448 \u0434\u043E\u0445\u043E\u0434 \u0438 \u0412\u0430\u0448. \u0411\u0443\u0434\u0435\u043C \u0440\u0430\u0434\u044B \u043E\u0431\u0449\u0435\u043D\u0438\u044E \u0441 \u0412\u0430\u043C\u0438.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "contact_2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "\u043C. \u0427\u043A\u0430\u043B\u043E\u0432\u0441\u043A\u0430\u044F,", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), " \u0443\u043B. \u041F\u0435\u0442\u0440\u043E\u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F, \u0434.12"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "+7 (911) 238-92-09", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ins", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "\u043D\u0430 \u043A\u0430\u0440\u0442\u0435"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "contact_3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "\u041C\u043E\u0441\u043A\u0432\u0430"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "\u0417\u0432\u0435\u0437\u0434\u043D\u044B\u0439 \u0431\u0443\u043B\u044C\u0432\u0430\u0440, \u0434.21", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), " \u041C\u043E\u0441\u043A\u0432\u0430, \u0420\u043E\u0441\u0441\u0438\u044F."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "+7 (911) 238-92-09", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ins", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "\u043D\u0430 \u043A\u0430\u0440\u0442\u0435"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "contact_4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "admin@nbm-it.ru"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441:", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), "197110, \u0433 \u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433,", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), " \u0443\u043B\u0438\u0446\u0430 \u041F\u0435\u0442\u0440\u043E\u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F, \u0434\u043E\u043C 12 \u041B\u0418\u0422\u0415\u0420 \u0410,", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), "\u041E\u0424\u0418\u0421 419"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "company_requisites",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "\u041E\u0413\u0420\u041D"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "1177847142703")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "\u0418\u041D\u041D"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "7813276992")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "\u041A\u041F\u041F"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "781301001")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "\u041E\u041A\u041F\u041E"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "15397078")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "\u041E\u041A\u0422\u041C\u041E"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "40394000000")))))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layout/Footer/styles/Footer.scss":
/*!*****************************************************!*\
  !*** ./components/Layout/Footer/styles/Footer.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout/Header/Header.jsx":
/*!*********************************************!*\
  !*** ./components/Layout/Header/Header.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Header_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Header.scss */ "./components/Layout/Header/styles/Header.scss");
/* harmony import */ var _styles_Header_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Grid_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/Grid.scss */ "./components/Layout/Header/styles/Grid.scss");
/* harmony import */ var _styles_Grid_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Grid_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/logo.png */ "./components/Layout/Header/images/logo.png");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_logo_png__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "D:\\WorkStation\\NBM-IT\\components\\Layout\\Header\\Header.jsx";

 // import CSSModules from 'react-css-modules'





var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "page_header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "header_block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _images_logo_png__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "header_menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "header_menu_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "\u0423\u0441\u043B\u0443\u0433\u0438")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "\u0422\u0430\u0440\u0438\u0444\u044B")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "\u0411\u043B\u043E\u0433")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout/Header/images/logo.png":
/*!**************************************************!*\
  !*** ./components/Layout/Header/images/logo.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./components/Layout/Header/styles/Grid.scss":
/*!***************************************************!*\
  !*** ./components/Layout/Header/styles/Grid.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout/Header/styles/Header.scss":
/*!*****************************************************!*\
  !*** ./components/Layout/Header/styles/Header.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout/Offer/Offer.jsx":
/*!*******************************************!*\
  !*** ./components/Layout/Offer/Offer.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Offer_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Offer.scss */ "./components/Layout/Offer/styles/Offer.scss");
/* harmony import */ var _styles_Offer_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Offer_scss__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "D:\\WorkStation\\NBM-IT\\components\\Layout\\Offer\\Offer.jsx";

 // import CSSModules from 'react-css-modules'

 // import './styles/Grid.scss'

var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "offer_section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "offer_block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "offer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "IT-\u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "offer_description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 web-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u043F\u043A \u0438 \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u043E\u0432. \u041C\u044B \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u043C \u0432\u0430\u0448\u0443 \u043F\u0440\u0438\u0431\u044B\u043B\u044C \u043E\u0442 \u043F\u0440\u043E\u0434\u0430\u0436, \u0441\u043D\u0438\u0437\u0438\u043C \u0443\u0431\u044B\u0442\u043A\u0438 \u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "button_block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "button_order",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "button_brif",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0431\u0440\u0438\u0444"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "logo_2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "big_logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "blue_circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout/Offer/styles/Offer.scss":
/*!***************************************************!*\
  !*** ./components/Layout/Offer/styles/Offer.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout/Partnership/Partnership.jsx":
/*!*******************************************************!*\
  !*** ./components/Layout/Partnership/Partnership.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Partnership_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Partnership.scss */ "./components/Layout/Partnership/styles/Partnership.scss");
/* harmony import */ var _styles_Partnership_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Partnership_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_tw_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/tw.png */ "./components/Layout/Partnership/images/tw.png");
/* harmony import */ var _images_tw_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_tw_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_tm_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/tm.png */ "./components/Layout/Partnership/images/tm.png");
/* harmony import */ var _images_tm_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_tm_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_rtm_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/rtm.png */ "./components/Layout/Partnership/images/rtm.png");
/* harmony import */ var _images_rtm_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_rtm_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_netcat_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/netcat.png */ "./components/Layout/Partnership/images/netcat.png");
/* harmony import */ var _images_netcat_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_netcat_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images_bitrix_24_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/bitrix-24.png */ "./components/Layout/Partnership/images/bitrix-24.png");
/* harmony import */ var _images_bitrix_24_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_bitrix_24_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _images_1c_bitrix_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/1c-bitrix.png */ "./components/Layout/Partnership/images/1c-bitrix.png");
/* harmony import */ var _images_1c_bitrix_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_1c_bitrix_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_postgresql_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/postgresql.png */ "./components/Layout/Partnership/images/postgresql.png");
/* harmony import */ var _images_postgresql_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_postgresql_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _images_my_sql_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/my-sql.png */ "./components/Layout/Partnership/images/my-sql.png");
/* harmony import */ var _images_my_sql_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_images_my_sql_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _images_bitrix_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/bitrix.png */ "./components/Layout/Partnership/images/bitrix.png");
/* harmony import */ var _images_bitrix_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_images_bitrix_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _images_node_js_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/node-js.png */ "./components/Layout/Partnership/images/node-js.png");
/* harmony import */ var _images_node_js_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_images_node_js_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _images_yii_2_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/yii-2.png */ "./components/Layout/Partnership/images/yii-2.png");
/* harmony import */ var _images_yii_2_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_images_yii_2_png__WEBPACK_IMPORTED_MODULE_18__);





var _jsxFileName = "D:\\WorkStation\\NBM-IT\\components\\Layout\\Partnership\\Partnership.jsx";

 // import CSSModules from 'react-css-modules'














var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "partnership_container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "partnership_block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "partnership_1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "\u0412\u0437\u0430\u0438\u043C\u043E\u0432\u044B\u0433\u043E\u0434\u043D\u043E\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "\u041C\u044B \u0440\u0430\u0434\u044B, \u0447\u0442\u043E \u043C\u043E\u0436\u0435\u043C \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0438\u0442\u044C \u0412\u0430\u043C \u0441\u043A\u0438\u0434\u043A\u0443 \u0443 \u043D\u0430\u0448\u0438\u0445 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "partnership_2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "partners",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "partner partner_1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _images_tw_png__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "TimeWeb",
        width: "115",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "partner partner_2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _images_tm_png__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "TemplateMonster",
        width: "80",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "partner partner_3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _images_rtm_png__WEBPACK_IMPORTED_MODULE_10___default.a,
        alt: "RTM",
        width: "85",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "partner partner_4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _images_netcat_png__WEBPACK_IMPORTED_MODULE_11___default.a,
        alt: "NetCat",
        width: "100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "partner partner_5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _images_bitrix_24_png__WEBPACK_IMPORTED_MODULE_12___default.a,
        alt: "Bitrix-24",
        width: "90",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "partner partner_6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _images_1c_bitrix_png__WEBPACK_IMPORTED_MODULE_13___default.a,
        alt: "1C-Bitrix",
        width: "75",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "partnership_3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "\u041E\u0433\u0440\u043E\u043C\u043D\u044B\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "\u0417\u0430 \u0433\u043E\u0434\u044B \u0440\u0430\u0431\u043E\u0442\u044B \u043C\u044B \u043D\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043E\u043F\u044B\u0442 \u0432 \u044D\u0442\u0438\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F\u0445"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "partnership_4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "technologies",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "technology technology_1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _images_postgresql_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        alt: "PostgreSQL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "PostgreSql")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "technology technology_2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _images_my_sql_png__WEBPACK_IMPORTED_MODULE_15___default.a,
        alt: "MySQL",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "MySql")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "technology technology_3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _images_bitrix_png__WEBPACK_IMPORTED_MODULE_16___default.a,
        alt: "1C-Bitrix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "1\u0421-\u0411\u0438\u0442\u0440\u0438\u043A\u0441")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "technology technology_4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _images_node_js_png__WEBPACK_IMPORTED_MODULE_17___default.a,
        alt: "NodeJs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "NodeJs")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "technology technology_5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _images_yii_2_png__WEBPACK_IMPORTED_MODULE_18___default.a,
        alt: "Yii2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Yii-2")))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout/Partnership/images/1c-bitrix.png":
/*!************************************************************!*\
  !*** ./components/Layout/Partnership/images/1c-bitrix.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1c-bitrix-a0e22812ebbbcac22edfe93216adf9a6.png";

/***/ }),

/***/ "./components/Layout/Partnership/images/bitrix-24.png":
/*!************************************************************!*\
  !*** ./components/Layout/Partnership/images/bitrix-24.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bitrix-24-f7d1e69beaf9fda2173df6cab5fec9d8.png";

/***/ }),

/***/ "./components/Layout/Partnership/images/bitrix.png":
/*!*********************************************************!*\
  !*** ./components/Layout/Partnership/images/bitrix.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./components/Layout/Partnership/images/my-sql.png":
/*!*********************************************************!*\
  !*** ./components/Layout/Partnership/images/my-sql.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./components/Layout/Partnership/images/netcat.png":
/*!*********************************************************!*\
  !*** ./components/Layout/Partnership/images/netcat.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/netcat-9735c47e57c6261ea7c974ed698ff8f0.png";

/***/ }),

/***/ "./components/Layout/Partnership/images/node-js.png":
/*!**********************************************************!*\
  !*** ./components/Layout/Partnership/images/node-js.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./components/Layout/Partnership/images/postgresql.png":
/*!*************************************************************!*\
  !*** ./components/Layout/Partnership/images/postgresql.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./components/Layout/Partnership/images/rtm.png":
/*!******************************************************!*\
  !*** ./components/Layout/Partnership/images/rtm.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/rtm-8449dd33255847c95f8a19335c22032c.png";

/***/ }),

/***/ "./components/Layout/Partnership/images/tm.png":
/*!*****************************************************!*\
  !*** ./components/Layout/Partnership/images/tm.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/tm-cd04b53ba9d5fc59029ef379d085ee7d.png";

/***/ }),

/***/ "./components/Layout/Partnership/images/tw.png":
/*!*****************************************************!*\
  !*** ./components/Layout/Partnership/images/tw.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./components/Layout/Partnership/images/yii-2.png":
/*!********************************************************!*\
  !*** ./components/Layout/Partnership/images/yii-2.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABECAYAAADeOlj2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABI9JREFUeNrcnGtIFUEUx7er9sDItMTShJIehGIpUakfpA+VFGHQQzA0+lBgUEh+KCiwwsJCJMskqC9GD5JI0B4qPcTC3plU9M4HFRJKmpg9zNs5OEvTsnvvPmZ2Z+/A/8Pdx8yZH7OzZ86ZvZIUeCUJtBNUC/oC+gDK0rrY6/UGVOeXgGqwXxo6FcgQwkCVPjpP63ogQlgM+qgTgKwqJYRRGmRng2aA5pPf4SAPOT8E6gV9BbWAOkBvQP02A1gDumjy3gJQqXIkYGeLyHDpNUjWS4DUg/aTuniXdSZsVCqOhnCXQYVK4QjZBprCAUACIxuv0xC8HPUdVAKKZQjhM0P74mUI3ziDkGEUgoIsAjjC2K7zMoQfNkCQ9RaUYRJAFAd7BkEhWHmXjRBkHTcB4RgnW5Zh5VccgIC6D5qqE8A4UB8nO0rx3f/JIUdnIagVtEDHtamgCZzsiEcILxz0+CJBD0Dpfq6L42hDLEKodtj1Ra+1kbjAWiWGY/vhCKET1C7AOuAODk2Nc2M4thsqrwcqBYAQRECMVTk3wLNdD+WEiFAmgq6qHO/k2OaQ7MGhwzQLlCgACFy9DoOa6BUvKI9Te130j2iH/AUtJSuMfcqpnUaPYmGyW6CASY3i91FO7bxUO/hYoNFQSNkVDPrDoY0sLQdmUCAQUZRtFzjUH6E1RBI5UTcj+m2RxrjuZn+B1mSToTYeokN27QzrzdETbZ4myBxxm7KpjFGdfUZD7iUCgEggtiQxqu+gmbxDCuiagxAaGMcZx1tJvqSTeH+/AyBiKJ/BSj1FrDJQk0BbyGvLrhBdGRWQMVtHD680HK78VoGKQU84QqCzXN0m61jJC4KyzAVtBl0i5FmCWEHaqLboc3CHQBecgJaCyomfbhVCLal3h8H7BtSCM05lpReRiemeSQjDlA9j5L7lasaIkJrHuOIhyXh6PYXcrzd7tk/LAJH2J4wGbSDP+UMdnTpJ7nuk49o6Xw2LuEkDw2t7QJmgw9LIXgi1jrWR68v9AOiQ/OQ/RYRQRU1+G0HZZCirdRBD9at9APhF5g3JTRDSVTryDJQr/ctWKVeWkT4gpOppVDQIvrzO0yQnUUEd204FYX06RG6BcELHBPcONA+UT014+Ej8VFyXbaRhUSBkGnw94vUHqNBYC3Vuq9HGRYAQ7eMN4Eu5xH2eQ61V8s0YIAKE1xbc51BqLqkwa4DTEKxGjs+QehKsGOEkhDwGCymcEC1vEXQKAst0X5pbITQzhDDdjRDWMwTQI1nfF+kIBJZRpsssDEIIHpsnwwiG9TVILizdEttY40xWI0FU11jPRlDJbRCaGEPIcBuEyRLbNH8bS+PsmhjXShLTdvLcOCGy3EB+i7VxdjwO+C3BACMAmG8IcyOEBBEnQ7shZDACUMDLQDsg7GUAoJingXZAOGcRwC7eBtoBocZk53EfZY4dry47INwwAaCeRZxAJAg3DXT+PWiT3U6MHRDqdHT+uTSSLwhxwpNDCMGc2/itcfwVCbOdJaPF0cIbAn5ph9uD8a8F8G898JuFVun/DzocL38FGAD4gq/D3KPljQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./components/Layout/Partnership/styles/Partnership.scss":
/*!***************************************************************!*\
  !*** ./components/Layout/Partnership/styles/Partnership.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout/Promotion/Promotion.jsx":
/*!***************************************************!*\
  !*** ./components/Layout/Promotion/Promotion.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_Promotion_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Promotion.scss */ "./components/Layout/Promotion/styles/Promotion.scss");
/* harmony import */ var _styles_Promotion_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Promotion_scss__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "D:\\WorkStation\\NBM-IT\\components\\Layout\\Promotion\\Promotion.jsx";

 // import CSSModules from 'react-css-modules'



var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        className: "promotion_section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "airplane_and_logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "logo_3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "NBM-Logo")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "airplane_img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "promotion_block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "promotion_1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u043E\u0435 ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "\u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "button_promo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "promotion_2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "image_promo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "grey_circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "grey_circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "grey_circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "image_aero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "block_promo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "\u0410\u044D\u0440\u043E\u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0430"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "\u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0441\u0435\u0440\u0432\u0438\u0441"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "promo_description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "\u0441\u0435\u0440\u0432\u0438\u0441 \u043F\u043E \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u043A\u0440\u044B\u0442\u043E\u0439 \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0438 \u0440\u044F\u0434\u043E\u043C \u0441 \u0430\u044D\u0440\u043E\u043F\u043E\u0440\u0442\u043E\u043C \u041F\u0443\u043B\u043A\u043E\u0432\u043E"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "promotion_3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "arrow_img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "arrow_background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout/Promotion/styles/Promotion.scss":
/*!***********************************************************!*\
  !*** ./components/Layout/Promotion/styles/Promotion.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Header/Header */ "./components/Layout/Header/Header.jsx");
/* harmony import */ var _components_Layout_Offer_Offer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout/Offer/Offer */ "./components/Layout/Offer/Offer.jsx");
/* harmony import */ var _components_Layout_Benefits_Benefits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout/Benefits/Benefits */ "./components/Layout/Benefits/Benefits.jsx");
/* harmony import */ var _components_Layout_Promotion_Promotion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout/Promotion/Promotion */ "./components/Layout/Promotion/Promotion.jsx");
/* harmony import */ var _components_Layout_Partnership_Partnership__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout/Partnership/Partnership */ "./components/Layout/Partnership/Partnership.jsx");
/* harmony import */ var _components_Layout_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout/Footer/Footer */ "./components/Layout/Footer/Footer.jsx");
var _jsxFileName = "D:\\WorkStation\\NBM-IT\\pages\\index.js";








/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_Offer_Offer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_Benefits_Benefits__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_Promotion_Promotion__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_Partnership_Partnership__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
});

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WorkStation\NBM-IT\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map