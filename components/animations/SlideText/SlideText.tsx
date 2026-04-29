import { motion } from "motion/react";
import React from "react";
import {Direction} from "@/utility/types";
import {Slide} from "@/components/animations/Slide/Slide";
import styles from "./SlideText.module.css";

type TextSplit = "char" | "word" | "line";

interface SlideTextProps {
    direction?: Direction;
    text: string;
    split: TextSplit;
}

const getVariants = () => {
    return {
        initial: {},
        animate: {},
        exit: {},
    }
}

function splitText(text: string, split: TextSplit) {
    switch (split) {
        case "char":
            return text.split("");
        case "word":
            return text.split(" ").map(word => word + " ");
        case "line":
            return text.split("\n");
    }
}

export const SlideText: React.FC<SlideTextProps> = ({
    text,
    direction = Direction.UP,
    split = "line",
}) => {
    return (
        <motion.span
            className={styles.slideText}
            variants={getVariants()}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{delayChildren: 0.3, staggerChildren: 0.05}}>
            {splitText(text, split).map((chunk, index) => (
                chunk === "\n"
                    ? <br key={index} />
                    : <React.Fragment key={index}>
                        <Slide
                            key={index}
                            direction={direction}
                            tag={"span"}
                            asChild>
                            {chunk}
                        </Slide>
                        {split === "line" && <br />}
                    </React.Fragment>

            ))}
        </motion.span>
    );
};