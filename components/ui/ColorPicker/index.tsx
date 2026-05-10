"use client";

import type { ColorPickerPopoverHandle} from "@/components/ui/ColorPicker/ColorPickerPopover";
import {ColorPickerPopover} from "@/components/ui/ColorPicker/ColorPickerPopover";
import React, {useCallback, useRef} from "react";
import {ColorSwatch} from "@/components/ui/ColorSwatch";


interface ColorPickerProps {
    value?: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({}) => {
    const swatchRef = useRef<HTMLButtonElement>(null);
    const popoverRef = useRef<ColorPickerPopoverHandle>(null);

    const openPopover = useCallback(() => {
        const swatch = swatchRef.current;
        if (!swatch) return;
        const popover = popoverRef.current;
        if (!popover) return;
        const swatchRect = swatch.getBoundingClientRect();
        const x = swatchRect.x + swatchRect.width / 2;
        const y = swatchRect.y;
        popover.open(x, y);
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