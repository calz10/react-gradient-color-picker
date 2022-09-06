"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _converters = require("./converters");

var _formatters = require("./formatters");

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

var tc = require("tinycolor2");

var Inputs = function Inputs() {
  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      disable = _useState2[0],
      setDisable = _useState2[1];

  var _usePicker = (0, _context.usePicker)(),
      handleChange = _usePicker.handleChange,
      tinyColor = _usePicker.tinyColor,
      r = _usePicker.r,
      g = _usePicker.g,
      b = _usePicker.b,
      opacity = _usePicker.opacity,
      inputType = _usePicker.inputType;

  var hex = tinyColor.toHex();

  var _useState3 = (0, _react.useState)(hex),
      _useState4 = _slicedToArray(_useState3, 2),
      newHex = _useState4[0],
      setNewHex = _useState4[1];

  (0, _react.useEffect)(function () {
    if (disable !== 'hex') {
      setNewHex(hex);
    }
  }, [tinyColor, disable, hex]);

  var handleHex = function handleHex(e) {
    var tinyHex = tc(e.target.value);
    setNewHex(e.target.value);

    if (tinyHex.isValid()) {
      var _tinyHex$toRgb = tinyHex.toRgb(),
          _r = _tinyHex$toRgb.r,
          _g = _tinyHex$toRgb.g,
          _b = _tinyHex$toRgb.b;

      var newColor = "rgba(".concat(_r, ", ").concat(_g, ", ").concat(_b, ", ").concat(opacity, ")");
      handleChange(newColor);
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 14
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '23%'
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    style: _objectSpread({}, _style.inputWrap),
    value: newHex,
    onChange: function onChange(e) {
      return handleHex(e);
    },
    onFocus: function onFocus() {
      return setDisable('hex');
    },
    onBlur: function onBlur() {
      return setDisable('');
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({}, _style.inputLabel)
  }, "HEX")), inputType === 'hsl' && /*#__PURE__*/_react["default"].createElement(HSLInputs, null), inputType === 'rgb' && /*#__PURE__*/_react["default"].createElement(RGBInputs, null), inputType === 'hsv' && /*#__PURE__*/_react["default"].createElement(HSVInputs, null), inputType === 'cmyk' && /*#__PURE__*/_react["default"].createElement(CMKYInputs, null), /*#__PURE__*/_react["default"].createElement(Input, {
    value: opacity * 100,
    callback: function callback(newVal) {
      return handleChange("rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(newVal / 100, ")"));
    },
    label: "A"
  }));
};

var _default = Inputs;
exports["default"] = _default;

var RGBInputs = function RGBInputs() {
  var _usePicker2 = (0, _context.usePicker)(),
      handleChange = _usePicker2.handleChange,
      r = _usePicker2.r,
      g = _usePicker2.g,
      b = _usePicker2.b,
      opacity = _usePicker2.opacity;

  var handleRgb = function handleRgb(_ref) {
    var r = _ref.r,
        g = _ref.g,
        b = _ref.b;
    handleChange("rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacity, ")"));
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Input, {
    value: r,
    callback: function callback(newVal) {
      return handleRgb({
        r: newVal,
        g: g,
        b: b
      });
    },
    label: "R",
    max: 255
  }), /*#__PURE__*/_react["default"].createElement(Input, {
    value: g,
    callback: function callback(newVal) {
      return handleRgb({
        r: r,
        g: newVal,
        b: b
      });
    },
    label: "G",
    max: 255
  }), /*#__PURE__*/_react["default"].createElement(Input, {
    value: b,
    callback: function callback(newVal) {
      return handleRgb({
        r: r,
        g: g,
        b: newVal
      });
    },
    label: "B",
    max: 255
  }));
};

var HSLInputs = function HSLInputs() {
  var _usePicker3 = (0, _context.usePicker)(),
      handleChange = _usePicker3.handleChange,
      s = _usePicker3.s,
      l = _usePicker3.l,
      internalHue = _usePicker3.internalHue,
      opacity = _usePicker3.opacity,
      setInternalHue = _usePicker3.setInternalHue;

  var handleH = function handleH(h, s, l) {
    setInternalHue(h);

    var _tc$toRgb = tc({
      h: h,
      s: s,
      l: l
    }).toRgb(),
        r = _tc$toRgb.r,
        g = _tc$toRgb.g,
        b = _tc$toRgb.b;

    handleChange("rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacity, ")"));
  };

  var handleSl = function handleSl(value) {
    var _tc$toRgb2 = tc(value).toRgb(),
        r = _tc$toRgb2.r,
        g = _tc$toRgb2.g,
        b = _tc$toRgb2.b;

    handleChange("rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacity, ")"));
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Input, {
    value: round(internalHue),
    callback: function callback(newVal) {
      return handleH(newVal, s, l);
    },
    label: "H",
    max: 360
  }), /*#__PURE__*/_react["default"].createElement(Input, {
    value: round(s * 100),
    callback: function callback(newVal) {
      return handleSl({
        h: internalHue,
        s: newVal,
        l: l
      });
    },
    label: "S"
  }), /*#__PURE__*/_react["default"].createElement(Input, {
    value: round(l * 100),
    callback: function callback(newVal) {
      return handleSl({
        h: internalHue,
        s: s,
        l: newVal
      });
    },
    label: "L"
  }));
};

