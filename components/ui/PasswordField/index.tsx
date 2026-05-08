"use client";

import React, {useState} from "react";
import styles from "./index.module.css";
import {Eye, EyeOff} from "lucide-react";

export const PasswordField = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    const {className, ...rest} = props;
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => {
        setIsVisible(prev => !prev);
    };

    return (
        <div className={styles.container}>
            <input
                {...rest}
                className={`${styles.field} ${className}`}
                type={isVisible ? 'text' : 'password'}/>
            <button
                type="button"
                className={styles.visibilityButton}
                aria-label={isVisible ? "Hide password" : "Show password"}
                onClick={toggleVisibility}>
                {isVisible ? <EyeOff aria-hidden={true}/> : <Eye aria-hidden={true}/>}
            </button>
        </div>
    );
};