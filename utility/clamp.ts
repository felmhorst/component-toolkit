/**
 * Clamps a number between a minimum and maximum value.
 *
 * @param value - The number to clamp
 * @param min - The lower bound
 * @param max - The upper bound
 * @returns The clamped number, guaranteed to be within [min, max]
 *
 * @example
 * clamp(5, 0, 10);  // 5
 * clamp(-1, 0, 10); // 0
 * clamp(15, 0, 10); // 10
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}