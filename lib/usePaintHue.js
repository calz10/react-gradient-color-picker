"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePaintSat = exports.usePaintLight = exports.usePaintBright = exports["default"] = void 0;

var _react = require("react");

var tinycolor = require("tinycolor2");

var usePaintHue = function usePaintHue(canvas, squareSize) {
  (0, _react.useEffect)(function () {
    var _canvas$current;

    var ctx = canvas === null || canvas === void 0 ? void 0 : (_canvas$current = canvas.current) === null || _canvas$current === void 0 ? void 0 : _canvas$current.getContext("2d");
    ctx.rect(0, 0, squareSize, 14);
    var gradient = ctx.createLinearGradient(0, 0, squareSize, 0);

    for (var i = 0; i <= 360; i += 30) {
      gradient.addColorStop(i / 360, "hsl(".concat(i, ", 100%, 50%)"));
    }

    ctx.fillStyle = gradient;
    ctx.fill();
  }, [canvas, squareSize]);
};

var _default = usePaintHue;
exports["default"] = _default;

var usePaintSat = function usePaintSat(canvas, h, l, squareSize) {
  (0, _react.useEffect)(function () {
    var _canvas$current2;

    var ctx = canvas === null || canvas === void 0 ? void 0 : (_canvas$current2 = canvas.current) === null || _canvas$current2 === void 0 ? void 0 : _canvas$current2.getContext("2d");

    if (ctx) {
      ctx.rect(0, 0, squareSize, 14);
      var gradient = ctx.createLinearGradient(0, 0, squareSize, 0);

      for (var i = 0; i <= 100; i += 10) {
        gradient.addColorStop(i / 100, "hsl(".concat(h, ", ").concat(i, "%, ").concat(l, "%)"));
      }

      ctx.fillStyle = gradient;
      ctx.fill();
    }
  }, [canvas, h, l, squareSize]);
};

exports.usePaintSat = usePaintSat;

var usePaintLight = function usePaintLight(canvas, h, s, squareSize) {
  (0, _react.useEffect)(function () {
    var _canvas$current3;

    var ctx = canvas === null || canvas === void 0 ? void 0 : (_canvas$current3 = canvas.current) === null || _canvas$current3 === void 0 ? void 0 : _canvas$current3.getContext("2d");

    if (ctx) {
      ctx.rect(0, 0, squareSize, 14);
      var gradient = ctx.createLinearGradient(0, 0, squareSize, 0);

      for (var i = 0; i <= 100; i += 10) {
        gradient.addColorStop(i / 100, "hsl(".concat(h, ", ").concat(s, "%, ").concat(i, "%)"));
      }

      ctx.fillStyle = gradient;
      ctx.fill();
    }
  }, [canvas, h, s, squareSize]);
};

exports.usePaintLight = usePaintLight;

var usePaintBright = function usePaintBright(canvas, h, s, squareSize) {
  (0, _react.useEffect)(function () {
    var _canvas$current4;

    var ctx = canvas === null || canvas === void 0 ? void 0 : (_canvas$current4 = canvas.current) === null || _canvas$current4 === void 0 ? void 0 : _canvas$current4.getContext("2d");

    if (ctx) {
      ctx.rect(0, 0, squareSize, 14);
      var gradient = ctx.createLinearGradient(0, 0, squareSize, 0);

      for (var i = 0; i <= 100; i += 10) {
        var hsl = tinycolor({
          h: h,
          s: s,
          v: i
        });
        gradient.addColorStop(i / 100, hsl.toHslString());
      }

      ctx.fillStyle = gradient;
      ctx.fill();
    }
  }, [canvas, h, s, squareSize]);
};

exports.usePaintBright = usePaintBright;