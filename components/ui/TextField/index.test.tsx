import { render, screen, fireEvent } from '@testing-library/react';
import { TextField } from './index';

describe('TextField', () => {
    it('renders as a text input', () => {
        render(<TextField />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('forwards placeholder prop', () => {
        render(<TextField placeholder="Enter text" />);
        expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Enter text');
    });

    it('forwards value in controlled mode', () => {
        render(<TextField value="hello" onChange={() => {}} />);
        expect(screen.getByRole('textbox')).toHaveValue('hello');
    });

    it('calls onChange when value changes', () => {
        const handleChange = vi.fn();
        render(<TextField onChange={handleChange} />);
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'abc' } });
        expect(handleChange).toHaveBeenCalledOnce();
    });

    it('forwards disabled attribute', () => {
        render(<TextField disabled />);
        expect(screen.getByRole('textbox')).toBeDisabled();
    });
});
