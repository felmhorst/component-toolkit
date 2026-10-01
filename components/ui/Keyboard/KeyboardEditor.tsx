import React, {useState} from "react";
import {Select, Option} from "@/components/ui/Select";
import {Keyboard} from "@/components/ui/Keyboard";
import {
    KEYBOARD_CHARACTER_LAYOUTS, KEYBOARD_OPERATING_SYSTEMS, KEYBOARD_PHYSICAL_LAYOUTS,
    KeyboardCharacterLayout, KeyboardFormFactor,
    KeyboardOs, KeyboardPhysicalLayout
} from "@/utility/keyboard/keys.types";
import {KEYBOARD_FORM_FACTOR_CONFIGS, KEYBOARD_FORM_FACTORS} from "@/utility/keyboard/formFactors";

export const KeyboardEditor: React.FC = () => {
    const [characterLayout, setCharacterLayout] = useState<KeyboardCharacterLayout>(KeyboardCharacterLayout.Qwerty);
    const [physicalLayout, setPhysicalLayout] = useState<KeyboardPhysicalLayout>(KeyboardPhysicalLayout.Ansi);
    const [os, setOs] = useState<KeyboardOs>(KeyboardOs.Windows);
    const [formFactor, setFormFactor] = useState<KeyboardFormFactor>(KeyboardFormFactor.Percent60);
    const formFactorConfig = KEYBOARD_FORM_FACTOR_CONFIGS[formFactor];

    return (
        <div>
            <Select
                id={"keyboard-character-layout"}
                value={characterLayout}
                onChange={(value) => setCharacterLayout(value as KeyboardCharacterLayout)}>
                {KEYBOARD_CHARACTER_LAYOUTS.map((layout) => (
                    <Option
                        key={layout}
                        value={layout}>
                        {layout.toUpperCase()}
                    </Option>
                ))}
            </Select>

            <Select
                id={"keyboard-physical-layout"}
                value={physicalLayout}
                onChange={(value) => setPhysicalLayout(value as KeyboardPhysicalLayout)}>
                {KEYBOARD_PHYSICAL_LAYOUTS.map((layout) => (
                    <Option
                        key={layout}
                        value={layout}>
                        {layout.toUpperCase()}
                    </Option>
                ))}
            </Select>

            <Select
                id={"keyboard-os"}
                value={os}
                onChange={(value) => setOs(value as KeyboardOs)}>
                {KEYBOARD_OPERATING_SYSTEMS.map((os) => (
                    <Option
                        key={os}
                        value={os}>
                        {os.toUpperCase()}
                    </Option>
                ))}
            </Select>

            <Select
                id={"keyboard-form-factor"}
                value={formFactor}
                onChange={(value) => setFormFactor(value as KeyboardFormFactor)}>
                {KEYBOARD_FORM_FACTORS.map((formFactor) => (
                    <Option
                        key={formFactor}
                        value={formFactor}>
                        {formFactor}
                    </Option>
                ))}
            </Select>

            <Keyboard
                characterLayout={characterLayout}
                physicalLayout={physicalLayout}
                os={os}
                {...formFactorConfig}/>
        </div>
    );
}