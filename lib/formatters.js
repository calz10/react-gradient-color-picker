"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.low = exports.high = exports.getColors = exports.formatInputValues = void 0;

var _constants = require("./constants");

var _gradientParser = require("./gradientParser");

var defaultColor = _constants.config.defaultColor,
    defaultGradient = _constants.config.defaultGradient;

var low = function low(color) {
  return color.value.toLowerCase();
};

exports.low = low;

var high = function high(color) {
  return color.value.toUpperCase();
};

exports.high = high;

var getColors = function getColors(value) {
  var isGradient = value === null || value === void 0 ? void 0 : value.includes('gradient');

  if (isGradient) {
    var isConic = value === null || value === void 0 ? void 0 : value.includes('conic');
    var safeValue = !isConic && validate(value) ? value : defaultGradient;

    if (isConic) {
      console.log('Sorry we cant handle conic gradients yet');
    }

    var obj = (0, _gradientParser.gradientParser)(safeValue);
    return obj === null || obj === void 0 ? void 0 : obj.colorStops;
  } else {
    var _safeValue = validate(value) ? value : defaultColor;

    return [{
      value: _safeValue
    }];
  }
};

exports.getColors = getColors;

var validate = function validate(c) {
  var img = document.createElement('img');
  img.style = 'background: rgb(0, 0, 0)';
  img.style = 'background: ' + c;
  if (img.style.background !== 'rgb(0, 0, 0)' && img.style.background !== '') return true;
  img.style = 'background: rgb(255, 255, 255)';
  img.style = 'background: ' + c;
  return img.style.background !== 'rgb(255, 255, 255)' && img.style.background !== '';
};

var formatInputValues = function formatInputValues(value, min, max) {
  return isNaN(value) ? min : value < min ? min : value > max ? max : value;
};

exports.formatInputValues = formatInputValues;