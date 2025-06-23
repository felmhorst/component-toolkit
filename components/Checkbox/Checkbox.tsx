import React from "react";
import styles from "./Checkbox.module.css";

export const Checkbox = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    const {
        className,
        ...rest
    } = props;

    return (
        <label className={`${styles.container} ${className}`}>
            <input
                {...rest}
                className={styles.input}
                type={'checkbox'}/>
            <div className={styles.checkbox}>
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
            </div>
        </label>
    );
};