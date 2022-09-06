"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _context = require("./context");

var _utils = require("./utils");

var _usePaintHue = require("./usePaintHue");

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

var tinycolor = require("tinycolor2");

var AdvancedControls = function AdvancedControls(_ref) {
  var openAdvanced = _ref.openAdvanced;

  var _usePicker = (0, _context.usePicker)(),
      tinyColor = _usePicker.tinyColor,
      hue = _usePicker.hue,
      l = _usePicker.l,
      handleChange = _usePicker.handleChange,
      s = _usePicker.s,
      opacity = _usePicker.opacity,
      squareSize = _usePicker.squareSize;

  var _tinyColor$toHsv = tinyColor.toHsv(),
      v = _tinyColor$toHsv.v,
      vs = _tinyColor$toHsv.s;

  var satRef = (0, _react.useRef)(null);
  var lightRef = (0, _react.useRef)(null);
  var brightRef = (0, _react.useRef)(null);
  (0, _usePaintHue.usePaintSat)(satRef, hue, l * 100, squareSize);
  (0, _usePaintHue.usePaintLight)(lightRef, hue, s * 100, squareSize);
  (0, _usePaintHue.usePaintBright)(brightRef, hue, s * 100, squareSize);

  var satDesat = function satDesat(value) {
    var _tinycolor$toRgb = tinycolor({
      h: hue,
      s: value / 100,
      l: l
    }).toRgb(),
        r = _tinycolor$toRgb.r,
        g = _tinycolor$toRgb.g,
        b = _tinycolor$toRgb.b;

    handleChange("rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(opacity, ")"));
  };

  var setLight = function setLight(value) {
    var _tinycolor$toRgb2 = tinycolor({
      h: hue,
      s: s,
      l: value / 100
    }).toRgb(),
        r = _tinycolor$toRgb2.r,
        g = _tinycolor$toRgb2.g,
        b = _tinycolor$toRgb2.b;

    handleChange("rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(opacity, ")"));
  };

  var setBright = function setBright(value) {
    var _tinycolor$toRgb3 = tinycolor({
      h: hue,
      s: vs * 100,
      v: value
    }).toRgb(),
        r = _tinycolor$toRgb3.r,
        g = _tinycolor$toRgb3.g,
        b = _tinycolor$toRgb3.b;

    handleChange("rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(opacity, ")"));
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: openAdvanced ? 136 : 0,
      width: '100%',
      transition: 'all 120ms linear'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      paddingTop: 11,
      display: openAdvanced ? '' : 'none'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: 'center',
      color: '#323136',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1
    }
  }, "Saturation"), /*#__PURE__*/_react["default"].createElement(AdvBar, {
    left: s * squareSize - 18,
    reffy: satRef,
    callback: satDesat
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: 'center',
      color: '#323136',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1
    }
  }, "Lightness"), /*#__PURE__*/_react["default"].createElement(AdvBar, {
    left: l * squareSize - 18,
    reffy: lightRef,
    callback: setLight
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: 'center',
      color: '#323136',
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1
    }
  }, "Brightness"), /*#__PURE__*/_react["default"].createElement(AdvBar, {
    left: v * squareSize - 18,
    reffy: brightRef,
    callback: setBright
  })));
};

var _default = AdvancedControls;
exports["default"] = _default;

var AdvBar = function AdvBar(_ref2) {
  var left = _ref2.left,
      callback = _ref2.callback,
      reffy = _ref2.reffy;

  var _usePicker2 = (0, _context.usePicker)(),
      squareSize = _usePicker2.squareSize;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      dragging = _useState2[0],
      setDragging = _useState2[1];

  var stopDragging = function stopDragging() {
    setDragging(false);
  };

  var handleMove = function handleMove(e) {
    if (dragging) {
      callback((0, _utils.getHandleValue)(e));
    }
  };

  var handleClick = function handleClick(e) {
    if (!dragging) {
      callback((0, _utils.getHandleValue)(e));
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    onMouseEnter: stopDragging,
    onMouseLeave: stopDragging,
    style: _objectSpread(_objectSpread({}, _style.barWrap), {}, {
      width: squareSize + 36,
      marginTop: 0
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onMouseUp: stopDragging,
    style: _objectSpread(_objectSpread(_objectSpread({}, _style.psRl), _style.barWrapInner), {}, {
      width: squareSize + 30
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "c-resize ps-rl",
    onMouseMove: function onMouseMove(e) {
      return handleMove(e);
    },
    style: _objectSpread(_objectSpread({}, _style.cResize), _style.psRl)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({}, _style.handle), {}, {
      left: left,
      top: 2
    }),
    onMouseDown: function onMouseDown() {
      return setDragging(true);
    }
  }), /*#__PURE__*/_react["default"].createElement("canvas", {
    ref: reffy,
    width: "".concat(squareSize, "px"),
    height: "14px",
    style: {
      position: 'relative',
      borderRadius: 14
    },
    onClick: function onClick(e) {
      return handleClick(e);
    }
  }))));
};