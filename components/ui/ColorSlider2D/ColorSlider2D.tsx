"use client";

import styles from "./ColorSlider2D.module.css";
import {useEffect, useRef, useState} from "react";
import {clamp} from "@/utility/clamp";

interface ColorSlider2DProps {
    hue?: number;
}

export const ColorSlider2D = (props) => {
    const {
        hue = 0,
    } = props;
    const areaRef = useRef<HTMLDivElement>(null!);
    const handleRef = useRef<HTMLDivElement>(null!);
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const hsl = `hsl(${hue} 100% 50%)`;

    useEffect(() => {
        const area = areaRef.current;
        const handle = handleRef.current;
        if (!handle || !area) return;

        const updateHandlePosition = (e: MouseEvent) => {
            const boundingRect = area?.getBoundingClientRect();
            const pos = {
                x: clamp(e.clientX - boundingRect.x, 0, boundingRect.width),
                y: clamp(e.clientY - boundingRect.y, 0, boundingRect.height),
            };
            handle.style.left = `${pos.x}px`;
            handle.style.top = `${pos.y}px`;
        };
        const drag = (e: MouseEvent) => {
            if (isDragging) updateHandlePosition(e);
        }
        const startDragging = (e: MouseEvent) => {
            updateHandlePosition(e);
            setIsDragging(true);
        };
        const stopDragging = () => {
            setIsDragging(false);
        };
        area?.addEventListener('mousedown', startDragging);
        window.addEventListener('mousemove', drag);
        window.addEventListener('mouseup', stopDragging)
        return () => {
            area?.removeEventListener('mousedown', startDragging);
            window.removeEventListener('mousemove', drag);
            window.removeEventListener('mouseup', stopDragging);
        }
    }, [isDragging]);

    // todo: role, aria-roledescription, aria-valuetext
    // todo: ArrowsKeys, Shift + ArrowKeys, PageUp/Down, Start/End

    return (
        <div
            ref={areaRef}
            className={styles.area}
            style={{backgroundColor: hsl}}>
            <div
                ref={handleRef}
                className={styles.handle}/>
        </div>
    );
};