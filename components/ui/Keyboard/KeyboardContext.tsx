"use client";

import React, {createContext, type PropsWithChildren, useEffect, useState} from "react";
import {KeyboardCharacterLayout, KeyboardPhysicalLayout} from "@/utility/keyboard/keys";

export const KeyboardContext = createContext({
    isCtrlKeyPressed: false,
    isShiftKeyPressed: false,
    isAltKeyPressed: false,
    isAltGrKeyPressed: false,
    isMetaKeyPressed: false,
    isCapsLock: false,
    isNumLock: false,
    isScrollLock: false,
    characterLayout: KeyboardCharacterLayout.Qwerty,
    physicalLayout: KeyboardPhysicalLayout.Ansi,
});

interface KeyboardContextProviderProps extends PropsWithChildren {
    characterLayout?: KeyboardCharacterLayout;
    physicalLayout?: KeyboardPhysicalLayout;
}

export const KeyboardContextProvider: React.FC<KeyboardContextProviderProps> = ({
    children,
    characterLayout = KeyboardCharacterLayout.Qwerty,
    physicalLayout = KeyboardPhysicalLayout.Ansi,
}) => {
    // function keys
    const [isCtrlKeyPressed, setIsCtrlKeyPressed] = useState<boolean>(false);
    const [isShiftKeyPressed, setIsShiftKeyPressed] = useState<boolean>(false);
    const [isAltKeyPressed, setIsAltKeyPressed] = useState<boolean>(false);
    const [isAltGrKeyPressed, setIsAltGrKeyPressed] = useState<boolean>(false);
    const [isMetaKeyPressed, setIsMetaKeyPressed] = useState<boolean>(false);

    // lock keys
    const [isCapsLock, setIsCapsLock] = useState<boolean>(false);
    const [isNumLock, setIsNumLock] = useState<boolean>(false);
    const [isScrollLock, setIsScrollLock] = useState<boolean>(false);

    useEffect(() => {
        function updateFunctionKeysPressed(e: KeyboardEvent | MouseEvent) {
            setIsCtrlKeyPressed(e.ctrlKey);
            setIsShiftKeyPressed(e.shiftKey);
            setIsAltKeyPressed(e.altKey);
            setIsMetaKeyPressed(e.metaKey);
            updateModifierStates(e);
        }
        function updateModifierStates(e: KeyboardEvent | MouseEvent) {
            if (!e.getModifierState)
                return;
            setIsAltGrKeyPressed(e.getModifierState("AltGraph"));
            setIsCapsLock(e.getModifierState("CapsLock"));
            setIsNumLock(e.getModifierState("NumLock"));
            setIsScrollLock(e.getModifierState("ScrollLock"));
        }
        window.addEventListener("keydown", updateFunctionKeysPressed);
        window.addEventListener("keyup", updateFunctionKeysPressed);
        window.addEventListener("click", updateFunctionKeysPressed);
        return () => {
            window.removeEventListener("keydown", updateFunctionKeysPressed);
            window.removeEventListener("keyup", updateFunctionKeysPressed);
            window.removeEventListener("click", updateFunctionKeysPressed);
        }
    }, []);

    return (
        <KeyboardContext.Provider value={{
            isCtrlKeyPressed,
            isShiftKeyPressed,
            isAltKeyPressed,
            isAltGrKeyPressed,
            isMetaKeyPressed,
            isCapsLock,
            isNumLock,
            isScrollLock,
            characterLayout,
            physicalLayout
        }}>
            {children}
        </KeyboardContext.Provider>
    );
}