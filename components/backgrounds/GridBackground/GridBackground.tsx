import styles from "./GridBackground.module.css";
import React from "react";

export const GridBackground: React.FC<React.ComponentProps<'div'>> = ({ className = "", ...props } ) => {
    return (
        <div
            {...props}
            className={`${styles.grid} ${className}`}/>
    );
};