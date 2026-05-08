"use client";

import styles from "./index.module.css";
import { X } from "lucide-react";
import React, { useCallback, useEffect, useId, useRef } from "react";

const FOCUSABLE_SELECTOR =
    '[tabindex]:not([tabindex="-1"]), input:not([disabled]), button:not([disabled])';

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    "aria-label"?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
}

export const Dialog = (props: DialogProps) => {
    const {
        isOpen,
        onClose,
        title,
        "aria-label": ariaLabel,
        children,
        footer,
    } = props;

    const dialogRef = useRef<HTMLDialogElement>(null!);
    const openerRef = useRef<Element | null>(null);
    const titleId = useId();

    useEffect(() => {
        const dialog = dialogRef.current;
        if (isOpen) {
            openerRef.current = document.activeElement;
            dialog.showModal();
            requestAnimationFrame(() => {
                dialog.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)?.focus();
            });
        }
    }, [isOpen]);

    useEffect(() => {
        const dialog = dialogRef.current;
        const handleCancel = (e: Event) => {
            e.preventDefault();
            onClose();
        };
        dialog.addEventListener("cancel", handleCancel);
        return () => dialog.removeEventListener("cancel", handleCancel);
    }, [onClose]);

    const handleClose = useCallback(() => {
        dialogRef.current.close();
        onClose();
        if (openerRef.current instanceof HTMLElement) openerRef.current.focus();
        openerRef.current = null;
    }, [onClose]);

    const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDialogElement>) => {
        if (e.target === dialogRef.current) handleClose();
    }, [handleClose]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDialogElement>) => {
        if (e.key !== "Tab") return;
        const focusable = Array.from(
            dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }, []);

    return (
        <dialog
            ref={dialogRef}
            className={styles.dialog}
            aria-label={title ? undefined : ariaLabel}
            aria-labelledby={title ? titleId : undefined}
            aria-modal="true"
            onClick={handleBackdropClick}
            onKeyDown={handleKeyDown}>
            <div className={styles.panel}>
                <header className={styles.header}>
                    {title && <h2 id={titleId} className={styles.title}>{title}</h2>}
                    <button
                        className={styles.closeButton}
                        onClick={handleClose}
                        aria-label="Close dialog">
                        <X size={18} />
                    </button>
                </header>
                <div className={styles.body}>
                    {children}
                </div>
                {footer && (
                    <footer className={styles.footer}>
                        {footer}
                    </footer>
                )}
            </div>
        </dialog>
    );
};
