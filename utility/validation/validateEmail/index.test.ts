import { validateEmail } from './index';

describe('validateEmail', () => {
    describe('valid addresses', () => {
        it('accepts a standard email', () => {
            expect(validateEmail('user@example.com')).toBe(true);
        });

        it('accepts a subdomain email', () => {
            expect(validateEmail('user@mail.example.com')).toBe(true);
        });

        it('accepts a plus-tagged address', () => {
            expect(validateEmail('user+tag@example.com')).toBe(true);
        });

        it('accepts dots in the local part', () => {
            expect(validateEmail('first.last@example.com')).toBe(true);
        });

        it('accepts a hyphenated domain', () => {
            expect(validateEmail('user@my-domain.com')).toBe(true);
        });

        it('accepts a short TLD', () => {
            expect(validateEmail('user@example.io')).toBe(true);
        });

        it('accepts a four-character TLD', () => {
            expect(validateEmail('user@example.info')).toBe(true);
        });
    });

    describe('invalid addresses', () => {
        it('rejects an empty string', () => {
            expect(validateEmail('')).toBe(false);
        });

        it('rejects an address with no @ symbol', () => {
            expect(validateEmail('userexample.com')).toBe(false);
        });

        it('rejects an address with no domain', () => {
            expect(validateEmail('user@')).toBe(false);
        });

        it('rejects an address with no local part', () => {
            expect(validateEmail('@example.com')).toBe(false);
        });

        it('rejects an address with no TLD', () => {
            expect(validateEmail('user@example')).toBe(false);
        });

        it('rejects an address with spaces', () => {
            expect(validateEmail('user @example.com')).toBe(false);
        });

        it('rejects plain text', () => {
            expect(validateEmail('not an email')).toBe(false);
        });
    });
});
