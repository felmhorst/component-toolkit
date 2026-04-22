/**
 * Maps a number from one range to another range.
 *
 * @param x - The number to map
 * @param fromMin - The lower bound of the input range
 * @param fromMax - The upper bound of the input range
 * @param toMin - The lower bound of the output range
 * @param toMax - The upper bound of the output range
 * @returns The mapped number in the target range
 *
 * @example
 * map(0.5, 0, 1, 0, 100); // 50
 * map(5, 0, 10, -1, 1);   // 0
 */
export function map(x: number, fromMin: number, fromMax: number, toMin: number, toMax: number): number {
    return ((x - fromMin) / (fromMax - fromMin)) * (toMax - toMin) + toMin;
}