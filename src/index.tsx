import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { FormTitle, SignIn, ForgotPassword, ForgotPasswordReset } from './lib/index';

const msgs = {
    'MUAA.SignIn.Title': '#MUAA.SignIn.Title',
    'MUAA.SignIn.Email': '#MUAA.SignIn.Email',
    'MUAA.SignIn.Password': '#MUAA.SignIn.Password',
    'MUAA.SignIn.Submit': '#MUAA.SignIn.Submit',
    'MUAA.SignIn.ForgotPassword': '#MUAA.SignIn.ForgotPassword',

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
                    console.log('forgotPassword(' + email + ',' + password + ')');
                }}
                loading={false}
                error={'SignIn.MyError'}
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
