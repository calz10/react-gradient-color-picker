"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PickerContextWrapper;
exports.usePicker = usePicker;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

var _formatters = require("./formatters");

var _constants = require("./constants");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tinycolor = require("tinycolor2");

var crossSize = _constants.config.crossSize;
var PickerContext = /*#__PURE__*/(0, _react.createContext)();

function PickerContextWrapper(_ref) {
  var children = _ref.children,
      bounds = _ref.bounds,
      value = _ref.value,
      onChange = _ref.onChange,
      squareSize = _ref.squareSize,
      squareHeight = _ref.squareHeight;
  var offsetLeft = bounds === null || bounds === void 0 ? void 0 : bounds.x;
  var isGradient = value === null || value === void 0 ? void 0 : value.includes('gradient');
  var gradientType = (0, _utils.getGradientType)(value);
  var degrees = (0, _utils.getDegrees)(value);
  var degreeStr = gradientType === 'linear-gradient' ? "".concat(degrees, "deg") : 'circle';
  var colors = (0, _formatters.getColors)(value);
  var indexedColors = colors === null || colors === void 0 ? void 0 : colors.map(function (c, i) {
    return _objectSpread(_objectSpread({}, c), {}, {
      index: i
    });
  });
  var currentColorObj = (indexedColors === null || indexedColors === void 0 ? void 0 : indexedColors.filter(function (c) {
    return (0, _utils.isUpperCase)(c.value);
  })[0]) || indexedColors[0];
  var currentColor = currentColorObj === null || currentColorObj === void 0 ? void 0 : currentColorObj.value;
  var selectedColor = currentColorObj === null || currentColorObj === void 0 ? void 0 : currentColorObj.index;
  var currentLeft = currentColorObj === null || currentColorObj === void 0 ? void 0 : currentColorObj.left;

  var _useState = (0, _react.useState)(tinycolor(currentColor)),
      _useState2 = _slicedToArray(_useState, 2),
      tinyColor = _useState2[0],
      setTinyColor = _useState2[1];

  var _useState3 = (0, _react.useState)('rgb'),
      _useState4 = _slicedToArray(_useState3, 2),
      inputType = _useState4[0],
      setInputType = _useState4[1];

  var _tinyColor$toRgb = tinyColor.toRgb(),
      r = _tinyColor$toRgb.r,
      g = _tinyColor$toRgb.g,
      b = _tinyColor$toRgb.b,
      opacity = _tinyColor$toRgb.a;

  var _tinyColor$toHsl = tinyColor.toHsl(),
      h = _tinyColor$toHsl.h,
      s = _tinyColor$toHsl.s,
      l = _tinyColor$toHsl.l;

  var _tinyColor$toHsv = tinyColor.toHsv(),
      hsvS = _tinyColor$toHsv.s,
      hsvV = _tinyColor$toHsv.v;

  var _useState5 = (0, _react.useState)(Math.round(h)),
      _useState6 = _slicedToArray(_useState5, 2),
      internalHue = _useState6[0],
      setInternalHue = _useState6[1];

  var hue = Math.round(h);

  var _computeSquareXY = (0, _utils.computeSquareXY)([hue, s, l], squareSize, squareHeight),
      _computeSquareXY2 = _slicedToArray(_computeSquareXY, 2),
      x = _computeSquareXY2[0],
      y = _computeSquareXY2[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      previousColors = _useState8[0],
      setPreviousColors = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      previousGraidents = _useState10[0],
      setPreviousGradients = _useState10[1];

  (0, _react.useEffect)(function () {
    setTinyColor(tinycolor(currentColor));
    setInternalHue(hue);
  }, [currentColor, hue]);
  (0, _react.useEffect)(function () {
    if (isGradient) {
      setPreviousGradients([value].concat(_toConsumableArray(previousGraidents === null || previousGraidents === void 0 ? void 0 : previousGraidents.slice(0, 4))));
    } else {
      if (tinycolor(value).isValid()) {
        setPreviousColors([value].concat(_toConsumableArray(previousColors === null || previousColors === void 0 ? void 0 : previousColors.slice(0, 4))));
      }
    } //eslint-disable-next-line

  }, [value]);

  var createGradientStr = function createGradientStr(newColors) {
    var sorted = newColors.sort(function (a, b) {
      return a.left - b.left;
    });
    var colorString = sorted === null || sorted === void 0 ? void 0 : sorted.map(function (cc) {
      return "".concat(cc === null || cc === void 0 ? void 0 : cc.value, " ").concat(cc.left, "%");
    });
    onChange("".concat(gradientType, "(").concat(degreeStr, ", ").concat(colorString.join(', '), ")"));
  };

  var handleGradient = function handleGradient(newColor) {
    var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentLeft;
    var remaining = colors === null || colors === void 0 ? void 0 : colors.filter(function (c) {
      return !(0, _utils.isUpperCase)(c.value);
    });
    var newColors = [{
      value: newColor.toUpperCase(),
      left: left
    }].concat(_toConsumableArray(remaining));
    createGradientStr(newColors);
  };

  var handleChange = function handleChange(newColor) {
    if (isGradient) {
      handleGradient(newColor);
    } else {
      onChange(newColor);
    }
  };

  var handleOpacity = function handleOpacity(e) {
    var newO = (0, _utils.getHandleValue)(e) / 100;
    var newColor = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(newO, ")");
    handleChange(newColor);
  };

  var handleHue = function handleHue(e) {
    var newHue = (0, _utils.getHandleValue)(e) * 3.6;
    var newHsl = (0, _utils.getNewHsl)(newHue, s, l, opacity, setInternalHue);
    handleChange(newHsl);
  };

  var handleColor = function handleColor(e, ctx) {
    var _computePickerPositio = (0, _utils.computePickerPosition)(e, squareHeight),
        _computePickerPositio2 = _slicedToArray(_computePickerPositio, 2),
        x = _computePickerPositio2[0],
        y = _computePickerPositio2[1];

    var x1 = Math.min(x + crossSize / 2, squareSize - 1);
    var y1 = Math.min(y + crossSize / 2, squareHeight - 1);

    var _ctx$getImageData$dat = _slicedToArray(ctx.getImageData(x1, y1, 1, 1).data, 3),
        r = _ctx$getImageData$dat[0],
        g = _ctx$getImageData$dat[1],
        b = _ctx$getImageData$dat[2];

    var newColor = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacity, ")");
    handleChange(newColor);
  };

  var setSelectedColor = function setSelectedColor(index) {
    var newGradStr = colors === null || colors === void 0 ? void 0 : colors.map(function (cc, i) {
      return _objectSpread(_objectSpread({}, cc), {}, {
        value: i === index ? (0, _formatters.high)(cc) : (0, _formatters.low)(cc)
      });
    });
    createGradientStr(newGradStr);
  };

  var addPoint = function addPoint(e) {
    var left = (0, _utils.getHandleValue)(e, offsetLeft);
    var newColors = [].concat(_toConsumableArray(colors.map(function (c) {
      return _objectSpread(_objectSpread({}, c), {}, {
        value: (0, _formatters.low)(c)
      });
    })), [{
      value: currentColor,
      left: left
    }]);
    createGradientStr(newColors);
  };

  var deletePoint = function deletePoint() {
    if ((colors === null || colors === void 0 ? void 0 : colors.length) > 2) {
      var remaining = colors === null || colors === void 0 ? void 0 : colors.filter(function (rc, i) {
        return i !== selectedColor;
      });
      createGradientStr(remaining);
    }
  };

  var pickerState = {
    x: x,
    y: y,
    s: s,
    l: l,
    r: r,
    g: g,
    b: b,
    hue: hue,
    hsvS: hsvS,
    hsvV: hsvV,
    value: value,
    colors: colors,
    degrees: degrees,
    opacity: opacity,
    onChange: onChange,
    addPoint: addPoint,
    inputType: inputType,
    tinyColor: tinyColor,
    handleHue: handleHue,
    isGradient: isGradient,
    offsetLeft: offsetLeft,
    squareSize: squareSize,
    handleColor: handleColor,
    currentLeft: currentLeft,
    deletePoint: deletePoint,
    internalHue: internalHue,
    squareHeight: squareHeight,
    setInputType: setInputType,
    gradientType: gradientType,
    handleChange: handleChange,
    currentColor: currentColor,
    selectedColor: selectedColor,
    handleOpacity: handleOpacity,
    setInternalHue: setInternalHue,
    previousColors: previousColors,
    handleGradient: handleGradient,
    setSelectedColor: setSelectedColor,
    previousGraidents: previousGraidents
  };
  return /*#__PURE__*/_react["default"].createElement(PickerContext.Provider, {
    value: pickerState
  }, children);
}

function usePicker() {
  return (0, _react.useContext)(PickerContext);
}

PickerContextWrapper.propTypes = {
  children: _propTypes["default"].node,
  bounds: _propTypes["default"].object,
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func
};