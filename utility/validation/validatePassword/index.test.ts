import { validatePassword } from './index';

describe('validatePassword', () => {
    describe('minLength', () => {
        it('accepts a password that meets the default minimum of 8', () => {
            expect(validatePassword('abcdefgh')).toBe(true);
        });

        it('rejects a password shorter than the default minimum', () => {
            expect(validatePassword('abc')).toBe(false);
        });

        it('accepts a password meeting a custom minimum length', () => {
            expect(validatePassword('abcdefghij', { minLength: 10 })).toBe(true);
        });

        it('rejects a password shorter than a custom minimum length', () => {
            expect(validatePassword('abcdefgh', { minLength: 10 })).toBe(false);
        });

        it('accepts an empty password when minLength is 0', () => {
            expect(validatePassword('', { minLength: 0 })).toBe(true);
        });
    });

    describe('requireUppercase', () => {
        it('accepts a password with an uppercase letter', () => {
            expect(validatePassword('Abcdefgh', { isUppercaseRequired: true })).toBe(true);
        });

        it('rejects a password without an uppercase letter', () => {
            expect(validatePassword('abcdefgh', { isUppercaseRequired: true })).toBe(false);
        });
    });

    describe('requireLowercase', () => {
        it('accepts a password with a lowercase letter', () => {
            expect(validatePassword('ABCDEFGh', { isLowercaseRequired: true })).toBe(true);
        });

        it('rejects a password without a lowercase letter', () => {
            expect(validatePassword('ABCDEFGH', { isLowercaseRequired: true })).toBe(false);
        });
    });

    describe('requireDigit', () => {
        it('accepts a password containing a digit', () => {
            expect(validatePassword('abcdefg1', { isDigitRequired: true })).toBe(true);
        });

        it('rejects a password with no digits', () => {
            expect(validatePassword('abcdefgh', { isDigitRequired: true })).toBe(false);
        });
    });

    describe('requireSpecialChar', () => {
        it('accepts a password with a special character', () => {
            expect(validatePassword('abcdefg!', { isSpecialCharRequired: true })).toBe(true);
        });

        it('accepts a password with various special characters', () => {
            for (const char of ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_']) {
                expect(validatePassword(`abcdefg${char}`, { isSpecialCharRequired: true })).toBe(true);
            }
        });

        it('rejects a password with only alphanumeric characters', () => {
            expect(validatePassword('abcdefg1', { isSpecialCharRequired: true })).toBe(false);
        });
    });

    describe('combined rules', () => {
        const strictRules = {
            minLength: 12,
            requireUppercase: true,
            requireLowercase: true,
            requireDigit: true,
            requireSpecialChar: true,
        };

        it('accepts a password satisfying all rules', () => {
            expect(validatePassword('Abcdefgh123!', strictRules)).toBe(true);
        });

        it('rejects a password that is too short even if other rules pass', () => {
            expect(validatePassword('Abc123!', strictRules)).toBe(false);
        });

        it('rejects a password missing uppercase even if other rules pass', () => {
            expect(validatePassword('abcdefgh123!', strictRules)).toBe(false);
        });

        it('rejects a password missing a digit even if other rules pass', () => {
            expect(validatePassword('Abcdefghijk!', strictRules)).toBe(false);
        });

        it('rejects a password missing a special char even if other rules pass', () => {
            expect(validatePassword('Abcdefgh1234', strictRules)).toBe(false);
        });
    });
});
