"use client";

import React, { useRef, useState } from 'react';
import { UploadCloud } from 'lucide-react';
import styles from './index.module.scss';
import { isFileTypeAccepted, toAcceptAttribute } from '@/utility';

export interface FileAreaProps {
    acceptedTypes?: string[];
    multiple?: boolean;
    onFilesChange?: (files: File[]) => void;
    className?: string;
}

export const FileArea = ({
    acceptedTypes = [],
    multiple = false,
    onFilesChange,
    className,
}: FileAreaProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dragCounterRef = useRef(0);
    const [isDragOver, setIsDragOver] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const processFiles = (fileList: FileList) => {
        let files = Array.from(fileList);
        if (!multiple) files = files.slice(0, 1);

        const invalidFiles = files.filter(f => !isFileTypeAccepted(f, acceptedTypes));
        if (invalidFiles.length > 0) {
            setError(`Invalid file type: ${invalidFiles.map(f => f.name).join(', ')}`);
            return;
        }

        setError(null);
        onFilesChange?.(files);
    };

    const handleDragEnter = (e: React.DragEvent) => {
        e.preventDefault();
        dragCounterRef.current++;
        setIsDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        dragCounterRef.current--;
        if (dragCounterRef.current === 0) setIsDragOver(false);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        dragCounterRef.current = 0;
        setIsDragOver(false);
        if (e.dataTransfer.files.length > 0) processFiles(e.dataTransfer.files);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) processFiles(e.target.files);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            inputRef.current?.click();
        }
    };

    const dropZoneClassName = [
        styles.dropZone,
        isDragOver ? styles.dragOver : '',
        error ? styles.hasError : '',
        className ?? '',
    ].join(' ');

    return (
        <div
            className={dropZoneClassName}
            role="button"
            tabIndex={0}
            aria-label="File drop zone"
            onClick={(e) => {
                if ((e.target as HTMLElement) === inputRef.current) return;
                inputRef.current?.click();
            }}
            onKeyDown={handleKeyDown}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <input
                ref={inputRef}
                type="file"
                className={styles.hiddenInput}
                accept={toAcceptAttribute(acceptedTypes)}
                multiple={multiple}
                onChange={handleInputChange}
                aria-hidden="true"
                tabIndex={-1}
            />
            <UploadCloud size={32} aria-hidden={true} className={styles.icon} />
            <span className={styles.instruction}>Drag & drop or click to select</span>
            {error && <span className={styles.error} role="alert">{error}</span>}
        </div>
    );
};
