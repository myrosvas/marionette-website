(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productlist"],{

/***/ "./app/templates/productlist.hbs":
/*!***************************************!*\
  !*** ./app/templates/productlist.hbs ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ \"./node_modules/handlebars/runtime.js\");\nfunction __default(obj) { return obj && (obj.__esModule ? obj[\"default\"] : obj); }\nmodule.exports = (Handlebars[\"default\"] || Handlebars).template({\"1\":function(container,depth0,helpers,partials,data) {\n    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return \"    <div class=\\\"product__wrapper\\\">\\n      <div>\\n        <a href=\\\"\\\">\\n          <img src=\\\"\"\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,\"imageURL\") : depth0), depth0))\n    + \"\\\" alt=\\\"\"\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,\"title\") : depth0), depth0))\n    + \"\\\" class=\\\"product__image\\\">\\n        </a>\\n\"\n    + ((stack1 = lookupProperty(helpers,\"if\").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,\"salePrice\") : depth0),{\"name\":\"if\",\"hash\":{},\"fn\":container.program(2, data, 0),\"inverse\":container.noop,\"data\":data,\"loc\":{\"start\":{\"line\":11,\"column\":8},\"end\":{\"line\":13,\"column\":15}}})) != null ? stack1 : \"\")\n    + \"        <p class=\\\"product__title\\\">\"\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,\"title\") : depth0), depth0))\n    + \"</p>\\n        <p class=\\\"product__price\\\">\"\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,\"price\") : depth0), depth0))\n    + \"</p>\\n      </div>\\n    </div>\\n\";\n},\"2\":function(container,depth0,helpers,partials,data) {\n    return \"        <span class=\\\"sale__badge\\\">Sale!</span>\\n\";\n},\"compiler\":[8,\">= 4.3.0\"],\"main\":function(container,depth0,helpers,partials,data) {\n    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return \"<div class=\\\"product-list__container content__wrapper\\\">\\n  <h3 class=\\\"zigcy__title\\\">\"\n    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,\"productlist\") : depth0)) != null ? lookupProperty(stack1,\"title\") : stack1), depth0))\n    + \"</h3>\\n  <h2 class=\\\"zigcy__subtitle\\\">\"\n    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,\"productlist\") : depth0)) != null ? lookupProperty(stack1,\"subtitle\") : stack1), depth0))\n    + \"</h2>\\n  <div class=\\\"products__container\\\">\\n\"\n    + ((stack1 = lookupProperty(helpers,\"each\").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,\"productlist\") : depth0)) != null ? lookupProperty(stack1,\"products\") : stack1),{\"name\":\"each\",\"hash\":{},\"fn\":container.program(1, data, 0),\"inverse\":container.noop,\"data\":data,\"loc\":{\"start\":{\"line\":5,\"column\":4},\"end\":{\"line\":18,\"column\":13}}})) != null ? stack1 : \"\")\n    + \"  </div>\\n</div>\";\n},\"useData\":true});\n\n//# sourceURL=webpack:///./app/templates/productlist.hbs?");

/***/ }),

/***/ "./app/views/productlist.js":
/*!**********************************!*\
  !*** ./app/views/productlist.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductListView; });\n/* harmony import */ var backbone_marionette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! backbone.marionette */ \"./node_modules/backbone.marionette/lib/core/backbone.marionette.js\");\n/* harmony import */ var backbone_marionette__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(backbone_marionette__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _templates_productlist_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/productlist.hbs */ \"./app/templates/productlist.hbs\");\n/* harmony import */ var _templates_productlist_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates_productlist_hbs__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass ProductListView extends backbone_marionette__WEBPACK_IMPORTED_MODULE_0___default.a.LayoutView \n{\n  constructor(options) \n  {\n    options.template = _templates_productlist_hbs__WEBPACK_IMPORTED_MODULE_1___default.a;\n\n    super(options)\n  }\n}\n\n\n//# sourceURL=webpack:///./app/views/productlist.js?");

/***/ })

}]);