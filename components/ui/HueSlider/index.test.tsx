import { render, screen, fireEvent } from '@testing-library/react';
import { HueSlider } from './index';

describe('HueSlider', () => {
    it('renders as a range slider', () => {
        render(<HueSlider />);
        expect(screen.getByRole('slider')).toBeInTheDocument();
    });

    it('has min=0, max=360, step=1', () => {
        render(<HueSlider />);
        const slider = screen.getByRole('slider');
        expect(slider).toHaveAttribute('min', '0');
        expect(slider).toHaveAttribute('max', '360');
        expect(slider).toHaveAttribute('step', '1');
    });

    it('defaults to vertical orientation', () => {
        render(<HueSlider />);
        expect(screen.getByRole('slider')).toHaveAttribute('aria-orientation', 'vertical');
    });

    it('applies horizontal orientation', () => {
        render(<HueSlider orientation="horizontal" />);
        expect(screen.getByRole('slider')).toHaveAttribute('aria-orientation', 'horizontal');
    });

    it('forwards onChange callback', () => {
        const handleChange = vi.fn();
        render(<HueSlider value={0} onChange={handleChange} />);
        fireEvent.change(screen.getByRole('slider'), { target: { value: '180' } });
        expect(handleChange).toHaveBeenCalledOnce();
    });
});
