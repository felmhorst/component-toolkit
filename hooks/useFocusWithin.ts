import React, {useEffect, useState} from "react";

interface useFocusWithinProps {
    onFocusin?: (e: HTMLElementEventMap["focusin"]) => void;
    onFocusout?: (e: HTMLElementEventMap["focusout"]) => void;
}

export const useFocusWithin = (ref: React.RefObject<HTMLElement|null>, props?: useFocusWithinProps): boolean => {
    const {
        onFocusin,
        onFocusout
    } = props ?? {};
    const [isFocusWithin, setIsFocusWithin] = useState<boolean>(false);

    useEffect(() => {
        const element = ref?.current;
        if (!element)
            return;

        const handleFocusIn = (e) => {
            setIsFocusWithin(true);
            if (onFocusin)
                onFocusin(e);
        }
        const handleFocusOut = (e) => {
            setIsFocusWithin(false);
            if (onFocusout)
                onFocusout(e);
        }

        element.addEventListener("focusin", handleFocusIn);
        element.addEventListener("focusout", handleFocusOut);
        return () => {
            element.removeEventListener("focusin", handleFocusIn);
            element.removeEventListener("focusout", handleFocusOut);
        }
    }, [onFocusin, onFocusout]);

    return isFocusWithin;
};