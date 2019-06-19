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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./content/external/fonts/Open_Sans/OpenSans-Bold.ttf":
/*!************************************************************!*\
  !*** ./content/external/fonts/Open_Sans/OpenSans-Bold.ttf ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "50145685042b4df07a1fd19957275b81.ttf";

/***/ }),

/***/ "./content/external/fonts/Open_Sans/OpenSans-BoldItalic.ttf":
/*!******************************************************************!*\
  !*** ./content/external/fonts/Open_Sans/OpenSans-BoldItalic.ttf ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "78b08a68d05d5fabb0b8effd51bf6ade.ttf";

/***/ }),

/***/ "./content/external/fonts/Open_Sans/OpenSans-Italic.ttf":
/*!**************************************************************!*\
  !*** ./content/external/fonts/Open_Sans/OpenSans-Italic.ttf ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c7dcce084c445260a266f92db56f5517.ttf";

/***/ }),

/***/ "./content/external/fonts/Open_Sans/OpenSans-Light.ttf":
/*!*************************************************************!*\
  !*** ./content/external/fonts/Open_Sans/OpenSans-Light.ttf ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1bf71be111189e76987a4bb9b3115cb7.ttf";

/***/ }),

/***/ "./content/external/fonts/Open_Sans/OpenSans-Regular.ttf":
/*!***************************************************************!*\
  !*** ./content/external/fonts/Open_Sans/OpenSans-Regular.ttf ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "629a55a7e793da068dc580d184cc0e31.ttf";

/***/ }),

/***/ "./content/external/fonts/Roboto/Roboto/Roboto-BoldItalic.ttf":
/*!********************************************************************!*\
  !*** ./content/external/fonts/Roboto/Roboto/Roboto-BoldItalic.ttf ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1eb7a893589ddce89d81cdb22a356660.ttf";

/***/ }),

/***/ "./content/external/fonts/Roboto/Roboto/Roboto-Italic.ttf":
/*!****************************************************************!*\
  !*** ./content/external/fonts/Roboto/Roboto/Roboto-Italic.ttf ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "42bbe4eefcde1297b11dc4b6491e9746.ttf";

/***/ }),

/***/ "./content/external/fonts/Roboto/Roboto/Roboto-Light.ttf":
/*!***************************************************************!*\
  !*** ./content/external/fonts/Roboto/Roboto/Roboto-Light.ttf ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fc84e998bc29b297ea20321e4c90b6ed.ttf";

/***/ }),

/***/ "./content/external/fonts/Roboto/Roboto/Roboto-Medium.ttf":
/*!****************************************************************!*\
  !*** ./content/external/fonts/Roboto/Roboto/Roboto-Medium.ttf ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d08840599e05db7345652d3d417574a9.ttf";

/***/ }),

/***/ "./content/external/fonts/Roboto/Roboto/Roboto-Regular.ttf":
/*!*****************************************************************!*\
  !*** ./content/external/fonts/Roboto/Roboto/Roboto-Regular.ttf ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3e1af3ef546b9e6ecef9f3ba197bf7d2.ttf";

/***/ }),

/***/ "./content/site.scss":
/*!***************************!*\
  !*** ./content/site.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!./site.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./content/site.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./content/site.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./content/site.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./external/fonts/Open_Sans/OpenSans-Regular.ttf */ "./content/external/fonts/Open_Sans/OpenSans-Regular.ttf"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ./external/fonts/Open_Sans/OpenSans-Bold.ttf */ "./content/external/fonts/Open_Sans/OpenSans-Bold.ttf"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ./external/fonts/Open_Sans/OpenSans-Light.ttf */ "./content/external/fonts/Open_Sans/OpenSans-Light.ttf"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ./external/fonts/Open_Sans/OpenSans-Italic.ttf */ "./content/external/fonts/Open_Sans/OpenSans-Italic.ttf"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ./external/fonts/Open_Sans/OpenSans-BoldItalic.ttf */ "./content/external/fonts/Open_Sans/OpenSans-BoldItalic.ttf"));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ./external/fonts/Roboto/Roboto/Roboto-Regular.ttf */ "./content/external/fonts/Roboto/Roboto/Roboto-Regular.ttf"));
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(/*! ./external/fonts/Roboto/Roboto/Roboto-Medium.ttf */ "./content/external/fonts/Roboto/Roboto/Roboto-Medium.ttf"));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(/*! ./external/fonts/Roboto/Roboto/Roboto-Light.ttf */ "./content/external/fonts/Roboto/Roboto/Roboto-Light.ttf"));
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(/*! ./external/fonts/Roboto/Roboto/Roboto-Italic.ttf */ "./content/external/fonts/Roboto/Roboto/Roboto-Italic.ttf"));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(/*! ./external/fonts/Roboto/Roboto/Roboto-BoldItalic.ttf */ "./content/external/fonts/Roboto/Roboto/Roboto-BoldItalic.ttf"));

