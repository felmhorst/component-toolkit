import React, {useState} from "react";
import type { Decorator } from "@storybook/react";
import styles from "./withReplay.module.css";
import {RotateCwIcon} from "lucide-react";

export const withReplay: Decorator  = (Story, context) => {
    const [key, setKey] = useState<number>(0);

    function replay() {
        setKey(k => k + 1);
    }

    return (
        <div>
            <button
                className={styles.button}
                onClick={replay} aria-label="Replay">
                <RotateCwIcon size={20}/>
            </button>
            <Story key={key} {...context} />
        </div>
    );
};