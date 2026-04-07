"use client";

import {createContext, useContext} from "react";

export interface ToggleButtonGroupContextType {
    groupId: string;
    multiple: boolean;
    registerOption: (option: string) => void;
    unregisterOption: (option: string) => void;
    selected: string[];
    focused: string|null;
    select: (value: string) => void;
}

export const ToggleButtonGroupContext = createContext<ToggleButtonGroupContextType>(null!);

export const useToggleButtonGroup = () => {
    const context = useContext(ToggleButtonGroupContext);
    if (!context)
        throw new Error("Error: ToggleButton should only be used as a child of ToggleButtonGroup");
    return context;
};