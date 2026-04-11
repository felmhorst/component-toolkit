import styles from "./DotGridBackground.module.css";
import React from "react";

interface GridBackgroundProps extends React.ComponentProps<'div'> {
}
export const DotGridBackground = ({ className = "", ...props }: GridBackgroundProps ) => {
    return (
        <div
            {...props}
            className={`${styles.grid} ${className}`}/>
    );
};