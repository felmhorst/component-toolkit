import { render, screen, fireEvent } from '@testing-library/react';
import { OpacitySlider } from './index';

describe('OpacitySlider', () => {
    it('renders as a range slider', () => {
        render(<OpacitySlider />);
        expect(screen.getByRole('slider')).toBeInTheDocument();
    });

    it('has min=0, max=100, step=1', () => {
        render(<OpacitySlider />);
        const slider = screen.getByRole('slider');
        expect(slider).toHaveAttribute('min', '0');
        expect(slider).toHaveAttribute('max', '100');
        expect(slider).toHaveAttribute('step', '1');
    });

    it('defaults to vertical orientation', () => {
        render(<OpacitySlider />);
        expect(screen.getByRole('slider')).toHaveAttribute('aria-orientation', 'vertical');
    });

    it('applies horizontal orientation', () => {
        render(<OpacitySlider orientation="horizontal" />);
        expect(screen.getByRole('slider')).toHaveAttribute('aria-orientation', 'horizontal');
    });

    it('forwards onChange callback', () => {
        const handleChange = vi.fn();
        render(<OpacitySlider value={0} onChange={handleChange} />);
        fireEvent.change(screen.getByRole('slider'), { target: { value: '50' } });
        expect(handleChange).toHaveBeenCalledOnce();
    });
});
