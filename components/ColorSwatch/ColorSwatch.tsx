import styles from "./ColorSwatch.module.css";
import React from "react";

interface ColorSwatch extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: "string";
}

export const ColorSwatch = (props: ColorSwatch) => {
    const {
        color,
        ...rest
    } = props;

    return (
        <button
            {...rest}
            className={styles.button}
            style={{backgroundColor: color}}/>
    );
};