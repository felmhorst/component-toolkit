"use client";

import React, {useEffect, useRef} from "react";
import styles from "./TextArea.module.css";

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    autoresize?: boolean;
}

export const TextArea = (props: TextAreaProps) => {
    const {
        className,
        onInput,
        autoresize = true,
        ...rest} = props;
    const ref = useRef<HTMLTextAreaElement>(null!);

    function resize() {
        if (!autoresize)
            return;
        if (!ref.current)
            return;
        ref.current.style.height = "auto";
        ref.current.style.height = ref.current.scrollHeight + "px";
    }

    useEffect(resize, []);

    return (
        <textarea
            {...rest}
            ref={ref}
            className={`${styles.field} ${className}`}
            onInput={(e) => {
                resize();
                if (onInput)
                    onInput(e);
            }}/>
    );
};