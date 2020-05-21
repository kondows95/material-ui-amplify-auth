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
var icons_1 = require("@material-ui/icons");
var SignIn = function (props) {
    var _a = react_1.default.useState(false), showPassword = _a[0], setShowPassword = _a[1];
    var copyProps = {};
    for (var _i = 0, _b = Object.keys(props); _i < _b.length; _i++) {
        var key = _b[_i];
        if (key !== 'label' && key !== 'testId') {
            copyProps[key] = props[key];
        }
    }
    var handleChangeVisible = function () {
        setShowPassword(!showPassword);
    };
    return (react_1.default.createElement(core_1.FormControl, { fullWidth: true, variant: "outlined" },
        react_1.default.createElement(core_1.InputLabel, { htmlFor: "standard-adornment-password", required: true }, props.label),
        react_1.default.createElement(core_1.OutlinedInput, __assign({}, copyProps, { id: "standard-adornment-password", type: showPassword ? 'text' : 'password', autoComplete: "current-password", required: true, fullWidth: true, inputProps: { 'data-testid': props.testId }, endAdornment: react_1.default.createElement(core_1.InputAdornment, { position: "end" },
                react_1.default.createElement(core_1.IconButton, { "aria-label": "toggle password visibility", onClick: handleChangeVisible, edge: "end", "data-testid": props.testId + '.Visible' }, showPassword ? react_1.default.createElement(icons_1.Visibility, null) : react_1.default.createElement(icons_1.VisibilityOff, null))), label: props.label }))));
};
exports.default = SignIn;
