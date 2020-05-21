import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import TestLib from 'react-testing-library-wrapper';
import { IntlProvider } from 'react-intl';
import SignIn from '../lib/SignIn';

let tLib: TestLib;
let changeAuthState: jest.Mock;
let signIn: jest.Mock;

beforeEach(() => {
    changeAuthState = jest.fn();
    signIn = jest.fn();
});

describe('Basic Usage', () => {
    const msgs = {
        'MUAA.SignIn.Title': '#MUAA.SignIn.Title',
        'MUAA.SignIn.Email': '#MUAA.SignIn.Email',
        'MUAA.SignIn.Password': '#MUAA.SignIn.Password',
        'MUAA.SignIn.Submit': '#MUAA.SignIn.Submit',
        'MUAA.SignIn.ForgotPassword': '#MUAA.SignIn.ForgotPassword',
        'MUAA.SignIn.SignUp': '#MUAA.SignIn.SignUp',
    };
    beforeEach(() => {
        tLib = new TestLib(
            (
                <IntlProvider locale="en" messages={msgs}>
                    <SignIn
                        authState={'signIn'}
                        changeAuthState={changeAuthState}
                        signIn={signIn}
                        loading={false}
                        enableSignUp={true}
                        error={'MyError'}
                    />
                </IntlProvider>
            )
        );
    });

    it('If ForgotPassword clicked, authState will be change.', () => {
        tLib.click('MUAA.SignIn.ForgotPassword');
        expect(changeAuthState).toHaveBeenCalledWith('forgotPassword');
    });

    it('If SignUp clicked, authState will be change.', () => {
        tLib.click('MUAA.SignIn.SignUp');
        expect(changeAuthState).toHaveBeenCalledWith('signUp');
    });

    it('Click submit button', () => {
        tLib.changeValue('MUAA.SignIn.Email', 'test@example.com');
        tLib.changeValue('MUAA.SignIn.Password', 'abc123');
        tLib.click('MUAA.SignIn.Submit');
        expect(signIn).toHaveBeenCalledWith('test@example.com', 'abc123');
    });

    it('You can set label by Intl', () => {
        const html = tLib.render.container.innerHTML;
        expect(html).toContain('#MUAA.SignIn.Title');
        expect(html).toContain('#MUAA.SignIn.Email');
        expect(html).toContain('#MUAA.SignIn.Password');
        expect(html).toContain('#MUAA.SignIn.Submit');
        expect(html).toContain('#MUAA.SignIn.ForgotPassword');
    });

    it('You can show password.', () => {
        expect(tLib.get('MUAA.SignIn.Password').getAttribute('type')).toBe('password');
        tLib.click('MUAA.SignIn.Password.Visible');
        expect(tLib.get('MUAA.SignIn.Password').getAttribute('type')).toBe('text');
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
                <SignIn
                    authState={'signIn'}
                    changeAuthState={changeAuthState}
                    signIn={signIn}
                    loading={true}
                    enableSignUp={true}
                    error={''}
                />
            </IntlProvider>
        )
    );
    const html = tLib.render.container.innerHTML;
    expect(html).toContain('Sign In');
    expect(html).toContain('Email Address');
    expect(html).toContain('Password');
    expect(html).toContain('No account? Create account');
    expect(html).toContain('Forgot password?');
});

it('You can hide SignUp.', () => {
    tLib = new TestLib(
        (
            <IntlProvider locale="en">
                <SignIn
                    authState={'signIn'}
                    changeAuthState={changeAuthState}
                    signIn={signIn}
                    loading={true}
                    error={''}
                />
            </IntlProvider>
        )
    );
    expect(tLib.render.container.innerHTML).not.toContain('No account? Create account');
});

it('If authState is not signIn, return empty.', () => {
    tLib = new TestLib(
        (
            <IntlProvider locale="en">
                <SignIn
                    authState={'forgotPassword'}
                    changeAuthState={changeAuthState}
                    signIn={signIn}
                    loading={true}
                    enableSignUp={true}
                    error={''}
                />
            </IntlProvider>
        )
    );
    expect(tLib.render.container.textContent).toBe('');
});
