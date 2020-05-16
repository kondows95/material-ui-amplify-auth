import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { FormTitle, ForgotPassword, ForgotPasswordReset } from './lib/index';

const msgs = {
    'MUAA.ForgotPassword.Title': '#MUAA.ForgotPassword.Title',
    'MUAA.ForgotPassword.Email': '#MUAA.ForgotPassword.Email',
    'MUAA.ForgotPassword.SignIn': '#MUAA.ForgotPassword.SignIn',
    'MUAA.ForgotPassword.Submit': '#MUAA.ForgotPassword.Submit',
    'MUAA.ForgotPasswordReset.Title': '#MUAA.ForgotPasswordReset.Title',
    'MUAA.ForgotPasswordReset.Code': '#MUAA.ForgotPasswordReset.Code',
    'MUAA.ForgotPasswordReset.Password': '#MUAA.ForgotPasswordReset.Password',
    'MUAA.ForgotPasswordReset.Submit': '#MUAA.ForgotPasswordReset.Submit',
};

function App(): React.ReactElement {
    return (
        <IntlProvider locale="en" messages={msgs}>
            <ForgotPassword
                authState={'forgotPassword'}
                changeAuthState={(state: string): void => {
                    console.log('changeAuthState(' + state + ')');
                }}
                forgotPassword={(email: string): void => {
                    console.log('forgotPassword(' + email + ')');
                }}
                loading={false}
                error={''}
            />
            <hr />
            <ForgotPasswordReset
                authState={'forgotPasswordReset'}
                forgotPasswordSubmit={(email: string, code: string, password: string): void => {
                    console.log('forgotPasswordReset(' + email + ',' + code + ',' + password + ')');
                }}
                loading={false}
                error={''}
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
