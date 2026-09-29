import React from "react";
import {Select, Option} from "@/components/ui/Select";
import {Keyboard} from "@/components/ui/Keyboard";
import {
    KEYBOARD_CHARACTER_LAYOUTS, KEYBOARD_PHYSICAL_LAYOUTS,
    KeyboardCharacterLayout,
    KeyboardPhysicalLayout
} from "@/utility/keyboard/keys.types";

export const AutoDetectKeyboard: React.FC = () => {
    const [characterLayout, setCharacterLayout] = React.useState<KeyboardCharacterLayout>(KeyboardCharacterLayout.Qwerty);
    const [physicalLayout, setPhysicalLayout] = React.useState<KeyboardPhysicalLayout>(KeyboardPhysicalLayout.Ansi);



    return (
        <div>
            <Select
                id={"keyboard-character-layout"}
                value={characterLayout}
                onChange={(value) => setCharacterLayout(value as KeyboardCharacterLayout)}>
                {KEYBOARD_CHARACTER_LAYOUTS.map((layout) => (
                    <Option
                        key={layout}
                        value={layout}>{layout}</Option>
                ))}
            </Select>

            <Select
                id={"keyboard-physical-layout"}
                value={physicalLayout}
                onChange={(value) => setPhysicalLayout(value as KeyboardPhysicalLayout)}>
                {KEYBOARD_PHYSICAL_LAYOUTS.map((layout) => (
                    <Option
                        key={layout}
                        value={layout}>{layout}</Option>
                ))}
            </Select>

            <Keyboard
                characterLayout={characterLayout}
                physicalLayout={physicalLayout}/>
        </div>
    );
}