import { validatePhoneNumber } from './index';

describe('validatePhoneNumber', () => {
    describe('E.164 international format', () => {
        it('accepts a valid E.164 number', () => {
            expect(validatePhoneNumber('+14155552671')).toBe(true);
        });

        it('accepts a short international number', () => {
            expect(validatePhoneNumber('+441234567')).toBe(true);
        });

        it('accepts a long international number', () => {
            expect(validatePhoneNumber('+12345678901234')).toBe(true);
        });

        it('rejects a number with no country code digits after +', () => {
            expect(validatePhoneNumber('+0123456789')).toBe(false);
        });

        it('rejects a number that is too short', () => {
            expect(validatePhoneNumber('+12345')).toBe(false);
        });

        it('rejects a number that is too long', () => {
            expect(validatePhoneNumber('+123456789012345678')).toBe(false);
        });
    });

    describe('local 10-digit format', () => {
        it('accepts plain 10-digit number', () => {
            expect(validatePhoneNumber('4155552671')).toBe(true);
        });

        it('accepts dashes', () => {
            expect(validatePhoneNumber('415-555-2671')).toBe(true);
        });

        it('accepts dots', () => {
            expect(validatePhoneNumber('415.555.2671')).toBe(true);
        });

        it('accepts spaces', () => {
            expect(validatePhoneNumber('415 555 2671')).toBe(true);
        });

        it('accepts parentheses around area code', () => {
            expect(validatePhoneNumber('(415) 555-2671')).toBe(true);
        });

        it('accepts 7-digit local number', () => {
            expect(validatePhoneNumber('555-2671')).toBe(true);
        });
    });

    describe('invalid inputs', () => {
        it('rejects an empty string', () => {
            expect(validatePhoneNumber('')).toBe(false);
        });

        it('rejects letters', () => {
            expect(validatePhoneNumber('abc-def-ghij')).toBe(false);
        });

        it('rejects a partial number', () => {
            expect(validatePhoneNumber('123')).toBe(false);
        });
    });
});
