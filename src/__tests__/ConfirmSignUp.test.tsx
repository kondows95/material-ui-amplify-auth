import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import TestLib from 'react-testing-library-wrapper';
import { IntlProvider } from 'react-intl';
import ConfirmSignUp from '../lib/ConfirmSignUp';

let tLib: TestLib;
let changeAuthState: jest.Mock;
let confirmSignUp: jest.Mock;
let resendSignUp: jest.Mock;

beforeEach(() => {
    changeAuthState = jest.fn();
    confirmSignUp = jest.fn();
    resendSignUp = jest.fn();
});

describe('Basic Usage', () => {
    const msgs = {
        'MUAA.ConfirmSignUp.Title': '#MUAA.ConfirmSignUp.Title',
        'MUAA.ConfirmSignUp.Code': '#MUAA.ConfirmSignUp.Code',
        'MUAA.ConfirmSignUp.Password': '#MUAA.ConfirmSignUp.Password',
        'MUAA.ConfirmSignUp.Submit': '#MUAA.ConfirmSignUp.Submit',
        'MUAA.ConfirmSignUp.ResendCode': '#MUAA.ConfirmSignUp.ResendCode',
    };
    beforeEach(() => {
        tLib = new TestLib(
            (
                <IntlProvider locale="en" messages={msgs}>
                    <ConfirmSignUp
                        authState={'confirmSignUp'}
                        changeAuthState={changeAuthState}
                        confirmSignUp={confirmSignUp}
                        resendSignUp={resendSignUp}
                        loading={false}
                        error={'MyError'}
                        email={'test@example.com'}
                    />
                </IntlProvider>
            )
        );
    });

    it('Click submit button', () => {
        tLib.changeValue('MUAA.ConfirmSignUp.Code', '12345');
        tLib.changeValue('MUAA.ConfirmSignUp.Password', 'myPassword');
        tLib.click('MUAA.ConfirmSignUp.Submit');
        expect(confirmSignUp).toHaveBeenCalledWith('test@example.com', '12345');
    });

    it('You can resend code', () => {
        tLib.click('MUAA.ConfirmSignUp.ResendCode');
        expect(resendSignUp).toHaveBeenCalledWith('test@example.com');
    });

    it('You can set label by Intl', () => {
        const html = tLib.render.container.innerHTML;
        expect(html).toContain('#MUAA.ConfirmSignUp.Title');
        expect(html).toContain('#MUAA.ConfirmSignUp.Code');
        expect(html).toContain('#MUAA.ConfirmSignUp.Password');
        expect(html).toContain('#MUAA.ConfirmSignUp.Submit');
        expect(html).toContain('#MUAA.ConfirmSignUp.ResendCode');
    });

    it('You can set error message', () => {
        expect(tLib.render.container.innerHTML).toContain('MyError');
    });

    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});

it('Defalt Intl labels', () => {
    tLib = new TestLib(
        (
            <IntlProvider locale="en">
                <ConfirmSignUp
                    authState={'confirmSignUp'}
                    changeAuthState={changeAuthState}
                    confirmSignUp={confirmSignUp}
                    resendSignUp={resendSignUp}
                    loading={false}
                    error={''}
                    email={'test@example.com'}
                />
            </IntlProvider>
        )
    );
    const html = tLib.render.container.innerHTML;
    expect(html).toContain('Please confirm your email');
    expect(html).toContain('Confirmation Code');
    expect(html).toContain('New Password');
    expect(html).toContain('Submit');
    expect(html).toContain('Resend code to test@example.com');
});

it('If authState is not forgotPasswordReset, return empty.', () => {
    tLib = new TestLib(
        (
            <IntlProvider locale="en">
                <ConfirmSignUp
                    authState={'forgotPassword'}
                    changeAuthState={changeAuthState}
                    confirmSignUp={confirmSignUp}
                    resendSignUp={resendSignUp}
                    loading={false}
                    error={''}
                    email={'test@example.com'}
                />
            </IntlProvider>
        )
    );
    expect(tLib.render.container.textContent).toBe('');
});
