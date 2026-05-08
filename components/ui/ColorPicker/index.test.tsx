import { render, screen, fireEvent } from '@testing-library/react';
import { ColorPicker } from './index';

beforeEach(() => {
    HTMLDialogElement.prototype.show = vi.fn(function (this: HTMLDialogElement) {
        this.setAttribute('open', '');
    });
    HTMLDialogElement.prototype.close = vi.fn(function (this: HTMLDialogElement) {
        this.removeAttribute('open');
    });
    Element.prototype.getBoundingClientRect = vi.fn().mockReturnValue({
        x: 0, y: 0, width: 20, height: 20,
        top: 0, left: 0, bottom: 20, right: 20,
        toJSON: () => {},
    });
});

describe('ColorPicker', () => {
    it('renders a button', () => {
        render(<ColorPicker />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('clicking the swatch opens the popover', () => {
        render(<ColorPicker />);
        fireEvent.click(screen.getByRole('button'));
        expect(HTMLDialogElement.prototype.show).toHaveBeenCalledOnce();
    });

    it('pressing Escape on the popover closes it', () => {
        const { container } = render(<ColorPicker />);
        fireEvent.click(screen.getByRole('button'));
        const dialog = container.querySelector('dialog')!;
        fireEvent.keyDown(dialog, { key: 'Escape' });
        expect(HTMLDialogElement.prototype.close).toHaveBeenCalledOnce();
    });
});
