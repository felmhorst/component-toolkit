import styles from "./DotGridBackground.module.css";
import React from "react";

export const DotGridBackground: React.FC<React.ComponentProps<'div'>> = ({ className = "", ...props } ) => {
    return (
        <div
            {...props}
            className={`${styles.grid} ${className}`}/>
    );
};