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
var MyLink_1 = __importDefault(require("./MyLink"));
var material_ui_basic_parts_1 = require("material-ui-basic-parts");
var ForgotPassword = function (props) {
    var formatMessage = react_intl_1.useIntl().formatMessage;
    var _a = react_1.default.useState({ email: '', password: '' }), form = _a[0], setForm = _a[1];
    var handleChangeValue = function (fieldName) { return function (event) {
        var newForm = __assign({}, form);
        newForm[fieldName] = event.currentTarget.value;
        setForm(newForm);
    }; };
    var handleSubmit = function (event) {
        event.preventDefault();
        props.forgotPassword(form['email']);
    };
    var handleSignIn = function (event) {
        event.preventDefault();
        props.changeAuthState('signIn');
    };
    var msgId = 'MUAA.ForgotPassword';
    var msgIdTitle = msgId + '.Title';
    var msgIdSignIn = msgId + '.SignIn';
    var msgIdEmail = msgId + '.Email';
    var msgIdSubmit = msgId + '.Submit';
    var content = (react_1.default.createElement(core_1.Container, { "data-testid": msgId, component: "main", maxWidth: "xs" },
        react_1.default.createElement("form", { onSubmit: handleSubmit },
            react_1.default.createElement(core_1.Box, { display: "flex", flexDirection: "column", mt: 8 },
                react_1.default.createElement(FormTitle_1.default, { "data-testid": msgIdTitle, label: formatMessage({ id: msgIdTitle, defaultMessage: 'Reset Your Password' }) }),
                react_1.default.createElement(core_1.Box, { display: "flex", justifyContent: "center", fontWeight: 600, color: "error.main" }, props.error),
                react_1.default.createElement(core_1.Box, { width: "100%", my: 2 },
                    react_1.default.createElement(core_1.TextField, { autoComplete: "email", type: "email", onChange: handleChangeValue('email'), value: form.email, label: formatMessage({ id: msgIdEmail, defaultMessage: 'Email Address' }), variant: "outlined", required: true, fullWidth: true, inputProps: { 'data-testid': msgIdEmail } })),
                react_1.default.createElement(core_1.Box, { width: "100%", mt: 4, mb: 2 },
                    react_1.default.createElement(material_ui_basic_parts_1.MyButton, { type: "submit", label: formatMessage({ id: msgIdSubmit, defaultMessage: 'Submit' }), color: "primary", loading: props.loading, "data-testid": msgIdSubmit })),
                react_1.default.createElement(core_1.Box, { width: "100%", my: 2 },
                    react_1.default.createElement(MyLink_1.default, { label: formatMessage({ id: msgIdSignIn, defaultMessage: 'Back to Sign in' }), "data-testid": msgIdSignIn, onClick: handleSignIn }))))));
    return props.authState === 'forgotPassword' ? content : null;
};
exports.default = ForgotPassword;
