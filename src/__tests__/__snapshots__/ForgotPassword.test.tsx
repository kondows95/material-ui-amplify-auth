import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import TestLib from 'react-testing-library-wrapper';
import { IntlProvider } from 'react-intl';
import ForgotPassword from '../ForgotPassword';

let tLib: TestLib;
let changeAuthState: jest.Mock;
let forgotPassword: jest.Mock;

beforeEach(() => {
    changeAuthState = jest.fn();
    forgotPassword = jest.fn();
});

describe('Basic Usage', () => {
    const msgs = { 'MUIBP.submit': 'MySubmit', 'MUIBP.goToSignIn': 'MySignIn' };
    beforeEach(() => {
        tLib = new TestLib(
            (
                <IntlProvider locale="en" messages={msgs}>
                    <ForgotPassword
                        authState={'forgotPassword'}
                        changeAuthState={changeAuthState}
                        forgotPassword={forgotPassword}
                        loading={false}
                        error={''}
                    />
                </IntlProvider>
            )
        );
    });

    it('If sign-in-link clicked, authState will be change.', () => {
        tLib.click('sign-in-link');
        expect(changeAuthState).toHaveBeenCalledWith('signIn');
    });

    it('Click submit button', () => {
        tLib.changeValue('email', 'test@example.com');
        tLib.click('submit-button');
        expect(forgotPassword).toHaveBeenCalledWith('test@example.com');
    });

    it('You can set label by Intl', () => {
        expect(tLib.get('sign-in-link').textContent).toBe('MySignIn');
        expect(tLib.get('submit-button').textContent).toBe('MySubmit');
        expect(tLib.get('submit-button').textContent).toBe('MySubmit');
    });

    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});

/*
describe('Case: authState is not forgotPassword', () => {
    beforeEach(() => {
        tLib = new TestLib(
            (
                <IntlProvider locale="en" messages={langMessages}>
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
    });

    it('Display nothing', () => {
        expect(tLib.render.container.innerHTML).toBe('');
    });

    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});
*/
