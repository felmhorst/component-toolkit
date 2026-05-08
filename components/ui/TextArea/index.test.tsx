import { render, screen, fireEvent } from '@testing-library/react';
import { TextArea } from './index';

describe('TextArea', () => {
    it('renders as a textarea element', () => {
        render(<TextArea />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('sets height on mount when autoresize is enabled', () => {
        const { container } = render(<TextArea />);
        const textarea = container.querySelector('textarea')!;
        expect(textarea.style.height).toBe('0px');
    });

    it('does not modify height on mount when autoresize is disabled', () => {
        const { container } = render(<TextArea autoresize={false} />);
        const textarea = container.querySelector('textarea')!;
        expect(textarea.style.height).toBe('');
    });

    it('updates height on input when autoresize is enabled', () => {
        const { container } = render(<TextArea />);
        const textarea = container.querySelector('textarea')!;
        fireEvent.input(textarea);
        expect(textarea.style.height).toBe('0px');
    });

    it('calls onInput callback when input fires', () => {
        const handleInput = vi.fn();
        const { container } = render(<TextArea onInput={handleInput} />);
        fireEvent.input(container.querySelector('textarea')!);
        expect(handleInput).toHaveBeenCalledOnce();
    });

    it('forwards placeholder prop', () => {
        render(<TextArea placeholder="Write here..." />);
        expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Write here...');
    });
});
