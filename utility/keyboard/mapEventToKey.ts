import type {KeyboardCharacterLayout, KeyCode} from "@/utility/keyboard/keys.types";
import {KEY_MAPPING} from "@/utility/keyboard/characterMappings";


/*
* Maps a keyboard event to a key, based on the character mapping.
* Useful for finding out which dead key is pressed.
* */
export function mapEventToKey(e: KeyboardEvent, characterLayout: KeyboardCharacterLayout): string | undefined {
    const keyMapping = KEY_MAPPING[characterLayout];
    const keyConfig = keyMapping[e.code as KeyCode];
    if (e.shiftKey)
        return keyConfig.shiftKey;
    if (e.getModifierState("AltGraph"))
        return keyConfig.altGraphKey;
    return keyConfig.primaryKey;
}