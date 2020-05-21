"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var MyLink = function (props) {
    var copyProps = {};
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        if (key !== 'label') {
            copyProps[key] = props[key];
        }
    }
    return (react_1.default.createElement(core_1.Box, { mb: 1, display: "flex", justifyContent: "center", alignItems: "center" },
        react_1.default.createElement(core_1.Link, __assign({}, copyProps, { href: "#", variant: "body2" }), props.label)));
};
exports.default = MyLink;
