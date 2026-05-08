import React from "react";
import type {LinkProps as NextLinkProps} from "next/link";
import NextLink from "next/link";
import styles from "./index.module.css";

export interface LinkProps extends NextLinkProps  {
    label: string;
    color: "neutral" | "primary";
}

export const Link: React.FC<LinkProps> = ({
    label,
    color = "neutral",
    ...props
}) => {

    const colorClassName = styles[`link__color-${color}`];
    return (
        <NextLink
            {...props}
            className={`${styles.link} ${colorClassName}`}>
            {label}
        </NextLink>
    );
};