var HSVInputs = function HSVInputs() {
  var _usePicker4 = (0, _context.usePicker)(),
      handleChange = _usePicker4.handleChange,
      hsvS = _usePicker4.hsvS,
      hsvV = _usePicker4.hsvV,
      internalHue = _usePicker4.internalHue,
      setInternalHue = _usePicker4.setInternalHue,
      opacity = _usePicker4.opacity;

  var handleH = function handleH(h, s, v) {
    setInternalHue(h);

    var _tc$toRgb3 = tc({
      h: h,
      s: s,
      v: v
    }).toRgb(),
        r = _tc$toRgb3.r,
        g = _tc$toRgb3.g,
        b = _tc$toRgb3.b;

    handleChange("rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacity, ")"));
  };

  var handleSV = function handleSV(value) {
    var _tc$toRgb4 = tc(value).toRgb(),
        r = _tc$toRgb4.r,
        g = _tc$toRgb4.g,
        b = _tc$toRgb4.b;

    handleChange("rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacity, ")"));
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Input, {
    value: round(internalHue),
    callback: function callback(newVal) {
      return handleH(newVal, hsvS, hsvV);
    },
    label: "H",
    max: 360
  }), /*#__PURE__*/_react["default"].createElement(Input, {
    value: round(hsvS * 100),
    callback: function callback(newVal) {
      return handleSV({
        h: internalHue,
        s: newVal,
        v: hsvV
      });
    },
    label: "S"
  }), /*#__PURE__*/_react["default"].createElement(Input, {
    value: round(hsvV * 100),
    callback: function callback(newVal) {
      return handleSV({
        h: internalHue,
        s: hsvS,
        v: newVal
      });
    },
    label: "V"
  }));
};

var CMKYInputs = function CMKYInputs() {
  var _usePicker5 = (0, _context.usePicker)(),
      handleChange = _usePicker5.handleChange,
      r = _usePicker5.r,
      g = _usePicker5.g,
      b = _usePicker5.b,
      opacity = _usePicker5.opacity;

  var _rgb2cmyk = (0, _converters.rgb2cmyk)(r, g, b),
      c = _rgb2cmyk.c,
      m = _rgb2cmyk.m,
      k = _rgb2cmyk.k,
      y = _rgb2cmyk.y;

  var handleCmyk = function handleCmyk(value) {
    var _cmykToRgb = (0, _converters.cmykToRgb)(value),
        r = _cmykToRgb.r,
        g = _cmykToRgb.g,
        b = _cmykToRgb.b;

    handleChange("rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacity, ")"));
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Input, {
    value: round(c * 100),
    callback: function callback(newVal) {
      return handleCmyk({
        c: newVal,
        m: m,
        y: y,
        k: k
      });
    },
    label: "C"
  }), /*#__PURE__*/_react["default"].createElement(Input, {
    value: round(m * 100),
    callback: function callback(newVal) {
      return handleCmyk({
        c: c,
        m: newVal,
        y: y,
        k: k
      });
    },
    label: "M"
  }), /*#__PURE__*/_react["default"].createElement(Input, {
    value: round(y * 100),
    callback: function callback(newVal) {
      return handleCmyk({
        c: c,
        m: m,
        y: newVal,
        k: k
      });
    },
    label: "Y"
  }), /*#__PURE__*/_react["default"].createElement(Input, {
    value: round(k * 100),
    callback: function callback(newVal) {
      return handleCmyk({
        c: c,
        m: m,
        y: y,
        k: newVal
      });
    },
    label: "K"
  }));
};

var Input = function Input(_ref2) {
  var value = _ref2.value,
      callback = _ref2.callback,
      _ref2$max = _ref2.max,
      max = _ref2$max === void 0 ? 100 : _ref2$max,
      label = _ref2.label;

  var _useState5 = (0, _react.useState)(value),
      _useState6 = _slicedToArray(_useState5, 2),
      temp = _useState6[0],
      setTemp = _useState6[1];

  var _usePicker6 = (0, _context.usePicker)(),
      inputType = _usePicker6.inputType;

  (0, _react.useEffect)(function () {
    setTemp(value);
  }, [value]);

  var _onChange = function onChange(e) {
    var newVal = (0, _formatters.formatInputValues)(parseFloat(e.target.value), 0, max);
    setTemp(newVal);
    callback(newVal);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: inputType === 'cmyk' ? '14.9%' : '18%'
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    style: _objectSpread({}, _style.inputWrap),
    value: temp,
    onChange: function onChange(e) {
      return _onChange(e);
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({}, _style.inputLabel)
  }, label));
};

var round = function round(val) {
  return Math.round(val, 2);
};