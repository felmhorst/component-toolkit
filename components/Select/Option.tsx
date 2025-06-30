"use client";

import React, {PropsWithChildren, useCallback, useEffect, useRef} from "react";
import styles from "./Select.module.css";
import {useSelect} from "@/components/Select/SelectContext";
import {useHover} from "@/hooks/useHover";

interface OptionProps extends PropsWithChildren {
    value: string;
}

export const Option = (props: OptionProps) => {
    const {
        children,
        value,
        ...rest
    } = props;

    const {
        listboxId,
        selected,
        setSelected,
        hovered,
        setHovered,
        registerOption,
        unregisterOption
    } = useSelect();

    const ref = useRef<HTMLLIElement>(null!);

    const handleHoverStart = useCallback(() => {
        setHovered(value);
    }, [value]);

    useHover(ref, {
        onHoverStart: handleHoverStart
    });

    useEffect(() => {
        registerOption(value);
        return () => unregisterOption(value);
    }, [value]);

    return (
        <li
            {...rest}
            ref={ref}
            className={styles.option}
            id={`${listboxId}-${value}`}
            role={"option"}
            aria-selected={value === selected}
            data-hovered={value === hovered}
            onMouseDown={() => setSelected(value)}>
            {children}
        </li>
    );
};