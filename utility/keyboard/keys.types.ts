import {type LucideIcon} from "lucide-react";

export enum KeyboardCharacterLayout {
    Qwerty = "qwerty",
    Qwertz = "qwertz",
    Azerty = "azerty"
}

export enum KeyboardPhysicalLayout {
    Ansi = "ansi",
    Iso = "iso",
}

interface DeadKeyOutput {
    primaryKey: string;
    shiftKey?: string;
    altGraphKey?: string;
}

export interface KeyConfig {
    code: string;
    primaryKey: string;
    shiftKey?: string;
    altGraphKey?: string;
    Icon?: LucideIcon;
    deadKeyVariants?: Record<string,DeadKeyOutput>;
    // todo: NumLock, Capslock,  deadKeys (´`^~"° & cedilla)
    // todo: Ctrl, Fn for function keys
}


export enum KeyCode {
    // letters
    KeyA = "KeyA",
    KeyB = "KeyB",
    KeyC = "KeyC",
    KeyD = "KeyD",
    KeyE = "KeyE",
    KeyF = "KeyF",
    KeyG = "KeyG",
    KeyH = "KeyH",
    KeyI = "KeyI",
    KeyJ = "KeyJ",
    KeyK = "KeyK",
    KeyL = "KeyL",
    KeyM = "KeyM",
    KeyN = "KeyN",
    KeyO = "KeyO",
    KeyP = "KeyP",
    KeyQ = "KeyQ",
    KeyR = "KeyR",
    KeyS = "KeyS",
    KeyT = "KeyT",
    KeyU = "KeyU",
    KeyV = "KeyV",
    KeyW = "KeyW",
    KeyX = "KeyX",
    KeyY = "KeyY",
    KeyZ = "KeyZ",

    // digits
    Digit0 = "Digit0",
    Digit1 = "Digit1",
    Digit2 = "Digit2",
    Digit3 = "Digit3",
    Digit4 = "Digit4",
    Digit5 = "Digit5",
    Digit6 = "Digit6",
    Digit7 = "Digit7",
    Digit8 = "Digit8",
    Digit9 = "Digit9",

    // function keys
    F1 = "F1",
    F2 = "F2",
    F3 = "F3",
    F4 = "F4",
    F5 = "F5",
    F6 = "F6",
    F7 = "F7",
    F8 = "F8",
    F9 = "F9",
    F10 = "F10",
    F11 = "F11",
    F12 = "F12",
    F13 = "F13",
    F14 = "F14",
    F15 = "F15",
    F16 = "F16",
    F17 = "F17",
    F18 = "F18",
    F19 = "F19",
    F20 = "F20",
    F21 = "F21",
    F22 = "F22",
    F23 = "F23",
    F24 = "F24",

    // meta keys
    Escape = "Escape",
    Space = "Space",
    ShiftLeft = "ShiftLeft",
    ShiftRight = "ShiftRight",
    ControlLeft = "ControlLeft",
    ControlRight = "ControlRight",
    AltLeft = "AltLeft",
    AltRight = "AltRight",
    MetaLeft = "MetaLeft",
    MetaRight = "MetaRight",
    ContextMenu = "ContextMenu",
    IntlBackslash = "IntlBackslash",
    Fn = "Fn",
    Backquote = "Backquote",
    Backslash = "Backslash",
    Equal = "Equal",
    Backspace = "Backspace",
    Tab = "Tab",
    BracketLeft = "BracketLeft",
    BracketRight = "BracketRight",
    Enter = "Enter",
    CapsLock = "CapsLock",
    Semicolon = "Semicolon",
    Quote = "Quote",
    Comma = "Comma",
    Period = "Period",
    Slash = "Slash",
    Command = "Command",
    Minus = "Minus",

    // extra function keys
    PrintScreen = "PrintScreen",
    ScrollLock = "ScrollLock",
    Pause = "Pause",
    Insert = "Insert",
    Delete = "Delete",
    Home = "Home",
    End = "End",
    PageUp = "PageUp",
    PageDown = "PageDown",

    // navigation keys
    ArrowUp = "ArrowUp",
    ArrowDown = "ArrowDown",
    ArrowLeft = "ArrowLeft",
    ArrowRight = "ArrowRight",

    // numpad
    NumLock = "NumLock",
    Numpad0 = "Numpad0",
    Numpad1 = "Numpad1",
    Numpad2 = "Numpad2",
    Numpad3 = "Numpad3",
    Numpad4 = "Numpad4",
    Numpad5 = "Numpad5",
    Numpad6 = "Numpad6",
    Numpad7 = "Numpad7",
    Numpad8 = "Numpad8",
    Numpad9 = "Numpad9",
    NumpadDecimal = "NumpadDecimal",
    NumpadAdd = "NumpadAdd",
    NumpadSubtract = "NumpadSubtract",
    NumpadMultiply = "NumpadMultiply",
    NumpadDivide = "NumpadDivide",
    NumpadEnter = "NumpadEnter",
    NumpadEqual = "NumpadEqual",
    NumpadComma = "NumpadComma",
    NumpadParenLeft = "NumpadParenLeft",
    NumpadParenRight = "NumpadParenRight",
    NumpadBackspace = "NumpadBackspace",
    NumpadClear = "NumpadClear",
    NumpadClearEntry = "NumpadClearEntry",

    // international / IME keys
    IntlRo = "IntlRo",
    IntlYen = "IntlYen",
    Convert = "Convert",
    NonConvert = "NonConvert",
    KanaMode = "KanaMode",
    Lang1 = "Lang1",
    Lang2 = "Lang2",
    Lang3 = "Lang3",
    Lang4 = "Lang4",
    Lang5 = "Lang5",

    // system / power keys
    Power = "Power",
    Sleep = "Sleep",
    WakeUp = "WakeUp",
    Eject = "Eject",
    Help = "Help",

    // legacy editing keys
    Again = "Again",
    Undo = "Undo",
    Cut = "Cut",
    Copy = "Copy",
    Paste = "Paste",
    Find = "Find",
    Open = "Open",
    Props = "Props",
    Select = "Select",

    // media keys
    MediaPlayPause = "MediaPlayPause",
    MediaStop = "MediaStop",
    MediaTrackNext = "MediaTrackNext",
    MediaTrackPrevious = "MediaTrackPrevious",
    MediaSelect = "MediaSelect",
    LaunchMediaPlayer = "LaunchMediaPlayer",
    AudioVolumeUp = "AudioVolumeUp",
    AudioVolumeDown = "AudioVolumeDown",
    AudioVolumeMute = "AudioVolumeMute",

    // browser / app launch keys
    BrowserBack = "BrowserBack",
    BrowserForward = "BrowserForward",
    BrowserRefresh = "BrowserRefresh",
    BrowserStop = "BrowserStop",
    BrowserSearch = "BrowserSearch",
    BrowserFavorites = "BrowserFavorites",
    BrowserHome = "BrowserHome",
    LaunchApp1 = "LaunchApp1",
    LaunchApp2 = "LaunchApp2",
    LaunchMail = "LaunchMail",
}