// Module
exports.push([module.i, "/* Open sans */\n@font-face {\n  font-family: \"Open Sans\";\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  font-weight: normal; }\n\n@font-face {\n  font-family: \"Open Sans\";\n  src: url(" + ___CSS_LOADER_URL___1___ + ");\n  font-weight: bold; }\n\n@font-face {\n  font-family: \"Open Sans\";\n  src: url(" + ___CSS_LOADER_URL___2___ + ");\n  font-weight: 300; }\n\n@font-face {\n  font-family: \"Open Sans\";\n  src: url(" + ___CSS_LOADER_URL___3___ + ");\n  font-style: italic; }\n\n@font-face {\n  font-family: \"Open Sans\";\n  src: url(" + ___CSS_LOADER_URL___4___ + ");\n  font-style: italic;\n  font-weight: bold; }\n\n.pointer-cursor {\n  cursor: pointer; }\n\n.block {\n  display: block; }\n\n.inline-block {\n  display: inline-block; }\n\n.flex-row {\n  display: flex;\n  flex-direction: row; }\n\n.flex-row-wrap {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.flex-column {\n  display: flex;\n  flex-direction: column; }\n\n.flex-column-wrap {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap; }\n\n.flex-1 {\n  flex: 1;\n  min-width: 0; }\n\n.flex-2 {\n  flex: 2;\n  min-width: 0; }\n\n.flex-3 {\n  flex: 3;\n  min-width: 0; }\n\n.flex-4 {\n  flex: 4;\n  min-width: 0; }\n\n.flex-5 {\n  flex: 5;\n  min-width: 0; }\n\n.flex-2-perc {\n  flex: 2;\n  max-width: 40%;\n  min-width: 0; }\n\n.flex-3-perc {\n  flex: 3;\n  max-width: 60%;\n  min-width: 0; }\n\n.align-self-center {\n  align-self: center; }\n\n.justify-self-center {\n  justify-self: center; }\n\n.relative {\n  position: relative; }\n\n.absolute {\n  position: absolute; }\n\n.va-middle {\n  vertical-align: middle; }\n\n.va-top {\n  vertical-align: top; }\n\n.margin-xs-vertical {\n  margin-top: 3px;\n  margin-bottom: 3px; }\n\n.margin-xs-right {\n  margin-right: 3px; }\n\n.margin-xs-bottom {\n  margin-bottom: 3px; }\n\n.margin-xs-left {\n  margin-left: 3px; }\n\n.margin-xs-horizontal {\n  margin-left: 3px;\n  margin-right: 3px; }\n\n.margin-sm-top {\n  margin-top: 6px; }\n\n.margin-sm-left {\n  margin-left: 6px; }\n\n.margin-sm-bottom {\n  margin-bottom: 6px; }\n\n.margin-sm-vertical {\n  margin-top: 6px;\n  margin-bottom: 6px; }\n\n.margin-sm-right {\n  margin-right: 6px; }\n\n.margin-sm-horizontal {\n  margin-right: 6px;\n  margin-left: 6px; }\n\n.margin-md-top {\n  margin-top: 12px; }\n\n.margin-md-right {\n  margin-right: 12px; }\n\n.margin-md-left {\n  margin-left: 12px; }\n\n.margin-md-bottom {\n  margin-bottom: 12px; }\n\n.margin-lg-top {\n  margin-top: 24px; }\n\n.margin-lg-bottom {\n  margin-bottom: 24px; }\n\n.margin-lg-left {\n  margin-left: 24px; }\n\n.margin-xl-right {\n  margin-right: 32px; }\n\n.margin-xl-left {\n  margin-left: 32px; }\n\n.margin-xl-bottom {\n  margin-bottom: 32px; }\n\n.margin-none-vertical {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.margin-none-horizontal {\n  margin-left: 0;\n  margin-right: 0; }\n\n.margin-none-top {\n  margin-top: 0; }\n\n.margin-none-bottom {\n  margin-bottom: 0; }\n\n.padding-xs-left {\n  padding-left: 3px; }\n\n.padding-xs-right {\n  padding-right: 3px; }\n\n.padding-sm-left {\n  padding-left: 6px; }\n\n.padding-sm-right {\n  padding-right: 6px; }\n\n.padding-sm-top {\n  padding-top: 6px; }\n\n.padding-sm-bottom {\n  padding-bottom: 6px; }\n\n.padding-md-top {\n  padding-top: 12px; }\n\n.padding-md-left {\n  padding-left: 12px; }\n\n.padding-md-right {\n  padding-right: 12px; }\n\n.padding-md-bottom {\n  padding-bottom: 12px; }\n\n.padding-md-horizontal {\n  padding-left: 12px;\n  padding-right: 12px; }\n\n.padding-none-left {\n  padding-left: 0; }\n\n.padding-none-horizontal {\n  padding-left: 0;\n  padding-right: 0; }\n\n.space-after {\n  margin-bottom: 200px; }\n\n.content-wrap {\n  white-space: normal; }\n\n.content-nowrap {\n  white-space: nowrap; }\n\n.max-width-none {\n  max-width: 0; }\n\n.half-width {\n  width: 50%; }\n\n.full-width {\n  width: 100%; }\n\n.full-height {\n  height: 100%; }\n\n.quarter-width {\n  width: 25%; }\n\n.third-width {\n  width: 33.33%; }\n\n.separator {\n  background-color: #bed0e3;\n  box-shadow: 0 0 3px #446e9b;\n  height: 1px; }\n\n.bold {\n  font-weight: bold; }\n\n.italic {\n  font-style: italic; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.text-ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.line-height-1em {\n  line-height: 1em; }\n\n.font-1em {\n  font-size: 1em; }\n\n.font-bigger-sm {\n  font-size: 1.1em; }\n\n.font-bigger-md {\n  font-size: 1.2em; }\n\n.fly-in-out.ng-animating {\n  position: absolute;\n  display: block;\n  width: 90%; }\n\n.thin-scrollbar {\n  scrollbar-width: thin; }\n\n.thin-scrollbar::-webkit-scrollbar-thumb {\n  background-color: #cdcdcd; }\n\n.thin-scrollbar::-webkit-scrollbar {\n  width: 6px;\n  background-color: #f0f0f0; }\n\n.overflow-hidden {\n  overflow: hidden; }\n\n.overflow-vertical-auto {\n  overflow-y: auto; }\n\n.table-container {\n  overflow-x: auto; }\n\n.file-upload.input-group {\n  overflow: hidden;\n  position: relative; }\n  .file-upload.input-group > input[type=\"text\"] {\n    font-size: 14px;\n    height: 34px;\n    padding: 6px 12px;\n    border-bottom-right-radius: 4px !important;\n    border-top-right-radius: 4px !important;\n    z-index: 0; }\n  .file-upload.input-group > input[type=\"file\"] {\n    cursor: pointer;\n    height: 100%;\n    left: 0;\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    width: 100%; }\n\n@media print {\n  .print-hidden {\n    display: none; } }\n\n/************************** NAVIGATION **************************/\n.navbar-brand {\n  padding: 10px 15px;\n  font-size: 24px;\n  line-height: 30px; }\n\n/************************** TYPEAHEAD **************************/\n.form-control[typeaheadtags] {\n  height: auto;\n  padding: 6px 12px 2px; }\n\n.form-control.no-typeahead-value, [typeaheadtags] .no-typeahead-value {\n  color: #FF0000; }\n\n.twitter-typeahead {\n  display: block !important; }\n\n.scrollable-typeahead .tt-menu {\n  overflow-y: scroll;\n  max-height: 150px; }\n\n.tt-input.vertical-initial {\n  vertical-align: initial !important; }\n\n.tt-menu.tt-open {\n  background-color: #fcfcfc;\n  border: 1px solid #c4c4c4;\n  border-radius: 3px;\n  box-shadow: 0 0 2px #aaa;\n  padding: 4px;\n  max-height: 250px;\n  overflow-y: auto; }\n  .tt-menu.tt-open .tt-suggestion.tt-selectable {\n    white-space: nowrap;\n    cursor: pointer; }\n    .tt-menu.tt-open .tt-suggestion.tt-selectable.tt-cursor, .tt-menu.tt-open .tt-suggestion.tt-selectable:hover {\n      background-image: linear-gradient(to bottom, #337ab7 0px, #265a88 100%);\n      color: #fff;\n      margin: 0 -4px;\n      padding: 0 4px; }\n\n/************************** HEADERS **************************/\nh1 {\n  font-size: 28px; }\n\n/************************** MISC **************************/\nhr {\n  margin-top: 3px;\n  margin-bottom: 3px; }\n\n/************************** TABLE **************************/\n.table-condensed tbody > tr > td {\n  padding: 3px;\n  vertical-align: middle; }\n\n.table-condensed tbody .btn {\n  padding: 0; }\n\n/************************** BUTTONS **************************/\n.btn {\n  padding: 4px 10px;\n  font-size: 12px; }\n\n/************************** FORM **************************/\n.form-group {\n  margin-bottom: 6px; }\n\n.form-control {\n  height: 28px;\n  padding: 4px 6px;\n  font-size: 12px; }\n\nlabel {\n  font-size: 12px;\n  margin-bottom: 2px; }\n\n.bootstrap-select:not([class*=\"col-\"]):not([class*=\"form-control\"]):not(.input-group-btn) {\n  width: 100%; }\n  .bootstrap-select:not([class*=\"col-\"]):not([class*=\"form-control\"]):not(.input-group-btn) .btn-select {\n    background-color: #ffffff;\n    background-image: none;\n    border: 1px solid #cccccc;\n    border-radius: 4px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;\n    color: #222222;\n    display: block;\n    font-size: 12px;\n    height: 28px;\n    padding: 4px 6px;\n    transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n    width: 100%; }\n    .bootstrap-select:not([class*=\"col-\"]):not([class*=\"form-control\"]):not(.input-group-btn) .btn-select:hover {\n      background-image: linear-gradient(to bottom, #f7f7f7 0px, #f1f1f1 50%, #f7f7f7 100%); }\n    .bootstrap-select:not([class*=\"col-\"]):not([class*=\"form-control\"]):not(.input-group-btn) .btn-select.select-required {\n      background-color: #fefdc8; }\n    .bootstrap-select:not([class*=\"col-\"]):not([class*=\"form-control\"]):not(.input-group-btn) .btn-select.btn-select-tight {\n      font-size: 1em;\n      padding: 0 4px;\n      height: 22px;\n      max-width: 100px; }\n\n.tight .form-group {\n  margin-bottom: 2px; }\n\n.tight label {\n  font-size: 11px;\n  margin-bottom: 1px; }\n\n.tight .form-control {\n  height: 24px;\n  padding: 3px;\n  font-size: 11px; }\n  .tight .form-control[typeaheadtags] {\n    height: auto; }\n\n.tight .input-group-addon {\n  font-size: 10px;\n  padding: 4px 6px; }\n\n.tight .btn {\n  font-size: 11px;\n  padding: 2px 5px; }\n\n.tight .bootstrap-select:not([class*=\"col-\"]):not([class*=\"form-control\"]):not(.input-group-btn) .btn-select {\n  font-size: 11px;\n  height: 24px;\n  padding: 3px; }\n\nhtml {\n  height: 100%; }\n\nbody {\n  margin: 0;\n  padding: 0 !important;\n  font-family: \"Open Sans\";\n  font-size: 13px;\n  min-width: 1024px;\n  min-height: 100%; }\n\napp {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column; }\n\n.no-ie, .no-grid {\n  display: none; }\n\n.no-arrow .no-ie {\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 1.7em; }\n\n.no-arrow app {\n  display: none; }\n\n.no-cssgrid.arrow .no-grid {\n  display: block; }\n\n.loading-indicator {\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 100%;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 23456;\n  opacity: 1; }\n  .loading-indicator > div {\n    animation-duration: 350ms;\n    animation-iteration-count: infinite;\n    animation-name: rotate-loading;\n    animation-timing-function: linear;\n    border-left: 4px solid #eee;\n    border-radius: 25px;\n    border-top: 4px solid #eee;\n    height: 40px;\n    margin-left: auto;\n    margin-right: auto;\n    position: relative;\n    top: 50%;\n    width: 40px; }\n\n@keyframes rotate-loading {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.navbar-version {\n  line-height: 11px;\n  font-size: 10px;\n  color: #969696; }\n\n.navbar-update-available {\n  margin-top: 10px;\n  cursor: pointer;\n  display: inline-block; }\n  .navbar-update-available > span {\n    background-image: linear-gradient(to top, #245580, #c1d2e0, #245580);\n    background-size: 400% 400%;\n    color: transparent;\n    -webkit-background-clip: text;\n    background-clip: text;\n    animation: TextGradientAnimate 1.5s ease infinite;\n    font-size: 28px; }\n  .navbar-update-available > span + span {\n    font-size: 16px; }\n\n@keyframes TextGradientAnimate {\n  0% {\n    background-position: 50% 0%; }\n  100% {\n    background-position: 50% 100%; } }\n\n.container.main {\n  padding: 0;\n  flex: 1; }\n\n@media screen and (min-width: 1140px) {\n  .container.main {\n    width: 98%; } }\n\n@media screen and (min-width: 1440px) {\n  .container.main {\n    width: 90%; } }\n\nlogin-view.app-page {\n  width: 33%;\n  height: calc(100vh - 72px);\n  margin-left: auto;\n  margin-right: auto;\n  background-color: transparent;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-top: 0; }\n  login-view.app-page.ng-animating {\n    width: 33%;\n    margin-left: 33%; }\n  login-view.app-page > div {\n    flex: 1 0 auto; }\n\nhelp-view, .help-view {\n  background-color: #FFF;\n  display: block;\n  padding: 10px;\n  font-size: 1.4em; }\n  @media print {\n    help-view h2, .help-view h2 {\n      page-break-before: always; } }\n  help-view div > img, .help-view div > img {\n    width: 100%; }\n    help-view div > img + *, .help-view div > img + * {\n      display: block;\n      text-align: center;\n      font-weight: bold; }\n\n/* Roboto */\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + ___CSS_LOADER_URL___5___ + ");\n  font-weight: normal; }\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + ___CSS_LOADER_URL___6___ + ");\n  font-weight: bold; }\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + ___CSS_LOADER_URL___7___ + ");\n  font-weight: 300; }\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + ___CSS_LOADER_URL___8___ + ");\n  font-style: italic; }\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + ___CSS_LOADER_URL___9___ + ");\n  font-style: italic;\n  font-weight: bold; }\n\n.layout-designer {\n  font-family: 'Roboto';\n  display: grid;\n  grid-template-columns: 1fr 5fr 1fr;\n  grid-template-rows: 50px 1fr;\n  min-height: calc(100vh - 72px); }\n  .layout-designer .icon-wrapper {\n    width: 20px;\n    text-align: center;\n    display: inline-block; }\n  .layout-designer .selection {\n    color: #137cbd; }\n  .layout-designer .designer-component-header {\n    display: flex;\n    background-color: #293742;\n    color: #d0dbe2;\n    padding: 5px;\n    text-transform: uppercase; }\n    .layout-designer .designer-component-header .title {\n      flex: 1; }\n    .layout-designer .designer-component-header .icons {\n      color: #FF354B; }\n  .layout-designer header {\n    grid-column: 1 / 4;\n    background-color: #293742;\n    border-bottom: 1px solid #48555e;\n    color: #fff;\n    padding: 1em; }\n  .layout-designer aside {\n    background-color: #293742;\n    color: #d0dbe2; }\n    .layout-designer aside h4 {\n      text-transform: uppercase;\n      font-size: 1.1em;\n      margin: 5px 0; }\n    .layout-designer aside.left {\n      display: grid;\n      grid-template-rows: 1fr 1fr;\n      padding: 0; }\n      .layout-designer aside.left .tree .cdk-tree .cdk-tree-node {\n        line-height: 2em;\n        cursor: pointer;\n        display: block; }\n        .layout-designer aside.left .tree .cdk-tree .cdk-tree-node.selected {\n          background-color: #137cbd;\n          color: #ffffff; }\n        .layout-designer aside.left .tree .cdk-tree .cdk-tree-node .text {\n          padding-left: 5px; }\n      .layout-designer aside.left .palette {\n        margin: 0 12px;\n        padding-top: 10px;\n        border-top: 1px solid #48555e; }\n        .layout-designer aside.left .palette .component-palette-item {\n          cursor: -webkit-grab;\n          padding: 5px 0; }\n        .layout-designer aside.left .palette .component-palette-item:hover {\n          background-color: #137cbd; }\n    .layout-designer aside.right {\n      padding: 1em;\n      max-height: 100%; }\n  .layout-designer main {\n    background: #f4f8fb;\n    padding: 1em; }\n\n.drop-vertical-before {\n  -webkit-box-shadow: 0 -10px 6px -6px #777;\n  -moz-box-shadow: 0 -10px 6px -6px #777;\n  box-shadow: 0 -10px 6px -6px #777; }\n\n.drop-vertical-after {\n  -webkit-box-shadow: 0 10px 6px -6px #777;\n  -moz-box-shadow: 0 10px 6px -6px #777;\n  box-shadow: 0 10px 6px -6px #777; }\n\n.drop-horizontal-before {\n  -webkit-box-shadow: -10px 0 6px -6px #777;\n  -moz-box-shadow: -10px 0 6px -6px #777;\n  box-shadow: -10px 0 6px -6px #777; }\n\n.drop-horizontal-after {\n  -webkit-box-shadow: 10px 0 6px -6px #777;\n  -moz-box-shadow: 10px 0 6px -6px #777;\n  box-shadow: 10px 0 6px -6px #777; }\n\n.drop-area {\n  margin: 10px;\n  transition: opacity 0.5s;\n  opacity: 0.5;\n  color: #293742;\n  border: 3px dashed #293742; }\n  .drop-area .title-wrapper {\n    text-transform: uppercase;\n    font-weight: bold;\n    padding: 5px;\n    font-size: 1.5em;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .drop-area .title-wrapper .title {\n      padding-left: 10px; }\n  .drop-area.drop {\n    opacity: 1.0;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    box-shadow: none; }\n\n.drop-all {\n  height: 100%;\n  transition: opacity 0.5s;\n  opacity: 0.5;\n  color: #293742;\n  border: 3px dashed #293742;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n  .drop-all h2.title {\n    text-transform: uppercase;\n    font-weight: bold;\n    font-size: 3em; }\n  .drop-all .subtitle {\n    font-size: 2em; }\n  .drop-all.drop {\n    opacity: 1.0;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    box-shadow: none; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
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
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
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

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
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

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

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
		var nextSibling = getElement(options.insertAt.before, target);
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

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
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

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

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

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


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
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

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


/***/ }),

/***/ 1:
/*!*********************************!*\
  !*** multi ./content/site.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\git\universal-demo\content\site.scss */"./content/site.scss");


/***/ })

/******/ });
//# sourceMappingURL=style.js.map