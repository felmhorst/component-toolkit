import type { KeyCode, KeyboardCharacterLayout, KeyboardOs, KeyboardPhysicalLayout, KeyConfig} from "@/utility/keyboard/keys.types";
import {KEYBOARD_PHYSICAL_LAYOUTS} from "@/utility/keyboard/physicalLayouts";
import {KEY_MAPPING} from "@/utility/keyboard/characterMappings";
import {KEYBOARD_BOTTOM_ROW, KEYBOARD_KEY_LABELS_BY_OS} from "@/utility/keyboard/operatingSystems";


export function getAlphanumericKeyboardLayout(physicalLayout: KeyboardPhysicalLayout, os: KeyboardOs): KeyCode[][] {
    return [...KEYBOARD_PHYSICAL_LAYOUTS[physicalLayout], KEYBOARD_BOTTOM_ROW[os]];
}

export function mapKey(key: KeyCode, characterLayout: KeyboardCharacterLayout, os: KeyboardOs): KeyConfig {
    const baseConfig = KEY_MAPPING[characterLayout][key];
    const osLabelOverride = KEYBOARD_KEY_LABELS_BY_OS[os][key];
    return osLabelOverride ? {...baseConfig, ...osLabelOverride} : baseConfig;
}
