import { render, screen, fireEvent } from '@testing-library/react';
import { Slider } from './index';

describe('Slider', () => {
    it('renders a range input', () => {
        render(<Slider />);
        expect(screen.getByRole('slider')).toBeInTheDocument();
    });

    it('has horizontal orientation by default', () => {
        render(<Slider />);
        expect(screen.getByRole('slider')).toHaveAttribute('aria-orientation', 'horizontal');
    });

    it('applies vertical orientation', () => {
        render(<Slider orientation="vertical" />);
        expect(screen.getByRole('slider')).toHaveAttribute('aria-orientation', 'vertical');
    });

    it('forwards min and max props', () => {
        render(<Slider min={10} max={200} />);
        const slider = screen.getByRole('slider');
        expect(slider).toHaveAttribute('min', '10');
        expect(slider).toHaveAttribute('max', '200');
    });

    it('sets fill to 0% at minimum value', () => {
        render(<Slider min={0} max={100} value={0} onChange={() => {}} />);
        const slider = screen.getByRole('slider') as HTMLInputElement;
        expect(slider.style.getPropertyValue('--fill')).toBe('0%');
    });

    it('sets fill to 50% at midpoint value', () => {
        render(<Slider min={0} max={100} value={50} onChange={() => {}} />);
        const slider = screen.getByRole('slider') as HTMLInputElement;
        expect(slider.style.getPropertyValue('--fill')).toBe('50%');
    });

    it('sets fill to 100% at maximum value', () => {
        render(<Slider min={0} max={100} value={100} onChange={() => {}} />);
        const slider = screen.getByRole('slider') as HTMLInputElement;
        expect(slider.style.getPropertyValue('--fill')).toBe('100%');
    });

    it('initialises fill from defaultValue', () => {
        render(<Slider min={0} max={100} defaultValue={25} />);
        const slider = screen.getByRole('slider') as HTMLInputElement;
        expect(slider.style.getPropertyValue('--fill')).toBe('25%');
    });

    it('updates fill when value changes in uncontrolled mode', () => {
        render(<Slider min={0} max={100} defaultValue={0} />);
        const slider = screen.getByRole('slider') as HTMLInputElement;

        fireEvent.change(slider, { target: { value: '75' } });

        expect(slider.style.getPropertyValue('--fill')).toBe('75%');
    });

    it('calls onChange when value changes', () => {
        const handleChange = vi.fn();
        render(<Slider onChange={handleChange} />);

        fireEvent.change(screen.getByRole('slider'), { target: { value: '60' } });

        expect(handleChange).toHaveBeenCalledOnce();
    });

    it('defaults fill to midpoint when no value or defaultValue is provided', () => {
        render(<Slider min={0} max={100} />);
        const slider = screen.getByRole('slider') as HTMLInputElement;
        expect(slider.style.getPropertyValue('--fill')).toBe('50%');
    });
});
