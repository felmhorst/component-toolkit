import { motion } from "motion/react";
import React, {PropsWithChildren} from "react";
import {Direction} from "@/utility/types";
import {Variants} from "motion";

const getVariants = (direction: Direction): Variants => {
    const offset = 100;
    const offscreen = {
        left:  { x: -offset, y: 0 },
        right: { x:  offset, y: 0 },
        up:    { x: 0, y: -offset },
        down:  { x: 0, y:  offset },
    }[direction];

    return {
        initial: { ...offscreen, opacity: 0 },
        animate: { x: 0, y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut"} },
        exit: { ...offscreen, opacity: 0, transition: { duration: 0.3, ease: "easeIn" }}
    };
};

interface SlideProps extends PropsWithChildren {
    direction?: Direction;
}

export const Slide: React.FC<SlideProps> = ({
    children,
    direction = Direction.RIGHT,
}) => {
    const variants = getVariants(direction);

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit">
            {children}
        </motion.div>
    );
};