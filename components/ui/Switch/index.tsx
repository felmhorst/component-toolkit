import styles from "./index.module.css";
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
                type={'checkbox'}
                role="switch"/>
            <div className={styles.switch}>
                <span className={styles.slider}/>
            </div>
        </label>
    );
};