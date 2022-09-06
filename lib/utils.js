"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computePickerPosition = computePickerPosition;
exports.computeSquareXY = computeSquareXY;
exports.getGradientType = exports.getDegrees = void 0;
exports.getHandleValue = getHandleValue;
exports.safeBounds = exports.isUpperCase = exports.getNewHsl = void 0;

var _formatters = require("./formatters");

var _constants = require("./constants");

var tc = require("tinycolor2");

var barSize = _constants.config.barSize,
    crossSize = _constants.config.crossSize;

function getHandleValue(e) {
  var _safeBounds = safeBounds(e),
      offsetLeft = _safeBounds.offsetLeft,
      clientWidth = _safeBounds.clientWidth;

  var pos = e.clientX - offsetLeft - barSize / 2;
  var adjuster = clientWidth - 18;
  var bounded = (0, _formatters.formatInputValues)(pos, 0, adjuster);
  return Math.round(bounded / (adjuster / 100));
}

function computeSquareXY(hsl, squareSize, squareHeight) {
  var s = hsl[1] * 100;
  var l = hsl[2] * 100;
  var t = s * (l < 50 ? l : 100 - l) / 100;
  var s1 = Math.round(200 * t / (l + t)) | 0;
  var b1 = Math.round(t + l);
  var x = squareSize / 100 * s1 - crossSize / 2;
  var y = squareHeight - squareHeight / 100 * b1 - crossSize / 2;
  return [x, y];
}

function computePickerPosition(e) {
  var _safeBounds2 = safeBounds(e),
      offsetLeft = _safeBounds2.offsetLeft,
      offsetTop = _safeBounds2.offsetTop,
      clientWidth = _safeBounds2.clientWidth,
      clientHeight = _safeBounds2.clientHeight;

  var getX = function getX() {
    var xPos = e.clientX - offsetLeft - crossSize / 2;
    return (0, _formatters.formatInputValues)(xPos, -8, clientWidth - 10);
  };

  var getY = function getY() {
    var yPos = e.clientY - offsetTop - crossSize / 2;
    return (0, _formatters.formatInputValues)(yPos, -8, clientHeight - 10);
  };

  return [getX(), getY()];
}

var getDegrees = function getDegrees(value) {
  var _s1$split$;

  var s1 = value === null || value === void 0 ? void 0 : value.split(",")[0];
  return parseInt(s1 === null || s1 === void 0 ? void 0 : (_s1$split$ = s1.split("(")[1]) === null || _s1$split$ === void 0 ? void 0 : _s1$split$.slice(0, -3));
};

exports.getDegrees = getDegrees;

var getGradientType = function getGradientType(value) {
  return value === null || value === void 0 ? void 0 : value.split("(")[0];
};

exports.getGradientType = getGradientType;

var getNewHsl = function getNewHsl(newHue, s, l, o, setInternalHue) {
  setInternalHue(newHue);
  var tiny = tc({
    h: newHue,
    s: s,
    l: l
  });

  var _tiny$toRgb = tiny.toRgb(),
      r = _tiny$toRgb.r,
      g = _tiny$toRgb.g,
      b = _tiny$toRgb.b;

  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(o, ")");
};

exports.getNewHsl = getNewHsl;

var safeBounds = function safeBounds(e) {
  var client = e.target.parentNode.getBoundingClientRect();
  var className = e.target.className;
  var adjuster = className === "c-resize ps-rl" ? 15 : 0;
  return {
    offsetLeft: (client === null || client === void 0 ? void 0 : client.x) + adjuster,
    offsetTop: client === null || client === void 0 ? void 0 : client.y,
    clientWidth: client === null || client === void 0 ? void 0 : client.width,
    clientHeight: client === null || client === void 0 ? void 0 : client.height
  };
};

exports.safeBounds = safeBounds;

var isUpperCase = function isUpperCase(str) {
  var _str$;

  return (str === null || str === void 0 ? void 0 : str[0]) === (str === null || str === void 0 ? void 0 : (_str$ = str[0]) === null || _str$ === void 0 ? void 0 : _str$.toUpperCase());
};

exports.isUpperCase = isUpperCase;