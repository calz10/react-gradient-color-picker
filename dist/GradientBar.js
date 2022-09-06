"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Handle = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

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

var GradientBar = function GradientBar() {
  var _usePicker = (0, _context.usePicker)(),
      currentColor = _usePicker.currentColor,
      addPoint = _usePicker.addPoint,
      colors = _usePicker.colors,
      value = _usePicker.value,
      handleGradient = _usePicker.handleGradient,
      squareSize = _usePicker.squareSize;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      dragging = _useState2[0],
      setDragging = _useState2[1];

  function force90degLinear(color) {
    return color.replace(/(radial|linear)-gradient\([^,]+,/, 'linear-gradient(90deg,');
  }

  var stopDragging = function stopDragging() {
    setDragging(false);
  };

  var handleDown = function handleDown(e) {
    if (!dragging) {
      addPoint(e);
    }
  };

  var handleMove = function handleMove(e) {
    if (dragging) {
      handleGradient(currentColor, (0, _utils.getHandleValue)(e));
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    onMouseEnter: stopDragging,
    onMouseLeave: stopDragging,
    style: _objectSpread(_objectSpread({}, _style.barWrap), {}, {
      width: squareSize + 36
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onMouseUp: stopDragging,
    style: _objectSpread(_objectSpread({}, _style.psRl), _style.barWrapInner)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onMouseDown: function onMouseDown(e) {
      return handleDown(e);
    },
    onMouseMove: function onMouseMove(e) {
      return handleMove(e);
    },
    style: {
      paddingTop: 6,
      paddingBottom: 6
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: squareSize,
      height: 14,
      backgroundImage: force90degLinear(value),
      borderRadius: 10
    }
  })), colors === null || colors === void 0 ? void 0 : colors.map(function (c, i) {
    return /*#__PURE__*/_react["default"].createElement(Handle, {
      left: c.left,
      key: "".concat(i, "-").concat(c),
      i: i,
      setDragging: setDragging
    });
  })));
};

var _default = GradientBar;
exports["default"] = _default;

var Handle = function Handle(_ref) {
  var left = _ref.left,
      i = _ref.i,
      setDragging = _ref.setDragging;

  var _usePicker2 = (0, _context.usePicker)(),
      setSelectedColor = _usePicker2.setSelectedColor,
      selectedColor = _usePicker2.selectedColor,
      squareSize = _usePicker2.squareSize;

  var isSelected = selectedColor === i;
  var leftMultiplyer = (squareSize - 18) / 100;

  var handleDown = function handleDown(e) {
    e.stopPropagation();
    setSelectedColor(i);
    setDragging(true);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      left: left * leftMultiplyer + 13
    }, _style.gradientHandleWrap),
    onMouseDown: function onMouseDown(e) {
      return handleDown(e);
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, handleStyle(isSelected)), _style.gradientHandle), _style.df), _style.jc), _style.ac)
  }, isSelected && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'white'
    }
  })));
};

exports.Handle = Handle;

var handleStyle = function handleStyle(isSelected) {
  return {
    boxShadow: isSelected ? '0px 0px 5px 1px rgba(86, 140, 245,.95)' : '',
    border: isSelected ? '2px solid white' : '2px solid rgba(255,255,255,.75)'
  };
};