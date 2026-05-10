import { useId } from 'react';
import React from 'react';
import styles from './index.module.css';

interface FieldProps {
    label: string;
    isRequired?: boolean;
    hint?: string;
    error?: string;
    id?: string;
    children: React.ReactElement;
}

export const Field = ({ label, isRequired = false, hint, error, id: externalId, children }: FieldProps) => {
    const generatedId = useId();
    const id = externalId ?? generatedId;

    return (
        <div className={styles.container}>
            <label htmlFor={id} className={styles.label}>
                {label}
                {isRequired && <span aria-hidden="true" className={styles.required}>*</span>}
            </label>
            {React.cloneElement(children, { id })}
            {hint && <span className={styles.hint}>{hint}</span>}
            {error && <span className={styles.error} role="alert">{error}</span>}
        </div>
    );
};
