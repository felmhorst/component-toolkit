import React, { useState } from "react";
import styles from "./index.module.css";

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
    orientation?: 'horizontal' | 'vertical';
}

export const Slider = (props: SliderProps) => {
    const {
        orientation = 'horizontal',
        className,
        min = 0,
        max = 100,
        value,
        defaultValue,
        onChange,
        style,
        ...rest
    } = props;

    const resolvedMin = Number(min);
    const resolvedMax = Number(max);

    const [internalValue, setInternalValue] = useState(
        Number(defaultValue ?? (resolvedMin + resolvedMax) / 2)
    );

    const currentValue = value !== undefined ? Number(value) : internalValue;
    const fillPercent = ((currentValue - resolvedMin) / (resolvedMax - resolvedMin)) * 100;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (value === undefined) {
            setInternalValue(Number(e.target.value));
        }
        onChange?.(e);
    };

    return (
        <input
            {...rest}
            className={`${styles.slider} ${styles[`slider__orientation_${orientation}`]} ${className ?? ''}`}
            type="range"
            min={min}
            max={max}
            value={currentValue}
            onChange={handleChange}
            aria-orientation={orientation}
            style={{ '--fill': `${fillPercent}%`, ...style } as React.CSSProperties}
        />
    );
};
