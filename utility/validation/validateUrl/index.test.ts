import { validateUrl } from './index';

describe('validateUrl', () => {
    describe('valid URLs', () => {
        it('accepts a plain https URL', () => {
            expect(validateUrl('https://example.com')).toBe(true);
        });

        it('accepts a plain http URL', () => {
            expect(validateUrl('http://example.com')).toBe(true);
        });

        it('accepts a URL with a path', () => {
            expect(validateUrl('https://example.com/path/to/page')).toBe(true);
        });

        it('accepts a URL with query parameters', () => {
            expect(validateUrl('https://example.com/search?q=hello&lang=en')).toBe(true);
        });

        it('accepts a URL with a port', () => {
            expect(validateUrl('https://example.com:8080')).toBe(true);
        });

        it('accepts a URL with a fragment', () => {
            expect(validateUrl('https://example.com/page#section')).toBe(true);
        });

        it('accepts a subdomain URL', () => {
            expect(validateUrl('https://api.example.com')).toBe(true);
        });

        it('accepts a URL with leading whitespace', () => {
            expect(validateUrl('  https://example.com  ')).toBe(true);
        });
    });

    describe('invalid URLs', () => {
        it('rejects an empty string', () => {
            expect(validateUrl('')).toBe(false);
        });

        it('rejects a bare domain with no protocol', () => {
            expect(validateUrl('example.com')).toBe(false);
        });

        it('rejects an ftp URL', () => {
            expect(validateUrl('ftp://example.com')).toBe(false);
        });

        it('rejects a javascript: URL', () => {
            expect(validateUrl('javascript:alert(1)')).toBe(false);
        });

        it('rejects plain text', () => {
            expect(validateUrl('not a url')).toBe(false);
        });

        it('rejects a protocol-only string', () => {
            expect(validateUrl('https://')).toBe(false);
        });
    });
});
