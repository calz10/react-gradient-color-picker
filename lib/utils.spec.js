"use strict";

var _utils = require("./utils");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

describe('isUpperCase', function () {
  it('should return true when the first letter of the string is upper-cased', function () {
    expect((0, _utils.isUpperCase)('Aloha oe')).toBe(true);
  });
  it('should return false when the first letter of the string is lower-cased', function () {
    expect((0, _utils.isUpperCase)('aLOHA OE')).toBe(false);
  });
});
describe('getNewHsl', function () {
  it('should return correct RGBA color for given HSL color', function () {
    var callback = function callback() {};

    var output = (0, _utils.getNewHsl)(116, 79, 19, 0.5, callback);
    expect(output).toEqual('rgba(15, 87, 10, 0.5)');
  });
  it('should trigger callback with correct arguments', function () {
    var callback = jest.fn();
    (0, _utils.getNewHsl)(116, 79, 19, 0.5, callback);
    expect(callback).toHaveBeenCalledWith(116);
  });
});
describe('getGradientType', function () {
  it('should pick the correct prefix of gradient values', function () {
    var assertionMap = [['linear-gradient(30deg, #6789AB 0%, #012345 100%)', 'linear-gradient'], ['-webkit-linear-gradient(30deg, #6789AB 0%, #012345 100%)', '-webkit-linear-gradient'], ['-o-linear-gradient(30deg, #6789AB 0%, #012345 100%)', '-o-linear-gradient'], ['-ms-linear-gradient(30deg, #6789AB 0%, #012345 100%)', '-ms-linear-gradient'], ['-moz-linear-gradient(30deg, #6789AB 0%, #012345 100%)', '-moz-linear-gradient'], ['repeating-linear-gradient(30deg, #6789AB 0%, #012345 100%)', 'repeating-linear-gradient'], ['-webkit-repeating-linear-gradient(30deg, #6789AB 0%, #012345 100%)', '-webkit-repeating-linear-gradient'], ['-o-repeating-linear-gradient(30deg, #6789AB 0%, #012345 100%)', '-o-repeating-linear-gradient'], ['-ms-repeating-linear-gradient(30deg, #6789AB 0%, #012345 100%)', '-ms-repeating-linear-gradient'], ['-moz-repeating-linear-gradient(30deg, #6789AB 0%, #012345 100%)', '-moz-repeating-linear-gradient'], ['radial-gradient(#6789AB 0%, #012345 100%)', 'radial-gradient'], ['-webkit-radial-gradient(#6789AB 0%, #012345 100%)', '-webkit-radial-gradient'], ['-o-radial-gradient(#6789AB 0%, #012345 100%)', '-o-radial-gradient'], ['-ms-radial-gradient(#6789AB 0%, #012345 100%)', '-ms-radial-gradient'], ['-moz-radial-gradient(#6789AB 0%, #012345 100%)', '-moz-radial-gradient'], ['repeating-radial-gradient(#6789AB 0%, #012345 100%)', 'repeating-radial-gradient'], ['-webkit-repeating-radial-gradient(#6789AB 0%, #012345 100%)', '-webkit-repeating-radial-gradient'], ['-o-repeating-radial-gradient(#6789AB 0%, #012345 100%)', '-o-repeating-radial-gradient'], ['-ms-repeating-radial-gradient(#6789AB 0%, #012345 100%)', '-ms-repeating-radial-gradient'], ['-moz-repeating-radial-gradient(#6789AB 0%, #012345 100%)', '-moz-repeating-radial-gradient']];
    var outputs = [];
    var expected = [];
    assertionMap.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          value = _ref2[0],
          expectedValue = _ref2[1];

      outputs.push((0, _utils.getGradientType)(value));
      expected.push(expectedValue);
    });
    expect(outputs).toEqual(expected);
  });
});
describe('getDegrees', function () {
  it('should pick the correct degree from linear gradient values', function () {
    var assertionMap = [['linear-gradient(0deg, #6789AB 0%, #012345 100%)', 0], ['-webkit-linear-gradient(1deg, #6789AB 0%, #012345 100%)', 1], ['-o-linear-gradient(2deg, #6789AB 0%, #012345 100%)', 2], ['-ms-linear-gradient(3deg, #6789AB 0%, #012345 100%)', 3], ['-moz-linear-gradient(4deg, #6789AB 0%, #012345 100%)', 4], ['repeating-linear-gradient(5deg, #6789AB 0%, #012345 100%)', 5], ['-webkit-repeating-linear-gradient(6deg, #6789AB 0%, #012345 100%)', 6], ['-o-repeating-linear-gradient(7deg, #6789AB 0%, #012345 100%)', 7], ['-ms-repeating-linear-gradient(8deg, #6789AB 0%, #012345 100%)', 8], ['-moz-repeating-linear-gradient(9deg, #6789AB 0%, #012345 100%)', 9]];
    var outputs = [];
    var expected = [];
    assertionMap.forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          value = _ref4[0],
          expectedValue = _ref4[1];

      outputs.push((0, _utils.getDegrees)(value));
      expected.push(expectedValue);
    });
    expect(outputs).toEqual(expected);
  });
});