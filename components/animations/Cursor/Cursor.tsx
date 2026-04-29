"use client";

import styles from "./Cursor.module.css";
import {useLayoutEffect, useRef, useState} from "react";
import { motion } from "motion/react"
import {getClosestInteractiveParent} from "@/utility/getClosestInteractiveParent";
import {useMediaQuery} from "@/hooks/useMediaQuery";

export interface Vector2D {
    x: number;
    y: number;
}

export const Cursor = () => {
    const containerRef = useRef<HTMLDivElement>(null!);
    const interactiveElement = useRef<Element|null>(null);
    const isCoarsePointer = useMediaQuery('(pointer: coarse)');

    const [position, setPosition] = useState<Vector2D>({x: 0, y: 0});
    const [isHoveringInteractiveElement, setIsHoveringInteractiveElement] = useState<boolean>(false);
    const [isClicking, setIsClicking] = useState<boolean>(false);
    // const [isHidden, setIsHidden] = useState<boolean>(false);

    useLayoutEffect(() => {
        if (isCoarsePointer)
            return;
        const handleMousemove = (e: WindowEventMap['mousemove']) => {
            setPosition({x: e.clientX, y: e.clientY});
            const target = e.target;
            if (!(target instanceof Element))
                return;

            // const hideCursor = target.closest('.--hide-cursor');
            // setIsHidden(!!hideCursor);

            const closestInteractiveElement = getClosestInteractiveParent(target);
            setIsHoveringInteractiveElement(!!closestInteractiveElement);
            interactiveElement.current = closestInteractiveElement;
        };
        const handleMousedown = () => setIsClicking(true);
        const handleMouseup = () => setIsClicking(false);

        window.addEventListener('mousemove', handleMousemove);
        window.addEventListener('mousedown', handleMousedown);
        window.addEventListener('mouseup', handleMouseup);
        window.addEventListener('dragend', handleMouseup);
        return () => {
            window.removeEventListener('mousemove', handleMousemove);
            window.removeEventListener('mousedown', handleMousedown);
            window.removeEventListener('mouseup', handleMouseup);
            window.removeEventListener('dragend', handleMouseup);
        }
    }, [isCoarsePointer]);

    const targetBounds = interactiveElement.current?.getBoundingClientRect();
    const targetPosition = targetBounds ? {
        x: (targetBounds.x + (targetBounds.width * .5) + position.x) * .5,
        y: (targetBounds.y + (targetBounds.height * .5) + position.y) * .5
    } : {
        x: position.x,
        y: position.y
    };

    if (isCoarsePointer)
        return;
    return (
        <div
            className={styles.container}
            ref={containerRef}>
            <div
                className={styles.cursor_container}
                style={{transform: `translate(${position.x}px, ${position.y}px)`}}>
                <div className={styles.cursor_dot}/>
            </div>
            <motion.div
                className={styles.cursor_container}
                animate={targetPosition}
                transition={{type: 'spring', stiffness: 120, damping: 10, mass: .1}}>
                <div className={styles.cursor_outline
                    + (isHoveringInteractiveElement ? " " + styles.cursor_outline__interact : "")
                    + (isClicking ? " " + styles.cursor_outline__click : "")}/>
            </motion.div>
        </div>
    );
};