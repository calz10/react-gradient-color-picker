"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _context = require("./context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Presets = function Presets(_ref) {
  var _ref$presets = _ref.presets,
      presets = _ref$presets === void 0 ? [] : _ref$presets;

  var _usePicker = (0, _context.usePicker)(),
      value = _usePicker.value,
      handleChange = _usePicker.handleChange,
      squareSize = _usePicker.squareSize;

  var getPresets = function getPresets() {
    if ((presets === null || presets === void 0 ? void 0 : presets.length) > 0) {
      return presets === null || presets === void 0 ? void 0 : presets.slice(0, 18);
    } else {
      return fakePresets;
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      marginTop: 14,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: 50,
      height: 50,
      background: value,
      borderRadius: 6,
      flexShrink: 0
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      width: squareSize - 66,
      justifyContent: 'space-between'
    }
  }, getPresets().map(function (p, key) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: key,
      style: {
        height: 23,
        width: '10.2%',
        borderRadius: 4,
        background: p,
        marginBottom: 2,
        border: p === 'rgba(255,255,255, 1)' ? '1px solid #96959c' : ''
      },
      onClick: function onClick() {
        return handleChange(p);
      }
    });
  })));
};

var _default = Presets;
exports["default"] = _default;
var fakePresets = ['rgba(0,0,0,1)', 'rgba(128,128,128, 1)', 'rgba(192,192,192, 1)', 'rgba(255,255,255, 1)', 'rgba(0,0,128,1)', 'rgba(0,0,255,1)', 'rgba(0,255,255, 1)', 'rgba(0,128,0,1)', 'rgba(128,128,0, 1)', 'rgba(0,128,128,1)', 'rgba(0,255,0, 1)', 'rgba(128,0,0, 1)', 'rgba(128,0,128, 1)', 'rgba(175, 51, 242, 1)', 'rgba(255,0,255, 1)', 'rgba(255,0,0, 1)', 'rgba(240, 103, 46, 1)', 'rgba(255,255,0, 1)'];