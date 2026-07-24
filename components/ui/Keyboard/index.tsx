"use client";

import React, {useContext, useEffect} from "react";
import styles from "./index.module.css";
import {
    KeyboardCharacterLayout, KeyboardPhysicalLayout,
} from "@/utility/keyboard/keys";
import {KeyboardContext, KeyboardContextProvider} from "@/components/ui/Keyboard/KeyboardContext";
import {Key} from "@/components/ui/Keyboard/Key";
import {
    KEYBOARD_ARROW_KEYS,
    KEYBOARD_EDITING_KEYS, KEYBOARD_FUNCTION_KEYS,
    KEYBOARD_NUMPAD,
    KEYBOARD_SYSTEM_KEYS
} from "@/utility/keyboard/physicalLayouts";
import {getAlphanumericKeyboardLayout, mapKey} from "@/utility/keyboard/getAlphanumericKeyboardLayout";

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
        <KeyboardContextProvider
            physicalLayout={physicalLayout}
            characterLayout={characterLayout}>
            <div
                className={styles.keyboard}
                data-layout={physicalLayout}
                data-mapping={characterLayout}>
                {showFunctionKeys && <FunctionKeys/>}
                <AlphanumericKeys/>
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
    const {characterLayout} = useContext(KeyboardContext);
    const keys = KEYBOARD_FUNCTION_KEYS.map((group) => group.map((key) => mapKey(key, characterLayout)));
    return (
        <div className={styles.area_function}>
            {keys.map((group, i) => (
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


const AlphanumericKeys: React.FC = () => {
    const {physicalLayout, characterLayout} = useContext(KeyboardContext);
    const keyCodes = getAlphanumericKeyboardLayout(physicalLayout);
    const keys = keyCodes.map((group) => group.map((key) => mapKey(key, characterLayout)));

    return (
        <div className={styles.area_alphanumeric}>
            {keys.map((row, i) => (
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
    const {characterLayout} = useContext(KeyboardContext);
    const keys = KEYBOARD_SYSTEM_KEYS.map((key) => mapKey(key, characterLayout));
    return (
        <div className={styles.area_system}>
            <div className={styles.row}>
                {keys.map((keyConfig) => (
                    <Key
                        key={keyConfig.code}
                        {...keyConfig}/>
                ))}
            </div>
        </div>
    )
}

const EditingKeys: React.FC = () => {
    const {characterLayout} = useContext(KeyboardContext);
    const keys = KEYBOARD_EDITING_KEYS.map((key) => mapKey(key, characterLayout));
    return (
        <div className={styles.area_editing}>
            {keys.map((keyConfig) => (
                <Key
                    key={keyConfig.code}
                    {...keyConfig}/>
            ))}
        </div>
    );
}

const ArrowKeys: React.FC = () => {
    const {characterLayout} = useContext(KeyboardContext);
    const keys = KEYBOARD_ARROW_KEYS.map((key) => mapKey(key, characterLayout));
    return (
        <div className={styles.area_arrow}>
            {keys.map((keyConfig) => (
                <Key
                    key={keyConfig.code}
                    {...keyConfig}/>
            ))}
        </div>
    );
}

const Numpad: React.FC = () => {
    const {characterLayout} = useContext(KeyboardContext);
    const keys = KEYBOARD_NUMPAD.map((key) => mapKey(key, characterLayout));
    return (
        <div className={styles.area_numpad}>
            {keys.map((keyConfig) => (
                <Key
                    key={keyConfig.code}
                    {...keyConfig}/>
            ))}
        </div>
    );
}