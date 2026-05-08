import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ColorSwatch } from './index';

describe('ColorSwatch', () => {
    it('renders as a button', () => {
        render(<ColorSwatch />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('applies color as backgroundColor style', () => {
        render(<ColorSwatch color="#ff0000" />);
        expect(screen.getByRole('button')).toHaveStyle({ backgroundColor: '#ff0000' });
    });

    it('forwards onClick handler', () => {
        const handleClick = vi.fn();
        render(<ColorSwatch onClick={handleClick} />);
        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledOnce();
    });

    it('forwards ref to the button element', () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(<ColorSwatch ref={ref} />);
        expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
});
