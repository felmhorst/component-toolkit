"use client";

import React, {useEffect} from "react";
import styles from "./index.module.css";
import {
    KeyboardCharacterLayout, KeyboardPhysicalLayout,
} from "@/utility/keys";
import { KeyboardContextProvider} from "@/components/ui/Keyboard/KeyboardContext";
import {Key} from "@/components/ui/Keyboard/Key";
import {
    KEYBOARD_ALPHANUMERIC_QWERTZ,
    KEYBOARD_ARROW_KEYS,
    KEYBOARD_EDITING_KEYS, KEYBOARD_FUNCTION_KEYS,
    KEYBOARD_NUMPAD,
    KEYBOARD_SYSTEM_KEYS
} from "@/utility/keyboard/keyboard_layouts";
import {getAlphanumericKeyboardLayout} from "@/utility/keyboard/getAlphanumericKeyboardLayout";

interface KeyboardProps {
    visualizeEvents?: boolean;
    showNumpad?: boolean;
    showNavigationKeys?: boolean;
    showFunctionKeys?: boolean;
    characterLayout?: KeyboardCharacterLayout;
    physicalLayout?: KeyboardPhysicalLayout;
}

export const Keyboard: React.FC<KeyboardProps> = ({
    visualizeEvents = true,
    showNumpad = false,
    showNavigationKeys = false,
    showFunctionKeys = false,
    characterLayout = KeyboardCharacterLayout.Qwerty,
    physicalLayout = KeyboardPhysicalLayout.Ansi,
}) => {


    useEffect(() => {
        function getMatchingElements(keyCode: string) {
            return document.querySelectorAll<HTMLButtonElement>(`[data-keycode='${keyCode}']`)
        }

        function onKeyDown(e: KeyboardEvent) {
            console.log(e.code, e.key, e);
            getMatchingElements(e.code).forEach((element) => {
                element.dataset.active = "true";
            });
        }
        function onKeyUp(e: KeyboardEvent) {
            getMatchingElements(e.code).forEach((element) => {
                element.dataset.active = "false";
            });
        }

        if (visualizeEvents) {
            window.addEventListener("keydown", onKeyDown);
            window.addEventListener("keyup", onKeyUp);
        }
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("keyup", onKeyUp);
        }
    }, [visualizeEvents]);

    return (
        <KeyboardContextProvider>
            <div className={styles.keyboard}>
                {showFunctionKeys && <FunctionKeys/>}
                <AlphanumericKeys
                    physicalLayout={physicalLayout}
                    characterLayout={characterLayout}/>
                {showFunctionKeys && showNavigationKeys && <SystemKeys/>}
                {showNavigationKeys && <div className={styles.area_navigation}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%"
                    }}>
                        <EditingKeys/>
                        <ArrowKeys/>
                    </div>
                </div>}
                {showNumpad && <Numpad/>}
            </div>
        </KeyboardContextProvider>
    );
};

const FunctionKeys: React.FC = () => {
    return (
        <div className={styles.area_function}>
            {KEYBOARD_FUNCTION_KEYS.map((group, i) => (
                <div className={styles.row} key={i}>
                    {group.map((keyConfig) => (
                        <Key
                            key={keyConfig.code}
                            {...keyConfig}/>
                    ))}
                </div>
            ))}
        </div>
    )
};

type AlphanumericKeysProps = Required<Pick<KeyboardProps, "physicalLayout" | "characterLayout">>;

const AlphanumericKeys: React.FC<AlphanumericKeysProps> = ({physicalLayout, characterLayout}) => {
    const layout = getAlphanumericKeyboardLayout(characterLayout);
    return (
        <div className={styles.area_alphanumeric}>
            {layout.map((row, i) => (
                <div className={styles.row} key={i}>
                    {row.map((keyConfig) => (
                        <Key
                            key={keyConfig.code}
                            {...keyConfig}/>
                    ))}
                </div>
            ))}
        </div>
    )
};

const SystemKeys: React.FC = () => {
    return (
        <div className={styles.area_system}>
            <div className={styles.row}>
                {KEYBOARD_SYSTEM_KEYS.map((keyConfig) => (
                    <Key
                        key={keyConfig.code}
                        {...keyConfig}/>
                ))}
            </div>
        </div>
    )
}

const EditingKeys: React.FC = () => {
    return (
        <div className={styles.area_editing}>
            {KEYBOARD_EDITING_KEYS.map((keyConfig) => (
                <Key
                    key={keyConfig.code}
                    {...keyConfig}/>
            ))}
        </div>
    );
}

const ArrowKeys: React.FC = () => {
    return (
        <div className={styles.area_arrow}>
            {KEYBOARD_ARROW_KEYS.map((keyConfig) => (
                <Key
                    key={keyConfig.code}
                    {...keyConfig}/>
            ))}
        </div>
    );
}

const Numpad: React.FC = () => {
    return (
        <div className={styles.area_numpad}>
            {KEYBOARD_NUMPAD.map((keyConfig) => (
                <Key
                    key={keyConfig.code}
                    {...keyConfig}/>
            ))}
        </div>
    );
}