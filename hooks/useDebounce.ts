import { useCallback, useRef } from "react";

/**
 * useDebounce - Returns a debounced version of the provided function.
 *
 * @param fn    - The function to debounce.
 * @param delay - Debounce delay in milliseconds.
 * @returns       The debounced function.
 */
export function useDebounce<T extends (...args: Parameters<T>) => void>(
    fn: T,
    delay: number
): (...args: Parameters<T>) => void {
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    return useCallback(
        (...args: Parameters<T>) => {
            if (timerRef.current !== null) {
                clearTimeout(timerRef.current);
            }
            timerRef.current = setTimeout(() => fn(...args), delay);
        },
        [fn, delay]
    );
}