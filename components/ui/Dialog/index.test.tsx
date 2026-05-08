import { render, screen, fireEvent } from '@testing-library/react';
import { Dialog } from './index';

beforeEach(() => {
    HTMLDialogElement.prototype.showModal = vi.fn(function (this: HTMLDialogElement) {
        this.setAttribute('open', '');
    });
    HTMLDialogElement.prototype.close = vi.fn(function (this: HTMLDialogElement) {
        this.removeAttribute('open');
    });
});

describe('Dialog', () => {
    it('renders with role="dialog"', () => {
        render(
            <Dialog isOpen={true} onClose={() => {}}>
                <p>Content</p>
            </Dialog>
        );
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('calls showModal when isOpen is true', () => {
        render(
            <Dialog isOpen={true} onClose={() => {}}>
                <p>Content</p>
            </Dialog>
        );
        expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalledOnce();
    });

    it('renders title when provided', () => {
        render(
            <Dialog isOpen={true} onClose={() => {}} title="My Dialog">
                <p>Content</p>
            </Dialog>
        );
        expect(screen.getByRole('heading', { name: 'My Dialog' })).toBeInTheDocument();
    });

    it('does not render a heading when title is omitted', () => {
        render(
            <Dialog isOpen={true} onClose={() => {}} aria-label="My Dialog">
                <p>Content</p>
            </Dialog>
        );
        expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    });

    it('calls onClose when X button is clicked', () => {
        const onClose = vi.fn();
        render(
            <Dialog isOpen={true} onClose={onClose}>
                <p>Content</p>
            </Dialog>
        );
        fireEvent.click(screen.getByRole('button', { name: /close dialog/i }));
        expect(onClose).toHaveBeenCalledOnce();
    });

    it('calls onClose when backdrop is clicked', () => {
        const onClose = vi.fn();
        render(
            <Dialog isOpen={true} onClose={onClose}>
                <p>Content</p>
            </Dialog>
        );
        const dialog = screen.getByRole('dialog');
        fireEvent.click(dialog);
        expect(onClose).toHaveBeenCalledOnce();
    });

    it('does not call onClose when panel content is clicked', () => {
        const onClose = vi.fn();
        render(
            <Dialog isOpen={true} onClose={onClose}>
                <p>Content</p>
            </Dialog>
        );
        fireEvent.click(screen.getByText('Content'));
        expect(onClose).not.toHaveBeenCalled();
    });

    it('calls onClose on native cancel event (Escape key)', () => {
        const onClose = vi.fn();
        render(
            <Dialog isOpen={true} onClose={onClose}>
                <p>Content</p>
            </Dialog>
        );
        const dialog = screen.getByRole('dialog');
        fireEvent(dialog, new Event('cancel', { cancelable: true }));
        expect(onClose).toHaveBeenCalledOnce();
    });

    it('renders footer content', () => {
        render(
            <Dialog isOpen={true} onClose={() => {}} footer={<button>Confirm</button>}>
                <p>Content</p>
            </Dialog>
        );
        expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
    });

    it('does not render footer when not provided', () => {
        const { container } = render(
            <Dialog isOpen={true} onClose={() => {}}>
                <p>Content</p>
            </Dialog>
        );
        expect(container.querySelector('footer')).not.toBeInTheDocument();
    });
});
