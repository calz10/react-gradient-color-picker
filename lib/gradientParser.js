"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gradientParser = void 0;

var _formatters = require("./formatters");

var _utils = require("./utils");

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

var gradientParser = function gradientParser() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var tokens = {
    linearGradient: /^(-(webkit|o|ms|moz)-)?(linear-gradient)/i,
    repeatingLinearGradient: /^(-(webkit|o|ms|moz)-)?(repeating-linear-gradient)/i,
    radialGradient: /^(-(webkit|o|ms|moz)-)?(radial-gradient)/i,
    repeatingRadialGradient: /^(-(webkit|o|ms|moz)-)?(repeating-radial-gradient)/i,
    sideOrCorner: /^to (left (top|bottom)|right (top|bottom)|top (left|right)|bottom (left|right)|left|right|top|bottom)/i,
    extentKeywords: /^(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)/,
    positionKeywords: /^(left|center|right|top|bottom)/i,
    pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,
    percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))%/,
    emValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,
    angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,
    startCall: /^\(/,
    endCall: /^\)/,
    comma: /^,/,
    hexColor: /^#([0-9a-fA-F]+)/,
    literalColor: /^([a-zA-Z]+)/,
    rgbColor: /^rgb/i,
    spacedRgbColor: /^(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s+\/\s+([0-1](\.\d+)?)/,
    rgbaColor: /^rgba/i,
    hslColor: /^hsl/i,
    hsvColor: /^hsv/i,
    number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/
  };

  function error(msg) {
    var err = new Error(input + ': ' + msg);
    err.source = input;
    throw err;
  }

  function getAST() {
    var _ast0$colorStops;

    var ast = matchListDefinitions();

    if (input.length > 0) {
      error('Invalid input not EOF');
    }

    var ast0 = ast[0];
    var checkSelected = ast0 === null || ast0 === void 0 ? void 0 : (_ast0$colorStops = ast0.colorStops) === null || _ast0$colorStops === void 0 ? void 0 : _ast0$colorStops.filter(function (c) {
      return (0, _utils.isUpperCase)(c.value);
    }).length;

    var getGradientObj = function getGradientObj() {
      if (checkSelected > 0) {
        return ast0;
      } else {
        var val = function val(c, i) {
          return i === 0 ? (0, _formatters.high)(c) : (0, _formatters.low)(c);
        };

        return _objectSpread(_objectSpread({}, ast0), {}, {
          colorStops: ast0.colorStops.map(function (c, i) {
            return _objectSpread(_objectSpread({}, c), {}, {
              value: val(c, i)
            });
          })
        });
      }
    };

    return getGradientObj();
  }

  function matchListDefinitions() {
    return matchListing(matchDefinition);
  }

  function matchDefinition() {
    return matchGradient('linear-gradient', tokens.linearGradient, matchLinearOrientation) || matchGradient('repeating-linear-gradient', tokens.repeatingLinearGradient, matchLinearOrientation) || matchGradient('radial-gradient', tokens.radialGradient, matchListRadialOrientations) || matchGradient('repeating-radial-gradient', tokens.repeatingRadialGradient, matchListRadialOrientations);
  }

  function matchGradient(gradientType, pattern, orientationMatcher) {
    return matchCall(pattern, function (captures) {
      var orientation = orientationMatcher();

      if (orientation) {
        if (!scan(tokens.comma)) {
          error('Missing comma before color stops');
        }
      }

      return {
        type: gradientType,
        orientation: orientation,
        colorStops: matchListing(matchColorStop)
      };
    });
  }

  function matchCall(pattern, callback) {
    var captures = scan(pattern);

    if (captures) {
      if (!scan(tokens.startCall)) {
        error('Missing (');
      }

      var result = callback(captures);

      if (!scan(tokens.endCall)) {
        error('Missing )');
      }

      return result;
    }
  }

  function matchLinearOrientation() {
    return matchSideOrCorner() || matchAngle();
  }

  function matchSideOrCorner() {
    return match('directional', tokens.sideOrCorner, 1);
  }

  function matchAngle() {
    return match('angular', tokens.angleValue, 1);
  }

  function matchListRadialOrientations() {
    var radialOrientations,
        radialOrientation = matchRadialOrientation(),
        lookaheadCache;

    if (radialOrientation) {
      radialOrientations = [];
      radialOrientations.push(radialOrientation);
      lookaheadCache = input;

      if (scan(tokens.comma)) {
        radialOrientation = matchRadialOrientation();

        if (radialOrientation) {
          radialOrientations.push(radialOrientation);
        } else {
          input = lookaheadCache;
        }
      }
    }

    return radialOrientations;
  }

  function matchRadialOrientation() {
    var radialType = matchCircle() || matchEllipse();

    if (radialType) {
      radialType.at = matchAtPosition();
    } else {
      var extent = matchExtentKeyword();

      if (extent) {
        radialType = extent;
        var positionAt = matchAtPosition();

        if (positionAt) {
          radialType.at = positionAt;
        }
      } else {
        var defaultPosition = matchPositioning();

        if (defaultPosition) {
          radialType = {
            type: 'default-radial',
            at: defaultPosition
          };
        }
      }
    }

    return radialType;
  }

  function matchCircle() {
    var circle = match('shape', /^(circle)/i, 0);

    if (circle) {
      circle.style = matchLength() || matchExtentKeyword();
    }

    return circle;
  }

  function matchEllipse() {
    var ellipse = match('shape', /^(ellipse)/i, 0);

    if (ellipse) {
      ellipse.style = matchDistance() || matchExtentKeyword();
    }

    return ellipse;
  }

  function matchExtentKeyword() {
    return match('extent-keyword', tokens.extentKeywords, 1);
  }

  function matchAtPosition() {
    if (match('position', /^at/, 0)) {
      var positioning = matchPositioning();

      if (!positioning) {
        error('Missing positioning value');
      }

      return positioning;
    }
  }

  function matchPositioning() {
    var location = matchCoordinates();

    if (location.x || location.y) {
      return {
        type: 'position',
        value: location
      };
    }
  }

  function matchCoordinates() {
    return {
      x: matchDistance(),
      y: matchDistance()
    };
  }

  function matchListing(matcher) {
    var captures = matcher(),
        result = [];

    if (captures) {
      result.push(captures);

      while (scan(tokens.comma)) {
        captures = matcher();

        if (captures) {
          result.push(captures);
        } else {
          error('One extra comma');
        }
      }
    }

    return result;
  }

  function matchColorStop() {
    var _matchDistance;

    var color = matchColor();

    if (!color) {
      error('Expected color definition');
    }

    color.left = parseInt((_matchDistance = matchDistance()) === null || _matchDistance === void 0 ? void 0 : _matchDistance.value);
    return color;
  }

  function matchColor() {
    return matchHexColor() || matchHSLColor() || matchRGBAColor() || matchRGBColor() || matchLiteralColor() || matchHSVColor();
  }

  function matchLiteralColor() {
    return match('literal', tokens.literalColor, 0);
  }

  function matchHexColor() {
    return match('hex', tokens.hexColor, 1);
  }

  var convertHsl = function convertHsl(val) {
    var capIt = (0, _utils.isUpperCase)(val === null || val === void 0 ? void 0 : val[0]);
    var hsl = matchListing(matchNumber);

    var _tinycolor$toRgb = tinycolor({
      h: hsl[0],
      s: hsl[1],
      l: hsl[2],
      a: hsl[3] || 1
    }).toRgb(),
        r = _tinycolor$toRgb.r,
        g = _tinycolor$toRgb.g,
        b = _tinycolor$toRgb.b,
        a = _tinycolor$toRgb.a;

    return {
      value: "".concat(capIt ? 'RGBA' : 'rgba', "(").concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")")
    };
  };

  function matchHSLColor() {
    return matchCall(tokens.hslColor, convertHsl);
  }

  var convertHsv = function convertHsv(val) {
    var capIt = (0, _utils.isUpperCase)(val === null || val === void 0 ? void 0 : val[0]);
    var hsv = matchListing(matchNumber);

    var _tinycolor$toRgb2 = tinycolor({
      h: hsv[0],
      s: hsv[1],
      v: hsv[2],
      a: hsv[3] || 1
    }).toRgb(),
        r = _tinycolor$toRgb2.r,
        g = _tinycolor$toRgb2.g,
        b = _tinycolor$toRgb2.b,
        a = _tinycolor$toRgb2.a;

    return {
      value: "".concat(capIt ? 'RGBA' : 'rgba', "(").concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")")
    };
  };

  function matchHSVColor() {
    return matchCall(tokens.hsvColor, convertHsv);
  }

  var convertRgb = function convertRgb(val) {
    var capIt = (0, _utils.isUpperCase)(val === null || val === void 0 ? void 0 : val[0]);
    var captures = scan(tokens.spacedRgbColor);

    var _ref = captures || [null].concat(_toConsumableArray(matchListing(matchNumber))),
        _ref2 = _slicedToArray(_ref, 5),
        r = _ref2[1],
        g = _ref2[2],
        b = _ref2[3],
        _ref2$ = _ref2[4],
        a = _ref2$ === void 0 ? 1 : _ref2$;

    return {
      value: "".concat(capIt ? 'RGBA' : 'rgba', "(").concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")")
    };
  };

  function matchRGBColor() {
    return matchCall(tokens.rgbColor, convertRgb);
  }

  var checkCaps = function checkCaps(val) {
    var capIt = (0, _utils.isUpperCase)(val === null || val === void 0 ? void 0 : val[0]);
    return {
      value: "".concat(capIt ? 'RGBA' : 'rgba', "(").concat(matchListing(matchNumber), ")")
    };
  };

  function matchRGBAColor() {
    return matchCall(tokens.rgbaColor, checkCaps);
  }

  function matchNumber() {
    return scan(tokens.number)[1];
  }

  function matchDistance() {
    return match('%', tokens.percentageValue, 1) || matchPositionKeyword() || matchLength();
  }

  function matchPositionKeyword() {
    return match('position-keyword', tokens.positionKeywords, 1);
  }

  function matchLength() {
    return match('px', tokens.pixelValue, 1) || match('em', tokens.emValue, 1);
  }

  function match(type, pattern, captureIndex) {
    var captures = scan(pattern);

    if (captures) {
      return {
        type: type,
        value: captures[captureIndex]
      };
    }
  }

  function scan(regexp) {
    var captures, blankCaptures;
    blankCaptures = /^[\n\r\t\s]+/.exec(input);

    if (blankCaptures) {
      consume(blankCaptures[0].length);
    }

    captures = regexp.exec(input);

    if (captures) {
      consume(captures[0].length);
    }

    return captures;
  }

  function consume(size) {
    input = input.substr(size);
  }

  return getAST();
};

exports.gradientParser = gradientParser;