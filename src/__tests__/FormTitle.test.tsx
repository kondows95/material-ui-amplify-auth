import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import TestLib from 'react-testing-library-wrapper';
import FormTitle from '../lib/FormTitle';

describe('Basic Usage', () => {
    let tLib: TestLib;
    beforeEach(() => {
        tLib = new TestLib(<FormTitle label="MyTitle" className="MyClass" data-testid="myId" />);
    });

    it('You can add data-testid', () => {
        tLib.get('myId');
    });

    it('You can add className', () => {
        expect(tLib.get('myId').getAttribute('class')).toContain('MyClass');
    });

    it('You can set label', () => {
        expect(tLib.render.container).toHaveTextContent('MyTitle');
    });

    it('Snapshot', () => {
        expect(tLib.render.asFragment()).toMatchSnapshot();
    });
});
