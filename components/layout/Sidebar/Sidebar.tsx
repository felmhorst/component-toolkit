import styles from "./Sidebar.module.css";
import Link from "next/link";
import React, {useState} from "react";
import {ArrowLeftToLine, ArrowRightFromLineIcon, BookIcon, HouseIcon, LucideIcon, UserIcon} from "lucide-react";
import {bool} from "@emnapi/runtime";

export const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    return (
        <div className={`${styles.sidebar} ${isCollapsed ? styles.sidebar__collapsed : ""}`}>
            <NavGroup>
                <NavItem
                    Icon={HouseIcon}
                    label={"Discover"}
                    href={"/discover"}/>
                <NavItem
                    Icon={BookIcon}
                    label={"Library"}
                    href={"/library"}/>
                <NavItem
                    Icon={UserIcon}
                    label={"Profile"}
                    href={"/profile"}/>
            </NavGroup>

            <ul className={styles.ul}>
                <CollapseButton
                    isCollapsed={isCollapsed}
                    setIsCollapsed={setIsCollapsed}/>
            </ul>
        </div>
    );
};

export const NavGroup = ({children}: React.PropsWithChildren) => {
    return (
        <ul className={styles.ul}>
            {children}
        </ul>
    );
};

interface NavItemProps {
    label: string;
    href: string;
    Icon: LucideIcon;
}

export const NavItem: React.FC<NavItemProps> = ({
    label,
    href,
    Icon,
}) => {
    return (
        <li className={styles.li}>
            <Link
                className={styles.link}
                href={href}>
                <span className={styles.icon} aria-hidden="true">
                    <Icon size={20}/>
                </span>
                <span className={styles.label}>
                    {label}
                </span>
            </Link>
        </li>
    );
};


interface CollapseButtonProps {
    isCollapsed: boolean;
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CollapseButton: React.FC<CollapseButtonProps> = ({
    isCollapsed,
    setIsCollapsed
}) => {
    return (
        <li className={styles.li}>
            <button
                className={styles.link}
                onClick={() => setIsCollapsed(prev => !prev)}>
                <span className={styles.icon} aria-hidden="true">
                    {isCollapsed
                        ? <ArrowRightFromLineIcon size={20}/>
                        : <ArrowLeftToLine size={20}/>}
                </span>
                <span className={styles.label}>
                    collapse
                </span>
            </button>
        </li>
    );
};