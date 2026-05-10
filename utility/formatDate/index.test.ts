import { formatDate } from './index';

const NOW = new Date(2026, 4, 10, 12, 0, 0).getTime();
const ago = (ms: number) => new Date(NOW - ms);

describe('formatDate — relative', () => {
    it('returns "just now" for less than 1 minute', () => {
        expect(formatDate(ago(30_000), 'relative', NOW)).toBe('just now');
    });

    it('returns "1 minute ago" for exactly 1 minute', () => {
        expect(formatDate(ago(60_000), 'relative', NOW)).toBe('1 minute ago');
    });

    it('returns "X minutes ago" for multiple minutes', () => {
        expect(formatDate(ago(5 * 60_000), 'relative', NOW)).toBe('5 minutes ago');
    });

    it('returns "1 hour ago" for exactly 1 hour', () => {
        expect(formatDate(ago(60 * 60_000), 'relative', NOW)).toBe('1 hour ago');
    });

    it('returns "X hours ago" for multiple hours', () => {
        expect(formatDate(ago(3 * 60 * 60_000), 'relative', NOW)).toBe('3 hours ago');
    });

    it('returns "yesterday" for 25 hours ago', () => {
        expect(formatDate(ago(25 * 60 * 60_000), 'relative', NOW)).toBe('yesterday');
    });

    it('returns "X days ago" for multiple days', () => {
        expect(formatDate(ago(4 * 24 * 60 * 60_000), 'relative', NOW)).toBe('4 days ago');
    });

    it('returns "1 week ago" for exactly 7 days', () => {
        expect(formatDate(ago(7 * 24 * 60 * 60_000), 'relative', NOW)).toBe('1 week ago');
    });

    it('returns "X weeks ago" for multiple weeks', () => {
        expect(formatDate(ago(14 * 24 * 60 * 60_000), 'relative', NOW)).toBe('2 weeks ago');
    });

    it('returns "1 month ago" for exactly 30 days', () => {
        expect(formatDate(ago(30 * 24 * 60 * 60_000), 'relative', NOW)).toBe('1 month ago');
    });

    it('returns "X months ago" for multiple months', () => {
        expect(formatDate(ago(90 * 24 * 60 * 60_000), 'relative', NOW)).toBe('3 months ago');
    });

    it('returns "1 year ago" for exactly 365 days', () => {
        expect(formatDate(ago(365 * 24 * 60 * 60_000), 'relative', NOW)).toBe('1 year ago');
    });

    it('returns "X years ago" for multiple years', () => {
        expect(formatDate(ago(2 * 365 * 24 * 60 * 60_000), 'relative', NOW)).toBe('2 years ago');
    });

    it('defaults to relative format', () => {
        expect(formatDate(ago(30_000), undefined, NOW)).toBe('just now');
    });
});

describe('formatDate — absolute', () => {
    it('formats a date as dd.mm.yy', () => {
        expect(formatDate(new Date(2026, 4, 26), 'absolute')).toBe('26.05.26');
    });

    it('pads day and month with leading zeros', () => {
        expect(formatDate(new Date(2026, 0, 5), 'absolute')).toBe('05.01.26');
    });

    it('accepts a numeric timestamp', () => {
        expect(formatDate(new Date(2026, 4, 26).getTime(), 'absolute')).toBe('26.05.26');
    });

    it('accepts a Date object', () => {
        expect(formatDate(new Date(2026, 4, 26), 'absolute')).toBe('26.05.26');
    });
});
