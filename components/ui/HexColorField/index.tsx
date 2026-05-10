
import styles from "./index.module.css";
import React from "react";

export const HexColorField: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    const {
        className,
        ...rest
    } = props;

    return (
        <input
            {...rest}
            className={`${styles.field} ${className}`}
            type={"text"}
            autoCorrect={"off"}
            autoComplete={"off"}
            pattern={"#[0-9a-fA-F]{6}"}/>
    );
};