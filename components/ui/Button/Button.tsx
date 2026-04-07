import styles from "./Button.module.css";
import React from "react";

export type ButtonColor = "primary" | "danger" | "warning" | "success";
export type ButtonTheme = "primary" | "secondary";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    color?: ButtonColor;
    theme?: ButtonTheme;
}

export const Button = (props: ButtonProps) => {
    const {
        label,
        color = "primary",
        theme = "primary",
        className,
        ...rest
    } = props;

    const colorClassName = styles[`button__color-${color}`];
    const themeClassName = styles[`button__theme-${theme}`];
    return (
        <button
            {...rest}
            className={`${styles.button} ${colorClassName} ${themeClassName} ${className}`}>
            {label}
        </button>
    );
};