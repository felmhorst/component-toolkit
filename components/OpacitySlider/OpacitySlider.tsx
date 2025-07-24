import styles from "./OpacitySlider.module.css";
import React from "react";

interface OpacitySliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
    orientation?: 'horizontal' | 'vertical';
}

export const OpacitySlider = (props: OpacitySliderProps) => {
    const {
        orientation = 'vertical',
        className,
        ...rest
    } = props;

    return (
        <input
            {...rest}
            className={`${styles.slider} ${styles[`slider__orientation_${orientation}`]} ${className}`}
            type={'range'}
            min={0}
            max={100}
            step={1}
            aria-orientation={orientation as "horizontal" | "vertical"}
            orient={orientation}
        />
    );
};