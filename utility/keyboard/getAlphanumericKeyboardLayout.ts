import type { KeyCode, KeyboardCharacterLayout, KeyboardPhysicalLayout, KeyConfig} from "@/utility/keyboard/keys.types";
import {KEYBOARD_PHYSICAL_LAYOUTS} from "@/utility/keyboard/physicalLayouts";
import {KEY_MAPPING} from "@/utility/keyboard/characterMappings";


export function getAlphanumericKeyboardLayout(physicalLayout: KeyboardPhysicalLayout): KeyCode[][] {
    return KEYBOARD_PHYSICAL_LAYOUTS[physicalLayout];
}

export function mapKey(key: KeyCode, characterLayout: KeyboardCharacterLayout): KeyConfig {
    const mapping = KEY_MAPPING[characterLayout];
    return mapping[key];
}