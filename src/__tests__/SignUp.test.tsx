import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import TestLib from 'react-testing-library-wrapper';
import { IntlProvider } from 'react-intl';
import SignUp from '../lib/SignUp';

let tLib: TestLib;
let changeAuthState: jest.Mock;
let signUp: jest.Mock;

beforeEach(() => {
    changeAuthState = jest.fn();
    signUp = jest.fn();
});

describe('Basic Usage', () => {
    const msgs = {
        'MUAA.SignUp.Title': '#MUAA.SignUp.Title',
        'MUAA.SignUp.Email': '#MUAA.SignUp.Email',
        'MUAA.SignUp.Password': '#MUAA.SignUp.Password',
        'MUAA.SignUp.Submit': '#MUAA.SignUp.Submit',
        'MUAA.SignUp.SignIn': '#MUAA.SignUp.SignIn',
    };
    beforeEach(() => {
        tLib = new TestLib(
            (
                <IntlProvider locale="en" messages={msgs}>
                    <SignUp
                        authState={'signUp'}
                        changeAuthState={changeAuthState}
                        signUp={signUp}
                        loading={false}
                        error={'MyError'}
                    />
                </IntlProvider>
            )
        );
    });

    it('If SignUp clicked, authState will be change.', () => {
        tLib.click('MUAA.SignUp.SignIn');
        expect(changeAuthState).toHaveBeenCalledWith('signIn');
    });

    it('Click submit button', () => {
        tLib.changeValue('MUAA.SignUp.Email', 'test@example.com');
        tLib.changeValue('MUAA.SignUp.Password', 'abc123');
        tLib.click('MUAA.SignUp.Submit');
        expect(signUp).toHaveBeenCalledWith('test@example.com', 'abc123');
    });

    it('You can set label by Intl', () => {
        const html = tLib.render.container.innerHTML;
        expect(html).toContain('#MUAA.SignUp.Title');
        expect(html).toContain('#MUAA.SignUp.Email');
        expect(html).toContain('#MUAA.SignUp.Password');
        expect(html).toContain('#MUAA.SignUp.Submit');
        expect(html).toContain('#MUAA.SignUp.SignIn');
    });

    it('You can show password.', () => {
        expect(tLib.get('MUAA.SignUp.Password').getAttribute('type')).toBe('password');
        tLib.click('MUAA.SignUp.Password.Visible');
        expect(tLib.get('MUAA.SignUp.Password').getAttribute('type')).toBe('text');
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
                <SignUp
                    authState={'signUp'}
                    changeAuthState={changeAuthState}
                    signUp={signUp}
                    loading={true}
                    error={''}
                />
            </IntlProvider>
        )
    );
    const html = tLib.render.container.innerHTML;
    expect(html).toContain('Sign In');
    expect(html).toContain('Email Address');
    expect(html).toContain('Password');
    expect(html).toContain('Sign In');
    expect(html).toContain('Already have an account? Sign in');
});

it('If authState is not signUp, return empty.', () => {
    tLib = new TestLib(
        (
            <IntlProvider locale="en">
                <SignUp
                    authState={'forgotPassword'}
                    changeAuthState={changeAuthState}
                    signUp={signUp}
                    loading={true}
                    error={''}
                />
            </IntlProvider>
        )
    );
    expect(tLib.render.container.textContent).toBe('');
});
