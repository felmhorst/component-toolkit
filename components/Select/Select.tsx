"use client";

import React, {useCallback, useEffect, useId, useState} from "react";
import styles from "./Select.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {SelectContext} from "@/components/Select/SelectContext";
import {isCharacterKey} from "@/utility/isCharacterKey";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = (props: SelectProps) => {
    const {
        children,
        placeholder,
        ...rest
    } = props;

    const [options, setOptions] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [hovered, setHovered] = useState<string|null>(null);
    const [selected, setSelected] = useState<string|null>(null);
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
    const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout|null>(null);

    const handleKeyDown = useCallback((e) => {
        const hoveredIndex = options.findIndex((option) => option === hovered);

        if (["Enter"].includes(e.key)) {
            e.preventDefault();
            setSelectedAndClose(hovered);
        } else if (["Escape"].includes(e.key))
            setIsOpen(false);
        else if (["Home"].includes(e.key))
            setSelectedAndHovered(options[0]);
        else if (["End"].includes(e.key))
            setSelectedAndHovered(options[options.length - 1]);
        else if (["ArrowLeft", "ArrowUp"].includes(e.key))
            setSelectedAndHovered(options[Math.max(0, hoveredIndex - 1)]);
        else if (["ArrowRight", "ArrowDown"].includes(e.key))
            setSelectedAndHovered(options[Math.min(options.length - 1, hoveredIndex + 1)]);
        else if (isCharacterKey(e)) {
            setSearch(prev => prev + e.key);
            const timeoutId = setTimeout(() => setSearch(""), 1000);
            if (searchTimeout)
                clearTimeout(searchTimeout);
            setSearchTimeout(timeoutId)
        }
    }, [options, hovered, searchTimeout, setSelectedAndHovered, setSelectedAndClose]);

    useEffect(() => {
        if (search === "")
            return;
        const match = options.find((option) => option.startsWith(search));
        if (match)
            setSelectedAndHovered(match)
    }, [options, search, setSelectedAndHovered]);

    return (
        <SelectContext.Provider
            value={{
                listboxId,
                options,
                registerOption,
                unregisterOption,
                selected,
                setSelected: setSelectedAndClose,
                hovered,
                setHovered,
        }}>
            <div
                className={styles.container}
                onBlur={closeOptions}
                onKeyDown={handleKeyDown}>
                <button
                    className={styles.button}
                    onClick={() => setIsOpen(prev => !prev)}
                    aria-haspopup={"listbox"}
                    aria-expanded={isOpen}
                    aria-controls={listboxId}>
                    <span className={styles.selected}>
                        {selected ?? placeholder ?? ""}
                    </span>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faChevronDown}/>
                    </div>
                </button>
                <ul
                    className={styles.options_container}
                    id={listboxId}
                    role={"listbox"}
                    aria-activedescendant={`${listboxId}-${selected}`}
                    data-open={isOpen}>
                    {children}
                </ul>
            </div>
        </SelectContext.Provider>
    );
};