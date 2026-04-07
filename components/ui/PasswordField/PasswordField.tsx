"use client";

import React, {useState} from "react";
import styles from "./PasswordField.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

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
                className={styles.visibilityButton}
                onClick={toggleVisibility}>
                <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye}/>
            </button>
        </div>
    );
};