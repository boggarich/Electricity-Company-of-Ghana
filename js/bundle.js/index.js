"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRedux = require("react-redux");

var _app = _interopRequireDefault(require("./app/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, null, /*#__PURE__*/_react.default.createElement(_app.default, null)), document.getElementById('root'));