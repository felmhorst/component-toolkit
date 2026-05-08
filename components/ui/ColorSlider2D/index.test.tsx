import { render, screen, fireEvent } from '@testing-library/react';
import { ColorSlider2D } from './index';

describe('ColorSlider2D', () => {
    it('renders with role="application"', () => {
        render(<ColorSlider2D />);
        expect(screen.getByRole('application')).toBeInTheDocument();
    });

    it('has accessible label', () => {
        render(<ColorSlider2D />);
        expect(screen.getByRole('application')).toHaveAttribute('aria-label', 'Color area');
    });

    it('shows initial saturation and brightness in aria-valuetext', () => {
        render(<ColorSlider2D />);
        expect(screen.getByRole('application')).toHaveAttribute(
            'aria-valuetext',
            'Saturation 0%, Brightness 100%'
        );
    });

    it('ArrowRight increases saturation by 1', () => {
        render(<ColorSlider2D />);
        const area = screen.getByRole('application');
        fireEvent.keyDown(area, { key: 'ArrowRight' });
        expect(area).toHaveAttribute('aria-valuetext', 'Saturation 1%, Brightness 100%');
    });

    it('ArrowLeft decreases saturation by 1', () => {
        render(<ColorSlider2D />);
        const area = screen.getByRole('application');
        fireEvent.keyDown(area, { key: 'ArrowRight' });
        fireEvent.keyDown(area, { key: 'ArrowLeft' });
        expect(area).toHaveAttribute('aria-valuetext', 'Saturation 0%, Brightness 100%');
    });

    it('ArrowDown decreases brightness by 1', () => {
        render(<ColorSlider2D />);
        const area = screen.getByRole('application');
        fireEvent.keyDown(area, { key: 'ArrowDown' });
        expect(area).toHaveAttribute('aria-valuetext', 'Saturation 0%, Brightness 99%');
    });

    it('ArrowUp increases brightness by 1', () => {
        render(<ColorSlider2D />);
        const area = screen.getByRole('application');
        fireEvent.keyDown(area, { key: 'ArrowDown' });
        fireEvent.keyDown(area, { key: 'ArrowUp' });
        expect(area).toHaveAttribute('aria-valuetext', 'Saturation 0%, Brightness 100%');
    });

    it('Shift+ArrowRight increases saturation by 10', () => {
        render(<ColorSlider2D />);
        const area = screen.getByRole('application');
        fireEvent.keyDown(area, { key: 'ArrowRight', shiftKey: true });
        expect(area).toHaveAttribute('aria-valuetext', 'Saturation 10%, Brightness 100%');
    });

    it('Home sets saturation to 0', () => {
        render(<ColorSlider2D />);
        const area = screen.getByRole('application');
        fireEvent.keyDown(area, { key: 'ArrowRight', shiftKey: true });
        fireEvent.keyDown(area, { key: 'Home' });
        expect(area).toHaveAttribute('aria-valuetext', 'Saturation 0%, Brightness 100%');
    });

    it('End sets saturation to 100', () => {
        render(<ColorSlider2D />);
        const area = screen.getByRole('application');
        fireEvent.keyDown(area, { key: 'End' });
        expect(area).toHaveAttribute('aria-valuetext', 'Saturation 100%, Brightness 100%');
    });

    it('PageDown sets brightness to 0', () => {
        render(<ColorSlider2D />);
        const area = screen.getByRole('application');
        fireEvent.keyDown(area, { key: 'PageDown' });
        expect(area).toHaveAttribute('aria-valuetext', 'Saturation 0%, Brightness 0%');
    });

    it('PageUp sets brightness to 100', () => {
        render(<ColorSlider2D />);
        const area = screen.getByRole('application');
        fireEvent.keyDown(area, { key: 'PageDown' });
        fireEvent.keyDown(area, { key: 'PageUp' });
        expect(area).toHaveAttribute('aria-valuetext', 'Saturation 0%, Brightness 100%');
    });
});
