"use client";

import styles from "./ColorPickerPopover.module.css";
import {ColorSlider2D} from "@/components/ui/ColorSlider2D/ColorSlider2D";
import {HueSlider} from "@/components/ui/HueSlider/HueSlider";
import {OpacitySlider} from "@/components/ui/OpacitySlider/OpacitySlider";
import {forwardRef, useCallback, useImperativeHandle, useRef, useState} from "react";

interface ColorPickerPopoverProps {

}

export interface ColorPickerPopoverHandle {
    isOpen: boolean;
    open: (x: number, y: number) => void;
    close: () => void;
}

export const ColorPickerPopover = forwardRef<ColorPickerPopoverHandle, ColorPickerPopoverProps>((props, ref) => {
    const {} = props;
    const dialogRef = useRef<HTMLDialogElement>(null!);
    const [hue, setHue] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [position, setPosition] = useState<{x: number, y: number}>({x: 0, y: 0})

    const open = useCallback((x: number, y: number) => {
        dialogRef.current.show();
        setIsOpen(true);
        setPosition({x, y});
    }, []);

    const close = useCallback(() => {
        dialogRef.current.close();
        setIsOpen(false);
    }, []);

    useImperativeHandle(ref, () => ({
        isOpen,
        open,
        close
    }), [isOpen]);

    return (
        <div
            className={styles.target}
            style={{left: `${position.x}px`, top: `${position.y}px`}}>
            <dialog
                ref={dialogRef}
                className={styles.popover}>
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