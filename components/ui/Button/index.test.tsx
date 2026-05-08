import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './index';

describe('Button', () => {
    it('renders label text', () => {
        render(<Button label="Click me" />);
        expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    });

    it('forwards onClick handler', () => {
        const handleClick = vi.fn();
        render(<Button label="Click" onClick={handleClick} />);
        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledOnce();
    });

    it('forwards disabled attribute', () => {
        render(<Button label="Click" disabled />);
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('forwards extra HTML attributes', () => {
        render(<Button label="Click" aria-label="Custom label" />);
        expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Custom label');
    });
});
