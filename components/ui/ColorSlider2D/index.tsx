"use client";

import styles from "./index.module.css";
import {useEffect, useRef, useState} from "react";
import {clamp} from "@/utility/clamp";

interface ColorSlider2DProps {
    hue?: number;
}

export const ColorSlider2D = (props: ColorSlider2DProps) => {
    const {
        hue = 0,
    } = props;
    const areaRef = useRef<HTMLDivElement>(null!);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [saturation, setSaturation] = useState<number>(0);
    const [brightness, setBrightness] = useState<number>(100);

    const hsl = `hsl(${hue} 100% 50%)`;

    const updateFromMouseEvent = (e: MouseEvent) => {
        const rect = areaRef.current.getBoundingClientRect();
        setSaturation(Math.round(clamp((e.clientX - rect.x) / rect.width, 0, 1) * 100));
        setBrightness(Math.round((1 - clamp((e.clientY - rect.y) / rect.height, 0, 1)) * 100));
    };

    useEffect(() => {
        const area = areaRef.current;
        if (!area) return;

        const drag = (e: MouseEvent) => {
            if (isDragging) updateFromMouseEvent(e);
        };
        const startDragging = (e: MouseEvent) => {
            updateFromMouseEvent(e);
            setIsDragging(true);
        };
        const stopDragging = () => {
            setIsDragging(false);
        };
        area.addEventListener('mousedown', startDragging);
        window.addEventListener('mousemove', drag);
        window.addEventListener('mouseup', stopDragging);
        return () => {
            area.removeEventListener('mousedown', startDragging);
            window.removeEventListener('mousemove', drag);
            window.removeEventListener('mouseup', stopDragging);
        };
    }, [isDragging]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const step = e.shiftKey ? 10 : 1;
        let s = saturation, b = brightness;
        switch (e.key) {
            case 'ArrowRight': s = clamp(s + step, 0, 100); break;
            case 'ArrowLeft':  s = clamp(s - step, 0, 100); break;
            case 'ArrowUp':    b = clamp(b + step, 0, 100); break;
            case 'ArrowDown':  b = clamp(b - step, 0, 100); break;
            case 'Home':       s = 0;   break;
            case 'End':        s = 100; break;
            case 'PageUp':     b = 100; break;
            case 'PageDown':   b = 0;   break;
            default: return;
        }
        e.preventDefault();
        setSaturation(s);
        setBrightness(b);
    };

    return (
        <div
            ref={areaRef}
            className={styles.area}
            style={{backgroundColor: hsl}}
            tabIndex={0}
            role="application"
            aria-label="Color area"
            aria-valuetext={`Saturation ${saturation}%, Brightness ${brightness}%`}
            onKeyDown={handleKeyDown}>
            <div
                className={styles.handle}
                style={{
                    left: `${saturation}%`,
                    top: `${100 - brightness}%`,
                }}/>
        </div>
    );
};
