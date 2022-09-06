"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.psRl = exports.opacityOverlay = exports.opacityBg = exports.npe = exports.jsb = exports.jfe = exports.jc = exports.inputWrap = exports.inputLabel = exports.inputDropdown = exports.input = exports.handle = exports.gradientHandleWrap = exports.gradientHandle = exports.df = exports.degreeInput = exports.controlBtnsWrap = exports.controlBtn = exports.canvasWrapper = exports.cResize = exports.cCross = exports.barWrapInner = exports.barWrap = exports.ac = void 0;
var df = {
  display: 'flex'
};
exports.df = df;
var ac = {
  alignItems: 'center'
};
exports.ac = ac;
var jc = {
  justifyContent: 'center'
};
exports.jc = jc;
var jfe = {
  justifyContent: 'flex-end'
};
exports.jfe = jfe;
var jsb = {
  justifyContent: 'space-between'
};
exports.jsb = jsb;
var psRl = {
  position: 'relative'
};
exports.psRl = psRl;
var cCross = {
  cursor: 'crosshair'
};
exports.cCross = cCross;
var canvasWrapper = {
  borderRadius: 6,
  overflow: 'hidden',
  height: 294
};
exports.canvasWrapper = canvasWrapper;
var cResize = {
  cursor: 'ew-resize'
};
exports.cResize = cResize;
var opacityOverlay = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  borderRadius: 10
};
exports.opacityOverlay = opacityOverlay;
var opacityBg = {
  display: 'flex',
  flexWrap: 'wrap',
  borderRadius: 10,
  overflow: 'hidden'
};
exports.opacityBg = opacityBg;
var handle = {
  position: 'absolute',
  border: '2px solid white',
  borderRadius: '50%',
  boxShadow: '0px 0px 3px rgba(0,0,0,.5)',
  width: 18,
  height: 18,
  zIndex: 1000,
  transition: 'all 10ms linear'
};
exports.handle = handle;
var gradientHandleWrap = {
  position: 'absolute',
  zIndex: 10000,
  paddingLeft: 2,
  paddingRight: 2,
  top: 4
};
exports.gradientHandleWrap = gradientHandleWrap;
var gradientHandle = {
  border: '2px solid white',
  borderRadius: '50%',
  boxShadow: '0px 0px 3px rgba(0,0,0,.5)',
  width: 18,
  height: 18
};
exports.gradientHandle = gradientHandle;
var npe = {
  pointerEvents: 'none'
};
exports.npe = npe;
var degreeInput = {
  height: 24,
  borderRadius: 4,
  border: 'none',
  outline: 'none',
  textAlign: 'center',
  width: 34,
  fontWeight: 500,
  color: 'rgb(50, 49, 54)',
  fontSize: 13,
  background: 'transparent'
};
exports.degreeInput = degreeInput;
var inputWrap = {
  height: 32,
  borderRadius: 6,
  border: '1px solid #bebebe',
  width: '100%',
  padding: 2,
  outline: 'none',
  color: 'black',
  fontWeight: 400,
  textAlign: 'center'
};
exports.inputWrap = inputWrap;
var inputLabel = {
  textAlign: 'center',
  lineHeight: 1.2,
  fontWeight: 700,
  color: 'rgb(86,86,86)',
  fontSize: 11
};
exports.inputLabel = inputLabel;
var controlBtn = {
  paddingLeft: 8,
  paddingRight: 8,
  lineHeight: 1,
  borderRadius: 4,
  fontWeight: 700,
  color: 'rgb(86,86,86)',
  fontSize: 12,
  height: 24,
  transition: 'all 160ms ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
exports.controlBtn = controlBtn;
var barWrap = {
  width: 330,
  marginLeft: -18,
  padding: 3,
  marginTop: 2
};
exports.barWrap = barWrap;
var barWrapInner = {
  width: 324,
  paddingLeft: 15,
  paddingRight: 15
};
exports.barWrapInner = barWrapInner;
var controlBtnsWrap = {
  height: 28,
  background: '#e9e9f5',
  borderRadius: 6,
  padding: 2
};
exports.controlBtnsWrap = controlBtnsWrap;
var inputDropdown = {
  position: 'absolute',
  right: -2,
  top: 34,
  padding: 5,
  background: '#e9e9f5',
  zIndex: 100000000,
  borderRadius: 6,
  boxShadow: '1px 1px 14px 1px rgba(0,0,0,.25)'
}; // .input-dropdown::before {
//   position: absolute,
//   content: '',
//   right: 12.5px,
//   top: -3px,
//   width: 9px,
//   height: 9px,
//   background: #e9e9f5,
//   transform: rotate(45deg),
//   z-index: 0,
//   box-shadow: -1px -2px 8px rgba(0,0,0,.15),
// }

exports.inputDropdown = inputDropdown;
var input = {
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
};
exports.input = input;