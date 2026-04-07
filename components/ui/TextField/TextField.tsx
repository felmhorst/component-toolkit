import React from "react";
import styles from "./TextField.module.css";

export const TextField = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    const {className, ...rest} = props;
    return (
        <input
            {...rest}
            className={`${styles.field} ${className}`}
            type={'text'}/>
    );
};