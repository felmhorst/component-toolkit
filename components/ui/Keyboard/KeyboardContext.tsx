"use client";

import React, {createContext, type PropsWithChildren, useEffect, useMemo, useState} from "react";
import {KeyboardCharacterLayout, KeyboardPhysicalLayout} from "@/utility/keyboard/keys.types";
import {mapEventToKey} from "@/utility/keyboard/mapEventToKey";
import {isModifierKey} from "@/utility/keyboard/isModifierKey";

export const KeyboardContext = createContext<{
    deadKey: string|null;
    isCtrlKeyPressed: boolean,
    isShiftKeyPressed: boolean,
    isAltKeyPressed: boolean,
    isAltGrKeyPressed: boolean,
    isMetaKeyPressed: boolean,
    isCapsLock: boolean,
    isNumLock: boolean,
    isScrollLock: boolean,
    characterLayout: KeyboardCharacterLayout,
    physicalLayout: KeyboardPhysicalLayout,
}>({
    deadKey: null,
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

    // last key
    const [deadKey, setDeadKey] = useState<string|null>(null);

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
        function updateDeadKey(e: KeyboardEvent) {
            if (isModifierKey(e.key))
                return;
            if (e.key !== "Dead") {
                setDeadKey(null);
                return;
            }
            const key = mapEventToKey(e, characterLayout);
            if (!!key)
                setDeadKey(key);
        }
        function handleKeydown(e: KeyboardEvent) {
            updateDeadKey(e);
            updateFunctionKeysPressed(e);
        }

        window.addEventListener("keydown", handleKeydown);
        window.addEventListener("keyup", updateFunctionKeysPressed);
        window.addEventListener("click", updateFunctionKeysPressed);
        return () => {
            window.removeEventListener("keydown", handleKeydown);
            window.removeEventListener("keyup", updateFunctionKeysPressed);
            window.removeEventListener("click", updateFunctionKeysPressed);
        }
    }, [characterLayout]);

    const resolvedIsAltGrKeyPressed = isAltGrKeyPressed
        || (isAltKeyPressed && isCtrlKeyPressed && !isShiftKeyPressed && !isAltGrKeyPressed && !isMetaKeyPressed);

    const contextValue = useMemo(() => ({
        deadKey,
        isCtrlKeyPressed,
        isShiftKeyPressed,
        isAltKeyPressed,
        isAltGrKeyPressed: resolvedIsAltGrKeyPressed,
        isMetaKeyPressed,
        isCapsLock,
        isNumLock,
        isScrollLock,
        characterLayout,
        physicalLayout
    }), [
        deadKey,
        isCtrlKeyPressed,
        isShiftKeyPressed,
        isAltKeyPressed,
        resolvedIsAltGrKeyPressed,
        isMetaKeyPressed,
        isCapsLock,
        isNumLock,
        isScrollLock,
        characterLayout,
        physicalLayout
    ]);

    return (
        <KeyboardContext.Provider value={contextValue}>
            {children}
        </KeyboardContext.Provider>
    );
}