import type {PropsWithChildren} from "react";
import React from "react";
import styles from "./PageWrapper.module.css";

export const PageWrapper: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <main className={styles.wrapper}>
            {children}
        </main>
    );
};