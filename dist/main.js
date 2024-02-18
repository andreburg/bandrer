
    (function(modules) {
      function require(path) {
        const [status, module, fn] = modules[path];
        if(!status){
          fn(require, module, module.exports);
          modules[path][0] = 1;
          modules[path][1] = {exports: {...module.exports}};
        }
        return module.exports;
      }
      require("client/public/js/index.js");
    })({'client/public/js/index.js': [
      0,
      { exports : {} },
      function(require, module, exports) {
        "use strict";

var _Route = require("client/public/js/Routes/Route.js");
var _Router = require("client/public/js/Routes/Router.js");
var _CalculatorPage = require("client/public/js/Pages/CalculatorPage/CalculatorPage.js");
var _HistoryPage = require("client/public/js/Pages/HistoryPage/HistoryPage.js");
var _State = require("client/public/js/State/State.js");
var globalState = new _State.State({});
var app = document.querySelector("#app");
document.addEventListener("DOMContentLoaded", function () {
  app = document.querySelector("#app");
  addEventListener("DOMContentLoaded", route);
  addEventListener("reRoute", route);
  addEventListener("Render", route);
});
var router = new _Router.Router([new _Route.Route("/", new _CalculatorPage.CalculatorPage()), new _Route.Route("/calculator", new _CalculatorPage.CalculatorPage()), new _Route.Route("/history", new _HistoryPage.HistoryPage())]);
function removeAllChildren(parentElement) {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}
var route = function route() {
  var route = router.LoadRoute(globalState.state.page.route);
  removeAllChildren(app);
  app.appendChild(route.comp.getHtml());
  route.comp.sideEffects();
  app.classList.value = "darkmode-".concat(globalState.state.page.darkmode);
};
      }
    ],'client/public/js/Routes/Route.js': [
      0,
      { exports : {} },
      function(require, module, exports) {
        "use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Route = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Route = exports.Route = /*#__PURE__*/_createClass(function Route(route, component) {
  _classCallCheck(this, Route);
  this.comp = component;
  this.route = route;
});
      }
    ],'client/public/js/Routes/Router.js': [
      0,
      { exports : {} },
      function(require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Router = void 0;
var _Route = require("client/public/js/Routes/Route.js");
var _NotFound = require("client/public/js/Pages/NotFound/NotFound.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Router = exports.Router = /*#__PURE__*/function () {
  function Router(routes) {
    _classCallCheck(this, Router);
    this.routes = routes;
    this.notFound = new _Route.Route("Not Found", new _NotFound.NotFoundPage());
  }
  _createClass(Router, [{
    key: "LoadRoute",
    value: function LoadRoute(url) {
      var route = this.routes.find(function (r) {
        return r.route == url;
      });
      route = route ? route : this.notFound;
      return route;
    }
  }]);
  return Router;
}();
      }
    ],'client/public/js/Pages/NotFound/NotFound.js': [
      0,
      { exports : {} },
      function(require, module, exports) {
        "use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFoundPage = void 0;
var _Page2 = require("client/public/js/Pages/Page.js");
var _State = require("client/public/js/State/State.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var NotFoundPage = exports.NotFoundPage = /*#__PURE__*/function (_Page) {
  _inherits(NotFoundPage, _Page);
  function NotFoundPage(params) {
    var _this;
    _classCallCheck(this, NotFoundPage);
    _this = _callSuper(this, NotFoundPage, [params]);
    _this.globalState = new _State.State({});
    _this.globalState.notifyChange(_objectSpread(_objectSpread({}, _this.globalState.state), {}, {
      page: _objectSpread(_objectSpread({}, _this.globalState.state.page), {}, {
        route: "/"
      })
    }));
    return _this;
  }
  _createClass(NotFoundPage, [{
    key: "getHtml",
    value: function getHtml() {
      return "\n            <div>404 Not Found</div>\n        ";
    }
  }]);
  return NotFoundPage;
}(_Page2.Page);
      }
    ],'client/public/js/Pages/Page.js': [
      0,
      { exports : {} },
      function(require, module, exports) {
        "use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = void 0;
var _Component2 = require("client/public/js/Components/Component.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Page = exports.Page = /*#__PURE__*/function (_Component) {
  _inherits(Page, _Component);
  function Page(params) {
    _classCallCheck(this, Page);
    return _callSuper(this, Page, [params]);
  }
  return _createClass(Page);
}(_Component2.Component);
      }
    ],'client/public/js/Components/Component.js': [
      0,
      { exports : {} },
      function(require, module, exports) {
        "use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildComponent = exports.Component = void 0;
var _Components = require("client/public/js/Components/Components.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _RENDER = /*#__PURE__*/new WeakMap();
var Component = exports.Component = /*#__PURE__*/function () {
  function Component(params) {
    _classCallCheck(this, Component);
    _classPrivateFieldInitSpec(this, _RENDER, {
      writable: true,
      value: void 0
    });
    this.comps = new _Components.Components();
    _classPrivateFieldSet(this, _RENDER, new Event("Render"));
  }
  _createClass(Component, [{
    key: "sideEffects",
    value: function sideEffects() {
      this.comps.loadComponents();
    }
  }, {
    key: "RENDER",
    value: function RENDER() {
      dispatchEvent(_classPrivateFieldGet(this, _RENDER));
    }
  }, {
    key: "getHtml",
    value: function getHtml() {
      return "";
    }
  }]);
  return Component;
}();
var buildComponent = exports.buildComponent = function buildComponent(componentType, attributes, components, innerText) {
  var htmlComponent = document.createElement(componentType);
  for (var attributeKey in attributes) {
    if (attributes.hasOwnProperty(attributeKey)) {
      var attributeValue = attributes[attributeKey];
      htmlComponent.setAttribute(attributeKey, attributeValue);
    }
  }
  for (var i = 0; i < components.length; i++) {
    htmlComponent.appendChild(components[i]);
  }
  if (innerText) {
    htmlComponent.innerText = innerText;
  }
  return htmlComponent;
};
      }
    ],'client/public/js/Components/Components.js': [
      0,
      { exports : {} },
      function(require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Components = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Components = exports.Components = /*#__PURE__*/function () {
  function Components() {
    _classCallCheck(this, Components);
    this.comps = [];
  }
  _createClass(Components, [{
    key: "Add",
    value: function Add(name, comp) {
      this.comps.push({
        Name: name,
        Component: comp,
        Active: false
      });
    }
  }, {
    key: "Render",
    value: function Render(name) {
      var c = this.comps.find(function (c) {
        return c.Name == name;
      });
      if (!c) {
        c = new Component();
      }
      c.Active = true;
      return c.Component.getHtml();
    }
  }, {
    key: "Get",
    value: function Get(name) {
      var c = this.comps.find(function (c) {
        return c.Name == name;
      });
      if (!c) {
        c = new Component();
      }
      return c.Component;
    }
  }, {
    key: "loadComponents",
    value: function loadComponents() {
      this.comps.forEach(function (c) {
        if (c.Active) c.Component.sideEffects();
      });
    }
  }]);
  return Components;
}();
      }
    ],'client/public/js/State/State.js': [
      0,
      { exports : {} },
      function(require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.State = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var State = exports.State = /*#__PURE__*/function () {
  function State(params) {
    _classCallCheck(this, State);
    if (State.instance) {
      if (params.listener) State.instance.listeners = [].concat(_toConsumableArray(State.instance.listeners), [params.listener]);
      return State.instance;
    }
    State.instance = this;
    if (localStorage.getItem('state')) {
      State.instance.state = JSON.parse(localStorage.getItem('state'));
    } else {
      State.instance.state = {
        "calculator": {
          "expression": {
            "input": "",
            "output": "",
            "display": ""
          },
          "history": [],
          "buttonState": {
            inverse: true,
            degrees: true
          }
        },
        "page": {
          darkmode: true,
          route: "/"
        }
      };
    }
    if (!State.instance.state.page.route) state.instance.page.route = "/";
    State.instance.listeners = params.listener ? [params.listener] : [];
    localStorage.setItem('state', JSON.stringify(State.instance.state));
  }
  _createClass(State, [{
    key: "notifyChange",
    value: function notifyChange(obj) {
      State.instance.state = _objectSpread(_objectSpread({}, State.instance.state), obj);
      localStorage.setItem('state', JSON.stringify(State.instance.state));
      dispatchEvent(new Event("Render"));
    }
  }, {
    key: "silentChange",
    value: function silentChange(obj) {
      State.instance.state = _objectSpread(_objectSpread({}, State.instance.state), obj);
      localStorage.setItem('state', JSON.stringify(State.instance.state));
    }
  }]);
  return State;
}();
      }
    ],'client/public/js/Pages/CalculatorPage/CalculatorPage.js': [
      0,
      { exports : {} },
      function(require, module, exports) {
        "use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalculatorPage = void 0;
var _Calculator = require("client/public/js/Components/Calculator/Calculator.js");
var _Nav = require("client/public/js/Components/Nav/Nav.js");
var _Page2 = require("client/public/js/Pages/Page.js");
var _Component = require("client/public/js/Components/Component.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var CalculatorPage = exports.CalculatorPage = /*#__PURE__*/function (_Page) {
  _inherits(CalculatorPage, _Page);
  function CalculatorPage(params) {
    var _this;
    _classCallCheck(this, CalculatorPage);
    _this = _callSuper(this, CalculatorPage, [params]);
    _this.comps.Add("nav", new _Nav.Nav());
    _this.comps.Add("calculator", new _Calculator.Calculator());
    return _this;
  }
  _createClass(CalculatorPage, [{
    key: "getHtml",
    value: function getHtml() {
      return (0, _Component.buildComponent)("div", {
        id: "calc-page"
      }, [this.comps.Render("nav"), this.comps.Render("calculator")]);
    }
  }]);
  return CalculatorPage;
}(_Page2.Page);
      }
    ],'client/public/js/Components/Calculator/Calculator.js': [
      0,
      { exports : {} },
      function(require, module, exports) {
        "use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calculator = void 0;
var _Component2 = require("client/public/js/Components/Component.js");
var _CalculatorButton = require("client/public/js/Components/Calculator/CalculatorButton.js");
var _State = require("client/public/js/State/State.js");
var _MathExpression = require("client/public/js/Calculator/MathExpression.js");
var _Components = require("client/public/js/Components/Components.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Calculator = exports.Calculator = /*#__PURE__*/function (_Component) {
  _inherits(Calculator, _Component);
  function Calculator(params) {
    var _this;
    _classCallCheck(this, Calculator);
    _this = _callSuper(this, Calculator, [params]);
    _this.initComponents();
    _this.globalState = new _State.State({});
    _this.inverse = _this.globalState.state.calculator.buttonState.inverse;
    return _this;
  }
  _createClass(Calculator, [{
    key: "sideEffects",
    value: function sideEffects() {
      var _this2 = this;
      var tbx = document.querySelector(".calc-input-text");
      tbx.addEventListener("focusout", function (e) {
        _this2.globalState.silentChange(_objectSpread(_objectSpread({}, _this2.globalState.state), {}, {
          calculator: _objectSpread(_objectSpread({}, _this2.globalState.state.calculator), {}, {
            expression: _objectSpread(_objectSpread({}, _this2.globalState.state.calculator.expression), {}, {
              input: tbx.value,
              display: "input"
            })
          })
        }));
      });
      this.comps.loadComponents();
    }
  }, {
    key: "getHtml",
    value: function getHtml() {
      this.inverse = this.globalState.state.calculator.buttonState.inverse;
      this.degrees = this.globalState.state.calculator.buttonState.degrees;
      this.comps = new _Components.Components();
      this.initComponents();
      return (0, _Component2.buildComponent)("div", {
        "class": "calc-container"
      }, [(0, _Component2.buildComponent)("div", {
        "class": "calc-expression-container"
      }, [(0, _Component2.buildComponent)("input", {
        "class": "calc-input-text",
        value: "".concat(this.globalState.state.calculator.expression[this.globalState.state.calculator.expression.display])
      }, [])]), (0, _Component2.buildComponent)("div", {
        "class": "calc-btn-grid"
      }, [(0, _Component2.buildComponent)("div", {
        "class": "calc-btn-function-grid"
      }, [this.inverse ? this.comps.Render("calcbtncosec") : this.comps.Render("calcbtnsin"), this.inverse ? this.comps.Render("calcbtnsec") : this.comps.Render("calcbtncos"), this.inverse ? this.comps.Render("calcbtncot") : this.comps.Render("calcbtntan"), this.comps.Render("calcbtnln"), this.comps.Render("calcbtneuler"), this.comps.Render("calcbtnpi"), this.comps.Render("calcbtnopenb"), this.comps.Render("calcbtncloseb")]), (0, _Component2.buildComponent)("div", {
        "class": "calc-btn-settings-grid"
      }, [this.comps.Render("calcbtninverse"), this.comps.Render("calcbtndegrees")]), (0, _Component2.buildComponent)("div", {
        "class": "calc-btn-number-grid"
      }, [this.comps.Render("calcbtn7"), this.comps.Render("calcbtn8"), this.comps.Render("calcbtn9"), this.comps.Render("calcbtn4"), this.comps.Render("calcbtn5"), this.comps.Render("calcbtn6"), this.comps.Render("calcbtn1"), this.comps.Render("calcbtn2"), this.comps.Render("calcbtn3"), this.comps.Render("calcbtn0"), this.comps.Render("calcbtndecimal")]), (0, _Component2.buildComponent)("div", {
        "class": "calc-btn-operations-grid"
      }, [this.comps.Render("calcbtnclear"), this.comps.Render("calcbtndelete"), this.comps.Render("calcbtnmult"), this.comps.Render("calcbtndivide"), this.comps.Render("calcbtnplus"), this.comps.Render("calcbtnminus"), this.comps.Render("calcbtnpower"), this.comps.Render("calcbtncalculate")])])]);
    }
  }, {
    key: "initComponents",
    value: function initComponents() {
      var _this3 = this;
      this.comps.Add("calcbtnpower", new _CalculatorButton.CalculatorButton({
        text: "^",
        val: "^",
        name: "calcbtnpower"
      }));
      this.comps.Add("calcbtndecimal", new _CalculatorButton.CalculatorButton({
        text: ".",
        val: ".",
        name: "calcbtndecimal"
      }));
      this.comps.Add("calcbtninverse", new _CalculatorButton.CalculatorButton({
        text: "inv",
        val: "inv",
        name: "calcbtninverse",
        "class": "inverse-btn-".concat(this.inverse),
        func: function func() {
          _this3.globalState.notifyChange(_objectSpread(_objectSpread({}, _this3.globalState.state), {}, {
            calculator: _objectSpread(_objectSpread({}, _this3.globalState.state.calculator), {}, {
              buttonState: _objectSpread(_objectSpread({}, _this3.globalState.state.calculator.buttonState), {}, {
                inverse: !_this3.globalState.state.calculator.buttonState.inverse
              })
            })
          }));
        }
      }));
      this.comps.Add("calcbtndegrees", new _CalculatorButton.CalculatorButton({
        text: "deg",
        val: "deg",
        name: "calcbtndegrees",
        "class": "degree-btn-".concat(this.degrees),
        func: function func() {
          _this3.globalState.notifyChange(_objectSpread(_objectSpread({}, _this3.globalState.state), {}, {
            calculator: _objectSpread(_objectSpread({}, _this3.globalState.state.calculator), {}, {
              buttonState: _objectSpread(_objectSpread({}, _this3.globalState.state.calculator.buttonState), {}, {
                degrees: !_this3.globalState.state.calculator.buttonState.degrees
              })
            })
          }));
        }
      }));
      this.comps.Add("calcbtn0", new _CalculatorButton.CalculatorButton({
        text: "0",
        val: "0",
        name: "calcbtn0"
      }));
      this.comps.Add("calcbtn1", new _CalculatorButton.CalculatorButton({
        text: "1",
        val: "1",
        name: "calcbtn1"
      }));
      this.comps.Add("calcbtn2", new _CalculatorButton.CalculatorButton({
        text: "2",
        val: "2",
        name: "calcbtn2"
      }));
      this.comps.Add("calcbtn3", new _CalculatorButton.CalculatorButton({
        text: "3",
        val: "3",
        name: "calcbtn3"
      }));
      this.comps.Add("calcbtn4", new _CalculatorButton.CalculatorButton({
        text: "4",
        val: "4",
        name: "calcbtn4"
      }));
      this.comps.Add("calcbtn5", new _CalculatorButton.CalculatorButton({
        text: "5",
        val: "5",
        name: "calcbtn5"
      }));
      this.comps.Add("calcbtn6", new _CalculatorButton.CalculatorButton({
        text: "6",
        val: "6",
        name: "calcbtn6"
      }));
      this.comps.Add("calcbtn7", new _CalculatorButton.CalculatorButton({
        text: "7",
        val: "7",
        name: "calcbtn7"
      }));
      this.comps.Add("calcbtn8", new _CalculatorButton.CalculatorButton({
        text: "8",
        val: "8",
        name: "calcbtn8"
      }));
      this.comps.Add("calcbtn9", new _CalculatorButton.CalculatorButton({
        text: "9",
        val: "9",
        name: "calcbtn9"
      }));
      this.comps.Add("calcbtnpi", new _CalculatorButton.CalculatorButton({
        text: "π",
        val: "π",
        name: "calcbtnpi"
      }));
      this.comps.Add("calcbtneuler", new _CalculatorButton.CalculatorButton({
        text: "e",
        val: "e",
        name: "calcbtneuler"
      }));
      this.comps.Add("calcbtnsin", new _CalculatorButton.CalculatorButton({
        text: "sin",
        val: "sin(",
        name: "calcbtnsin"
      }));
      this.comps.Add("calcbtncos", new _CalculatorButton.CalculatorButton({
        text: "cos",
        val: "cos(",
        name: "calcbtncos"
      }));
      this.comps.Add("calcbtntan", new _CalculatorButton.CalculatorButton({
        text: "tan",
        val: "tan(",
        name: "calcbtntan"
      }));
      this.comps.Add("calcbtncosec", new _CalculatorButton.CalculatorButton({
        text: "cosec",
        val: "cosec(",
        name: "calcbtncosec"
      }));
      this.comps.Add("calcbtnsec", new _CalculatorButton.CalculatorButton({
        text: "sec",
        val: "sec(",
        name: "calcbtnsec"
      }));
      this.comps.Add("calcbtncot", new _CalculatorButton.CalculatorButton({
        text: "cot",
        val: "cot(",
        name: "calcbtncot"
      }));
      this.comps.Add("calcbtnln", new _CalculatorButton.CalculatorButton({
        text: "ln",
        val: "ln(",
        name: "calcbtnln"
      }));
      this.comps.Add("calcbtnplus", new _CalculatorButton.CalculatorButton({
        text: "+",
        val: "+",
        name: "calcbtnplus"
      }));
      this.comps.Add("calcbtnminus", new _CalculatorButton.CalculatorButton({
        text: "-",
        val: "-",
        name: "calcbtnminus"
      }));
      this.comps.Add("calcbtnmult", new _CalculatorButton.CalculatorButton({
        text: "*",
        val: "*",
        name: "calcbtnmult"
      }));
      this.comps.Add("calcbtndivide", new _CalculatorButton.CalculatorButton({
        text: "/",
        val: "/",
        name: "calcbtndivide"
      }));
      this.comps.Add("calcbtnopenb", new _CalculatorButton.CalculatorButton({
        text: "(",
        val: "(",
        name: "calcbtnopenb"
      }));
      this.comps.Add("calcbtncloseb", new _CalculatorButton.CalculatorButton({
        text: ")",
        val: ")",
        name: "calcbtncloseb"
      }));
      this.comps.Add("calcbtncalculate", new _CalculatorButton.CalculatorButton({
        text: "=",
        val: "=",
        name: "calcbtncalculate",
        func: function func() {
          var newNum = new Number(new _MathExpression.MathExpression(_this3.globalState.state.calculator.expression.input).getVal());
          if (!/^[0-9.e-]+$/.test(newNum)) newNum = undefined;
          _this3.globalState.silentChange(_objectSpread(_objectSpread({}, _this3.globalState.state), {}, {
            calculator: _objectSpread(_objectSpread({}, _this3.globalState.state.calculator), {}, {
              expression: _objectSpread(_objectSpread({}, _this3.globalState.state.expression), {}, {
                output: newNum,
                input: _this3.globalState.state.calculator.expression.input,
                display: "output"
              })
            })
          }));
          _this3.globalState.notifyChange(_objectSpread(_objectSpread({}, _this3.globalState.state), {}, {
            calculator: _objectSpread(_objectSpread({}, _this3.globalState.state.calculator), {}, {
              history: _this3.globalState.state.calculator.history ? [].concat(_toConsumableArray(_this3.globalState.state.calculator.history), [_this3.globalState.state.calculator.expression]) : [_this3.globalState.state.calculator.expression]
            })
          }));
        }
      }));
      this.comps.Add("calcbtnclear", new _CalculatorButton.CalculatorButton({
        text: "AC",
        val: "AC",
        name: "calcbtnclear",
        func: function func() {
          _this3.globalState.notifyChange(_objectSpread(_objectSpread({}, _this3.globalState.state), {}, {
            calculator: _objectSpread(_objectSpread({}, _this3.globalState.state.calculator), {}, {
              expression: {
                input: "",
                output: "",
                display: "input"
              }
            })
          }));
        }
      }));
      this.comps.Add("calcbtndelete", new _CalculatorButton.CalculatorButton({
        text: "DEL",
        val: "DEL",
        name: "calcbtndelete",
        func: function func() {
          _this3.globalState.notifyChange(_objectSpread(_objectSpread({}, _this3.globalState.state), {}, {
            calculator: _objectSpread(_objectSpread({}, _this3.globalState.state.calculator), {}, {
              expression: _objectSpread(_objectSpread({}, _this3.globalState.state.calculator.expression), {}, {
                input: "".concat(_this3.globalState.state.calculator.expression.input).slice(0, -1)
              })
            })
          }));
        }
      }));
    }
  }]);
  return Calculator;
}(_Component2.Component);
      }
    ],'client/public/js/Components/Calculator/CalculatorButton.js': [
      0,
      { exports : {} },
      function(require, module, exports) {
        "use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalculatorButton = void 0;
var _Component2 = require("client/public/js/Components/Component.js");
var _State = require("client/public/js/State/State.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var CalculatorButton = exports.CalculatorButton = /*#__PURE__*/function (_Component) {
  _inherits(CalculatorButton, _Component);
  function CalculatorButton(params) {
    var _this;
    _classCallCheck(this, CalculatorButton);
    _this = _callSuper(this, CalculatorButton, [params]);
    _this.text = params.text;
    _this.calcVal = params.val;
    _this.name = params.name;
    _this.globalState = new _State.State({});
    _this.func = params.func;
    _this["class"] = params["class"];
    return _this;
  }
  _createClass(CalculatorButton, [{
    key: "sideEffects",
    value: function sideEffects() {
      var _this2 = this;
      var cBtn = document.querySelector("#".concat(this.name, "-calcButton"));
      cBtn.style.cursor = "pointer";
      cBtn.addEventListener("click", function (e) {
        if (_this2.func) {
          _this2.func();
        } else {
          _this2.globalState.notifyChange(_objectSpread(_objectSpread({}, _this2.globalState.state), {}, {
            calculator: _objectSpread(_objectSpread({}, _this2.globalState.state.calculator), {}, {
              expression: _objectSpread(_objectSpread({}, _this2.globalState.state.calculator.expression), {}, {
                input: _this2.globalState.state.calculator.expression ? _this2.globalState.state.calculator.expression.input + _this2.calcVal : _this2.calcVal,
                display: "input"
              })
            })
          }));
        }
      });
    }
  }, {
    key: "getHtml",
    value: function getHtml() {
      return (0, _Component2.buildComponent)("div", _defineProperty({
        "class": "calc-container",
        id: "".concat(this.name, "-calcButton"),
        style: "user-select: none;"
      }, "class", "calc-btn ".concat(this["class"] ? this["class"] : "")), [], this.text);
    }
  }]);
  return CalculatorButton;
}(_Component2.Component);
      }
    ],'client/public/js/Calculator/MathExpression.js': [
      0,
      { exports : {} },
      function(require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokenizeMathOperation = exports.tokenizeMathFunction = exports.replaceMathConstants = exports.operations = exports.mathConstants = exports.getMatchingBrackets = exports.functions = exports.formatSigns = exports.formatBrackets = exports.findAllOccurrences = exports.clean = exports.MathExpression = void 0;
var _State = require("client/public/js/State/State.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var globalState = new _State.State({});
var degrees = function degrees() {
  return globalState.state.calculator.buttonState.degrees ? Math.PI / 180 : 1;
};
var operations = exports.operations = {
  "-": function _(l, r) {
    if (!l) {
      l = 0;
    }
    return new Number(l) - new Number(r);
  },
  "+": function _(l, r) {
    if (!l) {
      l = 0;
    }
    return new Number(l) + new Number(r);
  },
  "*": function _(l, r) {
    return new Number(l) * new Number(r);
  },
  "/": function _(l, r) {
    return new Number(l) / new Number(r);
  },
  "^": function _(l, r) {
    return Math.pow(new Number(l), new Number(r));
  },
  "%": function _(l, r) {
    return new Number(l) % new Number(r);
  },
  f: function f(l, r) {
    return functions[l](new Number(r));
  }
};
var functions = exports.functions = {
  cosec: function cosec(val) {
    return Math.asin(val) / degrees();
  },
  sec: function sec(val) {
    return Math.acos(val) / degrees();
  },
  cot: function cot(val) {
    return Math.atan(val) / degrees();
  },
  sin: function sin(val) {
    return Math.sin(val * degrees());
  },
  cos: function cos(val) {
    return Math.cos(val * degrees());
  },
  tan: function tan(val) {
    return Math.tan(val * degrees());
  },
  ln: function ln(val) {
    return Math.log(val);
  },
  g: function g(val) {
    return new MathExpression("2(x)^2+2".replace(/x/g, val)).getVal();
  },
  sqrt: function sqrt(val) {
    return new MathExpression("(x)^(1/2)".replace(/x/g, val)).getVal();
  },
  floor: function floor(val) {
    return Math.floor(val);
  },
  ceil: function ceil(val) {
    return Math.floor(val);
  },
  round: function round(val) {
    return Math.round(val);
  }
};
var mathConstants = exports.mathConstants = {
  π: function π() {
    return Math.PI;
  },
  e: function e() {
    return Math.E;
  }
};
var clean = exports.clean = function clean(expression) {
  try {
    if (getMatchingBrackets(expression).find(function (b) {
      return b[0] == 0 && b[1] == expression.length - 1;
    })) return clean(expression.substring(1, expression.length - 1));
    return expression.replace(" ", "");
  } catch (_unused) {
    return null;
  }
};
var tokenizeMathOperation = exports.tokenizeMathOperation = function tokenizeMathOperation(expression) {
  try {
    for (var op in operations) {
      if (op != "f") {
        var ops = findAllOccurrences(expression, op);
        for (var i = 0; i < ops.length; i++) {
          var index = ops[i];
          if (index > -1) {
            var brackets = getMatchingBrackets(expression);
            var valid = true;
            if (brackets) {
              for (var j = 0; j < brackets.length; j++) {
                if (!(index > brackets[j][1] || index < brackets[j][0])) {
                  valid = false;
                }
              }
              if (valid) return {
                le: clean(expression.slice(0, index)),
                re: clean(expression.slice(index + 1)),
                operation: operations[op]
              };
            }
          }
        }
      }
    }
  } catch (_unused2) {
    return null;
  }
};
var tokenizeMathFunction = exports.tokenizeMathFunction = function tokenizeMathFunction(expression) {
  try {
    var _loop = function _loop(func) {
        var funcs = findAllOccurrences(expression, func);
        var _loop2 = function _loop2() {
            var index = funcs[i];
            var exact = true;
            if (index > 0) if (/^[a-zA-Z]$/.test(expression[index - 1])) exact = false;
            if (index > -1 && exact) {
              var brackets = getMatchingBrackets(expression);
              var valid = true;
              if (brackets) {
                if (brackets) {
                  for (var j = 0; j < brackets.length; j++) {
                    if (!(index > brackets[j][1] || index < brackets[j][0])) {
                      valid = false;
                    }
                  }
                  var brack = brackets.find(function (b) {
                    return b[0] == index + func.length;
                  });
                  if (brack && valid) return {
                    v: {
                      v: {
                        le: func,
                        re: clean(expression.slice(brack[0], brack[1] + 1)),
                        operation: operations["f"]
                      }
                    }
                  };
                }
              }
            }
          },
          _ret2;
        for (var i = 0; i < funcs.length; i++) {
          _ret2 = _loop2();
          if (_ret2) return _ret2.v;
        }
      },
      _ret;
    for (var func in functions) {
      _ret = _loop(func);
      if (_ret) return _ret.v;
    }
  } catch (_unused3) {
    return null;
  }
};
var getMatchingBrackets = exports.getMatchingBrackets = function getMatchingBrackets(expression) {
  var brackets = [];
  var stack = [];
  for (var i = 0; i < expression.length; i++) {
    if (expression[i] == "(") {
      stack.push(i);
    } else if (expression[i] == ")") {
      if (stack.length > 0) brackets.push([stack.pop(), i]);else return null;
    }
  }
  return stack.length === 0 ? brackets : null;
};
var formatBrackets = exports.formatBrackets = function formatBrackets(expression) {
  try {
    expression = formatSigns(expression);
    var brackets = getMatchingBrackets(expression);
    if (brackets) {
      var newExpression = "";
      var _loop3 = function _loop3(i) {
        var ignoreOperations = !(expression[i + 1] in operations) && !(expression[i] in operations);
        if (!brackets.find(function (b) {
          return i < b[1] && i > b[0];
        })) {
          if (i >= 0 && i < expression.length - 1) {
            if (isNaN(expression[i]) && !isNaN(expression[i + 1])) {
              newExpression += expression[i] !== "(" && expression[i] !== "." && ignoreOperations ? expression[i] + "*" : expression[i];
            } else if (!isNaN(expression[i]) && isNaN(expression[i + 1])) {
              newExpression += expression[i + 1] !== ")" && expression[i + 1] !== "." && ignoreOperations ? expression[i] + "*" : expression[i];
            } else if (expression[i] === ")" && i < expression.length) {
              newExpression += expression[i + 1] !== ")" && expression[i + 1] !== "." && ignoreOperations ? expression[i] + "*" : expression[i];
            } else {
              newExpression += expression[i];
            }
          } else {
            newExpression += expression[i];
          }
        } else {
          newExpression += expression[i];
        }
      };
      for (var i = 0; i < expression.length; i++) {
        _loop3(i);
      }
      return newExpression;
    }
    return expression;
  } catch (_unused4) {
    return null;
  }
};
var formatSigns = exports.formatSigns = function formatSigns(expression) {
  try {
    var add_bracket = false;
    var newExpression = "";
    for (var i = 0; i < expression.length; i++) {
      if (i > 0) {
        if (/[0-9]/.test(expression[i]) && isNaN(expression[i + 1]) && add_bracket) {
          newExpression += expression[i];
          newExpression += ")";
          add_bracket = false;
        } else if (expression[i - 1] === "*" && /^[+-]$/.test(expression[i])) {
          newExpression += "(";
          newExpression += expression[i];
          add_bracket = true;
        } else {
          newExpression += expression[i];
        }
      } else {
        newExpression += expression[i];
      }
    }
    if (add_bracket) newExpression += ")";
    return newExpression;
  } catch (_unused5) {
    return null;
  }
};
var findAllOccurrences = exports.findAllOccurrences = function findAllOccurrences(string, substring) {
  try {
    var occurrences = [];
    var index = string.indexOf(substring);
    while (index !== -1) {
      occurrences.push(index);
      index = string.indexOf(substring, index + 1);
    }
    return occurrences;
  } catch (_unused6) {
    return null;
  }
};
var replaceMathConstants = exports.replaceMathConstants = function replaceMathConstants(expression) {
  try {
    var _loop4 = function _loop4(constant) {
      var consts = findAllOccurrences(expression, constant);
      consts.reverse();
      consts.forEach(function (c) {
        var valid = true;
        if (c > 0) {
          if (/[a-zA-Z]/.test(expression[c - 1])) valid = false;
        }
        if (c < expression.length - 1 - constant.length) {
          if (/[a-zA-Z]/.test(expression[c + constant.length + 1])) valid = false;
        }
        if (valid) {
          expression = expression.slice(0, c) + mathConstants[constant]() + expression.slice(c + constant.length);
        }
      });
    };
    for (var constant in mathConstants) {
      _loop4(constant);
    }
    return expression;
  } catch (e) {
    return expression;
  }
};
var MathExpression = exports.MathExpression = /*#__PURE__*/function () {
  function MathExpression(expression) {
    var _this = this;
    _classCallCheck(this, MathExpression);
    _defineProperty(this, "tokenize", function () {
      var tokenized = tokenizeMathOperation(_this.expression);
      if (tokenized) return tokenized;
      tokenized = tokenizeMathFunction(_this.expression);
      if (tokenized) return tokenized;
      return _this.expression;
    });
    this.expression = replaceMathConstants(formatBrackets(clean(expression)));
    this.token = this.tokenize(this.expression);
  }
  _createClass(MathExpression, [{
    key: "getVal",
    value: function getVal() {
      return this.token.operation ? this.token.operation(new MathExpression(this.token.le).getVal(), new MathExpression(this.token.re).getVal()) : this.expression;
    }
  }]);
  return MathExpression;
}();
      }
    ],'client/public/js/Components/Nav/Nav.js': [
      0,
      { exports : {} },
      function(require, module, exports) {
        "use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nav = void 0;
var _Component2 = require("client/public/js/Components/Component.js");
var _NavButton = require("client/public/js/Components/Nav/NavButton.js");
var _ThemeToggle = require("client/public/js/Components/Nav/ThemeToggle.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Nav = exports.Nav = /*#__PURE__*/function (_Component) {
  _inherits(Nav, _Component);
  function Nav(params) {
    var _this;
    _classCallCheck(this, Nav);
    _this = _callSuper(this, Nav, [params]);
    _this.comps.Add("CalculatorNav", new _NavButton.NavButton({
      text: "Calculator",
      url: "/calculator"
    }));
    _this.comps.Add("HistoryNav", new _NavButton.NavButton({
      text: "History",
      url: "/history"
    }));
    _this.comps.Add("ThemeToggle", new _ThemeToggle.ThemeToggle());
    return _this;
  }
  _createClass(Nav, [{
    key: "getHtml",
    value: function getHtml() {
      return (0, _Component2.buildComponent)("nav", {
        id: "NAV",
        style: "user-select: none;"
      }, [(0, _Component2.buildComponent)("div", {}, []), (0, _Component2.buildComponent)("div", {
        id: "nav-router"
      }, [this.comps.Render("CalculatorNav"), this.comps.Render("HistoryNav")]), (0, _Component2.buildComponent)("div", {
        id: "nav-settings"
      }, [this.comps.Render("ThemeToggle")])]);
    }
  }]);
  return Nav;
}(_Component2.Component);
      }
    ],'client/public/js/Components/Nav/NavButton.js': [
      0,
      { exports : {} },
      function(require, module, exports) {
        "use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavButton = void 0;
var _Component2 = require("client/public/js/Components/Component.js");
var _State = require("client/public/js/State/State.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var NavButton = exports.NavButton = /*#__PURE__*/function (_Component) {
  _inherits(NavButton, _Component);
  function NavButton(params) {
    var _this;
    _classCallCheck(this, NavButton);
    _this = _callSuper(this, NavButton, [params]);
    _this.text = params.text;
    _this.url = params.url;
    _this.classes = {};
    _this.globalState = new _State.State({});
    return _this;
  }
  _createClass(NavButton, [{
    key: "navigate",
    value: function navigate() {
      this.globalState.notifyChange(_objectSpread(_objectSpread({}, this.globalState.state), {}, {
        page: _objectSpread(_objectSpread({}, this.globalState.state.page), {}, {
          route: this.url
        })
      }));
      //let reRoute = new Event("reRoute");
      //dispatchEvent(reRoute);
    }
  }, {
    key: "sideEffects",
    value: function sideEffects() {
      var _this2 = this;
      var nBtn = document.querySelector("#".concat(this.text, "-navBtn"));
      nBtn.style.cursor = "pointer";
      nBtn.addEventListener("click", function (e) {
        e.preventDefault();
        _this2.navigate();
      });
    }
  }, {
    key: "getHtml",
    value: function getHtml() {
      if (this.globalState.state.page.route == this.url) {
        this.classes.Active = "NavBtn-active-true";
      } else {
        this.classes.Active = "NavBtn-active-false";
      }
      if (this.globalState.state.page.darkmode) {
        this.classes.Darkmode = "NavBtn-darkmode-true";
      } else {
        this.classes.Darkmode = "NavBtn-darkmode-false";
      }
      var c = "";
      Object.values(this.classes).forEach(function (e) {
        c += " ".concat(e);
      });
      return (0, _Component2.buildComponent)("div", {
        id: "".concat(this.text, "-navBtn"),
        "class": c
      }, [], this.text);
    }
  }]);
  return NavButton;
}(_Component2.Component);
      }
    ],'client/public/js/Components/Nav/ThemeToggle.js': [
      0,
      { exports : {} },
      function(require, module, exports) {
        "use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeToggle = void 0;
var _Component2 = require("client/public/js/Components/Component.js");
var _State = require("client/public/js/State/State.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var ThemeToggle = exports.ThemeToggle = /*#__PURE__*/function (_Component) {
  _inherits(ThemeToggle, _Component);
  function ThemeToggle(params) {
    var _this;
    _classCallCheck(this, ThemeToggle);
    _this = _callSuper(this, ThemeToggle, [params]);
    _this.classes = {};
    _this.globalState = new _State.State({});
    return _this;
  }
  _createClass(ThemeToggle, [{
    key: "sideEffects",
    value: function sideEffects() {
      var _this2 = this;
      var nBtn = document.querySelector("#themeToggle");
      nBtn.style.cursor = "pointer";
      nBtn.addEventListener("click", function (e) {
        e.preventDefault();
        _this2.globalState.notifyChange(_objectSpread(_objectSpread({}, _this2.globalState.state), {}, {
          page: _objectSpread(_objectSpread({}, _this2.globalState.state.page), {}, {
            darkmode: !_this2.globalState.state.page.darkmode
          })
        }));
      });
    }
  }, {
    key: "getHtml",
    value: function getHtml() {
      if (this.globalState.state.page.darkmode) {
        this.classes.Darkmode = "themetoggle-darkmode-true";
      } else {
        this.classes.Darkmode = "themetoggle-darkmode-false";
      }
      var c = "";
      Object.values(this.classes).forEach(function (e) {
        c += " ".concat(e);
      });
      return (0, _Component2.buildComponent)("div", {
        id: "themeToggle",
        "class": c
      }, [], this.globalState.state.page.darkmode ? "Light Mode" : "Dark Mode");
    }
  }]);
  return ThemeToggle;
}(_Component2.Component);
      }
    ],'client/public/js/Pages/HistoryPage/HistoryPage.js': [
      0,
      { exports : {} },
      function(require, module, exports) {
        "use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HistoryPage = void 0;
var _CalculationsHistory = require("client/public/js/Components/CalculationHistory/CalculationsHistory.js");
var _Calculator = require("client/public/js/Components/Calculator/Calculator.js");
var _Nav = require("client/public/js/Components/Nav/Nav.js");
var _Page2 = require("client/public/js/Pages/Page.js");
var _Component = require("client/public/js/Components/Component.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var HistoryPage = exports.HistoryPage = /*#__PURE__*/function (_Page) {
  _inherits(HistoryPage, _Page);
  function HistoryPage(params) {
    var _this;
    _classCallCheck(this, HistoryPage);
    _this = _callSuper(this, HistoryPage, [params]);
    _this.comps.Add("nav", new _Nav.Nav());
    _this.comps.Add("calculator", new _Calculator.Calculator());
    _this.comps.Add("calc-history", new _CalculationsHistory.CalculationsHistory());
    return _this;
  }
  _createClass(HistoryPage, [{
    key: "getHtml",
    value: function getHtml() {
      return (0, _Component.buildComponent)("div", {}, [this.comps.Render("nav"), (0, _Component.buildComponent)("div", {
        id: "history-page"
      }, [this.comps.Render("calc-history")])]);
    }
  }]);
  return HistoryPage;
}(_Page2.Page);
      }
    ],'client/public/js/Components/CalculationHistory/CalculationsHistory.js': [
      0,
      { exports : {} },
      function(require, module, exports) {
        "use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalculationsHistory = void 0;
var _Component2 = require("client/public/js/Components/Component.js");
var _CalculationHistory = require("client/public/js/Components/CalculationHistory/CalculationHistory.js");
var _State = require("client/public/js/State/State.js");
var _Components = require("client/public/js/Components/Components.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var CalculationsHistory = exports.CalculationsHistory = /*#__PURE__*/function (_Component) {
  _inherits(CalculationsHistory, _Component);
  function CalculationsHistory(props) {
    var _this;
    _classCallCheck(this, CalculationsHistory);
    _this = _callSuper(this, CalculationsHistory, [props]);
    _this.globalState = new _State.State({});
    return _this;
  }
  _createClass(CalculationsHistory, [{
    key: "getCalculations",
    value: function getCalculations() {
      var calcs = [];
      this.comps = new _Components.Components();
      var history = this.globalState.state.calculator.history;
      for (var i = 0; i < history.length; i++) {
        this.comps.Add("calc-h".concat(i), new _CalculationHistory.CalculationHistory({
          input: history[i].input,
          output: history[i].output,
          id: i
        }));
        calcs = [].concat(_toConsumableArray(calcs), [this.comps.Render("calc-h".concat(i))]);
      }
      return calcs;
    }
  }, {
    key: "getHtml",
    value: function getHtml() {
      return (0, _Component2.buildComponent)("div", {
        "class": "calc-history-collection"
      }, this.getCalculations());
    }
  }]);
  return CalculationsHistory;
}(_Component2.Component);
      }
    ],'client/public/js/Components/CalculationHistory/CalculationHistory.js': [
      0,
      { exports : {} },
      function(require, module, exports) {
        "use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalculationHistory = void 0;
var _State = require("client/public/js/State/State.js");
var _Component2 = require("client/public/js/Components/Component.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var CalculationHistory = exports.CalculationHistory = /*#__PURE__*/function (_Component) {
  _inherits(CalculationHistory, _Component);
  function CalculationHistory(props) {
    var _this;
    _classCallCheck(this, CalculationHistory);
    _this = _callSuper(this, CalculationHistory, [props]);
    _this.input = props.input;
    _this.output = props.output;
    _this.id = props.id;
    _this.globalState = new _State.State({});
    return _this;
  }
  _createClass(CalculationHistory, [{
    key: "navigate",
    value: function navigate() {
      this.globalState.notifyChange(_objectSpread(_objectSpread({}, this.globalState.state), {}, {
        page: _objectSpread(_objectSpread({}, this.globalState.state.page), {}, {
          route: "/calculator"
        })
      }));
      //let reRoute = new Event("reRoute");
      //dispatchEvent(reRoute);
    }
  }, {
    key: "sideEffects",
    value: function sideEffects() {
      var _this2 = this;
      var delBtn = document.querySelector("#calc-history-".concat(this.id, "-delete"));
      delBtn.style.cursor = "pointer";
      delBtn.addEventListener("click", function (e) {
        e.preventDefault();
        var newHistory = [];
        for (var i = 0; i < _this2.globalState.state.calculator.history.length; i++) {
          if (i !== _this2.id) {
            newHistory.push(_this2.globalState.state.calculator.history[i]);
          }
        }
        _this2.globalState.notifyChange(_objectSpread(_objectSpread({}, _this2.globalState.state), {}, {
          calculator: _objectSpread(_objectSpread({}, _this2.globalState.state.calculator), {}, {
            history: newHistory
          })
        }));
      });
      var viewBtn = document.querySelector("#calc-history-".concat(this.id, "-view"));
      viewBtn.style.cursor = "pointer";
      viewBtn.addEventListener("click", function (e) {
        e.preventDefault();
        _this2.globalState.silentChange(_objectSpread(_objectSpread({}, _this2.globalState.state), {}, {
          calculator: _objectSpread(_objectSpread({}, _this2.globalState.state.calculator), {}, {
            expression: {
              output: _this2.output,
              input: _this2.input,
              display: "input"
            }
          })
        }));
        _this2.navigate();
      });
    }
  }, {
    key: "getHtml",
    value: function getHtml() {
      return (0, _Component2.buildComponent)("div", {
        id: "calc-history-".concat(this.id),
        style: "user-select: none;",
        "class": "calc-history-item"
      }, [(0, _Component2.buildComponent)("div", {
        id: "calc-history-".concat(this.id, "-view"),
        "class": "calc-history-item-btn"
      }, [], "View"), (0, _Component2.buildComponent)("div", {
        id: "calc-history-".concat(this.id, "-delete"),
        "class": "calc-history-item-btn"
      }, [], "Delete"), (0, _Component2.buildComponent)("p", {
        "class": "calc-history-item-text"
      }, [], "".concat(this.input, " = ").concat(this.output))]);
    }
  }]);
  return CalculationHistory;
}(_Component2.Component);
      }
    ],})
  