"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useColorPicker = void 0;

var _react = require("react");

var _utils = require("./utils");

var _formatters = require("./formatters");

var _converters = require("./converters");

var _constants = require("./constants");

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

var defaultColor = _constants.config.defaultColor,
    defaultGradient = _constants.config.defaultGradient;

var tc = require("tinycolor2");

var useColorPicker = function useColorPicker(value, onChange) {
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
  var selectedPoint = currentColorObj === null || currentColorObj === void 0 ? void 0 : currentColorObj.index;
  var currentLeft = currentColorObj === null || currentColorObj === void 0 ? void 0 : currentColorObj.left;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      previousColors = _useState2[0],
      setPreviousColors = _useState2[1];

  var tiny = tc(currentColor);

  var _tiny$toRgb = tiny.toRgb(),
      r = _tiny$toRgb.r,
      g = _tiny$toRgb.g,
      b = _tiny$toRgb.b,
      a = _tiny$toRgb.a;

  var _tiny$toHsl = tiny.toHsl(),
      h = _tiny$toHsl.h,
      s = _tiny$toHsl.s,
      l = _tiny$toHsl.l;

  (0, _react.useEffect)(function () {
    var _tc;

    if ((_tc = tc(currentColor)) !== null && _tc !== void 0 && _tc.isValid()) {
      setPreviousColors([currentColor].concat(_toConsumableArray(previousColors === null || previousColors === void 0 ? void 0 : previousColors.slice(0, 19))));
    }
  }, [currentColor, previousColors]);

  var setLinear = function setLinear() {
    var remaining = value.split(/,(.+)/)[1];
    onChange("linear-gradient(90deg, ".concat(remaining));
  };

  var setRadial = function setRadial() {
    var remaining = value.split(/,(.+)/)[1];
    onChange("radial-gradient(circle, ".concat(remaining));
  };

  var setDegrees = function setDegrees(newDegrees) {
    var remaining = value.split(/,(.+)/)[1];
    onChange("linear-gradient(".concat((0, _formatters.formatInputValues)(newDegrees, 0, 360), "deg, ").concat(remaining));

    if (gradientType !== 'linear-gradient') {
      console.log('Warning: you are updating degrees when the gradient type is not linear. This will change the gradients type which may be undesired');
    }
  };

  var setSolid = function setSolid(startingColor) {
    var newValue = startingColor || defaultColor;
    onChange(newValue);
  };

  var setGradient = function setGradient(startingGradiant) {
    var newValue = startingGradiant || defaultGradient;
    onChange(newValue);
  };

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

  var setR = function setR(newR) {
    var newVal = (0, _formatters.formatInputValues)(newR, 0, 255);
    handleChange("rgba(".concat(newVal, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")"));
  };

  var setG = function setG(newG) {
    var newVal = (0, _formatters.formatInputValues)(newG, 0, 255);
    handleChange("rgba(".concat(r, ", ").concat(newVal, ", ").concat(b, ", ").concat(a, ")"));
  };

  var setB = function setB(newB) {
    var newVal = (0, _formatters.formatInputValues)(newB, 0, 255);
    handleChange("rgba(".concat(r, ", ").concat(g, ", ").concat(newVal, ", ").concat(a, ")"));
  };

  var setA = function setA(newA) {
    var newVal = (0, _formatters.formatInputValues)(newA, 0, 100);
    handleChange("rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(newVal / 100, ")"));
  };

  var setHue = function setHue(newHue) {
    var newVal = (0, _formatters.formatInputValues)(newHue, 0, 360);
    var tinyNew = tc({
      h: newVal,
      s: s,
      l: l
    });

    var _tinyNew$toRgb = tinyNew.toRgb(),
        r = _tinyNew$toRgb.r,
        g = _tinyNew$toRgb.g,
        b = _tinyNew$toRgb.b;

    handleChange("rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")"));
  };

  var setSaturation = function setSaturation(newSat) {
    var newVal = (0, _formatters.formatInputValues)(newSat, 0, 100);
    var tinyNew = tc({
      h: h,
      s: newVal / 100,
      l: l
    });

    var _tinyNew$toRgb2 = tinyNew.toRgb(),
        r = _tinyNew$toRgb2.r,
        g = _tinyNew$toRgb2.g,
        b = _tinyNew$toRgb2.b;

    handleChange("rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")"));
  };

  var setLightness = function setLightness(newLight) {
    var newVal = (0, _formatters.formatInputValues)(newLight, 0, 100);
    var tinyNew = tc({
      h: h,
      s: s,
      l: newVal / 100
    });

    if (tinyNew !== null && tinyNew !== void 0 && tinyNew.isValid()) {
      var _tinyNew$toRgb3 = tinyNew.toRgb(),
          _r = _tinyNew$toRgb3.r,
          _g = _tinyNew$toRgb3.g,
          _b = _tinyNew$toRgb3.b;

      handleChange("rgba(".concat(_r, ", ").concat(_g, ", ").concat(_b, ", ").concat(a, ")"));
    } else {
      console.log('The new color was invalid, perhaps the lightness you passed in was a decimal? Please pass the new value between 0 - 100');
    }
  };

  var valueToHSL = function valueToHSL() {
    return tiny.toHslString();
  };

  var valueToHSV = function valueToHSV() {
    return tiny.toHsvString();
  };

  var valueToHex = function valueToHex() {
    return tiny.toHexString();
  };

  var valueToCmyk = function valueToCmyk() {
    var _rgb2cmyk = (0, _converters.rgb2cmyk)(r, g, b),
        c = _rgb2cmyk.c,
        m = _rgb2cmyk.m,
        y = _rgb2cmyk.y,
        k = _rgb2cmyk.k;

    return "cmyk(".concat(c, ", ").concat(m, ", ").concat(y, ", ").concat(k, ")");
  };

  var setSelectedPoint = function setSelectedPoint(index) {
    if (isGradient) {
      var newGradStr = colors === null || colors === void 0 ? void 0 : colors.map(function (cc, i) {
        return _objectSpread(_objectSpread({}, cc), {}, {
          value: i === index ? (0, _formatters.high)(cc) : (0, _formatters.low)(cc)
        });
      });
      createGradientStr(newGradStr);
    } else {
      console.log('This function is only relevant when the picker is in gradient mode');
    }
  };

  var addPoint = function addPoint(left) {
    var newColors = [].concat(_toConsumableArray(colors.map(function (c) {
      return _objectSpread(_objectSpread({}, c), {}, {
        value: (0, _formatters.low)(c)
      });
    })), [{
      value: currentColor,
      left: left
    }]);
    createGradientStr(newColors);

    if (!left) {
      console.log('You did not pass a stop value (left amount) for the new color point so it defaulted to 50');
    }
  };

  var deletePoint = function deletePoint(index) {
    if ((colors === null || colors === void 0 ? void 0 : colors.length) > 2) {
      var pointToDelete = index || selectedPoint;
      var remaining = colors === null || colors === void 0 ? void 0 : colors.filter(function (rc, i) {
        return i !== pointToDelete;
      });
      createGradientStr(remaining);

      if (!index) {
        console.log('You did not pass in the index of the point you wanted to delete so the function default to the currently selected point');
      }
    } else {
      console.log('A gradient must have atleast two colors, disable your delete button when necessary');
    }
  };

  var setPointLeft = function setPointLeft(left) {
    handleGradient(currentColor, (0, _formatters.formatInputValues)(left, 0, 100));
  };

  var rgbaArr = [r, g, b, a];
  var hslArr = [h, s, l];
  return {
    setLinear: setLinear,
    setRadial: setRadial,
    setDegrees: setDegrees,
    setSolid: setSolid,
    setGradient: setGradient,
    setR: setR,
    setG: setG,
    setB: setB,
    setA: setA,
    setHue: setHue,
    setSaturation: setSaturation,
    setLightness: setLightness,
    valueToHSL: valueToHSL,
    valueToHSV: valueToHSV,
    valueToHex: valueToHex,
    valueToCmyk: valueToCmyk,
    setSelectedPoint: setSelectedPoint,
    addPoint: addPoint,
    deletePoint: deletePoint,
    selectedPoint: selectedPoint,
    isGradient: isGradient,
    gradientType: gradientType,
    degrees: degrees,
    setPointLeft: setPointLeft,
    currentLeft: currentLeft,
    rgbaArr: rgbaArr,
    hslArr: hslArr,
    previousColors: previousColors
  };
};

exports.useColorPicker = useColorPicker;