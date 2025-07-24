"use client";

import styles from "./ColorPickerPopover.module.css";
import {ColorSlider2D} from "@/components/ColorSlider2D/ColorSlider2D";
import {HueSlider} from "@/components/HueSlider/HueSlider";
import {OpacitySlider} from "@/components/OpacitySlider/OpacitySlider";
import {forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState} from "react";

interface ColorPickerPopoverProps {

}

export interface ColorPickerPopoverHandle {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export const ColorPickerPopover = forwardRef<ColorPickerPopoverHandle, ColorPickerPopoverProps>((props, ref) => {
    const {} = props;
    const dialogRef = useRef<HTMLDialogElement>(null!);
    const [hue, setHue] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const open = useCallback(() => {
        dialogRef.current.show();
        setIsOpen(true);
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
    );
});