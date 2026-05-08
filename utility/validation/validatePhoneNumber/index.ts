export function validatePhoneNumber(phone: string): boolean {
    const e164 = /^\+[1-9]\d{6,14}$/;
    const local = /^(\(?\d{3}\)?[\s.\-]?)?\d{3}[\s.\-]?\d{4}$/;
    const stripped = phone.trim();
    return e164.test(stripped) || local.test(stripped);
}
