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
var Box_1 = __importDefault(require("@material-ui/core/Box"));
var LockOutlined_1 = __importDefault(require("@material-ui/icons/LockOutlined"));
var FormTitle = function (props) {
    var copyProps = {};
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        if (key !== 'label') {
            copyProps[key] = props[key];
        }
    }
    return (react_1.default.createElement(Box_1.default, __assign({}, copyProps, { display: "flex", flexDirection: "column", alignItems: "center" }),
        react_1.default.createElement(Box_1.default, { width: 40, height: 40, borderRadius: "50%", bgcolor: "secondary.main" },
            react_1.default.createElement(Box_1.default, { m: 1, color: "secondary.contrastText" },
                react_1.default.createElement(LockOutlined_1.default, null))),
        react_1.default.createElement(Box_1.default, { fontSize: "h5.fontSize", mt: 1, mb: 2 }, props.label)));
};
exports.default = FormTitle;
