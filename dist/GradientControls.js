"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _context = require("./context");

var _formatters = require("./formatters");

var _Controls = require("./Controls");

var _icon = _interopRequireWildcard(require("./icon"));

var _style = require("./style");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GradientControls = function GradientControls() {
  var _usePicker = (0, _context.usePicker)(),
      gradientType = _usePicker.gradientType;

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread({}, _style.df), _style.jsb), {}, {
      marginTop: 12,
      marginBottom: -4,
      background: '#e9e9f5',
      borderRadius: 6
    })
  }, /*#__PURE__*/_react["default"].createElement(GradientType, null), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 53
    }
  }, gradientType === 'linear-gradient' && /*#__PURE__*/_react["default"].createElement(DegreePicker, null)), /*#__PURE__*/_react["default"].createElement(StopPicker, null), /*#__PURE__*/_react["default"].createElement(DeleteBtn, null));
};

var _default = GradientControls;
exports["default"] = _default;

var GradientType = function GradientType() {
  var _usePicker2 = (0, _context.usePicker)(),
      gradientType = _usePicker2.gradientType,
      onChange = _usePicker2.onChange,
      value = _usePicker2.value;

  var isLinear = gradientType === 'linear-gradient';
  var isRadial = gradientType === 'radial-gradient';

  var handleLinear = function handleLinear() {
    var remaining = value.split(/,(.+)/)[1];
    onChange("linear-gradient(90deg, ".concat(remaining));
  };

  var handleRadial = function handleRadial() {
    var remaining = value.split(/,(.+)/)[1];
    onChange("radial-gradient(circle, ".concat(remaining));
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread({}, _style.df), _style.ac), _style.controlBtnsWrap)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: handleLinear,
    style: _objectSpread(_objectSpread({}, (0, _Controls.controlBtnStyles)(isLinear)), _style.controlBtn)
  }, /*#__PURE__*/_react["default"].createElement(_icon.LinearIcon, {
    color: isLinear ? '#568CF5' : ''
  })), /*#__PURE__*/_react["default"].createElement("div", {
    onClick: handleRadial,
    style: _objectSpread(_objectSpread({}, (0, _Controls.controlBtnStyles)(isRadial)), _style.controlBtn)
  }, /*#__PURE__*/_react["default"].createElement(_icon.RadialIcon, {
    color: isRadial ? '#568CF5' : ''
  })));
};

var StopPicker = function StopPicker() {
  var _usePicker3 = (0, _context.usePicker)(),
      currentLeft = _usePicker3.currentLeft,
      handleGradient = _usePicker3.handleGradient,
      currentColor = _usePicker3.currentColor;

  var handleMove = function handleMove(newVal) {
    handleGradient(currentColor, (0, _formatters.formatInputValues)(newVal, 0, 100));
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _style.df), _style.ac), _style.controlBtnsWrap), {}, {
      paddingLeft: 8
    })
  }, /*#__PURE__*/_react["default"].createElement(_icon.StopIcon, null), /*#__PURE__*/_react["default"].createElement("input", {
    style: _style.degreeInput,
    value: currentLeft,
    onChange: function onChange(e) {
      return handleMove(e.target.value);
    }
  }));
};

var DegreePicker = function DegreePicker() {
  var _usePicker4 = (0, _context.usePicker)(),
      degrees = _usePicker4.degrees,
      onChange = _usePicker4.onChange,
      value = _usePicker4.value;

  var handleDegrees = function handleDegrees(e) {
    var newValue = (0, _formatters.formatInputValues)(e.target.value, 0, 360);
    var remaining = value.split(/,(.+)/)[1];
    onChange("linear-gradient(".concat(newValue || 0, "deg, ").concat(remaining));
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _style.psRl), _style.controlBtnsWrap), _style.df), _style.ac)
  }, /*#__PURE__*/_react["default"].createElement(_icon.DegreesIcon, null), /*#__PURE__*/_react["default"].createElement("input", {
    style: _style.degreeInput,
    value: degrees,
    onChange: function onChange(e) {
      return handleDegrees(e);
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'absolute',
      right: degrees > 99 ? 0 : degrees < 10 ? 7 : 3,
      top: 1,
      fontWeight: 400,
      fontSize: 13
    }
  }, "\xB0"));
};

var DeleteBtn = function DeleteBtn() {
  var _usePicker5 = (0, _context.usePicker)(),
      deletePoint = _usePicker5.deletePoint;

  return /*#__PURE__*/_react["default"].createElement("div", {
    onClick: deletePoint,
    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _style.df), _style.jc), _style.ac), _style.controlBtnsWrap), {}, {
      width: 30
    }, (0, _Controls.controlBtnStyles)(false)), {}, {
      marginRight: 1
    })
  }, /*#__PURE__*/_react["default"].createElement(_icon["default"], null));
};