import React from "react";
import styles from "./Heading.module.css";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    tag?: HeadingTag;
}

export const Heading = ({
    children,
    tag = "h1",
                        }: HeadingProps) => {
    const Tag = tag;
    return (
        <Tag className={styles.heading}>
            {children}
        </Tag>
    )
};