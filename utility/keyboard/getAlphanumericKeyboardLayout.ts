import {type KeyboardCharacterLayout, type KeyConfig} from "@/utility/keys";
import {KEYBOARD_ALPHANUMERIC_KEYS} from "@/utility/keyboard/keyboard_layouts";


export function getAlphanumericKeyboardLayout(characterLayout: KeyboardCharacterLayout): KeyConfig[][] {
    return KEYBOARD_ALPHANUMERIC_KEYS[characterLayout];
}