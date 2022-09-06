"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("./context");

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ComparibleColors = function ComparibleColors(_ref) {
  var openComparibles = _ref.openComparibles;

  var _usePicker = (0, _context.usePicker)(),
      tinyColor = _usePicker.tinyColor,
      handleChange = _usePicker.handleChange;

  var analogous = tinyColor.analogous();
  var monochromatic = tinyColor.monochromatic();
  var triad = tinyColor.triad();
  var tetrad = tinyColor.tetrad();

  var handleClick = function handleClick(tiny) {
    var _tiny$toRgb = tiny.toRgb(),
        r = _tiny$toRgb.r,
        g = _tiny$toRgb.g,
        b = _tiny$toRgb.b,
        a = _tiny$toRgb.a;

    handleChange("rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")"));
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: openComparibles ? 216 : 0,
      width: '100%',
      transition: 'all 120ms linear'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      paddingTop: 11,
      display: openComparibles ? '' : 'none'
    }, _style.psRl)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: 'center',
      color: '#323136',
      fontSize: 13,
      fontWeight: 600,
      position: 'absolute',
      top: 6.5,
      left: 2
    }
  }, "Color Guide"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: 'center',
      color: '#323136',
      fontSize: 12,
      fontWeight: 500,
      marginTop: 3
    }
  }, "Analogous"), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      borderRadius: 5,
      overflow: 'hidden'
    }, _style.df)
  }, analogous === null || analogous === void 0 ? void 0 : analogous.map(function (c, key) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: key,
      style: {
        width: '20%',
        height: 30,
        background: c.toHexString()
      },
      onClick: function onClick() {
        return handleClick(c);
      }
    });
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: 'center',
      color: '#323136',
      fontSize: 12,
      fontWeight: 500,
      marginTop: 3
    }
  }, "Monochromatic"), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({
      borderRadius: 5,
      overflow: 'hidden'
    }, _style.df), _style.jfe)
  }, monochromatic === null || monochromatic === void 0 ? void 0 : monochromatic.map(function (c, key) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: key,
      style: {
        width: '20%',
        height: 30,
        background: c.toHexString()
      },
      onClick: function onClick() {
        return handleClick(c);
      }
    });
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: 'center',
      color: '#323136',
      fontSize: 12,
      fontWeight: 500,
      marginTop: 3
    }
  }, "Triad"), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({
      borderRadius: 5,
      overflow: 'hidden'
    }, _style.df), _style.jfe)
  }, triad === null || triad === void 0 ? void 0 : triad.map(function (c, key) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: key,
      style: {
        width: 'calc(100% / 3)',
        height: 28,
        background: c.toHexString()
      },
      onClick: function onClick() {
        return handleClick(c);
      }
    });
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: 'center',
      color: '#323136',
      fontSize: 12,
      fontWeight: 500,
      marginTop: 3
    }
  }, "Tetrad"), /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({
      borderRadius: 5,
      overflow: 'hidden'
    }, _style.df), _style.jfe)
  }, tetrad === null || tetrad === void 0 ? void 0 : tetrad.map(function (c, key) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: key,
      style: {
        width: '25%',
        height: 28,
        background: c.toHexString()
      },
      onClick: function onClick() {
        return handleClick(c);
      }
    });
  }))));
};

var _default = ComparibleColors;
exports["default"] = _default;
ComparibleColors.propTypes = {
  openComparibles: _propTypes["default"].bool
};