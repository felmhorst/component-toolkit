import React from "react";
import styles from "./index.module.css";

export const TextField = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    const {className, ...rest} = props;
    return (
        <input
            {...rest}
            className={`${styles.field} ${className}`}
            type={'text'}/>
    );
};