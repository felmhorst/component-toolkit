import { useId } from 'react';
import React from "react";
import styles from "./index.module.css";

export const Checkbox = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    const {
        className,
        id: externalId,
        ...rest
    } = props;

    const generatedId = useId();
    const id = externalId ?? generatedId;

    return (
        <span className={`${styles.container} ${className}`}>
            <input
                {...rest}
                id={id}
                className={styles.input}
                type={'checkbox'}/>
            <label htmlFor={id} className={styles.checkbox}>
                <span className={styles.checkmark}>
                    <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        strokeWidth={1.5}
                        stroke={"#ffffff"}
                        aria-hidden="true">
                        <polyline points="3.5 10 8.5 15 16.5 5" />
                    </svg>
                </span>
            </label>
        </span>
    );
};
