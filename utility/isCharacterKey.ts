
export function isCharacterKey(e) {
    return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
}