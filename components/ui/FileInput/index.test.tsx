import { render, screen, fireEvent } from '@testing-library/react';
import { FileInput } from './index';

function createFileList(files: File[]): FileList {
    return Object.assign(files, { item: (i: number) => files[i] ?? null }) as unknown as FileList;
}

describe('FileInput', () => {
    it('renders a button', () => {
        render(<FileInput />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('shows default label on button', () => {
        render(<FileInput />);
        expect(screen.getByRole('button')).toHaveTextContent('Choose file');
    });

    it('shows custom label on button', () => {
        render(<FileInput label="Upload avatar" />);
        expect(screen.getByRole('button')).toHaveTextContent('Upload avatar');
    });

    it('shows "No file chosen" by default', () => {
        render(<FileInput />);
        expect(screen.getByText('No file chosen')).toBeInTheDocument();
    });

    it('hidden input has correct accept attribute', () => {
        const { container } = render(<FileInput acceptedTypes={['image/png', '.pdf']} />);
        const input = container.querySelector('input[type="file"]')!;
        expect(input).toHaveAttribute('accept', 'image/png,.pdf');
    });

    it('hidden input has multiple attribute when prop is set', () => {
        const { container } = render(<FileInput multiple />);
        const input = container.querySelector('input[type="file"]')!;
        expect(input).toHaveAttribute('multiple');
    });

    it('clicking button calls click on hidden input', () => {
        const { container } = render(<FileInput />);
        const input = container.querySelector('input[type="file"]')!;
        const clickSpy = vi.spyOn(input, 'click');
        fireEvent.click(screen.getByRole('button'));
        expect(clickSpy).toHaveBeenCalledOnce();
    });

    it('valid file selection calls onFilesChange', () => {
        const onFilesChange = vi.fn();
        const { container } = render(<FileInput acceptedTypes={['image/png']} onFilesChange={onFilesChange} />);
        const input = container.querySelector('input[type="file"]')!;
        const file = new File([''], 'photo.png', { type: 'image/png' });
        Object.defineProperty(input, 'files', { value: createFileList([file]), configurable: true });
        fireEvent.change(input);
        expect(onFilesChange).toHaveBeenCalledWith([file]);
    });

    it('valid file updates display text', () => {
        const { container } = render(<FileInput />);
        const input = container.querySelector('input[type="file"]')!;
        const file = new File([''], 'photo.png', { type: 'image/png' });
        Object.defineProperty(input, 'files', { value: createFileList([file]), configurable: true });
        fireEvent.change(input);
        expect(screen.getByText('photo.png')).toBeInTheDocument();
    });

    it('multiple files show count in display text', () => {
        const { container } = render(<FileInput multiple />);
        const input = container.querySelector('input[type="file"]')!;
        const files = [
            new File([''], 'a.png', { type: 'image/png' }),
            new File([''], 'b.png', { type: 'image/png' }),
            new File([''], 'c.png', { type: 'image/png' }),
        ];
        Object.defineProperty(input, 'files', { value: createFileList(files), configurable: true });
        fireEvent.change(input);
        expect(screen.getByText('3 files selected')).toBeInTheDocument();
    });

    it('invalid file type shows error alert', () => {
        const onFilesChange = vi.fn();
        const { container } = render(<FileInput acceptedTypes={['image/png']} onFilesChange={onFilesChange} />);
        const input = container.querySelector('input[type="file"]')!;
        const file = new File([''], 'doc.pdf', { type: 'application/pdf' });
        Object.defineProperty(input, 'files', { value: createFileList([file]), configurable: true });
        fireEvent.change(input);
        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(onFilesChange).not.toHaveBeenCalled();
    });

    it('disables the button when disabled prop is set', () => {
        render(<FileInput disabled />);
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('disables the hidden input when disabled prop is set', () => {
        const { container } = render(<FileInput disabled />);
        const input = container.querySelector('input[type="file"]')!;
        expect(input).toBeDisabled();
    });

    it('forwards id to the button', () => {
        render(<FileInput id="upload-btn" />);
        expect(screen.getByRole('button')).toHaveAttribute('id', 'upload-btn');
    });
});
