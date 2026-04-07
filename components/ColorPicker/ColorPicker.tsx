"use client";

import {ColorPickerPopover, ColorPickerPopoverHandle} from "@/components/ColorPicker/ColorPickerPopover";
import {useCallback, useRef} from "react";
import {ColorSwatch} from "@/components/ColorSwatch/ColorSwatch";


interface ColorPickerProps {
    value?: string;
}

export const ColorPicker = (props: ColorPickerProps) => {
    const {
        value
    } = props;
    const swatchRef = useRef<HTMLButtonElement>(null!);
    const popoverRef = useRef<ColorPickerPopoverHandle>(null!);

    const openPopover = useCallback(() => {
        const swatchRect = swatchRef.current.getBoundingClientRect();
        const x = swatchRect.x + swatchRect.width / 2;
        const y = swatchRect.y;
        popoverRef.current.open(x, y);
    }, []);

    return (
        <div>
            <ColorSwatch
                ref={swatchRef}
                color={'#ff0000'}
                onClick={openPopover}/>
            <ColorPickerPopover
                ref={popoverRef}/>
        </div>
    );
};