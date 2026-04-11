import styles from "./GridBackground.module.css";
import React from "react";

interface GridBackgroundProps extends React.ComponentProps<'div'> {
}
export const GridBackground = ({ className = "", ...props }: GridBackgroundProps ) => {
    return (
        <div
            {...props}
            className={`${styles.grid} ${className}`}/>
    );
};