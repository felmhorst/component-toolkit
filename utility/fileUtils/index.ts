export function toAcceptAttribute(acceptedTypes: string[]): string {
    return acceptedTypes.join(',');
}

export function isFileTypeAccepted(file: File, acceptedTypes: string[]): boolean {
    if (acceptedTypes.length === 0) return true;
    return acceptedTypes.some(type => {
        if (type.startsWith('.')) return file.name.toLowerCase().endsWith(type.toLowerCase());
        if (type.endsWith('/*')) return file.type.startsWith(type.slice(0, -1));
        return file.type === type;
    });
}
