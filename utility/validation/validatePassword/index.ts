export interface PasswordRules {
    minLength?: number;
    isUppercaseRequired?: boolean;
    isLowercaseRequired?: boolean;
    isDigitRequired?: boolean;
    isSpecialCharRequired?: boolean;
}

export function validatePassword(password: string, rules: PasswordRules = {}): boolean {
    const {
        minLength = 8,
        isUppercaseRequired = false,
        isLowercaseRequired = false,
        isDigitRequired = false,
        isSpecialCharRequired = false,
    } = rules;

    if (password.length < minLength) return false;
    if (isUppercaseRequired && !/[A-Z]/.test(password)) return false;
    if (isLowercaseRequired && !/[a-z]/.test(password)) return false;
    if (isDigitRequired && !/\d/.test(password)) return false;
    if (isSpecialCharRequired && !/[^A-Za-z0-9]/.test(password)) return false;

    return true;
}
