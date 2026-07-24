import type {KeyConfig} from "@/utility/keyboard/keys";
import React, {useContext} from "react";
import {KeyboardContext} from "@/components/ui/Keyboard/KeyboardContext";
import styles from "@/components/ui/Keyboard/index.module.css";

type KeyProps = KeyConfig;

export const Key: React.FC<KeyProps> = (props) => {
    const {code, primaryKey, Icon, shiftKey, altKey} = props;
    const {
        isCtrlKeyPressed,
        isShiftKeyPressed,
        isAltKeyPressed,
        isMetaKeyPressed
    } = useContext(KeyboardContext);

    return (
        <button
            id={"key-" + code}
            data-keycode={code}
            data-active={false}
            className={styles.key + " " + styles["key--type-" + code]}>
            <span
                className={styles.key__primary}
                data-highlight={!isCtrlKeyPressed && !isShiftKeyPressed && !isAltKeyPressed && !isMetaKeyPressed}>
                {Icon
                    ? <Icon size={16}/>
                    : primaryKey}
            </span>
            {shiftKey && (
                <span
                    className={styles.key__shift}
                    data-highlight={isShiftKeyPressed}>
                    {shiftKey}
                </span>
            )}
            {altKey && (
                <span
                    className={styles.key__alt}
                    data-highlight={isAltKeyPressed}>
                    {altKey}
                </span>
            )}
        </button>
    )
}