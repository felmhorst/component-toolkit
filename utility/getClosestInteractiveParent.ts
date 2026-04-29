
const INTERACTIVE_SELECTORS = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'details',
    '[role="button"]:not([disabled])',
    '[role="link"]',
    '[tabindex]:not([tabindex="-1"])',
].join(', ');

export function getClosestInteractiveParent(target: Element): Element | null {
    return target.closest(INTERACTIVE_SELECTORS);
}