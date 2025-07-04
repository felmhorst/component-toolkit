"use client";

import React, {PropsWithChildren, useCallback, useId, useState} from "react";
import {ToggleButtonGroupContext} from "@/components/ToggleButton/ToggleButtonGroupContext";
import styles from "./ToggleButtonGroup.module.css";

interface ToggleButtonGroupProps extends PropsWithChildren {
    disabled?: boolean;
    multiple?: boolean;
}

export const ToggleButtonGroup = (props: ToggleButtonGroupProps) => {
    const {
        children,
        disabled = false,
        multiple = false,
        ...rest
    } = props;

    const [options, setOptions] = useState<string[]>([]);
    const [selected, setSelected] = useState<string[]>([]);
    const [focused, setFocused] = useState<string|null>(null);
    const groupId = useId();

    const registerOption = useCallback((value: string) => {
        setOptions(prev => [...prev, value]);
        setFocused(prev => (prev ?? value));
    }, []);

    const unregisterOption = useCallback((value: string) => {
        setOptions(prev => prev.filter(option => option !== value));
        // todo: update selected & focused
    }, []);

    const select = useCallback((value: string) => {
        if (disabled)
            return;
        setFocused(value);

        if (!multiple)
            setSelected([value]);
        else
            setSelected(prev => {
                if (prev.includes(value))
                    return prev.filter(v => v !== value);
                else
                    return [...prev, value];
            });
    }, [multiple, disabled]);

    const focus = useCallback((value: string) => {
        const id = `${groupId}-${value}`;
        const element = document.getElementById(id);
        setFocused(value);
        element.focus();
    }, [groupId]);

    const handleKeyDown = (e) => {
        const hoveredIndex = options.findIndex((option) => option === focused);

        if (["Enter", " "].includes(e.key)) {
            if (!focused)
                return;
            e.preventDefault();
            select(focused);
        }
        else if (["Home"].includes(e.key))
            focus(options[0]);
        else if (["End"].includes(e.key))
            focus(options[options.length - 1]);
        else if (["ArrowLeft"].includes(e.key))
            focus(options[Math.max(0, hoveredIndex - 1)]);
        else if (["ArrowRight"].includes(e.key))
            focus(options[Math.min(options.length - 1, hoveredIndex + 1)]);
    }

    // todo: redundant option value warning
    // todo: correct tab

    return (
        <ToggleButtonGroupContext.Provider value={{
            groupId,
            multiple,
            focused,
            selected,
            select,
            registerOption,
            unregisterOption,
        }}>
            <div
                {...rest}
                id={groupId}
                className={styles.container}
                role={multiple ? "toolbar" : "radiogroup"}
                aria-disabled={disabled}
                aria-orientation={"horizontal"}
                onKeyDown={handleKeyDown}>
                {children}
            </div>
        </ToggleButtonGroupContext.Provider>
    );
};