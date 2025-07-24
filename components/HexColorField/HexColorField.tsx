
import styles from "./HexColorField.module.css";
import React from "react";

interface HexColorFieldProps extends React.InputHTMLAttributes<HTMLInputElement>{

}

export const HexColorField = (props: HexColorFieldProps) => {
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