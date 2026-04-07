"use client";

import {createContext, useContext} from "react";

export interface SelectContextType {
    listboxId: string;
    registerOption: (option: string) => void;
    unregisterOption: (option: string) => void;
    selected: string | null;
    setSelected: (option: string | null) => void;
    hovered: string | null;
    setHovered: (option: string | null) => void;
}

export const SelectContext = createContext<SelectContextType>(null!);

export const useSelect = () => {
    const context = useContext(SelectContext);
    if (!context)
        throw new Error("Error: Option should only be used as a child of Select");
    return context;
};