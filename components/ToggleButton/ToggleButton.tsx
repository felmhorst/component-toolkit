"use client";

import React, {useEffect} from "react";
import {useToggleButtonGroup} from "@/components/ToggleButton/ToggleButtonGroupContext";
import styles from "./ToggleButtonGroup.module.css";

interface ToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
}

export const ToggleButton = (props: ToggleButtonProps) => {
    const {
        children,
        value,
        ...rest
    } = props;
    const {
        groupId,
        multiple,
        selected,
        focused,
        select,
        registerOption,
        unregisterOption,
    } = useToggleButtonGroup();

    useEffect(() => {
        registerOption(value);
        return () => unregisterOption(value);
    }, [value]);

    return (
        <button
            {...rest}
            id={`${groupId}-${value}`}
            className={styles.button}
            role={multiple ? "button" : "radio"}
            aria-pressed={multiple ? selected.includes(value) : undefined}
            aria-checked={multiple ? undefined : selected.includes(value)}
            tabIndex={focused === value ? 0 : -1}
            onClick={() => select(value)}>
            {children}
        </button>
    );
};