"use client";

import styles from "./ColorPickerPopover.module.css";
import {ColorSlider2D} from "@/components/ui/ColorSlider2D";
import {HueSlider} from "@/components/ui/HueSlider";
import {OpacitySlider} from "@/components/ui/OpacitySlider";
import React, {forwardRef, useCallback, useImperativeHandle, useRef, useState} from "react";

const FOCUSABLE_SELECTOR =
    '[tabindex]:not([tabindex="-1"]), input:not([disabled]), button:not([disabled])';

export interface ColorPickerPopoverHandle {
    isOpen: boolean;
    open: (x: number, y: number) => void;
    close: () => void;
}

export const ColorPickerPopover = forwardRef<ColorPickerPopoverHandle, object>(({}, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const openerRef = useRef<Element | null>(null);
    const [hue, setHue] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [position, setPosition] = useState<{x: number, y: number}>({x: 0, y: 0});

    const close = useCallback(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        dialog.close();
        setIsOpen(false);
        if (openerRef.current instanceof HTMLElement) openerRef.current.focus();
        openerRef.current = null;
    }, []);

    const open = useCallback((x: number, y: number) => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        openerRef.current = document.activeElement;
        dialog.show();
        setIsOpen(true);
        setPosition({x, y});
        requestAnimationFrame(() => {
            dialogRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)?.focus();
        });
    }, []);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDialogElement>) => {
        if (e.key === 'Escape') {
            e.preventDefault();
            close();
            return;
        }
        if (e.key === 'Tab') {
            const dialog = dialogRef.current;
            if (!dialog) return;
            const focusable = Array.from(
                dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
            );
            if (!focusable.length) return;
            const first = focusable[0], last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    }, [close]);

    useImperativeHandle(ref, () => ({
        isOpen,
        open,
        close
    }), [isOpen, open, close]);

    return (
        <div
            className={styles.target}
            style={{left: `${position.x}px`, top: `${position.y}px`}}>
            <dialog
                ref={dialogRef}
                className={styles.popover}
                aria-label="Color picker"
                onKeyDown={handleKeyDown}>
                <div className={styles.row}>
                    <ColorSlider2D
                        hue={hue}/>
                    <HueSlider
                        value={hue}
                        onChange={(e) => setHue(Number(e.target.value))}/>
                    <OpacitySlider/>
                </div>
            </dialog>
        </div>
    );
});

ColorPickerPopover.displayName = "ColorPickerPopover";