import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { FormTitle, SignIn, SignUp, ConfirmSignUp, ForgotPassword, ForgotPasswordReset } from './lib/index';

const msgs = {
    'MUAA.SignIn.Title': '#MUAA.SignIn.Title',
    'MUAA.SignIn.Email': '#MUAA.SignIn.Email',
    'MUAA.SignIn.Password': '#MUAA.SignIn.Password',
    'MUAA.SignIn.Submit': '#MUAA.SignIn.Submit',
    'MUAA.SignIn.ForgotPassword': '#MUAA.SignIn.ForgotPassword',

    'MUAA.SignUp.Title': '#MUAA.SignUp.Title',
    'MUAA.SignUp.Email': '#MUAA.SignUp.Email',
    'MUAA.SignUp.Password': '#MUAA.SignUp.Password',
    'MUAA.SignUp.Submit': '#MUAA.SignUp.Submit',
    'MUAA.SignUp.SignIn': '#MUAA.SignUp.SignIn',

    'MUAA.ConfirmSignUp.Title': '#MUAA.ConfirmSignUp.Title',
    'MUAA.ConfirmSignUp.Code': '#MUAA.ConfirmSignUp.Code',
    'MUAA.ConfirmSignUp.Password': '#MUAA.ConfirmSignUp.Password',
    'MUAA.ConfirmSignUp.Submit': '#MUAA.ConfirmSignUp.Submit',
    'MUAA.ConfirmSignUp.SignIn': '#MUAA.ConfirmSignUp.SignIn',

    'MUAA.ForgotPassword.Title': '#MUAA.ForgotPassword.Title',
    'MUAA.ForgotPassword.Email': '#MUAA.ForgotPassword.Email',
    'MUAA.ForgotPassword.Submit': '#MUAA.ForgotPassword.Submit',
    'MUAA.ForgotPassword.SignIn': '#MUAA.ForgotPassword.SignIn',

    'MUAA.ForgotPasswordReset.Title': '#MUAA.ForgotPasswordReset.Title',
    'MUAA.ForgotPasswordReset.Code': '#MUAA.ForgotPasswordReset.Code',
    'MUAA.ForgotPasswordReset.Password': '#MUAA.ForgotPasswordReset.Password',
    'MUAA.ForgotPasswordReset.Submit': '#MUAA.ForgotPasswordReset.Submit',
};

function App(): React.ReactElement {
    return (
        <IntlProvider locale="en" messages={msgs}>
            <SignIn
                authState={'signIn'}
                changeAuthState={(state: string): void => {
                    console.log('SignIn.changeAuthState(' + state + ')');
                }}
                signIn={(email: string, password: string): void => {
                    console.log('signIn(' + email + ',' + password + ')');
                }}
                loading={false}
                error={'SignIn.MyError'}
            />
            <hr />
            <SignUp
                authState={'signUp'}
                changeAuthState={(state: string): void => {
                    console.log('SignUp.changeAuthState(' + state + ')');
                }}
                signUp={(email: string, password: string): void => {
                    console.log('signUp(' + email + ',' + password + ')');
                }}
                loading={false}
                error={'signUp.MyError'}
            />
            <hr />
            <ConfirmSignUp
                authState={'confirmSignUp'}
                changeAuthState={(state: string): void => {
                    console.log('SignUp.changeAuthState(' + state + ')');
                }}
                confirmSignUp={(email: string, code: string): void => {
                    console.log('signUp(' + email + ',' + code + ')');
                }}
                loading={false}
                error={'confirmSignUp.MyError'}
                email="test@example.com"
            />
            <hr />
            <ForgotPassword
                authState={'forgotPassword'}
                changeAuthState={(state: string): void => {
                    console.log('changeAuthState(' + state + ')');
                }}
                forgotPassword={(email: string): void => {
                    console.log('forgotPassword(' + email + ')');
                }}
                loading={false}
                error={'ForgotPassword.MyError'}
            />
            <hr />
            <ForgotPasswordReset
                authState={'forgotPasswordReset'}
                forgotPasswordSubmit={(email: string, code: string, password: string): void => {
                    console.log('forgotPasswordReset(' + email + ',' + code + ',' + password + ')');
                }}
                loading={false}
                error={'ForgotPasswordReset.MyError'}
                email={'test@example.com'}
            />
            <hr />

            <BrowserRouter>
                <FormTitle label="MyFormTitle" />
            </BrowserRouter>
        </IntlProvider>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
