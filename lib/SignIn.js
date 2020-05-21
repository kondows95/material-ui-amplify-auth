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
var Password_1 = __importDefault(require("./Password"));
var SignIn = function (props) {
    var formatMessage = react_intl_1.useIntl().formatMessage;
    var _a = react_1.default.useState({ email: '', password: '' }), form = _a[0], setForm = _a[1];
    var handleChangeValue = function (fieldName) { return function (event) {
        var newForm = __assign({}, form);
        newForm[fieldName] = event.currentTarget.value;
        setForm(newForm);
    }; };
    var handleSubmit = function (event) {
        event.preventDefault();
        props.signIn(form['email'], form['password']);
    };
    var handleForgotPassword = function (event) {
        event.preventDefault();
        props.changeAuthState('forgotPassword');
    };
    var handleSignUp = function (event) {
        event.preventDefault();
        props.changeAuthState('signUp');
    };
    var msgId = 'MUAA.SignIn';
    var msgIdTitle = msgId + '.Title';
    var msgIdEmail = msgId + '.Email';
    var msgIdSubmit = msgId + '.Submit';
    var msgIdPassword = msgId + '.Password';
    var msgIdForgotPassword = msgId + '.ForgotPassword';
    var msgIdSignUp = msgId + '.SignUp';
    var link = (react_1.default.createElement(core_1.Box, { mb: 1, display: "flex", justifyContent: "center", alignItems: "center" },
        react_1.default.createElement(MyLink_1.default, { label: formatMessage({ id: msgIdForgotPassword, defaultMessage: 'Forgot password?' }), "data-testid": msgIdForgotPassword, onClick: handleForgotPassword })));
    if (props.enableSignUp) {
        link = (react_1.default.createElement(core_1.Grid, { container: true },
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12 }, link),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                react_1.default.createElement(core_1.Box, { mb: 1, display: "flex", justifyContent: "center", alignItems: "center" },
                    react_1.default.createElement(MyLink_1.default, { label: formatMessage({
                            id: msgIdSignUp,
                            defaultMessage: 'No account? Create account',
                        }), "data-testid": msgIdSignUp, onClick: handleSignUp })))));
    }
    var content = (react_1.default.createElement(core_1.Container, { component: "main", maxWidth: "xs" },
        react_1.default.createElement("form", { onSubmit: handleSubmit },
            react_1.default.createElement(core_1.Box, { display: "flex", flexDirection: "column", mt: 8 },
                react_1.default.createElement(FormTitle_1.default, { "data-testid": msgIdTitle, label: formatMessage({ id: msgIdTitle, defaultMessage: 'Sign In' }) }),
                react_1.default.createElement(core_1.Box, { display: "flex", justifyContent: "center", fontWeight: 600, color: "error.main" }, props.error),
                react_1.default.createElement(core_1.Box, { width: "100%", my: 2 },
                    react_1.default.createElement(core_1.TextField, { autoComplete: "email", type: "email", onChange: handleChangeValue('email'), value: form.email, label: formatMessage({ id: msgIdEmail, defaultMessage: 'Email Address' }), variant: "outlined", required: true, fullWidth: true, inputProps: { 'data-testid': msgIdEmail } })),
                react_1.default.createElement(core_1.Box, { width: "100%", my: 2 },
                    react_1.default.createElement(Password_1.default, { label: formatMessage({ id: msgIdPassword, defaultMessage: 'Password' }), testId: msgIdPassword, value: form.password, onChange: handleChangeValue('password') })),
                react_1.default.createElement(core_1.Box, { width: "100%", mt: 4, mb: 2, className: "relative" },
                    react_1.default.createElement(material_ui_basic_parts_1.MyButton, { type: "submit", label: formatMessage({ id: msgIdSubmit, defaultMessage: 'Sign In' }), color: "primary", loading: props.loading, "data-testid": msgIdSubmit })),
                react_1.default.createElement(core_1.Box, { width: "100%", my: 2 }, link)))));
    return props.authState === 'signIn' ? content : null;
};
exports.default = SignIn;
