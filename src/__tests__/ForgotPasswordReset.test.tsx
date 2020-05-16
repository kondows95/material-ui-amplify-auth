import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import TestLib from 'react-testing-library-wrapper';
import { IntlProvider } from 'react-intl';
import ForgotPasswordReset from '../lib/ForgotPasswordReset';

let tLib: TestLib;
let forgotPasswordSubmit: jest.Mock;

beforeEach(() => {
    forgotPasswordSubmit = jest.fn();
});

describe('Basic Usage', () => {
    const msgs = {
        'MUAA.ForgotPasswordReset.Title': '#MUAA.ForgotPasswordReset.Title',
        'MUAA.ForgotPasswordReset.Code': '#MUAA.ForgotPasswordReset.Code',
        'MUAA.ForgotPasswordReset.Password': '#MUAA.ForgotPasswordReset.Password',
        'MUAA.ForgotPasswordReset.Submit': '#MUAA.ForgotPasswordReset.Submit',
    };
    beforeEach(() => {
        tLib = new TestLib(
            (
                <IntlProvider locale="en" messages={msgs}>
                    <ForgotPasswordReset
                        authState={'forgotPasswordReset'}
                        forgotPasswordSubmit={forgotPasswordSubmit}
                        loading={false}
                        error={''}
                        email={'test@example.com'}
                    />
                </IntlProvider>
            )
        );
    });

    it('Click submit button', () => {
        tLib.changeValue('MUAA.ForgotPasswordReset.Code', '12345');
        tLib.changeValue('MUAA.ForgotPasswordReset.Password', 'myPassword');
        tLib.click('MUAA.ForgotPasswordReset.Submit');
        expect(forgotPasswordSubmit).toHaveBeenCalledWith('test@example.com', '12345', 'myPassword');
    });

    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});

it('Defalt Intl labels', () => {
    tLib = new TestLib(
        (
            <IntlProvider locale="en">
                <ForgotPasswordReset
                    authState={'forgotPasswordReset'}
                    forgotPasswordSubmit={forgotPasswordSubmit}
                    loading={false}
                    error={''}
                    email={'test@example.com'}
                />
            </IntlProvider>
        )
    );
    //For <TextField> default label.
    const html = tLib.render.container.innerHTML;
    expect(html).toContain('Confirmation Code');
    expect(html).toContain('New Password');
    //For textContent.
    expect(tLib.get('MUAA.ForgotPasswordReset.Title').textContent).toBe('Please confirm your email');
    expect(tLib.get('MUAA.ForgotPasswordReset.Submit').textContent).toBe('Submit');
});

it('If authState is not forgotPasswordReset, return empty.', () => {
    tLib = new TestLib(
        (
            <IntlProvider locale="en">
                <ForgotPasswordReset
                    authState={'forgotPassword'}
                    forgotPasswordSubmit={forgotPasswordSubmit}
                    loading={false}
                    error={''}
                    email={'test@example.com'}
                />
            </IntlProvider>
        )
    );
    expect(tLib.render.container.textContent).toBe('');
});
