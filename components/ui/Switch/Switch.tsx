import styles from "./Switch.module.css";
import React from "react";

export const Switch = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
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
            <div className={styles.switch}>
                <span className={styles.slider}/>
            </div>
        </label>
    );
};