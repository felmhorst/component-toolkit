"use client";

import React, { useCallback, useId, useRef, useState } from "react";
import styles from "./index.module.css";
import { ChevronDown } from "lucide-react";
import { SelectContext } from "@/components/ui/Select/SelectContext";
import { isCharacterKey } from "@/utility/isCharacterKey";


export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => {
    const {
        children,
        placeholder,
        disabled = false,
        id,
    } = props;

    const [options, setOptions] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [hovered, setHovered] = useState<string | null>(null);
    const [selected, setSelected] = useState<string | null>(null);
    const listboxId = useId();

    const closeOptions = useCallback(() => setIsOpen(false), []);

    const setSelectedAndHovered = useCallback((value: string | null) => {
        setSelected(value);
        setHovered(value);
    }, []);

    const setSelectedAndClose = useCallback((value: string | null) => {
        setSelectedAndHovered(value);
        setIsOpen(false);
    }, [setSelectedAndHovered]);

    const registerOption = useCallback((value: string) => {
        setOptions(prev => [...prev, value]);
    }, []);

    const unregisterOption = useCallback((value: string) => {
        setOptions(prev => prev.filter(option => option !== value));
    }, []);

    const [search, setSearch] = useState("");
    const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Derive the highlighted option from the search string during render.
    // This avoids calling setState inside a useEffect, which triggers cascading renders.
    const searchMatch = search !== "" ? options.find(o => o.startsWith(search)) ?? null : null;
    const effectiveHovered = searchMatch ?? hovered;

    const cancelAndClearSearch = () => {
        if (searchTimeoutRef.current !== null) {
            clearTimeout(searchTimeoutRef.current);
            searchTimeoutRef.current = null;
        }
        setSearch("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const effectiveHoveredIndex = options.findIndex(o => o === effectiveHovered);

        if (["Enter", " "].includes(e.key)) {
            e.preventDefault();
            setSelectedAndClose(effectiveHovered);
        } else if (e.key === "Escape") {
            setIsOpen(false);
        } else if (e.key === "Home") {
            cancelAndClearSearch();
            setSelectedAndHovered(options[0]);
        } else if (e.key === "End") {
            cancelAndClearSearch();
            setSelectedAndHovered(options[options.length - 1]);
        } else if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
            cancelAndClearSearch();
            setSelectedAndHovered(options[Math.max(0, effectiveHoveredIndex - 1)]);
        } else if (["ArrowRight", "ArrowDown"].includes(e.key)) {
            cancelAndClearSearch();
            setSelectedAndHovered(options[Math.min(options.length - 1, effectiveHoveredIndex + 1)]);
        } else if (isCharacterKey(e)) {
            const newSearch = search + e.key;
            const match = options.find(o => o.startsWith(newSearch)) ?? null;
            // Update hovered state immediately so the match persists after the search timeout clears
            if (match) setHovered(match);
            setSearch(newSearch);
            if (searchTimeoutRef.current !== null) clearTimeout(searchTimeoutRef.current);
            searchTimeoutRef.current = setTimeout(() => setSearch(""), 1000);
        }
    };

    return (
        <SelectContext.Provider
            value={{
                listboxId,
                registerOption,
                unregisterOption,
                selected,
                setSelected: setSelectedAndClose,
                hovered: effectiveHovered,
                setHovered,
        }}>
            <div
                className={styles.container}
                onBlur={closeOptions}
                onKeyDown={handleKeyDown}>
                <button
                    id={id}
                    className={styles.button}
                    onClick={() => setIsOpen(prev => !prev)}
                    aria-haspopup={"listbox"}
                    aria-expanded={isOpen}
                    aria-controls={listboxId}
                    disabled={disabled}>
                    <span className={styles.selected}>
                        {selected ?? placeholder ?? ""}
                    </span>
                    <div className={styles.icon}>
                        <ChevronDown/>
                    </div>
                </button>
                <ul
                    className={styles.options_container}
                    id={listboxId}
                    role={"listbox"}
                    aria-activedescendant={`${listboxId}-${effectiveHovered}`}
                    data-open={isOpen}>
                    {children}
                </ul>
            </div>
        </SelectContext.Provider>
    );
};
