import styles from "./Button.module.css";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: "primary" | "secondary" | "danger" | "warning" | "success";
}

export const Button = (props: ButtonProps) => {
    const {
        children,
        className,
        theme = "primary",
        ...rest
    } = props;

    const themeClassName = styles[`button__theme-${theme}`];
    return (
        <button
            {...rest}
            className={`${styles.button} ${themeClassName} ${className}`}>
            {children}
        </button>
    );
};