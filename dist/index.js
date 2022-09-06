"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _context = _interopRequireDefault(require("./context"));

var _Picker = _interopRequireDefault(require("./Picker"));

var _useColorPicker = require("./useColorPicker");

Object.keys(_useColorPicker).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useColorPicker[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useColorPicker[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ColorPicker(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? 'rgba(175, 51, 242, 1)' : _ref$value,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$hideControls = _ref.hideControls,
      hideControls = _ref$hideControls === void 0 ? false : _ref$hideControls,
      _ref$hideInputs = _ref.hideInputs,
      hideInputs = _ref$hideInputs === void 0 ? false : _ref$hideInputs,
      _ref$hidePresets = _ref.hidePresets,
      hidePresets = _ref$hidePresets === void 0 ? false : _ref$hidePresets,
      _ref$presets = _ref.presets,
      presets = _ref$presets === void 0 ? [] : _ref$presets,
      _ref$hideEyeDrop = _ref.hideEyeDrop,
      hideEyeDrop = _ref$hideEyeDrop === void 0 ? false : _ref$hideEyeDrop,
      _ref$hideAdvancedSlid = _ref.hideAdvancedSliders,
      hideAdvancedSliders = _ref$hideAdvancedSlid === void 0 ? false : _ref$hideAdvancedSlid,
      _ref$hideColorGuide = _ref.hideColorGuide,
      hideColorGuide = _ref$hideColorGuide === void 0 ? false : _ref$hideColorGuide,
      _ref$hideInputType = _ref.hideInputType,
      hideInputType = _ref$hideInputType === void 0 ? false : _ref$hideInputType,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 294 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 294 : _ref$height;
  var contRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      bounds = _useState2[0],
      setBounds = _useState2[1];

  var onScroll = function onScroll() {
    var _contRef$current;

    return setBounds(contRef === null || contRef === void 0 ? void 0 : (_contRef$current = contRef.current) === null || _contRef$current === void 0 ? void 0 : _contRef$current.getBoundingClientRect());
  };

  (0, _react.useEffect)(function () {
    var _contRef$current2;

    setBounds(contRef === null || contRef === void 0 ? void 0 : (_contRef$current2 = contRef.current) === null || _contRef$current2 === void 0 ? void 0 : _contRef$current2.getBoundingClientRect());
    window.addEventListener('scroll', onScroll, {
      once: true
    });
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: contRef,
    style: {
      width: width
    }
  }, /*#__PURE__*/_react["default"].createElement(_context["default"], {
    bounds: bounds,
    value: value,
    onChange: onChange,
    squareSize: width,
    squareHeight: height
  }, /*#__PURE__*/_react["default"].createElement(_Picker["default"], {
    hideControls: hideControls,
    hideInputs: hideInputs,
    hidePresets: hidePresets,
    presets: presets,
    hideEyeDrop: hideEyeDrop,
    hideAdvancedSliders: hideAdvancedSliders,
    hideColorGuide: hideColorGuide,
    hideInputType: hideInputType
  })));
}

var _default = ColorPicker;
exports["default"] = _default;