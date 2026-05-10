type FormatMode = 'relative' | 'absolute';

const MINUTE = 60_000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;

function formatRelative(diffMs: number): string {
    if (diffMs < MINUTE) return 'just now';
    if (diffMs < HOUR) {
        const m = Math.floor(diffMs / MINUTE);
        return m === 1 ? '1 minute ago' : `${m} minutes ago`;
    }
    if (diffMs < DAY) {
        const h = Math.floor(diffMs / HOUR);
        return h === 1 ? '1 hour ago' : `${h} hours ago`;
    }
    if (diffMs < 2 * DAY) return 'yesterday';
    if (diffMs < WEEK) {
        const d = Math.floor(diffMs / DAY);
        return `${d} days ago`;
    }
    if (diffMs < MONTH) {
        const w = Math.floor(diffMs / WEEK);
        return w === 1 ? '1 week ago' : `${w} weeks ago`;
    }
    if (diffMs < YEAR) {
        const mo = Math.floor(diffMs / MONTH);
        return mo === 1 ? '1 month ago' : `${mo} months ago`;
    }
    const y = Math.floor(diffMs / YEAR);
    return y === 1 ? '1 year ago' : `${y} years ago`;
}

function formatAbsolute(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}.${month}.${year}`;
}

export function formatDate(date: Date | string | number, format: FormatMode = 'relative', now = Date.now()): string {
    const d = new Date(date);
    if (format === 'absolute') return formatAbsolute(d);
    return formatRelative(now - d.getTime());
}
