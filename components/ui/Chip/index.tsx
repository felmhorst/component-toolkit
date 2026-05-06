import React from "react";
import styles from "./index.module.css";

export type ChipColor = "primary" | "danger" | "warning" | "success";

interface ChipProps {
    label: string;
    color?: ChipColor;
}

export const Chip: React.FC<ChipProps> = ({
    label,
    color = "primary",
}) => {

    const colorClassName = styles[`chip__color-${color}`];
    return (
        <span className={`${styles.chip} ${colorClassName}`}>{label}</span>
    );
}