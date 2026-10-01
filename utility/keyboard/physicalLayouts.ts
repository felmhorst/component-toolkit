import {KeyCode, type KeyboardPhysicalLayout} from "@/utility/keyboard/keys.types";

export const KEYBOARD_FUNCTION_KEYS: KeyCode[][] = [
    [KeyCode.Escape],
    [KeyCode.F1, KeyCode.F2, KeyCode.F3, KeyCode.F4],
    [KeyCode.F5, KeyCode.F6, KeyCode.F7, KeyCode.F8],
    [KeyCode.F9, KeyCode.F10, KeyCode.F11, KeyCode.F12],
] as const;

export const KEYBOARD_SYSTEM_KEYS: KeyCode[]  = [
    KeyCode.PrintScreen, KeyCode.ScrollLock, KeyCode.Pause
] as const;

export const KEYBOARD_EDITING_KEYS: KeyCode[]  = [
    KeyCode.Insert, KeyCode.Home, KeyCode.PageUp,
    KeyCode.Delete, KeyCode.End, KeyCode.PageDown
] as const;

export const KEYBOARD_ARROW_KEYS: KeyCode[]  = [
    KeyCode.ArrowUp, KeyCode.ArrowLeft, KeyCode.ArrowDown, KeyCode.ArrowRight,
] as const;

export const KEYBOARD_NUMPAD: KeyCode[] = [
    KeyCode.NumLock, KeyCode.NumpadDivide, KeyCode.NumpadMultiply, KeyCode.NumpadSubtract,
    KeyCode.Numpad7, KeyCode.Numpad8, KeyCode.Numpad9, KeyCode.NumpadAdd,
    KeyCode.Numpad4, KeyCode.Numpad5, KeyCode.Numpad6,
    KeyCode.Numpad1, KeyCode.Numpad2, KeyCode.Numpad3, KeyCode.NumpadEnter,
    KeyCode.Numpad0, KeyCode.NumpadDecimal,
] as const;

const KEYBOARD_ALPHANUMERIC_ROW_1: KeyCode[] = [KeyCode.Backquote, KeyCode.Digit1, KeyCode.Digit2, KeyCode.Digit3, KeyCode.Digit4, KeyCode.Digit5, KeyCode.Digit6, KeyCode.Digit7, KeyCode.Digit8, KeyCode.Digit9, KeyCode.Digit0, KeyCode.Minus, KeyCode.Equal, KeyCode.Backspace];

// The bottom row (modifier keys around the spacebar) is OS-dependent, see operatingSystems.ts.
export const KEYBOARD_ALPHANUMERIC_ISO: KeyCode[][] = [
    KEYBOARD_ALPHANUMERIC_ROW_1,
    [KeyCode.Tab, KeyCode.KeyQ, KeyCode.KeyW, KeyCode.KeyE, KeyCode.KeyR, KeyCode.KeyT, KeyCode.KeyY, KeyCode.KeyU, KeyCode.KeyI, KeyCode.KeyO, KeyCode.KeyP, KeyCode.BracketLeft, KeyCode.BracketRight, KeyCode.Enter],
    [KeyCode.CapsLock, KeyCode.KeyA, KeyCode.KeyS, KeyCode.KeyD, KeyCode.KeyF, KeyCode.KeyG, KeyCode.KeyH, KeyCode.KeyJ, KeyCode.KeyK, KeyCode.KeyL, KeyCode.Semicolon, KeyCode.Quote, KeyCode.Backslash],
    [KeyCode.ShiftLeft, KeyCode.IntlBackslash, KeyCode.KeyZ, KeyCode.KeyX, KeyCode.KeyC, KeyCode.KeyV, KeyCode.KeyB, KeyCode.KeyN, KeyCode.KeyM, KeyCode.Comma, KeyCode.Period, KeyCode.Slash, KeyCode.ShiftRight],
] as const;

export const KEYBOARD_ALPHANUMERIC_ANSI: KeyCode[][] = [
    KEYBOARD_ALPHANUMERIC_ROW_1,
    [KeyCode.Tab, KeyCode.KeyQ, KeyCode.KeyW, KeyCode.KeyE, KeyCode.KeyR, KeyCode.KeyT, KeyCode.KeyY, KeyCode.KeyU, KeyCode.KeyI, KeyCode.KeyO, KeyCode.KeyP, KeyCode.BracketLeft, KeyCode.BracketRight, KeyCode.Backslash],
    [KeyCode.CapsLock, KeyCode.KeyA, KeyCode.KeyS, KeyCode.KeyD, KeyCode.KeyF, KeyCode.KeyG, KeyCode.KeyH, KeyCode.KeyJ, KeyCode.KeyK, KeyCode.KeyL, KeyCode.Semicolon, KeyCode.Quote, KeyCode.Enter],
    [KeyCode.ShiftLeft, KeyCode.KeyZ, KeyCode.KeyX, KeyCode.KeyC, KeyCode.KeyV, KeyCode.KeyB, KeyCode.KeyN, KeyCode.KeyM, KeyCode.Comma, KeyCode.Period, KeyCode.Slash, KeyCode.ShiftRight],
] as const;

export const KEYBOARD_PHYSICAL_LAYOUTS: Record<KeyboardPhysicalLayout, KeyCode[][]> = {
    ansi: KEYBOARD_ALPHANUMERIC_ANSI,
    iso: KEYBOARD_ALPHANUMERIC_ISO,
} as const;