import type {KeyConfig} from "@/utility/keyboard/keys.types";
import React, {useContext} from "react";
import {KeyboardContext} from "@/components/ui/Keyboard/KeyboardContext";
import styles from "@/components/ui/Keyboard/index.module.css";
import { motion } from "motion/react";
import type {Variants} from "motion";

type KeyProps = KeyConfig;

const KEY_VARIANTS: Variants = {
    initial: {scale: 0.5, opacity: 0},
    animate: { scale: 1, opacity: 1, transition: { ease: "easeOut", duration: .2}},
    exit: { opacity: 0},
};

export const Key: React.FC<KeyProps> = (props) => {
    const {code, Icon, shiftKey, altGraphKey, deadKeyVariants} = props;
    const {
        deadKey,
        isCtrlKeyPressed,
        isShiftKeyPressed,
        isAltKeyPressed,
        isAltGrKeyPressed,
        isMetaKeyPressed,
        isCapsLock,
        isNumLock,
        isScrollLock,
    } = useContext(KeyboardContext);

    const isLocked = (isCapsLock && code === "CapsLock")
        || (isNumLock && code === "NumLock")
        || (isScrollLock && code === "ScrollLock");

    const isDefaultChar = !isCtrlKeyPressed && !isShiftKeyPressed && !isAltKeyPressed && !isAltGrKeyPressed && !isMetaKeyPressed

    function getKeyOrDeadKey(key: "primaryKey" | "shiftKey" | "altGraphKey") {
        if (!deadKey)
            return props[key];
        return deadKeyVariants?.[deadKey]?.[key] ?? props[key];
    }

    return (
        <motion.button
            variants={KEY_VARIANTS}
            id={"key-" + code}
            data-keycode={code}
            data-active={false}
            data-locked={isLocked}
            disabled={isLocked}
            className={styles.key + " " + styles["key--type-" + code]}>
            <span
                className={styles.key__primary}
                data-highlight={isDefaultChar}>
                {Icon
                    ? <Icon size={16}/>
                    : getKeyOrDeadKey("primaryKey")}
            </span>
            {shiftKey && (
                <span
                    className={styles.key__shift}
                    data-highlight={isShiftKeyPressed}>
                    {getKeyOrDeadKey("shiftKey")}
                </span>
            )}
            {altGraphKey && (
                <span
                    className={styles.key__alt}
                    data-highlight={isAltGrKeyPressed}>
                    {getKeyOrDeadKey("altGraphKey")}
                </span>
            )}
        </motion.button>
    )
}