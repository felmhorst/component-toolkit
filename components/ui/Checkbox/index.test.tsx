import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from './index';

describe('Checkbox', () => {
    it('renders as a checkbox input', () => {
        render(<Checkbox />);
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('reflects checked state', () => {
        render(<Checkbox checked={true} onChange={() => {}} />);
        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('reflects unchecked state', () => {
        render(<Checkbox checked={false} onChange={() => {}} />);
        expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    it('calls onChange when clicked', () => {
        const handleChange = vi.fn();
        render(<Checkbox onChange={handleChange} />);
        fireEvent.click(screen.getByRole('checkbox'));
        expect(handleChange).toHaveBeenCalledOnce();
    });

    it('forwards disabled attribute', () => {
        render(<Checkbox disabled />);
        expect(screen.getByRole('checkbox')).toBeDisabled();
    });
});
