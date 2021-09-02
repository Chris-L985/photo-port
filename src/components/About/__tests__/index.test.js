import React from 'react';
import { render, cleanup  } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../../About';

const { asFragment } = render(<About />);

afterEach(cleanup);

describe('About component', () => {
    // First Test
    it('render', () => {
        render(<About />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
        expect(asFragment()).toMatchSnapshot();
    })
})