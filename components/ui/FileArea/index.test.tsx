import { render, screen, fireEvent, createEvent } from '@testing-library/react';
import { FileArea } from './index';

function createFileList(files: File[]): FileList {
    return Object.assign(files, { item: (i: number) => files[i] ?? null }) as unknown as FileList;
}

function createDragEvent(files: File[]) {
    return { dataTransfer: { files: createFileList(files) } };
}

describe('FileArea', () => {
    it('renders drop zone with role button', () => {
        render(<FileArea />);
        expect(screen.getByRole('button', { name: 'File drop zone' })).toBeInTheDocument();
    });

    it('renders instructional text', () => {
        render(<FileArea />);
        expect(screen.getByText('Drag & drop or click to select')).toBeInTheDocument();
    });

    it('clicking drop zone calls click on hidden input', () => {
        const { container } = render(<FileArea />);
        const input = container.querySelector('input[type="file"]')!;
        const clickSpy = vi.spyOn(input, 'click');
        fireEvent.click(screen.getByRole('button', { name: 'File drop zone' }));
        expect(clickSpy).toHaveBeenCalledOnce();
    });

    it('Enter key triggers file dialog', () => {
        const { container } = render(<FileArea />);
        const input = container.querySelector('input[type="file"]')!;
        const clickSpy = vi.spyOn(input, 'click');
        fireEvent.keyDown(screen.getByRole('button', { name: 'File drop zone' }), { key: 'Enter' });
        expect(clickSpy).toHaveBeenCalledOnce();
    });

    it('Space key triggers file dialog', () => {
        const { container } = render(<FileArea />);
        const input = container.querySelector('input[type="file"]')!;
        const clickSpy = vi.spyOn(input, 'click');
        fireEvent.keyDown(screen.getByRole('button', { name: 'File drop zone' }), { key: ' ' });
        expect(clickSpy).toHaveBeenCalledOnce();
    });

    it('onDrop with valid file calls onFilesChange', () => {
        const onFilesChange = vi.fn();
        render(<FileArea onFilesChange={onFilesChange} />);
        const dropZone = screen.getByRole('button', { name: 'File drop zone' });
        const file = new File([''], 'photo.png', { type: 'image/png' });
        fireEvent.drop(dropZone, createDragEvent([file]));
        expect(onFilesChange).toHaveBeenCalledWith([file]);
    });

    it('onDrop with invalid file type shows error alert', () => {
        const onFilesChange = vi.fn();
        render(<FileArea acceptedTypes={['image/png']} onFilesChange={onFilesChange} />);
        const dropZone = screen.getByRole('button', { name: 'File drop zone' });
        const file = new File([''], 'doc.pdf', { type: 'application/pdf' });
        fireEvent.drop(dropZone, createDragEvent([file]));
        expect(screen.getByRole('alert')).toBeInTheDocument();
        expect(onFilesChange).not.toHaveBeenCalled();
    });

    it('multiple=false takes only first file on drop', () => {
        const onFilesChange = vi.fn();
        render(<FileArea multiple={false} onFilesChange={onFilesChange} />);
        const dropZone = screen.getByRole('button', { name: 'File drop zone' });
        const files = [
            new File([''], 'a.png', { type: 'image/png' }),
            new File([''], 'b.png', { type: 'image/png' }),
        ];
        fireEvent.drop(dropZone, createDragEvent(files));
        expect(onFilesChange).toHaveBeenCalledWith([files[0]]);
    });

    it('onDragOver calls preventDefault', () => {
        render(<FileArea />);
        const dropZone = screen.getByRole('button', { name: 'File drop zone' });
        const event = createEvent.dragOver(dropZone);
        const preventDefault = vi.spyOn(event, 'preventDefault');
        fireEvent(dropZone, event);
        expect(preventDefault).toHaveBeenCalled();
    });

    it('error clears after a valid drop', () => {
        const onFilesChange = vi.fn();
        render(<FileArea acceptedTypes={['image/png']} onFilesChange={onFilesChange} />);
        const dropZone = screen.getByRole('button', { name: 'File drop zone' });
        const invalidFile = new File([''], 'doc.pdf', { type: 'application/pdf' });
        fireEvent.drop(dropZone, createDragEvent([invalidFile]));
        expect(screen.getByRole('alert')).toBeInTheDocument();

        const validFile = new File([''], 'photo.png', { type: 'image/png' });
        fireEvent.drop(dropZone, createDragEvent([validFile]));
        expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });

    it('onFilesChange is called when selecting files via input', () => {
        const onFilesChange = vi.fn();
        const { container } = render(<FileArea onFilesChange={onFilesChange} />);
        const input = container.querySelector('input[type="file"]')!;
        const file = new File([''], 'photo.png', { type: 'image/png' });
        Object.defineProperty(input, 'files', { value: createFileList([file]), configurable: true });
        fireEvent.change(input);
        expect(onFilesChange).toHaveBeenCalledWith([file]);
    });
});
