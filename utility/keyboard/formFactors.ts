import {type FormFactorConfig, KeyboardFormFactor} from "@/utility/keyboard/keys.types";

export const KEYBOARD_FORM_FACTORS: KeyboardFormFactor[] = [
    KeyboardFormFactor.FullSize,
    KeyboardFormFactor.Tenkeyless,
    KeyboardFormFactor.Percent60,
]

export const KEYBOARD_FORM_FACTOR_CONFIGS: Record<KeyboardFormFactor, FormFactorConfig> = {
    [KeyboardFormFactor.FullSize]: {
        showNumpad: true,
        showNavigationKeys: true,
        showFunctionKeys: true
    },
    [KeyboardFormFactor.Tenkeyless]: {
        showNumpad: false,
        showNavigationKeys: true,
        showFunctionKeys: true
    },
    [KeyboardFormFactor.Percent60]: {
        showNumpad: false,
        showNavigationKeys: false,
        showFunctionKeys: false
    }
};