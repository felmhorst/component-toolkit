export interface PasswordRules {
    minLength?: number;
    requireUppercase?: boolean;
    requireLowercase?: boolean;
    requireDigit?: boolean;
    requireSpecialChar?: boolean;
}

export function validatePassword(password: string, rules: PasswordRules = {}): boolean {
    const {
        minLength = 8,
        requireUppercase = false,
        requireLowercase = false,
        requireDigit = false,
        requireSpecialChar = false,
    } = rules;

    if (password.length < minLength) return false;
    if (requireUppercase && !/[A-Z]/.test(password)) return false;
    if (requireLowercase && !/[a-z]/.test(password)) return false;
    if (requireDigit && !/\d/.test(password)) return false;
    if (requireSpecialChar && !/[^A-Za-z0-9]/.test(password)) return false;

    return true;
}
