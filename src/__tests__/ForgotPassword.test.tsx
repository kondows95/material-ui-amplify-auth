import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import TestLib from 'react-testing-library-wrapper';
import { IntlProvider } from 'react-intl';
import ForgotPassword from '../lib/ForgotPassword';

let tLib: TestLib;
let changeAuthState: jest.Mock;
let forgotPassword: jest.Mock;

beforeEach(() => {
    changeAuthState = jest.fn();
    forgotPassword = jest.fn();
});

describe('Basic Usage', () => {
    const msgs = {
        'MUAA.ForgotPassword.Title': '#MUAA.ForgotPassword.Title',
        'MUAA.ForgotPassword.Email': '#MUAA.ForgotPassword.Email',
        'MUAA.ForgotPassword.SignIn': '#MUAA.ForgotPassword.SignIn',
        'MUAA.ForgotPassword.Submit': '#MUAA.ForgotPassword.Submit',
    };
    beforeEach(() => {
        tLib = new TestLib(
            (
                <IntlProvider locale="en" messages={msgs}>
                    <ForgotPassword
                        authState={'forgotPassword'}
                        changeAuthState={changeAuthState}
                        forgotPassword={forgotPassword}
                        loading={false}
                        error={'MyError'}
                    />
                </IntlProvider>
            )
        );
    });

    it('If SignIn clicked, authState will be change.', () => {
        tLib.click('MUAA.ForgotPassword.SignIn');
        expect(changeAuthState).toHaveBeenCalledWith('signIn');
    });

    it('Click submit button', () => {
        tLib.changeValue('MUAA.ForgotPassword.Email', 'test@example.com');
        tLib.click('MUAA.ForgotPassword.Submit');
        expect(forgotPassword).toHaveBeenCalledWith('test@example.com');
    });

    it('You can set label by Intl', () => {
        const html = tLib.render.container.innerHTML;
        expect(html).toContain('#MUAA.ForgotPassword.Title');
        expect(html).toContain('#MUAA.ForgotPassword.Email');
        expect(html).toContain('#MUAA.ForgotPassword.SignIn');
        expect(html).toContain('#MUAA.ForgotPassword.Submit');
    });

    it('You can set error message', () => {
        expect(tLib.render.container.innerHTML).toContain('MyError');
    });

    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});

it('Default Intl labels', () => {
    tLib = new TestLib(
        (
            <IntlProvider locale="en">
                <ForgotPassword
                    authState={'forgotPassword'}
                    changeAuthState={changeAuthState}
                    forgotPassword={forgotPassword}
                    loading={true}
                    error={''}
                />
            </IntlProvider>
        )
    );
    expect(tLib.get('MUAA.ForgotPassword.Title').textContent).toBe('Reset Your Password');
    expect(tLib.get('MUAA.ForgotPassword').innerHTML).toContain('Email Address');
    expect(tLib.get('MUAA.ForgotPassword.Submit').textContent).toBe('Submit');
    expect(tLib.get('MUAA.ForgotPassword.SignIn').textContent).toBe('Back to Sign in');
});

it('If authState is not forgotPassword, return empty.', () => {
    tLib = new TestLib(
        (
            <IntlProvider locale="en">
                <ForgotPassword
                    authState={'signIn'}
                    changeAuthState={changeAuthState}
                    forgotPassword={forgotPassword}
                    loading={true}
                    error={''}
                />
            </IntlProvider>
        )
    );
    expect(tLib.render.container.textContent).toBe('');
});
