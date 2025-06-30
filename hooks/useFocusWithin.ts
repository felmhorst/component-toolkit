import React, {useEffect, useState} from "react";


export const useFocusWithin = (ref: React.RefObject<HTMLElement|null>): boolean => {
    const [isFocusWithin, setIsFocusWithin] = useState<boolean>(false);

    useEffect(() => {
        const element = ref?.current;
        if (!element)
            return;

        const handleFocusIn = () => setIsFocusWithin(true);
        const handleFocusOut = () => setIsFocusWithin(false);

        element.addEventListener("focusin", handleFocusIn);
        element.addEventListener("focusout", handleFocusOut);
        return () => {
            element.removeEventListener("focusin", handleFocusIn);
            element.removeEventListener("focusout", handleFocusOut);
        }
    }, []);

    return isFocusWithin;
};