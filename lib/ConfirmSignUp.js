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
var react_intl_1 = require("react-intl");
var FormTitle_1 = __importDefault(require("./FormTitle"));
var material_ui_basic_parts_1 = require("material-ui-basic-parts");
var Password_1 = __importDefault(require("./Password"));
var ConfirmSignUp = function (props) {
    var formatMessage = react_intl_1.useIntl().formatMessage;
    var _a = react_1.default.useState({ email: '', password: '', confirmationCode: '' }), form = _a[0], setForm = _a[1];
    var handleChangeValue = function (fieldName) { return function (event) {
        var newForm = __assign({}, form);
        newForm[fieldName] = event.target.value;
        setForm(newForm);
    }; };
    var handleSubmit = function (event) {
        event.preventDefault();
        props.confirmSignUp(props.email, form['confirmationCode']);
    };
    var msgId = 'MUAA.ConfirmSignUp';
    var msgIdTitle = msgId + '.Title';
    var msgIdCode = msgId + '.Code';
    var msgIdPassword = msgId + '.Password';
    var msgIdSubmit = msgId + '.Submit';
    var content = (react_1.default.createElement(core_1.Container, { "data-testid": msgId, component: "main", maxWidth: "xs" },
        react_1.default.createElement("form", { onSubmit: handleSubmit },
            react_1.default.createElement(core_1.Box, { display: "flex", flexDirection: "column", mt: 8 },
                react_1.default.createElement(FormTitle_1.default, { "data-testid": msgIdTitle, label: formatMessage({ id: msgIdTitle, defaultMessage: 'Please confirm your email' }) }),
                react_1.default.createElement(core_1.Box, { display: "flex", justifyContent: "center", fontWeight: 600, color: "error.main" }, props.error),
                react_1.default.createElement(core_1.Box, { width: "100%", my: 2 },
                    react_1.default.createElement(core_1.TextField, { label: formatMessage({ id: msgIdCode, defaultMessage: 'Confirmation Code' }), onChange: handleChangeValue('confirmationCode'), value: form.confirmationCode, variant: "outlined", required: true, fullWidth: true, inputProps: { 'data-testid': msgIdCode } })),
                react_1.default.createElement(core_1.Box, { width: "100%", my: 2 },
                    react_1.default.createElement(Password_1.default, { label: formatMessage({ id: msgIdPassword, defaultMessage: 'New Password' }), testId: msgIdPassword, value: form.password, onChange: handleChangeValue('password') })),
                react_1.default.createElement(core_1.Box, { width: "100%", mt: 4, mb: 2, className: "relative" },
                    react_1.default.createElement(material_ui_basic_parts_1.MyButton, { type: "submit", label: formatMessage({ id: msgIdSubmit, defaultMessage: 'Submit' }), color: "primary", loading: props.loading, "data-testid": msgIdSubmit })),
                react_1.default.createElement(core_1.Box, { width: "100%", my: 2 },
                    react_1.default.createElement(core_1.Link, { href: "#", variant: "body2", onClick: handleSubmit },
                        "Resend code to ",
                        props.email))))));
    return props.authState === 'confirmSignUp' ? content : null;
};
exports.default = ConfirmSignUp;
