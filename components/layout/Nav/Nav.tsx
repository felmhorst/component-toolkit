"use client";

import Link from "next/link";
import styles from "./Nav.module.css";
import {usePathname} from "next/navigation";

export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <NavItem
                    label={"Home"}
                    href={"/"}/>
                <NavItem
                    label={"About"}
                    href={"/about"}/>
            </ul>
        </nav>
    );
};

interface NavItemProps {
    label: string;
    href: string;
}

const NavItem = ({
    label,
    href,
}: NavItemProps) => {
    const pathname = usePathname();
    console.log("path", pathname);
    return (
        <li className={styles.li}>
            <Link href={href} className={styles.link}>
                {label}
            </Link>
        </li>
    );
};