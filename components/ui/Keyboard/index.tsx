"use client";

import React, {useContext, useEffect} from "react";
import styles from "./index.module.css";
import {
    KeyboardCharacterLayout, KeyboardPhysicalLayout, KeyCode, type KeyConfig,
} from "@/utility/keyboard/keys.types";
import {KeyboardContext, KeyboardContextProvider} from "@/components/ui/Keyboard/KeyboardContext";
import {Key} from "@/components/ui/Keyboard/Key";
import {
    KEYBOARD_ARROW_KEYS,
    KEYBOARD_EDITING_KEYS, KEYBOARD_FUNCTION_KEYS,
    KEYBOARD_NUMPAD,
    KEYBOARD_SYSTEM_KEYS
} from "@/utility/keyboard/physicalLayouts";
import {getAlphanumericKeyboardLayout, mapKey} from "@/utility/keyboard/getAlphanumericKeyboardLayout";
import { motion, stagger } from "motion/react";

interface KeyboardProps {
    visualizeEvents?: boolean;
    showNumpad?: boolean;
    showNavigationKeys?: boolean;
    showFunctionKeys?: boolean;
    characterLayout?: KeyboardCharacterLayout;
    physicalLayout?: KeyboardPhysicalLayout;
}

const KEYBOARD_VARIANTS = {
    initial: {},
    animate: { transition: { delayChildren: stagger(0.08) }},
    exit: {},
}

const KEY_ROW_VARIANTS = {
    initial: {},
    animate: { transition: { delayChildren: stagger(0.02) }},
    exit: {},
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
            <motion.div
                variants={KEYBOARD_VARIANTS}
                initial="initial"
                animate="animate"
                exit="exit"
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
            </motion.div>
        </KeyboardContextProvider>
    );
};

const FunctionKeys: React.FC = () => {
    const {characterLayout} = useContext(KeyboardContext);
    const keys = KEYBOARD_FUNCTION_KEYS.map((group) => group.map((key) => mapKey(key, characterLayout)));
    return (
        <div className={styles.area_function}>
            {keys.map((group, i) => (
                <motion.div
                    variants={KEY_ROW_VARIANTS}
                    className={styles.row}
                    key={i}>
                    {group.map((keyConfig) => (
                        <Key
                            key={keyConfig.code}
                            {...keyConfig}/>
                    ))}
                </motion.div>
            ))}
        </div>
    )
};


type AlphanumericRowGroup =
    | { type: "row"; keys: KeyConfig[] }
    | { type: "iso-enter"; topRow: KeyConfig[]; homeRow: KeyConfig[] };

// On ISO keyboards, Enter is a notched key spanning the QWERTY row and the home row,
// so those two rows must be grouped and rendered together instead of independently.
function groupAlphanumericRows(rows: KeyConfig[][], physicalLayout: KeyboardPhysicalLayout): AlphanumericRowGroup[] {
    if (physicalLayout !== KeyboardPhysicalLayout.Iso) {
        return rows.map((keys) => ({type: "row", keys}));
    }
    const [digitsRow, topRow, homeRow, ...remainingRows] = rows;
    return [
        {type: "row", keys: digitsRow},
        {type: "iso-enter", topRow, homeRow},
        ...remainingRows.map((keys) => ({type: "row" as const, keys})),
    ];
}

const AlphanumericKeys: React.FC = () => {
    const {physicalLayout, characterLayout} = useContext(KeyboardContext);
    const keyCodes = getAlphanumericKeyboardLayout(physicalLayout);
    const rows = keyCodes.map((group) => group.map((key) => mapKey(key, characterLayout)));
    const rowGroups = groupAlphanumericRows(rows, physicalLayout);

    return (
        <div className={styles.area_alphanumeric}>
            {rowGroups.map((group, i) => group.type === "row"
                ? (
                    <motion.div
                        variants={KEY_ROW_VARIANTS}
                        className={styles.row}
                        key={"row-" + i}>
                        {group.keys.map((keyConfig) => (
                            <Key
                                key={keyConfig.code}
                                {...keyConfig}/>
                        ))}
                    </motion.div>
                ) : (
                    <IsoEnterRowGroup
                        key={i}
                        topRow={group.topRow}
                        homeRow={group.homeRow}/>
                ))}
        </div>
    )
};

const IsoEnterRowGroup: React.FC<{ topRow: KeyConfig[]; homeRow: KeyConfig[] }> = ({topRow, homeRow}) => {
    const enterKey = topRow.find((keyConfig) => keyConfig.code === KeyCode.Enter);
    const topRowWithoutEnter = topRow.filter((keyConfig) => keyConfig.code !== KeyCode.Enter);

    return (
        <div className={styles.iso_enter_group}>
            <motion.div variants={KEY_ROW_VARIANTS} className={styles.row}>
                {topRowWithoutEnter.map((keyConfig) => (
                    <Key key={keyConfig.code} {...keyConfig}/>
                ))}
            </motion.div>
            <motion.div variants={KEY_ROW_VARIANTS} className={styles.row}>
                {homeRow.map((keyConfig) => (
                    <Key key={keyConfig.code} {...keyConfig}/>
                ))}
            </motion.div>
            {enterKey && <Key {...enterKey}/>}
        </div>
    );
};

const SystemKeys: React.FC = () => {
    const {characterLayout} = useContext(KeyboardContext);
    const keys = KEYBOARD_SYSTEM_KEYS.map((key) => mapKey(key, characterLayout));
    return (
        <div className={styles.area_system}>
            <motion.div
                variants={KEY_ROW_VARIANTS}
                className={styles.row}>
                {keys.map((keyConfig) => (
                    <Key
                        key={keyConfig.code}
                        {...keyConfig}/>
                ))}
            </motion.div>
        </div>
    )
}

const EditingKeys: React.FC = () => {
    const {characterLayout} = useContext(KeyboardContext);
    const keys = KEYBOARD_EDITING_KEYS.map((key) => mapKey(key, characterLayout));
    return (
        <motion.div
            variants={KEY_ROW_VARIANTS}
            className={styles.area_editing}>
            {keys.map((keyConfig) => (
                <Key
                    key={keyConfig.code}
                    {...keyConfig}/>
            ))}
        </motion.div>
    );
}

const ArrowKeys: React.FC = () => {
    const {characterLayout} = useContext(KeyboardContext);
    const keys = KEYBOARD_ARROW_KEYS.map((key) => mapKey(key, characterLayout));
    return (
        <motion.div
            variants={KEY_ROW_VARIANTS}
            className={styles.area_arrow}>
            {keys.map((keyConfig) => (
                <Key
                    key={keyConfig.code}
                    {...keyConfig}/>
            ))}
        </motion.div>
    );
}

const Numpad: React.FC = () => {
    const {characterLayout} = useContext(KeyboardContext);
    const keys = KEYBOARD_NUMPAD.map((key) => mapKey(key, characterLayout));
    return (
        <motion.div
            variants={KEY_ROW_VARIANTS}
            className={styles.area_numpad}>
            {keys.map((keyConfig) => (
                <Key
                    key={keyConfig.code}
                    {...keyConfig}/>
            ))}
        </motion.div>
    );
}