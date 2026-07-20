"use client";

import React, {createContext, type PropsWithChildren, useEffect, useState} from "react";

export const KeyboardContext = createContext({
    isCtrlKeyPressed: false,
    isShiftKeyPressed: false,
    isAltKeyPressed: false,
    isMetaKeyPressed: false,
});

export const KeyboardContextProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [isCtrlKeyPressed, setIsCtrlKeyPressed] = useState<boolean>(false);
    const [isShiftKeyPressed, setIsShiftKeyPressed] = useState<boolean>(false);
    const [isAltKeyPressed, setIsAltKeyPressed] = useState<boolean>(false);
    const [isMetaKeyPressed, setIsMetaKeyPressed] = useState<boolean>(false);

    useEffect(() => {
        function updateFunctionKeysPressed(e: KeyboardEvent) {
            setIsCtrlKeyPressed(e.ctrlKey);
            setIsShiftKeyPressed(e.shiftKey);
            setIsAltKeyPressed(e.altKey);
            setIsMetaKeyPressed(e.metaKey);
        }
        window.addEventListener("keydown", updateFunctionKeysPressed);
        window.addEventListener("keyup", updateFunctionKeysPressed);
        return () => {
            window.removeEventListener("keydown", updateFunctionKeysPressed);
            window.removeEventListener("keyup", updateFunctionKeysPressed);
        }
    }, []);

    return (
        <KeyboardContext.Provider value={{
            isCtrlKeyPressed,
            isShiftKeyPressed,
            isAltKeyPressed,
            isMetaKeyPressed,
        }}>
            {children}
        </KeyboardContext.Provider>
    );
}