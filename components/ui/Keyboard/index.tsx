"use client";

import React, {ReactElement, useEffect} from "react";
import styles from "./index.module.css";
import {KEYBOARD_LAYOUT_WINDOWS_GERMAN, MAPPING_KEYCODE_TO_KEY} from "@/utility/keys";
import {ArrowLeft, FileTextIcon} from "lucide-react";

export const Keyboard: React.FC = ({
}) => {

    useEffect(() => {
        function onKeyPress(e: KeyboardEvent) {
            console.log(e.code, e.key, elements.length);
        }
        function getMatchingElements(keyCode: string) {
            return document.querySelectorAll<HTMLButtonElement>(`[data-keycode='${keyCode}']`)
        }
        function onKeyDown(e: KeyboardEvent) {
            getMatchingElements(e.code).forEach((element) => {
                element.dataset.active = "true";
            });
        }
        function onKeyUp(e: KeyboardEvent) {
            getMatchingElements(e.code).forEach((element) => {
                element.dataset.active = "false";
            });
        }

        window.addEventListener("keydown", onKeyPress);
        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("keyup", onKeyUp);
        return () => {
            window.removeEventListener("keydown", onKeyPress);
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("keyup", onKeyUp);
        }
    }, []);

    return (
        <div className={styles.container}>
            {KEYBOARD_LAYOUT_WINDOWS_GERMAN.map((row, i) => (
                <div className={styles.row} key={i}>
                    {row.map((key) => (
                        <Key keyCode={key} key={key}/>
                    ))}
                </div>
            ))}
        </div>
    );
};

interface KeyProps {
    keyCode: string;
}

export const Key: React.FC<KeyProps> = ({
    keyCode,
}) => {

    return (
        <button
            id={"key-" + keyCode}
            data-keycode={keyCode}
            data-active={false}
            className={styles.key + " " + styles["key--type-" + keyCode]}>
            {MAPPING_KEYCODE_TO_KEY[keyCode]}
        </button>
    )
}