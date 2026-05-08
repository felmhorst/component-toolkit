import { render, screen, fireEvent } from '@testing-library/react';
import { Switch } from './index';

describe('Switch', () => {
    it('renders with role="switch"', () => {
        render(<Switch />);
        expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('reflects checked state', () => {
        render(<Switch checked={true} onChange={() => {}} />);
        expect(screen.getByRole('switch')).toBeChecked();
    });

    it('reflects unchecked state', () => {
        render(<Switch checked={false} onChange={() => {}} />);
        expect(screen.getByRole('switch')).not.toBeChecked();
    });

    it('calls onChange when clicked', () => {
        const handleChange = vi.fn();
        render(<Switch onChange={handleChange} />);
        fireEvent.click(screen.getByRole('switch'));
        expect(handleChange).toHaveBeenCalledOnce();
    });

    it('forwards disabled attribute', () => {
        render(<Switch disabled />);
        expect(screen.getByRole('switch')).toBeDisabled();
    });
});
