"use client";

import styles from "./ColorSwatch.module.css";
import React, {forwardRef} from "react";

interface ColorSwatchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: "string";
}

export const ColorSwatch = forwardRef<HTMLButtonElement, ColorSwatchProps>((props, ref) => {
    const {
        color,
        ...rest
    } = props;

    return (
        <button
            {...rest}
            ref={ref}
            className={styles.button}
            style={{backgroundColor: color}}/>
    );
});