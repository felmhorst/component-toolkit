import {
    ArrowBigUpDashIcon,
    ArrowBigUpIcon,
    ArrowLeftIcon, ArrowRightLeftIcon, CommandIcon,
    CornerDownLeftIcon, DeleteIcon, DivideIcon, DotIcon, EqualIcon,
    FileTextIcon,
    type LucideIcon, MinusIcon, MoveDownIcon, MoveLeftIcon, MoveRightIcon, MoveUpIcon,
    ParenthesesIcon, PlusIcon, SpaceIcon, XIcon
} from "lucide-react";

export enum KeyboardCharacterLayout {
    Qwerty = "qwerty",
    Qwertz = "qwertz",
    Azerty = "azerty"
}

export enum KeyboardPhysicalLayout {
    Ansi = "ansi",
    Iso = "iso",
}

export interface KeyConfig {
    code: string;
    primaryKey: string;
    shiftKey?: string;
    altKey?: string;
    Icon?: LucideIcon;
}

export const KEY_CONFIG: Record<string, KeyConfig> = {
    // meta keys
    Escape: {code: "Escape", primaryKey: "Escape"},
    Space: {code: "Space", primaryKey: "Space", Icon: SpaceIcon},
    ShiftLeft: {code: "ShiftLeft", primaryKey: "Shift", Icon: ArrowBigUpIcon},
    ShiftRight: {code: "ShiftRight", primaryKey: "Shift", Icon: ArrowBigUpIcon},
    ControlLeft: {code: "ControlLeft", primaryKey: "Control"},
    ControlRight: {code: "ControlRight", primaryKey: "Control"},
    AltLeft: {code: "AltLeft", primaryKey: "Alt"},
    AltRight: {code: "AltRight", primaryKey: "AltGr"},
    MetaLeft: {code: "MetaLeft", primaryKey: "Meta"},
    MetaRight: {code: "MetaRight", primaryKey: "Meta"},
    ContextMenu: {code: "ContextMenu", primaryKey: "ContextMenu", Icon: FileTextIcon},
    IntlBackslash: {code: "IntlBackslash", primaryKey: "<", shiftKey: ">", altKey: "|"},
    Fn: {code: "Fn", primaryKey: "Fn"},
    Backquote: {code: "Backquote", primaryKey: "^", shiftKey: "°"},
    Backslash: {code: "Backslash", primaryKey: "#", shiftKey: "'"},
    Equal: {code: "Equal", primaryKey: "´", shiftKey: "`"},
    Backspace: {code: "Backspace", primaryKey: "Backspace", Icon: ArrowLeftIcon},
    Tab: {code: "Tab", primaryKey: "Tab", Icon: ArrowRightLeftIcon},
    BracketLeft: {code: "BracketLeft", primaryKey: "Ü"},
    BracketRight: {code: "BracketRight", primaryKey: "+", shiftKey: "*", altKey: "~"},
    Enter: {code: "Enter", primaryKey: "Enter", Icon: CornerDownLeftIcon},
    CapsLock: {code: "CapsLock", primaryKey: "CapsLock", Icon: ArrowBigUpDashIcon},
    Semicolon: {code: "Semicolon", primaryKey: "Ö"},
    Quote: {code: "Quote", primaryKey: "Ä"},
    Comma: {code: "Comma", primaryKey: ",", shiftKey: ";"},
    Period: {code: "Period", primaryKey: ".", shiftKey: ":"},
    Slash: {code: "Slash", primaryKey: "-", shiftKey: "_"},
    Command: {code: "Command", primaryKey: "Command", Icon: CommandIcon},
    Minus: {code: "Minus", primaryKey: "ß", shiftKey: "?", altKey: "\\"},

    // function keys
    F1: {code: "F1", primaryKey: "F1"},
    F2: {code: "F2", primaryKey: "F2"},
    F3: {code: "F3", primaryKey: "F3"},
    F4: {code: "F4", primaryKey: "F4"},
    F5: {code: "F5", primaryKey: "F5"},
    F6: {code: "F6", primaryKey: "F6"},
    F7: {code: "F7", primaryKey: "F7"},
    F8: {code: "F8", primaryKey: "F8"},
    F9: {code: "F9", primaryKey: "F9"},
    F10: {code: "F10", primaryKey: "F10"},
    F11: {code: "F11", primaryKey: "F11"},
    F12: {code: "F12", primaryKey: "F12"},

    // extra function keys
    PrintScreen: {code: "PrintScreen", primaryKey: "PrintScreen"},
    ScrollLock: {code: "ScrollLock", primaryKey: "ScrollLock"},
    Pause: {code: "Pause", primaryKey: "Pause"},
    Insert: {code: "Insert", primaryKey: "Insert"},
    Delete: {code: "Delete", primaryKey: "Delete"},
    Home: {code: "Home", primaryKey: "Home"},
    End: {code: "End", primaryKey: "End"},
    PageUp: {code: "PageUp", primaryKey: "PageUp"},
    PageDown: {code: "PageDown", primaryKey: "PageDown"},

    // Navigation Keys
    ArrowUp: {code: "ArrowUp", primaryKey: "ArrowUp", Icon: MoveUpIcon},
    ArrowDown: {code: "ArrowDown", primaryKey: "ArrowDown", Icon: MoveDownIcon},
    ArrowLeft: {code: "ArrowLeft", primaryKey: "ArrowLeft", Icon: MoveLeftIcon},
    ArrowRight: {code: "ArrowRight", primaryKey: "ArrowRight", Icon: MoveRightIcon},

    // digits
    Digit1: {code: "Digit1", primaryKey: "1", shiftKey: "!"},
    Digit2: {code: "Digit2", primaryKey: "2", shiftKey: "\"", altKey: "²"},
    Digit3: {code: "Digit3", primaryKey: "3", shiftKey: "§", altKey: "³"},
    Digit4: {code: "Digit4", primaryKey: "4", shiftKey: "$"},
    Digit5: {code: "Digit5", primaryKey: "5", shiftKey: "%"},
    Digit6: {code: "Digit6", primaryKey: "6", shiftKey: "&"},
    Digit7: {code: "Digit7", primaryKey: "7", shiftKey: "/", altKey: "{"},
    Digit8: {code: "Digit8", primaryKey: "8", shiftKey: "(", altKey: "["},
    Digit9: {code: "Digit9", primaryKey: "9", shiftKey: ")", altKey: "]"},
    Digit0: {code: "Digit0", primaryKey: "0", shiftKey: "=", altKey: "}"},

    // letters
    KeyQ: {code: "KeyQ", primaryKey: "Q", altKey: "@"},
    KeyW: {code: "KeyW", primaryKey: "W"},
    KeyE: {code: "KeyE", primaryKey: "E", altKey: "€"},
    KeyR: {code: "KeyR", primaryKey: "R"},
    KeyT: {code: "KeyT", primaryKey: "T"},
    KeyY: {code: "KeyY", primaryKey: "Y"},
    KeyU: {code: "KeyU", primaryKey: "U"},
    KeyI: {code: "KeyI", primaryKey: "I"},
    KeyO: {code: "KeyO", primaryKey: "O"},
    KeyP: {code: "KeyP", primaryKey: "P"},
    KeyA: {code: "KeyA", primaryKey: "A"},
    KeyS: {code: "KeyS", primaryKey: "S"},
    KeyD: {code: "KeyD", primaryKey: "D"},
    KeyF: {code: "KeyF", primaryKey: "F"},
    KeyG: {code: "KeyG", primaryKey: "G"},
    KeyH: {code: "KeyH", primaryKey: "H"},
    KeyJ: {code: "KeyJ", primaryKey: "J"},
    KeyK: {code: "KeyK", primaryKey: "K"},
    KeyL: {code: "KeyL", primaryKey: "L"},
    KeyZ: {code: "KeyZ", primaryKey: "Z"},
    KeyX: {code: "KeyX", primaryKey: "X"},
    KeyC: {code: "KeyC", primaryKey: "C"},
    KeyV: {code: "KeyV", primaryKey: "V"},
    KeyB: {code: "KeyB", primaryKey: "B"},
    KeyN: {code: "KeyN", primaryKey: "N"},
    KeyM: {code: "KeyM", primaryKey: "M", altKey: "µ"},

    // numpad
    NumLock: {code: "NumLock", primaryKey: "NumLock"},
    Numpad0: {code: "Numpad0", primaryKey: "0"},
    Numpad1: {code: "Numpad1", primaryKey: "1"},
    Numpad2: {code: "Numpad2", primaryKey: "2"},
    Numpad3: {code: "Numpad3", primaryKey: "3"},
    Numpad4: {code: "Numpad4", primaryKey: "4"},
    Numpad5: {code: "Numpad5", primaryKey: "5"},
    Numpad6: {code: "Numpad6", primaryKey: "6"},
    Numpad7: {code: "Numpad7", primaryKey: "7"},
    Numpad8: {code: "Numpad8", primaryKey: "8"},
    Numpad9: {code: "Numpad9", primaryKey: "9"},
    NumpadDecimal: {code: "NumpadDecimal", primaryKey: ".", Icon: DotIcon},
    NumpadAdd: {code: "NumpadAdd", primaryKey: "+", Icon: PlusIcon},
    NumpadSubtract: {code: "NumpadSubtract", primaryKey: "-", Icon: MinusIcon},
    NumpadMultiply: {code: "NumpadMultiply", primaryKey: "*", Icon: XIcon},
    NumpadDivide: {code: "NumpadDivide", primaryKey: "/", Icon: DivideIcon},
    NumpadEnter: {code: "NumpadEnter", primaryKey: "Enter", Icon: CornerDownLeftIcon},
    NumpadEqual: {code: "NumpadEqual", primaryKey: "=", Icon: EqualIcon},
    NumpadComma: {code: "NumpadComma", primaryKey: ",", Icon: DotIcon},
    NumpadParenLeft: {code: "NumpadParenLeft", primaryKey: "(", Icon: ParenthesesIcon},
    NumpadParenRight: {code: "NumpadParenRight", primaryKey: ")", Icon: ParenthesesIcon},
    NumpadBackspace: {code: "NumpadBackspace", primaryKey: "Backspace", Icon: DeleteIcon},
    NumpadClear: {code: "NumpadClear", primaryKey: "Clear"},
    NumpadClearEntry: {code: "NumpadClearEntry", primaryKey: "Clear Entry"},
}






