import styles from "./HueSlider.module.css";
import React from "react";

interface HueSliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
    orientation?: 'horizontal' | 'vertical';
}

export const HueSlider = (props: HueSliderProps) => {
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
            max={360}
            step={1}
            aria-orientation={orientation as "horizontal" | "vertical"}
            orient={orientation}
        />
    );
};