"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.controlBtnStyles = void 0;

var _react = _interopRequireWildcard(require("react"));

var _icon = require("./icon");

var _context = require("./context");

var _reactColorEyeDropper = _interopRequireDefault(require("react-color-eye-dropper"));

var _constants = require("./constants");

var _AdvancedControls = _interopRequireDefault(require("./AdvancedControls"));

var _ComparibleColors = _interopRequireDefault(require("./ComparibleColors"));

var _GradientControls = _interopRequireDefault(require("./GradientControls"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var defaultColor = _constants.config.defaultColor,
    defaultGradient = _constants.config.defaultGradient;

var Controls = function Controls(_ref) {
  var hideEyeDrop = _ref.hideEyeDrop,
      hideAdvancedSliders = _ref.hideAdvancedSliders,
      hideColorGuide = _ref.hideColorGuide,
      hideInputType = _ref.hideInputType;

  var _usePicker = (0, _context.usePicker)(),
      isGradient = _usePicker.isGradient,
      onChange = _usePicker.onChange,
      previousColors = _usePicker.previousColors,
      previousGraidents = _usePicker.previousGraidents,
      handleChange = _usePicker.handleChange;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openAdvanced = _useState2[0],
      setOpenAdvanced = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openComparibles = _useState4[0],
      setOpenComparibles = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      openInputType = _useState6[0],
      setOpenInputType = _useState6[1];

  var noTools = hideEyeDrop && hideAdvancedSliders && hideColorGuide && hideInputType;
  var solidColor = (previousColors === null || previousColors === void 0 ? void 0 : previousColors[0]) || defaultColor;
  var gradientColor = (previousGraidents === null || previousGraidents === void 0 ? void 0 : previousGraidents[0]) || defaultGradient;

  var setSolid = function setSolid() {
    onChange(solidColor);
  };

  var setGradient = function setGradient() {
    onChange(gradientColor);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      paddingTop: 12,
      paddingBottom: 9
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread({
      width: '100%'
    }, _style.df), _style.jsb), _style.ac)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread({
      height: 28,
      background: '#e9e9f5',
      borderRadius: 6,
      padding: 2
    }, _style.df), _style.jc), _style.ac)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _style.controlBtn), controlBtnStyles(!isGradient)), _style.df), _style.ac),
    onClick: setSolid
  }, "Solid"), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _style.controlBtn), controlBtnStyles(isGradient)), _style.df), _style.ac),
    onClick: setGradient
  }, "Gradient")), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread({}, _style.ac), _style.jfe), {}, {
      height: 28,
      background: '#e9e9f5',
      borderRadius: 6,
      padding: 2,
      display: noTools ? 'none' : ''
    }, _style.df)
  }, !hideEyeDrop && /*#__PURE__*/_react["default"].createElement(_reactColorEyeDropper["default"], {
    onSelect: handleChange,
    buttonStyle: {
      width: 30,
      height: 24,
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread({
      width: 30
    }, controlBtnStyles(openAdvanced)), {}, {
      height: 24,
      borderRadius: 4,
      display: hideAdvancedSliders ? 'none' : 'flex'
    }, _style.jc), _style.ac),
    onClick: function onClick() {
      return setOpenAdvanced(!openAdvanced);
    }
  }, /*#__PURE__*/_react["default"].createElement(_icon.SlidersIcon, {
    color: openAdvanced ? '#568CF5' : ''
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread({
      width: 30
    }, controlBtnStyles(openComparibles)), {}, {
      height: 24,
      borderRadius: 4,
      display: hideColorGuide ? 'none' : 'flex'
    }, _style.jc), _style.ac),
    onClick: function onClick() {
      return setOpenComparibles(!openComparibles);
    }
  }, /*#__PURE__*/_react["default"].createElement(_icon.PaletteIcon, {
    color: openComparibles ? '#568CF5' : ''
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread({
      width: 30
    }, controlBtnStyles(openInputType)), {}, {
      height: 24,
      borderRadius: 4,
      display: hideInputType ? 'none' : 'flex'
    }, _style.jc), _style.ac), _style.psRl),
    onClick: function onClick() {
      return setOpenInputType(!openInputType);
    }
  }, /*#__PURE__*/_react["default"].createElement(_icon.InputsIcon, {
    color: openInputType ? '#568CF5' : ''
  }), /*#__PURE__*/_react["default"].createElement(InputTypeDropdown, {
    openInputType: openInputType,
    setOpenInputType: setOpenInputType
  })))), !hideAdvancedSliders && /*#__PURE__*/_react["default"].createElement(_AdvancedControls["default"], {
    openAdvanced: openAdvanced
  }), !hideColorGuide && /*#__PURE__*/_react["default"].createElement(_ComparibleColors["default"], {
    openComparibles: openComparibles
  }), isGradient && /*#__PURE__*/_react["default"].createElement(_GradientControls["default"], null));
};

var _default = Controls;
exports["default"] = _default;

var InputTypeDropdown = function InputTypeDropdown(_ref2) {
  var openInputType = _ref2.openInputType,
      setOpenInputType = _ref2.setOpenInputType;

  var _usePicker2 = (0, _context.usePicker)(),
      inputType = _usePicker2.inputType,
      setInputType = _usePicker2.setInputType;

  var vTrans = openInputType ? 'visibility 0ms linear' : 'visibility 100ms linear 150ms';
  var zTrans = openInputType ? 'z-index 0ms linear' : 'z-index 100ms linear 150ms';
  var oTrans = openInputType ? 'opacity 120ms linear' : 'opacity 150ms linear 50ms';

  var handleInputType = function handleInputType(e, val) {
    if (openInputType) {
      e.stopPropagation();
      setInputType(val);
      setOpenInputType(false);
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      visibility: openInputType ? 'visible' : 'hidden',
      zIndex: openInputType ? '' : -100,
      opacity: openInputType ? 1 : 0,
      transition: "".concat(oTrans, ", ").concat(vTrans, ", ").concat(zTrans)
    }, _style.inputDropdown)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, controlBtnStyles(inputType === 'rgb')), _style.df), _style.ac), _style.psRl), _style.controlBtn),
    onClick: function onClick(e) {
      return handleInputType(e, 'rgb');
    }
  }, "RGB"), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, controlBtnStyles(inputType === 'hsl')), _style.df), _style.ac), _style.controlBtn),
    onClick: function onClick(e) {
      return handleInputType(e, 'hsl');
    }
  }, "HSL"), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, controlBtnStyles(inputType === 'hsv')), _style.df), _style.ac), _style.controlBtn),
    onClick: function onClick(e) {
      return handleInputType(e, 'hsv');
    }
  }, "HSV"), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, controlBtnStyles(inputType === 'cmyk')), _style.df), _style.ac), _style.controlBtn),
    onClick: function onClick(e) {
      return handleInputType(e, 'cmyk');
    }
  }, "CMYK"));
};

var controlBtnStyles = function controlBtnStyles(selected) {
  return {
    background: selected ? 'white' : '',
    color: selected ? '#568CF5' : '',
    boxShadow: selected ? '0px 0px 8px rgba(0,0,0,.125)' : ''
  };
};

exports.controlBtnStyles = controlBtnStyles;