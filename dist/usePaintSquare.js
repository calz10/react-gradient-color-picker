"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var usePaintSquare = function usePaintSquare(canvas, hue, squareSize, squareHeight) {
  (0, _react.useEffect)(function () {
    var ctx = canvas.current.getContext("2d");
    ctx.fillStyle = "hsl(".concat(hue, ", 100%, 50%)");
    ctx.fillRect(0, 0, squareSize, squareHeight);
    var gradientWhite = ctx.createLinearGradient(0, 0, squareSize, 0);
    gradientWhite.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradientWhite.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = gradientWhite;
    ctx.fillRect(0, 0, squareSize, squareHeight);
    var gradientBlack = ctx.createLinearGradient(0, 0, 0, squareHeight);
    gradientBlack.addColorStop(0, "rgba(0, 0, 0, 0)");
    gradientBlack.addColorStop(1, "rgba(0, 0, 0, 1)");
    ctx.fillStyle = gradientBlack;
    ctx.fillRect(0, 0, squareSize, squareHeight);
  }, [canvas, hue, squareSize, squareHeight]);
};

var _default = usePaintSquare;
exports["default"] = _default;