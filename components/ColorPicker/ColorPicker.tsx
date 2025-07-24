"use client";

import {ColorPickerPopover, ColorPickerPopoverHandle} from "@/components/ColorPicker/ColorPickerPopover";
import {useRef} from "react";
import {ColorSwatch} from "@/components/ColorSwatch/ColorSwatch";


interface ColorPickerProps {
    value?: string;
}

export const ColorPicker = (props: ColorPickerProps) => {
    const {} = props;
    const ref = useRef<ColorPickerPopoverHandle>(null!);

    return (
        <>
            <ColorSwatch
                color={'#ff0000'}
                onClick={() => ref.current.isOpen
                    ? ref.current.close()
                    : ref.current.open()}/>
            <ColorPickerPopover
                ref={ref}/>
        </>
    );
};