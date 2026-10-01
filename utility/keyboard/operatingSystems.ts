import {KeyCode, KeyboardOs, type KeyConfig} from "@/utility/keyboard/keys.types";

// Windows: Ctrl, Win, Alt left of the spacebar; AltGr, Fn, Menu, Ctrl right of it.
const KEYBOARD_BOTTOM_ROW_WINDOWS: KeyCode[] = [
    KeyCode.ControlLeft, KeyCode.MetaLeft, KeyCode.AltLeft, KeyCode.Space,
    KeyCode.AltRight, KeyCode.Fn, KeyCode.ContextMenu, KeyCode.ControlRight,
];

// MacOS: Fn, Control, Option, Command left of the spacebar; Command, Option, Control
// right of it. There is no dedicated context-menu key.
const KEYBOARD_BOTTOM_ROW_MACOS: KeyCode[] = [
    KeyCode.Fn, KeyCode.ControlLeft, KeyCode.AltLeft, KeyCode.MetaLeft, KeyCode.Space,
    KeyCode.MetaRight, KeyCode.AltRight, KeyCode.ControlRight,
];

export const KEYBOARD_BOTTOM_ROW: Record<KeyboardOs, KeyCode[]> = {
    [KeyboardOs.Windows]: KEYBOARD_BOTTOM_ROW_WINDOWS,
    [KeyboardOs.MacOs]: KEYBOARD_BOTTOM_ROW_MACOS,
};

type KeyLabelOverrides = Partial<Record<KeyCode, Pick<KeyConfig, "primaryKey">>>;

// MacOS renames the generic modifier keys; Windows keeps whatever the character
// layout already provides, so switching to Windows never changes existing labels.
export const KEYBOARD_KEY_LABELS_BY_OS: Record<KeyboardOs, KeyLabelOverrides> = {
    [KeyboardOs.Windows]: {},
    [KeyboardOs.MacOs]: {
        [KeyCode.ControlLeft]: {primaryKey: "Control"},
        [KeyCode.ControlRight]: {primaryKey: "Control"},
        [KeyCode.AltLeft]: {primaryKey: "Option"},
        [KeyCode.AltRight]: {primaryKey: "Option"},
        [KeyCode.MetaLeft]: {primaryKey: "Command"},
        [KeyCode.MetaRight]: {primaryKey: "Command"},
    },
};
