import React, {PropsWithChildren} from "react";
import styles from "./PageWrapper.module.css";

export const PageWrapper: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <main className={styles.wrapper}>
            {children}
        </main>
    );
};