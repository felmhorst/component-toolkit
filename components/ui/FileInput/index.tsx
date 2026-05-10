"use client";

import React, { useRef, useState } from 'react';
import styles from './index.module.scss';
import { isFileTypeAccepted, toAcceptAttribute } from '@/utility';

export interface FileInputProps {
    acceptedTypes?: string[];
    multiple?: boolean;
    onFilesChange?: (files: File[]) => void;
    label?: string;
    disabled?: boolean;
    id?: string;
    className?: string;
}

export const FileInput = ({
    acceptedTypes = [],
    multiple = false,
    onFilesChange,
    label = 'Choose file',
    disabled = false,
    id,
    className,
}: FileInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [displayText, setDisplayText] = useState('No file chosen');
    const [error, setError] = useState<string | null>(null);

    const buildDisplayText = (files: File[]) => {
        if (files.length === 0) return 'No file chosen';
        if (files.length === 1) return files[0].name;
        return `${files.length} files selected`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        if (!fileList) return;

        const files = Array.from(fileList);
        const invalidFiles = files.filter(f => !isFileTypeAccepted(f, acceptedTypes));

        if (invalidFiles.length > 0) {
            setError(`Invalid file type: ${invalidFiles.map(f => f.name).join(', ')}`);
            return;
        }

        setError(null);
        setDisplayText(buildDisplayText(files));
        onFilesChange?.(files);
    };

    return (
        <div className={`${styles.wrapper} ${className ?? ''}`}>
            <input
                ref={inputRef}
                type="file"
                className={styles.hiddenInput}
                accept={toAcceptAttribute(acceptedTypes)}
                multiple={multiple}
                disabled={disabled}
                onChange={handleChange}
                aria-hidden="true"
                tabIndex={-1}
            />
            <button
                id={id}
                type="button"
                className={styles.triggerButton}
                onClick={() => inputRef.current?.click()}
                disabled={disabled}
            >
                {label}
            </button>
            <span className={styles.fileName} aria-live="polite">
                {displayText}
            </span>
            {error && (
                <span className={styles.error} role="alert">{error}</span>
            )}
        </div>
    );
};
