"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _context = require("./context");

var _style = require("./style");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Opacity = function Opacity() {
  var _usePicker = (0, _context.usePicker)(),
      handleOpacity = _usePicker.handleOpacity,
      opacity = _usePicker.opacity,
      tinyColor = _usePicker.tinyColor,
      squareSize = _usePicker.squareSize;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      dragging = _useState2[0],
      setDragging = _useState2[1];

  var _tinyColor$toRgb = tinyColor.toRgb(),
      r = _tinyColor$toRgb.r,
      g = _tinyColor$toRgb.g,
      b = _tinyColor$toRgb.b;

  var bg = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(".concat(r, ",").concat(g, ",").concat(b, ",.5) 100%)");

  var stopDragging = function stopDragging() {
    setDragging(false);
  };

  var handleDown = function handleDown() {
    setDragging(true);
  };

  var handleMove = function handleMove(e) {
    if (dragging) {
      handleOpacity(e);
    }
  };

  var handleClick = function handleClick(e) {
    if (!dragging) {
      handleOpacity(e);
    }
  };

  var left = squareSize - 18;
  return /*#__PURE__*/_react["default"].createElement("div", {
    onMouseEnter: stopDragging,
    onMouseLeave: stopDragging,
    style: _objectSpread(_objectSpread({}, _style.barWrap), {}, {
      marginTop: 6,
      width: squareSize + 36
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onMouseUp: stopDragging,
    style: _objectSpread(_objectSpread({}, _style.barWrapInner), {}, {
      width: squareSize + 30
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({}, _style.cResize), _style.psRl),
    onMouseDown: handleDown,
    onMouseMove: function onMouseMove(e) {
      return handleMove(e);
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      left: left * opacity,
      top: -2
    }, _style.handle)
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      background: bg
    }, _style.opacityOverlay),
    onClick: function onClick(e) {
      return handleClick(e);
    }
  }), /*#__PURE__*/_react["default"].createElement(OpacityBg, null))));
};

var _default = Opacity;
exports["default"] = _default;

var OpacityBg = function OpacityBg() {
  var _usePicker2 = (0, _context.usePicker)(),
      squareSize = _usePicker2.squareSize;

  var hw = squareSize * 0.023809523809524;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _style.opacityBg
  }, sqaures === null || sqaures === void 0 ? void 0 : sqaures.map(function (s, key) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: key,
      style: {
        height: 7,
        width: hw,
        background: s === 1 ? 'rgba(0,0,0,.3)' : ''
      }
    });
  }));
};

var sqaures = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];