import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { FormTitle } from './lib/index';

const msgs = {
    'MUIBP.ok': 'MyOK',
    'MUIBP.cancel': 'MyCancel',
    'MUIBP.confirmDialogMessage': 'You can set message!',
};

function App(): React.ReactElement {
    return (
        <IntlProvider locale="en" messages={msgs}>
            <BrowserRouter>
                <FormTitle />
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
