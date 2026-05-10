import { toAcceptAttribute, isFileTypeAccepted } from './index';

const makeFile = (name: string, type: string) => new File([''], name, { type });

describe('toAcceptAttribute', () => {
    it('returns empty string for empty array', () => {
        expect(toAcceptAttribute([])).toBe('');
    });

    it('joins types with commas', () => {
        expect(toAcceptAttribute(['image/png', '.pdf', 'image/*'])).toBe('image/png,.pdf,image/*');
    });
});

describe('isFileTypeAccepted', () => {
    it('accepts any file when acceptedTypes is empty', () => {
        expect(isFileTypeAccepted(makeFile('doc.txt', 'text/plain'), [])).toBe(true);
    });

    it('accepts file matching exact MIME type', () => {
        expect(isFileTypeAccepted(makeFile('img.png', 'image/png'), ['image/png'])).toBe(true);
    });

    it('rejects file not matching exact MIME type', () => {
        expect(isFileTypeAccepted(makeFile('img.jpg', 'image/jpeg'), ['image/png'])).toBe(false);
    });

    it('accepts file matching wildcard MIME category', () => {
        expect(isFileTypeAccepted(makeFile('img.jpg', 'image/jpeg'), ['image/*'])).toBe(true);
    });

    it('rejects file not matching wildcard MIME category', () => {
        expect(isFileTypeAccepted(makeFile('doc.txt', 'text/plain'), ['image/*'])).toBe(false);
    });

    it('accepts file matching extension', () => {
        expect(isFileTypeAccepted(makeFile('report.pdf', 'application/pdf'), ['.pdf'])).toBe(true);
    });

    it('accepts file matching extension case-insensitively', () => {
        expect(isFileTypeAccepted(makeFile('REPORT.PDF', 'application/pdf'), ['.pdf'])).toBe(true);
    });

    it('rejects file not matching extension', () => {
        expect(isFileTypeAccepted(makeFile('report.doc', 'application/msword'), ['.pdf'])).toBe(false);
    });

    it('accepts file matching any entry in a multi-type list', () => {
        expect(isFileTypeAccepted(makeFile('img.jpg', 'image/jpeg'), ['image/png', 'image/jpeg'])).toBe(true);
    });
});
